import { Card, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'




export function QuestionCards() {
    
    return(
        
    
    <CardGroup>
        <Row  xs={1} md={4} className="g-4 rounded"> 
        <Col>
            <Card>
            <Card.Header>
            <strong> Pregunta 1</strong>
            </Card.Header>
            <Card.Body>
              <p>Es nesesario...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
    
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong> Pregunta 2</strong>
            </Card.Header>
            <Card.Body>
              <p>Es Peligroso...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong> Pregunta 3</strong>
            </Card.Header>
            <Card.Body>
              <p>Es Confiable...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong> Pregunta 4</strong>
            </Card.Header>
            <Card.Body>
              <p>Es Posible...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
        </Col>
     
        <Col>
            <Card>
            <Card.Header>
            <strong> Pregunta 5</strong>
            </Card.Header>
            <Card.Body>
              <p>Es Real...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
    
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong> Pregunta 6</strong>
            </Card.Header>
            <Card.Body>
              <p>Es Actualizable...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong> Pregunta 7</strong>
            </Card.Header>
            <Card.Body>
              <p>Es Progresivo...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong> Pregunta 8</strong>
            </Card.Header>
            <Card.Body>
              <p>Es Preferencial...? asdioasjidasjdioajdiasjdiadjiowawaiodwajidwaiowadiwjadojidawdaw</p>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </CardGroup>
    );
}