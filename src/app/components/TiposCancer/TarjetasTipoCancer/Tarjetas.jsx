import React from "react";
import Circulo from "./Circulo";
import Rectangulo from "./Rectangulo";
import SeccionIzquierda from "./SeccionIzquierda";
import SeccionDerecha from "./SeccionDerecha";

function Tarjetas({ texto, titulo, descripcion, imagen, instructivo }) {
  return (
    <div className="bg-white shadow-2xl rounded-lg flex justify-between overflow-hidden  w-[1027px] h-[309px] mx-auto">
      <SeccionIzquierda texto={texto} imagen={imagen} />
      <SeccionDerecha
        titulo={titulo}
        descripcion={descripcion}
        instructivo={instructivo}
      />
    </div>
  );
}

export default Tarjetas;
