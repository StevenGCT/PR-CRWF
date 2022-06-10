import { FundCards } from "../components/FundCards"
import { SearchByCategory } from "../components/SearchByCategory"
import { usePostsFund } from '../context/userContext'
import { VscBell } from 'react-icons/vsc'
import { Form, Button, Container, Col, Row, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import { QuestionCards } from "../components/QuestionCards"

export function Questions() {

  const { posts } = usePostsFund()


  if (posts.length === 0) return (
    <div className='flex flex-col justify-center items-center m-5'>
      <br />
      <VscBell className='w-16 h-16' />
      <h1>No hay preguntas</h1>
    </div>
  )


  return (
    <div>
      <NavbarLogin locale={true} />
      <div className="my-3">
        <div className="container align-center">
          <h1 className="mt-3 p-3">Preguntas mas Frecuentes</h1>

        </div>
        <br />
        <div className="container align-center">
          <QuestionCards />
        </div>

      </div>

      <Footer />
    </div>
  )
}