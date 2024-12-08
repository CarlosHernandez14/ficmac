"use server";

import { sendEmail } from "@/utils/mail.utils";

export async function enviarCorreoReset(destinatario, token) {
    const sender = {
        name: 'ONTEC',
        address: process.env.MAIL_USER,
    };

    const receipients = [{
        address: destinatario,
    }];

    const resetLink = process.env.NODE_ENV === "production" ? `http://ficmac.vercel.app/auth/new-password?token=${token}` : `http://localhost:3000/auth/new-password?token=${token}`

    const htmlMessage = generarHtmlCorreo(resetLink);

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: "Cambiar contraseña ONTEC",
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


function generarHtmlCorreo(resetLink) {
    return `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #4A90E2;">Hola!</h1>
        <p style="font-size: 16px; line-height: 1.5;">Da click <a href="${resetLink}">"aquí"</a> para cambiar tu contraseña!</p>
        <p style="font-size: 14px; color: #888;">Saludos,<br>El equipo de <strong>ONTEC</strong></p>
      </div>
    `;
}