import React from 'react'
import FotoEstudio from '../../ConsultarResultados/Resultados/FotoEstudio';
import InformacionEstudio from '../../ConsultarResultados/Resultados/InformacionEstudio';

function CardResultado ({resultado}) {
  return (
    <div className='w-full h-auto bg-white rounded-xl flex'>
        <FotoEstudio imagen={resultado.tipo_cancer.path_imagen} tipo={resultado.tipo_cancer.nombre}/>
        <InformacionEstudio resultado={resultado}/>
    </div>
  )
}

export default CardResultado;