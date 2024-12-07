import { getAllSolicitudes } from "@/actions/estudios/solicitud.actions";

function BotonesTipoBiopsia({ setSolicitudes }) {
  const handleClick = async (tipo) => {
    try {
      const response = await getAllSolicitudes();
      console.log(response);
      if (response.OK) {
        const solicitudesPacientes = response.data.filter(
          (solicitud) => solicitud.estudio.tipo === tipo
        );
        setSolicitudes(solicitudesPacientes);
      } else {
        alert("Error al obtener los estudios: " + response.message);
      }
    } catch (error) {
      alert("Error inesperado: " + error.message);
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center space-y-5 py-8">
      <button
        onClick={() => handleClick("BIOPSIA_LIQUIDA")}
        className="bg-white rounded-lg p-3 w-56 shadow-xl text-[#753350] border-b-2 border-[#753350]"
      >
        Biopsia Líquida
      </button>
      <button
        onClick={() => handleClick("BIOPSIA_SOLIDA")}
        className="bg-white rounded-lg p-3 w-56 shadow-xl text-[#753350] border-b-2 border-[#753350]"
      >
        Biopsia Sólida
      </button>
    </div>
  );
}

export default BotonesTipoBiopsia;
