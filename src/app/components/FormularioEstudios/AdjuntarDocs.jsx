import React from 'react'
import Documentos from './Documentos'
import ExaminarArchivo from './ExaminarArchivo'

const AdjuntarDocs = () => {
  return (
    <div className="relative">
    <img
      src="/EstudioDisponibles/fondo.jpeg"
      alt="Fondo"
      className="w-full h-80 object-cover opacity-75"
    />
    <div>
      <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent " />
      <h1 className="absolute bottom-10 left-1/3 text-center text-[#753350] text-3xl font-bold">
          Adjuntar documentos
        </h1>
      <div className="absolute ">
       <Documentos/>
      </div>
   
    </div>
  </div>
  )
}

export default AdjuntarDocs
