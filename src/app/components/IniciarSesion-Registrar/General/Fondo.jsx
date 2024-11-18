import React from "react";
import { motion } from "framer-motion";
import CajaIzquierda from "../InicioSesion/CajaIzquierda";
import CajaDerecha from "../Registrar/CajaDerecha";
import NavbarLogin from "../../Navbar/NavbarLogin";

function Fondo({ setShowLogin, color, imagen, isLogin, gradient }) {
  return (
    <div className="relative min-h-screen z-0 py-4">
      <div className=" relative z-50 mb-4">
        {isLogin ? (
          <NavbarLogin color={"#753350"} />
        ) : (
          <NavbarLogin color={"#69AFEC"} />
        )}
      </div>

      <div className="absolute inset-0 z-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full object-cover z-0"
          style={{
            background: `linear-gradient(${gradient}, ${color}, transparent), url(${imagen})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative min-h-screen px-16 ">
        {/* Contenido */}
        {isLogin ? (
          <div className="flex justify-start">
            <CajaIzquierda setShowLogin={setShowLogin} />
          </div>
        ) : (
          <div className="flex justify-end">
            <CajaDerecha setShowLogin={setShowLogin} />
          </div>
        )}
      </div>
    </div>
  );
}

// className={`mx-2 text-[${color}]`}

export default Fondo;
