"use client"
import React from 'react'
import MenuTipoCancer from './MenuTiposCancer/MenuTipoCancer'
import Sintomas from './Sintomas/Sintomas'
import TipoCancer from './TipoCancer/TipoCancer'
import InfoTipoCancer from './TipoCancer/InfoTipoCancer'
import { useState } from 'react'

function TiposCancer() {
  const [canceres, setCanceres] = useState([]);
  return (
    <div className='relative'>
      <div className='absolute inset-0'>
        <img src='/TiposCancer/adn.jfif' alt='ADN' className='w-full h-48 object-cover' />
      </div>
      <div className='relative z-10 p-4'>
        <div className='flex justify-evenly items-center'>
          <MenuTipoCancer setCanceres={setCanceres}/>
          <div className='space-y-2'>
            <TipoCancer nombre={canceres.nombre}/>
            <InfoTipoCancer img={canceres.path_imagen} descripcion={canceres.descripcion}/>
            <Sintomas sintomas={canceres.Tipo_Cancer_Sintoma}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TiposCancer