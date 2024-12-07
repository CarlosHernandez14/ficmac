"use client";
import React from "react";

/**
 * Componente `ButtonImage`:
 * 
 * Este botón incluye un texto y una imagen al lado. Es interactivo y se puede personalizar
 * mediante un evento `onClick`.
 * 
 * Props:
 * - `text`: Texto que se muestra en el botón.
 * - `imagen`: Ruta de la imagen que se muestra en el botón.
 * - `onClick`: Función que se ejecuta al hacer clic en el botón.
 */


function ButtonImage({ text, imagen, onClick }) {
  return (
    <button
      className="bg-[#367B99] text-white w-full p-2 rounded-lg hover:bg-[#5c57e8] flex justify-around"
      onClick={onClick}
    >
      {text}
      <img src={imagen} className="w-6 h-6 " />
    </button>
  );
}

export default ButtonImage;
