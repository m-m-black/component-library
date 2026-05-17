import * as RadixToast from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Icon } from '../Icon'

const toastVariants = cva(
  [
    'flex items-start justify-between gap-4 rounded-lg border p-4 shadow-xl',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-80 data-[state=open]:fade-in-0',
    'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full',
  ],
  {
    variants: {
      variant: {
        default: 'bg-surface-raised border-border text-text',
        success: 'bg-success-subtle border-success text-text',
        destructive: 'bg-destructive-subtle border-destructive text-text',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface ToastProps extends VariantProps<typeof toastVariants> {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  duration?: number
}

export function Toast({ open, onOpenChange, title, description, duration = 4000, variant }: ToastProps) {
  return (
    <RadixToast.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={duration}
      className={cn(toastVariants({ variant }))}
    >
      <div className="flex flex-col gap-1">
        <RadixToast.Title className="text-sm font-semibold">{title}</RadixToast.Title>
        {description && (
          <RadixToast.Description className="text-text-muted text-xs">
            {description}
          </RadixToast.Description>
        )}
      </div>
      <RadixToast.Close
        className={cn(
          'rounded p-0.5 text-text-muted hover:text-text transition-colors cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
        )}
        aria-label="Dismiss"
      >
        <Icon name="Cross2Icon" size={14} />
      </RadixToast.Close>
    </RadixToast.Root>
  )
}

export function Toaster() {
  return (
    <RadixToast.Provider>
      <RadixToast.Viewport className="fixed bottom-4 right-4 z-50 flex w-80 flex-col gap-2" />
    </RadixToast.Provider>
  )
}
