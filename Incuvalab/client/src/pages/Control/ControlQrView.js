import { DashMenuQrView } from "../../components/DashMenuQrView"
import NavbarLogin from "../../components/header-navbar"


export function ControlQrView() {
  return (
    <>
      <NavbarLogin locale={true} />

      <div>
        <DashMenuQrView/>
      </div>
      <div className="container align-center">

      </div>
    </>
  )
}
