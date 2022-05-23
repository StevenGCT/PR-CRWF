import {Formik, Form, Field} from 'formik'
import {useUsers} from '../context/userContext'

export function CreateProject() {

    const {createFunding, categorys} = useUsers()

    return(
        <div>
            <Formik
                initialValues={{
                    Title : 'asd',
                    Question1 : 'asd',
                    Question2 : 'asd',
                    Question3 : 'asd',
                    FastDescription : 'asd',
                    Description : 'asdasd',
                    FundingImage1 : 'asd',
                    FundingImage2 : 'asd',
                    FundingImage3 : 'asd',
                    FundingVideo : 'asd',
                    AccountNumber : 'asd',
                    SocialMedia : 'asd',
                    IdCategory : 1,
                    Goal : 100000.00,
                    }}
                    onSubmit = {(values, actions)=>{
                        createFunding(values)
                        console.log(values)
                    }}
                >
                
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="Title" placeholder="Título de la campaña" required/>
                        <Field name="Question1" placeholder="Misión del creador de la campaña" required/>
                        <Field name="Question2" placeholder="Visión de la campaña" required/>
                        <Field name="Question3" placeholder="Objetivos de la campaña" requiredd/>
                        <Field name="FastDescription" placeholder="Descripcion rapida" required/>
                        <Field name="Description" placeholder="Descripcion" required/>
                        <Field name="FundingImage1" placeholder="Link de la imagen" required/>
                        <Field name="FundingImage2" placeholder="Link de la imagen" required/>
                        <Field name="FundingImage3" placeholder="Link de la imagen" required/>
                        <Field name="FundingVideo" placeholder="Link del video" required/>
                        <Field name="AccountNumber" placeholder="Numero de cuenta" required/>
                        <Field name="SocialMedia" placeholder="Link de tus redes sociales" required/>
                        <Field as="select" name="IdCategory">
                            <option value="0" disabled hidden selected>Elige una categoria:</option>
                            {categorys.map(category => (
                                <option value={category.IdCategory} >
                                {category.CategoryName}
                                </option>
                            ))} 
                        </Field>
                        <Field name="Goal" type="number" placeholderr="Meta a recaudar" required/>
                        <button type='submit'>Save</button>
                    </Form>
                )}    

                
            </Formik>
        </div>
        );
    }