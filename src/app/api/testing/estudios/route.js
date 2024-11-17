import {
    getEstudios,
    getEstudioById,
    createEstudio
} from "@/actions/estudios/estudio.actions";
import { TipoEstudio } from "@prisma/client";

import { NextResponse } from "next/server";

export async function GET(req, res) {
    // Obtiene los estudios
    try {
        

        // Creamos un estudio
        const nuevoEstudio = await createEstudio({
            nombre: "Estudio de prueba",
            descripcion: "Estudio de prueba",
            precio: 100,
            tipoEstudio: TipoEstudio.BIOPSIA_LIQUIDA
        });

        const estudios = await getEstudios();


        //console.log("Estudios:", estudios);

        // Obtiene estudios por id
        const estudio = await getEstudioById(1);
        

        return NextResponse.json({
            estudios: estudios,
            estudioById: estudio
        }, {
            status: 200
        });

    } catch (error) {
        console.log("Error:", error);


        return NextResponse.json({
            error: error
        }, {
            status: 500
        });
        
    }
}