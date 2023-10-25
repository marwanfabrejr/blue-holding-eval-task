'use client'

import { SearchCategoryProps } from '@/types'
import { fetchCategories } from '@/utils'
import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { BiSolidCategoryAlt } from 'react-icons/bi'

const SearchCategory = ({ category, setCategory }: SearchCategoryProps) => {
  const [query, setQuery] = useState('')
  const [filteredCategories, setFilteredCategories] = useState([])
  useEffect(() => {
    fetchCategories()
      .then((res) => {
        const categories = res
        const filteredCategories: any =
          query === ''
            ? res
            : res.filter((item: any) =>
                item
                  .toLowerCase()
                  .replace(/\s+/g, '')
                  .includes(query.toLowerCase().replace(/\s+/g, ''))
              )
        filteredCategories.unshift('All Products')
        setFilteredCategories(filteredCategories)
      })
      .catch((err) => {})
  }, [])

  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
      <Combobox value={category} onChange={setCategory}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <BiSolidCategoryAlt
              size={25}
              className='w-[20px] h-[20px] ml-4 text-blue-500'
            />
          </Combobox.Button>
          <Combobox.Input
            className='w-full h-[48px] pl-12 p-4 rounded-r-full max-sm:rounded-full bg-slate-200 outline-none cursor-pointer text-sm'
            placeholder='Category'
            displayValue={(category: string) => category}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute z-50 bg-white w-full '>
              {filteredCategories.length === 0 && query !== '' ? (
                <div className='cursor-default select-none py-2 pl-10 pr-4'>
                  Nothing found.
                </div>
              ) : (
                filteredCategories.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>

                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? 'text-white'
                                : 'text-pri bg-primary-purple'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchCategory
