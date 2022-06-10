import { usePostsFundRecycle } from '../context/userContext'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col, Button, ButtonGroup, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export function FundCardsRecycled() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    //AGREGAR UNA PRECAUCIÓN DE CONFIRMACIÓN EN ELIMINAR

    const { postsToRecycle } = usePostsFundRecycle()
    const { fundingOutBault } = usePostsFundRecycle()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
                {postsToRecycle.map(postContainer => (
                    <Col>
                        <Card key={postsToRecycle.IdFunding}>
                            <a class="btn" href={"/control-funding/" + postContainer.IdFunding}>
                                <Card.Header>
                                    {postContainer.Title}
                                </Card.Header>
                                <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg" />
                                <Card.Body>
                                    {postContainer.CurrentGoal >= postContainer.Goal ? <ProgressBar className="m-2" now={(postContainer.CurrentGoal / postContainer.Goal) * 100} variant="success" label={postContainer.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2" now={(postContainer.CurrentGoal / postContainer.Goal) * 100} variant="dark" label={postContainer.CurrentGoal + "Bs."} />}
                                    <Card.Text className="p-2">
                                        <div className="flex justify-center ">
                                            <Col>
                                                <Row>
                                                    <h6 className="text-muted text-center">Meta: {postContainer.Goal}Bs.</h6>
                                                </Row>
                                                <Row className="flex p-2">
                                                    <ButtonGroup className="flex dgrid gap-2 m-2" aria-label="Options">
                                                        <Button variant="danger" size="sm" onClick={handleShow}>Borrar Registro</Button>
                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Precaución!</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>Esta apunto de borrar</Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" onClick={handleClose}>
                                                                    Close
                                                                </Button>
                                                                <Button variant="primary" onClick={handleClose}>
                                                                    Save Changes
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                        <Button variant="dark" size="sm" onClick={() => { fundingOutBault(postContainer.IdFunding); refreshPage(); }}>Restaurar</Button>
                                                    </ButtonGroup>
                                                </Row>
                                            </Col>
                                        </div>
                                        {postContainer.FastDescription}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Campaña subida el: {moment(postContainer.RegisterDate).format('DD/MM/YYYY')}</small>
                                </Card.Footer>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
}