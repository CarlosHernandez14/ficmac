"use client"
import { createPreguntaFrecuente, getPregunta, updatePregunta } from '@/actions/admin/preguntasFrecuentes'
import React, { useEffect, useState, useTransition } from 'react'


export const Modal = ({closeModal, mode, id}) => {

    const [isPending, startTransition] = useTransition()
    const [pregunta, setPregunta] = useState()

    useEffect(() =>{
      readData()
    },[])

    //Función para leer los datos
    const readData = async () =>{
      if(id){
        startTransition(() =>{
          getPregunta(id).then((res) => {
            console.log(res)
            setPregunta(res)
          })
        })
      }
    }

    //Función para enviar los datos
    const handleSubmit =async  (e) => {
        e.preventDefault()
        const pregunta = e.target.pregunta.value
        const respuesta = e.target.respuesta.value
        const data = {
          pregunta,
          respuesta
        }
        //Si se está creando una nueva pregunta
        if(mode === "Nueva"){
          startTransition(() => {
            createPreguntaFrecuente(data).then(()=>{
              window.alert("Pregunta creada")
              closeModal()
            })
          })
        }
        //Si se está editando una pregunta
        else{
          startTransition(() => {
            updatePregunta(id, data).then(()=>{
              window.alert("Pregunta actualizada")
              closeModal()
            })
          })
        }
        
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-[#D4D4D4] p-5 rounded-lg w-1/2'>
              {/* Título del modal, cambia dependiendo de si es edición o creación*/}
              <h2 className='text-2xl font-bold mb-4 text-[#753350]'>{mode} pregunta*</h2>
              
              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className='bg-[#753350] rounded-xl text-white font-bold'>
                    <div className='mb-1'>
                    
                    {/* Input para la pregunta */}
                    <input
                        className='bg-transparent w-full py-2 px-3 text-white placeholder-[#e2e2e2d3] focus:outline-none'
                        id='pregunta'
                        type='text'
                        defaultValue={mode === "Editar" ? pregunta?.pregunta : ""}
                        required={true}
                        maxLength={200}
                        placeholder='Escribe aquí tu pregunta'
                    />
                    </div>
                    <div className='h-[1px] w-full bg-white'/>
                    <div className='mb-4 mt-2'>
                      
                    {/* Input para la respuesta */}
                    <textarea
                        required={true}
                        className='bg-transparent w-full py-2 px-3 text-white placeholder-[#e2e2e2d3] focus:outline-none h-52 max-h-52'
                        id='respuesta'
                        defaultValue={mode === "Editar" ? pregunta?.respuesta : ""}
                        maxLength={600}
                        placeholder='Escribe tu respuesta'
                    />
                    </div>
                </div>
                <div className='flex justify-end'>  
                  <button
                    type='button'
                    className='bg-white border border-[#753350] text-[#753350] font-bold py-2 px-4 rounded mr-2 w-32 transform transition-transform duration-300 hover:scale-110'
                    onClick={()=>closeModal()}
                  >
                    {/* Botón de cancelar */}
                    Cancelar
                  </button>
                  {/* Botón de guardar */}
                  <button
                    type='submit'
                    className='bg-[#753350] text-white font-bold py-2 px-4 rounded w-32 transform transition-transform duration-300 hover:scale-110'
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}
