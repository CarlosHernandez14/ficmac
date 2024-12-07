import React from "react";


/**
 * Componente `ButtonNext`:
 * 
 * Un botón sencillo que muestra un texto y permite realizar una acción mediante `onClick`.
 * 
 * Props:
 * - `text`: Texto a mostrar en el botón.
 * - `onClick`: Función que se ejecuta al hacer clic en el botón.
 */
function ButtonNext({text,onClick}) {
  return (
    <button className="bg-[#367B99] text-white w-full p-2 rounded-lg hover:bg-[#5c57e8]" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonNext;