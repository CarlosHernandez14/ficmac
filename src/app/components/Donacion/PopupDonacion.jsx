import React from "react";
import Datos from "./Datos";
import Cerrar from "./Cerrar";
import Inputs from "./Inputs";
import PaypalBtn from "../paypal/paypal-btn";

function PopupDonacion({ togglePopup }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div
        className="absolute w-[800px] h-[500px] bg-cover bg-center rounded-xl filter blur-sm"
        style={{ backgroundImage: "url('/donaciones/donacionFondo.webp')" }}
      ></div>
      <div className="relative w-[800px] h-[500px] rounded-xl">
        <Cerrar handleTogglePopup={togglePopup} />
        <Datos />
        <Inputs />
        <PaypalBtn/>
      </div>
    </div>
  );
}

export default PopupDonacion;
