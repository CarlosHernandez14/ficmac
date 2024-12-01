import React from "react";
import LineaDivisora from "../General/LineaDivisora";


function InformacionBasica({name, edad,sexo}) {
  return (
    <div>
      <p className="text-white font-bold ">Nombre</p>
      <p className="text-white text-[15px]">{name}</p>
      <LineaDivisora />
      <p className="text-white font-bold ">Edad</p>
      <p className="text-white text-[15px]">{edad} años</p>
      <LineaDivisora />
      <p className="text-white font-bold ">Genero</p>
      <p className="text-white text-[15px]">{sexo}</p>
    </div>
  );
}

export default InformacionBasica;
