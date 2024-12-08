"use client";

import { useState } from "react";
import CajaInformacion from "./Mostrar/CajaInformacion";
import { IoIosAddCircleOutline } from "react-icons/io";
import AgregarTexto from "./Agregar/AgregarTexto";


function ListaTiposCancer({ tipos, onSelectTipo }) {
  // Estado para almacenar el tipo seleccionado
  const [selectedValue, setSelectedValue] = useState("");
  // Estado para controlar la vista actual
  const [mostrarAgregarTexto, setMostrarAgregarTexto] = useState(false);

  // Funcion para manejar el cambio en el select
  const handleChange = (e) => {
    const selectedTipo = tipos.find((tipo) => tipo.id === e.target.value);
    setSelectedValue(e.target.value);
    onSelectTipo(selectedTipo);
  };

  // Funcion para agregar un nuevo medicamento al tipo de cancer
  const handleAdd = () => {
    setMostrarAgregarTexto(true);
  };

  // Funcion para regresar a la lista de tipos de cancer
  const handleBack = () => {
    setMostrarAgregarTexto(false);
  };

  return (
    <div className="mx-auto space-y-4 h-screen overflow-auto">
      <div className="py-5 flex justify-end px-24 space-x-5">
        <div className="text-white hover:text-green-700 text-5xl">
          <button onClick={handleAdd}>
            <IoIosAddCircleOutline />
          </button>
        </div>
        <select
          id="tiposCancer"
          name="tiposCancer"
          value={selectedValue}
          className="mt-1 block w-auto pl-4 pr-10 py-3 text-base border-[#CB1662] border-1 shadow-2xl focus:outline-none sm:text-2xl rounded-xl"
          onChange={handleChange}
        >
          <option value="">Seleccionar tipo de cáncer</option>
          {tipos.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="relative px-36 py-5">
        {mostrarAgregarTexto ? (
          <div>
            <AgregarTexto />
          </div>
        ) : (
          <CajaInformacion tipo={selectedValue} />
        )}
      </div>
    </div>
  );
}

export default ListaTiposCancer;
