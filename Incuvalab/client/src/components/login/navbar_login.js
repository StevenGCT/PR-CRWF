import React from "react";

export default function NavbarLogin(props){

        return (<div>
                    <nav className="navbar navbar-light ps-2 pe-2">
                        <div className="container-fluid">
                            <a className="navbar-brand text-light" href="#">IncUVa - Lab</a>
                            {
                                props.locale == true &&
                                <div>
                                    <p className="navbar-brand fs-6 text-light" href="#">¿No tienes cuenta? 
                                    <a className="btn btn-link text-light" href="/register">Regístrate</a></p>
                                </div>
                            }

                            {
                                props.locale == false &&
                                <div>
                                    <p className="navbar-brand fs-6 text-light" href="#">¿Tienes una cuenta? 
                                    <a className="btn btn-link text-light" href="/login">Iniciar Sesión</a></p>
                                </div>
                            }
                            
                        </div>
                    </nav>
                </div>);
    }

