import React from 'react'
import CajaRegistrar from './CajaRegistrar';


function CajaDerecha({ setShowLogin }) {
  return (
    
      <div className="absolute bg-white h-auto w-auto rounded-3xl shadow-2xl p-16 right-28">
        <CajaRegistrar setShowLogin={setShowLogin} />
      </div>
   
  );
}

export default CajaDerecha