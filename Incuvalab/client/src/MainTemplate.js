/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Navbar, Form, Input, Container, Row, Col, Style, Nav, NavDropdown, CardGroup, FormGroup, ProgressBar } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="MainUnivalle" variant="dark" 
        fixed='top' expand="md" collapseOnSelect>
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
        <Nav.Link bsPrefix='custom-nav' href="#">Iniciar Sesión</Nav.Link>
        <Button variant="dark" size="lg" active href="#">
        Registrarse
      </Button>{' '}
      </Container>
      </Navbar>

      </header>
      <main class="flex-shrink-0">
      
    </main>
    <br />
    <body>
    <Form>
    <Form.Group className="mb-3" controlId="formSearch">
  <div class="container align-center">
        <h1 class="mt-5 p-3">Catálogo</h1>
	<div class="row p-1">
		<div class="col-6 col-md-3">
    <Form.Select>
    <option selected>Seleccione alguna Categoria</option>
			  <option value="1">Example1</option>
			  <option value="2">Example2</option>
			  <option value="3">Example3</option>
    </Form.Select>
		</div>
		<div class="col-12 col-md-7">
    <Form.Control type="search" placeholder="Buscar una campaña" />
		</div>
		<div class="col-6 col-md-2">
		<Button variant="outline-dark" type="submit">
    Buscar
  </Button>
		</div>
	</div>
</div>
</Form.Group>
</Form>

<br></br>
<div class="container align-center">
<CardGroup>
  <Card>
  <Card.Header>
    <Card.Title>Card title
      </Card.Title>
  </Card.Header>
    <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg" />
    <Card.Body>
      
      <ProgressBar now={60} variant="dark" />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Header>
    <Card.Title>Card title
      </Card.Title>
  </Card.Header>
    <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg" />
    <Card.Body>
      <ProgressBar now={95} variant="dark" />
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Header>
    <Card.Title>Card title
      </Card.Title>
  </Card.Header>
    <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
    <Card.Body>
      <ProgressBar now={10} variant="dark" />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br />
<CardGroup>
  <Card>
  <Card.Header>
    <Card.Title>Card title
      </Card.Title>
  </Card.Header>
    <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg" />
    <Card.Body>
      
      <ProgressBar now={60} variant="dark" />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Header>
    <Card.Title>Card title
      </Card.Title>
  </Card.Header>
    <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg" />
    <Card.Body>
      <ProgressBar now={95} variant="dark" />
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Header>
    <Card.Title>Card title
      </Card.Title>
  </Card.Header>
    <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
    <Card.Body>
      <ProgressBar now={10} variant="dark" />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>



</div>
    </body>
    <div class="b-example-divider"></div>

<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
  </footer>
</div>
    </div>
    
  );
}

export default App;
