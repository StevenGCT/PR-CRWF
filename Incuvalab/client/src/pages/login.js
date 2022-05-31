import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import { useUsers } from "../context/userContext"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import './../css/login.css';

export function Login() {

    const { loginUser, getTypeUser } = useUsers();

    const navigate = useNavigate();
    var errorLogin = false;

    return (
        <div className="base-container">

            <NavbarLogin locale={true} />

            <div className="container-sm my-5 card shadow-lg bg-body rounded">
                <div className="row ">
                    <div className="col text-start m-5">

                        <div className="mb-5">
                            <h1>Inicio de sesión</h1>
                        </div>

                        <div className="content mb-4" >
                            <Formik className="form"
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string().required('* Email es un campo requerido').email('* Email invalido'),
                                    password: Yup.string().required('* Contraseña es un campo requerido'),
                                })}
                                onSubmit={async (values, actions) => {
                                    const posts = await loginUser(values)
                                    if (posts.length > 0) {
                                        localStorage.setItem('user',JSON.stringify(posts));
                                        const postsTypeUser = await getTypeUser(posts[0].IdUser);
                                        
                                        if(postsTypeUser.length > 0 && postsTypeUser[0].TypeUserName == "Administrador"){
                                            navigate('/control-page')
                                            localStorage.setItem('role', 'Administrador');
                                        }else{
                                            navigate('/')
                                            localStorage.setItem('role', 'Usuario');
                                        }
                                        
                                    } else {
                                        errorLogin = true;
                                    } 
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>

                                        {errorLogin == true &&
                                            <div disabled="false" className="alert alert-danger" role="alert">
                                                Email o contraseña incorrectos.
                                            </div>
                                        }
                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <label htmlFor="email" className="col-3 form-label">Email</label>
                                                <ErrorMessage component="p" name="email" className="col text-danger" />
                                            </div>
                                            <Field name='email' type="email" className="form-control" placeholder="nombre@ejemplo.com" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <label htmlFor="password" className="col-3 form-label">Contraseña</label>
                                                <ErrorMessage component="p" name="password" className="col text-danger" />
                                            </div>
                                            <Field name='password' type="password" className="form-control" />
                                            <div className="text-center my-4">
                                                <a className="link-secondary text-center">¿Olvidaste tu contraseña?</a>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className="footer mt-4 card">
                                                <button type="submit" className="button btn-outline-login">
                                                    Iniciar Sesión
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>

                    </div>

                    <div className="col-7 position-relative gradient">
                        <div className="position-absolute top-50 start-50 translate-middle text-light text-center">
                            <h1>¡Bienvenido!</h1>
                            <h3 className="">Estamos a tu disposición para ayudarte.</h3>
                            <h6 className="my-4">¿No tienes una cuenta?</h6>
                            <form action="/register">
                                <button className="btn-option" type="sumit">Registrate</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}