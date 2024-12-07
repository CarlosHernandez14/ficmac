import React from 'react'

function Datos() {
  return (
    <div className='flex w-auto h-auto px-8'>
      <div className='w-1/2 relative flex items-center justify-center'>
        <img
          src='/donaciones/donacionImg1.jpg'
          alt='Imagen'
          className='object-cover rounded-l-lg w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-l from-white to-transparent rounded-l-lg'/>
      </div>
      <div className='w-1/2 p-8 bg-white flex flex-col justify-center rounded-r-lg'>
        <h2 className='text-xl font-bold mb-4'>Regala esperanza de vida a más pacientes con Cáncer</h2>
        <p className='text-xs text-justify'>
          Gracias al apoyo voluntario de personas naturales y jurídicas, la Fundación ha logrado brindar innovadores y eficaces avances de diagnóstico, logrando la estandarización de biomarcadores antes de su uso clínico regular.
        </p>
      </div>
    </div>
  )
}

export default Datos