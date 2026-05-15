import * as Dialog from '@radix-ui/react-dialog'
import { Icon } from '../Icon'
import { cn } from '../../lib/utils'

export function DrawerClose({ children }: { children: React.ReactNode }) {
  return <Dialog.Close asChild>{children}</Dialog.Close>
}

export interface DrawerProps {
  trigger: React.ReactNode
  title: string
  description?: string
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Drawer({ trigger, title, description, children, open, onOpenChange }: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/50',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-surface-raised p-6 shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
          )}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <Dialog.Title className="text-text text-lg font-semibold">{title}</Dialog.Title>
            <Dialog.Close
              className={cn(
                'rounded p-1 text-text-muted hover:text-text hover:bg-surface transition-colors cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}
              aria-label="Close"
            >
              <Icon name="Cross2Icon" size={16} />
            </Dialog.Close>
          </div>
          {description && (
            <Dialog.Description className="text-text-muted text-sm mb-4">
              {description}
            </Dialog.Description>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
