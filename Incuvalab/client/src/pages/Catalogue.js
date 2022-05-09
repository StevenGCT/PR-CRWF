import { FundCards } from "../components/FundCards"
import { usePosts } from '../context/postContext'
import {VscBell} from 'react-icons/vsc'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Catalogue() { 

  const {posts} = usePosts()

  if (posts.length === 0) return(    
    <div className='flex flex-col justify-center items-center'>
      <br />
      <VscBell className='w-16 h-16'/>
      <h1>No hay campañas disponibles, Pero tu puedes empezar una!.</h1>
    </div>
  )

  return (
    <>
    <Form>
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
      <div className="container align-center">
        <FundCards />
      </div>
    </>
  )
}