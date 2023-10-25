'use client'

import React, { useState } from 'react'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import CustomButton from '../Buttons/CustomButton'
import { ProductProps } from '@/types'
import Image from 'next/image'
import ProductDetails from './ProductDetails'

interface ProductCardProps {
  product: ProductProps
}

const ProductCard = (products: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { product } = products
  const { id, title, price, description, category, image, rating } = product

  return (
    <div className='flex flex-col p-6 justify-between items-start text-black-100 bg-blue-100 bg-opacity-70 hover:bg-white hover:shadow-md rounded-3xl group'>
      <div className='w-full flex justify-between items-start gap-2'>
        <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
          {title}
        </h2>
      </div>
      <p className='flex  mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          $
        </span>
        {price}
      </p>
      <div className='relative w-full h-60 my-4 object-contain'>
        <Image
          src={image}
          alt='product model'
          fill
          sizes='100%'
          priority
          className='object-contain bg-white py-2'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex w-full justify-between items-center gap-2'>
            <BiSolidCategoryAlt size={32} className='text-blue-600' />
            <p className='text-[20px] leading-[25px] capitalize'>{category}</p>
          </div>
        </div>
        <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-blue-500'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <ProductDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        product={product}
      />
    </div>
  )
}

export default ProductCard
