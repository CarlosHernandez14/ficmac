'use client';
import React, { useState } from "react";
import EditarImagen from "./EditarImagen";
import { updateMedicamento } from "@/actions/medicamentos/medicamento.actions";
import { FaCheck } from "react-icons/fa";

function EditarText({ tipo, onSave }) {
  
  const [nombre, setNombre] = useState(tipo.nombre);
  const [descripcion, setDescripcion] = useState(tipo.descripcion);
  const [efectosSecundarios, setEfectosSecundarios] = useState(
    tipo.efectos_secundarios
  );
  const [urlImagen, setUrlImagen] = useState(tipo.url_imagen);
const [successMessage, setSuccessMessage] = useState("");

  const handleSave = async () => {
    const updatedTipo = {
      nombre,
      descripcion,
      efectos_secundarios: efectosSecundarios,
      url_imagen: urlImagen,
    };
  
    const response = await updateMedicamento(tipo.id, updatedTipo);
    if (response.OK) {
      setSuccessMessage("Medicamento actualizado correctamente");
     
    } else {
      console.error("Error al actualizar el medicamento:", response.error);
    }
  };


  return (
    <div className="shadow-2xl flex  bg-white w-auto h-auto rounded-xl  ">
      <div className="flex-1 p-5 space-y-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre medicamento
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="shadow-lg appearance-none border  border-[#A0737D] rounded-xl w-full py-2 px-3
           text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="descripcion"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="shadow-lg appearance-none border  border-[#A0737D] rounded-xl w-full py-2 px-3
           text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="efectos_secundarios"
          >
            Efectos Secundarios
          </label>
          <textarea
            id="efectos_secundarios"
            value={efectosSecundarios}
            onChange={(e) => setEfectosSecundarios(e.target.value)}
            className="shadow-lg appearance-none border  border-[#A0737D] rounded-xl w-full py-2 px-3
           text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <div className="">
            <button
              onClick={handleSave}
              className="bg-white border border-[#753350] hover:bg-gray-100 text-[#753350]  py-1 px-16 rounded-xl shadow-lg "
            >
              Cancelar
            </button>
          </div>
          <div className="">
            <button
              onClick={handleSave}
              className="bg-[#753350] hover:bg-[#b44e7a] text-white  py-1 px-16 rounded-xl shadow-lg "
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <EditarImagen tipo={tipo.url_imagen} />
      </div>
      {successMessage && (
        <div className="mt-4 text-[#753350] font-bold flex justify-center items-center">
          <FaCheck className="mr-2 text-xl" />
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
}

export default EditarText;
