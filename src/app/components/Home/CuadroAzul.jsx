import React from "react";
import Check from "./Check";

const CuadroAzul = () => {
  return (
    <div className="w-[826px] h-[506px] rounded-[20px] bg-[#367B99] flex">
      <div className="w-1/2">
        <h1 className="text-white font-bold text-2xl text-center  ">
          {" "}
          La Medicina de Precisión ha
          <br /> tranformado la oncología
        </h1>
        <p className="text-white font-normal text-xl text-justify mt-24 mx-5">
          Mejorando significativamente la <br /> atención de pacientes con
          cáncer.
          <br />
          En Ontec, brindamos un enfoque
          <br /> innovador y efectivo en el cuidado
          <br /> de la salud, con beneficios que
          <br /> impactan tanto a pacientes como a<br /> la comunidad médica y
          científica.
        </p>
      </div>
      <div className="relative w-1/2  ">
        <img
          src="/Home/Carrusel_vista_3_Y_Fondo.jpg"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
       <div className="mt-36">
        <Check texto={"Diagnóstico preciso."}/>
       </div>
       <Check texto={"Terapias dirigidas."}/>
       <Check texto={"Monitorización continua del progreso."}/>
       <Check texto={"Pronóstico y prevención avanzados Innovación en investigación y desarrollo."}/>
        
      </div>
    </div>
  );
};

export default CuadroAzul;
