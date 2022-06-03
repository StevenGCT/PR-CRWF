import { usePostsUsersList } from '../context/userContext'
import { Card, CardGroup, Row, Col, Container, Badge, Button, ButtonGroup } from 'react-bootstrap'
import avatar from './images/profile.webp'
import 'bootstrap/dist/css/bootstrap.min.css'



export function UserCards() {

    const {postsUsersList} = usePostsUsersList()
    return(
        
    
    <CardGroup >
        <Row xs={1} md={2} className="g-4 rounded">
      {postsUsersList.map(postUserEditList => (
          <Col>
            <Card key={postUserEditList.IdUser}>
                <Card.Header>
                    {postUserEditList.IdUser === 1 ? <> <h5>Owner <Badge pill bg="success"> Id:{postUserEditList.IdUser} </Badge> <Button className="rounded-pill" variant="dark" size="sm"><strong>?</strong></Button> <ButtonGroup className="position-sticky start-100 flex dgrid gap-2 m-2">
                        <Button variant="secondary" size="sm">Banear</Button>
                        <Button variant="warning" size="sm">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                    </ButtonGroup> </h5>  </>  :  <h5>{postUserEditList.TypeUserName} <Badge pill bg="success"> Id:{postUserEditList.IdUser} </Badge> <Button className="rounded-pill" variant="dark" size="sm"><strong>?</strong></Button> <ButtonGroup className="position-sticky start-100 flex dgrid gap-2 m-2">
                        <Button variant="secondary" size="sm">Banear</Button>
                        <Button variant="warning" size="sm">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                    </ButtonGroup> </h5>} 
                    
                    
                </Card.Header>
                    <Card.Body>
                        <Container className="flex dgrid">
                            <Col sm={4}>
                                <Card.Img src={avatar} className="profile-image img-circle pt-4" height="40" width="40" alt="profile_picture" />
                            </Col>
                            <Col className="ml-6" sm={8}>
                            <Card.Title className ="flex">{postUserEditList.LastName + " " + postUserEditList.SecondLastName + " " + postUserEditList.Name}</Card.Title>
                            <Card.Text className="pl-3">
                                    <li>{postUserEditList.Email}</li>
                                    <li>{postUserEditList.PhoneNumber}</li>
                                    <li>{postUserEditList.Address}</li>
                                    <li>Registrado: {postUserEditList.RegisterDate}</li>
                                    <li>Ultima modificación: {postUserEditList.LastUpdate}</li>
                            </Card.Text>
                            </Col>
                        </Container>
                    </Card.Body>
            </Card>
            </Col>
      ))}
      </Row>
    </CardGroup>
    );
}