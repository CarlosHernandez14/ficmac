"use client";
import React, { useState } from "react";

const SeccionDerecha = ({ titulo, descripcion, instructivo }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);
  return (
    <div className="p-6 flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold text-justify ml-40">{titulo}</h4>
        <p className="text-black font-semibold text-xl text-justify ml-40 mt-10">
          {descripcion}
        </p>
      </div>
      <div className="mt-4 flex space-x-10 ml-24">
        <button
          onClick={openPopup}
          className="bg-[#753350] text-white font-bold rounded-full px-16 py-1 text-sm hover:bg-transparent hover:text-black hover:border-[#753350] hover:border"
        >
          Instructivo
        </button>
        <a href="https://api.whatsapp.com/send?phone=4431386613">
        <button className="bg-[#753350] text-white font-bold rounded-full px-16 py-1 text-sm hover:bg-transparent hover:text-black hover:border-[#753350] hover:border">
          Comunicarse
        </button>
        </a>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#753350]">
              Instrucciones
            </h2>
            <p className="text-gray-700">{instructivo}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeccionDerecha;
