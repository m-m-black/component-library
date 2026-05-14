import { fetchProducts, fetchProduct } from './client'
import type { Product } from './types'

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  category: 'electronics',
  description: 'A test product',
  image: 'https://example.com/image.jpg',
  rating: { rate: 4.5, count: 120 },
}

function mockFetch(response: unknown, ok = true, status = 200) {
  vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
    ok,
    status,
    json: () => Promise.resolve(response),
  } as Response)
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('fetchProducts', () => {
  it('returns typed product array on success', async () => {
    mockFetch([mockProduct])
    const result = await fetchProducts()
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.data).toHaveLength(1)
      expect(result.data[0].title).toBe('Test Product')
    }
  })

  it('returns error result when response is not ok', async () => {
    mockFetch(null, false, 500)
    const result = await fetchProducts()
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toContain('500')
    }
  })

  it('returns error result when fetch throws', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network error'))
    const result = await fetchProducts()
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toBe('Network error')
    }
  })
})

describe('fetchProduct', () => {
  it('returns a typed product on success', async () => {
    mockFetch(mockProduct)
    const result = await fetchProduct(1)
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.data.id).toBe(1)
      expect(result.data.price).toBe(29.99)
    }
  })

  it('returns error result when response is not ok', async () => {
    mockFetch(null, false, 404)
    const result = await fetchProduct(999)
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toContain('404')
    }
  })
})
