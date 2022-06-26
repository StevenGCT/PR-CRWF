import { FundCardsNam } from "../components/FundCardsNam"
import { SearchByCategory } from "../components/SearchByCategory"
import { usePostsNamFund } from '../context/userContext'
import { VscBell } from 'react-icons/vsc'
import { Form, Button, Container, Col, Row, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"


export function CatalogueName() { 

  const {postsNamFund} = usePostsNamFund()


  if (postsNamFund.length === 0) return(    
    <>
      <div>
        <NavbarLogin locale={true} />
        <div className="my-3">
          <div className="container align-center">
            <h1 className="mt-3 p-3">Catálogo</h1>
            <Container>
              <Row>
                <Col sm={4}><SearchByCategory /></Col>
                <Col sm={8}>
                  <Form className="d-flex m-2">
                    <FormControl
                      type="search"
                      placeholder="Buscar..."
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-dark">Buscar</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <div className="container align-center">
          </div>
          <div className='flex flex-col justify-center items-center m-5 p-7'>
            <br />
            <VscBell className='w-16 h-16' />
            <h2 className="text-center">No hay campañas disponibles, Pero tu puedes empezar una!</h2>
          </div>
        </div>

      </div>

      <Footer />
    </>
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
        <FundCardsNam />       
      </div>
    </>
  )
}