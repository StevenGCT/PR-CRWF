import { usePostsCatFund } from '../context/postContext2'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export function FundCardsByCategory() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    //ARREGLAR BUG DEL PROGRESS BAR (CUANDO ESTE LLEGUE A SU META DEJAR EL PORCENTAJE EN 100 Y YA NO CALCULAR ESTE MISMO)
    const {postsCatFund} = usePostsCatFund()

    return(
    <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
      {postsCatFund.map(postFundCat => (
          <Col>
        <Card key={postFundCat.IdFunding}>
            <Card.Header>
                {postFundCat.Title}
            </Card.Header>
            <Card.Img variant="top" src="https://economipedia.com/wp-content/uploads/Economia-de-la-empresa.jpg"/>
            <Card.Body>
                <ProgressBar className="m-2"  now={(postFundCat.CurrentGoal/postFundCat.Goal)*100} variant="dark" label={postFundCat.CurrentGoal + "Bs."} />
                    <Card.Text className="p-2">
                        <div className="flex justify-center "><h6 className="text-muted">Meta: {postFundCat.Goal}Bs.</h6></div>
                        {postFundCat.FastDescription}
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Campaña subida el: {postFundCat.RegisterDate}</small>
            </Card.Footer>
        </Card>
        </Col>
      ))}
      </Row>
    </CardGroup>
    );
}