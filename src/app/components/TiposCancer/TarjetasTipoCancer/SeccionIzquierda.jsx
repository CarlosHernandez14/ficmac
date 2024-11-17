import React from "react";
import Rectangulo from "./Rectangulo";
import Circulo from "./Circulo";

function SeccionIzquierda({ texto, imagen }) {
  return (
    <div className="relative inline-block">
      <Rectangulo texto={texto} />

 
      <div className="absolute top-2 left-56">
        <Circulo color="#2e6e8a" size="295px"  />
      </div>

   
      <div className="absolute top-8 left-[250px]  ">
        <Circulo color="#367B99" size="250px" imagen={imagen} />
       
      </div>
    </div>
  );
}

export default SeccionIzquierda;
