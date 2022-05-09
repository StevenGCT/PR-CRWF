import { usePosts } from '../context/postContext'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export function FundCards() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    //ARREGLAR BUG DEL PROGRESS BAR (CUANDO ESTE LLEGUE A SU META DEJAR EL PORCENTAJE EN 100 Y YA NO CALCULAR ESTE MISMO)
    const {posts} = usePosts()

    return(
    <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
      {posts.map(post => (
          <Col>
        <Card key={posts.IdFunding}>
            <Card.Header>
                {post.Title}
            </Card.Header>
            <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
            <Card.Body>
                <ProgressBar className="m-2"  now={(post.CurrentGoal/post.Goal)*100} variant="dark" label={post.CurrentGoal + "Bs."} />
                    <Card.Text className="p-2">
                        <div className="flex justify-center "><h6 className="text-muted">Meta: {post.Goal}</h6></div>
                        {post.FastDescription}
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Campaña subida el: {post.RegisterDate}</small>
            </Card.Footer>
        </Card>
        </Col>
      ))}
      </Row>
    </CardGroup>
    );
}