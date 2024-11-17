"use server"
import {prisma as db, UserRole } from "@/libs/db"
import bcrypt from "bcryptjs"
import { generateVerificationToken } from "@/libs/tokens"
import { enviarCorreoConfirmacion } from "../mail/confirmation"
import { revalidatePath } from "next/cache"

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
        console.log("Antes de crear el usuario")

        const response = await db.User.create({
            data:{
                email: values.email,
                name: values.name,
                num_celular: values.num_celular,
                password: hash,
                role: UserRole.PACIENTE
            }        
        })

        const verificationToken = await generateVerificationToken(values.email)
        await enviarCorreoConfirmacion(values.email, verificationToken)
        revalidatePath('/auth/login')
        return {success: "Confirmation email sent!"}
    }catch(ex){
        console.log(ex)
        return {error: ex.message}
    }
}