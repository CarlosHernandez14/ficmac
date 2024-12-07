import React from 'react'
import CajaImagenMedicamento from "./CajaImagenMedicamento";

function CajaTexto({ tipo}) {
  return (
    <div className='flex justify-between'>
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
      <CajaImagenMedicamento tipo={tipo.url_imagen} />
    </div>
  );
}

export default CajaTexto
