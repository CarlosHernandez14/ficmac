// estudios.test.js

// Importa la función o módulo a probar
import { 
    getEstudios, getEstudioById, createEstudio, deleteEstudio
} from '@/actions/estudios/estudio.actions';
import { TipoEstudio } from '@prisma/client';

describe('Pruebas para el módulo de estudios', () => {
    // Test 1: Prueba para getEstudios
    test('Debe devolver una lista de estudios', async () => {
        const estudios = await getEstudios();

        expect(estudios.OK).toBe(true);
        expect(estudios.data).toBeInstanceOf(Array);
    });

    // Variable para guardar el ID de un estudio
    let estudioId = 0;

    // Test para crear un estudio
    test('Debe crear un estudio', async () => {
        const estudio = await createEstudio(
            'Estudio de prueba',
            'Estudio de prueba',
            100,
            TipoEstudio.BIOPSIA_LIQUIDA
        );
        expect(estudio.OK).toBe(true);
        expect(estudio.data).toBeDefined();

        // Guarda el ID del estudio creado
        estudioId = estudio.data.id;
    });

    // Test 2: Prueba para getEstudioById
    test('Debe devolver un estudio por su ID', async () => {
        const estudio = await getEstudioById(estudioId);
        expect(estudio.OK).toBe(true);
        expect(estudio.data).toBeDefined();
    });

    // Test 3: Prueba de manejo de errores
    test('Debe manejar errores si no se encuentra el ID', async () => {
        const estudio = await getEstudioById(-1); // Un ID que no exista
        expect(estudio.OK).toBe(false);
        expect(estudio.error).toBeDefined();
    });

    // Test 5: Prueba para eliminar un estudio
    test('Debe eliminar un estudio', async () => {
        const estudio = await deleteEstudio(estudioId);
        expect(estudio.OK).toBe(true);
    });
});