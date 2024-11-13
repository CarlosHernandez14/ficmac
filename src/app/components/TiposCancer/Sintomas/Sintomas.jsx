import React from "react";
import BolaSintoma from "./BolaSintoma";
import { FaHeartbeat, FaLungs, FaBrain, FaBone, FaEye, FaSkin, FaStomach, FaTooth, FaLiver, FaKidney } from 'react-icons/fa';
function Sintomas() {
  return (
    <div>
      <p className="text-4xl font-bold text-center">Sintomas</p>
      <div className="grid grid-cols-8 gap-2 justify-center py-4">
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
        <BolaSintoma />
      </div>
    </div>
  );
}

export default Sintomas;
