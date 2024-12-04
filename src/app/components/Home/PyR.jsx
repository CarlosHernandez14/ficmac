import React from "react";
import Preguntas from "./Preguntas";

const PyR = () => {
  return (
    <div className="relative w-full min-h-screen p-5">
      {/* Imagen de fondo */}
      <img
        src="/Home/Microambiente_Tumoral.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      <div className="relative z-10">
        <Preguntas
        />
       
      </div>
    </div>
  );
};

export default PyR;
