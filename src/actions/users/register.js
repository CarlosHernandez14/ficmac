"use server"
import db from "@/libs/db"
import bcrypt from "bcryptjs"
import { generateVerificationToken } from "@/libs/tokens"
import { enviarCorreoConfirmacion } from "../mail/confirmation"


//Función para registrar un usuario
export const register = async (values) =>{
    //Encriptar la contraseña
    const hash = await bcrypt.hash(values.password, 10)
    try{
    //Verificar si el correo ya está registrado
    const existingUser = await db.User.findUnique({
        where:{
            email: values.email
        }
    })
    if (existingUser){
        return {error: "El correo ya está registrado"}
    }
    //Registrar el usuario
        const response = await db.User.create({
            data:{
                email: values.email,
                name: values.name,
                num_celular: values.num_celular,
                password: hash,
                role: "PACIENTE"
            }        
        })

        const verificationToken = await generateVerificationToken(values.email)
        await enviarCorreoConfirmacion(values.email, verificationToken)
        return {success: "Confirmation email sent!"}
    }catch(ex){
        console.log(ex.message)
        return {error: ex.message}
    }
}