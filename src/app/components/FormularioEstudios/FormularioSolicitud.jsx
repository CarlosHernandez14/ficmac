import React from "react";

import Formulario from "./Formulario";

const FormularioSolicitud = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative">
        <img
          src="/EstudioDisponibles/fondo.jpeg"
          alt="Fondo"
          className="w-full h-80 object-cover opacity-75"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent" />
        <div className="flex justify-center ">
        <h1 className="absolute text-center text-[#753350] text-3xl font-bold -translate-y-10">
        
        Solicitud de Formulario
      </h1>
        </div>
        
      </div>
    {/*  <h1 className="text-center ">Para continuar, es necesario llenar los datos desde <strong className="font-bold">Editar Perfil.</strong>  </h1>*/ }
      <div className="flex-1 mt-4 p-4 mb-48 mr-32">
        <Formulario />
      </div>
      </div>
   
  );
};

export default FormularioSolicitud;
