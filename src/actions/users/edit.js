"use server"
import db from "@/libs/db"
import {auth} from "@/auth"
import bcrypt from "bcryptjs"
import { generateVerificationToken } from "@/libs/tokens"
import { enviarCorreoConfirmacion } from "../mail/confirmation"

//Función para actualizar los datos de un paciente

export const updatePaciente = async (values) => {
    const session = await auth();
    const updateData = {};
    const updatePac = {};
    if (values.name) {
        const nameContainsNumbers = /\d/.test(values.name)
        updateData.name = values.name
        updatePac.nombre_completo = values.name
        if (nameContainsNumbers) {
            return {error: "El nombre no puede contener números"}
        }
      }
      if (values.password) {
        if (values.password.length < 6){
            return {error: "La contraseña debe tener al menos 6 caracteres"}
        }
        const hash = await bcrypt.hash(values.password, 10)
        updateData.password = hash
      }
      
      if (values.num_celular) {
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
        updateData.num_celular = values.num_celular
      }
      if(values.fecha_nac){
        updatePac.edad = new Date().getFullYear() - new Date(values.fecha_nac).getFullYear()
        console.log(updatePac.edad)
      }
      if(values.sexo){
        updatePac.sexo = values.sexo
      }
    if (values.email) {
        updateData.email = values.email
        try{
            db.User.update({
                where:{
                    id: session.user.id
                },
                emailVerified: null
            })
        }catch(ex){
            console.log(ex)
            return {error: ex.message}
        }
        const verificationToken = await generateVerificationToken(values.email)
        await enviarCorreoConfirmacion(values.email, verificationToken)
    }
    try{
        const paciente = await db.Paciente.findFirst({
            where:{
                idUsuario: session.user.id
            }
        })
        const[response, pacResponse] = await db.$transaction([
            db.User.update({
                where:{
                    id: session.user.id
                },
                data: updateData
            }),
            db.Paciente.update({
                where:{
                    id: paciente.id
                },
                data: updatePac
            })
        ])
        if(response && pacResponse){
            console.log(pacResponse)
            return {success: "Usuario actualizado"}
        }
    }catch(ex){
        console.log(ex)
        return {error: ex.message}
    }
     
}

//Función para actualizar la imagen de un paciente
export const updateImagePaciente = async (values) => {
    const session = await auth()
    //TODO: Subir imagen a cloudinary y agreagar lógica para actualizar la imagen del paciente
}

