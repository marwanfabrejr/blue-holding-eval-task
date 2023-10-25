'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiLogoProductHunt } from 'react-icons/bi'
import SearchCategory from './SearchCategory'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../GlobalRedux/features/products/productsSlice'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='magnifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = (fetchedProducts: any, allProducts: any) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('All Products')
  const router = useRouter()
  const dispatch = useDispatch()

  const products = fetchedProducts.fetchedProducts

  const everyProduct = fetchedProducts.allProducts

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(filterProducts({ title, category, products, everyProduct }))
    updateSearchParams(title.toLowerCase(), category.toLowerCase())
  }

  const updateSearchParams = (title: string, category: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (title) {
      searchParams.set('title', title)
    } else if ((title = ' ')) {
      searchParams.delete('title')
    }
    if (category) {
      searchParams.set('category', category)
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname, { scroll: false })
  }

  return (
    <form
      className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'
      onSubmit={handleSearch}
    >
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <BiLogoProductHunt
          size={25}
          className='absolute w-[20px] h-[20px] ml-4 text-blue-500'
        />
        <input
          type='text'
          name='category'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Product'
          className='w-full h-[48px] pl-12 p-4 bg-slate-200 rounded-l-full max-sm:rounded-full outline-none cursor-pointer text-sm'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <SearchCategory category={category} setCategory={setCategory} />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar
