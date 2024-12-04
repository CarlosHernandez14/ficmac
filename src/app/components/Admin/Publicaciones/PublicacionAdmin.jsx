import React from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';


function PublicacionAdmin({ publicacion }) {
  return (
    <div className="h-20 w-full flex  items-center space-x-8 bg-white rounded-lg shadow-md shadow-black border-gray-300 border-b-red-600 border-2">
      <div className="flex items-center">
        <img src="\Publicaciones\imgArticulo1.jpg" alt="" className="h-20 w-20 rounded-lg" />
      </div>
      <div className="flex-grow text-center">
        <p className="text-4xl">{publicacion.titulo}</p>
      </div>
      <div className="flex items-center space-x-4 px-4">
        <button className="text-red-500 hover:text-red-700">
          <FaTrash className="w-8 h-8" />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <FaEdit className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default PublicacionAdmin;
