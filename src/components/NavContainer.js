import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbarstyle.css'
import { Link } from 'react-router-dom';
import logo from '../assets/TextLogo.png'
import { Image } from 'react-bootstrap';

const NavContainer = () => {
  return (
    <Navbar expand="lg" className="bg-body-transparent">
      <Container>
        <Navbar.Brand as={Link} to='/'><Image src={logo} height={40}></Image></Navbar.Brand>
        <Navbar.Toggle style={{borderWidth: 0}}/>
        <Navbar.Collapse className="justify-content-end">
            <Nav className='flex-1'>
                <Nav.Link as={Link} to='/'><span style={{fontSize: 20, fontWeight: 'bold'}}>HOME</span></Nav.Link>
                <Nav.Link as={Link} to='/menu'><span style={{fontSize: 20, fontWeight: 'bold'}}>MENU</span></Nav.Link>
                <Nav.Link as={Link} to='/store'><span style={{fontSize: 20, fontWeight: 'bold'}}>STORE</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavContainer