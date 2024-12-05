import React from "react";
import InformacionCarrusel from "./InformacionCarrusel";
import CuadroTexto from "./CuadroTexto";
import UnamosFuerzas from "./UnamosFuerzas";
import Contactanos from "./Contactanos";

/**
 * Componente principal `MasInfo`:
 * 
 * Este componente sirve como contenedor para mostrar secciones adicionales de información en la página.
 * Incluye los siguientes componentes:
 *  - InformacionCarrusel: Muestra un carrusel con información relevante.
 *  - UnamosFuerzas: Sección destacada para promover la colaboración.
 *  - Contactanos : Formulario o sección para facilitar el contacto.
 * 
 */
const MasInfo = () => {
  return (
    <div>
      <InformacionCarrusel />
      <UnamosFuerzas/>
      <Contactanos/>
    </div>
  );
};

export default MasInfo;
