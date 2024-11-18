"use server";
// Manejo de solicitudes de los pacientes

import { prisma as db, TipoEstudio, Especialidad } from "@/libs/db";

// Funcion para obtener todas las solicitudes
/*
    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        data: []string // Arreglo con todas las solicitudes
    }
*/ export async function getAllSolicitudes() {
  try {
    const solicitudes = await db.Solicitud_Estudio.findMany({
      include: {
        usuario: {
          include: {
            Paciente: true, // Incluye la relación Paciente
          },
        },
        estudio: true,
        medico: {
          include: {
            Medico: true,
          },
        },
      },
    });

    // Retorno de éxito con los datos obtenidos
    return {
      OK: true,
      message: "Solicitudes encontradas",
      data: solicitudes,
    };
  } catch (error) {
    // Manejo de error y retorno de información relevante
    return {
      OK: false,
      message: "Error al buscar solicitudes",
      error: error.message, // Específicamente capturando el mensaje de error
    };
  }
}
