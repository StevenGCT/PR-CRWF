import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from './images/logo.png'
import avatar from './images/profile.webp'
import ButonLogout from './logout';
import '../css/navbar.css'

export default function NavbarLogin(props) {
    const dataUser = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <Navbar bg="light" expand="lg" className="px-4 py-3">
                <Container fluid>
                    <Navbar.Brand href="#" className="nav-page-title">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        IncUVa Lab
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            {localStorage.getItem('role') != null && localStorage.getItem('role') == 'Administrador' ?
                            <Nav.Link href="/control-page">Dashboard</Nav.Link> : <Nav.Link href="/">Inicio</Nav.Link>}
                            
                            <Nav.Link href="/catalogue">Catalogo de proyectos</Nav.Link>
                            <Nav.Link href="/Questions">Preguntas frecuentes</Nav.Link>
                        </Nav>

                        <div className="d-flex">
                            {localStorage.getItem('user') != null ?
                                <div class="dropdown">
                                    <div class="flex" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                        <img src={avatar} class="profile-image img-circle" height="40" width="40" />
                                        <b class="caret mx-4 mt-2"> {dataUser[0].UserName}</b>
                                    </div>
                                    <div class="dropdown-menu dropdown-left mt-2" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="/UserProfile">Mis registros</a>
                                        <a class="dropdown-item" href="/Settings">Mi Perfil</a>
                                        <ButonLogout />
                                    </div>
                                </div>
                                :
                                <div className="flex">
                                    <form action="/login">
                                        <button className="button btn-outline-login" type="sumit">Iniciar Sesión</button>
                                    </form>
                                    <form action="/register">
                                        <button className="button btn-register  ms-2" type="sumit">Regístrate</button>
                                    </form>
                                </div>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

