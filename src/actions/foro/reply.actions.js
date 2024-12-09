"use server"
import {prisma as db} from "@/libs/db";
import { auth } from "@/auth";

// Funcion para obtener las respuestas de un post
/* 
    Recibe los siguientes datos:
    - id: number // id del post padre del que se quieren obtener las respuestas

    Retorna
    - message: string
    - OK: boolean // true si se obtuvieron, false si no
    - data: object
*/

export const getReplies = async (idPostPadre) => {
    try {
        // Se obtienen las respuestas del post
        const respuestas = await db.Post.findMany({
            where: {
                idPostPadre: idPostPadre
            },
            // Incluimos los datos del usuario
            include: {
                usuario: {
                    include: {
                        Paciente: true,
                    }
                },
            }
        });

        // Se retorna las respuestas
        return {
            message: "Respuestas obtenidas",
            OK: true,
            data: respuestas
        };
    } catch (error) {
        console.error(error);

        return {
            message: "Error al obtener las respuestas",
            OK: false,
            data: null
        };
    }
}

// Funcion para obtener una respuesta por id
/* 
    Recibe los siguientes datos:
    - id: number

    Retorna
    - message: string
    - OK: boolean // true si se obtuvo, false si no
    - data: object
*/

export const getReplyById = async (id) => {
    try {
        // Se obtiene la respuesta por id
        const respuesta = await db.Post.findUnique({
            where: {
                id: id
            },
            // Incluimos los datos del usuario
            include: {
                usuario: true
            }
        });

        // Se retorna la respuesta
        return {
            message: "Respuesta obtenida",
            OK: true,
            data: respuesta
        };
    } catch (error) {
        console.error(error);

        return { 
            message: "Error al obtener la respuesta",
            OK: false,
            data: null
        }
    }
}

// Eliminar una respuesta
/* 
    Recibe los siguientes datos:
    - id: number // id de la respuesta que se quiere eliminar

    Retorna
    - message: string
    - OK: boolean // true si se elimino, false si no
    - data: object
*/

export const deleteReply = async (id) => {
    try {
        // Se elimina la respuesta
        await db.Post.delete({
            where: {
                id
            }
        });

        return {
            message: "Respuesta eliminada",
            OK: true,
            data: null
        };
    } catch (error) {
        console.error(error);

        return {
            message: "Error al eliminar la respuesta",
            OK: false,
            data: null
        };
    }
}

// Funcion para crear una respuesta
/* 
    Recibe los siguientes datos:
    - idPostPadre: number // id del post al que se quiere responder
    - idUsuario: number // id del usuario que responde
    - reply: string // cuerpo de la respuesta

    Retorna
    - message: string
    - OK: boolean // true si se creo, false si no
    - data: object
*/

export const createReply = async (data) => {
    try {
        const session = await auth();
        const idUsuario = session.user.id;

        // Se crea la respuesta
        const respuesta = await db.Post.create({
            data: {
                cuerpo: data.cuerpo,
                idPostPadre: data.idPostPadre,
                idUsuario: idUsuario,
                idTipoCancer: data.idTipoCancer,
                titulo: "", // Las respuestas no tienen título, según tu lógica
            },
        });

        // Retornamos la respuesta creada
        return {
            message: "Respuesta creada",
            OK: true,
            data: respuesta,
        };
    } catch (error) {
        console.error(error);

        // Retornamos un objeto de error
        return {
            error: true,
            message: error.message || "No se pudo crear la respuesta",
        };
    }
};

// Funcion para actualizar una respuesta

/*
    Recibe los siguientes datos:
    - id: number // id de la respuesta que se quiere actualizar
    - reply: string // cuerpo de la respuesta

    Retorna
    - message: string
    - OK: boolean // true si se actualizo, false si no
    - data: object
*/

export const updateReply = async (id, reply) => {
    try {
        // Se actualiza la respuesta
        const respuesta = await db.Post.update({
            where: {
                id
            },
            data: {
                cuerpo: reply
            }
        });

        return {
            message: "Respuesta actualizada",
            OK: true,
            data: respuesta
        };
    } catch (error) {
        console.error(error);

        return {
            message: "Error al actualizar la respuesta",
            OK: false,
            data: null
        };
    }
}