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
      className="w-96 absolute inset-0"
      style={{
        background: `linear-gradient(${gradient}, ${color}, transparent)`,
      }}
    >
      <div className="relative h-screen w-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-cover bg-center">
          <img
            src={imagen}
            alt={isLogin ? "inicio_sesion" : "registro"}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${gradient}, ${color}, transparent)`,
          }}
        ></div>
        {/* Contenido */}
        <div className="absolute inset-0 p-14">
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
