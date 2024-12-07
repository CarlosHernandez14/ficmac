// CRUD Para las donaciones
"use server";
import { prisma } from "@/libs/db";

// Funcion para crear una donación
// Le mandamos el monto y el usuario que hizo la donación
/*
    Recibe un objeto con la siguiente estructura:
    - monto: number
    - user: string

    Retorna un objeto con la siguiente estructura:
    - OK: boolean // Indica si la petición fue exitosa o no
    - message: string // Mensaje de la petición
    - data: object // Datos de la petición
    - error: object // En caso de que haya un error en la petición
*/
export async function createDonacion(monto, user) {
  const montoFloat = parseFloat(monto);
  try {
    // Crear una donación
    const donacion = await prisma.Donacion.create({
      data: {
        idUsuario: user,
        cantidad: montoFloat,
      },
    });

    console.log("Donación creada:", donacion);
    return {
      OK: true,
      message: "Donación creada",
      data: donacion,
    };
  } catch (error) {
    console.table(error);
    return {
      OK: false,
      message: "Error al crear la donación",
      error: error,
      data: null,
    };
  }
}

// Funcion para obtener las donaciones
/*
    Retorna un objeto con la siguiente estructura:
    {
        OK: true|false, // Indica si la consulta fue exitosa
        message: "", // Mensaje de respuesta
        data: []|null // Arreglo con las donaciones encontradas
    }
*/
export async function getDonaciones() {
  try {
    // Consulta de todas las donaciones

    const donaciones = await prisma.Donacion.findMany();

    return {
      OK: true,
      message: "Donaciones encontradas",
      data: donaciones,
    };
  } catch (error) {
    console.table(error);
    return {
      OK: false,
      message: "Error al buscar las donaciones",
      error: error,
      data: null,
    };
  }
}
