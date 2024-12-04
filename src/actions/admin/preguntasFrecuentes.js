"use server"
import db from "@/libs/db"
export const createPreguntaFrecuente = async (data) =>{
    const pregunta = data.pregunta
    const respuesta = data.respuesta
    try{
        const res = await db.Pregunta_Frecuente.create({
            data:{
                pregunta: pregunta,
                respuesta: respuesta
            }
        })
        return res
    }catch(err){
        console.log(err)

    }
}

export const getPreguntas = async () =>{
    try {
        const preguntas = await db.Pregunta_Frecuente.findMany()
        return preguntas
    } catch (error) {
        console.log(error)
    }
}

export const getPregunta = async (id) =>{
    try {
        const pregunta = await db.Pregunta_Frecuente.findUnique({
            where:{
                id: id
            }
        })
        return pregunta
    } catch (error) {
        console.log(error)
    }
}

export const updatePregunta = async (id, data) =>{
    try {
        const res = await db.Pregunta_Frecuente.update({
            where:{
                id: id
            },
            data:{
                pregunta: data.pregunta,
                respuesta: data.respuesta
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const deletePregunta = async (id) =>{
    try {
        const res = await db.Pregunta_Frecuente.delete({
            where:{
                id: id
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }
}