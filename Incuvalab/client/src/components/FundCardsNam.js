import { usePostsNamFund } from '../context/userContext'
import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"


export function FundCardsNam() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    
    const {postsNamFund} = usePostsNamFund()
    return(
    
    <CardGroup>
        <Row xs={1} md={3} className="g-4 rounded">
      {postsNamFund.map(nampost => (
          <Col>
        <Card key={nampost.IdFunding}>
        <Link to={"/funding/" + nampost.IdFunding} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Card.Header className='text-wrap'>
                {nampost.Title}
            </Card.Header>
            <Card.Img variant="top" src={nampost.FundingImage1}/>
            <Card.Body>
            {nampost.CurrentGoal >= nampost.Goal ? <ProgressBar className="m-2"  now={(nampost.CurrentGoal/nampost.Goal)*100} variant="success" label={nampost.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(nampost.CurrentGoal/nampost.Goal)*100} variant="dark" label={nampost.CurrentGoal + "Bs."} />}
                    <Card.Text className="p-2">
                        <div className="flex justify-center "><h6 className="text-muted">Meta: {nampost.Goal}Bs.</h6></div>
                        <div className="text-wrap justify-center">{nampost.FastDescription}</div>
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Campaña subida el: {moment(nampost.RegisterDate).format('DD/MM/YYYY')}</small>
            </Card.Footer>
        </Link>
        </Card>
        </Col>
      ))}
      </Row>
    </CardGroup>
    );
}