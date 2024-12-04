import { Preguntas } from '@/app/components/Admin/PreguntasFrecuentes/Preguntas'
import React from 'react'

const Page = () => {
  return (
    <div>
        {/* Fondo superior */}
        <div style={{
            width: '100%',
            height: '40vh',
            backgroundImage: 'url(/Admin/preguntasFrecuentes/Background1preguntas.png)',
            backgroundSize: 'cover', 
            backgroundPosition: 'top', 
        }}>
            <div className='pt-[9%] pl-10 font-bold'>
                <h1 className='text-white text-3xl'>Preguntas frecuentes</h1>
                <h1 className='text-white text-3xl'>de los pacientes</h1>
            </div>
        </div>
        {/* Fondo inferior */}
        <div style={{
            backgroundImage: 'url(/Admin/preguntasFrecuentes/Background2preguntas.png)',
            backgroundSize: 'cover', 
            backgroundPosition: 'top', 
            flex: 1,
            minHeight:'60vh'
        }}>
            {/* Componente de preguntas */}
            <Preguntas/>
        </div>
    </div>
  )
}

export default Page