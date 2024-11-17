import React from 'react'

function BolaSintoma({nombre, ruta}) {
  return (
    <div className="flex flex-col items-center bg-slate-200 rounded-full cursor-pointer">
      <div className="h-20 w-20 rounded-full flex justify-center items-center">
        <p className='text-center text-[#367B99]'>{nombre}</p>
      </div>
    </div>
  )
}

export default BolaSintoma