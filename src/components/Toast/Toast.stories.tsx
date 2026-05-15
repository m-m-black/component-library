import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as RadixToast from '@radix-ui/react-toast'
import { Toast } from './Toast'
import { Button } from '../Button'

const meta = {
  component: Toast,
  tags: [],
  decorators: [
    (Story) => (
      <RadixToast.Provider>
        <Story />
        <RadixToast.Viewport className="fixed bottom-4 right-4 z-50 flex w-80 flex-col gap-2" />
      </RadixToast.Provider>
    ),
  ],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

function ToastDemo({
  buttonLabel = 'Show toast',
  ...props
}: Partial<React.ComponentProps<typeof Toast>> & { buttonLabel?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>{buttonLabel}</Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Added to cart"
        description="Your item has been added successfully."
        {...props}
      />
    </>
  )
}

export const Default: Story = {
  args: { open: false, onOpenChange: () => {}, title: 'Added to cart' },
  render: () => <ToastDemo />,
}

export const WithDescription: Story = {
  args: { open: false, onOpenChange: () => {}, title: 'Added to cart' },
  render: () => (
    <ToastDemo
      title="Added to cart"
      description="2× Running Shoes have been added to your cart."
    />
  ),
}

export const Success: Story = {
  args: { open: false, onOpenChange: () => {}, title: 'Order placed' },
  render: () => (
    <ToastDemo variant="success" title="Order placed" description="Your order is on its way." />
  ),
}

export const Destructive: Story = {
  args: { open: false, onOpenChange: () => {}, title: 'Something went wrong' },
  render: () => (
    <ToastDemo
      variant="destructive"
      title="Something went wrong"
      description="Please try again later."
    />
  ),
}

export const AllVariants: Story = {
  args: { open: false, onOpenChange: () => {}, title: 'Notification' },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ToastDemo buttonLabel="Add to cart" title="Item added" />
      <ToastDemo buttonLabel="Place order" variant="success" title="Order placed" description="Your order is confirmed." />
      <ToastDemo buttonLabel="Trigger error" variant="destructive" title="Error" description="Something went wrong." />
    </div>
  ),
}
