import loginImg from "../../login2.svg";
import NavbarLogin from "../../components/login/navbar_login"
import { usePosts } from "../../context/postContext"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

function LoginForm() {

    const { loginUser } = usePosts();
    const { posts } = usePosts();
    const navigate = useNavigate();
    var errorLogin = false;
    return (
        <div className="base-container">

            <NavbarLogin locale={true} />

            <div className="container-sm mt-5">
                <div className="row ">
                    <div className="col text-start card p-5 shadow-lg p-3 mb-5 bg-body rounded">

                        <div className="mb-5">
                            <label className="fs-1">Inicio de sesión</label>
                        </div>

                        <div className="content" >
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
                                        navigate('/')
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
                                        </div>

                                        <div className="text-center">
                                            <div className="footer mt-4 card text-center">
                                                <button type="submit" className="btn btn-outline-primary">
                                                    Inciar Sesión
                                                </button>

                                            </div>
                                            <hr></hr>
                                            <a>¿Olvidaste tu contraseña?</a>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>

                    </div>
                    <div className="col-7 ">
                        <div className="image img-fluid">
                            <img src={loginImg}></img>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginForm;