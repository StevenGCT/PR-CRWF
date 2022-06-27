import { useUsers } from '../context/userContext'
import { Formik, Form, Field } from 'formik'
import './../css/setting.css'
import NavbarLogin from "../components/header-navbar"
import { Col, Row, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../components/images/profile.webp'
import Footer from "../components/footer"
import Accordion from 'react-bootstrap/Accordion'
import { useState, useEffect } from 'react'
import { Register } from './register'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import { Link } from 'react-router-dom'

export function Settings() {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));

    const { getUserById, getFollowedCount, getDonatedCount, getUserFundingCount, getFollowedFunding, getDonatedFunding, getUserFunding } = useUsers()
    const [post, setPost] = useState({
    });
    const [postCount, setPostCount] = useState({
        countFollowedFunding: "",
        countDonationsFunding: "",
        countCreateFunding: ""
    });
    const [postFollowed, setPostFollowed] = useState({
    });

    const [postDonated, setPostDonated] = useState({
    });

    const [postFunding, setPostFunding] = useState({
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

    useEffect(() => {
        (async () => {
            const postDonated = await getDonatedFunding(dataUser[0].IdUser)
            const postFollowed = await getFollowedFunding(dataUser[0].IdUser)
            const postFunding = await getUserFunding(dataUser[0].IdUser)
            setPostDonated(postDonated)
            setPostFollowed(postFollowed)
            setPostFunding(postFunding)
        })();
    }, [dataUser[0].IdUser, getFollowedFunding, getDonatedFunding, getUserFunding]);

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
                                    <li>
                                        <a href="/Settings/ConfigureAccount">
                                            <i class="glyphicon glyphicon-user"></i>
                                            Confgurar cuenta </a>
                                    </li>
                                    <li>
                                        <a href="/Settings/ModifiedProfile">
                                            <i class="glyphicon glyphicon-user"></i>
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

                            <h3 className='my-3'>Mi panel de control</h3>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Campañas a las Que Sigues</Accordion.Header>
                                    {Object.keys(postFollowed).length != 0 ?
                                        <Accordion.Body>
                                            {postFollowed.map(postF => (
                                                <div>
                                                    {
                                                        postF.IdFunding != null ?
                                                            <Card key={postF.IdFunding} className="my-3">
                                                                <Card.Header className='text-wrap'>
                                                                    {postF.Title}
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        {postF.FastDescription}
                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    <Link to={"/funding/" + postF.IdFunding}>Ir a proyecto</Link>
                                                                </Card.Footer>
                                                            </Card> :
                                                            <p>No sigues ninguna campaña</p>
                                                    }
                                                </div>

                                            ))}
                                        </Accordion.Body>
                                        :
                                        <AccordionBody>No sigues ninguna campaña</AccordionBody>
                                    }
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Campañas a las Que Donaste</Accordion.Header>
                                    {Object.keys(postDonated).length != 0 ?
                                        <Accordion.Body>
                                            {postDonated.map(postD => (
                                                <div>
                                                    {
                                                        postD.IdFunding != null ?
                                                            <Card key={postD.IdFunding} className="my-3">
                                                                <Card.Header className='text-wrap'>
                                                                    {postD.Title}
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        {postD.FastDescription}
                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    <Link to={"/funding/" + postD.IdFunding}>Ir a proyecto</Link>
                                                                </Card.Footer>
                                                            </Card>
                                                            :
                                                            <p>No sigues ninguna campaña</p>
                                                    }
                                                </div>

                                            ))}
                                        </Accordion.Body>
                                        :
                                        <AccordionBody>No donaste a ninguna campaña</AccordionBody>
                                    }
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Mis Campañas</Accordion.Header>
                                    {Object.keys(postFunding).length != 0 ?
                                        <Accordion.Body>
                                            {postFunding.map(postFU => (
                                                <div>
                                                    {
                                                        postFU.IdFunding != null ?
                                                            <Card key={postFU.IdFunding} className="my-3">
                                                                <Card.Header className='text-wrap'>
                                                                    {postFU.Title}
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        {postFU.FastDescription}
                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    <Link to={"/funding/" + postFU.IdFunding}>Ir a proyecto</Link>
                                                                </Card.Footer>
                                                            </Card> :
                                                            <p>No sigues ninguna campaña</p>
                                                    }
                                                </div>

                                            ))}
                                        </Accordion.Body>
                                        :
                                        <AccordionBody>No creaste ninguna campaña</AccordionBody>
                                    }
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}


