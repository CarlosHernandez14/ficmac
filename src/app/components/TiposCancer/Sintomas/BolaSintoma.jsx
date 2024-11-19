"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import PopUpSintoma from './PopUpSintoma';

function BolaSintoma({nombre, descripcion}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <motion.div
        className="flex flex-col items-center bg-slate-200 rounded-full cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={handleTogglePopup}
      >
        <div className="h-20 w-20 rounded-full flex justify-center items-center">
          <p className='text-center text-[#367B99]'>{nombre}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <PopUpSintoma nombre={nombre} descripcion={descripcion} handleTogglePopup={handleTogglePopup}/>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BolaSintoma