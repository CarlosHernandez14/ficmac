'use server'
import db from "@/libs/db"


/**
 * Función para obtener un usuario por su correo
 * @param {String} email 
 * @returns user
 */
export const userByEmail = async (email) => {
    const user = await db.User.findUnique({
        where:{
            email: email
        }
    })
    return user
}


/**
 * Función para obtener un usuario por su id
 * @param {String} id 
 * @returns user
 */
export const userById = async (id) => {
    //const foundUser = await auth() 
    const user = await db.User.findUnique({
        where:{
            id:id
        }
    })
    return user
}


/**
 * Función para verificar un toke existente por su token
 * @param {String} token 
 * @returns user
 */
export const getVerificationTokenByToken = async (token) => {
    try{
        const verificationToken = await db.VerificationToken.findUnique({
            where:{
                token: token
            }
        })
        return verificationToken
    }catch {
        return null
    }
}


/**
 * Función para verificar un token existente por su correo
 * @param {String} email 
 * @returns user
 */
export const getVerificationTokenByEmail = async (email) => {
    try{
        const verificationToken = await db.VerificationToken.findFirst({
            where:{
                email: email
            }
        })
        return verificationToken
    }catch {
        return null
    }
}


/**
 * Obtener un token de restablecimiento de contraseña por su token
 * @param String token 
 * @returns passwordResetToken
 */
export const getPasswordResetTokenByToken = async (token) => {
    try{
        const passwordResetToken = await db.PasswordResetToken.findUnique({
            where:{
                token: token
            }
        })
        return passwordResetToken
    }catch {
        return null
    }
}

/**
 * Obtener un token de restablecimiento de contraseña por su correo
 * @param {String} email 
 * @returns passwordResetToken
 */
export const getPasswordResetTokenByEmail = async (email) => {
    try{
        const passwordResetToken = await db.PasswordResetToken.findFirst({
            where:{
                email: email
            }
        })
        return passwordResetToken
    }catch {
        return null
    }
}
