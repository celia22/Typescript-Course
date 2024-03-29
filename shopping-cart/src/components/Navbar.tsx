import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import shoppingCart from "../assets/svg/shopping-cart.svg";
import { useCartCtx } from "../context/CartCtx";

export const Navbar = () => {

  const { openCart, cartQuantity } = useCartCtx()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            {" "}
            Home{" "}
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/store" as={NavLink}>
            {" "}
            Store{" "}
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/about" as={NavLink}>
            {" "}
            About{" "}
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
          onClick={openCart}
        >
          <img src={shoppingCart} alt="" />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
