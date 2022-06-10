import { usePostsFund } from '../context/userContext'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { usePosts } from "../context/postContext";



export function QuestionCards() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    const {posts} = usePostsFund()
    return(
        
    
    <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
      {posts.map(post => (
        <Col>
            <Card key={posts.IdFunding}>
            <Card.Header>
            <strong> {post.Question1}</strong>
                        
                    </Card.Header>
            </Card>
        </Col>
      ))}
      </Row>
    </CardGroup>
    );
}