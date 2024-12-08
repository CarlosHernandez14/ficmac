import React from "react";
import ButtonRosa from "@/app/components/General/ButtonRosa";
import { FaDownload } from "react-icons/fa";

function InformacionEstudio({ resultado }) {
  const fechaSolicitud = new Date(
    resultado.solicitud_estudio.fecha_solicitud
  ).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <p className="text-xl mr-40">
          {resultado.solicitud_estudio.usuario.Paciente[0].nombre_completo}
        </p>
        <p className="text-xl ml-40">{resultado.solicitud_estudio.usuario.Paciente[0].nombre_completo}</p>
      </div>
      <hr className="w-full my-1 border-t-1 border-black" />
      <div className="flex justify-between">
        <div>
          <p className="text-sm">
            Genero: {resultado.solicitud_estudio.usuario.Paciente[0].edad}
          </p>
          <p className="text-sm">
            Celular: {resultado.solicitud_estudio.usuario.num_celular}
          </p>
          <p className="text-sm">Dirección: {resultado.solicitud_estudio.usuario.Paciente[0].direccion}</p>
          <p className="text-sm">
            Correo: {resultado.solicitud_estudio.usuario.email}
          </p>
        </div>
        <div>
          <p className="text-sm">Fecha de solicitud: {fechaSolicitud}</p>
          <p className="text-sm">
            Tipo de cancer: {resultado.tipo_cancer.nombre}
          </p>
          <p className="text-sm">
            Tipo de biopsia: {resultado.biopsia_remitida}
          </p>
          <p className="text-sm">Prueba: {resultado.prueba}</p>
          <a
            href={resultado.solicitud_estudio.path_historia_clinica}
            className="text-sm text-blue-500 underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link historia clínica <FaDownload className="ml-2" />
          </a>
          <a
            href={resultado.solicitud_estudio.path_informe_patologia}
            className="text-sm text-blue-500 underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link informe patología <FaDownload className="ml-2" />
          </a>
        </div>
      </div>
      <div className="mt-2">
        <ButtonRosa text="Ver resultados" />
      </div>
    </div>
  );
}

export default InformacionEstudio;
