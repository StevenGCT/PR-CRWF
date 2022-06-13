import { usePostsQr } from '../context/userContext'
import { Card, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



export function QrpageCard() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    const {postsQr} = usePostsQr()
    return(
           
      <CardGroup>
         <Row xs={1} md={3} className="g-4 rounded">
                {postsQr.map(post => (
                    <Col>
                            <Card> 
                            <Card.Img variant="top" src={post.QrUrl} />                               
                                    <Card.Header>
                                        {post.mount}
                                    </Card.Header>  
                                    <Card.Footer>
                                       <a key={postsQr.IdQr} href="#" className="col button btn-general btn">Subir Comprobante</a>
                                    </Card.Footer>                                 
                            </Card>
                    </Col>
                ))}
            </Row>
    </CardGroup>
    );
}