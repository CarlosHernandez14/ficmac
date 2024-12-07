import React from 'react'
import LineaDivisora from "../General/LineaDivisora";
function InformacionContacto({ email, numCelular,direccion,
  tipoDocumento,numDocumento,parentescoFamiliar,contactoFamiliar }) {
  return (
    <div>
      <div>
        <p className="text-white text-xl font-bold ">Email</p>
        <p className="text-white text-[15px]">{email}</p>
        <LineaDivisora />
        <p className="text-white text-xl font-bold ">Teléfono</p>
        <p className="text-white text-[15px]">{numCelular}</p>
        <LineaDivisora />
        <p className="text-white text-xl font-bold ">Dirección</p>
        <p className="text-white text-[15px]">{direccion}</p>
        <LineaDivisora />
        <p className="text-white text-xl font-bold ">Tipo documento</p>
        <p className="text-white text-[15px]">{tipoDocumento}</p>
        <LineaDivisora />
        <p className="text-white text-xl font-bold ">Número documento</p>
        <p className="text-white text-[15px]">{numDocumento}</p>
        <LineaDivisora />
        <p className="text-white text-xl font-bold ">Parentesco familiar</p>
        <p className="text-white text-[15px]">{parentescoFamiliar}</p>
        <LineaDivisora />
        <p className="text-white text-xl  font-bold ">Contacto familiar</p>
        <p className="text-white text-[15px]">{contactoFamiliar}</p>
      </div>
    </div>
  );
}

export default InformacionContacto
