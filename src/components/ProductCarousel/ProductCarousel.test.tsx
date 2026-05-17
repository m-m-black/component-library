import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Product } from '../../api/types'
import { ProductCarousel } from './ProductCarousel'

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Test Backpack',
    price: 109.95,
    category: "men's clothing",
    description: 'A great backpack.',
    image: '/images/product-1.png',
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Test T-Shirt',
    price: 22.3,
    category: "men's clothing",
    description: 'A slim-fit tee.',
    image: '/images/product-2.png',
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: 'Test Jacket',
    price: 55.99,
    category: "men's clothing",
    description: 'A cotton jacket.',
    image: '/images/product-3.png',
    rating: { rate: 4.7, count: 500 },
  },
]

describe('ProductCarousel', () => {
  it('renders a card for each product', () => {
    render(<ProductCarousel products={mockProducts} />)
    expect(screen.getByText('Test Backpack')).toBeVisible()
    expect(screen.getByText('Test T-Shirt')).toBeVisible()
    expect(screen.getByText('Test Jacket')).toBeVisible()
  })

  it('renders the correct number of add-to-cart buttons', () => {
    render(<ProductCarousel products={mockProducts} />)
    expect(screen.getAllByRole('button', { name: /add to cart/i })).toHaveLength(3)
  })

  it('calls onAddToCart with the correct product when a card button is clicked', async () => {
    const onAddToCart = vi.fn()
    render(<ProductCarousel products={mockProducts} onAddToCart={onAddToCart} />)
    await userEvent.click(screen.getAllByRole('button', { name: /add to cart/i })[0])
    expect(onAddToCart).toHaveBeenCalledWith(mockProducts[0])
  })

  it('renders nothing when products array is empty', () => {
    const { container } = render(<ProductCarousel products={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
})
