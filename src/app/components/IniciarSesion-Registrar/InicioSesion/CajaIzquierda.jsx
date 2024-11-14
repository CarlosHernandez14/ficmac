import React from 'react'
import CajaInicioSesion from './CajaInicioSesion'


const CajaIzquierda = ({ setShowLogin }) => {
  return (
   
      <div className="absolute bg-white h-auto w-auto rounded-3xl shadow-2xl py-5 px-10  overflow-hidden max-w-full">
        <CajaInicioSesion setShowLogin={setShowLogin} />
      </div>

  );
};

export default CajaIzquierda
