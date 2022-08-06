import React from "react";
import { Card } from "react-bootstrap";
import { resultProps } from "../interfaces/cartItemsInterface";
import { formatCurrency } from "../utils/formatCurrency";

export const StoreItem = ({
  id,
  title,
  price,
  category,
  description,
  image,
}: resultProps) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} height="250px" width="200px" />
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="fs-2">{formatCurrency(price)}</span>
        </Card.Title>
        <span className="fs-2">{category}</span>
        <span className="fs-2">{description}</span>
      </Card>
    </>
  );
};
