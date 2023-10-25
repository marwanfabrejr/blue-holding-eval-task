'use client'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cartItems: JSON.stringify([]),
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = JSON.stringify([])
      state.amount = 0
    },
    addToCart: (state, { payload }) => {
      const myCart = JSON.parse(state.cartItems)
      state.amount++
      let index = myCart.findIndex((item) => item.id == payload.id)

      if (index < 0) {
        payload.amount++
        myCart.push(payload)
      } else {
        myCart[index].amount++
      }

      state.cartItems = JSON.stringify(myCart)
    },
    removeItem: (state, action) => {
      let myCart = JSON.parse(state.cartItems)
      state.amount = state.amount - action.payload.amount
      myCart = myCart.filter((item) => item.id !== action.payload.id)
      state.cartItems = JSON.stringify(myCart)
    },
    increase: (state, { payload }) => {
      let myCart = JSON.parse(state.cartItems)
      const cartItem = myCart.find((item) => item.id === payload)
      cartItem.amount = cartItem.amount + 1
      state.cartItems = JSON.stringify(myCart)
    },
    decrease: (state, { payload }) => {
      let myCart = JSON.parse(state.cartItems)
      const cartItem = myCart.find((item) => item.id === payload)
      cartItem.amount = cartItem.amount - 1
      state.cartItems = JSON.stringify(myCart)
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      let myCart = JSON.parse(state.cartItems)
      myCart.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

export const {
  clearCart,
  removeItem,
  addToCart,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions

export default cartSlice.reducer
