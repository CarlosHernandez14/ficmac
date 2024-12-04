"use server"
import db from "@/libs/db"


/**
 * Crea una pregunta frecuente
 * @param {Object} data {pregunta, respuesta}
 * @returns {Object} pregunta={id, pregunta, respuesta}
 */
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

/**
 * Leer las preguntas frecuentes
 * @returns {List<Pregunta>} pregunta={id, pregunta, respuesta}
 */
export const getPreguntas = async () =>{
    try {
        const preguntas = await db.Pregunta_Frecuente.findMany()
        return preguntas
    } catch (error) {
        console.log(error)
    }
}

/**
 * leer una pregunta frecuente
 * @returns {Object} pregunta={id, pregunta, respuesta}
 */
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

/**
 * Actualizar una pregunta frecuente
 * @param {int} id
 * @param {Object} data {pregunta, respuesta
 * @returns {Object} pregunta={id, pregunta, respuesta}
 */ 
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

/**
 * Eliminar una pregunta frecuente
 * @param {int} id
 * @returns {Object} pregunta={id, pregunta, respuesta}
 */
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