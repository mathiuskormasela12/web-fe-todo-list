// ========== Navbar
// import all packages
import React from 'react'
import { useNavbar } from './navbar.hook'

// import bootstrap components
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'

export const Navbar: React.FC = () => {
  const { handleNavigate, pathname } = useNavbar()

  return (
    <BootstrapNavbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <BootstrapNavbar.Brand onClick={(event) => { handleNavigate(event, '/') }}>Todo List</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active={pathname.includes('/') || pathname.includes('/todo')} onClick={(event) => { handleNavigate(event, '/') }}>Todo</Nav.Link>
            <Nav.Link onClick={(event) => { handleNavigate(event, '/create-todo') }}>Create Todo</Nav.Link>
            <Nav.Link onClick={(event) => { handleNavigate(event, '/auth/create-account') }}>Create Account</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}
