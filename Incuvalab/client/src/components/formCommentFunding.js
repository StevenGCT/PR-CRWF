import React from 'react';
import { useState, useEffect } from 'react'
import { useUsers} from '../context/userContext'
import { Card, CardGroup } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

function Comment(props) {
    const { createComment } = useUsers();
    const navigate = useNavigate();
    return (
        <div className='mb-2'>
            <Formik className="form"
                initialValues={{
                    comment: ''
                }}
                onSubmit={async (values, actions) => {
                    values.idUser = props.idUser;
                    values.idFunding = props.idFunding;
                    const posts = await createComment(values)
                    if (posts) {
                        window.location.href = window.location.href;
                    } else {
                        
                    }
                }}
            >
                {({ handleSubmit }) => (
                    <Card className='p-3'>
                        <Form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <Field name='comment' type="textarea" className="form-control" placeholder="Ingresa tu comentario" />
                            </div>

                            <div className="text-center">
                                <div className="footer mt-2 card">
                                    <button type="submit" className="btn btn-outline-secondary">
                                        Comentar
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </Card>
                )}
            </Formik>
        </div>
    );
}

export default Comment;