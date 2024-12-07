// Test para las solicitudes de los pacientes

import { 
    createSolicitud,
    getAllSolicitudes,
    getSolicitudById,
    getSolicitudesByMedico,
    getSolicitudesByUser,
    updateSolicitud,
    deleteSolicitud 
} from "@/actions/estudios/solicitud.actions";

import {
    createEstudio,
    getAllEstudios,
    getEstudioById,
    updateEstudio,
    deleteEstudio
} from "@/actions/estudios/estudio.actions";

import { TipoEstudio, Especialidad, UserRole } from "@prisma/client";
import {prisma as db} from "@/libs/db";

describe('Pruebas para el módulo de solicitudes', () => {
    // Test 1: Prueba para createSolicitud

    // Variable para guardar el ID de una solicitud
    let solicitudId = 0;
    let estudioId = 0;
    let usuarioId = 0;
    let solicitudCreada = null;

    test('Debe crear una solicitud', async () => {
        // Crea un estudio para asociarlo a la solicitud
        const estudio = await createEstudio(
            'Estudio de prueba',
            'Estudio de prueba',
            100,
            TipoEstudio.BIOPSIA_LIQUIDA
        );

        estudioId = estudio.data.id;
        // console.log("Estudio: ", estudio);

        // Creamos un usuario
        const usuario = await db.User.create({
            data: {
                name: 'Usuario de prueba',
                email: 'prueba@gmail.com',
                password: '123456',
                role: UserRole.PACIENTE
            }
        });

        usuarioId = usuario.id;

        // path_orden_medica,
        // path_identificacion,
        // path_concentimiento,
        // path_voucher,
        // path_historia_clinica,
        // path_informe_patologia
        // Crea una solicitud
        const solicitud = await createSolicitud({
            idPaciente: usuario.id,
            idEstudio: estudio.data.id,
            path_orden_medica : 'path_orden_medica',
            path_identificacion : 'path_identificacion',
            path_concentimiento : 'path_concentimiento',
            path_voucher : 'path_voucher',
            path_historia_clinica : 'path_historia_clinica',
            path_informe_patologia : 'path_informe_patologia'
        });

        expect(solicitud.OK).toBe(true);
        expect(solicitud.data).toBeDefined();

        // Guarda el ID de la solicitud creada
        solicitudId = solicitud.data.id;
        solicitudCreada = solicitud.data;
    });

    

    // Test 2: Prueba para getSolicitudById
    test('Debe devolver una solicitud por su ID', async () => {
        const solicitud = await getSolicitudById(solicitudId);
        expect(solicitud.OK).toBe(true);
        expect(solicitud.data).toBeDefined();

        
    });

    // Test 3: Prueba para getAllSolicitudes
    test('Debe devolver una lista de solicitudes', async () => {
        const solicitudes = await getAllSolicitudes();
        expect(solicitudes.OK).toBe(true);
        expect(solicitudes.data).toBeInstanceOf(Array);
    });

    // Test 4: Prueba para getSolicitudesByUser
    test('Debe devolver una lista de solicitudes por usuario', async () => {
        const solicitudes = await getSolicitudesByUser(usuarioId);
        expect(solicitudes.OK).toBe(true);
        expect(solicitudes.data).toBeInstanceOf(Array);
        
    });

    // Test 5: Prueba para getSolicitudesByMedico
    test('Debe devolver una lista de solicitudes por médico', async () => {
        const solicitudes = await getSolicitudesByMedico(usuarioId);
        expect(solicitudes.OK).toBe(true);
        expect(solicitudes.data).toBeInstanceOf(Array);
    });

    // Test 6: Prueba para updateSolicitud
    test('Debe actualizar una solicitud', async () => {
        
        const solicitud = await updateSolicitud(
            solicitudId,
            solicitudCreada
        );

        if (!solicitud.OK) {
            console.log("Error: ", solicitud.error);
        }

        expect(solicitud.OK).toBe(true);
        expect(solicitud.data).toBeDefined();
    });

    // Test 7: Prueba para deleteSolicitud
    test('Debe eliminar una solicitud', async () => {
        const solicitud = await deleteSolicitud(solicitudId);

        if (!solicitud.OK) {
            console.log("Error: ", solicitud.error);
        }

        expect(solicitud.OK).toBe(true);
    });
});


