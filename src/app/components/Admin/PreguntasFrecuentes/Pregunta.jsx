import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'


export const Pregunta = ({id, pregunta, respuesta}) => {
  return (
    <div className='bg-[#753350] w-full rounded-2xl mb-8'>
        <div className='flex justify-between'>
            <div className='flex-grow'>
                <p className='pl-3 pt-2 text-white font-bold text-xl pb-2'>1.- ¿En qué consisten estas pruebas?</p>
                <div className='border border-white mb-2'/>
                <p className='text-white pl-3 font-bold pb-3'>
                    Por medio de biopsias (sólidas o líquidas) se puede obtener ADN, ARN, proteínas u otras moléculas que expresa el tumor, y que le permitirán a su médico tratante establecer con mayor precisión cuál es la mejor terapia para su tipo de cáncer en particular.</p>
            </div>
            <div className='pl-5 pr-5 pt-10 pb-5 gap-3 flex'>
                <button className='w-12 h-12 bg-white rounded-xl flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                    <FiEdit className='w-10 h-10 text-[#632a42]'/>
                </button>
                <button className='w-12 h-12 bg-white rounded-xl flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                    <BiTrash className='w-10 h-10 text-[#632a42]'/>
                </button>
            </div>
        </div>
        
    </div>
  )
}
