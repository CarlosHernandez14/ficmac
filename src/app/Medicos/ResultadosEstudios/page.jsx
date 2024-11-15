import React from "react";
import Resultados from "../../components/ConsultarResultados/Resultados/Resultados";

function page() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="\Medicos\doctor.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-100 pointer-events-none"></div>
      </div>
      <div className="relative z-10">
        <Resultados />
      </div>
    </div>
  );
}

export default page;
