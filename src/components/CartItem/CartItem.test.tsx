import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Product } from '../../api/types'
import { CartItem } from './CartItem'

const mockProduct: Product = {
  id: 1,
  title: 'Test Backpack',
  price: 109.95,
  category: "men's clothing",
  description: 'A great backpack.',
  image: '/images/product-1.png',
  rating: { rate: 3.9, count: 120 },
}

function renderCartItem(props: Partial<React.ComponentProps<typeof CartItem>> = {}) {
  const onQuantityChange = props.onQuantityChange ?? vi.fn()
  const onRemove = props.onRemove ?? vi.fn()
  return render(
    <CartItem
      product={mockProduct}
      quantity={2}
      onQuantityChange={onQuantityChange}
      onRemove={onRemove}
      {...props}
    />
  )
}

describe('CartItem', () => {
  it('renders the product name', () => {
    renderCartItem()
    expect(screen.getByText('Test Backpack')).toBeInTheDocument()
  })

  it('renders the product image', () => {
    renderCartItem()
    expect(screen.getByRole('img', { name: 'Test Backpack' })).toBeInTheDocument()
  })

  it('renders the product price', () => {
    renderCartItem()
    expect(screen.getByText('$109.95')).toBeInTheDocument()
  })

  it('renders the current quantity', () => {
    renderCartItem({ quantity: 3 })
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('calls onQuantityChange with incremented value when + is clicked', async () => {
    const onQuantityChange = vi.fn()
    renderCartItem({ quantity: 2, onQuantityChange })
    await userEvent.click(screen.getByRole('button', { name: /increment/i }))
    expect(onQuantityChange).toHaveBeenCalledWith(3)
  })

  it('calls onQuantityChange with decremented value when - is clicked', async () => {
    const onQuantityChange = vi.fn()
    renderCartItem({ quantity: 2, onQuantityChange })
    await userEvent.click(screen.getByRole('button', { name: /decrement/i }))
    expect(onQuantityChange).toHaveBeenCalledWith(1)
  })

  it('disables decrement button when quantity is 1', () => {
    renderCartItem({ quantity: 1 })
    expect(screen.getByRole('button', { name: /decrement/i })).toBeDisabled()
  })

  it('enables decrement button when quantity is greater than 1', () => {
    renderCartItem({ quantity: 2 })
    expect(screen.getByRole('button', { name: /decrement/i })).not.toBeDisabled()
  })

  it('calls onRemove when remove button is clicked', async () => {
    const onRemove = vi.fn()
    renderCartItem({ onRemove })
    await userEvent.click(screen.getByRole('button', { name: /remove/i }))
    expect(onRemove).toHaveBeenCalled()
  })
})
