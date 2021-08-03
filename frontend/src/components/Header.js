import React from 'react'
// LinkContainer serves the same purpose as regular Link. Just used to bind bootstrap containers. 
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        {/* redirects the user to the home page when clicked */}
                        <Navbar.Brand>Blush Boutique</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto">
                        {/* nav links that redirect the user to their respective components */}
                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
