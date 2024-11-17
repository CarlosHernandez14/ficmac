import React from "react";
import TarjetaDesplegable from "./TarjetaDesplegable";

function ScrollBar({
  nombre,
  tipo,
  sexo,
  NombreCancer,
  NombreMedico,
  TelefonoPaciente,
  NombreSintomas,
  CedulaMedico,
  CorreoPaciente,
  DescripcionCancer,
}) {
  return (
    <div className="bg-[#D9D9D9] overflow-y-auto overflow-x-auto  h-screen w-auto p-2 space-y-2 ">
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      <TarjetaDesplegable />
      {/* {pacientes.map((paciente, index) => (
        <TarjetaDesplegable
          key={index}
          nombre={paciente.nombre}
          tipo={paciente.tipo}
          sexo={paciente.sexo}
          NombreCancer={paciente.NombreCancer}
          NombreMedico={paciente.NombreMedico}
          TelefonoPaciente={paciente.TelefonoPaciente}
          NombreSintomas={paciente.NombreSintomas}
          CedulaMedico={paciente.CedulaMedico}
          CorreoPaciente={paciente.CorreoPaciente}
          DescripcionCancer={paciente.DescripcionCancer}
        />
      ))} */}
    </div>
  );
}

export default ScrollBar;
