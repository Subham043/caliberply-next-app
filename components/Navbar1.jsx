import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar1 = () => {
  return (
    <>
  <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
            <Image alt='' width={150} height='50px' src='https://www.calibreply.com/img/logo.1b48625e.webp'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} href='/'>Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} href="/category">Plywood
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/category">
                Block Board
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/category">Shuttering Plywood</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/category">Laminates</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href='/tools'>Tools</Nav.Link>
            <Nav.Link as={Link} href='/gallery'>Gallery</Nav.Link>
            <Nav.Link as={Link} href='/about'>About Us</Nav.Link>
            <Nav.Link as={Link} href='/testimonials'>Testimonials</Nav.Link>
            <Nav.Link as={Link} href='/blog'>Blog</Nav.Link>
            <Nav.Link as={Link} href='/contact'>Contact Us</Nav.Link>
            <Nav.Link as={Link} href='/login'>Login</Nav.Link>
            <Nav.Link as={Link} href='/cart'>
                <FaShoppingCart/>
                <span className='counter-cart sm-hidden'>0</span>
                </Nav.Link>
            <Nav.Link as={Link} href='/wishlist'><FaHeart/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbar1