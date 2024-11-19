import React from 'react'
import InfoTipoCancer from './InfoTipoCancer'
import { motion } from 'framer-motion';

function TipoCancer({nombre}) {
  return (
    <div className='my-16'>
      <motion.p
      key={nombre}
        className='text-4xl font-bold text-center text-white text-outline'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {nombre}
      </motion.p>
    </div>
  )
}

export default TipoCancer