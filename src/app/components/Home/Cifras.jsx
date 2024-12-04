import React from "react";





const Cifras = ({ imagen, texto, altImagen, numeros }) => {
  return (
    //Este componente funciona para la parte de carrusel vista 1
    //Para la parte de la cifras
    <div className="w-96 h-40">
      <div className="flex flex-row">
        <div className="mt-12">
          <img src={imagen} alt={altImagen} />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold text-[#CB1662] ml-5 text-left">
            {numeros}
          </h1>
          <h2 className="text-xl font-normal text-black">{texto}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cifras;
