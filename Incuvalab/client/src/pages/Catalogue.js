import { FundCards } from "../components/FundCards"
import { SearchByCategory } from "../components/SearchByCategory"
import { usePostsFund } from '../context/postContext2'
import {VscBell} from 'react-icons/vsc'
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
    /*<Form>
      <Form.Group className="mb-3">
      <div className="container align-center">
        <h1 className="mt-5 p-3">Catálogo</h1>
      <div className="row p-1">
		<div className="col-6 col-md-3">
    <Form.Select>
    <option className="mb-3" selected>Seleccione alguna Categoria</option>
			  <option value="1">Example1</option>
			  <option value="2">Example2</option>
			  <option value="3">Example3</option>
    </Form.Select>
		</div>
		<div className="col-12 col-md-7">
    <Form.Control type="search" placeholder="Buscar una campaña" />
		</div>
		<div className="col-6 col-md-2">
		<Button variant="outline-dark" type="submit">
    Buscar
  </Button>
		</div>
	</div>
  </div>
      </Form.Group>

    </Form>
    */
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
                  <Button variant="outline-success">Search</Button>
              </Form>
              </Col>
            </Row>
          </Container>
      </div>
      <br />
      <div className="container align-center">
        <FundCards />       
      </div>
      <div>
        <SearchByCategory></SearchByCategory>
      </div>
    </>
  )
}