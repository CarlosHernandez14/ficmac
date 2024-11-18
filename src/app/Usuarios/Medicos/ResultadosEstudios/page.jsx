import React from "react";
import Resultados from "../../../components/ConsultarResultados/Resultados/Resultados";

function page() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="\Medicos\doctor.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <Resultados />
      </div>
    </div>
  );
}

export default page;
