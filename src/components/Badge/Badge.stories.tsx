import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  component: Badge,
  tags: [],
  argTypes: {
    variant: {
      control: 'select',
      options: ['sale', 'new', 'out-of-stock'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Sale: Story = {
  args: { variant: 'sale' },
}

export const New: Story = {
  args: { variant: 'new' },
}

export const OutOfStock: Story = {
  args: { variant: 'out-of-stock' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="new" />
      <Badge variant="sale" />
      <Badge variant="out-of-stock" />
    </div>
  ),
}
