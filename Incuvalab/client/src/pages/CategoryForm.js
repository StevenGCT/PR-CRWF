import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useCategorys} from '../context/categoryContext';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

export function CategoryForm() {
    const {createCategory, getCategory} = useCategorys();
    const navigate = useNavigate();
    const params = useParams();
    const [category, setCategory]= useState({
        Category: ''
    });

    useEffect(()=>{
        (async()=>{
            if(params.id){
                const category = await getCategory(params.id);
                setCategory(category);
            }
        })();
    },[]);

    return (
        <div>
            <Formik initialValues={category}
             validationSchema ={Yup.object({
                 Category: Yup.string().required("Nombre Categoria Requerido")
             })}
             onSubmit={async(values, actions)=>{
                 console.log(values);
                await createCategory(values);
                 navigate('/')
             }}
             enableReinitialize
            >
                {({handleSubmit})=>(
                <Form onSubmit={handleSubmit}>
                    <Field name="Category" placeholder="Categoria"/>
                    <ErrorMessage component="p" className="text-sm text-white" name="Category"/>
                    <button type="submit" >Crear</button>
                </Form>
                )}
            </Formik>
        </div>
    );
  }