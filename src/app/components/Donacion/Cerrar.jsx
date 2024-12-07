import React from "react";
import { FaTimes } from "react-icons/fa";

function Cerrar({ handleTogglePopup }) {
  return (
    <div className="flex justify-between items-center p-8">
      <p className="text-2xl text-white font-semibold text-center">¡Gracias por tu donación!</p>
      <FaTimes
        className="text-white text-2xl cursor-pointer hover:text-red-500"
        size={24}
        onClick={handleTogglePopup}
      />
    </div>
  );
}

export default Cerrar;
