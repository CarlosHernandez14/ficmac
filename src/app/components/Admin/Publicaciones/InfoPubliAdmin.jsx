"use client";
import { useState } from "react";
import Buscador from "../../Publicaciones/Buscador";
import Filtrador from "../../Publicaciones/Filtrador";
import PublicacionesAdmin from "./PublicacionesAdmin";
import { FaPlus } from "react-icons/fa";

function InfoPubliAdmin() {
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
        <Buscador
          setPublicaciones={setPublicaciones}
          publicaciones={publicaciones}
        />
        <Filtrador setIdTipoCancer={setIdTipoCancer} />
      </div>
      <div className="flex justify-start px-16 pb-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700"
          onClick={handleCreateClick}
        >
          <FaPlus />
          <span>Crear</span>
        </button>
      </div>
      <div className="flex justify-center px-12">
        <PublicacionesAdmin
          setPublicaciones={setPublicaciones}
          publicaciones={publicaciones}
          idTipoCancer={idTipoCancer}
        />
      </div>
    </div>
  );
}

export default InfoPubliAdmin;
