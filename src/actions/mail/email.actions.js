
import { sendEmail } from "@/utils/mail.utils";

// Funcion para manejar el envio de correos

export async function enviarCorreo() {
    const sender = {
        name: 'Ficmac',
        address: 'no-reply@example.com'
    };

    const receipients = [{
        name: 'Ficmac',
        address: 'john.doe@example.com',
    }];

    try { 
        const result = await sendEmail({
            sender,
            receipients,
            subject: 'Correo de prueba',
            message: 'Este es un correo de prueba'
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