import { useState } from "react";

export default function ModalNewComment({ onClose, onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment) {
      alert("Por favor ingresa un comentario.");
      return;
    }
    onSubmit(comment);
    setComment("");
  };

  return (
    <div className="fixed inset-0 z-[1050] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="text-[#753350] font-semibold hover:text-gray-800 focus:outline-none">
            Cerrar
          </button>
          <h2 className="text-xl font-semibold text-[#753350]">Agregar Comentario</h2>
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          rows={4}
          placeholder="Escribe tu comentario..."
        />
        <button onClick={handleSubmit} className="w-full p-2 bg-[#753350] text-white rounded-lg hover:bg-[#5a2530]">
          Enviar
        </button>
      </div>
    </div>
  );
}
