import React from 'react'

function CajaTexto({ tipo}) {
  return (
    <div className=" space-y-5 p-10">
      <p className="text-[#CB1662] font-bold text-4xl">{tipo.nombre}Cisplatino</p>

      <p className="font-bold text-[#CB1662] text-2xl ">
        Uso:
        <span className="ml-2 font-bold text-black text-xl">
          {tipo.uso}Se usa en el tratamiento de cáncer de pulmón, ovario,testículo,
          vejiga, cabeza y cuello
        </span>
      </p>

      <p className="font-bold text-[#CB1662] text-2xl ">
        Mecanismo:
        <span className=" ml-2 font-bold text-black text-xl">
          {tipo.mecanismo}Se usa en el tratamiento de cáncer de pulmón,
          ovario,testículo, vejiga, cabeza y cuello
        </span>
      </p>
      <p className="font-bold text-[#CB1662] text-2xl ">
        Efectos secundarios:
        <span className=" ml-2 font-bold text-black text-xl">
          {tipo.efectos}Se usa en el tratamiento de cáncer de pulmón,
          ovario,testículo, vejiga, cabeza y cuello
        </span>
      </p>
    </div>
  );
}

export default CajaTexto
