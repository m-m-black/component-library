import type { Meta, StoryObj } from '@storybook/react-vite'
import { Rating } from './Rating'

const meta = {
  component: Rating,
  tags: [],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
    count: { control: 'number' },
  },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 4, count: 120 },
}

export const WithoutCount: Story = {
  args: { value: 3.5 },
}

export const FullRating: Story = {
  args: { value: 5, count: 2048 },
}

export const LowRating: Story = {
  args: { value: 1, count: 5 },
}

export const NoRating: Story = {
  args: { value: 0, count: 0 },
}

export const AllVariants: Story = {
  args: { value: 4, count: 120 },
  render: () => (
    <div className="flex flex-col gap-3">
      {([5, 4, 3, 2, 1, 0] as const).map((v) => (
        <div key={v} className="flex items-center gap-4">
          <span className="text-text-muted text-xs w-4">{v}</span>
          <Rating value={v} count={v * 42} />
        </div>
      ))}
    </div>
  ),
}
