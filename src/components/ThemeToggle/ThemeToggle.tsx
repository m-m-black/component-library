import { useState } from 'react'
import { Icon } from '../Icon'
import { cn } from '../../lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  const toggle = () => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'inline-flex items-center justify-center rounded p-2 text-text-muted',
        'hover:bg-surface hover:text-text transition-colors cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        className
      )}
    >
      <Icon name={dark ? 'MoonIcon' : 'SunIcon'} size={18} />
    </button>
  )
}
