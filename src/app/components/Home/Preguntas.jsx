"use client"
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Preguntas = ({pregunta, respuesta}) => {
   // Estado para controlar si la respuesta está visible
   const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

   // Función para alternar la visibilidad de la respuesta
   const toggleRespuesta = () => {
     setMostrarRespuesta(!mostrarRespuesta);
   };
 
   return (
    <div className="flex justify-center ">
      <div
        className={`w-[1194px] h-auto rounded-[20px] cursor-pointer p-5 mt-10 ${
          mostrarRespuesta ? "bg-[#753350]" : "bg-[#A0737D]"
        }`}
        onClick={toggleRespuesta} 
      >
        <div className="flex justify-between w-full">
             <h1 className=" text-white text-2xl ml-5">{pregunta}</h1>
             <FaChevronDown
              className={`text-white text-2xl transition-transform ${
                mostrarRespuesta ? "rotate-180" : "rotate-0"
              }`}
            />
             
        </div>
     
        
        <hr className="border-t-2 border-white mt-4" /> 
        {mostrarRespuesta && ( 
          <p className="text-white text-xl mt-4 ml-5">{respuesta}</p>
        )}
      </div>
    </div>
  );
};

export default Preguntas;
