// Manejo de solicitudes de los pacientes

import { prisma as db, TipoEstudio, Especialidad } from "@/libs/db";


// Funcion para obtener todas las solicitudes
/*
    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        data: []string // Arreglo con todas las solicitudes
    }
*/

export async function getAllSolicitudes() {
    try {
        const solicitudes = await db.Solicitud_Estudio.findMany({
            include: {
                usuario: true,
                estudio: true,
                medico: {
                    include: {
                        Medico: true
                    }
                }
            }
        });
        return {
            OK: true,
            message: "Solicitudes encontradas",
            data: solicitudes
        }
    } catch (error) {
        return {
            OK: false,
            message: "Error al buscar solicitudes",
            error: error
        }
    }
}


// Funcion para obtener una solicitud por su id
/*
    Recibe como parametro:
    - id: string // Id de la solicitud

    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        data: {} // Objeto con la solicitud
    }

*/

export async function getSolicitudById(id) {
    try {
        const solicitud = await db.Solicitud_Estudio.findUnique({
            where: {
                id
            },
            include: {
                usuario: true,
                estudio: true,
                medico: {
                    include: {
                        Medico: true
                    }
                }
            }
        });

        if (!solicitud) {
            return {
                OK: false,
                message: "La solicitud no existe",
                error: "La solicitud no existe"
            }
        }

        return {
            OK: true,
            message: "Solicitud encontrada",
            data: solicitud
        }
    } catch (error) {
        return {
            OK: false,
            message: "Error al buscar la solicitud",
            error: error
        }
    }
}

// Funcion para obtener las solicitudes de un usuario
/*
    Recibe como parametro:
    - id: string // Id del usuario

    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        data: [] // Arreglo con todas las solicitudes del usuario
    }

*/

export async function getSolicitudesByUser(id) {
    try {
        const solicitudes = await db.Solicitud_Estudio.findMany({
            where: {
                idPaciente: id
            },
            include: {
                usuario: true,
                estudio: true,
                medico: {
                    include: {
                        Medico: true
                    }
                }
            }
        });

        return {
            OK: true,
            message: "Solicitudes encontradas",
            data: solicitudes
        }
    } catch (error) {
        return {
            OK: false,
            message: "Error al buscar solicitudes",
            error: error
        }
    }
}

// Funcion para obtener las solicitudes de un medico

/*
    Recibe como parametro:
    - id: string // Id del medico

    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        data: [] // Arreglo con todas las solicitudes del medico
    }

*/

export async function getSolicitudesByMedico(id) {
    try {
        const solicitudes = await db.Solicitud_Estudio.findMany({
            where: {
                idMedico: id
            },
            include: {
                usuario: true,
                estudio: true,
                medico: {
                    include: {
                        Medico: true
                    }
                }
            }
        });
        return {
            OK: true,
            message: "Solicitudes encontradas",
            data: solicitudes
        }
    } catch (error) {
        return {
            OK: false,
            message: "Error al buscar solicitudes",
            error: error
        }
    }
}

// Funcion para crear una solicitud
/*
    Recibe como parametro:
    - idPaciente             String
    - idEstudio              Int
    - idMedico               Int
    - path_orden_medica      String
    - path_identificacion    String
    - path_concentimiento    String
    - path_voucher           String
    - path_historia_clinica  String
    - path_informe_patologia String

    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        message : "Solicitud creada", // Mensaje de exito
        data: {} // Objeto con la solicitud creada
    }

*/

