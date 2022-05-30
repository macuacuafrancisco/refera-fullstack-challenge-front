import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'

const Header = ({logout}) => {
    return(
        <header>
             <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">REFERA CHALLENGE</Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">                      
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>                                                                                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}


  
  export default Header;
  