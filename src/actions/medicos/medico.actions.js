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

/**
 * Funcion para crear un medico
 * Recibe como parametro:
 * - values: Objeto con los valores del medico a crear
 * Retorna un objeto con la siguiente estructura:
 * {
 *   OK: true|false, // Indica si la creacion fue exitosa
 *  message: "", // Mensaje de respuesta
 * data: {}|null // Medico creado
 * }
 */

export async function createMedico(values) {
  try {
    // Crear el medico
    const medico = await db.medico.create({
      data: {
        nombre_completo: values.nombre_completo,
        rfc: values.rfc,
        matricula: values.matricula,
        num_celular: values.num_celular,
        especialidad: values.especialidad,
        usuario: {
          connect: {
            id: values.idUsuario,
          },
        },
      },
    });

    return {
      OK: true,
      message: "Medico creado",
      data: medico,
    };

  } catch (error) {
    //console.table(error);
    return {
      OK: false,
      message: "Error al crear el medico",
      error: error
    };
  }
}