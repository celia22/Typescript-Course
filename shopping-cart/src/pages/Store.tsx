import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useCartCtx } from "../context/CartCtx";

export const Store = () => {


  const { storeItems } = useCartCtx();

  console.log(storeItems)
  
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
