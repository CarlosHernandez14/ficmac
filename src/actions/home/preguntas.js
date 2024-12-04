
"use server"
import db from '@/libs/db'
/**
 * Devuelve todas las preguntas registradas en la base de datos
 * @returns preguntas
 */
export const getPreguntas = async () => {
    try {
      const preguntas = await db.Pregunta_Frecuente.findMany(); // Obtiene todas las preguntas
      return { success: "Preguntas obtenidas", preguntas };
    } catch (error) {
      console.log(error);
      return { error: "Error al obtener las preguntas" };
    }
  };