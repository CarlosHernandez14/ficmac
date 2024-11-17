import React from "react";
import ButtonRosa from "../../General/ButtonRosa";

function InformacionEstudio() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <p className="text-xl mr-40">Alejandro Gutierrez</p>
        <p className="text-xl ml-40">13 años </p>
      </div>
      <hr className="w-full my-1 border-t-1 border-black" />
      <div className="flex justify-between">
        <div>
            <p className="text-sm">Tipo de biopsia: Liquida</p>
            <p className="text-sm">EPS: Secretaria de salud de Michoacán</p>
            <p className="text-sm">IPS: Hospital Ángeles Morelia</p>
            <p className="text-sm">Tipo de documento: Pendiente</p>
            <p className="text-sm">Familiar de contacto: Padre</p>
            <p className="text-sm">Celular del Familiar: 4431261199</p>
        </div>
        <div>
            <p className="text-sm">Celular: 4431261199</p>
            <p className="text-sm">Ciudad: Morelia</p>
            <p className="text-sm">Dirección: Lomas Turbas</p>
            <p className="text-sm">Nacionalidad: Mexicana</p>
            <p className="text-sm">Correo: carvisa@morelia.tecnm.mx</p>
        </div>
      </div>
      <div className="mt-2">
        <ButtonRosa text="Ver resultados" />
      </div>
    </div>
  );
}

export default InformacionEstudio;
