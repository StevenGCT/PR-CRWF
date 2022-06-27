import { usePostsQr } from '../context/userContext'
import {  Row, Col, ButtonGroup, Button,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


export function QrCardPaymentImage() {
    const {postsQr} = usePostsQr()
    return(      
        <Row xs={1} md={3} className="col button btn" >
               {postsQr.map(post => (
                  <Card.Img variant="top" src={post.QrUrl} /> 
               ))}
        </Row>
    );
}