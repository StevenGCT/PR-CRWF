import { usePostsFundRecycle } from '../context/userContext'
import { Card, ProgressBar, CardGroup, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
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
            {postContainer.CurrentGoal >= postContainer.Goal ? <ProgressBar className="m-2"  now={(postContainer.CurrentGoal/postContainer.Goal)*100} variant="success" label={postContainer.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(postContainer.CurrentGoal/postContainer.Goal)*100} variant="dark" label={postContainer.CurrentGoal + "Bs."} />}
                    <Card.Text className="p-2">
                        <div className="flex justify-center ">
                            <Col>
                                <Row>
                                    <h6 className="text-muted">Meta: {postContainer.Goal}Bs.</h6>
                                </Row>
                                <Row className="flex p-2">
                                    <ButtonGroup className="flex dgrid gap-2 m-2" aria-label="Options">
                                        <Button variant="danger" size="sm">Borrar Registro</Button>
                                        <Button variant="dark" size="sm">Restaurar</Button>
                                    </ButtonGroup>
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