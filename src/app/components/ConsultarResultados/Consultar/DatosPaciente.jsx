import React from "react";

function DatosPaciente({
 
  TelefonoPaciente,

  CorreoPaciente,
  DescripcionCancer,
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between px-16 ">
        <div className=" space-y-2">
          <p>
            Télefono: <span className="ml-2">{TelefonoPaciente}</span>
          </p>
        </div>
        <div className=" space-y-2">
          <p>
            Correo: <span className="ml-2">{CorreoPaciente}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center font-semibold">
        <p>Descripción</p>
      </div>
      <div className="px-16 text-justify">
        <p>{DescripcionCancer}</p>
      </div>
    </div>
  );
}

export default DatosPaciente;
