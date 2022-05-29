import { usePostsFundAprobe } from '../context/postContext2'
import { Card, ProgressBar, CardGroup, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export function FundCardsAprobe() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    
    const {postsToAprobe} = usePostsFundAprobe()
    return(
    
    <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
      {postsToAprobe.map(postAprove => (
          <Col>
        <Card key={postAprove.IdFunding}> 
            <Card.Header>
                {postAprove.Title}
            </Card.Header>
            <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
            <Card.Body>
                <ProgressBar className="m-2"  now={(postAprove.CurrentGoal/postAprove.Goal)*100} variant="dark" label={postAprove.CurrentGoal + "Bs."} />
                    <Card.Text className="p-2">
                        <div className="flex justify-center ">
                            <Col>
                                <Row>
                                    <Button variant="warning">Editar</Button>
                                    <Button variant="danger">Eliminar</Button>
                                </Row>
                                <Row>
                                    <h6 className="text-muted">Meta: {postAprove.Goal}Bs.</h6>
                                </Row>
                            </Col>
                        </div>
                        {postAprove.FastDescription}
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Campaña subida el: {postAprove.RegisterDate}</small>
            </Card.Footer>
        </Card>
        </Col>
      ))}
      </Row>
    </CardGroup>
    );
}