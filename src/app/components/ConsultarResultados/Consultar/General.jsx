"use client";
import React, { useState } from "react";
import ScrollBar from "@/app/components/ConsultarResultados/Consultar/ScrollBar";
import TextoTiposBiopsia from "@/app/components/ConsultarResultados/Consultar/TextoTiposBiopsia";
import BotonesTipoBiopsia from "@/app/components/ConsultarResultados/Consultar/BotonesTipoBiopsia";

function General() {
  const [estudios, setEstudios] = useState([]);
  return (
    <div className="flex justify-between relative  py-5 px-24 ">
      <ScrollBar estudiosPacientes={estudios} />
      <div>
        <TextoTiposBiopsia />
        <BotonesTipoBiopsia setEstudios={setEstudios} />
      </div>
    </div>
  );
}

export default General;
