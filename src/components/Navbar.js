import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/users'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const NavbarComponent = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (e) => {
        console.log(email, password)
        e.preventDefault();
        if (email && password){
            dispatch(startLogin(email,password))
        }
    }
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Workeue</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="email" placeholder="E-mail" className="mr-sm-2" onChange={ e => setEmail(e.target.value) } />
                <FormControl type="password" placeholder="****" className="mr-sm-2" onChange={ e => setPassword(e.target.value) }  />
                <Button variant="outline-success" onClick={e => handlerSubmit(e)} >Login</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;