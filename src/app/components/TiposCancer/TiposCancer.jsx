import React from 'react'
import MenuTipoCancer from './MenuTiposCancer/MenuTipoCancer'
import Sintomas from './Sintomas/Sintomas'
import TipoCancer from './TipoCancer/TipoCancer'

function TiposCancer() {
  return (
    <div className='flex justify-around items-center p-4'>
      <MenuTipoCancer />
      <div className='space-y-2 '>
        <TipoCancer />
        <Sintomas />
      </div>
    </div>
  )
}

export default TiposCancer