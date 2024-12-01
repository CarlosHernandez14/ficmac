// Test para los actions de medicamentos
import { 
    getMedicamentos,
    getMedicamentoById,
    createMedicamento,
    updateMedicamento,
    deleteMedicamento 
} from "@/actions/medicamentos/medicamento.actions";

import { prisma as db } from "@/libs/db";

describe('Pruebas para el módulo de medicamentos', () => {
    // Test 1: Prueba para getMedicamentos

    test('Debe obtener todos los medicamentos', async () => {
        const medicamentos = await getMedicamentos();

        // console.log("Medicamentos: ", medicamentos);

        expect(medicamentos.OK).toBe(true);
        expect(medicamentos.data).toBeInstanceOf(Array);
    });

    // Test 3: Prueba para createMedicamento
    let medicamentoId = 0;

    test('Debe crear un medicamento', async () => {

        // Creamos un tipo de cancer
        const tipoCancer = await db.Tipo_Cancer.create({
            data: {
                nombre: 'Tipo de cancer de prueba',
                descripcion: 'Tipo de cancer de prueba',
                path_imagen : 'path_imagen'
            }
        });

        const medicamentoResponse = await createMedicamento(
            {
                nombre: 'Medicamento de prueba',
                descripcion: 'Medicamento de prueba',
                efectos_secundarios: 'Medicamento de prueba',
                idTipoCancer: tipoCancer.id
            }
        );

        
        expect(medicamentoResponse.OK).toBe(true);
        expect(medicamentoResponse.data).toBeDefined();

        medicamentoId = medicamentoResponse.data?.id;
    });

    // Test 2: Prueba para getMedicamentoById

    test('Debe obtener un medicamento por su id', async () => {
        // Obtenemos el id de un medicamento
        const medicamento = await db.Medicamento.findFirst();

        // console.log("Medicamento: ", medicamento);

        const medicamentoEncontrado = await getMedicamentoById(medicamento.id);

        // console.log("Medicamento encontrado: ", medicamentoEncontrado);

        expect(medicamentoEncontrado.OK).toBe(true);
        expect(medicamentoEncontrado.data.id).toBe(medicamento.id);
    });

    // Test 4: Prueba para updateMedicamento

    test('Debe actualizar un medicamento', async () => {


        const medicamentoActualizado = await updateMedicamento(
            medicamentoId,
            {
                nombre: 'Medicamento de prueba actualizado',
                descripcion: 'Medicamento de prueba actualizado',
                efectos_secundarios: 'Medicamento de prueba actualizado'
            }
        );

        expect(medicamentoActualizado.OK).toBe(true);
        expect(medicamentoActualizado.data).toBeDefined();
    });

    // Test 5: Prueba para deleteMedicamento

    test('Debe eliminar un medicamento', async () => {
        const medicamentoEliminado = await deleteMedicamento(medicamentoId);

        expect(medicamentoEliminado.OK).toBe(true);
        expect(medicamentoEliminado.data).toBeDefined();

        // Eliminamos el tipo de cancer
        await db.Tipo_Cancer.delete({
            where: {
                id: medicamentoEliminado.data.idTipoCancer
            }
        });
    });
    
});