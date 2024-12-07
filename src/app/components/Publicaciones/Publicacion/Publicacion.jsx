import React from "react";
import Informacion from "./Informacion";
import FondoPublicacion from "./FondoPublicacion";

function Publicacion({ publicacion }) {
  return (
    <div
      className="bg-white rounded-lg flex justify-between mb-8 shadow-lg shadow-black"
    >
      <div className="flex w-full">
        <div className="w-1/2 p-4">
          <Informacion publicacion={publicacion}/>
        </div>
        <div className="w-1/2">
          <FondoPublicacion />
        </div>
      </div>
    </div>
  );
}

export default Publicacion;
