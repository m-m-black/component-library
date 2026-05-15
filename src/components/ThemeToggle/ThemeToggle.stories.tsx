import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeToggle } from './ThemeToggle'

const meta = {
  component: ThemeToggle,
  tags: [],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-text-muted text-xs mb-2">Standalone toggle</p>
        <ThemeToggle />
      </div>
      <div>
        <p className="text-text-muted text-xs mb-2">In a toolbar context</p>
        <div className="inline-flex items-center gap-2 rounded border border-border bg-surface px-3 py-2">
          <span className="text-text text-sm font-medium">Component Library</span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  ),
}
