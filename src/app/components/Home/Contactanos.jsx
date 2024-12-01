import React from 'react'
import Contactanos_Izquierdo from './Contactanos_Izquierdo'
import Contactanos_Derecho from './Contactanos_Derecho'

const Contactanos = () => {
//Este componente es la unión de las dos partes de la seccion de contactanos!


  return (
    <div className='flex p-5'>
        <div className='w-1/3'>
        <Contactanos_Izquierdo/>
        </div>
        <div className='w-2/3'>
        <Contactanos_Derecho/>
        </div>
     
   
    </div>
  )
}

export default Contactanos
