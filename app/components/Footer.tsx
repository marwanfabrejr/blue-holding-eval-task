import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 Marwan Zayed. All rights reserved</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
          <Link href='/' className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms if Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
