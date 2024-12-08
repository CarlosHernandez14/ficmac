"use server";

import { sendEmail } from "@/utils/mail.utils";

export async function enviarCorreoConfirmacion(destinatario, token) {
    const sender = {
        name: 'ONTEC',
        address: process.env.MAIL_USER,
    };

    const receipients = [{
        address: destinatario,
    }];

    const confirmLink = process.env.NODE_ENV === "production" ? `https://ficmac.vercel.app/auth/new-verification?token=${token}`:`http://localhost:3000/auth/new-verification?token=${token}`

    const htmlMessage = generarHtmlCorreo(confirmLink);

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: "Verifica tu cuenta ONTEC",
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


function generarHtmlCorreo(confirmLink) {
    return `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #4A90E2;">Hola!</h1>
        <p style="font-size: 16px; line-height: 1.5;">Da click <a href="${confirmLink}">"aquí"</a> para verificar tu correo!</p>
        <p style="font-size: 14px; color: #888;">Saludos,<br>El equipo de <strong>ONTEC</strong></p>
      </div>
    `;
}