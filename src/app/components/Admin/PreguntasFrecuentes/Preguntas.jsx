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

    const openModal = () => {
        setIsNewQuestionOpen(true)
      }
    
      const closeModal = () => {
        setIsNewQuestionOpen(false)
      }
     
    const readData = async () =>{
      startTransition(() =>{
        getPreguntas().then((res) => {
          console.log(res)
          setPreguntas(res)
        })
      })
    }

    useEffect(() => {
      readData()
    }, [])
    

  return (
    <div className='pt-5'>
        <div className='flex justify-end pr-5'>
        <button onClick={openModal} className='w-14 h-14 bg-[#753350] rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110'>
                <FiPlusCircle className='text-white w-10 h-10'/>
            </button>
        </div>
        <div className='pl-10 pr-10 pb-10 pt-5'>
          {preguntas &&     
            preguntas.map((pregunta) => (
              <Pregunta id={pregunta.idPregunta} pregunta={pregunta.pregunta} respuesta = {pregunta.respuesta}/>
            ))
          }
            
        </div>

        {isNewQuestionOpen && (
          <Modal closeModal={closeModal} mode={"Nueva"}/>
        )}
        
    </div>
  )
}
