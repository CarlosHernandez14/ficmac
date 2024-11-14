import React from 'react'
import CajaRegistrar from './CajaRegistrar';


function CajaDerecha({ setShowLogin }) {
  return (
    <div className="absolute bg-white h-auto w-auto rounded-3xl max-w-md
    shadow-2xl p-10 right-28 overflow-hidden ">
      <CajaRegistrar setShowLogin={setShowLogin} />
    </div>
  );
}

export default CajaDerecha