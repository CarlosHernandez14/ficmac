"use client";

import CajaInformacionBasica from "../Basica/CajaInformacionBasica";
import Boton from "./Boton";
import { useState } from "react";
import CajaEditarPerfil from "../Editar/CajaEditarPerfil";
import CajaInformacionContacto from "../Contacto/CajaInformacionContacto";

function CajaInformacion() {
  const [mostrarEditarPerfil, setMostrarEditarPerfil] = useState(false); // Estado para controlar la visualización del componente de edición de perfil
  
  // Función para manejar el clic en el botón de editar perfil
  const handleEditarPerfil = () => {
    setMostrarEditarPerfil(true); // Muestra el componente de edición de perfil
  };
  return (
    <div>
      {mostrarEditarPerfil ? (
        // Si mostrarEditarPerfil es true, muestra el componente de edición de perfil
        <CajaEditarPerfil />
      ) : (
        // Si mostrarEditarPerfil es false, muestra la información básica y de contacto
        <div className=" relative">
          <div className="flex justify-between items-center space-x-96 px-10 py-12">
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
            <CajaInformacionContacto />
          </div>
        </div>
      )}
    </div>
  );
}

export default CajaInformacion;
