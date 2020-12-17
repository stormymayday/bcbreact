import React from 'react';

// Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#hero">BCB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ml-auto">
                        <Nav.Link href="#hero">HOME</Nav.Link>
                        <Nav.Link href="#farming">FARMING</Nav.Link>
                        <Nav.Link href="#processing-export">PROCESSING & EXPORT</Nav.Link>
                        <Nav.Link>JOURNEY</Nav.Link>
                        <Nav.Link>ROASTING</Nav.Link>
                        <Nav.Link>SPONSORS</Nav.Link>
                        <Nav.Link>ABOUT</Nav.Link>
                        <Nav.Link>FEEDBACK</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
}