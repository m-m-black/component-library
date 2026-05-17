import type { Meta, StoryObj } from '@storybook/react-vite'
import { fetchProducts } from '../../api/client'
import type { Product } from '../../api/types'
import { ProductCard } from './ProductCard'

const meta = {
  component: ProductCard,
  tags: [],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

const mockProduct: Product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  category: "men's clothing",
  description: 'Your perfect pack for everyday use and walks in the forest.',
  image: `${import.meta.env.BASE_URL}images/product-1.png`,
  rating: { rate: 3.9, count: 120 },
}

export const Default: Story = {
  args: { product: mockProduct },
}

export const WithSaleBadge: Story = {
  args: { product: mockProduct, badge: 'sale', originalPrice: 139.95 },
}

export const WithNewBadge: Story = {
  args: { product: mockProduct, badge: 'new' },
}

export const OutOfStock: Story = {
  args: { product: mockProduct, badge: 'out-of-stock' },
}

export const LiveData: Story = {
  args: { product: mockProduct },
  loaders: [
    async () => {
      const result = await fetchProducts()
      return { products: result.ok ? result.data : [mockProduct] }
    },
  ],
  render: (_, { loaded: { products } }) => (
    <div className="flex flex-wrap gap-4">
      {(products as Product[]).slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ),
}

export const AllVariants: Story = {
  args: { product: mockProduct },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ProductCard product={mockProduct} />
      <ProductCard product={mockProduct} badge="sale" originalPrice={139.95} />
      <ProductCard product={mockProduct} badge="new" />
      <ProductCard product={mockProduct} badge="out-of-stock" />
    </div>
  ),
}
