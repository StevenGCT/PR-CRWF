import { usePostsFund } from '../context/userContext'
import { useState} from 'react'
import { Card, ProgressBar, CardGroup, Row, Col, Button, ButtonGroup, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export function FundCardsCommand() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
          
    const {posts} = usePostsFund()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                <Row>
                                    <h6 className="text-muted">Meta: {post.Goal}Bs.</h6>
                                </Row>
                                <Row className="flex p-3">
                                    <ButtonGroup className="flex dgrid gap-2 m-2" aria-label="Options">
                                        <Button variant="warning" size="sm">Editar</Button>
                                        <Button variant="danger" size="sm" onClick={handleShow}>Eliminar</Button>
                                        <Modal show={show} onHide={handleClose} animation={false}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Precaución</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Esta apunto de Denegar la campaña "{post.Title}" ¿Esta seguro?</Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                            <Button variant="danger" onClick={handleClose}>
                                                Denegar
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>          
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



