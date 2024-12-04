import React from "react";
import ButtonRosa from "../General/ButtonRosa";
import Link from "next/link";

const TextoDerecho = ({ titulo, descripcion, boton = "" }) => {
  return (
    <div className="w-1/2 mt-6 leading-10 mx-16 ">
      <h1 className="font-bold text-[#367B99] text-[40px]">{titulo}</h1>
      <p className="text-xl font-medium text-justify mt-20">{descripcion}</p>
      <div className="mt-16 flex justify-center">
        <Link href={"/Usuarios/Medicamentos"}>
        <button className="px-24 py-1 bg-[#CB1662] text-white rounded-[20px] font-bold hover:bg-[#de7ba590] shadow-md">
          Conocer más
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TextoDerecho;
