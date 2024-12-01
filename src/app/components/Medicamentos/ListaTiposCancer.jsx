"use client";

import { useEffect, useState } from "react";

// Componente ListaTiposCancer que recibe dos props: tipos y onSelectTipo
function ListaTiposCancer({ tipos, onSelectTipo }) {
  // Estado local para almacenar el valor seleccionado del <select>
  const [selectedValue, setSelectedValue] = useState("");

  // Función que se ejecuta cuando cambia el valor del <select>
  const handleChange = (e) => {
    // Encuentra el tipo de cáncer seleccionado en el array de tipos
    const selectedTipo = tipos.find((tipo) => tipo.id === e.target.value);
    // Actualiza el estado local con el valor seleccionado
    setSelectedValue(e.target.value);
    // Llama a la función onSelectTipo pasando el tipo de cáncer seleccionado
    onSelectTipo(selectedTipo);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Elemento <select> controlado */}
      <select
        id="tiposCancer"
        name="tiposCancer"
        value={selectedValue} // Valor del <select> controlado por el estado local
        className="mt-1 block w-auto pl-4 pr-10 py-3 text-base border-[#CB1662] border-1 shadow-2xl focus:outline-none sm:text-2xl rounded-xl"
        onChange={handleChange} // Maneja el cambio de valor del <select>
      >
        {/* Opción por defecto para seleccionar tipo de cáncer */}
        <option value="">Seleccionar tipo de cáncer</option>
        {/* Mapea el array de tipos para crear una opción por cada tipo */}
        {tipos.map((tipo) => (
          <option key={tipo.id} value={tipo.id}>
            {tipo.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListaTiposCancer;
