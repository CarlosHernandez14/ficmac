"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

/**
 * Componente `Preguntas`:
 * 
 * Este componente muestra una lista de preguntas frecuentes (FAQ) con la funcionalidad
 * de expandir o contraer las respuestas al hacer clic en cada pregunta. Las preguntas y respuetas
 * se obtienen de la base de datos.
 */


const Preguntas = () => {
  const [preguntas, setPreguntas] = useState([]); // Estado para las preguntas
  const [mostrarRespuestas, setMostrarRespuestas] = useState({}); // Controla qué respuestas están visibles

  // Función para obtener las preguntas desde el servidor
  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await fetch("/api/getPreguntas"); // API que obtendrá las preguntas
        const data = await response.json();
        if (data.success) {
          setPreguntas(data.preguntas); // Guardar preguntas en el estado
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error al obtener las preguntas:", error);
      }
    };

    fetchPreguntas(); // Llamar la función al montar el componente
  }, []);

  // Alternar visibilidad de la respuesta
  const toggleRespuesta = (id) => {
    setMostrarRespuestas((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent flex justify-center">
      <div className="w-full max-w-4xl p-5 bg-transparent">
        {preguntas.map(({ id, pregunta, respuesta }) => (
          <div
            key={id}
            className={`w-full h-auto rounded-[20px] cursor-pointer p-5 mt-10 ${
              mostrarRespuestas[id] ? "bg-[#753350]" : "bg-[#A0737D]"
            }`}
            onClick={() => toggleRespuesta(id)}
          >
            <div className="flex justify-between items-center w-full">
              <h1 className="text-white text-2xl ml-5">
                {id + ".-" + pregunta}
              </h1>
              <FaChevronDown
                className={`text-white text-2xl transition-transform ${
                  mostrarRespuestas[id] ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <hr className="border-t-2 border-white mt-4" />
            {mostrarRespuestas[id] && (
              <p className="text-white text-xl mt-4 ml-5">{respuesta}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preguntas;
