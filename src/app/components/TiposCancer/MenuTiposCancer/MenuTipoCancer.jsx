import React from "react";
import ButtonTipoCancer from "./ButtonTipoCancer";

function MenuTipoCancer() {
  return (
    <div className="bg-[#753350] h-auto w-auto rounded-md">
      <p className="text-white font-semibold p-4 text-center text-lg">Tipos de cáncer</p>
      <hr className="border-t border-white mx-4" />
      <div className="flex flex-col py-4 space-y-4">
        <ButtonTipoCancer tipo="Cáncer de próstata"/>
        <ButtonTipoCancer tipo="Cáncer de pulmón" />
        <ButtonTipoCancer tipo="Cáncer de mama" />
        <ButtonTipoCancer tipo="Cáncer de colon" />
        <ButtonTipoCancer tipo="Cáncer de pancreas" />
      </div>
    </div>
  );
}

export default MenuTipoCancer;
