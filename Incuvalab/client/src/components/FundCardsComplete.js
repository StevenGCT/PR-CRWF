import { usePostsFundComplete } from '../context/userContext'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"


export function FundCardsComplete() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    const {postsComplete} = usePostsFundComplete()
    return(    
        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
          {postsComplete.map(postGreen => (
            <Col key={postGreen.IdFunding}>
                {postGreen.CurrentGoal >= postGreen.Goal && <Card>
                    <Link to={"/funding/" + postGreen.IdFunding}>
                        <Card.Header>
                            {postGreen.Title}
                        </Card.Header>
                        <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
                        <Card.Body>
                                {postGreen.CurrentGoal >= postGreen.Goal ? <ProgressBar className="m-2"  now={(postGreen.CurrentGoal/postGreen.Goal)*100} variant="success" label={postGreen.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(postGreen.CurrentGoal/postGreen.Goal)*100} variant="dark" label={postGreen.CurrentGoal + "Bs."} />}                        
                                <Card.Text className="p-2">
                                    <div className="flex justify-center "><h6 className="text-muted">Meta: {postGreen.Goal}Bs.</h6></div>
                                    {postGreen.FastDescription}
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Campaña subida el: {postGreen.RegisterDate}</small>
                        </Card.Footer>
                    </Link>
                </Card>}
                
            </Col>
          ))}
          </Row>
        </CardGroup>
        );
    }