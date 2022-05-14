import NavbarLogin from "../../components/header-navbar"
import Footer from "../../components/footer"
import "../../stylesheets/login.css"

export function HomePage() {
  return (
    <div className="base-container">
      <NavbarLogin locale={true} />
      <h1 className="text-3xl font-bold underline">HomePage</h1>
       <Footer />
    </div>
  )
}