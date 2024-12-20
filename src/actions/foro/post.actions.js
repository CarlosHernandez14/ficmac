"use server"
import {prisma as db} from "@/libs/db";
import { auth } from "@/auth";

// Función que se encarga de obtener las publicaciones del foro
/* 
    Retorna
    - message: string
    - OK: boolean // true si se obtuvieron, false si no
    - data: object
*/
export const getPosts = async () => {
    try {
        // Se obtienen las publicaciones del foro
        const publicaciones = await db.Post.findMany({
            // Incluimos los datos del usuario, tipo-cancer, 
            include: {
                usuario: {
                    include: {
                        Paciente: true,
                    }
                },
                Tipo_Cancer: true,
                Voto: true,
            },
        });

        // Para cada publicación, contar cuántos comentarios tiene (los que tienen idPostPadre igual al id del post)
        const publicacionesConComentarios = await Promise.all(publicaciones.map(async (post) => {
            // Contamos los comentarios para el post actual (posts con idPostPadre igual al id del post)
            const replies = await db.Post.count({
                where: {
                    idPostPadre: post.id
                }
            });

            return {
                ...post,
                replies // Agregamos el conteo de comentarios a la publicación
            };
        }));

        // Se retorna las publicaciones
        return {
            message: "Publicaciones obtenidas",
            OK: true,
            data: publicacionesConComentarios
        };
    } catch (error) {
        console.error(error);
    }
}

// Function para obtener una publicacion por id
/* 
    Recibe los siguientes datos:
    - id: number

    Retorna
    - message: string
    - OK: boolean // true si se obtuvo, false si no
    - data: object
*/
export const getPostById = async () => {
    try {
        const session = await auth();
        const idUsuario = session.user.id;

        // Se obtiene la publicación por id
        const publicacion = await db.Post.findMany({
            where: {
                idUsuario: idUsuario
            },
            // Incluimos los datos del usuario, tipo-cancer, 
            include: {
                usuario: {
                    include: {
                        Paciente: true,
                    }
                },
                Tipo_Cancer: true,
                Voto: true
            }
        });

        // Se retorna la publicación
        return {
            message: "Publicación obtenida",
            OK: true,
            data: publicacion
        };
    } catch (error) {
        console.error(error);
        // Retornamos un objeto de error
        return {
            error: true,
            message: "No se pudo obtener la publicación"
        }
    }
}

// Función para crear una publicación
/* 
    Recibe los siguientes datos(data):
    - titulo: string
    - cuerpo: string
    - idUsuario: number
    - idTipoCancer: number
    - idPostPadre: number (opcional en caso de ser una respuesta de otro post)

    Retorna un objeto con la siguiente estructura
    - message: string
    - OK: boolean // true si se creó, false si no
    - data: object

*/
export const createPost = async (data) => {
    try {
        const session = await auth();
        const idUsuario = session.user.id; 

        // Se crea la publicación
        const publicacion = await db.Post.create({
            data: {
                titulo: data.titulo,
                cuerpo: data.cuerpo,
                idUsuario: idUsuario,
                idTipoCancer: data.idTipoCancer,
                idPostPadre: null,
              },
        });

        // Se retorna la publicación creada
        return {
            message: "Publicación creada",
            OK: true,
            data: publicacion
        };
    } catch (error) {
        console.error(error);
        // Retornamos un objeto de error
        return {
            error: true,
            message: error.message || "No se pudo crear la publicación"
        }
    }
}

// Función para actualizar una publicación
/* 
    Recibe los siguientes datos para data:
    - id: number
    - titulo: string
    - cuerpo: string

    Recibe los siguientes datos para idPost:
    - id: number

    Retorna
    - message: string
    - OK: boolean // true si se actualizó, false si no
    - data: object
*/

export const updatePost = async (data, idPost) => {
    try {
        // Se actualiza la publicación
        const publicacion = await db.Post.update({
            where: {
                id: idPost
            },
            data: {
                titulo: data.titulo,
                cuerpo: data.cuerpo
            }
        });

        // Se retorna la publicación actualizada
        return {
            message: "Publicación actualizada",
            OK: true,
            data: publicacion
        };
    } catch (error) {
        console.error(error);
        // Retornamos un objeto de error
        return {
            error: true,
            message: "No se pudo actualizar la publicación"
        }
    }
}

// Función para eliminar una publicación
/* 
    Recibe los siguientes datos:
    - id: number

    Retorna
    - message: string
    - OK: boolean // true si se eliminó, false si no
    - data: object

*/

export const deletePost = async (idPost) => {
    try {
        //  Transaccion para eliminar la publicación    
        const [voto, post_hijos, post] = await db.$transaction([
            db.Voto.deleteMany({
                where: {
                    idPost: idPost
                }
            }),
            db.Post.deleteMany({
                where: {
                    idPostPadre: idPost
                }
            }),
            db.Post.delete({
                where: {
                    id: idPost
                }
            })
        ]);
            

        // Se retorna el status de la eliminación
        return {
            message: "Publicación eliminada",
            OK: true,
            data: {
                voto,
                post_hijos,
                post
            }
        }
    } catch (error) {
        console.error(error);
        // Retornamos un objeto de error
        return {
            message: "No se pudo eliminar la publicación",
            OK: false,
        }
    }
}
