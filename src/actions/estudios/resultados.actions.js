// CRUD Server actions para manejar los resultados de las solicitudes de estudios
import { prisma as db, Especialidad, TipoEstudio, UserRole } from "@/libs/db";
import { connect } from "net";

// Funcion para obtener todos los resultados de las solicitudes de estudios
/*
    Retonra un objeto con la siguiente estructura:
    {
        OK: boolean, // Indica si la operacion fue exitosa
        message: string, // Mensaje de error o exito
        data: [], // Array con los resultados de las solicitudes de estudios
    }
*/
export const getAllResultados = async () => {
    try {
        const resultados = await db.resultado.findMany({
            include: {
                // Medico
                usuario: {
                    include: {
                        medico: true
                    }
                },
                tipo_cancer: true,
                // Solicitud de estudio
                solicitud_estudio: {
                    include: {
                        // Paciente
                        usuario: true,
                    }
                }
            }
        });

        return { OK: true, message: "Resultados encontrados", data: resultados };
    } catch (error) {
        return { OK: false, message: error.message, error: error };
    }
};

// Funcion para obtener un resultado de una solicitud de estudio por su ID
/*
    Parametros:
    - id: ID del resultado de la solicitud de estudio
    Retorna un objeto con la siguiente estructura:
    {
        OK: boolean, // Indica si la operacion fue exitosa
        message: string, // Mensaje de error o exito
        data: {}, // Objeto con el resultado de la solicitud de estudio
    }
*/

export const getResultadoById = async (id) => {
    try {
        const resultado = await db.solicitud_resultado.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                // Medico
                usuario: {
                    include: {
                        medico: true
                    }
                },
                tipo_cancer: true,
                // Solicitud de estudio
                solicitud_estudio: {
                    include: {
                        // Paciente
                        usuario: true,
                    }
                }
            }
        });

        if (!resultado) {
            return { OK: false, message: "Resultado no encontrado" };
        }

        return { OK: true, message: "Resultado encontrado", data: resultado };
    } catch (error) {
        return { OK: false, message: error.message, error: error };
    }
}

// Funcion para obtener los resultados de una solicitud de estudio por el id del medico
/*
    Parametros:
    - id: ID del medico
    Retorna un objeto con la siguiente estructura:
    {
        OK: boolean, // Indica si la operacion fue exitosa
        message: string, // Mensaje de error o exito
        data: [], // Array con los resultados de las solicitudes de estudios
    }
*/

export const getResultadosByMedicoId = async (id) => {
    try {
        const resultados = await db.resultado.findMany({
            where: {
                idMedico: parseInt(id),
            },
            include: {
                // Medico
                usuario: {
                    include: {
                        medico: true
                    }
                },
                tipo_cancer: true,
                // Solicitud de estudio
                solicitud_estudio: {
                    include: {
                        // Paciente
                        usuario: true,
                    }
                }
            }
        });

        return { OK: true, message: "Resultados encontrados", data: resultados };
    } catch (error) {
        return { OK: false, message: "Error al consultar los resultados del medico", error: error };
    }
}

// Funcion para obtener los resultados de una solicitud de estudio por el id del paciente
/*
    Parametros:
    - id: ID del paciente
    Retorna un objeto con la siguiente estructura:
    {
        OK: boolean, // Indica si la operacion fue exitosa
        message: string, // Mensaje de error o exito
        data: [], // Array con los resultados de las solicitudes de estudios
    }
*/

export const getResultadosByPacienteId = async (idPaciente) => {
    try {
        const resultados = await db.solicitud_resultado.findMany({
            where: {
                solicitud_estudio: {
                    idPaciente: parseInt(idPaciente),
                }
            },
            include: {
                // Medico
                usuario: {
                    include: {
                        medico: true
                    }
                },
                tipo_cancer: true,
                // Solicitud de estudio
                solicitud_estudio: {
                    include: {
                        // Paciente
                        usuario: true,
                    }
                }
            }
        });

        return { OK: true, message: "Resultados encontrados", data: resultados };
    } catch (error) {
        return { OK: false, message: "Error al buscar los resultados de la solicitud", error: error };
    }
}

// Funcion para crear un resultado de una solicitud de estudio
/*
    Parametros:
    - idSolicitudEstudio: ID de la solicitud de estudio
    - idMedico: ID del medico que realiza el resultado
    - idTipoCancer: ID del tipo de cancer
    - prueba: String con la prueba realizada
    - biopsia_remitida: String con la biopsia remitida
    - path_firma_sello: String con la ruta de la firma y sello del medico
    - cedula : String con la cedula del medico

    Retorna un objeto con la siguiente estructura:
    {
        OK: boolean, // Indica si la operacion fue exitosa
        message: string, // Mensaje de error o exito
        data: {}, // Objeto con el resultado de la solicitud de estudio
    }
*/

export const createResultado = async (idSolicitudEstudio, idMedico, idTipoCancer, prueba, biopsia_remitida, path_firma_sello, cedula) => {
    try {

        const [medico, resultado] = await db.$transaction([
            db.medico.findUnique({
                where: {
                    id: parseInt(idMedico),
                }
            }),
            db.resultado.create({
                data: {
                    solicitud_estudio: {
                        connect: {
                            id: parseInt(idSolicitudEstudio),
                        }
                    },
                    // Medico
                    usuario: {
                        connect: {
                            id: parseInt(idMedico),
                        }
                    },
                    tipo_cancer: {
                        connect: {
                            id: parseInt(idTipoCancer),
                        }
                    },
                    prueba: prueba,
                    biopsia_remitida: biopsia_remitida,
                    path_firma_sello: path_firma_sello,
                    cedula: cedula,
                    // Especialidad del medico (Consulta la especialidad del medico)
                    especialidad: medico?.especialidad,
                }
            })
        ]);
        

        return { OK: true, message: "Resultado creado", data: resultado };
    } catch (error) {
        return { OK: false, message: "Error al crear el resultado", error: error };
    }
}

// Funcion para actualizar un resultado de una solicitud de estudio
/*
    Parametros:
    - id: ID del resultado de la solicitud de estudio
    - Objeto son los campos a actualizar, campos posibles:
        - idSolicitudEstudio: ID de la solicitud de estudio
        - idMedico: ID del medico que realiza el resultado
        - idTipoCancer: ID del tipo de cancer
        - prueba: String con la prueba realizada
        - biopsia_remitida: String con la biopsia remitida
        - path_firma_sello: String con la ruta de la firma y sello del medico
        - cedula : String con la cedula

    Retorna un objeto con la siguiente estructura:
    {
        OK: boolean, // Indica si la operacion fue exitosa
        message: string, // Mensaje de error o exito
        data: {}, // Objeto con el resultado de la solicitud de estudio
    }
*/

export const updateResultado = async (idResultado, resultadoActualizado) => {
    try {
        
        const [solicitudResultado, resultTransaction] = await db.$transaction([
            db.solicitud_resultado.findUnique({
                where: {
                    id: parseInt(idResultado),
                }
            }),
            db.solicitud_resultado.update({
                where: {
                    id: parseInt(idResultado),
                },
                data: {
                    //Medico
                    usuario: {
                        connect: {
                            id: resultadoActualizado.idMedico ? parseInt(resultadoActualizado.idMedico) : solicitudResultado.idMedico,
                        }
                    },
                    tipo_cancer: {
                        connect: {
                            id: resultadoActualizado.idTipoCancer ? parseInt(resultadoActualizado.idTipoCancer) : solicitudResultado.idTipoCancer,
                        }
                    },
                    prueba: resultadoActualizado.prueba ?? solicitudResultado.prueba,
                    biopsia_remitida: resultadoActualizado.biopsia_remitida ?? solicitudResultado.biopsia_remitida,
                    path_firma_sello: resultadoActualizado.path_firma_sello ?? solicitudResultado.path_firma_sello,
                    cedula: resultadoActualizado.cedula ?? solicitudResultado.cedula,
                    especialidad: resultadoActualizado.especialidad ?? solicitudResultado.especialidad
                }
            })
        ]);

        return { OK: true, message: "Resultado actualizado", data: resultTransaction };
    } catch (error) {
        return { OK: false, message: "Error al actualizar el resultado", error: error };
    }
}

// Funcion para eliminar un resultado de una solicitud de estudio
/*
    Parametros:
    - id: ID del resultado de la solicitud de estudio
    Retorna un objeto con la siguiente estructura:
    {
        OK: boolean, // Indica si la operacion fue exitosa
        message: string, // Mensaje de error o exito
    }
*/

export const deleteResultado = async (id) => {
    try {
        const resultado = await db.solicitud_resultado.delete({
            where: {
                id: parseInt(id),
            }
        });

        return { OK: true, message: "Resultado eliminado", data: resultado };
    } catch (error) {
        return { OK: false, message: "Error al eliminar el resultado", error: error };
    }
}
