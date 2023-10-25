'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsFillCartFill } from 'react-icons/bs'
import Image from 'next/image'
import CartDrawer from './Cart/CartDrawer'

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const { amount } = useSelector((store: any) => store.cart)

  return (
    <>
      <CartDrawer isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)} />
      <header className='w-full z-10 bg-blue-500'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
          <div className='block relative '>
            <BsFillCartFill
              size={32}
              onClick={() => setCartIsOpen(true)}
              className='text-yellow-400 hover:text-white cursor-pointer transition'
            />
            <div className='flex justify-center rounded-full absolute bg-white items-center h-7 w-7 left-3 bottom-4 '>
              <p className=' mb-0 text-sm'>{amount}</p>
            </div>
          </div>

          <Image
            width={40}
            height={40}
            className=' rounded-full cursor-pointer'
            src='/images/placeholder.jpg'
            alt='profile photo'
          />
        </nav>
      </header>
    </>
  )
}

export default Navbar
