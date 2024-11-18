"use server"
import db from '@/libs/db'
/**
 * Todos los tipos de canceres registrados en la base de datos
 * @returns tiposCancer
 */
export const getTiposCancer = async () => {
    try {
        const tiposCancer = await db.Tipo_Cancer.findMany()
        return {success: "Tipos de cancer obtenidos", tiposCancer: tiposCancer}
    } catch (error) {
        console.log(error)
        return {error: "Error al obtener los tipos de cancer"}
    }
}

/**
 * Devuelve la información del cancer solicitado
 * @returns cancer
 */
export const getCancer = async (id) => {
    try {
        const cancer = await db.Tipo_Cancer.findUnique({
            where: {
                id: id
            },
            include:{
                Tipo_Cancer_Sintoma: {
                    include: {
                        Sintoma: true
                    }
                }
            }
        })
        return {success: "Cancer obtenido", cancer: cancer}
    } catch (error) {
        console.log(error)
        return {error: "Error al obtener el cancer"}
    }
}