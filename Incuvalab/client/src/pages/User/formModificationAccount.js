import { useUsers } from '../../context/userContext'
import './../../css/setting.css'
import NavbarLogin from "../../components/header-navbar"
import { Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../../components/images/profile.webp'
import Footer from "../../components/footer"
import Accordion from 'react-bootstrap/Accordion'
import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from 'react-bootstrap'

export function FormModfiedAccount() {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));

    const { getUserById, getFollowedCount, getDonatedCount, getUserFundingCount } = useUsers()
    const [post, setPost] = useState({
    });
    const [postCount, setPostCount] = useState({
        countFollowedFunding: "",
        countDonationsFunding: "",
        countCreateFunding: ""
    });
    useEffect(() => {
        (async () => {
            if (dataUser[0].IdUser != undefined) {
                const post = await getUserById(dataUser[0].IdUser);
                setPost(post[0]);
            }
        })();
    }, [dataUser[0].IdUser, getUserById]);

    useEffect(() => {
        (async () => {
            if (dataUser[0].IdUser != undefined) {
                const postCount = await getFollowedCount(dataUser[0].IdUser);
                const postCount2 = await getDonatedCount(dataUser[0].IdUser);
                const postCount3 = await getUserFundingCount(dataUser[0].IdUser);
                setPostCount({
                    countFollowedFunding: postCount[0].countFollowedFunding,
                    countDonationsFunding: postCount2[0].countDonationsFunding,
                    countCreateFunding: postCount3[0].countCreateFunding
                })
            }
        })();
    }, [dataUser[0].IdUser, getFollowedCount, getDonatedCount, getUserFundingCount]);

    return (
        <div>
            <NavbarLogin locale={true} />
            <div class="container">
                <div class="row profile">
                    <div class="col-md-3">
                        <div class="profile-sidebar text-center">
                            <div className='mb-3'>
                                <h5>Mi perfil</h5>
                            </div>
                            <div class="profile-userpic">
                                <img src={avatar} class="img-responsive" alt="" />
                            </div>
                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    {post.Name + post.LastName}
                                </div>
                                <div class="profile-usertitle-job">
                                    {"@" + post.UserName}
                                </div>
                            </div>
                            <div class="profile-usermenu">
                                <ul class="nav">
                                    <li class="active">
                                        <a href="/Settings">
                                            <i class="glyphicon glyphicon-home"></i>
                                            Mi perfil </a>
                                    </li>
                                    <li>
                                        <a href="/Settings/ModifiedProfile">
                                            <i class="glyphicon glyphicon-flag"></i>
                                            Editar perfil </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="glyphicon glyphicon-flag"></i>
                                            Ayuda </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="portlet light bordered">
                                <div class="row list-separated profile-stat">
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <div class="uppercase profile-stat-title"> {postCount.countCreateFunding} </div>
                                        <div class="uppercase profile-stat-text">Campañas</div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <div class="uppercase profile-stat-title"> {postCount.countFollowedFunding} </div>
                                        <div class="uppercase profile-stat-text">Seguidas </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                        <div class="uppercase profile-stat-title"> {postCount.countDonationsFunding} </div>
                                        <div class="uppercase profile-stat-text">Donadas </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 class="profile-desc-title">Información</h4>
                                    <span class="profile-desc-text">Email</span>
                                    <br />
                                    <span class="profile-desc-text">{post.Email}</span>
                                    <br />
                                    <span class="profile-desc-text">Número de telefono</span>
                                    <br />
                                    <span class="profile-desc-text">{post.PhoneNumber}</span>
                                    <br />
                                    <span class="profile-desc-text">Participa desde</span>
                                    <br />
                                    <span class="profile-desc-text">{post.RegisterDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-content">

                            <h3 className='my-3'>Cofigurar cuenta</h3>
                            <Formik className="form"
                                initialValues={{
                                    email: post.Email,
                                    password: '',
                                    confirmNewPassword: '',
                                    newPassword: ''
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string().required('* Email es un campo requerido').email('* Email invalido'),
                                    password: Yup.string().required('* Contraseña es un campo requerido'),
                                    confirmNewPassword: Yup.string().required('* Cónfirmación de contraseña es un campo requerido').oneOf([Yup.ref('newPassword'), null], '* Las contraseñas no coinciden'),
                                    newPassword: Yup.string().required('* Nueva contraseña es un campo requerido').min(8, '* Contraseña demasiado corta - Ingrese por lo menos 8 caracteres.')
                                })}
                                onSubmit={async (values, actions) => {
                                }}
                                enableReinitialize={true}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className='px-5 py-2'>
                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Correo electronico</label>
                                                    <ErrorMessage component="p" name="email" className="col text-danger" />
                                                    <Field name='email' type="email" className="form-control form-control-sm" />
                                                </div>
                                            </div>

                                            <h6>Cambiar de contraseña</h6>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Contraseña nueva</label>
                                                    <ErrorMessage component="p" name="newPassword" className="col text-danger" />
                                                    <Field name='newPassword' type="password" className="form-control form-control-sm" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Confimar contraseña</label>
                                                    <ErrorMessage component="p" name="confirmNewPassword" className="col text-danger" />
                                                    <Field name='confirmNewPassword' type="password" className="form-control form-control-sm" />
                                                </div>
                                            </div>

                                            <h6>Confimar los cambios</h6>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label className=''>Contraseña actual</label>
                                                    <ErrorMessage component="p" name="password" className="col text-danger" />
                                                    <Field name='password' className="form-control form-control-sm" aria-describedby="password " />
                                                    <div id="password" type="password" class="form-text">Ingresa tu contraseña actual para guardar estos cambios.</div>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <div className="mt-4 text-center">
                                                    <button type="submit" className="button btn-outline-login">
                                                        Guardar configuración
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
