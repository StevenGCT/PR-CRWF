import { usePostsUsersList } from '../context/userContext'
import { Card, CardGroup, Row, Col, Container } from 'react-bootstrap'
import avatar from './images/profile.webp'
import 'bootstrap/dist/css/bootstrap.min.css'



export function UserCards() {

    const {postsUsersList} = usePostsUsersList()
    return(
        
    
    <CardGroup>
      {postsUsersList.map(postUserEditList => (
            <Card key={postUserEditList.IdUser}>
                <Card.Header>{postUserEditList.IdUser === 1 ? <h5>Dueñ@</h5> : <h5>{postUserEditList.TypeUserName}</h5>}</Card.Header>
                    <Card.Body>
                        <Container className="flex dgrid">
                            <Col sm={4}>
                                <Card.Img src={avatar} class="profile-image img-circle" height="50" width="50" alt="profile_picture" />
                            </Col>
                            <Col sm={6}>
                            <Card.Title className ="flex">{postUserEditList.LastName + " " + postUserEditList.SecondLastName + " " + postUserEditList.Name}</Card.Title>
                            <Card.Text>
                                <p>{postUserEditList.Email}</p>
                            </Card.Text>
                            </Col>
                        </Container>
                    </Card.Body>
            </Card>
      ))}
    </CardGroup>
    );
}