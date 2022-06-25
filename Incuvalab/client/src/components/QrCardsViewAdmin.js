import { usePostsQr } from '../context/userContext'
import { Card, CardGroup, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



export function QrCardsViewAdmin() {
    const {postsQr} = usePostsQr()
    return(
           
        <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
               {postsQr.map(post => (
                   <Col>
                           <Card> 
                           <Card.Img variant="top" src={post.QrUrl} />                               
                                   <Card.Header>
                                       Monto:{post.mount} 
                                   </Card.Header>  
                                   <Card.Footer>
                                   <Row className="flex p-3">
                                                    <ButtonGroup className="flex dgrid gap-2 m-2" aria-label="Options">
                                                        <Button variant="warning" size="sm">Editar</Button>
                                                        <Button variant="danger" size="sm">Eliminar</Button>
                                                    </ButtonGroup>
                                                </Row>
                                   </Card.Footer>                                 
                           </Card>
                   </Col>
               ))}
           </Row>
   </CardGroup>
    );
}