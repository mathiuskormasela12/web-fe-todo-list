// ========== Create Account Page
// import all packages
import React, { useState } from 'react'

// import boostrap component
import { Col, Container, Row, Form, Card, Button } from 'react-bootstrap'

const CreateAccountPage: React.FC = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Row className="justify-content-center align-items-center bg-primary vh-100">
      <Col md={4}>
        <Card className="py-4 px-3">
          <Container>
            <h1 className="display-6">
              Create Account
            </h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Type your email..."
                  required
                  size="lg"
                />
                <Form.Control.Feedback type="invalid">Email is required or email is invalid</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Type your password..."
                  required
                  size="lg"
                />
                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Button type="submit" size="lg" className="w-100">
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Card>
      </Col>
    </Row>
  )
}

export default CreateAccountPage
