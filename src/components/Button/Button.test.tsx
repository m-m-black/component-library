import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Add to cart</Button>)
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('is disabled and aria-busy during loading', () => {
    render(<Button loading>Saving</Button>)
    const button = screen.getByRole('button', { name: /saving/i })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('does not fire onClick when loading', async () => {
    const onClick = vi.fn()
    render(
      <Button loading onClick={onClick}>
        Saving
      </Button>
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('applies the destructive variant', () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
  })
})
