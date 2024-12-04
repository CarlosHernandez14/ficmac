import React from "react";
import Documentos from "./Documentos";
import ExaminarArchivo from "./ExaminarArchivo";

const AdjuntarDocs = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative">
        <img
          src="/EstudioDisponibles/fondo.jpeg"
          alt="Fondo"
          className="w-full h-80 object-cover opacity-75"
        />
         <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent" />
         <div className="flex justify-center">
          
        <h1 className="absolute text-center text-[#753350] text-3xl font-bold -translate-y-16">
          Adjuntar documentos
        </h1>
        </div>
      </div>

      <div className="flex-1 mb-32 ">
        <Documentos />
      </div>
    </div>
  );
};

export default AdjuntarDocs;
