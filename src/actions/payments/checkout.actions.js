"use server";
import {
  ApiError,
  CheckoutPaymentIntent,
  Client,
  Environment,
  LogLevel,
  OrdersController,
} from "@paypal/paypal-server-sdk";


// Cliente de paypal para poder hacer las peticiones a la API de paypal
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: process.env.PAYPAL_CLIENT_ID,
    oAuthClientSecret: process.env.PAYPAL_SECRET,
  },
  timeout: 0,
  // Entorno en el que se va a trabajar con paypal : Sandbox (pruebas) o Production (producción)
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true,
    },
    logResponse: {
      logHeaders: true,
    },
  },
});

// Controller para manejar las ordenes
const ordersController = new OrdersController(client);

// Crear una orden de compra

/*
    Recibe un objeto con la siguiente estructura:
    - monto: number
    - descripcion: string

    Retorna un objeto con la siguiente estructura:
    - OK: boolean // Indica si la petición fue exitosa o no
    - status: number // Código de estado de la petición
    - orderID: string // ID de la orden de compra en caso de que se haya creado correctamente
    - message: string // Mensaje de la petición
    - data: object // Datos de la petición
    - error: object // En caso de que haya un error en la petición
*/

export const createPaypalOrder = async ({ valor, descripcion }) => {
  try {
    const { result, ...httpResponse } = await ordersController.ordersCreate({
      body: {
        intent: CheckoutPaymentIntent.Capture,
        purchaseUnits: [
          {
            amount: {
              currencyCode: "USD",
              value: valor.toString(), // Monto de la orden

              breakdown: {
                itemTotal: {
                  currencyCode: "USD",
                  value: valor.toString(), // Monto total de la orden
                },
              },
            },
            items: [
              {
                name: "Donacion",
                quantity: "1",
                description: descripcion,
                unitAmount: {
                  currencyCode: "USD",
                  value: valor.toString(),
                },
              },
            ],
          },
        ],
      },
      prefer: "return=minimal",
    });

    // Si la orden se creo correctamente

    if (httpResponse.statusCode === 201) {
      return {
        OK: true,
        status: 201,
        message: "Orden de compra creada correctamente",
        orderID: result.id,
        data: result,
      };
    }

    // Si hubo un error al crear la orden
    return {
      OK: false,
      status: 500,
      message: "No se pudo crear la orden de compra",
      error: result,
    };
  } catch (error) {
    console.log(error);

    // Si hubo un error al crear la orden
    if (error instanceof ApiError) {
      const { statusCode, result } = error;

      return {
        OK: false,
        status: statusCode,
        message: "Ocurrió un error al crear la orden de compra con PayPal",
        error: result ? JSON.parse(JSON.stringify(result)) : null, // Serializar error
      };
    }

    // Retornar cualquier otro error de forma segura
    return {
      OK: false,
      status: 500,
      message: "Ocurrió un error al crear la orden de compra",
      error: error ? JSON.parse(JSON.stringify(error)) : null, // Serializar error
    };
  }
};
