import React from 'react'
import LineaDivisora from "../General/LineaDivisora";
function InformacionContacto({ email, numCelular,direccion }) {
  return (
    <div>
      <div>
        <p className="text-white font-bold ">Email</p>
        <p className="text-white text-[15px]">{email}</p>
        <LineaDivisora />
        <p className="text-white font-bold ">Teléfono</p>
        <p className="text-white text-[15px]">{numCelular}</p>
        <LineaDivisora />
        <p className="text-white font-bold ">Dirección</p>
        <p className="text-white text-[15px]">{direccion}</p>
      </div>
    </div>
  );
}

export default InformacionContacto
