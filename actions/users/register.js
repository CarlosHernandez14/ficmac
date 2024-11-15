"use server"
import db from "@/libs/db"
import bcrypt from "bcryptjs"

export const register = async (values) =>{
    //Encriptar la contrseña
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
                password: hash,
                role: "PACIENTE"
            }        
        })
        
        return {success: "Usuario registrado"}
    }catch(ex){
        console.log(ex.message)
        return {error: ex.message}
    }
}