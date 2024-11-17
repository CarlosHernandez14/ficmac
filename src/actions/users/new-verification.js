"use server"
import db from "@/libs/db"
import { userByEmail } from "./data"
import { getVerificationTokenByToken } from "./data"

export const newVerification = async (token) =>{
    const existingToken = await getVerificationTokenByToken(token)

    //Si el token no existe, retornar un error
    if(!existingToken){
        return {error: "Token inválido"}
    }

    //Verificar si el token ha expirado
    const hasExpired = new Date(existingToken.expires) < new Date()

    //Si el token ha expirado, retornar un error
    if(hasExpired){
        return {error: "Token expirado"}
    }

    //Buscar el usuario por el correo del token
    const existingUser = await userByEmail(existingToken.email)

    //Si el usuario no existe, retornar un error
    if(!existingUser){
        return {error: "Usuario no encontrado"}
    }
    console.log(existingToken.id)

    //Actualizar el usuario
    await db.User.update({
        where:{
            id: existingUser.id
        },
        data:{
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    //Eliminar el token de la base de datos
    await db.verificationToken.delete({
        where:{
            id: existingToken.id
        }
    })

    return {success: "Correo verificado"}
}