import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function NotificacionModal({ message, onClose, onClosePopUp }) {
  const handleClose = () => {
    onClose();
    onClosePopUp();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex items-center space-x-2 mb-4">
          <FaCheckCircle className="text-green-500 w-6 h-6" />
          <h2 className="text-xl font-semibold">Éxito</h2>
        </div>
        <p>{message}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotificacionModal