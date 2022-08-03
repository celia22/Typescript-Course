import React from 'react'
import { Badge, Dropdown, FormControl, Navbar, Container } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import { Link, Router, Routes } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <Navbar bg="dark" variant="dark" style={{height: 80, backgroundColor: 'black'}}>
      <Container>
      <Navbar.Brand>
        <Link to= '/'>Shopping Cart</Link>
      </Navbar.Brand>
      <Navbar.Text className='search'>
        <FormControl style={{width: 500}} placeholder='Search a product' className='m-auto'/>
      </Navbar.Text>
     
      <Dropdown>
        <Dropdown.Toggle variant='success'>
          <FaShoppingCart color='white' fontSize='25px' />
          <Badge>{10}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{minWidth: 370}}>
          <span style={{padding: 10}}>Your cart is empty!</span>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
      </Navbar>
  )
}

export default Header


