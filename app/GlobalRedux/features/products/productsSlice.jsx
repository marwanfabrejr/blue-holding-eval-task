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
      // console.log(payload)
      let { title, category, products, everyProduct } = payload
      let myProducts = JSON.parse(state.products)
      // console.log(title)
      // console.log(category)
      // console.log(products)
      const initialFilteredProducts =
        category != 'All Products'
          ? everyProduct.filter((product) => product.category == category)
          : everyProduct

      const filteredProducts = initialFilteredProducts.filter((product) => {
        // console.log(product.title)
        // console.log(title)
        return product.title.toLowerCase().includes(title.toLowerCase())
      })
      myProducts = filteredProducts

      state.products = JSON.stringify(myProducts)
      // console.log(state.products)
    },
  },
})

export const { filterProducts } = productsSlice.actions

export default productsSlice.reducer
