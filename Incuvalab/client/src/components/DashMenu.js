import { useState } from "react"
import { FundCards } from "./FundCards"

//ARREGLAR RUTEOS Y COLORES

export function DashMenu() {
    const [open, setOpen] = useState(true);
    return(
        <div className="flex">
      <div
        className={` ${
          open ? "w-95" : "w-20 "
        } bg-dark-purple h-screen p-4  pt-8 relative duration-300`}
      >
        <img
          src="https://github.com/Sridhar-C-25/sidebar_reactTailwind/raw/main/src/assets/control.png" alt="left_arrow"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://github.com/Sridhar-C-25/sidebar_reactTailwind/raw/main/src/assets/logo.png" alt="logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Incuvalab
          </h1>
        </div>
        <ul className="pt-6">
          <li></li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Lista de Campañas</h1>
        <br />
            <div className="container align-center">
                <FundCards></FundCards>
            </div>
      </div>
    </div>
    )
}