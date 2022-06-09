import { DashMenuComplete } from "../../components/DashMenuComplete"
import NavbarLogin from "../../components/header-navbar"


export function ControlComplete() {
  return (
    <>
      <NavbarLogin locale={true} />

      <div>
        <DashMenuComplete />
      </div>
      <div className="container align-center">

      </div>
    </>
  )
}
