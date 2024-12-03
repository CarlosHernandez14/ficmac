import React from "react";
import ButtonRosa from "../General/ButtonRosa";

const TextoDerecho = ({titulo, descripcion, boton=""}) => {
  return (
    <div className="w-1/2 mt-6 leading-10 mx-16 ">
      <h1 className="font-bold text-[#367B99] text-[40px]">
        {titulo}
      </h1>
      <p className="text-xl font-medium text-justify mt-20">
        {descripcion}
      </p>
      <div className="w-full justify-center flex items-center">
       
      </div>
    </div>
  );
};

export default TextoDerecho;
