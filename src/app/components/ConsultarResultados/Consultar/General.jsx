"use client";
import React, { useState } from "react";
import ScrollBar from "@/app/components/ConsultarResultados/Consultar/ScrollBar";
import TextoTiposBiopsia from "@/app/components/ConsultarResultados/Consultar/TextoTiposBiopsia";
import BotonesTipoBiopsia from "@/app/components/ConsultarResultados/Consultar/BotonesTipoBiopsia";

function General() {
  const [tipo, setTipo] = useState("");
  return (
    <div className="flex justify-between relative  py-5 px-24 ">
      <ScrollBar tipo={tipo} />
      <div>
        <TextoTiposBiopsia />
        <BotonesTipoBiopsia setTipo={setTipo} />
      </div>
    </div>
  );
}

export default General;
