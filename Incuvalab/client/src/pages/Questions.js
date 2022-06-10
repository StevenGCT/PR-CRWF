import { usePostsFund } from '../context/userContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import { QuestionCards } from "../components/QuestionCards"

export function Questions() {

  const { posts } = usePostsFund()

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

      <br />

      <Footer />
    </div>
  )
}