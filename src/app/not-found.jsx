"use client"

import { useRouter } from 'next/navigation'
import React from 'react'


const NotFound = () => {

  const router = useRouter()

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundImage: 'url(/404/background-404.png)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundColor:'#A0737D'
    }}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className='text-white text-8xl font-bold'>¡Oops!</h1>
        <p className='pt-6 text-white font-bold text-xl'>{"(Error 404)"}</p>
        <p className='pt-6 text-white font-bold text-xl w-[900px] text-center'>Lo sentimos, esta página no está disponible en este momento. Pero no te preocupes, estamos aquí para brindarte apoyo y toda la información que necesites.</p>
        <button onClick={() => router.push('/auth/login')} className='bg-[#2b6b86cb] w-60 h-11 rounded-lg text-white mt-5 mb-10 transform transition-transform duration-300 hover:scale-110'>Volver a inicio</button>
      </div>
    </div>
  )
}

export default NotFound