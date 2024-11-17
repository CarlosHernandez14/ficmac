import { getPasswordResetTokenByEmail, getVerificationTokenByEmail } from '@/actions/users/data';
import {v4 as uuidv4} from 'uuid';
import db from "@/libs/db"

/**
 * Función para generar un token de verificación
 * @param {String} email 
 */
export const generateVerificationToken = async (email) =>{
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    //Verificar si ya existe un token para el correo
    const existingToken = await getVerificationTokenByEmail(email)

    //Eliminar el token existente
    if(existingToken){
        await db.VerificationToken.delete({
            where: {id: existingToken.id},
        })
    }
    //Crear un nuevo token
    const verificationToken = await db.VerificationToken.create({
        data:{
            token: token,
            email: email,
            expires: expires
        }
    })
    return verificationToken.token
}

export const generatePasswordResetToken = async (email) =>{
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)
    const existingToken = await getPasswordResetTokenByEmail(email)

    if(existingToken){
        await db.PasswordResetToken.delete({
            where: {id: existingToken.id},
        })

        
    }

    const passwordResetToken = await db.PasswordResetToken.create({
        data:{
            token: token,
            email: email,
            expires: expires
        }
    })

    return passwordResetToken

}