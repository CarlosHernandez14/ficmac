"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";

import Boton from "../General/Boton";
import ImagenCircular from "./ImagenCircular";

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
  // Función para abrir el input de la imagen
  const handleButtonClick = () => {
     if (paciente) {
      fileInputRef.current.click(); // Abre el selector de archivos solo si existe un paciente
    } else {
      alert("No se puede ecoger una foto de perfil si no has llenado tus datos personales");
    }
  };
  // Función para cambiar la imagen del paciente
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const form = new FormData();
      form.append("files", file);
      // Inicia una transición para actualizar la imagen del paciente
      startTransition(() => {
        updateImagePaciente(form)
          .then((response) => {
            if (response.OK) {
              setImageSrc(response.data[0].secure_url);
            } else {
              console.log("Error al actualizar la imagen");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
      reader.onloadend = () => {};
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-auto h-auto bg-[#D9D9D9] rounded-xl">
      <div className="py-24 flex justify-center">
        <img src="/General/logoblanco.png" alt="Perfil" className="w-64 " />
      </div>
      <div className="px-10 py-6">
        <p className="text-[#753350] font-semibold text-2xl">Imagen de perfil</p>
        <p className="text-xl text-[#753350]">
          Utiliza una foto para mejorar tu perfil, para que el resto de personas
          te reconozcan en tu cuenta
        </p>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className=" py-32 flex justify-center">
        <ImagenCircular imageSrc={imageSrc} />
      </div>
      <div className="flex justify-center py-4">
        <Boton texto={"Editar"} onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default ImagenPerfil;
