import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useCartCtx } from "../context/CartCtx";
import { formatCurrency, formatCurrencyCart } from "../utils/formatCurrency";


type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useCartCtx();
  const { storeItems } = useCartCtx();

const item = storeItems.find(item => item.id === id)
if (item == null) return null

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img src={item.image} style={{width: '125px', height: '75px', objectFit: 'cover'}} alt='some' />
     <div className="me-auto">
      <div>
        {item.title} { quantity > 1 && <span className="'text-muted" style={{fontSize: '0.65rem'}}>x{quantity}</span> }
      </div>
      <div className="text-muted" style={{ fontSize: '0.75rem'}}>
        {formatCurrency(item.price)}
      </div>
      <div>
        {formatCurrencyCart(parseFloat(item.price) * quantity)}
      </div>
     </div>
     <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
    </Stack>
  );
};
