import { usePostsQr } from '../context/userContext'
import {  Row, Col, ButtonGroup, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QrImage } from '../pages/QrImage'
import { Link } from 'react-router-dom'



export function QrCardPayment() {
    const {postsQr} = usePostsQr()
    return(      
        <Row xs={1} md={3} className="col button btn" >
               {postsQr.map(post => (
                   <Col s>                      
                        <ButtonGroup  className="flex dgrid gap-2 m-2" aria-label="Options">                                 
                                    <Button variant="general" >
                                    <Link  class="btn" to={"/qrimage/" + post.IdQr}>
                                        <strong >Donar {post.mount}Bs.</strong>      
                                    </Link>                              
                                    </Button>                                     
                        </ButtonGroup>                                  
                   </Col>
               ))}
           </Row>
    );
}