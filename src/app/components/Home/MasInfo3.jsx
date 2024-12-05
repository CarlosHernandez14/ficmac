import React from "react";
import InformacionCarrusel3 from "./InformacionCarrusel3";
import Preguntas from "./Preguntas";
import PyR from "./PyR";
import DyD from "./DyD";
import DyDMedicos from "./DyDMedicos";

/**
 * Componente principal `MasInfo3`:
 * 
 * Este componente es un contenedor que organiza y presenta secciones adicionales de información 
 * en la página. Agrupa los siguientes subcomponentes:
 * 
 * - `InformacionCarrusel3`: Componente que muestra un carrusel con información relevante.
 * - `PyR`: Sección que incluye las preguntas y respuestas
 * - "DyD" : Sección que incluye los derechos y deberes de los pacientes
 * - "DyDMedicos" : Sección que incluye los derechos y deberes de los médicos.
 * 
 *
 */

const MasInfo3 = () => {
  return (
    <div>
      <InformacionCarrusel3
        imagen={"/Home/Redireccion_Carrusel_vista_3.jpg"}
        titulo={"Preguntas frecuentes"}
        titulo2={"de los pacientes"}
      />
      <PyR />
      <InformacionCarrusel3
        imagen={"/Home/Redireccion_Carrusel_vista_3_1.jpg"}
        titulo={"Derechos y deberes de"}
        titulo2={"pacientes"}
      />
      <DyD />

      <InformacionCarrusel3
        imagen={"/Home/Redireccion_Carrusel_vista_3_2.jpg"}
        titulo={"Derechos y deberes de"}
        titulo2={"médicos"}
      />
      <DyDMedicos />
    </div>
  );
};

export default MasInfo3;
