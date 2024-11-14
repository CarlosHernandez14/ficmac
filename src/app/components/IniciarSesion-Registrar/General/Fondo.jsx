import React from "react";

import { motion } from "framer-motion";
import CajaIzquierda from "../InicioSesion/CajaIzquierda";
import CajaDerecha from "../Registrar/CajaDerecha";

function Fondo({ setShowLogin, color, imagen, isLogin, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        background: `linear-gradient(${gradient}, ${color}, transparent), url(${imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative min-h-screen w-full h-full flex items-center justify-center overflow-auto">
        {/* Contenido */}
        <div className="absolute inset-0 p-14 w-full ">
          {isLogin ? (
            <CajaIzquierda setShowLogin={setShowLogin} />
          ) : (
            <CajaDerecha setShowLogin={setShowLogin} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

// className={`mx-2 text-[${color}]`}

export default Fondo;
