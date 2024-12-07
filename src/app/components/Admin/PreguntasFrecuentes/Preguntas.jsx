"use client"
import React, { useEffect, useState, useTransition } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { Pregunta } from './Pregunta'
import { Modal } from './Modal'
import { getPreguntas } from '@/actions/admin/preguntasFrecuentes'

export const Preguntas = () => {

    const [isNewQuestionOpen, setIsNewQuestionOpen] = useState(false)
    const [preguntas, setPreguntas] = useState([])
    const [isPending, startTransition] = useTransition()

    //Funciones para abrir y cerrar el modal
    const openModal = () => {
        setIsNewQuestionOpen(true)
      }
    
      const closeModal = () => {
        setIsNewQuestionOpen(false)
        readData()
      }
     
    //Función para leer los datos
    const readData = async () =>{
      startTransition(() =>{
        getPreguntas().then((res) => {
          console.log(res)
          setPreguntas(res)
        })
      })
    }

    //Se ejecuta al cargar la página
    useEffect(() => {
      readData()
    }, [])
    

  return (
    <div className='pt-5'>
        <div className='flex justify-end pr-10'>
        {/* Botón para añadir preguntas */}
        <button onClick={openModal} className='w-14 h-14 bg-[#753350] rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                <FiPlusCircle className='text-white w-10 h-10'/>
            </button>
        </div>
        <div className='pl-10 pr-10 pb-10 pt-5'>
          {/* Mapeo de preguntas */}
          {preguntas &&     
            preguntas.map((pregunta) => (
              <Pregunta updateData={readData} key={pregunta.id} id={pregunta.id} pregunta={pregunta.pregunta} respuesta = {pregunta.respuesta}/>
            ))
          }
            
        </div>
        {/* Modal para añadir preguntas */}
        {isNewQuestionOpen && (
          <Modal closeModal={closeModal} mode={"Nueva"}/>
        )}
        
    </div>
  )
}
