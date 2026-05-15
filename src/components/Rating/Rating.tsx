import { Icon } from '../Icon'

const TOTAL_STARS = 5

interface RatingProps {
  value: number
  count?: number
  className?: string
}

export function Rating({ value, count, className }: RatingProps) {
  const filled = Math.round(Math.min(Math.max(value, 0), TOTAL_STARS))

  return (
    <div className={`inline-flex items-center gap-1.5 ${className ?? ''}`}>
      <div className="flex items-center" aria-label={`${value} out of ${TOTAL_STARS} stars`}>
        {Array.from({ length: TOTAL_STARS }, (_, i) => (
          <Icon
            key={i}
            name={i < filled ? 'StarFilledIcon' : 'StarIcon'}
            size={14}
            color={i < filled ? 'var(--warning)' : 'var(--border)'}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-text-muted text-xs">({count.toLocaleString()})</span>
      )}
    </div>
  )
}
