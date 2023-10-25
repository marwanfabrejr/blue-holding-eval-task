'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  calculateTotals,
  clearCart,
} from '../GlobalRedux/features/cart/cartSlice'
import ConfirmModal from '../components/Modals/ConfirmModal'
import { ProductProps } from '@/types'
import CartItem from '../components/Cart/CartItem'
import CustomButton from '../components/Buttons/CustomButton'
import Link from 'next/link'

const Home = () => {
  const { cartItems, total, amount } = useSelector((store: any) => store.cart)
  let items = JSON.parse(cartItems)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  const [confirmOpen, setConfirmOpen] = useState(false)

  if (amount < 1) {
    return (
      <div className='relative mt-6 flex-1 px-4 sm:px-6 '>
        <div className='flex flex-col items-center justify-center gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Your Cart</h1>
          <p className='text-gray-500 '>is currently empty.</p>
        </div>
      </div>
    )
  }
  return (
    <main className='overflow-hidden'>
      <div className='mt-4 padding-x padding-y max-width'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Review Order</h1>
        </div>
        <>
          <ConfirmModal
            isOpen={confirmOpen}
            onClose={() => setConfirmOpen(false)}
          />
          <div className='relative mt-6 flex-1 px-4 sm:px-6 '>
            <div className='flex flex-col items-center justify-center gap-y-2.5 text-black-100'>
              <h1 className='text-4xl font-extrabold'>Your Cart</h1>
            </div>
            <div>
              {items.map((item: ProductProps) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <footer>
              <hr />
              <div className='flex justify-between gap-5 w-full text-right mt-3'>
                <h1 className='text-black-100 text-xl font-bold'>Total</h1>
                <p className='text-gray-500 capitalize text-xl font-semibold'>
                  ${total.toFixed(2)}
                </p>
              </div>
              <div className='flex w-full justify-center gap-5'>
                <CustomButton
                  title='Clear Cart'
                  containerStyles='bg-blue-500 text-white rounded-full mt-10'
                  handleClick={() => setConfirmOpen(true)}
                />
                <Link href='/submit'>
                  <CustomButton
                    title='Submit Order'
                    containerStyles='bg-green-500 text-white rounded-full mt-10'
                    handleClick={() => {
                      setTimeout(function () {
                        dispatch(clearCart())
                      }, 1000)
                    }}
                  />
                </Link>
              </div>
            </footer>
          </div>
        </>
      </div>
    </main>
  )
}

export default Home
