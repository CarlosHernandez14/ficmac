"use server"
import db from "@/libs/db"
import bcrypt from "bcrypt"

export const register = async (values) =>{
    const hash = await bcrypt.hash(values.contrasena, 10)
    try{
        console.log(values)
        const response = await db.Usuario.create({
            data:{
                correo: values.correo,
                contrasena: hash,
                rol: 1  // 1 = Usuario  
            }        
        })
        
        return response
    }catch(ex){
        console.log(ex.message)
        return {error: ex.message}
    }
}