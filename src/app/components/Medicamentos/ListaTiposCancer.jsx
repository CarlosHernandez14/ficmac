"use client";

import { useState } from "react";
import CajaInformacion from "./CajaInformacion";

function ListaTiposCancer({ tipos, onSelectTipo }) {
  // Estado para almacenar el tipo seleccionado
  const [selectedValue, setSelectedValue] = useState("");
  // Funcion para manejar el cambio en el select
  const handleChange = (e) => {
    const selectedTipo = tipos.find((tipo) => tipo.id === e.target.value);
    setSelectedValue(e.target.value);
    onSelectTipo(selectedTipo);
  };

  return (
    <div className=" mx-auto space-y-4">
      <div className="py-5 flex justify-end px-36">
        <select
          id="tiposCancer"
          name="tiposCancer"
          value={selectedValue}
          className="mt-1 block w-auto pl-4 pr-10 py-3 text-base border-[#CB1662] border-1 shadow-2xl focus:outline-none sm:text-2xl rounded-xl"
          onChange={handleChange}
        >
          {/* Lista de tipos cáncer */}
          <option value="">Seleccionar tipo de cáncer</option>
          {tipos.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className=" relative px-36 py-5">
        <CajaInformacion tipo={selectedValue} />
      </div>
    </div>
  );
}

export default ListaTiposCancer;
