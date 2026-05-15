import type { Meta, StoryObj } from '@storybook/react-vite'
import { PriceDisplay } from './PriceDisplay'

const meta = {
  component: PriceDisplay,
  tags: [],
} satisfies Meta<typeof PriceDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: { price: 29.99 },
}

export const Discounted: Story = {
  args: { price: 19.99, originalPrice: 29.99 },
}

export const LargeAmount: Story = {
  args: { price: 1299.0, originalPrice: 1599.0 },
}

export const AllVariants: Story = {
  args: { price: 29.99 },
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-text-muted text-xs mb-1">Standard</p>
        <PriceDisplay price={29.99} />
      </div>
      <div>
        <p className="text-text-muted text-xs mb-1">Discounted</p>
        <PriceDisplay price={19.99} originalPrice={29.99} />
      </div>
      <div>
        <p className="text-text-muted text-xs mb-1">Large amount</p>
        <PriceDisplay price={1299.0} originalPrice={1599.0} />
      </div>
    </div>
  ),
}
