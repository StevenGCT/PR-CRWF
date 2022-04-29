import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Card, Navbar, Form, Input, Container, Row, Col, Nav } from 'react-bootstrap'


function App() {
    return (
<div className="App">
      <header className="App-header">
      <Navbar bg="MainUnivalle" variant="dark" 
        sticky="top" expand="md" collapseOnSelect>
        <Container>
        <Navbar.Brand>
        <img src={logo} width="40px" height="40px" />{' '}
          Logo
        </Navbar.Brand>
        
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#" active>Inicio</Nav.Link>
            <Nav.Link href="#" active>Catalogo</Nav.Link>
            <Nav.Link href="#" active>Perfil</Nav.Link>
            <Nav.Link href="#" active>Crear Campaña</Nav.Link>
            <Nav.Link href="#" active>Preguntas frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#">Iniciar Sesión</Nav.Link>
        <Button variant="dark" size="lg" active href="#">
        Registrarse
      </Button>{' '}
      </Container>
      </Navbar>

      </header>
      <body>
        <Container>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
      </Nav>
      </Container>
      </body>
</div>
    );
}

export default App;