import React from "react";
import ImagenCircular from "./ImagenCircular";
import Boton from "./Boton";


function ImagenPerfil() {
  return (
    <div className="w-auto h-auto bg-[#D9D9D9] rounded-xl">
      <div className="py-24 flex justify-center">
        <img src="/General/logoblanco.png" alt="Perfil" className="w-64 " />
      </div>
      <div className="px-10">
        <p className="text-[#753350] font-semibold text-xl">Imagen de perfil</p>
        <p className="text-xs text-[#753350]">
          Utiliza una foto para mejorar tu perfil, para que el resto de personas
          te reconozcan en tu cuenta
        </p>
      </div>
      <div className=" py-4">
        <ImagenCircular />
      </div>
      <div className="flex justify-center py-5">
        <Boton />
      </div>
    </div>
  );
}

export default ImagenPerfil;
