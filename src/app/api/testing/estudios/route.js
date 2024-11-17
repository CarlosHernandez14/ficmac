import {
    getEstudios,
    getEstudioById
} from "@/actions/estudios/estudio.actions";

import { NextResponse } from "next/server";

export async function GET(req, res) {
    // Obtiene los estudios
    try {
        const estudios = await getEstudios();


        //console.log("Estudios:", estudios);

        // Obtiene estudios por id
        //const estudio = await getEstudioById(1);


        return NextResponse.json({
            estudios: estudios,
            //estudio: estudio
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