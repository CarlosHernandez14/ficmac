import React from 'react'
import CajaImagenMedicamento from "./CajaImagenMedicamento";
// Recibe un objeto tipo para mostrar la informacion de un medicamento
function CajaTexto({ tipo}) {
  return (
    <div className="flex bg-white shadow-2xl rounded-xl">
      <div className="flex-1">
        <div className=" space-y-5 p-10">
          <p className="text-[#CB1662] font-bold text-4xl">{tipo.nombre}</p>

          <p className="font-bold text-[#CB1662] text-2xl ">
            Descripción:
            <span className="ml-2 font-bold text-black text-xl">
              {tipo.descripcion}
            </span>
          </p>

          <p className="font-bold text-[#CB1662] text-2xl ">
            Efectos secundarios:
            <span className=" ml-2 font-bold text-black text-xl">
              {tipo.efectos_secundarios}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        {tipo.url_imagen ? (
          <CajaImagenMedicamento tipo={tipo.url_imagen} />
        ) : null}
      </div>
    </div>
  );
}

export default CajaTexto
