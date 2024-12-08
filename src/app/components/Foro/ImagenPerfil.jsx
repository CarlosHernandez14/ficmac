"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";

import { getPaciente, updateImagePaciente } from "@/actions/users/edit";

function ImagenPerfil() {
  const [imageSrc, setImageSrc] = useState("/Perfil/PF2.webp"); // Imagen por defecto
  const fileInputRef = useRef(null); // Referencia al input de la imagen
  const [isPending, startTransition] = useTransition(); // Transición de la imagen
  const [paciente, setPaciente] = useState(null); // Estado para almacenar los datos del paciente

  // Función para subir la imagen del paciente
  const uploadImage = async (form) => {
    const pacienteData = await getPaciente();
    if (pacienteData) {
      setPaciente(pacienteData); // Almacena los datos del paciente
      if (pacienteData.imagen_url) {
        setImageSrc(pacienteData.imagen_url); // Establece la URL de la imagen del paciente
      }
    }
  };

  // Función para actualizar la imagen del paciente
  useEffect(() => {
    uploadImage();
  }, []);

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

export default ImagenPerfil;