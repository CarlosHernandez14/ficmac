"use client"
import React, { useState, useTransition } from 'react'
import { BiTrash } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { Modal } from './Modal'
import { deletePregunta } from '@/actions/admin/preguntasFrecuentes'


export const Pregunta = ({id, pregunta, respuesta, updateData}) => {

    const [isEditOpened, setIsEditOpen] = useState()
    const [isPending, startTransition] = useTransition()

    //Función para eliminar una pregunta
    const handleDeletePregunta = async () => {
        const confirmed = window.confirm("¿Estás seguro de que deseas eliminar esta pregunta?")
        if (confirmed) {
          startTransition(() => {
            deletePregunta(id).then(() => {
              window.alert("Pregunta eliminada")
              updateData()
            })
          })
        }
      }

    //Función para abrir el modal de edición
    const openModal = () => {
        setIsEditOpen(true)
    }

    //Función para cerrar el modal de edición
    const closeModal = () =>{
        setIsEditOpen(false)
        updateData()
    }

    return (
        <div className='bg-[#753350] w-full rounded-2xl mb-8'>
            <div className='flex justify-between'>
                <div className='flex-grow'>
                    {/* Pregunta */}
                    <p className='pl-3 pt-2 text-white font-bold text-xl pb-2'>{pregunta}</p>
                    <div className='border border-white mb-2'/>
                    {/* Respuesta */}
                    <p className='text-white pl-3 font-bold pb-3'>
                        {respuesta}</p>
                </div>
                <div className='pl-5 pr-5 pt-10 pb-5 gap-3 flex'>
                    {/* Botones de editar y eliminar */}
                    <button onClick={openModal} className='w-12 h-12 bg-white rounded-xl flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                        <FiEdit className='w-10 h-10 text-[#632a42]'/>
                    </button>
                    <button onClick={handleDeletePregunta} className='w-12 h-12 bg-white rounded-xl flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                        <BiTrash className='w-10 h-10 text-[#632a42]'/>
                    </button>
                </div>
            </div>
            {/* Modal de edición */}
            {isEditOpened && 
                <Modal id={id} closeModal={closeModal} mode={"Editar"}/>
            }
            
        </div>
    )
}
