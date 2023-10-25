import { MouseEventHandler } from 'react'

export interface ProductProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
  amount?: number
  key?: number
}

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface OpenCloseProps {
  isOpen: boolean
  onClose: () => void
}
export interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
}

export interface SearchCategoryProps {
  category: string
  setCategory: (category: string) => void
}
