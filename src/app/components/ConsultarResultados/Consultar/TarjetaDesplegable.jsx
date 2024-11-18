"use client";
import React, { useState } from "react";
import LineaDivisora from "./LineaDivisora";
import DatosPaciente from "./DatosPaciente";
import ImagenCircular from "./ImagenCircular";
import BotonSeleccionarPaciente from "./BotonSeleccionarPaciente";


function TarjetaDesplegable({
  // NombrePaciente,
  // SexoPaciente,
  TipoBiopsia,
  // NombreCancer,
  // NombreMedico,
  // TelefonoPaciente,
  // NombreSintomas,
  // MatriculaMedico,
  // CorreoPaciente,
  DescripcionCancer,
}) {
  const [desplegado, setDesplegado] = useState(false);

  const toggleDesplegado = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div
      className={`p-1 w-[700px] rounded-2xl shadow-lg flex flex-col space-y-1 ${
        desplegado ? "bg-[#753350]" : "bg-[#A0737D]"
      } text-white`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <ImagenCircular />
          <div className="w-[550px] ">
            <p className="text-lg font-bold">Yair Arriaga{NombrePaciente}</p>
            <LineaDivisora />
          </div>
        </div>
        <button onClick={toggleDesplegado} className="px-3 text-white ">
          {desplegado ? "▲" : "▼"}
        </button>
      </div>

      <div className="flex justify-between px-[67px]  ">
        <p className="text-sm">Masculina{SexoPaciente}</p>
        <span className="text-white  py-1 text-sm font-semibold">
          {TipoBiopsia}
        </span>
      </div>
      {desplegado && (
        <div className="mt-4 ">
          <DatosPaciente
            // NombreCancer={NombreCancer}
            // NombreMedico={NombreMedico}
            // TelefonoPaciente={TelefonoPaciente}
            // NombreSintomas={NombreSintomas}
            // MatriculaMedico={MatriculaMedico}
            // CorreoPaciente={CorreoPaciente}
            DescripcionCancer={DescripcionCancer}
          />
          <div className=" flex justify-center py-2">
            <BotonSeleccionarPaciente />
          </div>
        </div>
      )}
    </div>
  );
}

export default TarjetaDesplegable;
