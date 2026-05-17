import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { Product } from '../../api/types'
import { CartItem } from './CartItem'

const meta = {
  component: CartItem,
  tags: [],
} satisfies Meta<typeof CartItem>

export default meta
type Story = StoryObj<typeof meta>

const mockProduct: Product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  category: "men's clothing",
  description: "Your perfect pack for everyday use and walks in the forest.",
  image: '/images/product-1.png',
  rating: { rate: 3.9, count: 120 },
}

function CartItemDemo(props: Partial<React.ComponentProps<typeof CartItem>>) {
  const [quantity, setQuantity] = useState(props.quantity ?? 1)
  return (
    <div className="w-full max-w-lg">
      <CartItem
        product={mockProduct}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onRemove={() => {}}
        {...props}
      />
    </div>
  )
}

export const Default: Story = {
  args: { product: mockProduct, quantity: 1, onQuantityChange: () => {}, onRemove: () => {} },
  render: () => <CartItemDemo />,
}

export const MultipleQuantity: Story = {
  args: { product: mockProduct, quantity: 3, onQuantityChange: () => {}, onRemove: () => {} },
  render: () => <CartItemDemo quantity={3} />,
}

export const AllVariants: Story = {
  args: { product: mockProduct, quantity: 1, onQuantityChange: () => {}, onRemove: () => {} },
  render: () => (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <CartItemDemo quantity={1} />
      <CartItemDemo quantity={3} />
    </div>
  ),
}
