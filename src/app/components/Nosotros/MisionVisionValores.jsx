"use client";
import Image from "next/image";
import React, { useState } from "react";

export const MisionVisionValores = () => {
  const [buttonSelected, setButtonSelected] = useState("Mision");
  const [text, setText] = useState(
    "Implementamos técnicas innovadoras para el análisis molecular en muestras de pacientes con cáncer, facilitando información confiable al cuerpo médico que le permite identificar el pronóstico y el tratamiento de la enfermedad con mayor precisión."
  );
  const [image, setImage] = useState("/nosotros/mision_valores.png");

  const handleClick = (button) => {
    setButtonSelected(button);
    switch (button) {
      case "Mision":
        setText(
          "Implementamos técnicas innovadoras para el análisis molecular en muestras de pacientes con cáncer, facilitando información confiable al cuerpo médico que le permite identificar el pronóstico y el tratamiento de la enfermedad con mayor precisión."
        );
        setImage("/nosotros/mision_valores.png");
        break;
      case "Vision":
        setText(
          "Liderar el proceso de transformación en la personalización del tratamiento del cáncer en Morelia, a través de la generación de conocimiento obtenido a partir del mapeo genético de la enfermedad en el país. Proporcionar pruebas fácilmente aplicables en la práctica clínica diaria con el mismo nivel de calidad de los mejores centros de diagnóstico molecular del mundo, favoreciendo con altruismo el acceso universal a la información que permite modificar el curso natural de la enfermedad."
        );
        setImage("/nosotros/vision_valores.png");
        break;
      case "Valores":
        setText("");
        setImage("/nosotros/valores_valores.png");
        break;
    }
  };

  return (
    <div className="bg-[#A0737D] flex gap-10 mb-5 mt-5 justify-between">
      <div>
        <div className="shadow-lg shadow-[#00000065] inline-flex w-auto">
          <button
            onClick={() => handleClick("Mision")}
            className={`${
              buttonSelected == "Mision" ? "bg-[#753350]" : "bg-[#75335071]"
            } text-white font-bold text-xl pt-3 pb-3 pr-24 pl-24 hover:underline`}
          >
            Misión
          </button>
          <button
            onClick={() => handleClick("Vision")}
            className={`${
              buttonSelected == "Vision" ? "bg-[#753350]" : "bg-[#75335071]"
            } text-white font-bold text-xl pt-3 pb-3 pr-24 pl-24 hover:underline`}
          >
            Visión
          </button>
          <button
            onClick={() => handleClick("Valores")}
            className={`${
              buttonSelected == "Valores" ? "bg-[#753350]" : "bg-[#75335071]"
            } text-white font-bold text-xl pt-3 pb-3 pr-24 pl-24 hover:underline`}
          >
            Valores
          </button>
        </div>
        {buttonSelected != "Valores" && (
          <div className="flex justify-center items-center h-[70%]">
            <p className="text-white pt-10 text-xl pl-10">{text}</p>
          </div>
        )}
        {buttonSelected == "Valores" && (
          <div className="flex flex-wrap pl-10 gap-6 justify-center items-center pb-10 pt-10">
            {[
              {
                src: "/nosotros/confiabilidad_icon.png",
                label: "Confiabilidad",
              },
              {
                src: "/nosotros/liderazgo_icon.png",
                label: "Liderazgo y experiencia",
              },
              {
                src: "/nosotros/transparencia_icon.png",
                label: "Transparencia",
              },
              { src: "/nosotros/oportunidad_icon.png", label: "Oportunidad" },
              { src: "/nosotros/calidez_icon.png", label: "Calidad y empatía" },
              {
                src: "/nosotros/productividad_icon.png",
                label: "Productividad y mejora continua",
              },
              { src: "/nosotros/pasion_icon.png", label: "Pasión" },
              { src: "", label: "Innovación" }, // Ejemplo para innovación sin imagen
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 w-56 p-4 rounded-xl"
              >
                <div className="w-20 h-20 flex justify-center items-center bg-[#753350] rounded-lg">
                  {item.src ? (
                    <Image
                      src={item.src}
                      height={60}
                      width={60}
                      alt={item.label}
                    />
                  ) : null}
                </div>
                <div className="w-24">
                  <p className="text-white text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Image src={image} width={400} height={400} alt="mision_vision_valores" />
    </div>
  );
};
