import React from "react";
import registerImg from "../../register.svg";
import  NavbarLogin  from "../../components/login/navbar_login"
import {usePosts} from "../../context/postContext"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'

function RegisterForm() {

    const {registerUser} = usePosts();
    const navigate = useNavigate();

    return (
        <div className="base-container">
            
            <NavbarLogin locale = {false}/>

            <div className="container-sm mt-2">
                <div className="row ">
                    <div className="col-7 mt-5">
                        <div className="image img-fluid">
                            <img src={registerImg}></img>
                        </div>
                    </div>
                    <div className="col text-start card p-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="mb-3">
                        <label className="fs-1">Registro</label>
                    </div>

                    <div className="content" >
                        <Formik className="form"
                            initialValues={{
                                name: '',
                                lastName: '',
                                email: '', 
                                password:'',
                                confirmPassword:''
                                }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('* Nombre es un campo requerido'),
                                    lastName: Yup.string().required('* Apellido es un campo requerido'),
                                    email: Yup.string().required('* Email es un campo requerido').email('* Email invalido'),
                                    password: Yup.string().required('* Contraseña es un campo requerido').min(8, '* Contraseña demasiado corta - Ingrese por lo menos 8 caracteres.'),
                                    confirmPassword: Yup.string().required('* Confimación de la contraseña es un campo requerido').oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden')
                                })}
                                onSubmit={async (values, actions) => {
                                    await registerUser(values)
                                    navigate('/')
                                }}
                            >
                            {({handleSubmit}) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <div className="row">
                                        <label htmlFor="name" className="col-3 form-label">Nombre</label>
                                        <ErrorMessage component="p" name="name" className="col text-danger"/>
                                        </div>
                                        <Field name='name' className="form-control"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="row">
                                        <label htmlFor="lastname" className="col-3 form-label">Apellido</label>
                                        <ErrorMessage component="p" name="lastName" className="col text-danger"/>
                                        </div>
                                        <Field name='lastName' className="form-control"/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <div className="row">
                                        <label htmlFor="email" className="col-3 form-label">Email</label>
                                        <ErrorMessage component="p" name="email" className="col text-danger"/>
                                        </div>
                                        <Field name='email' type="email" className="form-control" placeholder="nombre@ejemplo.com"/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <div className="row">
                                        <label htmlFor="password" className="col-3 form-label">Contraseña</label>
                                        <ErrorMessage component="p" name="password" className="col text-danger"/>
                                        </div>
                                        <Field  name='password' type="password" className="form-control"/>
                                       
                                    </div>

                                    <div className="form-group mb-3">
                                        <div className="row">
                                        <label htmlFor="password" className="col-5 form-label">Confirma tu contraseña</label>
                                        <ErrorMessage component="p" name="confirmPassword" className="col text-danger"/>
                                        </div>
                                        <Field name='confirmPassword' type="password" className="form-control"/>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="footer mt-4 card text-center">
                                            <button type="submit" className="btn btn-outline-primary">
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
        </div>
    )
}

export default RegisterForm;