import React from "react";
import logo from '../logo.png'
import avatar from '../profile2.webp'
import ButonLogout from './logout';


export default function NavbarLogin(props) {
    const dataUser = JSON.parse(localStorage.getItem('user'));
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="30" height="24" />
                    </a>
                    <a className="nav-page-title navbar-brand" href="/">IncUVa Lab</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Descubrir</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catálogo de proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Crear un proyecto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Preguntas frecuentes</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {localStorage.getItem('user') != null ?
                                <div class="dropdown">
                                    <div class=" flex" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                        <img src={avatar} class="profile-image img-circle" height="40" width="40" />
                                        <b class="caret mx-4 mt-2"> {dataUser[0].UserName}</b>
                                    </div>
                                    <div class="dropdown-menu dropdown-left" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">MI perfil</a>
                                        <a class="dropdown-item" href="#">Configuración</a>
                                        <ButonLogout/>
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
                    </div>
                </div>
            </nav>
        </div>
    );
}

