import { createAsyncThunk } from '@reduxjs/toolkit'

import type { Product } from '../../interface/products'
import { FETCH_CATEGORIES_URL, FETCH_PRODUCT_BY_CATEGORY_URL, FETCH_PRODUCTS_URL } from '../../constants/apiConstant'

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const res = await fetch(FETCH_PRODUCTS_URL)
    if (!res.ok) throw new Error('Failed to fetch products')
    return (await res.json()) as Product[]
  }
)

// Fetch categories
export const fetchCategories = createAsyncThunk<string[]>(
  'products/fetchCategories',
  async () => {
    const res = await fetch(FETCH_CATEGORIES_URL)
    if (!res.ok) throw new Error('Failed to fetch categories')
    return await res.json()
  }
)

// Fetch by category
export const fetchProductsByCategory = createAsyncThunk<Product[], string>(
  'products/fetchProductsByCategory',
  async (category) => {
    const res = await fetch(`${FETCH_PRODUCT_BY_CATEGORY_URL}/${category}`)
    if (!res.ok) throw new Error('Failed to fetch products')
    return await res.json()
  }
)