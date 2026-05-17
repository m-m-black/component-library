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

const img = (id: number) => `${import.meta.env.BASE_URL}images/product-${id}.png`

// Fallback data used when the Fake Store API is unavailable
const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    category: "men's clothing",
    description: 'Your perfect pack for everyday use and walks in the forest.',
    image: img(1),
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
    category: "men's clothing",
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button cuff.',
    image: img(2),
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    category: "men's clothing",
    description: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.',
    image: img(3),
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    category: "men's clothing",
    description: 'The color could be slightly different between on the screen and in practice.',
    image: img(4),
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: 'jewelery',
    description: 'From our Legends Collection, the Naga was inspired by the mythical water dragon.',
    image: img(5),
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave',
    price: 168,
    category: 'jewelery',
    description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    image: img(6),
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    category: 'jewelery',
    description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring.',
    image: img(7),
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    category: 'jewelery',
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.',
    image: img(8),
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
    price: 64,
    category: 'electronics',
    description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance.',
    image: img(9),
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    category: 'electronics',
    description: 'Easy upgrade for faster boot up, shutdown, application load and response.',
    image: img(10),
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    category: 'electronics',
    description: '3D NAND flash are applied to deliver high transfer speeds and read performance.',
    image: img(11),
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 114,
    category: 'electronics',
    description: 'Expand your PS4 gaming experience, Play anywhere Fast and easy setup.',
    image: img(12),
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    category: 'electronics',
    description: '21.5 inches Full HD (1920 x 1080) widescreen IPS display Anti-glare panel.',
    image: img(13),
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor – Super Ultrawide Screen QLED',
    price: 999.99,
    category: 'electronics',
    description:
      '49 inch Super Ultrawide 32:9 curved gaming monitor with dual 27-inch screen side by side.',
    image: img(14),
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    category: "women's clothing",
    description: 'Note: The Jackets is US standard size, Please choose size as your usual size.',
    image: img(15),
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    category: "women's clothing",
    description: '100% Polyurethane shell, 100% Polyester lining, removable hood.',
    image: img(16),
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 39.99,
    category: "women's clothing",
    description: 'Lightweight, perfect for trip or casual wear. Long sleeve with hood.',
    image: img(17),
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    category: "women's clothing",
    description: '95% Rayon 5% Spandex, Made in USA or Imported, Do Not Bleach.',
    image: img(18),
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    category: "women's clothing",
    description: '100% Polyester, Machine wash, 100% cationic polyester interlock.',
    image: img(19),
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 12.99,
    category: "women's clothing",
    description: '95% Cotton, 5% Spandex, Features: Casual, Short Sleeve, Letter Print.',
    image: img(20),
    rating: { rate: 3.6, count: 145 },
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
  render: (_, { loaded: { products } }) => <ProductCarousel products={products as Product[]} />,
}
