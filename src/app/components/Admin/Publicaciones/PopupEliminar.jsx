"use client"
import React from "react";
import { FaTimes } from "react-icons/fa";
import { deletePublicacionCientifica } from "@/actions/publicaciones/publicaciones.actions";
import NotificacionModal from "../Notificaciones/NotificacionModal";
import { useState } from "react";

function PopupEliminar({ id, onClose }) {
  const [showNotification, setShowNotification] = useState(false);

  const eliminarPublicacion = async () => {
    const response = await deletePublicacionCientifica(id);
    if (response.success) {
      console.log(response.success);
      setShowNotification(true); // Muestra la notificación de éxito
    } else {
      console.log(response.error);
      console.log(id);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#a0737d] p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">
            Eliminar Publicación
          </h2>
          <button className="text-white hover:text-red-700" onClick={onClose}>
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="text-white">
          <p>¿Estás seguro de que deseas eliminar esta publicación?</p>
          <div className="flex justify-end mt-4">
            <button
              className="bg-white text-[#a0737d] px-4 py-1 rounded-lg mr-2 hover:bg-blue-600 hover:text-white"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-white text-[#a0737d] px-4 py-1 rounded-lg hover:bg-red-600 hover:text-white"
              onClick={eliminarPublicacion}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      {showNotification && (
        <NotificacionModal
          message="Publicación eliminada con éxito"
          onClose={() => setShowNotification(false)}
          onClosePopUp={onClose}
        />
      )}
    </div>
  );
}

export default PopupEliminar;
