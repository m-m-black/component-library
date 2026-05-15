import type { Meta, StoryObj } from '@storybook/react-vite'
import { fetchProducts } from '../../api/client'
import type { Product } from '../../api/types'
import { ProductCarousel } from './ProductCarousel'

const meta = {
  component: ProductCarousel,
  tags: [],
} satisfies Meta<typeof ProductCarousel>

export default meta
type Story = StoryObj<typeof meta>

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    description: "Your perfect pack for everyday use.",
    image: 'https://picsum.photos/seed/product1/300/400',
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.30,
    category: "men's clothing",
    description: "Slim fit T-shirts in several colours.",
    image: 'https://picsum.photos/seed/product2/300/400',
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    description: "Great outerwear for spring and autumn.",
    image: 'https://picsum.photos/seed/product3/300/400',
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Womens Patio & Garden Chair",
    price: 15.99,
    category: "furniture",
    description: "Comfortable outdoor seating.",
    image: 'https://picsum.photos/seed/product4/300/400',
    rating: { rate: 2.1, count: 430 },
  },
]

export const Default: Story = {
  args: { products: mockProducts },
}

export const LiveData: Story = {
  args: { products: mockProducts },
  loaders: [
    async () => {
      const result = await fetchProducts()
      return { products: result.ok ? result.data : mockProducts }
    },
  ],
  render: (_, { loaded: { products } }) => (
    <ProductCarousel products={products as Product[]} />
  ),
}
