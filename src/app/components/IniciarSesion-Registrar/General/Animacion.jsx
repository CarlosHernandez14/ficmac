'use client';
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Fondo from "./Fondo";


function Animacion() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <AnimatePresence wait>
        {showLogin ? (
          <Fondo
            key="login"
            setShowLogin={setShowLogin}
            color="#753350"
            imagen={"/inicio_sesion.jpg"}
            isLogin={true}
            gradient="to right"
          />
        ) : (
          <Fondo
            key="register"
            setShowLogin={setShowLogin}
            color="#367B99"
            imagen={"/registro.jpg"}
            isLogin={false}
            gradient="to left"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
export default Animacion;