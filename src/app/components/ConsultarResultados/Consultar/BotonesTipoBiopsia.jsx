function BotonesTipoBiopsia({ setTipo }) {
  return (
    <div className="flex flex-col items-center space-y-5 py-8">
      <button
        onClick={() => setTipo("BIOPSIA_LIQUIDA")}
        className="bg-white rounded-lg p-3 w-56 shadow-xl text-[#753350] border-b-2 border-[#753350]"
      >
        Biopsia Líquida
      </button>
      <button 
        onClick={() => setTipo("BIOPSIA_SOLIDA")} 
        className="bg-white rounded-lg p-3 w-56 shadow-xl text-[#753350] border-b-2 border-[#753350]">
        Biopsia Sólida
      </button>
    </div>
  );
}

export default BotonesTipoBiopsia;
