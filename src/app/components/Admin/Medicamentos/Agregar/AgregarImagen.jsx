'use client';
import React, { useState } from 'react'
import { IoDuplicateOutline } from "react-icons/io5";

function AgregarImagen({ onImageSelect }) {
const [imageSrc, setImageSrc] = useState(null);

// Función para manejar el cambio de archivo
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDetails = {
        url: reader.result, // Imagen en formato base64
        name: file.name, // Nombre del archivo
        type: file.type, // Tipo MIME
      };
      setImageSrc(reader.result);
      onImageSelect(imageDetails); // Pasar los detalles al padre
    };
    reader.readAsDataURL(file);
  }
};

// Función para abrir el input file
const handleButtonClick = () => {
  document.getElementById("fileInput").click();
};

  return (
    <div className="bg-[#CB1662] w-80 h-auto p-8 flex justify-center rounded-e-xl relative">
      <div className="relative">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Selected"
            className="rounded-2xl w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 flex justify-center items-center">
          <button
            className="hover:text-[#e4aec4] text-white font-bold py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            <IoDuplicateOutline className="text-6xl" />
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AgregarImagen
