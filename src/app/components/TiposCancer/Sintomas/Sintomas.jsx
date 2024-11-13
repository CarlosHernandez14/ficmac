import React from "react";
import BolaSintoma from "./BolaSintoma";
import { FaHeartbeat, FaLungs, FaBrain, FaBone, FaEye, FaSkin, FaStomach, FaTooth, FaLiver, FaKidney } from 'react-icons/fa';
function Sintomas() {
  return (
    <div>
      <p className="text-4xl font-bold text-center">Síntomas</p>
      <div className="grid grid-cols-4 gap-2 justify-center py-4">
        <BolaSintoma ruta={"/TiposCancer/CM1.png"} nombre={"Secreción del pezón"}/>
        <BolaSintoma ruta={"/TiposCancer/CM2.png"} nombre={"Dolor general"}/>
        <BolaSintoma ruta={"/TiposCancer/CM3.png"} nombre={"Cambios en la piel"}/>
        <BolaSintoma ruta={"/TiposCancer/CM4.png"} nombre={"Cambios de forma"}/>
      </div>
    </div>
  );
}

export default Sintomas;
