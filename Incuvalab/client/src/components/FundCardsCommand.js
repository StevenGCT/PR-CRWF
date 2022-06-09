import { usePostsFund } from '../context/userContext'
import { Card, ProgressBar, CardGroup, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export function FundCardsCommand() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
          
    const {posts} = usePostsFund()
    const {moveFundingToBault} = usePostsFund()

    function refreshPage() {
      window.location.reload(false);
    }
    
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
            <div className="flex justify-center ">
            </div>
            {post.CurrentGoal >= post.Goal ? <ProgressBar className="m-2"  now={(post.CurrentGoal/post.Goal)*100} variant="success" label={post.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(post.CurrentGoal/post.Goal)*100} variant="dark" label={post.CurrentGoal + "Bs."} />}
                    <Card.Text className="p-2">
                        <div className="flex justify-center ">
                            <Col>
                                <Row >
                                    <h6 className="text-muted">Meta: {post.Goal}Bs.</h6>
                                </Row>
                                <Row className="flex p-3">
                                    <ButtonGroup className="flex dgrid gap-2 m-2" aria-label="Options">
                                        <Button variant="warning" size="sm" onClick={() => window.location.reload(false)}>Editar</Button>
                                        <Button variant="danger" size="sm" onClick={() => {moveFundingToBault(post.IdFunding); refreshPage();}}>Eliminar</Button>    
                                    </ButtonGroup>
                                </Row>
                            </Col>
                        </div>
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