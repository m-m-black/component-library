import { render, screen } from '@testing-library/react'
import { PriceDisplay } from './PriceDisplay'

describe('PriceDisplay', () => {
  it('renders the price', () => {
    render(<PriceDisplay price={29.99} />)
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('does not render a struck-through price when no originalPrice is given', () => {
    const { container } = render(<PriceDisplay price={29.99} />)
    expect(container.querySelector('.line-through')).not.toBeInTheDocument()
  })

  it('renders both prices when originalPrice is greater than price', () => {
    render(<PriceDisplay price={19.99} originalPrice={29.99} />)
    expect(screen.getByText('$19.99')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('renders the original price with a strikethrough', () => {
    const { container } = render(<PriceDisplay price={19.99} originalPrice={29.99} />)
    expect(container.querySelector('.line-through')).toHaveTextContent('$29.99')
  })

  it('does not show strikethrough when originalPrice equals price', () => {
    const { container } = render(<PriceDisplay price={29.99} originalPrice={29.99} />)
    expect(container.querySelector('.line-through')).not.toBeInTheDocument()
  })

  it('formats prices with two decimal places', () => {
    render(<PriceDisplay price={10} />)
    expect(screen.getByText('$10.00')).toBeInTheDocument()
  })
})
