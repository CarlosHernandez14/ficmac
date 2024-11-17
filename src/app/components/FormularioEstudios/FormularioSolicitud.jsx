import React from "react";

import Formulario from "./Formulario";

const FormularioSolicitud = () => {
  return (
    <div className="relative">
      <img
        src="/EstudioDisponibles/fondo.jpeg"
        alt="Fondo"
        className="w-full h-80 object-cover opacity-75"
      />
      <div>
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent " />
        <div className="absolute ">
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default FormularioSolicitud;
