import React from 'react'
import CajaRegistrar from './CajaRegistrar';


function CajaDerecha({ setShowLogin }) {
  return (
    <div className="absolute bg-white rounded-3xl 
    shadow-2xl px-10 py-5">
      <CajaRegistrar setShowLogin={setShowLogin} />
    </div>
  );
}

export default CajaDerecha