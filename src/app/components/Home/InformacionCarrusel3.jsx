import React from 'react'


// Este componente es para la información del carrusel, la imagen y el texto. 
const InformacionCarrusel3 = ({imagen,titulo,titulo2}) => {
  return (
    <div className="relative p-5 h-screen">
    <img
      src={imagen}
      alt="Fondo"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right,rgba(54, 123, 153, 1), rgba(117, 51, 80, 0))",
      }}
    ></div>

    <div className="relative z-10  text-white text-left mt-60 m-16">
     
      <p className="mt-12 text-[40px] font-bold">
      {titulo}
        <br /> {titulo2}
      </p>
    </div>
  </div>
  )
}

export default InformacionCarrusel3
