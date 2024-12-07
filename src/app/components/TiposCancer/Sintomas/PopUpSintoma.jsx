import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
function PopUpSintoma({nombre, descripcion, handleTogglePopup}) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-bold">{nombre}</h2>
          <FaTimes
            className="text-gray-500 text-xl cursor-pointer hover:text-red-500"
            size={24}
            onClick={handleTogglePopup}
          />
        </div>
        <p className="text-sm text-justify">{descripcion}</p>
      </motion.div>
    </motion.div>
  );
}

export default PopUpSintoma;
