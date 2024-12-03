'use client'
import React, { useEffect, useRef, useState, useTransition } from "react";

import Boton from "../General/Boton";
import ImagenCircular from "./ImagenCircular";
import { uploadImage } from "@/actions/cloudinary/cloudinary.actions";
import { getPaciente, updateImagePaciente } from "@/actions/users/edit";



function ImagenPerfil() {
   const [imageSrc, setImageSrc] = useState("/ruta/a/tu/imagen.jpg");
   const fileInputRef = useRef(null);
   const [isPending, startTransition] = useTransition()

   const uploadImage = async (form) => {
      const paciente = await getPaciente()
      if(paciente && paciente.imagen_url){
        setImageSrc(paciente.imagen_url)
      }
   }

   useEffect(() => {
      uploadImage()
   },[])

   const handleButtonClick = () => {
     fileInputRef.current.click();
   };

   const handleFileChange = async (e) => {
     const file = e.target.files[0];
     if (file) {
       const reader = new FileReader();
       const form = new FormData();
        form.append("files", file);
       startTransition(() => {
        updateImagePaciente(form).then((response) => {
          
          if (response.OK) {
            setImageSrc(response.data[0].secure_url)
          } else {
            console.log("Error al actualizar la imagen");
          }
        }).catch((error) => {
          console.log(error);
        })
      })
       reader.onloadend = () => {  
       };
       reader.readAsDataURL(file);
     }
   };
  return (
    <div className="w-auto h-auto bg-[#D9D9D9] rounded-xl">
      <div className="py-24 flex justify-center">
        <img src="/General/logoblanco.png" alt="Perfil" className="w-64 " />
      </div>
      <div className="px-10">
        <p className="text-[#753350] font-semibold text-xl">Imagen de perfil</p>
        <p className="text-xs text-[#753350]">
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
      <div className=" py-4">
        <ImagenCircular imageSrc={imageSrc} />
      </div>
      <div className="flex justify-center py-5">
        <Boton texto={"Editar"} onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default ImagenPerfil;
