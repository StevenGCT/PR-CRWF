import { DashMenu } from "../../components/DashMenu"
import NavbarLogin from "../../components/header-navbar"

export function ControlPage() {
  return (
    <>
      <div>
        <NavbarLogin locale={true} />
        <DashMenu />
      </div>
      <div className="container align-center">

      </div>
    </>
  )
}
