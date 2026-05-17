import type { Meta, StoryObj } from '@storybook/react-vite'
import { Drawer, DrawerClose } from './Drawer'
import { Button } from '../Button'

const meta = {
  component: Drawer,
  tags: [],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Button>Open drawer</Button>,
    title: 'Your cart',
    description: 'Review the items in your cart before checkout.',
    children: (
      <div className="flex flex-col gap-4">
        <p className="text-text-muted text-sm">Your cart is empty.</p>
        <DrawerClose>
          <Button className="w-full">Continue shopping</Button>
        </DrawerClose>
      </div>
    ),
  },
}
