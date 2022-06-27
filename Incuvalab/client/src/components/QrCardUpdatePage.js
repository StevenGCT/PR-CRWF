import {Formik, Form, Field} from 'formik'
import './../css/setting.css'
import { Col, Row,Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate } from 'react-router-dom';
import { usePostsQr } from '../context/userContext'

export function QrCardUpdatePage() {
    const{createPostQr} = usePostsQr()
    return (
                <Row className="g-4 rounded">
                    <Col >
                     <Card>                     
                      <Card.Header>
                      <h3 className="pb-3 pt-3">Modificar Qr</h3>
                      </Card.Header>  
                      <Card.Footer>
                        <Formik
                    initialValues={{
                     Mount : '',
                     image: null
                     }}
                     onSubmit = {(values, actions)=>{
                        createPostQr(values)
                        console.log(values)
                     }}
                    >                
                 {({ handleSubmit, setFieldValue }) => (
                    <Form onSubmit={handleSubmit}>   
                        <div className='m-2 p-3'>
                            <input type="file" name="image" onChange={(e) => setFieldValue('image',e.target.files[0])}/>
                        </div>         
                        
                        <div className="col">Cantidad</div>
                        <div className="col">
                           <Field type="text" className="form-control" name="Mount" placeholder="colocar un monto 5$" required/>
                        </div>
                        <div className='m-2 p-3'>
                          <button href="#" className="col button btn-general btn" type='submit'><strong>Actualizar</strong></button>
                        </div>                                           
                    </Form>
                )}    
            </Formik>:<Navigate to="/qrcreate"/>
                      </Card.Footer>
                       
                     </Card>                      
                    </Col>
               </Row>                 
    );
}