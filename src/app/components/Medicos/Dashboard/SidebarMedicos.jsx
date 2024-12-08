import React from 'react'
import { FaUserCircle, FaStethoscope, FaMicroscope, FaComments } from 'react-icons/fa';
import { FaHospitalUser, FaVialCircleCheck  } from "react-icons/fa6";
import NavbarItemGeneral from '../../Navbar/NavbarItemGeneral'

function SidebarMedicos() {
  return (
    <div className='bg-[#753350] w-auto px-8 h-screen'>
        <div className='p-4 flex justify-center'>
            <img src='\General\logoblanco.png' alt='imagen' className='w-20 h-8'/>
        </div>
        <div className='flex flex-col items-center space-y-4 my-12'>
            <FaUserCircle className='text-white text-9xl'/>
            <p className='text-white text-xl'>Médicos</p>
        </div>
        <div className='flex flex-col items-center text-justify space-y-2'>
            <NavbarItemGeneral icon={FaVialCircleCheck} name='Resultados' href='/Medicos/ResultadosEstudios' />
            <NavbarItemGeneral icon={FaStethoscope} name='Consultar Estudios' href='/Medicos/ConsultarEstudios' />

        </div>
    </div>
  )
}

export default SidebarMedicos