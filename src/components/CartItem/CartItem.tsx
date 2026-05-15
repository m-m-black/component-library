import type { Product } from '../../api/types'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { PriceDisplay } from '../PriceDisplay'

export interface CartItemProps {
  product: Product
  quantity: number
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}

export function CartItem({ product, quantity, onQuantityChange, onRemove }: CartItemProps) {
  return (
    <div className="bg-surface border border-border flex items-center gap-4 rounded-lg p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-16 w-16 shrink-0 rounded object-contain bg-white p-1"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-text truncate text-sm font-medium">{product.title}</p>
        <PriceDisplay price={product.price} />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          aria-label="Decrement quantity"
          disabled={quantity <= 1}
          onClick={() => onQuantityChange(quantity - 1)}
        >
          <Icon name="MinusIcon" size={12} />
        </Button>
        <span className="text-text w-6 text-center text-sm font-medium">{quantity}</span>
        <Button
          variant="secondary"
          size="sm"
          aria-label="Increment quantity"
          onClick={() => onQuantityChange(quantity + 1)}
        >
          <Icon name="PlusIcon" size={12} />
        </Button>
      </div>
      <Button variant="ghost" size="sm" aria-label="Remove item" onClick={onRemove}>
        <Icon name="TrashIcon" size={14} color="var(--destructive)" />
      </Button>
    </div>
  )
}
