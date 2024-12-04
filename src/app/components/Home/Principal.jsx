import React from "react";
import Carrusel from "./Carrusel";
import NuestrosNumeros from "./NuestrosNumeros";
import CuadroTexto from "./CuadroTexto";

const Principal = () => {
  const slides = [
    {
      imagen: "/Home/Carrusel_vista_1.jpg",
      enlace: "/Usuarios/Home/1",
      texto:
        "En Ontec, creemos en un futuro donde cada tratamiento contra el cáncer sea una oportunidad para vivir plenamente.",
      texto2:
        "Innovamos para brindar esperanza y calidad de vida en cada paso. Acompáñanos en esta lucha!",
      colorDegradado: "#521C32", // Color negro semitransparente
      degradadoDireccion: "to right", // Degradado de izquierda a derecha
      textoAlineacion: "izquierda", // Alineación del texto (izquierda o derecha)
      botonTexto: "Saber más",
      botonPosicion: "izquierda", // Posición del botón (izquierda, derecha o centrado)
    },
    {
      imagen: "/Home/Carrusel_vista_2.jpg",
      texto: "Tratamientos con propósito",
      enlace: "/Usuarios/Home/2",
      texto2:
        "Desarrollamos innovación para dar esperanza a quienes luchan contra el cáncer.",
      colorDegradado: "#367B99", // Color degradado
      degradadoDireccion: "to right", // Degradado de derecha a izquierda
      textoAlineacion: "izquierda", // Alineación del texto
      botonTexto: "Saber más",
      botonPosicion: "izquierda", // Posición del botón
    },
    {
      imagen: "/Home/Carrusel_vista_3_Y_fondo.jpg",
      texto:
        "Ontec ofrece análisis avanzados que revolucionan la precisión en el diágnostico del cáncer, utilizando las tecnologías más innovadoras para brindar resultados confiables y personalizados.",
      enlace: "/Usuarios/Home/3",
      texto2:
        "Avanzamos contigo, transformando datos en soluciones para un tratamiento más preciso y efectivo.",
      colorDegradado: "#521C32", // Color degradado
      degradadoDireccion: "to right", // Degradado de derecha a izquierda
      textoAlineacion: "izquierda", // Alineación del texto
      botonTexto: "Saber más",
      botonPosicion: "izquierda", // Posición del botón
    },
  ];
  return (
    <div >
      <Carrusel slides={slides} />
      <NuestrosNumeros />
      <CuadroTexto />
    </div>
  );
};

export default Principal;
