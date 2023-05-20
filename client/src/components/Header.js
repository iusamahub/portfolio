import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


const Header = () => {

  const common = {
    marginRight : 15,
    fonstSize : 17,
    letterSpacing: "0.5px"
  }
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <div>
            <h2 className='mt-2 h2_right'>
            <Nav.Link href="#home"  style={{color: '#6c63ff'}}>Usama Bagwan</Nav.Link>
            </h2>
          </div>
          <Nav className="mt-2">
            <NavLink to="/" className="text-decoration-none" style={common} >Home</NavLink>
            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
            {/* <NavLink to="/projects" className="text-decoration-none" style={common}>Projects</NavLink> */}
            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
            {/* <div>
              <Button variant="danger">Danger</Button>{' '}
            </div> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header