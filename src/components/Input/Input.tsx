import { cn } from '../../lib/utils'
import { Icon, type IconName } from '../Icon'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconName
}

export function Input({ icon, className, ...props }: InputProps) {
  return (
    <div className="relative inline-flex w-full items-center">
      {icon && (
        <span className="pointer-events-none absolute left-3 text-text-muted">
          <Icon name={icon} size={16} />
        </span>
      )}
      <input
        className={cn(
          'w-full rounded border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-colors',
          icon && 'pl-9',
          className
        )}
        {...props}
      />
    </div>
  )
}

export function SearchBar(props: Omit<InputProps, 'icon' | 'type'>) {
  return <Input icon="MagnifyingGlassIcon" type="search" placeholder="Search…" {...props} />
}
