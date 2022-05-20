import {Formik, Form, Field} from 'formik'

export function CreateProject() {
    return(
        <div>
            <Formik
                initialValues={{
                    Title: '',
                    Question1: '',
                    Question2: '',
                    Question3: '',
                    FastDescription: '',
                    Description: ''
                    }}
                    onSubmit = {(values, actions)=>{
                        console.log(values)
                    }}
                >
                
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="Title" placeholder="title" required/>
                        <Field name="Question1" placeholder="Question1" required/>
                        <Field name="Question2" placeholder="Question2" required/>
                        <Field name="Question3" placeholder="Question3" requiredd/>
                        <Field name="FastDescription" placeholder="FastDescription" required/>
                        <Field name="Description" placeholder="Description" required/>
                        <button type='submit'>Save</button>
                    </Form>
                )}    

                
            </Formik>
        </div>
        );
    }