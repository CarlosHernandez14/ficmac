import React from 'react'
import MenuTipoCancer from './MenuTiposCancer/MenuTipoCancer'
import Sintomas from './Sintomas/Sintomas'
import TipoCancer from './TipoCancer/TipoCancer'

function TiposCancer() {
  return (
    <div className='relative'>
      <div className='absolute inset-0'>
        <img src='/TiposCancer/adn.jfif' alt='ADN' className='w-full h-64 object-cover' />
      </div>
      <div className='relative z-10 p-4'>
        <div className='flex justify-around items-center'>
          <MenuTipoCancer />
          <div className='space-y-2'>
            <TipoCancer />
            <Sintomas />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TiposCancer