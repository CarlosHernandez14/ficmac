"use client";
import { FaEdit } from "react-icons/fa";
import CajaInformacionBasica from "../Basica/CajaInformacionBasica";
import Boton from "./Boton";
import { useState } from "react";
import CajaEditarPerfil from "../Editar/CajaEditarPerfil";

function CajaInformacion() {
  const [mostrarEditarPerfil, setMostrarEditarPerfil] = useState(false);

  const handleEditarPerfil = () => {
    setMostrarEditarPerfil(true);
  };
  return (
    <div>
      {mostrarEditarPerfil ? (
        <CajaEditarPerfil />
      ) : (
        <div className=" relative">
          <div className="flex justify-between items-center space-x-80 px-10 py-12">
            <div className="">
              <p className="text-[#753350] font-semibold text-2xl whitespace-nowrap">
                Información básica
              </p>
            </div>
            <div>
              <Boton texto={"Editar perfil"} onClick={handleEditarPerfil} />
            </div>
          </div>
          <div className="px-10 py-5">
            <CajaInformacionBasica />
          </div>
          <div className="flex justify-between  py-10 px-10">
            <p className="text-[#753350] font-semibold text-2xl">
              Información de contacto
            </p>
          </div>
          <div className="px-10 py-5">
            <CajaInformacionBasica />
          </div>
        </div>
      )}
    </div>
  );
}

export default CajaInformacion;
