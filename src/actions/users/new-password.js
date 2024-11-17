"use server"
import { getPasswordResetTokenByToken, userByEmail } from "./data"
import bcrypt from "bcryptjs"
import db from "@/libs/db"

export const newPassword = async (password, token) => {

    if(!token){
        return {error: "Token inválido"}
    }

    //Buscar el token en la base de datos
    const existingToken = await getPasswordResetTokenByToken(token)
    if(!existingToken){
        return {error: "Token inválido"}
    }

    //Verificar si el token ha expirado
    const hasExpired = new Date(existingToken.expires) < new Date()

    //Si el token ha expirado, retornar un error
    if(hasExpired){
        return {error: "Token expirado"}
    }

    const existingUser = await userByEmail(existingToken.email)
    
    //Si el usuario no existe, retornar un error
    if(!existingUser){
        return {error: "Usuario no encontrado"}
    }
    //Encriptar la nueva contraseña
    console.log(`Previo hash: ${existingUser.password}`)
    const hash = await bcrypt.hash(password, 10)
    console.log(`Post hash: ${hash}`)
    console.log(password)

    //Actualizar la contraseña del usuario
    await db.User.update({
        where:{
            id: existingUser.id
        },
        data:{
            password: hash
        }
    })

    //Eliminar el token de la base de datos
    await db.passwordResetToken.delete({
        where:{
            id: existingToken.id
        }
    })

    return {success: "Password actualizada"}
}