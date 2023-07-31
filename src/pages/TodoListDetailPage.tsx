// ========== Todo List Detail Page
// import all packages
import React from 'react'

// import bootstrap component
import { Card, Col, Container, Row } from 'react-bootstrap'

// import all components
import { Navbar } from '../components'

const TodoListDetailPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={12} className="mt-4">
            <h1>Todo Detail</h1>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="py-3">
              <Container>
                <Card.Title>
                  Test
                </Card.Title>
                <Card.Subtitle>
                  2022-10-10
                </Card.Subtitle>
                <Card.Text className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam, necessitatibus obcaecati totam quos debitis, suscipit quis tempore accusamus est recusandae fugiat incidunt hic corrupti facere ab distinctio exercitationem similique?
                </Card.Text>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TodoListDetailPage
