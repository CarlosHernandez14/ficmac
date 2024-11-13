import React from "react";

import Caja from "../components/InicioSesion/Caja";

function Page() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src="/inicio_sesion.jpg"
          alt="inicio_sesion"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#753350] to-transparent"></div>
      {/* Contenido */}
      <div className="absolute inset-0 p-20">
        <Caja/>
      </div>
    </div>
  );
}

export default Page;
