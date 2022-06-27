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
import { Link, Navigate, useNavigate } from 'react-router-dom'
import moment from 'moment'

export function FormModfiedUser() {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();
    const { getUserById, getFollowedCount, getDonatedCount, getUserFundingCount, setUpdateUser } = useUsers()
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
                                        <a href="/Settings/ConfigureAccount">
                                            <i class="glyphicon glyphicon-flag"></i>
                                            Configurar cuenta </a>
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
                                    <span class="profile-desc-text">{moment(post.RegisterDate).format('DD/MM/YYYY')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-content">

                            <h3 className='my-3'>Editar perfil</h3>
                            <Formik className="form"
                                initialValues={{
                                    name: post.Name,
                                    lastname: post.LastName,
                                    secondlastname: post.SecondLastName,
                                    username: post.UserName,
                                    phonenumber: post.PhoneNumber,
                                    address: post.Address
                                }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('* Nombre es un campo requerido'),
                                    lastname: Yup.string().required('* Apellido es un campo requerido'),
                                    username: Yup.string().required('* Nombre de usuario es un campo requerido'),
                                })}
                                onSubmit={async (values, actions) => {
                                    const resulUpdate = await setUpdateUser(dataUser[0].IdUser, values);

                                    if (resulUpdate.length > 0) {
                                        navigate('/Settings')
                                    } else {

                                    }
                                }}

                                enableReinitialize={true}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className='px-5 py-2'>
                                            
                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Nombre</label>
                                                    <ErrorMessage component="p" name="name" className="col text-danger" />
                                                    <Field name='name' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Apellido Paterno</label>
                                                    <ErrorMessage component="p" name="lastname" className="col text-danger" />
                                                    <Field name='lastname' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                                <div className="col form-group mb-3">
                                                    <label>Apellido Materno</label>
                                                    <ErrorMessage component="p" name="secondlastname" className="col text-danger" />
                                                    <Field name='secondlastname' className="form-control form-control-sm" placeholder="Ingresa tu apellido" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Nombre de Usuario</label>
                                                    <ErrorMessage component="p" name="username" className="col text-danger" />
                                                    <Field name='username' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Número de telefono</label>
                                                    <ErrorMessage component="p" name="phonenumber" className="col text-danger" />
                                                    <Field name='phonenumber' className="form-control form-control-sm" placeholder="Ingresa telefono" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Dirección</label>
                                                    <ErrorMessage component="p" name="address" className="col text-danger" />
                                                    <Field name='address' className="form-control form-control-sm" placeholder="Ingresa dirección" />
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
