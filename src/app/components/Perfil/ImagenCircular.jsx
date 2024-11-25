import React from 'react'

function ImagenCircular({ imageSrc }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={imageSrc}
        alt="Imagen Circular"
        className="w-56 h-56 rounded-full object-cover"
      />
    </div>
  );
}

export default ImagenCircular