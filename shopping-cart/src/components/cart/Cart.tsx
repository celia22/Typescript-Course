import React from 'react'
import { CartContextConsumer } from '../../context/context'

const Cart: React.FC = (): JSX.Element => {
    console.log(CartContextConsumer)
  return (

            <CartContextConsumer>
                {context  => context && (
                    <div>
                        <p> Holis</p>
                    </div>
                )}
            </CartContextConsumer>

  )
}

export default Cart