import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import React from "react";
import { useUsers, usePostsCat } from "../context/userContext"
import { Formik, Form, Field } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import arrow_back from '../components/images/assets/arrow_back_.png'
import { propTypes } from "react-bootstrap/esm/Image";
import { usePostsFund } from "../context/userContext"
import OfertFunding from '../components/cardOfertsFunding'
import { useState, useEffect } from 'react'
import { PostCard2 } from "../components/PostCard2";

export function FundingForm(props) {

    const navigate = useNavigate();
    const { createFunding, updateFunding } = useUsers();
    const { postsCat } = usePostsCat();

    const { getFundingById } = usePostsFund();
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
        SocialMedios: "",
        Category: "",
        IdCategory:"",
        Goal: "",
        CurrentGoal: "",
        AccountNumber:""
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
                    FastDescription: post[0].FastDescription,
                    Description: post[0].Description,
                    FundingImage1: post[0].FundingImage1,
                    FundingImage2: post[0].FundingImage2,
                    FundingImage3: post[0].FundingImage3,
                    FundingVideo: post[0].FundingVideo,
                    SocialMedia: post[0].SocialMedia,
                    Category: post[0].Category,
                    IdCategory: post[0].IdCategory,
                    Goal: post[0].Goal,
                    CurrentGoal: post[0].CurrentGoal,
                    AccountNumber: post[0].AccountNumber
                });

            }
        })();
    }, [params.id, getFundingById]);

    return (
        <div>
            <NavbarLogin locale={false} />

            <div className="container-sm my-2 p-5">
                <form action="/control-page">
                    <button className="flex mb-3" type="submit">
                        <img src={arrow_back} className="w-10"></img>
                        <h5 className="my-2">Volver</h5>
                    </button>
                </form>

                <div className="mb-4">
                    <h2>Crear fundamentos del proyecto</h2>
                </div>

                <h4>Presentación del proyecto</h4>
                <hr />

                <Formik className="form"
                    initialValues={post}

                    validationSchema={Yup.object({

                    })}

                    onSubmit={async (values, actions) => {
                        if(params != null){
                            const posts = await updateFunding(values);
                                console.log(posts)
                            if (posts != null) {
                                navigate('/control-page')
                            } else {
    
                            }
                        }else{
                            const posts = await createFunding(values);
                            if (posts != null) {
                                navigate('/control-page')
                            } else {
    
                            }
                        }
                        
                    }}

                    enableReinitialize={true}>

                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col text-center text-secondary">
                                    Escribe un título y un subtítulo de forma clara y concisa para transmitir rápidamente la esencia de tu proyecto. Ambos aparecerán tanto en la página del proyecto como en la de prelanzamiento.
                                </div>
                                <div className="col form-group mb-3">
                                    <label className="fw-semibold">Título</label>
                                    <Field name='Title' className="form-control" placeholder="Falso Muntis: Nuestra Opera prima" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col form-group mb-3 ">
                                    <label className="fw-semibold">Descripcion breve</label>
                                    <Field component="textarea" name='FastDescription' className="form-control" maxlength="135" rows="2" placeholder="La ópera prima de nuestra compañía teatral: Una comedia con actores/músicos en vivo basada en el mito griego de Orfeo y Eurídice." />
                                </div>
                                <div className="col form-group mb-3">
                                    <label className="fw-semibold">Descripcion General</label>
                                    <Field component="textarea" name='Description' className="form-control" maxlength="135" rows="2" placeholder="La ópera prima de nuestra compañía teatral: Una comedia con actores/músicos en vivo basada en el mito griego de Orfeo y Eurídice." />
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label className="fw-semibold">Misión del creador de la campaña</label>
                                <Field name='Question1' type="text" component="textarea" className="form-control" />
                            </div>

                            <div className="form-group mb-3">
                                <label className="fw-semibold">Visión de la campaña</label>
                                <Field name='Question2' type="text" component="textarea" className="form-control" />
                            </div>

                            <div class="form-group mb-3">
                                <label className="fw-semibold">Objetivos de la campaña</label>
                                <Field name='Question3' type="text" component="textarea" className="form-control" />
                            </div>

                            <div className="my-4">
                                <h4>Mas información</h4>
                                <hr />
                            </div>

                            <div className="row">
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Link de la video presentacion de la compaña</label>
                                    <Field name='FundingVideo' type="text" className="form-control" placeholder="https://www.youtube.com/embed/tuVideo" />
                                </div>
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Social media</label>
                                    <Field name='SocialMedia' type="text" className="form-control" placeholder="Facebook, Twiter o Instagram" />
                                </div>
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Categoria</label>
                                    <br />
                                    <Field name="IdCategory" className="form-select" component="select">
                                        <option value="0" selected >Elige una categoria</option>
                                        {postsCat.map(postCat => (
                                            <option value={postCat.IdCategory} >
                                                {postCat.CategoryName}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                            </div>

                            <div className="my-4">
                                <h4>Planifica y administra las finanzas de tu proyecto</h4>
                                <hr />
                            </div>

                            <div className="row">
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Número de cuenta</label>
                                    <Field name='AccountNumber' type="text" className="form-control" />
                                </div>
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Meta a reacudar</label>
                                    <div class="input-group">
                                        <Field name='Goal' type="text" className="form-control" placeholder="0.00" />
                                        <span class="input-group-text">$</span>
                                        <span class="input-group-text">0.00</span>
                                    </div>
                                </div>
                            </div>
                            {
                                params != null ?
                                    <div className="text-center">
                                        <div className="footer mt-4 card text-center">
                                            <button type="submit" className="button btn-outline-login">
                                                Modificar campaña
                                            </button>
                                        </div>
                                    </div> :
                                    <div className="text-center">
                                        <div className="footer mt-4 card text-center">
                                            <button type="submit" className="button btn-outline-login">
                                                Crear campaña
                                            </button>
                                        </div>
                                    </div>
                            }

                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}