// CRUD Para los estudios

import { prisma as db, TipoEstudio } from "@/libs/db";

// Funcion para obtener los estudios
/*
    Retorna un objeto con la siguiente estructura:
    {
        OK: true|false, // Indica si la consulta fue exitosa
        message: "", // Mensaje de respuesta
        data: []|null // Arreglo con los estudios encontrados
    }
*/
export async function getEstudios() {
    try {
        // Consulta de todos los estudios
        const estudios = await db.Estudio.findMany();
        return {
            OK: true,
            message: "Estudios encontrados",
            data: estudios
        };
    } catch (error) {
        return {
            OK: false,
            message: "Error al buscar los estudios",
            data: null
        };
    }
}

// Funcion para obtener un estudio por su ID
/*
    Recibe como parametro:
    - idEstudio: int ID del estudio a buscar

    Retorna un objeto con la siguiente estructura:
    {
        OK: true|false, // Indica si la consulta fue exitosa
        message: "", // Mensaje de respuesta
        data: {}|null // Objeto con el estudio encontrado
    }
*/

export async function getEstudioById(idEstudio) {
    try {
        // Consulta de un estudio por su ID
        const estudio = await db.estudio.findUnique({
            where: {
                id: idEstudio
            }
        });
        return {
            OK: true,
            message: "Estudio encontrado",
            data: estudio
        };
    } catch (error) {
        return {
            OK: false,
            message: "Error al buscar el estudio",
            data: null
        };
    }
}

// Funcion para crear un estudio
/*
    Recibe como parametro:
    - nombre: string Nombre del estudio
    - descripcion: string Descripcion del estudio
    - tipoEstudio: TipoEstudio Tipo de estudio (enum)
    - precio: float Precio del estudio

    Retorna un objeto con la siguiente estructura:
    {
        OK: true|false, // Indica si la consulta fue exitosa
        message: "", // Mensaje de respuesta
        data: {}|null // Objeto con el estudio creado
    }
*/
export async function createEstudio(nombre, descripcion, precio, tipoEstudio = TipoEstudio.BIOPSIA_LIQUIDA) {
    try {
        // Creacion de un nuevo estudio
        const estudio = await db.estudio.create({
            data: {
                nombre,
                descripcion,
                precio,
                // Tipo de estudio en caso de que se haya enviado, el tipo es un enum
                tipo: tipoEstudio
            }
        });
        return {
            OK: true,
            message: "Estudio creado",
            data: estudio
        };
    } catch (error) {
        return {
            OK: false,
            message: "Error al crear el estudio",
            data: null
        };
    }
}

// Funcion para actualizar un estudio
/*
    Recibe como parametro:
    - idEstudio: int ID del estudio a actualizar
    - estudio: object Objeto con los datos a actualizar :
        - nombre: string Nombre del estudio
        - descripcion: string Descripcion del estudio
        - tipoEstudio: TipoEstudio Tipo de estudio (enum)
        - precio: float Precio del estudio

    Retorna un objeto con la siguiente estructura:
    {
        OK: true|false, // Indica si la consulta fue exitosa
        message: "", // Mensaje de respuesta
        data: {}|null // Objeto con el estudio actualizado
    }
*/

export async function updateEstudio(idEstudio, estudio) {
    try {
        // Construir dinámicamente el objeto data excluyendo valores undefined
        const data = {};
        if (estudio.nombre !== undefined) data.nombre = estudio.nombre;
        if (estudio.descripcion !== undefined) data.descripcion = estudio.descripcion;
        if (estudio.precio !== undefined) data.precio = estudio.precio;
        if (estudio.tipoEstudio !== undefined) data.tipo = estudio.tipoEstudio;

        // Si no hay campos para actualizar, evita la llamada innecesaria
        if (Object.keys(data).length === 0) {
            return {
                OK: false,
                message: "No se enviaron datos para actualizar",
                data: null,
            };
        }

        // Transaccion para actualizar el estudio
        const result = await db.$transaction(async (db) => {
            // Consultamos el estudio para verificar que exista
            const estudioExistente = await db.estudio.findUnique({
                where: {
                    id: idEstudio
                }
            });

            // Si no existe el estudio, se retorna un error
            if (!estudioExistente) {
                return {
                    OK: false,
                    message: "El estudio no existe",
                    data: null
                };
            }


            // Actualizacion de un estudio
            const estudio = await db.estudio.update({
                where: {
                    id: idEstudio
                },
                data: {
                    // Si existe el nombre en el objeto estudio, se actualiza, sino se mantiene el mismo
                    nombre: data.nombre ?? estudioExistente.nombre,
                    descripcion: data.descripcion ?? estudioExistente.descripcion,
                    precio: data.precio ?? estudioExistente.precio,
                    tipo: data.tipo ?? estudioExistente.tipo
                }
            });
        });


        return {
            OK: true,
            message: "Estudio actualizado",
            data: estudio
        };
    } catch (error) {
        return {
            OK: false,
            message: "Error al actualizar el estudio",
            data: null
        };
    }
}

// Funcion para eliminar un estudio
/*
    Recibe como parametro:
    - idEstudio: int ID del estudio a eliminar

    Retorna un objeto con la siguiente estructura:
    {
        OK: true|false, // Indica si la consulta fue exitosa
        message: "", // Mensaje de respuesta
        data: {}|null // Objeto con el estudio eliminado
    }
*/

export async function deleteEstudio(idEstudio) {
    try {
        // Transaccion para eliminar el estudio
        const result = await db.$transaction(async (db) => {
            // Consultamos el estudio para verificar que exista
            const estudioExistente = await db.estudio.findUnique({
                where: {
                    id: idEstudio
                }
            });

            // Si no existe el estudio, se retorna un error
            if (!estudioExistente) {
                return {
                    OK: false,
                    message: "El estudio no existe",
                    data: null
                };
            }

            // Eliminamos las solicitudes asociadas al estudio
            await db.Solicitud_Estudio.deleteMany({
                where: {
                    idEstudio: idEstudio
                }
            });

            // Eliminamos el estudio
            const estudio = await db.estudio.delete({
                where: {
                    id: idEstudio
                }
            });
            
            // Retornamos el estudio eliminado
            return estudio;
        });

        return {
            OK: true,
            message: "Estudio eliminado",
            data: result
        };
    } catch (error) {
        return {
            OK: false,
            message: "Error al eliminar el estudio",
            data: null
        };
    }
}
