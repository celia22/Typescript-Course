import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useCartCtx } from '../context/CartCtx'
import { formatCurrencyCart } from '../utils/formatCurrency'
import { CartItem } from './CartItem'

type ShoppinCartProps = {
   isOpen: boolean,
}

export const ShoppingCart = ({isOpen}: ShoppinCartProps) => {

   const { closeCart, cartItems, storeItems } = useCartCtx()
  return (
         <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
               <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <Stack>
                  {cartItems.map(item => 
                     <CartItem key={item.id} {...item} />
                     )}
                  <div className='ms-auto fw-bold fs-5'>
                     Total {formatCurrencyCart(cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(item => item.id === cartItem.id)
                        return total + (item?.price || 0 ) * cartItem.quantity
                     }, 0)
                     )}
                     </div>   
               </Stack>
            </Offcanvas.Body>
         </Offcanvas>
  )
}
