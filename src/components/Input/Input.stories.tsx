import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input, SearchBar } from './Input'

const meta = {
  component: Input,
  tags: [],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text…' },
}

export const WithIcon: Story = {
  args: { icon: 'MagnifyingGlassIcon', placeholder: 'Search…' },
}

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
}

export const Search: Story = {
  render: () => <SearchBar />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Default input" />
      <Input icon="MagnifyingGlassIcon" placeholder="With icon" />
      <Input icon="PersonIcon" placeholder="With person icon" />
      <Input placeholder="Disabled" disabled />
      <SearchBar />
    </div>
  ),
}
