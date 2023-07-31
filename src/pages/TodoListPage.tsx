// ========== Todo List Page
// import all packages
import React from 'react'

// import bootstrap components
import { Col, Container, Row } from 'react-bootstrap'

// import all components
import { Navbar, Card } from '../components'

const TodoListPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
      <Row>
        <Col md={12}>
          <h1 className="display-6">
            Todo List
          </h1>
        </Col>
        <Col md={12} className="mt-3">
          <Row>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='1'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='2'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='3'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='4'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='5'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='5'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='6'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='7'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='8'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='9'
              />
            </Col>
            <Col md={3} className="mb-3">
              <Card
                title="Write Essay"
                subtitle="test"
                description="lorem"
                id='10'
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default TodoListPage
