"use server";
import db from "@/libs/db";
import { auth } from "@/auth";

import bcrypt from "bcryptjs";
import { generateVerificationToken } from "@/libs/tokens";
import { enviarCorreoConfirmacion } from "../mail/confirmation";

//Obtener pacientes byIdUser (Si no existe, retornar false y si si retornar true)
export const getPacienteByIdUser = async (id) => {
  const paciente = await db.Paciente.findFirst({
    where: {
      idUsuario: id,
    },
  });
  if (paciente) {
    return true;
  }
  return false;
};

//Función para actualizar los datos de un paciente
export const updatePaciente = async (values) => {
  const session = await auth()
  const user = await getUser()
  const updateData = {};
  const updatePac = {};
  if (values.nombre) {
    const nameContainsNumbers = /\d/.test(values.nombre)
    if (nameContainsNumbers) {
      return { error: "El nombre no puede contener números" }
    }
  }
  if(user.name!= values.nombre){
    updateData.name = values.nombre
    updatePac.nombre_completo = values.nombre
  }
  if (values.num_celular) {
    if (values.num_celular.length < 10) {
      return { error: "El número de celular debe tener al menos 10 dígitos" };
    }
    if (values.num_celular.length > 10) {
      return { error: "El número de celular no puede tener más de 10 dígitos" };
    }
    const numeroCelularEsNumero = /^\d+$/.test(values.num_celular);
    if (!numeroCelularEsNumero) {
      return { error: "El número de celular debe contener solo números" };
    }
  }
  if(user.num_celular!= values.num_celular){
    updateData.num_celular = values.num_celular
    updatePac.num_celular = values.num_celular
  }
  if (user.email != values.email) {
    updateData.email = values.email;
    try {
      db.User.update({
        where: {
          id: session.user.id,
        },
        emailVerified: null,
      });
    } catch (ex) {
      console.log(ex);
      return { error: ex.message };
    }
    const verificationToken = await generateVerificationToken(values.email);
    await enviarCorreoConfirmacion(values.email, verificationToken);
  }
  try {
    const paciente = await db.Paciente.findFirst({
      where: {
        idUsuario: session.user.id,
      },
    });
    if(paciente){
      if(paciente.edad!= values.edad){
        updatePac.edad = parseInt(values.edad)
      }
      if(paciente.sexo!= values.sexo){
        updatePac.sexo = values.sexo
      }
      const [response, pacResponse] = await db.$transaction([
        db.User.update({
          where: {
            id: session.user.id,
          },
          data: updateData,
        }),
        db.Paciente.update({
          where: {
            id: paciente.id,
          },
          data: updatePac,
        }),
      ]);
      if (response && pacResponse) {
        console.log(pacResponse);
        return { success: "Usuario actualizado" };
      }
    }
    else{
      try{
        await db.User.update({
          where: {
            id: session.user.id,
          },
          data: updateData
        })
      }catch(ex){
        console.log(ex);
        return { error: ex.message}
      }
      createPaciente(values)
    }
    
  } catch (ex) {
    console.log(ex);
    return { error: ex.message };
  }
};

//Función para actualizar la imagen de un paciente
export const updateImagePaciente = async (values) => {
  const session = await auth();
  //TODO: Subir imagen a cloudinary y agreagar lógica para actualizar la imagen del paciente
};

//Funcion para crear un paciente await prisma.Paciente.create
export const createPaciente = async (values) => {
  const session = await auth();
  
  try{
    const paciente = await db.Paciente.create({
      data: {
        nombre_completo: values.nombre,
        edad: parseInt(values.edad),
        direccion: "direccion",
        sexo: values.sexo,
        num_celular: values.num_celular,
        idUsuario: session.user.id,
        imagen_path: "foto",
      },
    });
    return {
      OK: true,
      message: "Paciente creado en edit",
      data: paciente,
    };
  }catch(error){
    return {
      OK: false,
      message: "Error al crear el paciente",
      error: error,
      data: null,
    };
  }
};

export const getUser = async () => {
  const session = await auth();
  const user = await db.User.findUnique({
    where: {
      id: session.user.id,
    },
  });
  return user;
}
