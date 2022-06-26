import { VscBell } from 'react-icons/vsc'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarLogin from "../components/header-navbar"
import Footer from "../components/footer"
import { QrCardImage } from "../components/QrCardImage"
import { usePostsQr } from '../context/userContext'

export function QrImage() {

  const { posts } = usePostsQr()

  if (posts.length === 0) return (
    <div className='flex flex-col justify-center items-center m-5'>
      <br />
      <VscBell className='w-16 h-16' />
      <h1>Espere un Momento</h1>
    </div>
  )

  return (
    <div>
      <NavbarLogin locale={true} />
      <div className="my-3">
        <div className="container align-center">

        </div>
        <br />
        <div className="container align-center">
          <QrCardImage />
        </div>

      </div>

      <Footer />
    </div>
  )
}