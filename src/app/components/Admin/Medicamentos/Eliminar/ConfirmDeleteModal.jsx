import React from "react";

function ConfirmDeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          ¿Estás seguro de que deseas eliminar este medicamento?
        </h2>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-white border border-[#753350] hover:bg-gray-100 text-[#753350]  py-1 px-5 rounded-xl shadow-lg"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#753350] hover:bg-[#b44e7a] text-white  py-1 px-5 rounded-xl shadow-lg "
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
