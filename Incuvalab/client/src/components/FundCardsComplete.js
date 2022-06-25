import { usePostsFundComplete } from '../context/userContext'
import moment from 'moment'
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
                    <Link to={"/funding/" + postGreen.IdFunding} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Card.Header className="text-center">
                            <strong className='text-wrap'>{postGreen.Title}</strong>
                        </Card.Header>
                        <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
                        <Card.Body>
                                {postGreen.CurrentGoal >= postGreen.Goal ? <ProgressBar className="m-2"  now={(postGreen.CurrentGoal/postGreen.Goal)*100} variant="success" label={postGreen.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(postGreen.CurrentGoal/postGreen.Goal)*100} variant="dark" label={postGreen.CurrentGoal + "Bs."} />}                        
                                <Card.Text className="p-2">
                                    <div className="flex justify-center "><h6 className="text-muted text-center">Meta: {postGreen.Goal}Bs.</h6></div>
                                    <div className="text-wrap justify-center">{postGreen.FastDescription}</div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Campaña subida el: {moment(postGreen.RegisterDate).format('DD/MM/YYYY')}</small>
                        </Card.Footer>
                    </Link>
                </Card>}
                
            </Col>
          ))}
          </Row>
        </CardGroup>
        );
    }