import { prisma as db } from "@/libs/db";

// Funcion para obtener todos los medicamentos
/**
 * 
 * @returns {
    * OK: boolean, // Indica si la operacion fue exitosa
    * message: string, // Mensaje de la operacion
    * data: Medicamento[] // Arreglo con los medicamentos encontrados
 * }
 */
export const getMedicamentos = async () => {
    try {

        // Obtenemos todos los medicamentos
        const medicamentos = await db.Medicamento.findMany();

        // Retornamos el resultado
        return {
            OK: true,
            message: "Medicamentos encontrados",
            data: medicamentos
        }
        
    } catch (error) {
        console.error(error);
        // En caso de error
        return {
            OK: false,
            message: "Error al obtener los medicamentos",
            error: error
        }
    }
}

// Funcion para obtener un medicamento por su id
/**
 * 
 * @param {number} id - Id del medicamento a buscar
 * @returns {
    * OK: boolean, // Indica si la operacion fue exitosa
    * message: string, // Mensaje de la operacion
    * data: Medicamento // Medicamento encontrado
 * }
 */
export const getMedicamentoById = async (id) => {
    try {

        // Obtenemos el medicamento por su id
        const medicamento = await db.Medicamento.findUnique({
            where: {
                id: id
            }
        });

        // Retornamos el resultado
        return {
            OK: true,
            message: "Medicamento encontrado",
            data: medicamento
        }
        
    } catch (error) {
        console.error(error);
        // En caso de error
        return {
            OK: false,
            message: "Error al obtener el medicamento",
            error: error
        }
    }
}

// Funcion para crear un medicamento
/**
 * 
 * @param {
    * nombre: string, // Nombre del medicamento
    * descripcion: string, // Descripcion del medicamento
    * efectos_secundarios: string, // Efectos secundarios del medicamento
    * idTipoCancer: number, // Id del tipo de cancer al que pertenece el medicamento
 * } medicamento - Datos del medicamento a crear
 * @returns {
    * OK: boolean, // Indica si la operacion fue exitosa
    * message: string, // Mensaje de la operacion
    * data: Medicamento // Medicamento creado
 * }
 */

export const createMedicamento = async (medicamento) => {
    try {

        // Creamos el medicamento
        const newMedicamento = await db.Medicamento.create({
            data: {
                nombre: medicamento.nombre,
                descripcion: medicamento.descripcion,
                efectos_secundarios: medicamento.efectos_secundarios,
                Tipo_Cancer: {
                    connect: {
                        id: medicamento.idTipoCancer
                    }
                }
            }
        });

        // Retornamos el resultado
        return {
            OK: true,
            message: "Medicamento creado",
            data: newMedicamento
        }
        
    } catch (error) {
        console.error(error);
        // En caso de error
        return {
            OK: false,
            message: "Error al crear el medicamento",
            error: error
        }
    }
}

// Funcion para actualizar un medicamento
/**
 * 
 * @param {number} id - Id del medicamento a actualizar
 * @param {
    * nombre: string, //Nombre del medicamento
    * descripcion: string, // Descripcion del medicamento
    * efectos_secundarios: string, // Efectos secundarios del medicamento
    * idTipoCancer: number, // Id del tipo de cancer al que pertenece el medicamento
 * } medicamento - Datos del medicamento a actualizar
 * @returns {
    * OK: boolean, // Indica si la operacion fue exitosa
    * message: string, // Mensaje de la operacion
    * data: Medicamento // Medicamento actualizado
 * }
 */
export const updateMedicamento = async (id, medicamento) => {
    try {

        // Verificamos si el medicamento existe
        const medicamentoExist = await db.Medicamento.findUnique({
            where: {
                id: id
            }
        });

        // Si el medicamento no existe
        if (!medicamentoExist) {
            return {
                OK: false,
                message: "El medicamento no existe",
                error: "El medicamento no existe"
            }
        }

        // Actualizamos el medicamento
        const updatedMedicamento = await db.Medicamento.update({
            where: {
                id: id
            },
            data: {
                nombre: medicamento.nombre,
                descripcion: medicamento.descripcion,
                efectos_secundarios: medicamento.efectos_secundarios
            }
        });

        // Retornamos el resultado
        return {
            OK: true,
            message: "Medicamento actualizado",
            data: updatedMedicamento
        }
        
    } catch (error) {
        console.error(error);
        // En caso de error
        return {
            OK: false,
            message: "Error al actualizar el medicamento",
            error: error
        }
    }
}

// Funcion para eliminar un medicamento
/**
 * 
 * @param {number} id - Id del medicamento a eliminar
 * @returns {
    * OK: boolean, // Indica si la operacion fue exitosa
    * message: string, // Mensaje de la operacion
    * data: Medicamento // Medicamento eliminado
 * }
 */

export const deleteMedicamento = async (id) => {
    try {

        // Verificamos si el medicamento existe
        const medicamentoExist = await db.Medicamento.findUnique({
            where: {
                id: id
            }
        });

        // Si el medicamento no existe
        if (!medicamentoExist) {
            return {
                OK: false,
                message: "El medicamento no existe",
                error: "El medicamento no existe"
            }
        }

        // Eliminamos el medicamento
        const deletedMed = await db.Medicamento.delete({
            where: {
                id: id
            }
        });

        // Retornamos el resultado
        return {
            OK: true,
            message: "Medicamento eliminado",
            data: deletedMed
        }
        
    } catch (error) {
        console.error(error);
        // En caso de error
        return {
            OK: false,
            message: "Error al eliminar el medicamento",
            error: error
        }
    }
}


