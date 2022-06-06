import React from 'react';
import { useState, useEffect } from 'react'
import { useUsers} from '../context/userContext'
import { Card, CardGroup } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

function Comment(props) {
    const { createComment , userDonateFunding} = useUsers();
    const navigate = useNavigate();

    const [post, setPost] = useState({
        idUsers:[]
    });

    useEffect(() => {
        (async () => {
            if ( props.idFunding) {
                const post = await userDonateFunding( props.idFunding);
                setPost({ idUsers : post });
                
            }
        })();
    }, [props.idFunding, userDonateFunding]);

    

    return (
        <div className='mb-2'>
            {
post.idUsers.find(element => element.idUser == props.idUser)!= null?
                    
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
                    }}>
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
                    </Formik>:
                     <Card className='p-3'>
                    <p>Comentarios habilitados para donadores</p>
                 </Card>
                    }
            
        </div>
    );
}

export default Comment;