import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const NavbarComponent = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Workeue</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="email" placeholder="E-mail" className="mr-sm-2" />
                <FormControl type="password" placeholder="****" className="mr-sm-2" />
                <Button variant="outline-success">Login</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;