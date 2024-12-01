import React from "react";
import CajaImagenMedicamento from "./CajaImagenMedicamento";
import CajaTexto from "./CajaTexto";


function CajaInformacion({tipo}) {
  return (
    <div className="shadow-2xl flex justify-between  bg-white w-auto  mx-auto h-auto rounded-xl min-w-[50vw]">
      <CajaTexto tipo={tipo} />
      <CajaImagenMedicamento tipo={tipo} />
    
    </div>
  );
}

export default CajaInformacion;
