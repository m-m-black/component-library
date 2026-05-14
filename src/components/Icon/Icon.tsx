import * as RadixIcons from '@radix-ui/react-icons'

export type IconName = keyof typeof RadixIcons

interface IconProps {
  name: IconName
  size?: number
  color?: string
  className?: string
  'aria-label'?: string
}

export function Icon({ name, size = 16, color = 'currentColor', className, 'aria-label': ariaLabel }: IconProps) {
  const IconComponent = RadixIcons[name]
  return (
    <IconComponent
      width={size}
      height={size}
      style={{ color }}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    />
  )
}
