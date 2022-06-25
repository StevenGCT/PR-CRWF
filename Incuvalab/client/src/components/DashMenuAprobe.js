import  React, { useState } from "react"
import { FundCardsAprobe } from "./FundCardsAprobe"
import { Link } from "react-router-dom"

//ARREGLAR RUTEOS Y COLORES

export function DashMenuAprobe() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <React.Fragment>
        <div className={` ${open ? "w-95" : "w-20 "} bg-dark-red h-screen p-4  pt-8 relative duration-300`} Style="height: 2000px;">
          <img
            src={require('./images/assets/control.png')} alt="left_arrow"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={require('./images/assets/logo.png')} alt="logo"
              className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >
              Bienvenido!
            </h1>
          </div>
          <br />
          <Link to="/control-page" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
              <img src={require('./images/assets/Folder.png')} alt="Control-Icon" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Activos
              </span>
            </li>
          </Link>
          <Link to="/control-page-aprove" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
              <img src={require('./images/assets/requests.png')} alt="Control-Icon" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Solicitudes
              </span>
            </li>
          </Link>
          <Link to="/control-page-complete" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
              <img src={require('./images/assets/complete.png')} alt="Control-Icon" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Completados
              </span>
            </li>
          </Link>
          <Link to="/control-page-recycle" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
              <img src={require('./images/assets/box.png')} alt="Control-Icon" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Baul de Registros
              </span>
            </li>
          </Link>
          <Link to="/createFunding/menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
              <img src={require('./images/assets/addFolder.png')} alt="Control-Icon" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Agregar Campaña
              </span>
            </li>
          </Link>
          <Link to="/control-page-user" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9 : mt-2`}>
              <img src={require('./images/assets/newUser.png')} alt="Control-Icon" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Usuarios
              </span>
            </li>
          </Link>
          <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
            <img src={require('./images/assets/addUser.png')} alt="Control-Icon" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Agregar Usuario
            </span>
          </li>


        </div>
        <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Lista de Campañas</h1>
          <br />
          <div className="container align-center">
            <FundCardsAprobe></FundCardsAprobe>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}