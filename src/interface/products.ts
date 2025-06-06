export interface Product {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

export interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}
