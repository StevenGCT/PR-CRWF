import { VscBell } from 'react-icons/vsc'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import { QrCardUpdatePage } from "../components/QrCardUpdatePage"
import { usePostsQr } from '../context/userContext'

export function QrUpPage() {

  const { posts } = usePostsQr()


  if (posts.length === 0) return (
    <div className='flex flex-col justify-center items-center m-5'>
      <br />
      <VscBell className='w-16 h-16' />
      <h1>No hay Qrs</h1>
    </div>
  )


  return (
    <div>
      <NavbarLogin locale={true} />
      <div className="my-3">
        <div className="container align-center">
          <h1 className="mt-3 p-3">Cambiar QR</h1>

        </div>
        <br />
        <div className="container align-center">
          <QrCardUpdatePage />
        </div>

      </div>

      <Footer />
    </div>
  )
}