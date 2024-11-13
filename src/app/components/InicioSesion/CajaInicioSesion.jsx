import React from "react";
import IniciarSesionGoogle from "./IniciarSesionGoogle";
import DivisionComponentes from "./DivisionComponentes";

function CajaInicioSesion() {
  return (
    <div className="w-96">
      <p className="text-2xl font-extrabold py-10 text-center  text-[#753350] underline">
        Iniciar sesión
      </p>
      <form>
        <div className="mb-6">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Correo o teléfono"
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#753350] hover:bg-[#a13c68] text-white text-xs font-bold py-2 px-16 rounded-3xl
            focus:outline-none focus:shadow-outline"
            type="button"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>

      <div className="flex justify-end py-8 ">
        <button className="text-[#753350] underline text-sm focus:outline-none font-extrabold">
          ¿Olvidaste tu contraseña?
        </button>
      </div>
      <DivisionComponentes />
      <IniciarSesionGoogle />
    </div>
  );
}

export default CajaInicioSesion;
