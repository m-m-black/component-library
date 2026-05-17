import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input, SearchBar } from './Input'

describe('Input', () => {
  it('renders with a placeholder', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeVisible()
  })

  it('renders an icon when icon prop is provided', () => {
    const { container } = render(<Input icon="MagnifyingGlassIcon" />)
    expect(container.querySelector('svg')).toBeVisible()
  })

  it('does not render an icon when icon prop is omitted', () => {
    const { container } = render(<Input />)
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('fires onChange when the user types', async () => {
    const onChange = vi.fn()
    render(<Input onChange={onChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'hello')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays a controlled value', () => {
    render(<Input value="test value" onChange={() => {}} />)
    expect(screen.getByDisplayValue('test value')).toBeVisible()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})

describe('SearchBar', () => {
  it('renders with the default search placeholder', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Search…')).toBeVisible()
  })

  it('renders a search icon', () => {
    const { container } = render(<SearchBar />)
    expect(container.querySelector('svg')).toBeVisible()
  })

  it('accepts a custom placeholder', () => {
    render(<SearchBar placeholder="Search products…" />)
    expect(screen.getByPlaceholderText('Search products…')).toBeVisible()
  })
})
