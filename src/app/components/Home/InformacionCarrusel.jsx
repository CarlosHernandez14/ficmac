import React from "react";

const InformacionCarrusel = () => {
  return (
    <div className="relative p-5 h-screen">
      <img
        src="/Home/Redireccion_Carrusel_1.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(117, 51, 80, 1), rgba(117, 51, 80, 0))",
        }}
      ></div>

      <div className="relative z-10  text-white text-left mt-44">
        <h1 className="text-xl font-medium">
          Mejorar la calidad de vida de nuestros pacientes es <br /> posible
          gracias a los avances en la precisión del
          <br /> tratamiento contra el cáncer.
        </h1>
        <p className="mt-12 text-2xl font-bold">
          Sigamos sumando esperanza y años de
          <br /> vida en esta lucha... ¡Apóyanos!.
        </p>
      </div>
    </div>
  );
};

export default InformacionCarrusel;
