import React, { useState } from "react";
import EditarImagen from "./EditarImagen";

function EditarText({ tipo, onSave }) {
  const [nombre, setNombre] = useState(tipo.nombre);
  const [descripcion, setDescripcion] = useState(tipo.descripcion);
  const [efectosSecundarios, setEfectosSecundarios] = useState(
    tipo.efectos_secundarios
  );
  const [urlImagen, setUrlImagen] = useState(tipo.url_imagen);

  const handleSave = () => {
    const updatedTipo = {
      nombre,
      descripcion,
      efectos_secundarios: efectosSecundarios,
      url_imagen: urlImagen,
    };
    onSave(updatedTipo);
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
              className="bg-white border border-[#753350] hover:bg-[#b44e7a] text-[#753350]  py-1 px-16 rounded-xl focus:outline-none focus:shadow-outline"
            >
              Cancelar
            </button>
          </div>
          <div className="">
            <button
              onClick={handleSave}
              className="bg-[#753350] hover:bg-[#b44e7a] text-white  py-1 px-16 rounded-xl focus:outline-none focus:shadow-outline"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <EditarImagen tipo={tipo.url_imagen} />
      </div>
    </div>
  );
}

export default EditarText;
