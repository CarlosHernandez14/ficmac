import React from "react";
import DivisionComponentes from "../Registrar/DivisionComponetes";
import IniciarSesionGoogle from "../Registrar/IniciarSesionGoogle";
import TerminosPoliticaPrivacidad from "./TerminosPoliticaPrivacidad";

function CajaRegistrar() {
  return (
    <div className="w-96">
      <p className="text-2xl font-extrabold py-0 text-center  text-[#367B99] underline mb-6">
        Registrate
      </p>
      <form>
        <div className="mb-5">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Nombre completo"
          />
        </div>
        <div className="mb-5">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="text"
            placeholder="Número de teléfono"
          />
        </div>
        <div className="mb-5">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#367B99] hover:bg-[#3f8eb1] text-white text-xs font-bold py-2 px-16 rounded-3xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Crear cuenta
          </button>
        </div>
      </form>
      <DivisionComponentes />
      <IniciarSesionGoogle />
     
        <TerminosPoliticaPrivacidad />
     
    </div>
  );
}

export default CajaRegistrar;
