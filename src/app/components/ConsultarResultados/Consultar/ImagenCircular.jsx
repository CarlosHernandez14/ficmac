import React from 'react'

function ImagenCircular() {
  return (
    <div className=' py-1 px-2 h-6 relative '>
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden ">
        {/* Imagen de usuario */}
        <img src="/Medicos/MCE2.png" alt="MCE2" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default ImagenCircular
