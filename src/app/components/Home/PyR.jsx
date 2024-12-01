import React from "react";
import Preguntas from "./Preguntas";

const PyR = () => {
  return (
    <div className="relative w-full min-h-screen p-5">
      {/* Imagen de fondo */}
      <img
        src="/Home/Microambiente_Tumoral.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      <div className="relative z-10">
        <Preguntas
          pregunta={" 1.-¿En qué consisten estas pruebas?"}
          respuesta={
            "Por medio de biopsias (sólidas o líquidas) se puede obtener ADN, ARN,proteínas u otras moléculas que expresa el tumor, y que le permitirána su médico tratante establecer con mayor precisión cuál es la mejor terapia para su tipo de cáncer en particular."
          }
        />
        <Preguntas
          pregunta={" 1.-¿En qué consisten estas pruebas?"}
          respuesta={
            "Por io de biopsias (sólidas o líquidas) se puede obtener ADN, ARN,proteínas u otras moléculas que expresa el tumor, y que le permitirána su médico tratante establecer con mayor precisión cuál es la mejor terapia para su tipo de cáncer en particular."
          }
        />
      </div>
    </div>
  );
};

export default PyR;
