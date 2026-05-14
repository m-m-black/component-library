import type { Product, Result } from './types'

const BASE_URL = 'https://fakestoreapi.com'

async function request<T>(path: string): Promise<Result<T>> {
  try {
    const response = await fetch(`${BASE_URL}${path}`)
    if (!response.ok) {
      return { ok: false, error: `Request failed with status ${response.status}` }
    }
    const data = (await response.json()) as T
    return { ok: true, data }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Unknown error' }
  }
}

export function fetchProducts(): Promise<Result<Product[]>> {
  return request<Product[]>('/products')
}

export function fetchProduct(id: number): Promise<Result<Product>> {
  return request<Product>(`/products/${id}`)
}
