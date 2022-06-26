import {Link} from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import { Button } from 'react-bootstrap'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import './../css/userProfile.css'

export function UserProfile() {

        return(
            <div className="App">
                <NavbarLogin locale={true} />
                    <br />
                        <h2 className="font-semibold position-relative pl-5 pb-3">Mi Registro de Campañas</h2>
                            <div className="container position-relative p-4" id="container">
                            <Accordion id="mainMenu">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Campañas a las Que Sigues</Accordion.Header>
                                    <Accordion.Body>
                                    Insertar componente aqui
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Campañas a las Que Donaste</Accordion.Header>
                                    <Accordion.Body>
                                    Insertar componente aqui
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Mis Campañas</Accordion.Header>
                                    <Accordion.Body>
                                        Proximamente...
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                                <div className="flex justify-center m-3 pt-2">
                                    <Button id="toSettings"><strong>Mis Datos</strong></Button>
                                </div>
                            </div>
                    <br />
                <Footer />
            </div>
        );
    }
