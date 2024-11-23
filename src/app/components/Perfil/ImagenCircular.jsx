import React from 'react'

function ImagenCircular() {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/Perfil/image.png"
        alt="Imagen Circular"
        className="w-56 h-56 rounded-full object-cover"
      />
    </div>
  );
}

export default ImagenCircular