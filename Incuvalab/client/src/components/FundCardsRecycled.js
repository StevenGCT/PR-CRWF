import { usePostsFundRecycle } from '../context/userContext'
import { Card, ProgressBar, CardGroup, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export function FundCardsRecycled() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    
    const {postsToRecycle} = usePostsFundRecycle()
    return(
    
    <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
      {postsToRecycle.map(postContainer => (
          <Col>
        <Card key={postContainer.IdFunding}> 
            <Card.Header>
                {postContainer.Title}
            </Card.Header>
            <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
            <Card.Body>
                <ProgressBar className="m-2"  now={(postContainer.CurrentGoal/postContainer.Goal)*100} variant="dark" label={postContainer.CurrentGoal + "Bs."} />
                    <Card.Text className="p-2">
                        <div className="flex justify-center ">
                            <Col>
                                <Row>
                                    <Button variant="dark">Restaurar</Button>
                                </Row>
                                <Row>
                                    <h6 className="text-muted">Meta: {postContainer.Goal}Bs.</h6>
                                </Row>
                            </Col>
                        </div>
                        {postContainer.FastDescription}
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Campaña subida el: {postContainer.RegisterDate}</small>
            </Card.Footer>
        </Card>
        </Col>
      ))}
      </Row>
    </CardGroup>
    );
}