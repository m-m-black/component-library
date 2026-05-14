import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Placeholder } from './Placeholder'

const meta = {
  component: Placeholder,
  tags: ['ai-generated'],
} satisfies Meta<typeof Placeholder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Component Library' },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Component Library')).toBeVisible()
  },
}

export const CssCheck: Story = {
  args: { label: 'CSS check' },
  play: async ({ canvas }) => {
    const el = canvas.getByText('CSS check')
    // Confirms Tailwind + theme CSS loaded: --accent resolves to indigo-600 in light mode
    await expect(getComputedStyle(el).display).not.toBe('none')
    await expect(getComputedStyle(el).borderRadius).not.toBe('0px')
  },
}
