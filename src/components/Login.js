import React, { useState } from 'react'

// react bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

// GitHub GraphQL endpoint
const API_ENDPOINT = 'https://api.github.com/graphql'

const Login = () => {

    // local state for form
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login')
    }

    return (
        <Container fluid='xl'>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>GitHub Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login