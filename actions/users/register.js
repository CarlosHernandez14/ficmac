"use server"
import db from "@/libs/db"
import bcrypt from "bcrypt"

export const register = async (values) =>{
    //Encriptar la contrseña
    const hash = await bcrypt.hash(values.contrasena, 10)
    try{
    //Verificar si el correo ya está registrado
    const existingUser = await db.Usuario.findUnique({
        where:{
            correo: values.correo
        }
    })
    if (existingUser){
        return {error: "El correo ya está registrado"}
    }
    console.log(values)
    //Registrar el usuario
        const response = await db.Usuario.create({
            data:{
                correo: values.correo,
                contrasena: hash,
                rol: 1  // 1 = Usuario  
            }        
        })
        
        return {success: "Usuario registrado"}
    }catch(ex){
        console.log(ex.message)
        return {error: ex.message}
    }
}