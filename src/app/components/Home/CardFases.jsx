import React from "react";

//Este componente cardFases es para la parte del FIC-65 Home Carrusel vista 2 Redireccion
//en el cual se muestran las dases del cáncer.

const CardFases = ({ color, imagen, titulo, numero, descripcion }) => {
  return (
    <div
      className="w-[602px] h-[311px] rounded-[20px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg "
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between">
        <div className="w-1/3 m-5">
          <img src={imagen} className="w-[169px] h-[174px] rounded-[20px]" />
        </div>
        <div className="w-2/3 m-5">
          <h1 className="text-white font-bold text-[32px]">{titulo}</h1>
        </div>
        <div className="m-5">
          <h1 className="text-white font-bold text-4xl">{numero}</h1>
        </div>
      </div>
      <div>
        <p className="text-white font-semibold text-xl ml-5">
          {" "}
          Descripción: {descripcion}
        </p>
      </div>
    </div>
  );
};

export default CardFases;
