"use server"
import {prisma as db, UserRole } from "@/libs/db"
import bcrypt from "bcryptjs"
import { generateVerificationToken } from "@/libs/tokens"
import { enviarCorreoConfirmacion } from "../mail/confirmation"
import { revalidatePath } from "next/cache"

//Función para registrar un usuario
export const register = async (values) =>{
    if (!values.email || !values.password || !values.name || !values.num_celular){
        return {error: "Faltan datos"}
    }
    const nameContainsNumbers = /\d/.test(values.name)
    if (nameContainsNumbers) {
        return {error: "El nombre no puede contener números"}
    }
    if (values.password.length < 6){
        return {error: "La contraseña debe tener al menos 6 caracteres"}
    }
    if (values.num_celular.length < 10){
        return {error: "El número de celular debe tener al menos 10 dígitos"}
    }
    if (values.num_celular.length > 10){
        return {error: "El número de celular no puede tener más de 10 dígitos"}
    }
    const numeroCelularEsNumero = /^\d+$/.test(values.num_celular)
    if (!numeroCelularEsNumero){
        return {error: "El número de celular debe contener solo números"}
    }
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