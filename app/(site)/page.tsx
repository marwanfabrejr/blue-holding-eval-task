'use client'

import SearchBar from '../components/Search/SearchBar'
import React, { useEffect, useState } from 'react'
import ProductsList from '../components/Products/ProductsList'
import { fetchProducts } from '@/utils'
import { useSelector } from 'react-redux'

export default function Home({ searchParams }: any) {
  const [fetchedProducts, setFetchedProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])

  const { products } = useSelector((store: any) => store.products)

  useEffect(() => {
    fetchProducts().then((products) => {
      setFetchedProducts(products)
      setAllProducts(products)
    })
  }, [])

  useEffect(() => {
    let filteredProducts = JSON.parse(products)
    setFetchedProducts(filteredProducts)
  }, [searchParams])

  return (
    <main className='overflow-hidden'>
      <div className='mt-4 padding-x padding-y max-width '>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Products</h1>
          <p>Explore the products you might like</p>
        </div>

        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar
            fetchedProducts={fetchedProducts}
            allProducts={allProducts}
          />
        </div>
        <ProductsList fetchedProducts={fetchedProducts} />
      </div>
    </main>
  )
}
