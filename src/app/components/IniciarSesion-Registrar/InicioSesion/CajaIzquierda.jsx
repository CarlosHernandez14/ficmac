import React from "react";
import CajaInicioSesion from "./CajaInicioSesion";

const CajaIzquierda = ({ setShowLogin }) => {
  return (
    <div className="absolute bg-white rounded-3xl shadow-2xl px-10 py-5">
      <CajaInicioSesion setShowLogin={setShowLogin} />
    </div>
  );
};

export default CajaIzquierda;
