"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";

function ImagenPost( {imageSrc} ) {
  //const [imageSrc, setImageSrc] = useState("/Perfil/PF2.webp"); // Imagen por defecto

  return (
    <div className="w-auto h-auto bg-[#D9D9D9] rounded-full">
      <div className="flex justify-center">
        <div className="flex justify-center items-center">
          <img
            src={imageSrc}
            alt="Imagen Circular"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImagenPost;