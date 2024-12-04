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

//Funcion para crear Publicaciones Cientificas
//Retorna un mensaje de exito si la publicacion fue creada
//Retorna un mensaje de error si la publicacion no fue creada

export const createPublicacionCientifica = async (data) => {
  try {
    await db.Publicacion_Cientifica.create({
      data: {
        idUsuario: data.idUsuario,
        idTipoCancer: data.idTipoCancer,
        titulo: data.titulo,
        resumen: data.resumen,
        fecha_publicado: new Date(),
        link: data.link,
      },
    });
    return { success: "Publicacion Cientifica creada" };
  } catch (error) {
    return { error: "Error al crear la publicacion cientifica" };
  }
};

//Funcion para editar Publicaciones Cientificas
//Retorna un mensaje de exito si la publicacion fue editada
//Retorna un mensaje de error si la publicacion no fue editada

export const editPublicacionCientifica = async (data) => {
  try {
    await db.Publicacion_Cientifica.update({
      where: {
        id: data.id,
      },
      data: {
        titulo: data.titulo,
        resumen: data.resumen,
        link: data.link,
      },
    });
    return { success: "Publicacion Cientifica editada" };
  } catch (error) {
    return { error: "Error al editar la publicacion cientifica" };
  }
};

//Funcion para eliminar Publicaciones Cientificas
//Retorna un mensaje de exito si la publicacion fue eliminada
//Retorna un mensaje de error si la publicacion no fue eliminada

export const deletePublicacionCientifica = async (id) => {
  try {
    await db.Publicacion_Cientifica.delete({
      where: {
        id: id,
      },
    });
    return { success: "Publicacion Cientifica eliminada" };
  } catch (error) {
    return { error: "Error al eliminar la publicacion cientifica" };
  }
}
