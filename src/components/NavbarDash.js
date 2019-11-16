import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/users'
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavbarComponent = () => {
    const dispatch = useDispatch();

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogout())
    }
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Workeue</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Button variant="outline-success" onClick={e => handlerSubmit(e)} >Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;