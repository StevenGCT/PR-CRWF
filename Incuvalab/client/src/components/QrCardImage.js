import { usePostsQr } from '../context/userContext'
import { Card, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



export function QrCardImage() {
    const {postsQr} = usePostsQr()
    return(
           
        <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
               {postsQr.map(post => (
                   <Col>
                           <Card> 
                           <Card.Header>
                                   Este es el ID: {post.IdQr}
                              </Card.Header>
                             <Card.Img variant="top" src={post.QrUrl}/>                                                                                                
                           </Card>
                   </Col>
               ))}
           </Row>
   </CardGroup>
    );
}