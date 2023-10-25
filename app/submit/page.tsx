'use client'

import clsx from 'clsx'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const Home = () => {
  const [valid, setValid] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleChange = (value: string) => {
    setPhoneNumber(value)
    setValid(validatePhoneNumber(value))
  }

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{11}$/
    return phoneNumberPattern.test(phoneNumber)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    e.preventDefault()
    data.address = ''
    data.phoneNum = ''
    data.email = ''
    router.push('/', { scroll: false })
    toast.success(
      'Your order submited successfully. Thank you for shopping with us.'
    )
  }

  return (
    <main className='overflow-hidden'>
      <div className='mt-4 padding-x padding-y max-width'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Details</h1>
        </div>
        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-slate-100 px-4 py-8 shadow sm:rounded-lg sm:px-10'>
            <form
              className='flex flex-col gap-4'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Address
                </label>
                <div className='mt-2'>
                  <input
                    {...register('address')}
                    id='address'
                    type='text'
                    required
                    autoComplete='address'
                    className={clsx(
                      `form-input block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-600 sm:text-sm sm:leading-6`
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='phoneNum'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Phone Number
                </label>
                <div className='mt-2'>
                  <PhoneInput
                    {...register('phoneNum')}
                    id='phoneNum'
                    placeholder='Enter phone number'
                    value={phoneNumber}
                    onChange={handleChange}
                    defaultCountry='EG'
                    required
                    className={clsx(
                      `form-input block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6`
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email
                </label>
                <div className='mt-2'>
                  <input
                    {...register('email')}
                    id='email'
                    type='text'
                    autoComplete='email'
                    className={clsx(
                      `form-input block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-600 sm:text-sm sm:leading-6`
                    )}
                    required
                  />
                </div>
              </div>
              <div className='w-full flex justify-end'>
                <input
                  type='submit'
                  className='custom-btn bg-blue-500 text-white rounded-full mt-5 cursor-pointer'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
