'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: JSON.stringify([]),
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, { payload }) => {
      let { title, category, products, everyProduct } = payload
      let myProducts = JSON.parse(state.products)

      const initialFilteredProducts =
        category != 'All Products'
          ? everyProduct.filter((product) => product.category == category)
          : everyProduct

      const filteredProducts = initialFilteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(title.toLowerCase())
      })
      myProducts = filteredProducts

      state.products = JSON.stringify(myProducts)
    },
  },
})

export const { filterProducts } = productsSlice.actions

export default productsSlice.reducer
