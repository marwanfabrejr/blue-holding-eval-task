import { ProductProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import CustomButton from '../Buttons/CustomButton'
import ConfirmModal from '../Modals/ConfirmModal'
import { calculateTotals } from '../../GlobalRedux/features/cart/cartSlice'
import Link from 'next/link'

const CartItems = ({ onClose }: any) => {
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
            <Link href='/review' onClick={onClose}>
              <CustomButton
                title='Review Order'
                containerStyles='bg-green-500 text-white rounded-full mt-10'
              />
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}

export default CartItems
