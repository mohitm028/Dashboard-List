import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchProducts, fetchProductsByCategory } from './productsActions'

import type { ProductsState } from '../../interface/products'

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  categories: [],
selectedCategory: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
        .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
    .addCase(fetchCategories.rejected, (state, action) => {
      state.error = action.error.message ?? 'Failed to load categories'
    })
     .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
    state.products = action.payload
  })

.addCase(fetchProductsByCategory.rejected, (state, action) => {
  state.loading = false
  state.error = action.error.message ?? 'Failed to fetch filtered products'
})

  },
})

export default productsSlice.reducer
