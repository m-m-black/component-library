import type { Product } from '../../api/types'
import { Badge, type BadgeProps } from '../Badge'
import { Button } from '../Button'
import { PriceDisplay } from '../PriceDisplay'
import { Rating } from '../Rating'

export interface ProductCardProps {
  product: Product
  badge?: BadgeProps['variant']
  originalPrice?: number
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, badge, originalPrice, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden flex flex-col w-72 h-96">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain bg-white p-4"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-text line-clamp-2 text-sm font-medium">{product.title}</h3>
        <Rating value={product.rating.rate} count={product.rating.count} />
        <div className="flex items-center gap-2">
          <PriceDisplay price={product.price} originalPrice={originalPrice} />
          {badge && <Badge variant={badge} />}
        </div>
        <Button
          className="mt-auto w-full"
          disabled={badge === 'out-of-stock'}
          onClick={() => onAddToCart?.(product)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
