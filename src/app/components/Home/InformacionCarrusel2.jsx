import React from 'react'



// Este componente es para la información del carrusel, la imagen y el texto. 

const InformacionCarrusel2 = () => {
  return (
    <div className="relative p-5 h-screen">
      <img
        src="/Home/Redireccion_Carrusel_2.jpg"
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
        <h1 className="text-xl font-medium">
          Entendemos la profundidad y los desafíos del <br /> cáncer
          , y trabajamos cada día para ofrecer<br />  esperanza a quienes más lo necesitan.
        
        </h1>
        <p className="mt-12 text-2xl font-bold">
          Comprendiendo la 
          <br /> complejidad del cáncer
        </p>
      </div>
    </div>
  )
}

export default InformacionCarrusel2
