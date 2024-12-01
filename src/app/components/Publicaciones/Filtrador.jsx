"use client";
import React from "react";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";
import { useEffect, useState } from "react";
function Filtrador({ setIdTipoCancer }) {
  const [tiposCancer, setTiposCancer] = useState([]);
  useEffect(() => {
    getTiposCancer().then((response) => {
      if (response.tiposCancer) {
        setTiposCancer(response.tiposCancer);
      }
    });
  }, []);

  const handleSelectChange = (event) => {
    setIdTipoCancer(event.target.value);
  };

  return (
    <div
      className="bg-white rounded-lg flex justify-between 
        shadow-md shadow-black border border-gray-300 space-x-2 pr-4"
    >
      <select
        onChange={handleSelectChange}
        className="rounded-lg focus:outline-none px-4 py-1 cursor-pointer"
      >
        <option value={0}>Todos</option>
        {tiposCancer.map((tipo) => (
          <option key={tipo.id} value={tipo.id}>
            {tipo.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filtrador;
