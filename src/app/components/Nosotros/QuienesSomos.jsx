"use client"
import { useInView } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'
import {motion} from 'framer-motion'


export const QuienesSomos = () => {

  const sectionRef = useRef(null); // Referencia para la detección
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className='bg-[#367B99] flex gap-10 mb-5 mt-5'
      ref={sectionRef}
    >
      
      <motion.img 
        src='/nosotros/quienes_somos.png' 
        width={350} 
        height={350} 
        alt='quienes_somos' 
        initial={{ x: -100, opacity: 0 }} 
        animate={isInView ?{ x: 0, opacity: 1 }:{}} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      />
      
        
        <motion.div className='w-full flex flex-col justify-center'
          initial={{ x: 100, opacity: 0 }} 
          animate={isInView ?{ x: 0, opacity: 1 }:{}} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
        >
            <h1 className='font-bold text-white text-3xl pt-5'>¿Quiénes somos?</h1>
            <p className='pt-5 pr-10 text-justify text-white text-2xl'>Somos un Centro de Investigación y Diagnóstico en Biología molecular, pionero en medicina de precisión especializado en cáncer. Nos encontramos en una búsqueda continua de avances en la investigación sobre el cáncer, para que estos puedan ser trasladados con eficacia, agilidad y profesionalismo a la práctica clínica.
            Hemos sido pioneros en la introducción de metodologías innovadoras y estrategias avanzadas de diagnóstico, logrando la estandarización de biomarcadores, años antes de su uso clínico regular.
            Gracias a nuestra plataforma de precisión hemos impactado de forma positiva la vida de cerca de 12.000 colombianos, ampliando su calidad de vida en más de 60.000 años.</p>
        </motion.div>
    </div>
  )
}
