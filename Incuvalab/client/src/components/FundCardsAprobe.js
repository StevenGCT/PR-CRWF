import { usePostsFundAprobe } from '../context/userContext'
import { useState} from 'react'
import { Card, ProgressBar, CardGroup, Row, Col, Button, ButtonGroup, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export function FundCardsAprobe() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    
    const {postsToAprobe} = usePostsFundAprobe()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            {postAprove.CurrentGoal >= postAprove.Goal ? <ProgressBar className="m-2"  now={(postAprove.CurrentGoal/postAprove.Goal)*100} variant="success" label={postAprove.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(postAprove.CurrentGoal/postAprove.Goal)*100} variant="dark" label={postAprove.CurrentGoal + "Bs."} />}
                    <Card.Text className="p-2">
                        <div className="flex justify-center ">
                            <Col>
                                <Row>
                                    <h6 className="text-muted">Meta: {postAprove.Goal}Bs.</h6>
                                </Row>
                                <Row className="flex p-3">
                                    <ButtonGroup className="flex dgrid gap-2 m-2" aria-label="Options">
                                        <Button variant="success" size="sm" onClick={handleShow}>Publicar</Button>
                                        <Button variant="warning" size="sm">Editar</Button>
                                        <Button variant="danger" size="sm">Denegar</Button>
                                        <Modal show={show} onHide={handleClose} animation={false}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Precaución</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Esta apunto de Aprobar la campaña "{postAprove.Title}" ¿Esta seguro?</Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                            <Button variant="success" onClick={handleClose}>
                                                Aprobar
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </ButtonGroup>
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