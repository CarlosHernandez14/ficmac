import { FaEdit } from "react-icons/fa";
import CajaInformacionBasica from "./CajaInformacionBasica";
import Boton from "./Boton";

function CajaInformacion() {
  return (
    <div className="w-auto h-auto bg-[#D9D9D9] rounded-xl ">
      <div className="flex justify-between items-center  space-x-80 px-8 py-12">
        <div className="">
          <p className="text-[#753350] font-semibold text-2xl whitespace-nowrap">
            Información básica
          </p>
        </div>
        <div className="px-0 ">
          <Boton />
        </div>
      </div>
      <div className="px-8 py-5">
        <CajaInformacionBasica />
      </div>
      <div className="flex justify-between  py-10 px-8">
        <p className="text-[#753350] font-semibold text-2xl">
          Información de contacto
        </p>
      </div>
      <div className="px-8 py-5">
        <CajaInformacionBasica />
      </div>
    </div>
  );
}

export default CajaInformacion;
