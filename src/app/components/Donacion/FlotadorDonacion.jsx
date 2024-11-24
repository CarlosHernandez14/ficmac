"use client"
import React, { useState } from 'react';
import { FaDonate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PopupDonacion from './PopupDonacion';

function FlotadorDonacion() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div
        className='fixed bottom-4 right-4 bg-pink-500 rounded-full h-20 w-20 flex items-center justify-center shadow-lg cursor-pointer z-50'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePopup}
      >
        <FaDonate className='text-white' size={32} />
      </motion.div>

      {isOpen && (
        <PopupDonacion togglePopup={togglePopup} setIsOpen={setIsOpen}/>
      )}
    </div>
  );
}

export default FlotadorDonacion;