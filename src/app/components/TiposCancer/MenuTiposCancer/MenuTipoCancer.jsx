import React from "react";
import ButtonTipoCancer from "./ButtonTipoCancer";

function MenuTipoCancer() {
  return (
    <div className="bg-[#753350] 
    sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-1/3
    sm:h-screen md:h-screen lg:h-screen xl:h-[500px] 2xl:h-[500px]  
    rounded-md">
      <p className="text-white font-bold p-4 text-center text-lg">Tipos de cáncer</p>
      <hr className="border-t border-white mx-4" />
      <div className="flex flex-col py-4 space-y-4 cursor-pointer">
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
