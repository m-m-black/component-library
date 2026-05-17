import type { Product } from '../../api/types'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { PriceDisplay } from '../PriceDisplay'

function QuantityButton({
  icon,
  label,
  onClick,
  disabled,
}: {
  icon: 'MinusIcon' | 'PlusIcon'
  label: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <Icon name={icon} size={12} />
    </button>
  )
}

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
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <div className="flex items-center gap-2">
          <QuantityButton
            icon="MinusIcon"
            label="Decrement quantity"
            disabled={quantity <= 1}
            onClick={() => onQuantityChange(quantity - 1)}
          />
          <span className="text-text w-6 text-center text-sm font-medium">{quantity}</span>
          <QuantityButton
            icon="PlusIcon"
            label="Increment quantity"
            onClick={() => onQuantityChange(quantity + 1)}
          />
        </div>
        <Button variant="ghost" size="sm" aria-label="Remove item" onClick={onRemove}>
          <span className="text-destructive">
            <Icon name="TrashIcon" size={14} />
          </span>
        </Button>
      </div>
    </div>
  )
}
