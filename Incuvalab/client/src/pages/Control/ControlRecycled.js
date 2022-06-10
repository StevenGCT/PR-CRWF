import { DashMenuRecycled } from "../../components/DashMenuRecycled"
import NavbarLogin from "../../components/header-navbar"


export function ControlRecycled() {
  return (
    <>
       <NavbarLogin locale={true} />
      <div>
        <DashMenuRecycled />
      </div>
      <div className="container align-center">

      </div>
    </>
  )
}
