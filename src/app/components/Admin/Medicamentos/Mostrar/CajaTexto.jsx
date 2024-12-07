"use client";
import React, { useState } from "react";
import CajaImagenMedicamento from "./CajaImagenMedicamento";
import { FaEdit } from "react-icons/fa";
import { HiMiniTrash } from "react-icons/hi2";
import EditarText from "../Editar/EditarText";
import { deleteMedicamento } from "@/actions/medicamentos/medicamento.actions";

function CajaTexto({ tipo }) {
  const [mostrarEditar, setMostrarEditar] = useState(false);
//   Funcion para manejar el click en el boton de editar
  const handleButtonClick = () => {
    setMostrarEditar(true);
  };
  //Funcion para borrar el medicamento
  const handleDelete = async () => {
    const response = await deleteMedicamento(tipo.id);
    if (response.OK) {
      console.log("Medicamento eliminado:", response.data);
    
    } else {
      console.error("Error al eliminar el medicamento:", response.error);
    }
  };
  
  // Si mostrarEditar es true, muestra el componente EditarText
  if (mostrarEditar) {
    return <EditarText tipo={tipo}/>; // Muestra el componente EditarText cuando mostrarEditar es true
  }
  return (
    <div className="flex bg-white shadow-2xl rounded-xl">
      {/* TEXTO */}
      <div className="flex-1">
        <div className=" flex justify-end text-4xl space-x-4 px-2 py-1">
          <button
            className="text-red-400 hover:text-rose-300 "
            onClick={handleDelete}
          >
            <HiMiniTrash />
          </button>
          <button
            className="text-gray-400 hover:text-gray-300"
            onClick={handleButtonClick}
          >
            <FaEdit />
          </button>
        </div>
        <div className="space-y-5 p-5">
          <p className="text-[#CB1662] font-bold text-4xl">{tipo.nombre}</p>

          <p className="font-bold text-[#CB1662] text-2xl">
            Descripción:
            <span className="ml-2 font-bold text-black text-xl break-words whitespace-pre-wrap">
              {tipo.descripcion}
            </span>
          </p>

          <p className="font-bold text-[#CB1662] text-2xl">
            Efectos secundarios:
            <span className="ml-2 font-bold text-black text-xl break-words whitespace-pre-wrap">
              {tipo.efectos_secundarios}
            </span>
          </p>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="flex justify-end ">
        <CajaImagenMedicamento tipo={tipo.url_imagen} />
      </div>
    </div>
  );
}

export default CajaTexto;
