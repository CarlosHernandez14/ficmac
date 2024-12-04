"use client"
import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { Modal } from './Modal'


export const Pregunta = ({id, pregunta, respuesta}) => {

    const [isEditOpened, setIsEditOpen] = useState()

    const openModal = () => {
        setIsEditOpen(true)
    }

    const closeModal = () =>{
        setIsEditOpen(false)
    }

    return (
        <div className='bg-[#753350] w-full rounded-2xl mb-8'>
            <div className='flex justify-between'>
                <div className='flex-grow'>
                    <p className='pl-3 pt-2 text-white font-bold text-xl pb-2'>{id}.- {pregunta}</p>
                    <div className='border border-white mb-2'/>
                    <p className='text-white pl-3 font-bold pb-3'>
                        {respuesta}</p>
                </div>
                <div className='pl-5 pr-5 pt-10 pb-5 gap-3 flex'>
                    <button onClick={openModal} className='w-12 h-12 bg-white rounded-xl flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                        <FiEdit className='w-10 h-10 text-[#632a42]'/>
                    </button>
                    <button className='w-12 h-12 bg-white rounded-xl flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                        <BiTrash className='w-10 h-10 text-[#632a42]'/>
                    </button>
                </div>
            </div>
            {isEditOpened && 
                <Modal id={id} closeModal={closeModal} mode={"Editar"}/>
            }
            
        </div>
    )
}
