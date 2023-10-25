'use client'

import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ToggleSwitch from '../ToggleSwitch'
import clsx from 'clsx'

const ProductsList = (fetchedProducts: any) => {
  const [grid, setGrid] = useState(false)
  const products = fetchedProducts.fetchedProducts

  // console.log(products)

  return (
    <section>
      <div className='flex justify-end px-4 pt-8'>
        <div
          onClick={(): any => {
            setGrid(!grid)
            // console.log(grid)
          }}
        >
          <ToggleSwitch />
        </div>
      </div>

      <div
        className={clsx(
          grid && 'grid grid-col-1 w-7/12 max-sm:w-full m-auto gap-8 pt-14',
          !grid &&
            'grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'
        )}
      >
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}

export default ProductsList
