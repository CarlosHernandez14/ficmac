import {prisma as db} from "@/libs/db";


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
                usuario: true,
                Tipo_Cancer: true,
                Voto: true
            }
        });

        // Se retorna las publicaciones

        return {
            message: "Publicaciones obtenidas",
            OK: true,
            data: publicaciones
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
export const getPostById = async (id) => {
    try {
        // Se obtiene la publicación por id
        const publicacion = await db.Post.findUnique({
            where: {
                id
            },
            // Incluimos los datos del usuario, tipo-cancer, 
            include: {
                usuario: true,
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
    Recibe los siguientes datos:
    - titulo: string
    - cuerpo: string
    - idUsuario: number
    - idTipoCancer: number
    - idPostPadre: number (opcional en caso de ser una respuesta de otro post)

    Retorna
    - message: string
    - OK: boolean // true si se creó, false si no
    - data: object

*/
export const createPost = async (data) => {
    try {
        // Se crea la publicación
        const publicacion = await db.Post.create({
            data
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
            message: "No se pudo crear la publicación"
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