export async function createSolicitud({
    idPaciente,
    idEstudio,
    path_orden_medica,
    path_identificacion,
    path_concentimiento,
    path_voucher,
    path_historia_clinica,
    path_informe_patologia
}) {
    try {
        console.log("ID ESTUDIO: ", idEstudio);
        // Verif
        const estudio = await db.Estudio.findUnique({
            where: {
                id: idEstudio
            }
        });
        if (!estudio) {
            // Arrojamos un error para que vaya al catch
            throw new Error("El estudio no existe");
        }
        const solicitud = await db.Solicitud_Estudio.create({
            data: {
                // id del paciente
                usuario: {
                    connect: {
                        id: idPaciente
                    }
                },
                // id del estudio
                estudio: {
                    connect: {
                        id: idEstudio
                    }
                },
                path_orden_medica,
                path_identificacion,
                path_concentimiento,
                path_voucher,
                path_historia_clinica,
                path_informe_patologia
            }
        });

        return {
            OK: true,
            message: "Solicitud creada",
            data: solicitud
        }
    } catch (error) {
        return {
            OK: false,
            message: "Error al crear la solicitud",
            error: error
        }
    }
}

// Funcion para actualizar una solicitud
/*
    Recibe como parametro:
    - id                    Int // Id de la solicitud
    Objeto con los campos a actualizar solicitudActualizada:{
    
        - idEstudio             Int
        - idMedico              Int
        - path_orden_medica     String
        - path_identificacion   String
        - path_concentimiento   String
        - path_voucher          String
        - path_historia_clinica String
        - path_informe_patologia String
        
    }

    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        message : "Solicitud actualizada", // Mensaje de exito
        data: {} // Objeto con la solicitud actualizada
    }

*/

export async function updateSolicitud(id, solicitudActualizada) {
    try {

        // Consultamos la solicitud
        const solicitudPrev = await db.Solicitud_Estudio.findUnique({
            where: {
                id
            }
        });

        if (!solicitudPrev) {
            throw new Error("La solicitud no existe");
        }

        const updatedRequest = await db.Solicitud_Estudio.update({
            where: {
                id
            },
            data: {
                estudio: {
                    connect: {
                        id: solicitudActualizada.idEstudio ?? solicitudPrev.idEstudio
                    }
                },
                // En caso de que la propiedad solicitudActualizada.idMedico este defida se hace el connect si no no se hace nada
                medico: solicitudActualizada.idMedico ? {
                    connect: {
                        id: solicitudActualizada.idMedico
                    }
                } : undefined,
                path_orden_medica: solicitudActualizada.path_orden_medica ?? solicitudPrev.path_orden_medica,
                path_identificacion: solicitudActualizada.path_identificacion ?? solicitudPrev.path_identificacion,
                path_concentimiento: solicitudActualizada.path_concentimiento ?? solicitudPrev.path_concentimiento,
                path_voucher: solicitudActualizada.path_voucher ?? solicitudPrev.path_voucher,
                path_historia_clinica: solicitudActualizada.path_historia_clinica ?? solicitudPrev.path_historia_clinica,
                path_informe_patologia: solicitudActualizada.path_informe_patologia ?? solicitudPrev.path_informe_patologia
            }
        });

        return {
            OK: true,
            message: "Solicitud actualizada",
            data: updatedRequest
        }
    } catch (error) {
        return {
            OK: false,
            message: "Error al actualizar la solicitud",
            error: error
        }
    }
}

// Funcion para eliminar una solicitud
/*
    Recibe como parametro:
    - id: Int // Id de la solicitud

    Retorna un objeto con la siguiente estructura:
    {
        OK: true, // Indica si la operacion fue exitosa
        message : "Solicitud eliminada", // Mensaje de exito
    }

*/

export async function deleteSolicitud(id) {
    try {
        
        // Trannsaccion para eliminar la solicitud

        const result = await db.$transaction(async (db) => {
            

            //Eliminamos el resultado de la solicitud si es que tiene

            await db.solicitud_resultado.deleteMany({
                where: {
                    idSolicitudEstudio: id
                }
            });

            // Eliminamos la solicitud
            const solicitud = await db.Solicitud_Estudio.delete({
                where: {
                    id
                }
            });

            return solicitud;
        });

        return {
            OK: true,
            message: "Solicitud eliminada",
            data: result
        }
    } catch (error) {
        return {
            OK: false,
            message: "Error al eliminar la solicitud",
            error: error
        }
    }
}

