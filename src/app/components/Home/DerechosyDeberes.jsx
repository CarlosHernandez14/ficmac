"use client"
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";





const DerechosyDeberes = ({derechos,deberes}) => {
    const [mostrarDeberes, setMostrarDeberes] = useState(false);

    // Función para alternar la visibilidad de los deberes
    const toggleDeberes = () => {
      setMostrarDeberes(!mostrarDeberes);
    };
  
    return (
      <div className="flex justify-center m-10">
        <div
          className={`w-[1194px] h-auto rounded-[20px] cursor-pointer p-5 ${
            mostrarDeberes ? "bg-[#753350]" : "bg-[#A0737D]"
          }`}
          onClick={toggleDeberes}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl ml-5">{derechos}</h1>
            <FaChevronDown
              className={`text-white text-2xl transition-transform ${
                mostrarDeberes ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <hr className="border-t-2 border-white mt-4" />
          {mostrarDeberes && (
            <ul className="list-disc ml-10 mt-4 text-white text-xl space-y-2">
              {deberes.map((deber, index) => (
                <li key={index}>{deber}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
  )
}

export default DerechosyDeberes