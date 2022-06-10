import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css'

export function NotFoundPage() {
  return (
    <>
    <NavbarLogin></NavbarLogin>
    <div className='flex flex-col justify-center items-center m-5 p-7'>

            <br />
            <h2 className="text-center">Página no encontrada, Quizá la campaña que busque no esta disponible.</h2>
        </div>

    <Footer></Footer>
    </>
  )
}
