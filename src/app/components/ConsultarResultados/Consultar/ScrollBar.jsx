import TarjetaDesplegable from "./TarjetaDesplegable";

function ScrollBar({ solicitudesPacientes }) {
  return (
    <div className="bg-[#D9D9D9] overflow-y-auto overflow-x-auto  h-screen w-[720px] p-2 space-y-2 ">
      {(solicitudesPacientes || []).map((solicitud, index) => {
        const paciente = solicitud.usuario?.Paciente?.[0]; // Asumimos que solo hay un paciente por solicitud
        const sexoPaciente = paciente ? paciente.sexo : "No disponible"; // Si no hay paciente, asignar "No disponible"
        const nombrePaciente = paciente
          ? paciente.nombre_completo
          : "No disponible";
        return (
          <TarjetaDesplegable
            key={index}
            solicitud={solicitud}
            NombrePaciente={nombrePaciente}
            SexoPaciente={sexoPaciente}
            TipoBiopsia={solicitud.estudio.tipo}
            TelefonoPaciente={solicitud.usuario.num_celular}
            CorreoPaciente={solicitud.usuario.email}
            DescripcionCancer={solicitud.estudio.descripcion}
          />
        );
      })}
    </div>
  );
}

export default ScrollBar;
