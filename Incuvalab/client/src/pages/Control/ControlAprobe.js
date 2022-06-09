import { DashMenuAprobe } from "../../components/DashMenuAprobe"
import NavbarLogin from "../../components/header-navbar"


export function ControlAprobe() {
  return (
    <>
       <NavbarLogin locale={true} />
      <div>
        <DashMenuAprobe />
      </div>
      <div className="container align-center">
      </div>
    </>
  )
}
