import React from "react";
import InformacionBasica from "./InformacionBasica";
import LineaDivisora from "../General/LineaDivisora";

function CajaInformacionBasica() {
  return (
    <div className="bg-[#A0737D] w-auto h-auto py-4 px-5 space-y-5 rounded-xl">
      <InformacionBasica />
      <LineaDivisora />
    </div>
  );
}

export default CajaInformacionBasica;
