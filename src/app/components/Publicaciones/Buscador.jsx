"use client"
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { getPublicacionCientificaByBusqueda } from "@/actions/publicaciones/publicaciones.actions";

function Buscador({ setPublicaciones }) {
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const wrapperRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setBusqueda(value);

    if (value.length > 2) {
      getPublicacionCientificaByBusqueda(value).then((response) => {
        if (response.publicaciones) {
          setSugerencias(response.publicaciones);
        }
      });
    } else {
      setSugerencias([]);
    }
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSugerencias([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);


  const handleSearchClick = () => {
    getPublicacionCientificaByBusqueda(busqueda).then((response) => {
      if (response.publicaciones) {
        setPublicaciones(response.publicaciones);
        setSugerencias([]);
      }
    });
  };

  return (
    <div  ref={wrapperRef} className="relative bg-white rounded-lg shadow-md shadow-black border border-gray-300 px-4 py-2">
      <div className="flex justify-between items-center space-x-2">
        <input
          type="text"
          placeholder="Buscar"
          value={busqueda}
          onChange={handleInputChange}
          className="rounded-lg p-2 focus:outline-none flex-grow"
        />
        <button
          onClick={handleSearchClick}
          className="text-black rounded-lg flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </div>
      {sugerencias.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-2 shadow-lg z-10">
          <ul>
            {sugerencias.map((sugerencia) => (
              <li
                key={sugerencia.id}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setBusqueda(sugerencia.titulo);
                  setSugerencias([]);
                  handleSearchClick();
                }}
              >
                {sugerencia.titulo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Buscador;