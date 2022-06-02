import { DashMenuUser } from "../../components/DashMenuUser"
import NavbarLogin from "../../components/header-navbar"


export function ControlUsers() {
    return (
      <>
      <div>
      <NavbarLogin locale={true} />
      <DashMenuUser />
      </div>
    <div className="container align-center">
      
    </div>
    </>
    )
  }
  