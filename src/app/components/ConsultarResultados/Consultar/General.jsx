'use client'
import React, { useState } from 'react'
import ScrollBar from "@/app/components/ConsultarResultados/Consultar/ScrollBar";
import TextoTiposBiopsia from "@/app/components/ConsultarResultados/Consultar/TextoTiposBiopsia";
import BotonesTipoBiopsia from "@/app/components/ConsultarResultados/Consultar/BotonesTipoBiopsia";
function General() {
    const [pacientes, setPacientes] = useState([]);

    const handlePacientesUpdate = (data) => {
      setPacientes(data);
    };
  return (
    <div className="flex justify-between relative  py-5 px-24 ">
      <ScrollBar/>
      {/* <ScrollBar pacientes={pacientes} /> */}
      <div>
        <TextoTiposBiopsia />
        <BotonesTipoBiopsia/>
        {/* <BotonesTipoBiopsiaon PacientesUpdate={handlePacientesUpdate} /> */}
      </div>
    </div>
  );
}

export default General
