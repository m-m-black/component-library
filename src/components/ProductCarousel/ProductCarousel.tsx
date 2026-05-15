import { useState } from 'react'
import type { Product } from '../../api/types'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { ProductCard } from '../ProductCard'

// Coupled to ProductCard's w-72 (288px) and the gap-4 (16px) between items
const CARD_WIDTH = 288
const GAP = 16

export interface ProductCarouselProps {
  products: Product[]
  onAddToCart?: (product: Product) => void
}

export function ProductCarousel({ products, onAddToCart }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(products.length)
  const [animated, setAnimated] = useState(true)

  if (products.length === 0) return null

  const extended = [...products, ...products, ...products]

  function advance(delta: number) {
    setAnimated(true)
    setCurrentIndex((i) => i + delta)
  }

  function handleTransitionEnd() {
    if (currentIndex >= products.length * 2) {
      setAnimated(false)
      setCurrentIndex((i) => i - products.length)
    } else if (currentIndex < products.length) {
      setAnimated(false)
      setCurrentIndex((i) => i + products.length)
    }
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={cn('flex gap-4', animated && 'transition-transform duration-300 ease-in-out')}
          style={{ transform: `translateX(${-currentIndex * (CARD_WIDTH + GAP)}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((product, i) => (
            <div key={i} className="shrink-0">
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <Button variant="secondary" size="sm" aria-label="Previous" onClick={() => advance(-1)}>
          <Icon name="ChevronLeftIcon" size={16} />
        </Button>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Button variant="secondary" size="sm" aria-label="Next" onClick={() => advance(1)}>
          <Icon name="ChevronRightIcon" size={16} />
        </Button>
      </div>
    </div>
  )
}
