import React from 'react'

function BolaSintoma({nombre, ruta}) {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-20 w-20 rounded-full flex justify-center items-center'>
          <img src={ruta} alt='icono' />
      </div>
      <p className='text-center text-[#367B99]'>{nombre}</p>
    </div>
  )
}

export default BolaSintoma