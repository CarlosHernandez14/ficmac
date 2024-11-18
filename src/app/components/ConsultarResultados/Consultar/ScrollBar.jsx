import TarjetaDesplegable from "./TarjetaDesplegable";

function ScrollBar({ estudiosPacientes }) {
  return (
    <div className="bg-[#D9D9D9] overflow-y-auto overflow-x-auto  h-screen w-auto p-2 space-y-2 ">
      {(estudiosPacientes || []).map((estudio, index) => (
        <TarjetaDesplegable
          key={index}
          estudio={estudio}
          // NombrePaciente={estudio.paciente}
          // SexoPaciente={estudio.paciente}
          TipoBiopsia={estudio.tipo}
          // NombreCancer={estudio.cancer}
          // NombreMedico={estudio.medico}
          // TelefonoPaciente={estudio.telefono}
          // NombreSintomas={estudio.sintomas}
          // MatriculaMedico={estudio.medico.matricula}
          // CorreoPaciente={estudio.paciente.correo}
          DescripcionCancer={estudio.descripcion}
        />
      ))}
    </div>
  );
}

export default ScrollBar;
