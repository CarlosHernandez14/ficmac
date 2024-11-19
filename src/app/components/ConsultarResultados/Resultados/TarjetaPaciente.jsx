import React from 'react'
import FotoEstudio from './FotoEstudio'
import InformacionEstudio from './InformacionEstudio'

function TarjetaPaciente({resultado}) {
  return (
    <div className='w-full h-auto bg-white rounded-xl flex'>
        <FotoEstudio imagen={resultado.tipo_cancer.path_imagen} tipo={resultado.tipo_cancer.nombre}/>
        <InformacionEstudio resultado={resultado}/>
    </div>
  )
}

export default TarjetaPaciente