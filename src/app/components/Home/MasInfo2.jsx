import React from "react";
import InformacionCarrusel2 from "./InformacionCarrusel2";

import Fases from "./Fases";
/**
 * Componente principal MasInfo2:
 * 
 * Este componente es un contenedor que organiza y presenta secciones adicionales de información 
 * en la página. Agrupa los siguientes subcomponentes:
 * 
 * - `InformacionCarrusel2`: Componente que muestra un carrusel con información relevante.
 * - `Fases`: Sección que incluye las fases del cáncer u otros datos relevantes representados
 *   con tarjetas o información detallada.
 * 
 
 */

const MasInfo2 = () => {
  return (
    <div>
      <InformacionCarrusel2 />
      <Fases />
    </div>
  );
};

export default MasInfo2;
