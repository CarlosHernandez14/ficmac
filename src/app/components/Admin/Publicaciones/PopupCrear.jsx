"use client"
import React from "react";
import { FaTimes, FaSave } from "react-icons/fa";
import { createPublicacionCientifica } from "@/actions/publicaciones/publicaciones.actions";
import { useState, useEffect } from "react";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";
import NotificacionModal from "../Notificaciones/NotificacionModal";

function PopupCrear({ onClose }) {
  const [tipoCancer, setTipoCancer] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  //Funcion para obtener los tipos de cancer
  const obtenerTiposCancer = async () => {
    const response = await getTiposCancer();
    if (response.success) {
      setTipoCancer(response.tiposCancer);
    } else {
      console.log(response.error);
    }
  }

  // Cargar los tipos de cáncer cuando el componente se monte
  useEffect(() => {
    obtenerTiposCancer();
  }, []);

  //Funcion para crear una publicacion cientifica en la base de datos
  const crearPublicacion = async (e) => {
    e.preventDefault();
    
    const data = {
      idTipoCancer: e.target.tipoCancer.value,
      titulo: e.target.titulo.value,
      resumen: e.target.resumen.value,
      link: e.target.link.value,
    };

    console.log(data);

    const response = await createPublicacionCientifica(data);
    if (response.success) {
      console.log(response.success);
      setShowNotification(true); // Muestra la notificación de éxito
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#a0737d] p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-white font-semibold">Crear Publicación</h2>
          <button onClick={onClose} className="text-white hover:text-red-700">
            <FaTimes />
          </button>
        </div>
        <form onSubmit={crearPublicacion}>
          <div className="mb-4">
            <label className="block text-white">Título</label>
            <input
              name="titulo"
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Título de la publicación"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Resumen</label>
            <textarea
              name="resumen"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Contenido de la publicación"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Tipo de Cáncer</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              name="tipoCancer"
            >
              <option value="">Seleccione un tipo de cáncer</option>
              {tipoCancer.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white">Link</label>
            <input
              type="text"
              name="link"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Link"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#753350] text-white px-4 py-2 rounded-lg hover:bg-[#652c45] flex items-center space-x-2"
            >
              <span>Guardar</span>
              <FaSave />
            </button>
          </div>
        </form>
      </div>
      {showNotification && (
        <NotificacionModal
          message="Publicación creada con éxito"
          onClose={() => setShowNotification(false)}
          onClosePopUp={onClose}
        />
      )}
    </div>
  );
}

export default PopupCrear;
