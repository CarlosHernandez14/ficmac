import React from "react";
import ButtonRosa from "../../General/ButtonRosa";

function InformacionEstudio({resultado}) {
  const fechaSolicitud = new Date(resultado.solicitud_estudio.fecha_solicitud).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <p className="text-xl mr-40">{resultado.solicitud_estudio.usuario.Paciente[0].nombre_completo}</p>
        <p className="text-xl ml-40">*edad*</p>
      </div>
      <hr className="w-full my-1 border-t-1 border-black" />
      <div className="flex justify-between">
        <div>
        <p className="text-sm">Genero: {resultado.solicitud_estudio.usuario.Paciente[0].sexo}</p>
            <p className="text-sm">Celular: {resultado.solicitud_estudio.usuario.num_celular}</p>
            <p className="text-sm">Ciudad: *CIUDAD*</p>
            <p className="text-sm">Dirección: *DIRECCION*</p>
            <p className="text-sm">Nacionalidad: *NACIONALIDAD*</p>
            <p className="text-sm">Correo: {resultado.solicitud_estudio.usuario.email}</p>
        </div>
        <div>
            <p className="text-sm">Fecha de solicitud: {fechaSolicitud}</p>
            <p className="text-sm">Tipo de cancer: {resultado.tipo_cancer.nombre}</p>
            <p className="text-sm">Tipo de biopsia: {resultado.biopsia_remitida}</p>
            <p className="text-sm">Prueba: {resultado.prueba}</p>
            <p className="text-sm">Link historia clinica: {resultado.solicitud_estudio.path_historia_clinica}</p>
            <p className="text-sm">Link informe patología: {resultado.solicitud_estudio.path_informe_patologia}</p>
        </div>
      </div>
      <div className="mt-2">
        <ButtonRosa text="Ver resultados" />
      </div>
    </div>
  );
}

export default InformacionEstudio;
