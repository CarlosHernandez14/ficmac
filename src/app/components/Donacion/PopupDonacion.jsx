"use client";
import React, { useState, useEffect } from "react";
import Datos from "./Datos";
import Cerrar from "./Cerrar";
import Inputs from "./Inputs";
import PaypalBtn from "../paypal/paypal-btn";

function PopupDonacion({ togglePopup, setIsOpen }) {
  const [valor, setValor] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePaypalClick = () => {
    if (valor > 0 && descripcion.trim() !== "") {
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };

  const handleApprove = () => {
    setShowThankYou(true);
  };

  useEffect(() => {
    if (valor > 0 && descripcion.trim() !== "") {
      setShowMessage(false);
    }
  }, [valor, descripcion]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
      <div
        className="absolute w-[800px] h-[500px] bg-cover bg-center rounded-xl filter blur-sm"
        style={{ backgroundImage: "url('/donaciones/donacionFondo.webp')" }}
      ></div>
      <div className="relative w-[800px] h-[500px] rounded-xl z-40">
        <Cerrar handleTogglePopup={togglePopup} />
        <Datos />
        <Inputs setValor={setValor} setDescripcion={setDescripcion} />
        {showMessage && (
          <p className="text-red-500 text-sm text-center">
            Por favor, llene ambos campos antes de continuar.
          </p>
        )}
        {!showThankYou && (
          <div
            onClick={handlePaypalClick}
            className="flex justify-center items-center"
          >
            {valor > 0 && descripcion.trim() !== "" ? (
              <PaypalBtn
                valor={valor}
                descripcion={descripcion}
                onApprove={handleApprove}
              />
            ) : (
              <button className="bg-gray-500 text-white py-1 px-4 rounded-lg mt-1 cursor-not-allowed">
                PayPal
              </button>
            )}
          </div>
        )}
      </div>
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-2xl transform transition-transform duration-300 ease-in-out scale-105">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              ¡Gracias por tu donación!
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Tu apoyo hace la diferencia y nos ayuda a seguir salvando vidas.
            </p>
            <p className="text-sm text-gray-500 italic">
              Estamos muy agradecidos contigo.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setShowThankYou(false);
                  setIsOpen(false);
                }}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold shadow hover:shadow-lg hover:opacity-90 focus:outline-none"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupDonacion;
