import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-wide',
  {
    variants: {
      variant: {
        sale: 'bg-warning/20 text-warning',
        new: 'bg-accent/20 text-accent',
        'out-of-stock': 'bg-destructive/20 text-destructive',
      },
    },
    defaultVariants: {
      variant: 'new',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const labels: Record<NonNullable<BadgeProps['variant']>, string> = {
  sale: 'Sale',
  new: 'New',
  'out-of-stock': 'Out of stock',
}

export function Badge({ variant = 'new', className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {labels[variant!]}
    </span>
  )
}
