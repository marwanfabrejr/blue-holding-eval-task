import { ProductProps } from '@/types'
import React from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import Button from '../Buttons/Button'
import { useDispatch } from 'react-redux'
import {
  increase,
  decrease,
  removeItem,
} from '../../GlobalRedux/features/cart/cartSlice'
const CartItem = (product: ProductProps) => {
  const { id, title, price, description, category, image, amount } = product
  let shortName = title.slice(0, 50)

  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={image} alt={title} />
      <div>
        <h4>{shortName}...</h4>
        <h4 className='text-gray-500'>${price}</h4>
        <Button
          disabled={false}
          danger
          onClick={() => {
            dispatch(removeItem(product))
          }}
        >
          Remove
        </Button>
      </div>
      <div>
        <button>
          <BsChevronUp
            size={24}
            onClick={() => {
              dispatch(increase(id))
            }}
            className='text-blue-500 cursor-pointer'
          />
        </button>
        <p className='text-center mb-0 text-xl leading-4'>{amount}</p>
        <button>
          <BsChevronDown
            size={24}
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(product))
                return
              }
              dispatch(decrease(id))
            }}
            className='text-blue-500 cursor-pointer'
          />
        </button>
      </div>
    </article>
  )
}

export default CartItem
