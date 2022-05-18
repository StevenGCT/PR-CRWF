import React from "react";
import NavbarLogin from "../../components/header-navbar"
import Footer from "../../components/footer"
import { usePosts } from "../../context/postContext"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import "../../stylesheets/login.css"

function RegisterForm() {

    const { registerUser } = usePosts();

    const navigate = useNavigate();

    function getUsername(firstName, lastName) {
        let username = firstName + lastName;
        let userRows  = new RegExp('^{$username}(-[0-3]*)?$');
        let countUser = Math.random()*(0-100)-100;

        return (countUser > 1) ? userRows+'-'+countUser : username;
    }

    return (
        <div className="base-container">

            <NavbarLogin locale={false} />

            <div className="container-sm my-5 card shadow-lg bg-body rounded">
                <div className="row ">
                    <div className="col-4 position-relative gradient">
                        <div className="position-absolute top-50 start-50 translate-middle text-light text-center">
                            <h1>¡Bienvenido!</h1>
                            <h3 className="">Estamos a tu disposición para ayudarte.</h3>
                            <h6 className="my-4">¿Ya tienes una cuenta?</h6>
                            <form action="/login">
                                <button className="btn-option" type="sumit">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>

                    <div className="col text-start m-5">
                        <div className="mb-5">
                            <h1>Registro</h1>
                        </div>

                        <div className="content mb-4" >
                            <Formik className="form"
                                initialValues={{
                                    name: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    cbxCkeckPrivacyPolicy: '',
                                    username:''
                                }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('* Nombre es un campo requerido'),
                                    lastName: Yup.string().required('* Apellido es un campo requerido'),
                                    email: Yup.string().required('* Email es un campo requerido').email('* Email invalido'),
                                    password: Yup.string().required('* Contraseña es un campo requerido').min(8, '* Contraseña demasiado corta - Ingrese por lo menos 8 caracteres.'),
                                    confirmPassword: Yup.string().required('* Confimación de la contraseña es un campo requerido').oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden'),
                                    cbxCkeckPrivacyPolicy: Yup.boolean().required('* Debes aceptar los terminos y condiciones').oneOf([true],'* Debes aceptar los terminos y condiciones')
                                })}
                                onSubmit={async (values, actions) => {
                                    values.username = getUsername(values.name, values.lastName);
                                    const posts = await registerUser(values);
                                    if (posts.length > 0) {
                                        localStorage.setItem('user',JSON.stringify(posts));
                                        navigate('/')
                                    } else {
                                        //errorLogin = true;
                                    }
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="row">
                                                <ErrorMessage component="p" name="name" className="col text-danger" />
                                                <ErrorMessage component="p" name="lastName" className="col text-danger" />
                                            </div>
                                            <div className=" col form-group mb-3">
                                                <Field name='name' className="form-control" placeholder="Ingresa tu nombre" />
                                            </div>
                                            <div className="col form-group mb-3">
                                                <Field name='lastName' className="form-control" placeholder="Ingresa tu apellido" />
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <ErrorMessage component="p" name="email" className="col text-danger" />
                                            </div>
                                            <Field name='email' type="email" className="form-control" placeholder="Ingresa tu correo" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <ErrorMessage component="p" name="password" className="col text-danger" />
                                            </div>
                                            <Field name='password' type="password" className="form-control" placeholder="Contraseña" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <ErrorMessage component="p" name="confirmPassword" className="col text-danger" />
                                            </div>
                                            <Field name='confirmPassword' type="password" className="form-control" placeholder="Confirma tu contraseña" />
                                        </div>

                                        <div class="form-check">
                                            <Field name="cbxSendEmailProyects" className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Envíenme una combinación semanal de proyectos seleccionados exclusivamente para mí, además de noticias ocasionales de IncUVa Lab
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <ErrorMessage component="p" name="cbxCkeckPrivacyPolicy" className="col text-danger" />
                                            <Field name="cbxCkeckPrivacyPolicy" className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Acepto la <a className="link-primary">Política de privacidad</a> , <a className="link-primary">Política de cookies y los Términos de uso</a>.
                                            </label>
                                        </div>

                                        <div className="text-center">
                                            <div className="footer mt-4 card text-center">
                                                <button type="submit" className="btn btn-outline-secondary">
                                                    Crear cuenta
                                                </button>

                                            </div>

                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default RegisterForm;