import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Product } from '../../api/types'
import { ProductCard } from './ProductCard'

const mockProduct: Product = {
  id: 1,
  title: 'Test Backpack',
  price: 109.95,
  category: "men's clothing",
  description: 'A great backpack.',
  image: 'https://picsum.photos/seed/product1/300/400',
  rating: { rate: 3.9, count: 120 },
}

describe('ProductCard', () => {
  it('renders the product title', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Test Backpack')).toBeInTheDocument()
  })

  it('renders the product image with alt text', () => {
    render(<ProductCard product={mockProduct} />)
    const img = screen.getByRole('img', { name: 'Test Backpack' })
    expect(img).toHaveAttribute('src', mockProduct.image)
  })

  it('renders the product price', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('$109.95')).toBeInTheDocument()
  })

  it('renders the rating', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByText('(120)')).toBeInTheDocument()
  })

  it('renders an add to cart button', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('calls onAddToCart with the product when button is clicked', async () => {
    const onAddToCart = vi.fn()
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />)
    await userEvent.click(screen.getByRole('button', { name: /add to cart/i }))
    expect(onAddToCart).toHaveBeenCalledWith(mockProduct)
  })

  it('renders no badge when badge prop is omitted', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.queryByText('Sale')).not.toBeInTheDocument()
    expect(screen.queryByText('New')).not.toBeInTheDocument()
    expect(screen.queryByText('Out of stock')).not.toBeInTheDocument()
  })

  it('renders the sale badge when badge="sale"', () => {
    render(<ProductCard product={mockProduct} badge="sale" />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('renders the new badge when badge="new"', () => {
    render(<ProductCard product={mockProduct} badge="new" />)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders the out-of-stock badge when badge="out-of-stock"', () => {
    render(<ProductCard product={mockProduct} badge="out-of-stock" />)
    expect(screen.getByText('Out of stock')).toBeInTheDocument()
  })

  it('disables add to cart button when out of stock', () => {
    render(<ProductCard product={mockProduct} badge="out-of-stock" />)
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeDisabled()
  })

  it('add to cart button is enabled when not out of stock', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByRole('button', { name: /add to cart/i })).not.toBeDisabled()
  })

  it('shows strikethrough original price when originalPrice is provided', () => {
    render(<ProductCard product={mockProduct} badge="sale" originalPrice={139.95} />)
    expect(screen.getByText('$139.95')).toBeInTheDocument()
    expect(screen.getByText('$109.95')).toBeInTheDocument()
  })
})
