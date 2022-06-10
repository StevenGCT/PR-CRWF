import { useUsers } from '../context/userContext'
import { Formik, Form, Field } from 'formik'
import './../css/setting.css'
import NavbarLogin from "../components/header-navbar"
import { Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../components/images/profile.webp'
import Footer from "../components/footer"

export function Settings() {

    const { usersById, updatePassword } = useUsers();

    return (
        <div className="App">
            <NavbarLogin locale={true} />
            <br />
            <h2 className="font-semibold position-relative pl-5 pb-3">Perfil de Usuario</h2>
            <div className="container position-relative p-4" id="container">
                <Row>
                    <Col>
                        <div className="flex dgrid gap-2 p-2 pb-5">
                            {usersById.map(userById => (
                                <>
                                <h3>{userById.Name}</h3>

                                <h3>{userById.LastName}</h3>
                                </>
                            ))}
                        </div>
                        <div class="newPassword">
                        <Formik
                            initialValues={{
                                NewPassword: '',
                            }}
                            onSubmit={(values, actions) => {
                                updatePassword(3, values)
                                console.log(values)
                            }}
                        >

                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h5>Cambiar de contraseña:</h5>
                                    <div className="flex dgrid gap-2 p-2 pb-5">
                                    <Field id="newPassword_input" type="password" name="NewPassword" placeholder="Ingrese una nueva Contraseña" required />
                                    <button id="newPasswordButton_button" name="newPasswordButton" type='submit'>Cambiar Contraseña</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div id="padding-helper">
                    <Button id="requestbrand_button"><strong>Convertir esta cuenta en cuenta empresarial</strong></Button>
                    </div>
                    <div class="underline"></div>
                    <div className="d-flex justify-content-center p-3" >
                        <input type="submit" value="Guardar" id="save_button" />
                    </div>

                     <div class="underline"></div>
                    </Col> 
                    <Col>
                        <h3 className="pb-3 pt-3">Foto de perfil actual:</h3>
                        <div className="container-sm bg-light d-flex justify-content-center" id="container2">
                            <img src={avatar} alt="userImage" height="400" width="400" className="p-5 "/>  
                        </div>
                        <div className="d-flex justify-content-center" >
                        <div className="file-select pt-3" id="src-file1" >
                            <input type="file" name="src-file1" aria-label="Archivo" accept="image/png, image/jpeg" />
                        </div>  
                        </div>
                       
                    </Col>
                </Row>
            </div>
            <br />
            <Footer></Footer>
        </div>      
    );
}


