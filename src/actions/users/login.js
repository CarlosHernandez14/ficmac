"use server"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"
import { generateVerificationToken } from "@/libs/tokens"
import { userByEmail } from "./data"

/**
 * Función para inicio se sesión con Credentials
 * @param {JSON} values 
 * @returns 
 */
export const login = async (values) =>{
    const existingUser = await userByEmail(values.email)
    if(!existingUser || !existingUser.email || !existingUser.password){
        return {error: "Correo o contraseña incorrectos"}
    }

    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email)

        return {success: "Confirmación de email enviada!"}
    }

    try{
        await signIn("credentials",{
            email: values.email,
            password: values.password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }catch(ex){
        if(ex instanceof AuthError){
            switch(ex.type){
                case "CredentialsSignin":
                    return {error: "Correo o contraseña incorrectos"}
                default:
                    return {error: "Error desconocido"}
            }
        }
        throw ex
    }
}

//Función para inicio de sesión con Google (Aún no funcional, bug de librería tentativamente)
export const loginGoogle = async () =>{
    try{
        await signIn("google",{
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }catch(ex){
        if(ex instanceof AuthError){
            switch(ex.type){
                case "CredentialsSignin":
                    return {error: "Correo o contraseña incorrectos"}
                default:
                    return {error: "Error desconocido"}
            }
        }
        throw ex
    }
}