"use client"
import React from "react";
import Buscador from "./Buscador";
import Filtrador from "./Filtrador";
import Publicaciones from "./Publicaciones";
import { useState } from "react";

function InfoPublicaciones() {
  const [idTipoCancer, setIdTipoCancer] = useState("0");
  const [publicaciones, setPublicaciones] = useState([]);

  return (
    <div className="py-6">
      <div className="flex justify-center items-center">
        <p className="text-4xl font-semibold text-white">
          Publicaciones científicas
        </p>
      </div>
      <div className="flex justify-between px-16 py-6">
        <Buscador setPublicaciones={setPublicaciones} publicaciones={publicaciones}/>
        <Filtrador setIdTipoCancer={setIdTipoCancer}/>
      </div>
      <div className="flex justify-center px-12">
        <Publicaciones setPublicaciones={setPublicaciones} publicaciones={publicaciones} idTipoCancer={idTipoCancer}/>
      </div>
    </div>
  );
}

export default InfoPublicaciones;
