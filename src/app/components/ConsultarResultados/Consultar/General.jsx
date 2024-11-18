"use client";
import React, { useState } from "react";
import ScrollBar from "@/app/components/ConsultarResultados/Consultar/ScrollBar";
import TextoTiposBiopsia from "@/app/components/ConsultarResultados/Consultar/TextoTiposBiopsia";
import BotonesTipoBiopsia from "@/app/components/ConsultarResultados/Consultar/BotonesTipoBiopsia";

function General() {
  const [solicitudes, setSolicitudes] = useState([]);
  return (
    <div className="flex justify-between relative  py-5 px-36 ">
      <ScrollBar solicitudesPacientes={solicitudes} />
      <div className="px-40"> 
        <TextoTiposBiopsia />
        <BotonesTipoBiopsia setSolicitudes={setSolicitudes} />
      </div>
    </div>
  );
}

export default General;
