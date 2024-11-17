import React from 'react'
import FotoEstudio from './FotoEstudio'
import InformacionEstudio from './InformacionEstudio'

function TarjetaPaciente() {
  return (
    <div className='w-full h-auto bg-white rounded-xl flex'>
        <FotoEstudio />
        <InformacionEstudio />
    </div>
  )
}

export default TarjetaPaciente