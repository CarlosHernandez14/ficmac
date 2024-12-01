import Image from 'next/image'
import React from 'react'

export const MisionVisionValores = () => {
  return (
    <div className='bg-[#A0737D] flex gap-10 mb-5 mt-5 justify-between'>
        <div>
            <div className='shadow-lg shadow-[#00000065] inline-flex w-auto'>
                <button className='bg-[#753350] text-white font-bold text-xl pt-3 pb-3 pr-24 pl-24 hover:underline'>Misión</button>
                <button className='bg-[#753350] text-white font-bold text-xl pt-3 pb-3 pr-24 pl-24 hover:underline'>Visión</button>
                <button className='bg-[#753350] text-white font-bold text-xl pt-3 pb-3 pr-24 pl-24 hover:underline'>Valores</button>
            </div>
            <p className='text-white pt-10 text-xl pl-10'>
                {"Implementamos técnicas innovadoras para el análisis molecular en muestras de pacientes con cáncer, facilitando información confiable al cuerpo médico que le permite identificar el pronóstico y el tratamiento de la enfermedad con mayor precisión."}
            </p>
        </div>
        <Image src='/nosotros/mision_valores.png' width={400} height={400} alt='mision_vision_valores' />
    </div>
  )
}
