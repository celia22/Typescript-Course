import React from 'react'
import { Offcanvas } from 'react-bootstrap'

export const ShoppingCart = () => {
  return (
         <Offcanvas show={true}>
            <Offcanvas.Header closeButton>
               <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
         </Offcanvas>
  )
}
