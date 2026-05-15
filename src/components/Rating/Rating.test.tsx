import { render, screen } from '@testing-library/react'
import { Rating } from './Rating'

describe('Rating', () => {
  it('renders 5 star icons in total', () => {
    const { container } = render(<Rating value={3} />)
    expect(container.querySelectorAll('svg')).toHaveLength(5)
  })

  it('has the correct accessible label', () => {
    render(<Rating value={4} />)
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
  })

  it('renders the review count', () => {
    render(<Rating value={4} count={120} />)
    expect(screen.getByText('(120)')).toBeInTheDocument()
  })

  it('formats large counts with locale separators', () => {
    render(<Rating value={5} count={2048} />)
    expect(screen.getByText('(2,048)')).toBeInTheDocument()
  })

  it('does not render a count when count is not provided', () => {
    const { container } = render(<Rating value={3} />)
    expect(container.querySelector('span')).not.toBeInTheDocument()
  })

  it('clamps value above 5 to 5 stars', () => {
    render(<Rating value={10} />)
    expect(screen.getByLabelText('10 out of 5 stars')).toBeInTheDocument()
  })

  it('clamps negative value to 0 stars', () => {
    render(<Rating value={-1} />)
    expect(screen.getByLabelText('-1 out of 5 stars')).toBeInTheDocument()
  })
})
