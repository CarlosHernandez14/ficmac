"use server";
import { prisma as db } from "@/libs/db";

// Función para obtener todas las publicaciones cientificas
// Retorna un array (publicaciones) con todas las publicaciones cientificas
// Retorna un error (error) si no se pudieron obtener las publicaciones cientificas
export const getPublicacionesCientificas = async () => {
  try {
    const publicaciones = await db.Publicacion_Cientifica.findMany({
      include: {
        usuario: true,
        Tipo_Cancer: true,
      },
    });
    return {
      success: "Tipos de cancer obtenidos",
      publicaciones: publicaciones,
    };
  } catch (error) {
    return { error: "Error al obtener las publicaciones cientificas" };
  }
};

// Función para obtener una publicación cientifica por el id del tipo de cancer
// Retorna un array (publicaciones) con todas las publicaciones cientificas
// Retorna un error (error) si no se pudieron obtener las publicaciones cientificas
export const getPublicacionCientificaByTipoCancerId = async (idTipoCancer) => {
  try {
    const publicaciones = await db.Publicacion_Cientifica.findMany({
      where: {
        idTipoCancer: idTipoCancer,
      },
      include: {
        usuario: true,
        Tipo_Cancer: true,
      },
    });
    return { success: "Publicaciones obtenidas", publicaciones: publicaciones };
  } catch (error) {
    return { error: "Error al obtener las publicaciones cientificas" };
  }
};

// Función para obtener publicaciones cientificas mediante una busqueda
// Retorna un array (publicaciones) con todas las publicaciones cientificas
// Retorna un error (error) si no se pudieron obtener las publicaciones cientificas

export const getPublicacionCientificaByBusqueda = async (busqueda) => {
  try {
    const publicaciones = await db.Publicacion_Cientifica.findMany({
      where: {
        OR: [
          {
            titulo: {
              contains: busqueda,
            },
          },
        ],
      },
      include: {
        usuario: true,
        Tipo_Cancer: true,
      },
    });
    return { success: "Publicaciones obtenidas", publicaciones: publicaciones };
  } catch (error) {
    return { error: "Error al obtener las publicaciones cientificas" };
  }
};
