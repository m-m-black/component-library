import { cn } from '../../lib/utils'

interface PriceDisplayProps {
  price: number
  originalPrice?: number
  currency?: string
  className?: string
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
}

export function PriceDisplay({
  price,
  originalPrice,
  currency = 'USD',
  className,
}: PriceDisplayProps) {
  const isDiscounted = originalPrice !== undefined && originalPrice > price

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <span className="text-text font-semibold">{formatPrice(price, currency)}</span>
      {isDiscounted && (
        <del className="text-text-muted text-sm">
          {formatPrice(originalPrice, currency)}
        </del>
      )}
    </div>
  )
}
