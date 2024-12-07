"use client"
import React from "react";
import PopupEditar from "./PopupEditar";
import PopupEliminar from "./PopupEliminar";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useState } from "react";

function PublicacionAdmin({ publicacion }) {
  const [popUpEditar, setPopUpEditar] = useState(false);
  const [popUpEliminar, setPopUpEliminar] = useState(false);

  const togglePopUpEditar = () => {
    setPopUpEditar(!popUpEditar);
  }

  const togglePopUpEliminar = () => {
    setPopUpEliminar(!popUpEliminar);
  }

  return (
    <div className="h-20 w-full flex  items-center space-x-8 bg-white rounded-lg shadow-md shadow-black border-gray-300 border-b-red-600 border-2">
      <div className="flex items-center">
        <img src="\Publicaciones\imgArticulo1.jpg" alt="" className="h-20 w-20 rounded-lg" />
      </div>
      <div className="flex-grow text-center">
        <p className="text-4xl">{publicacion.titulo}</p>
      </div>
      <div className="flex items-center space-x-4 px-4">
        <button className="text-red-500 hover:text-red-700" onClick={togglePopUpEliminar}>
          <FaTrash className="w-8 h-8" />
        </button>
        <button className="text-blue-500 hover:text-blue-700" onClick={togglePopUpEditar}>
          <FaEdit className="w-8 h-8" />
        </button>
      </div>
      {popUpEditar && (
        <PopupEditar publicacion={publicacion} onClose={togglePopUpEditar} />
      )}
      {popUpEliminar && (
        <PopupEliminar id={publicacion.id} onClose={togglePopUpEliminar} />
      )}
    </div>
  );
}

export default PublicacionAdmin;
