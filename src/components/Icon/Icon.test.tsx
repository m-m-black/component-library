import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<Icon name="StarIcon" />)
    expect(container.querySelector('svg')).toBeVisible()
  })

  it('applies size to width and height', () => {
    const { container } = render(<Icon name="StarIcon" size={32} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('applies color as a CSS style property', () => {
    const { container } = render(<Icon name="StarIcon" color="red" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })

  it('is hidden from assistive technology by default', () => {
    const { container } = render(<Icon name="StarIcon" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('exposes an accessible label when aria-label is provided', () => {
    render(<Icon name="StarIcon" aria-label="Favourite" />)
    expect(screen.getByLabelText('Favourite')).toBeVisible()
  })
})
