"use server";

import { sendEmail } from "@/utils/mail.utils";

// Funcion para manejar el envio de correos
/*
    La funcion recibe un objeto con los siguientes atributos:
    - destinatario: {
        name: String,
        address: String
    }
    - mensaje: String
    - subject: String (Asunto del correo)
    
    La funcion retorna un objeto con los siguientes atributos:
    - OK: Boolean
    - accepted: Array de Strings (direcciones de correo aceptadas)

*/
export async function enviarCorreo(destinatario, mensaje, subject) {
    const sender = {
        name: 'ONTEC',
        address: process.env.MAIL_USER,
    };

    const receipients = [{
        name: destinatario.name,
        address: destinatario.address,
    }];

    const htmlMessage = generarHtmlCorreo(destinatario.name, mensaje);

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: subject,
            message: htmlMessage,
        });

        // Return the json response
        return {
            OK: true,
            accepted: result.accepted,
        }
    } catch (error) {
        console.error(error);

        // Return the json response
        return {
            OK: false,
            message: 'Error al enviar el correo'
        }
    }
}


function generarHtmlCorreo(nombre, mensaje) {
    return `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #4A90E2;">Hola, ${nombre}!</h1>
        <p style="font-size: 16px; line-height: 1.5;">${mensaje}</p>
        <p style="font-size: 14px; color: #888;">Saludos,<br>El equipo de <strong>ONTEC</strong></p>
      </div>
    `;
}