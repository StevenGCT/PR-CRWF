import { usePostsFund } from '../context/userContext'
import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { usePosts } from "../context/postContext";



export function FundCards() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    const { posts } = usePostsFund()
    return (


        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
                {posts.map(post => (
                    <Col>
                        <Card key={posts.IdFunding}>
                            <Link class="btn" to={"/funding/" + post.IdFunding}>
                                <Card.Header>
                                    {post.Title}
                                </Card.Header>
                                <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg" />
                                <Card.Body>
                                    {post.CurrentGoal >= post.Goal ? <ProgressBar className="m-2" now={(post.CurrentGoal / post.Goal) * 100} variant="success" label={post.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2" now={(post.CurrentGoal / post.Goal) * 100} variant="dark" label={post.CurrentGoal + "Bs."} />}
                                    <Card.Text className="p-2">
                                        <div className="flex justify-center "><h6 className="text-muted">Meta: {post.Goal}Bs.</h6></div>
                                        <div className="text-wrap justify-center">{post.FastDescription}</div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Campaña subida el: {moment(post.RegisterDate).format('DD/MM/YYYY')}</small>
                                </Card.Footer>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
}