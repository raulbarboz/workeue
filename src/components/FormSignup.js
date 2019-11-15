import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreateUser } from '../actions/users'
import { Button, Form, Col, Row } from 'react-bootstrap';

const FormSignup = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email && password){
            dispatch(startCreateUser({email,password}))
        }
    }

    return (
    <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="email" name="email" placeholder="Email" onChange={ e => setEmail(e.target.value) } />
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" placeholder="Password"  onChange={ e => setPassword(e.target.value) }/>
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={e => handlerSubmit(e)}>Signup</Button>
            </Col>
        </Form.Group>
    </Form>
    )
}

export default FormSignup;