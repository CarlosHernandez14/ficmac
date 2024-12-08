"use server";

// Actions para el manejo de medicos en la db
import { prisma as db } from "@/libs/db";

/**
 * Funcion para obtener todos los medicos
 * Recibe como parametro:
 * - nada
 * Retorna un objeto con la siguiente estructura:
 * {
 *    OK: true|false, // Indica si la consulta fue exitosa
 *   message: "", // Mensaje de respuesta
 *  data: []|null // Arreglo con los medicos encontrados
 * }
 */

export async function getMedicos() {
  try {
    // Consulta de todos los medicos
    const medicos = await db.medico.findMany();

    return {
      OK: true,
      message: "Medicos encontrados",
      data: medicos,
    };

  } catch (error) {
    console.table(error);
    return {
      OK: false,
      message: "Error al buscar los medicos",
      error: error
    };
  }
}