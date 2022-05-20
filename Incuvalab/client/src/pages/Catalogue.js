import { FundCards } from "../components/FundCards"
import { SearchByCategory } from "../components/SearchByCategory"
import { usePostsFund } from '../context/postContext2'
import { VscBell } from 'react-icons/vsc'
import { Form, Button, Container, Col, Row, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Catalogue() { 

  const {posts} = usePostsFund()
 

  if (posts.length === 0) return(    
    <div className='flex flex-col justify-center items-center m-5'>
      <br />
      <VscBell className='w-16 h-16'/>
      <h1>No hay campañas disponibles, Pero tu puedes empezar una!.</h1>
    </div>
  )

  
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
        <FundCards />       
      </div>
    </>
  )
}