import { createAsyncThunk } from '@reduxjs/toolkit'

import type { Product } from '../../interface/products'
import { FETCH_PRODUCTS_URL } from '../../constants/apiConstant'

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const res = await fetch(FETCH_PRODUCTS_URL)
    if (!res.ok) throw new Error('Failed to fetch products')
    return (await res.json()) as Product[]
  }
)
