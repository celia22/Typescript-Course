import React from 'react'
import { useCartCtx } from '../context/CartCtx'
import { StoreItem } from './StoreItem'

type CartItemProps = {
    id: number,
    quantity: number
}

export const CartItem = ({id, quantity}: CartItemProps) => {
  
  const { removeFromCart } = useCartCtx()

    return (
    <div>CartItem</div>
  )
}
