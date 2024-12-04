import React from 'react'
import { FaUserCircle, FaStethoscope, FaMicroscope, FaComments } from 'react-icons/fa';
import NavbarItemGeneral from '../../Navbar/NavbarItemGeneral'

function Dashboard() {
  return (
    <div className='bg-[#753350] w-auto px-8 h-screen'>
        <div className='p-4 flex justify-center'>
            <img src='\General\logoblanco.png' alt='imagen' className='w-20 h-8'/>
        </div>
        <div className='flex flex-col items-center space-y-4 my-12'>
            <FaUserCircle className='text-white text-9xl'/>
            <p className='text-white text-xl'>Administrador</p>
        </div>
        <div className='flex flex-col items-center text-justify space-y-2'>
            <NavbarItemGeneral icon={FaStethoscope} name='Medicos' href='/admin/users' />
            <NavbarItemGeneral icon={FaMicroscope} name='Estudios' href='/admin/studies' />
            <NavbarItemGeneral icon={FaComments} name='Foro' href='/admin/comments' />
        </div>
    </div>
  )
}

export default Dashboard