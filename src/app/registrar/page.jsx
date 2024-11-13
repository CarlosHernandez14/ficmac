import React from 'react'
import Caja from '../components/Registrar/Caja';

function Page() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src="/registro.jpg"
          alt="registro"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#367B99] to-transparent"></div>
      {/* Contenido */}
      <div className="absolute inset-0 p-14">
        <Caja />
      </div>
    </div>
  );
}

export default Page