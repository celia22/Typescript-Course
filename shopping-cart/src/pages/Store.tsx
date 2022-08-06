import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import FetchCart from "../services/httpService/fetchCart";
import { resultProps } from "../interfaces/cartItemsInterface";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
  const cartItems = FetchCart();
  const [storeItems, setStoreItems] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      setStoreItems(cartItems);
    };
    api();
  }, [storeItems, cartItems]);

  console.log("items", storeItems);

  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
