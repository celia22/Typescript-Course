import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useCartCtx } from '../context/CartCtx'
import { CartItem } from './CartItem'

type ShoppinCartProps = {
   isOpen: boolean,
}

export const ShoppingCart = ({isOpen}: ShoppinCartProps) => {

   const { closeCart, cartItems } = useCartCtx()
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
               </Stack>
            </Offcanvas.Body>
         </Offcanvas>
  )
}
