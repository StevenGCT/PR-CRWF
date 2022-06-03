import { FundCardsCat } from "../components/FundCardsCat"
import { SearchByCategory } from "../components/SearchByCategory"
import { usePostsCatFund } from '../context/userContext'
import { VscBell } from 'react-icons/vsc'
import { Form, Button, Container, Col, Row, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export function CatalogueCategory() { 

  const {postsCatFund} = usePostsCatFund()

/* Se Debe Insertar los respectivos containers al return de este if, y se debe ajustar el mensaje del contenido.

  if (postsCatFund.length === 0) return(    
    <div className='flex flex-col justify-center items-center m-5'>
      <br />
      <VscBell className='w-16 h-16'/>
      <h1>No hay campañas con esa categoria disponibles, Pero tu puedes empezar una!.</h1>
    </div>
  )
*/
  
  return (
    <>
      <div className="container align-center">
        <h1 className="mt-5 p-3">Catálogo</h1>
          <Container>
            <Row>
              <Col sm={4}><SearchByCategory /></Col>
              <Col sm={8}>
                <Form className="d-flex m-2">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
              </Form>
              </Col>
            </Row>
          </Container>
      </div>
      <br />
      <div className="container align-center">
        <FundCardsCat />       
      </div>
    </>
  )
}