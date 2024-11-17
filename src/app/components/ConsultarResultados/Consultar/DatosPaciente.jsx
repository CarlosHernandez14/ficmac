import React from 'react'

function DatosPaciente({NombreCancer, NombreMedico, TelefonoPaciente, 
  NombreSintomas, CedulaMedico, CorreoPaciente, DescripcionCancer}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between px-16 ">
        <div className=" space-y-2">
          <p>
            Tipo de cáncer: <span className="ml-2"> {NombreCancer}</span>{" "}
          </p>
          <p>
            Médico: <span className="ml-2">{NombreMedico}</span>
          </p>
          <p>
            Télefono: <span className="ml-2">{TelefonoPaciente}</span>
          </p>
        </div>
        <div className=" space-y-2">
          <p>
            Síntomas: <span className="ml-2">{NombreSintomas}</span>
          </p>
          <p>
            {" "}
            Cédula:<span className="ml-2">{CedulaMedico}</span>
          </p>
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

export default DatosPaciente
