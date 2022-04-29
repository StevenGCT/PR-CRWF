import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
                    <nav className="navbar navbar-light bg-light ps-4 pe-4">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">IncUVa - Lab</a>
                            <p className="navbar-brand fs-6" href="#">¿No tienes cuenta? 
                            <a className="btn btn-link" href="/register">Regístrate</a></p>
                            
                            
                        </div>
                    </nav>
                </div>
    }
}
