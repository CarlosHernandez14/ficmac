"use server";
import { prisma as db } from "@/libs/db";
import { auth } from "@/auth";

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
  const session = await auth();
  try {
    await db.Publicacion_Cientifica.create({
      data: {
        idUsuario: session.user.id,
        idTipoCancer: parseInt(data.idTipoCancer),
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
        idTipoCancer: parseInt(data.idTipoCancer),
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
    // Verificar si la publicación existe
    const publicacion = await prisma.publicacion_Cientifica.findUnique({
      where: {
        id: id,
      },
    });

    if (!publicacion) {
      return { error: "La publicación científica no existe"};
    }

    // Eliminar la publicación
    await prisma.publicacion_Cientifica.delete({
      where: {
        id: id,
      },
    });

    return { success: "Publicación científica eliminada" };
  } catch (error) {
    return { error: error.message };
  }
};
