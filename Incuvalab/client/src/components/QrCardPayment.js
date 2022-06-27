import { usePostsQr } from '../context/userContext'
import {  Row, Col, ButtonGroup, Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import {QrCardPaymentImage} from '../components/QrCardPaymentImage'
import { useState } from 'react'



export function QrCardPayment() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {postsQr} = usePostsQr()
    return(      
        <Row xs={1} md={3} className="col button btn" >
               {postsQr.map(post => (
                   <ButtonGroup  className="flex dgrid gap-2 m-2" aria-label="Options">                            
                    <Button variant="general"  onClick={handleShow}>
                    <strong>Donar {post.mount}Bs.</strong>                               
                    </Button>                                      
                   </ButtonGroup>      
               ))}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Escanear Qr</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <div className='flex justify-center'>
                        <QrCardPaymentImage/>  
                       </div>                                                          
                   </Modal.Body>
                   </Modal>       
        </Row>
    );
}