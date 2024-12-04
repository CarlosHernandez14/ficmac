import db from "@/libs/db"
export const createPreguntaFrecuente = async (data) =>{
    const pregunta = data.pregunta
    const respuesta = data.respuesta
    try{
        const pregunta = await db.Pregunta_Frecuente.create({
            data:{
                pregunta: pregunta,
                respuesta: respuesta
            }
        })
        return pregunta
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