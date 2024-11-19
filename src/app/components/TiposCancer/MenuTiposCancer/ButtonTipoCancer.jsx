import React from "react";
import { getCancer } from "@/actions/tipos_cancer/tiposCancer";
import { motion } from 'framer-motion';

function ButtonTipoCancer({ id, tipo, setCanceres, isClicked, onClick }) {
  const handleClick = async () => {
    try {
      const response = await getCancer(id);
      setCanceres(response.cancer);
      console.log("Cáncer obtenido", response.cancer);
      onClick(id);
    } catch (error) {
      console.error("Error al obtener el cáncer:", error);
    }
  };
  return (
    <motion.div
    onClick={handleClick}
      className={`${
        isClicked
          ? "bg-white text-black rounded-full"
          : "hover:bg-white hover:text-black hover:rounded-full text-white"
      }`}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <button
        className="px-4 py-1 rounded-md text-center"
      >
        {tipo}
      </button>
    </motion.div>
  );
}

export default ButtonTipoCancer;
