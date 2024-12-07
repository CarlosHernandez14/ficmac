"use server"

import {userByEmail} from "./data"
import { enviarCorreoReset } from "../mail/reset"
import { generatePasswordResetToken } from "@/libs/tokens"

/**
 * Enviar correo de reseteo de contraseña
 * @param {String} email 
 * @returns Success o Error
 */

export const reset = async (email) =>{
    const existingUser = await userByEmail(email)
    if(!existingUser){
        return {error: "Usuario no encontrado"}
    }

    const passwordResetToken = await generatePasswordResetToken(email)
    await enviarCorreoReset(passwordResetToken.email, passwordResetToken.token)

    return {success: "Correo enviado"}
}