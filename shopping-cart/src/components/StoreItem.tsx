import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCartCtx } from "../context/CartCtx";
import { cartIemsProps } from "../interfaces/cartItemsInterface";
import { formatCurrency } from "../utils/formatCurrency";

export const StoreItem = ({
  id,
  title,
  price,
  category,
  description,
  image,
}: cartIemsProps) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartCtx();

  const quantity = getItemsQuantity(id);

  return (
    <>
      <Card className="h-100">
        <Card.Img variant="top" src={image} height="250px" width="200px" />
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="fs-2">{formatCurrency(price)}</span>
        </Card.Title>
        {/* <span className="fs-2">{category}</span>
        <span className="fs-2">{description}</span> */}
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
              Bye
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
