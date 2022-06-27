import './../css/setting.css'
import { Col, Row,Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../components/images/Nube.png'

export function QrCardUpdatePage() {

    return (
                <Row className="g-4 rounded">
                    <Col >
                     <Card>                     
                      <Card.Header>
                      <h3 className="pb-3 pt-3">Actualizar Codigo QR</h3>
                      </Card.Header>  
                      <Card.Footer>
                      <input type="file" name='image' />
                      <div className='m-3'>
                        <div className="col">Cantidad</div>
                            <div className="col">
                                    <input type="text" className="form-control" placeholder="5$" />
                            </div>
                        </div>
                        <div className='m-2 p-3'>
                            <a href="#" className="col button btn-general btn"><strong> Actualizar</strong></a>
                        </div>
                      </Card.Footer>
                       
                     </Card>                      
                    </Col>
                </Row>                 
    );
}