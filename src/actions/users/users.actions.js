'use server';
// Actions para usuarios
import { prisma as db } from "@/libs/db";

// Funcion para obtener todos los usuarios
/**   
 * @returns {
 * OK: boolean, // Indica si la operacion fue exitosa
 * message: string, // Mensaje de la operacion
 * data: Usuario[] // Arreglo con los usuarios encontrados
 * }
 *  
 * */

export const getUsers = async () => {
    try {
        // Obtenemos todos los usuarios
        const users = await db.User.findMany({
            include: {
                Paciente: true,
            },
        });

        // Retornamos el resultado
        return {
            OK: true,
            message: "Usuarios encontrados",
            data: users,
        };
    } catch (error) {
        console.error(error);
        // En caso de error
        return {
            OK: false,
            message: "Error al obtener los usuarios",
            error: error,
        };
    }
};

// Funcion para editar un usuario
/**   
 * @param {number} id - Id del usuario
 * @param {object} values - Objeto con los valores a editar
 *  
 * @returns {
 * OK: boolean, // Indica si la operacion fue exitosa
 * message: string, // Mensaje de la operacion
 * data: Usuario // Usuario editado
 * }
 *  
 * */

export const editUser = async (id, values) => {
    try {
        // Editamos el usuario
        const user = await db.User.update({
            where: {
                id: id,
            },
            data: {
                ...values,
            },
        });

        // Retornamos el resultado
        return {
            OK: true,
            message: "Usuario editado",
            data: user,
        };
    } catch (error) {
        //console.error(error);
        // En caso de error
        return {
            OK: false,
            message: "Error al editar el usuario",
            error: error,
        };
    }
};
