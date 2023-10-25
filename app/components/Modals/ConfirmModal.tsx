import { OpenCloseProps } from '@/types'
import React from 'react'
import Modal from './Modal'
import { FiAlertTriangle } from 'react-icons/fi'
import { Dialog } from '@headlessui/react'
import Button from '../Buttons/Button'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../GlobalRedux/features/cart/cartSlice'

const ConfirmModal = ({ isOpen, onClose }: OpenCloseProps) => {
  const dispatch = useDispatch()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='sm:flex sm:items-start'>
        <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
          <FiAlertTriangle
            className='h-6 w-6 text-red-600'
            aria-hidden='true'
          />
        </div>
        <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
          <Dialog.Title
            as='h3'
            className='text-base font-semibold leading-6 text-gray-900'
          >
            Clear Cart
          </Dialog.Title>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Are you sure you want to clear this Cart? This action cannot be
              undone.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
        <Button
          disabled={false}
          danger
          onClick={() => {
            dispatch(clearCart())
            onClose()
          }}
        >
          Clear
        </Button>
        <Button disabled={false} secondary onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
