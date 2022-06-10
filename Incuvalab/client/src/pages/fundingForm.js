import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import React from "react";
import { useUsers, usePostsCat } from "../context/userContext"
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import arrow_back from '../components/images/assets/arrow_back_.png'
import { propTypes } from "react-bootstrap/esm/Image";

export function FundingForm(props) {

    const navigate = useNavigate();
    const { createFunding } = useUsers();
    const { postsCat } = usePostsCat()

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
                    initialValues={{
                        title: '',
                        question1: '',
                        question2: '',
                        question3: '',
                        fastDescription: '',
                        description: '',
                        fundingImage1: '',
                        fundingImage2: '',
                        fundingImage3: '',
                        fundingVideo: '',
                        accountNumber: '',
                        socialMedia: '',
                        idCategory: '',
                        goal: ''
                    }}

                    validationSchema={Yup.object({

                    })}

                    onSubmit={async (values, actions) => {
                        const posts = await createFunding(values);
                        if (posts != null) {
                            navigate('/control-page-aprove')
                        } else {

                        }
                    }}>

                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col text-center text-secondary">
                                    Escribe un título y un subtítulo de forma clara y concisa para transmitir rápidamente la esencia de tu proyecto. Ambos aparecerán tanto en la página del proyecto como en la de prelanzamiento.
                                </div>
                                <div className="col form-group mb-3">
                                    <label className="fw-semibold">Título</label>
                                    <Field name='title' className="form-control" placeholder="Falso Muntis: Nuestra Opera prima" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col form-group mb-3 ">
                                    <label className="fw-semibold">Descripcion breve</label>
                                    <Field component="textarea" name='fastDescription' className="form-control" maxlength="135" rows="2" placeholder="La ópera prima de nuestra compañía teatral: Una comedia con actores/músicos en vivo basada en el mito griego de Orfeo y Eurídice." />
                                </div>
                                <div className="col form-group mb-3">
                                    <label className="fw-semibold">Descripcion General</label>
                                    <Field component="textarea" name='description' className="form-control" maxlength="135" rows="2" placeholder="La ópera prima de nuestra compañía teatral: Una comedia con actores/músicos en vivo basada en el mito griego de Orfeo y Eurídice." />
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label className="fw-semibold">Misión del creador de la campaña</label>
                                <Field name='question1' type="text" component="textarea" className="form-control" />
                            </div>

                            <div className="form-group mb-3">
                                <label className="fw-semibold">Visión de la campaña</label>
                                <Field name='question2' type="text" component="textarea" className="form-control" />
                            </div>

                            <div class="form-group mb-3">
                                <label className="fw-semibold">Objetivos de la campaña</label>
                                <Field name='question3' type="text" component="textarea" className="form-control" />
                            </div>

                            <div className="my-4">
                                <h4>Mas información</h4>
                                <hr />
                            </div>

                            <div className="row">
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Link de la video presentacion de la compaña</label>
                                    <Field name='fundingVideo' type="text" className="form-control" placeholder="https://www.youtube.com/embed/tuVideo" />
                                </div>
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Social media</label>
                                    <Field name='socialMedia' type="text" className="form-control" placeholder="Facebook, Twiter o Instagram" />
                                </div>
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Categoria</label>
                                    <br />
                                    <Field name="idCategory" className="form-select" component="select">
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
                                    <Field name='accountNumber' type="text" className="form-control" />
                                </div>
                                <div class="col form-group mb-3">
                                    <label className="fw-semibold">Meta a reacudar</label>
                                    <div class="input-group">
                                        <Field name='goal' type="text" className="form-control" placeholder="0.00" />
                                        <span class="input-group-text">$</span>
                                        <span class="input-group-text">0.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="footer mt-4 card text-center">
                                    <button type="submit" className="button btn-outline-login">
                                        Crear campaña
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}