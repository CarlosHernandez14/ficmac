
function TarjetaDesplegable({nombre, tipo,sexo}) {
  return (
    <div className="bg-[#A0737D] text-white p-1 w-[600px]  rounded-2xl shadow-lg flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden ">
        {/* Imagen de usuario */}
        <img src="MCE2.png" alt="MCE2" className="  w-full h-full object-cover" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Leonardo Aguilar {nombre}</p>
        </div>
        {/* Línea divisoria */}
        <div className="w-full h-px bg-white my-2"></div>
        <div className="flex justify-between">
          <p className="text-sm">Masculino {sexo}</p>
          <span className=" text-white px-3 py-1 rounded-full text-sm font-semibold">
            Biopsia Líquida
          </span>
        </div>
      </div>
    </div>
  );
}

export default TarjetaDesplegable
