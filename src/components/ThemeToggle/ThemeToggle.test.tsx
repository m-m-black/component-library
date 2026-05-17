import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeToggle } from './ThemeToggle'

afterEach(() => {
  document.documentElement.classList.remove('dark')
})

describe('ThemeToggle', () => {
  it('renders a button with an accessible label', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeVisible()
  })

  it('shows the sun icon in light mode', () => {
    render(<ThemeToggle />)
    expect(screen.getByLabelText('Switch to dark mode')).toBeVisible()
  })

  it('adds the dark class to html element when clicked', async () => {
    render(<ThemeToggle />)
    await userEvent.click(screen.getByRole('button'))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes the dark class when clicked again', async () => {
    render(<ThemeToggle />)
    await userEvent.click(screen.getByRole('button'))
    await userEvent.click(screen.getByRole('button'))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('updates the aria-label to reflect dark mode after toggle', async () => {
    render(<ThemeToggle />)
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeVisible()
  })

  it('initialises in dark mode if html already has dark class', () => {
    document.documentElement.classList.add('dark')
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeVisible()
  })
})
