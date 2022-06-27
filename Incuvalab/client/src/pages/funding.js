import { useState, useEffect } from 'react'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { usePostsFund } from "../context/userContext"
import OfertFunding from '../components/cardOfertsFunding'
import Comment from '../components/commentFundinng'
import CommentFrom from '../components/formCommentFunding'
import { Modal, ProgressBar, Button, ButtonGroup } from 'react-bootstrap'
import { QrCardPayment } from '../components/QrCardPayment'


export function FundingPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const dataUser = JSON.parse(sessionStorage.getItem('user'));

    const { getFundingById, setFollowedFunding, getFollowedFunding } = usePostsFund();
    const [post, setPost] = useState({
        IdFunding: "",
        Title: "",
        Question1: "",
        Question2: "",
        Question3: "",
        FastDescrption: "",
        Description: "",
        FundingImage1: "",
        FundingImage2: "",
        FundingImage3: "",
        FundingVideo: "",
        SocialMedia: "",
        Category: "",
        Goal: "",
        CurrentGoal: ""
    });

    const [postFollowed, setPostFollowed] = useState({
    });


    const params = useParams();

    useEffect(() => {
        (async () => {
            if (params.id) {
                const post = await getFundingById(params.id);

                setPost({
                    IdFunding: post[0].IdFunding,
                    Title: post[0].Title,
                    Question1: post[0].Question1,
                    Question2: post[0].Question2,
                    Question3: post[0].Question2,
                    FastDescrption: post[0].FastDescription,
                    Description: post[0].Description,
                    FundingImage1: post[0].FundingImage1,
                    FundingImage2: post[0].FundingImage2,
                    FundingImage3: post[0].FundingImage3,
                    FundingVideo: post[0].FundingVideo,
                    SocialMedia: post[0].SocialMedia,
                    Category: post[0].Category,
                    Goal: post[0].Goal,
                    CurrentGoal: post[0].CurrentGoal
                });

            }
        })();
    }, [params.id, getFundingById]);

    useEffect(() => {
        (async () => {
            const postFollowed = await getFollowedFunding(dataUser[0].IdUser)
            setPostFollowed(postFollowed)
        })();
    }, [dataUser[0].IdUser, getFollowedFunding]);

    return (
        <div className="base-container">
            <NavbarLogin locale={true} />
            <div className="container-sm  my-5 ">
                <h4 className="text-center">{post.Title}</h4>
                <p className="text-center">{post.FastDescrption}</p>

                <div className="row">
                    <div className="col-sm-8 text-center mx-auto mb-2" >
                        <div className="ratio ratio-16x9">
                            <iframe src={post.FundingVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <div className="card-body col px-5 pb-5 pt-4">
                                <div className="row mb-3">
                                    <div>
                                        {post.CurrentGoal >= post.Goal ?
                                            <ProgressBar min={0} now={(post.CurrentGoal * 100) / post.Goal} max={100} variant="success" />
                                            : <ProgressBar min={0} now={(post.CurrentGoal * 100) / post.Goal} max={100} variant="dark" />
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <h4>{post.CurrentGoal} Bs.</h4>
                                </div>
                                <div className="row">
                                    <p>contribuido de {post.Goal} Bs.</p>
                                </div>
                                <div className="row">
                                    <h3>Contribuir</h3>
                                </div>
                                <div className="row my-4">
                                    <div className="col">Cantidad</div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="0.0" />
                                    </div>
                                </div>
                                <div className="row">
                                    <h5>Detalles de donación</h5>
                                </div>
                                <div className="row form-switch form-check mb-3">
                                    <div className="form-switch form-check">
                                        <input className="col form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label className="col form-check-label" htmlFor="flexSwitchCheckChecked">No mostrar publicamente mi nombre en la donación a esta campaña</label>
                                    </div>
                                </div>
                                <div className="row ">
                                    {
                                        dataUser == null ?
                                            <Link to={'/login'} className="col button btn-general btn btn-secondary">Donar</Link> :
                                            <div>
                                                <Button href="#" className="col button btn-general btn btn-secondary" onClick={handleShow}>
                                                    Donar
                                                </Button>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Escoja Monto De Donacion</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className='flex justify-center'>
                                                            <QrCardPayment />
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                    }

                                </div>
                                <div className="row my-2" >
                                    <Formik initialValues={{
                                        idUser: dataUser[0].IdUser,
                                        idFunding: params.id
                                    }}
                                        onSubmit={async (values, actions) => {
                                            const resFollowed = await setFollowedFunding(values);
                                            window.location.reload()
                                        }} >
                                        {({ handleSubmit }) => (
                                            <Form onSubmit={handleSubmit} className='col'>
                                                {Object.keys(postFollowed).length != 0 ?
                                                    <div>
                                                        {postFollowed.length > 0 ?
                                                            <div>
                                                                {postFollowed.find(element => element.IdFunding == params.id) != null ?
                                                                    <button className="form-control col " disabled>Lo sigo!</button>
                                                                    :
                                                                    <button type='submit' className="col button btn-general">Seguir</button>
                                                                }</div> :
                                                            <div>
                                                                <button type='submit' className="col button btn-general">Seguir</button>
                                                            </div>
                                                        }
                                                    </div> :
                                                    <div>
                                                        <button type='submit' className="col button btn-general">Seguir</button>
                                                    </div>
                                                }

                                            </Form>
                                        )}
                                    </Formik>



                                    {post.SocialMedia == null ?
                                        <Link to={'/'} className="col button btn btn-general me-2 text-center">Visitar Social Media</Link> :
                                        <a className="col button btn btn-general me-2 text-center" href={post.SocialMedia}>Visitar Social Media</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container my-5">
                <h4 className="text-center mb-5">Opciones de donación directa</h4>
                <div className=" row row-cols-1 row-cols-md-3 mb-3  text-center ">
                    <OfertFunding
                        nombreDonacion="Donador incial"
                        monto="Libre"
                        descripcion="Apóyalo porque crees en él. Apoya el proyecto sin recompensa, simplemente porque te resulta interesante." />
                    <OfertFunding
                        nombreDonacion="Donador estrella"
                        monto="250 Bs."
                        descripcion="Siendo un donador estrella usted nos ayudará a llevar nuestro objetivo a las estrellas. Savemos que crees en nosotros." />
                    <OfertFunding
                        nombreDonacion="Donador Sol Naciente"
                        monto="500 Bs."
                        descripcion="Siendo un donador sol naciente usted nos ayudará a llevar nuestro objetivo a las estrellas. Savemos que crees en nosotros." />
                </div>
            </div>

            <hr />

            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-8 pe-4">
                        <h5>Historia del proyecto</h5>
                        <p>{post.Description}</p>
                        <img src={post.FundingImage1} className="img-fluid m-4"></img>
                        <p>{post.Question1}</p>
                        <img src={post.FundingImage2} className="img-fluid m-4"></img>
                        <p>{post.Question2}</p>
                        <img src={post.FundingImage3} className="img-fluid m-4"></img>
                        <p>{post.Question3}</p>
                    </div>

                    <div className="col-sm">
                        <h5>Comentarios</h5>
                        {
                            sessionStorage.getItem('user') != null ?
                                <CommentFrom idFunding={post.IdFunding} idUser={dataUser[0].IdUser} />
                                :
                                <CommentFrom idFunding={post.IdFunding} />
                        }
                        <hr />
                        <Comment idFunding={post.IdFunding} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}