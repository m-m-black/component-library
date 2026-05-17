import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders "New" label for new variant', () => {
    render(<Badge variant="new" />)
    expect(screen.getByText('New')).toBeVisible()
  })

  it('renders "Sale" label for sale variant', () => {
    render(<Badge variant="sale" />)
    expect(screen.getByText('Sale')).toBeVisible()
  })

  it('renders "Out of stock" label for out-of-stock variant', () => {
    render(<Badge variant="out-of-stock" />)
    expect(screen.getByText('Out of stock')).toBeVisible()
  })

  it('defaults to new variant', () => {
    render(<Badge />)
    expect(screen.getByText('New')).toBeVisible()
  })
})
