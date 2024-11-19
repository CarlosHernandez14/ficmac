import React from "react";
import InfoCancer from "./InfoCancer";
import { motion } from "framer-motion";

function InfoTipoCancer({ img, descripcion }) {
  return (
    <motion.div
      key={img+descripcion} // Esto asegura que la animación se aplique cada vez que la imagen o la descripción cambien
      className="flex justify-between items-center space-x-8 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        className="w-full 
        sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-96
        sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-96 
        rounded-md"
        src={img}
        alt="Cáncer de mama"
      />
      <InfoCancer descripcion={descripcion} />
    </motion.div>
  );
}

export default InfoTipoCancer;
