import { useEffect, useRef, useState } from 'react'
import type { Product } from '../../api/types'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { ProductCard } from '../ProductCard'

export interface ProductCarouselProps {
  products: Product[]
  onAddToCart?: (product: Product) => void
}

export function ProductCarousel({ products, onAddToCart }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const startSentinelRef = useRef<HTMLDivElement>(null)
  const endSentinelRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const scroll = scrollRef.current
    const start = startSentinelRef.current
    const end = endSentinelRef.current
    if (!scroll || !start || !end) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === start) setCanScrollLeft(!entry.isIntersecting)
          if (entry.target === end) setCanScrollRight(!entry.isIntersecting)
        })
      },
      { root: scroll, threshold: 0 }
    )

    observer.observe(start)
    observer.observe(end)
    return () => observer.disconnect()
  }, [products])

  if (products.length === 0) return null

  function getCards(): HTMLElement[] {
    return Array.from(scrollRef.current?.querySelectorAll('[data-carousel-card]') ?? []) as HTMLElement[]
  }

  function handleScrollRight() {
    const el = scrollRef.current
    if (!el) return
    const { left: cLeft, right: cRight } = el.getBoundingClientRect()
    const rightmost = [...getCards()].reverse().find((c) => c.getBoundingClientRect().left < cRight)
    if (rightmost) el.scrollBy({ left: rightmost.getBoundingClientRect().left - cLeft, behavior: 'smooth' })
  }

  function handleScrollLeft() {
    const el = scrollRef.current
    if (!el) return
    const { left: cLeft, right: cRight } = el.getBoundingClientRect()
    const leftmost = getCards().find((c) => c.getBoundingClientRect().right > cLeft)
    if (leftmost) el.scrollBy({ left: leftmost.getBoundingClientRect().right - cRight, behavior: 'smooth' })
  }

  return (
    <div className="group relative">
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          <div ref={startSentinelRef} className="shrink-0 w-px" />
          {products.map((product) => (
            <div key={product.id} data-carousel-card className="w-64 shrink-0 sm:w-72">
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
          <div ref={endSentinelRef} className="shrink-0 w-px" />
        </div>
      </div>

      {canScrollLeft && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100">
          <Button variant="secondary" size="sm" aria-label="Previous" onClick={handleScrollLeft}>
            <Icon name="ChevronLeftIcon" size={16} />
          </Button>
        </div>
      )}
      {canScrollRight && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100">
          <Button variant="secondary" size="sm" aria-label="Next" onClick={handleScrollRight}>
            <Icon name="ChevronRightIcon" size={16} />
          </Button>
        </div>
      )}
    </div>
  )
}
