import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    {/* redirects the user to the home page when clicked */}
                    <Navbar.Brand href="/home">Blush Boutique</Navbar.Brand>
                    <Nav className="ml-auto">
                        {/* nav links that redirect the user to their respective components */}
                        <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
