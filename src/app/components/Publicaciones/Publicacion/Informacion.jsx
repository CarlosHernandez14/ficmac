import React from "react";
import ButtonPublicacion from "./ButtonPublicacion";

function Informacion({ publicacion }) {
  const fechaSolicitud = new Date(
    publicacion.fecha_publicado
  ).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="space-y-2">
      <p className="text-xl font-semibold">{publicacion.titulo}</p>

      <div className="flex-grow overflow-y-auto max-h-[168px]">
        <p className="text-justify">{publicacion.resumen}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">
          Autor: {publicacion.usuario.name}
        </p>
        <p className="text-xs text-gray-500">Fecha: {fechaSolicitud}</p>
      </div>
      <p className="text-xs text-gray-500">{publicacion.Tipo_Cancer.nombre}</p>
      <ButtonPublicacion link={publicacion.link}/>
    </div>
  );
}

export default Informacion;
