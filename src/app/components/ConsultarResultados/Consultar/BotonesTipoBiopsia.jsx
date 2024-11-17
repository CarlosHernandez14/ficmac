

function BotonesTipoBiopsia({ onPacientesUpdate }) {
//  const handleClick = async (tipo) => {
//    try {
//      const response = await fetch(`/api/pacientes?tipo=${tipo}`);
//      const data = await response.json();
//      onPacientesUpdate(data);
//    } catch (error) {
//      console.error("Error fetching data:", error);
//    }
//  };


  return (
    <div className="flex flex-col items-center space-y-5 py-8">
      <button
        className="bg-white rounded-lg p-3 w-56 shadow-xl text-[#753350] border-b-2 border-[#753350]"
        onClick={() => handleClick("Biopsia Líquida")}
      >
        Biopsia Líquida
      </button>
      <button
        className="bg-white rounded-lg p-3 w-56 shadow-xl text-[#753350] border-b-2 border-[#753350]"
        onClick={() => handleClick("Biopsia Sólida")}
      >
        Biopsia Sólida
      </button>

     
    </div>
  );
}

export default BotonesTipoBiopsia;
