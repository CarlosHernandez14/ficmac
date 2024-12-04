"use client"
import { createPreguntaFrecuente } from '@/actions/admin/preguntasFrecuentes'
import React, { useTransition } from 'react'


export const Modal = ({closeModal, mode}) => {

    const [isPending, startTransition] = useTransition()

    const handleSubmit =async  (e) => {
        e.preventDefault()
        const pregunta = e.target.pregunta.value
        const respuesta = e.target.respuesta.value
        const data = {
          pregunta,
          respuesta
        }
        if(mode === "Nueva"){
          startTransition(() => {
            createPreguntaFrecuente(data).then(()=>{
              window.alert("Pregunta creada")
              closeModal()
            })
          })
        }else{
          console.log("Edito: ", pregunta, respuesta)
        }
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-[#D4D4D4] p-5 rounded-lg w-1/2'>
              <h2 className='text-2xl font-bold mb-4 text-[#753350]'>{mode} pregunta*</h2>
              
              <form onSubmit={handleSubmit}>
                <div className='bg-[#753350] rounded-xl text-white font-bold'>
                    <div className='mb-1'>
                    
                    <input
                        className='bg-transparent w-full py-2 px-3 text-white placeholder-[#e2e2e2d3] focus:outline-none'
                        id='pregunta'
                        type='text'
                        required={true}
                        maxLength={200}
                        placeholder='Escribe aquí tu pregunta'
                    />
                    </div>
                    <div className='h-[1px] w-full bg-white'/>
                    <div className='mb-4 mt-2'>
                    <textarea
                        required={true}
                        className='bg-transparent w-full py-2 px-3 text-white placeholder-[#e2e2e2d3] focus:outline-none'
                        id='respuesta'
                        maxLength={600}
                        placeholder='Escribe tu respuesta'
                    />
                    </div>
                </div>
                <div className='flex justify-end'>
                  <button
                    type='button'
                    className='bg-white border border-[#753350] text-[#753350] font-bold py-2 px-4 rounded mr-2 w-32'
                    onClick={closeModal}
                  >
                    Cancelar
                  </button>
                  <button
                    type='submit'
                    className='bg-[#753350] text-white font-bold py-2 px-4 rounded w-32'
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}