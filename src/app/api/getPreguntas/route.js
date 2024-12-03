// src/app/api/getPreguntas/route.js
import db from "@/libs/db"; 

export async function GET() {
  try {
    const preguntas = await db.Pregunta_Frecuente.findMany();
    return new Response(
      JSON.stringify({ success: true, preguntas }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Error al obtener preguntas" }),
      { status: 500 }
    );
  }
}
