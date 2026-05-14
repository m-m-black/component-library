import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'

const meta = {
  component: Icon,
  tags: [],
  argTypes: {
    name: { control: 'text' },
    size: { control: { type: 'range', min: 12, max: 64, step: 4 } },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'StarIcon',
    size: 24,
    color: 'currentColor',
  },
}

export const Small: Story = {
  args: { name: 'HeartIcon', size: 12 },
}

export const Large: Story = {
  args: { name: 'HeartIcon', size: 48 },
}

export const Coloured: Story = {
  args: { name: 'SunIcon', size: 32, color: '#f59e0b' },
}

export const Showcase: Story = {
  args: { name: 'StarIcon' },
  render: () => (
    <div className="flex flex-wrap gap-4 text-text">
      {(
        [
          'StarIcon',
          'HeartIcon',
          'SunIcon',
          'MoonIcon',
          'MagnifyingGlassIcon',
          'BackpackIcon',
          'TrashIcon',
          'PlusIcon',
          'MinusIcon',
          'Cross2Icon',
          'CheckIcon',
          'BellIcon',
        ] as const
      ).map((name) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon name={name} size={24} />
          <span className="text-text-muted text-xs">{name.replace('Icon', '')}</span>
        </div>
      ))}
    </div>
  ),
}
