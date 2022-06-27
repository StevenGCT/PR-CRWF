import { VscBell } from 'react-icons/vsc'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import { QrCardCreatePage } from "../components/QrCardCreatePage"
import { usePostsQr } from '../context/userContext'
import arrow_back from '../components/images/assets/arrow_back_.png'


export function QrCrPage() {

  return (
    <div>
      <NavbarLogin locale={true} />
      <div className="container-sm my-2 p-4">
                <form action="/control-page">
                    <button className="flex mb-3" type="submit">
                        <img src={arrow_back} className="w-10" alt="arrow"></img>
                        <h5 className="my-2">Volver</h5>
                    </button>
                </form>
      </div>

      <div className="my-2">
        <div className="container align-center">
          <h1 className="p-2">Agregar QR</h1>

        </div>
        <br />
        <div className="container align-center">
          <QrCardCreatePage />
        </div>

      </div>
      <br />

      <Footer />
    </div>
  )
}