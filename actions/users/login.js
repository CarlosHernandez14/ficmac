"use server"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

export const login = async (values) =>{
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