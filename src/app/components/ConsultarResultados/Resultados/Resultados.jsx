import React from "react";
import TarjetaPaciente from "./TarjetaPaciente";

function Resultados() {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <p className="text-4xl font-semibold mb-8">Resultados</p>
      <div className="flex flex-col items-center space-y-4  overflow-y-auto max-h-[460px]">
        <TarjetaPaciente />
        <TarjetaPaciente />
        <TarjetaPaciente />
        <TarjetaPaciente />
      </div>
    </div>
  );
}

export default Resultados;
