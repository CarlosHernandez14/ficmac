import React from "react";
import LineaDivisora from "../General/LineaDivisora";


function InformacionBasica({name, edad,sexo,eps,ips,nacionalidad}) {
  return (
    <div >
      <p className="text-white font-bold text-xl">Nombre</p>
      <p className="text-white text-[15px]">{name}</p>
      <LineaDivisora />
      <p className="text-white font-bold text-xl">Edad</p>
      <p className="text-white text-[15px]">{edad} años</p>
      <LineaDivisora />
      <p className="text-white font-bold text-xl">Genero</p>
      <p className="text-white text-[15px]">{sexo}</p>
      <LineaDivisora />
      <p className="text-white font-bold text-xl ">EPS</p>
      <p className="text-white text-[15px]">{eps}</p>
      <LineaDivisora />
      <p className="text-white font-bold text-xl">IPS</p>
      <p className="text-white text-[15px]">{ips}</p>
      <LineaDivisora />
      <p className="text-white font-bold text-xl ">Nacionalidad</p>
      <p className="text-white text-[15px]">{nacionalidad}</p>
    </div>
  );
}

export default InformacionBasica;
