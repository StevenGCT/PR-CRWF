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
        idFunding: "",
        title: "",
        question1: "",
        question2: "",
        question3: "",
        fastDescrption: "",
        description: "",
        fundingImage1: "",
        fundingImage2: "",
        fundingImage3: "",
        fundingVideo: "",
        socialMedia: "",
        category: "",
        idCategory: "",
        goal: "",
        currentGoal: "",
        accountNumber: ""
    });

    const params = useParams();

    useEffect(() => {
        (async () => {
            if (params.id) {
                const post = await getFundingById(params.id);

                setPost({
                    idFunding: post[0].IdFunding,
                    title: post[0].Title,
                    question1: post[0].Question1,
                    question2: post[0].Question2,
                    question3: post[0].Question2,
                    fastDescription: post[0].FastDescription,
                    description: post[0].Description,
                    fundingImage1: post[0].FundingImage1,
                    fundingImage2: post[0].FundingImage2,
                    fundingImage3: post[0].FundingImage3,
                    fundingVideo: post[0].FundingVideo,
                    socialMedia: post[0].SocialMedia,
                    category: post[0].Category,
                    idCategory: post[0].IdCategory,
                    goal: post[0].Goal,
                    currentGoal: post[0].CurrentGoal,
                    accountNumber: post[0].AccountNumber
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
                    <h2>Crear una campaña</h2>
                </div>

                <h4>Presentación del proyecto</h4>
                <hr />

                <Formik className="form"
                    initialValues={post}

                    validationSchema={Yup.object({

                    })}

                    onSubmit={async (values, actions) => {
                        if (post.idFunding != "") {
                            const posts = await updateFunding(values);
                            if (posts != null) {
                                window.location.replace('/control-page-aprove')
                            } else {

                            }
                        } else {
                            const posts = await createFunding(values);
                            if (posts != null) {
                                window.location.replace('/control-page-aprove')
                            }
                        }

                    }}

                    enableReinitialize={true}>

                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <section id="first">
                                <div className="row mb-3">
                                    <div className="col  text-secondary">
                                    Escribe un título y un subtítulo de forma clara y concisa para transmitir rápidamente la esencia de tu proyecto. Ambos aparecerán tanto en la página del proyecto como en la de prelanzamiento.
                                    También los verán los posibles patrocinadores si tu proyecto aparece en las páginas de la categoría, en los resultados de búsqueda o en los correos electrónicos que enviamos a nuestra comunidad.
                                        </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Título</label>
                                        <Field name='title' className="form-control" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col form-group mb-3 ">
                                        <label className="fw-semibold">Descripcion breve</label>
                                        <Field component="textarea"  name='fastDescription' className="form-control" maxlength="135" rows="4"  />
                                    </div>
                                    <div className="col form-group ">
                                        <label className="fw-semibold">Descripcion General</label>
                                        <Field component="textarea"  name='description' className="form-control" maxlength="135" rows="4"  />
                                    </div>
                                </div>

                                <a className="flex btn btn-success" href="#second">Ir a la siguiente sección</a>
                            </section>

                            <section id="second" >
                                <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>
                                   <p>Cuéntale a las personas por qué deberían entusiasmarse con tu proyecto. Sé específico, y a la vez claro y conciso.</p>
                                <div className="form-group">
                                    <h4 className="fw-semibold">Misión del creador de la campaña</h4>
                                    <li><strong>¿Cuál el plan para tu proyecto, y en qué margen de tiempo?</strong></li> 
                                    <p>Establece un cronograma claro y específico para los patrocinadores.</p>
                                    
                                    <li><strong>¿Qué presupuesto tienes?</strong></li>
                                    <p> Un simple desglose demuestra que has pensado bien las cosas y que tienes un plan razonable, es decir, eres una persona fiable que usará los fondos de los patrocinadores de una forma adecuada.
                                    </p>
                                    <li><strong>¿Por qué este proyecto?</strong></li> 
                                    <p>Transmite tu entusiasmo sobre el proyecto a la gente, hazle sentir tu compromiso de llevarlo a cabo.</p>
                                 
                                    <Field name='question1' type="text" component="textarea" Style="height:280px;" maxlength="280px" className="form-control" />
                                </div>
                                <a className="flex btn btn-success mt-3" href="#three">Ir a la siguiente sección</a>
                            </section>
                            <section id="three">
                            <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>
                                   
                                   <div className="form-group">
                                       <h4 className="fw-semibold">Visión de la campaña</h4>
                                       <li><strong>¿Qué quieres crear?</strong></li> 
                                       <p>¡Cuántos más detalles, mejor! Incluye bocetos, muestras, prototipos y contagia tu entusiasmo a los patrocinadores.</p>
                                       
                                       <li><strong>¿Cómo surgió la idea para este proyecto?</strong></li>
                                       <p> Cuenta cómo comenzó todo y hasta dónde has llegado en este momento. De esta forma, los patrocinadores pueden entender qué tipo de trabajo ofreces y cómo lo manejas.
                                       </p>
                                       
                                       <Field name='question2' type="text" component="textarea" Style="height:360px;" maxlength="350px" className="form-control" />
                                   </div>
                                   <a className="flex btn btn-success mt-5" href="#four">Ir a la siguiente sección</a>
                            </section>

                            <section id="four">
                            <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>
                                   
                                   <div className="form-group">
                                       <h4 className="fw-semibold">Sobre ti y/o tu equipo de trabajo</h4>
                                       <li><strong>¿Quién eres?</strong></li> 
                                       <p>Preséntate. Presenta a tu equipo y trabajos similares que realizaste en el pasado, o mejor aún: ¡muestra unos ejemplos!</p>
                                       
                                       <li><strong>Riesgos y desafíos</strong></li>
                                       <p>Sé honesto acerca de los posibles riesgos y desafíos del proyecto y cómo planeas superarlos para completarlo.</p>
                                       
                                       <Field name='question3' type="text" component="textarea" Style="height:360px;" maxlength="350px" className="form-control" />
                                   </div>
                                   <a className="flex btn btn-success mt-5" href="#five">Ir a la siguiente sección</a>
                            </section>

                            <section id="five">
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
                            </section>
                            <section id="six">
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
                                {
                                    post.idFunding != "" ?
                                        <div className="text-center">
                                            <div className="card-body mt-4 text-center">
                                                <button type="submit" className="button btn-outline-login">
                                                    Modificar campaña
                                                </button>
                                            </div>
                                        </div> :
                                        <div className="text-center">
                                            <div className="card-body mt-4  text-center">
                                                <button type="submit" className="button btn-outline-login">
                                                    Crear campaña
                                                </button>
                                            </div>
                                        </div>
                                }
                            </section>
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}