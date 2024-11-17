import React from "react";
import ButtonAzul from "../General/ButtonAzul";
import ButtonImage from "./ButtonImage";

const ExaminarArchivo = () => {
  return (
    <div className="rounded-[20px] border-[#367B99] w-[400px] h-[105px] border-[3px] bg-white ">
      <div className="flex flex-col p-2 ">
        <div className="text-sm text-center">
          Ningún archivo seleccionado|Tamaño maximo 3MB
        </div>

        <div className="w-full mt-5 flex justify-center">
          <div className="w-1/2 ">
            <ButtonImage text={"Examinar"} imagen={"/FormularioSolicitarEstudios/adjuntar.png"} />
          
          </div>
        
         
        </div>
      </div>
    </div>
  );
};

export default ExaminarArchivo;
