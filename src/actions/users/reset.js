"use server"

import {userByEmail} from "./data"
import { enviarCorreoReset } from "../mail/reset"
import { generatePasswordResetToken } from "@/libs/tokens"

export const reset = async (email) =>{
    const existingUser = await userByEmail(email)
    if(!existingUser){
        return {error: "Usuario no encontrado"}
    }

    const passwordResetToken = await generatePasswordResetToken(email)
    await enviarCorreoReset(passwordResetToken.email, passwordResetToken.token)

    return {success: "Correo enviado"}
}