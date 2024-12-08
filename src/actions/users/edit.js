"use server";
import db from "@/libs/db";
import { auth } from "@/auth";

import bcrypt from "bcryptjs";
import { generateVerificationToken } from "@/libs/tokens";
import { enviarCorreoConfirmacion } from "../mail/confirmation";
import { uploadImage } from "../cloudinary/cloudinary.actions";

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

//Función para obtener los datos de un paciente
export const getPacienteDataByIdUser = async (id) => {
  const paciente = await db.Paciente.findFirst({
    where: {
      idUsuario: id,
    },
  });
  return paciente;
};

//Función para actualizar los datos de un paciente
export const updatePaciente = async (values) => {
  console.log(values)
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
  if(values.contactoFamiliar){
    if (values.contactoFamiliar.length < 10) {
      return { error: "El número de celular del contacto familiar debe tener al menos 10 dígitos" };
    }
    if (values.contactoFamiliar.length > 10) {
      return { error: "El número de celular del contacto familiar no puede tener más de 10 dígitos" };
    }
    const numeroCelularEsNumero = /^\d+$/.test(values.contactoFamiliar);
    if (!numeroCelularEsNumero) {
      return { error: "El número de celular del contacto familiar debe contener solo números" };
    }
  }
  if(values.num_documento){
    const numeroDocumentoEsNumero = /^\d+$/.test(values.num_documento);
    if (!numeroDocumentoEsNumero) {
      return { error: "El número de documento debe contener solo números" };
    }
  }
  if(values.IPS){
    const IPSesNumero = /^\d+$/.test(values.IPS)
    if (!IPSesNumero) {
      return { error: "La IPS debe contener solo números" };
    }
  }
  if(values.EPS){
    const EPSesNumero = /^\d+$/.test(values.EPS)
    if (!EPSesNumero) {
      return { error: "La EPS debe contener solo números" };
    }
  }
  if(values.ParentescoFamiliar){
    const parentescoFamiliarContainsNumbers = /\d/.test(values.ParentescoFamiliar)
    if (parentescoFamiliarContainsNumbers) {
      return { error: "El parentesco familiar no puede contener números" }
    }
  }
  if(values.nacionalidad){
    const nacionalidadContainsNumbers = /\d/.test(values.nacionalidad)
    if (nacionalidadContainsNumbers) {
      return { error: "La nacionalidad no puede contener números" }
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
      if(paciente.direccion!= values.direccion){
        updatePac.direccion = values.direccion
      }
      if(paciente.tipo_documento!= values.tipo_documento){
        updatePac.tipo_documento = values.tipo_documento
      }
      if(paciente.num_documento!= values.num_documento){
        updatePac.num_documento = values.num_documento
      }
      if(paciente.nacionalidad!= values.nacionalidad){
        updatePac.nacionalidad = values.nacionalidad
      }
      if(paciente.IPS!= values.IPS){
        updatePac.IPS = values.IPS
      }
      if(paciente.EPS!= values.EPS){
        updatePac.EPS = values.EPS
      }
      if(paciente.ParentescoFamiliar!= values.ParentescoFamiliar){
        updatePac.ParentescoFamiliar = values.ParentescoFamiliar
      }
      if(paciente.contactoFamiliar!= values.contactoFamiliar){
        updatePac.contactoFamiliar = values.contactoFamiliar
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
      console.log("No hay paciente")
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
    //console.log(ex);
    return { error: ex.message };
  }
};

//Función para actualizar la imagen de un paciente
export const updateImagePaciente = async (values) => {
  console.log(values)
  const session = await auth();
  const paciente = await db.Paciente.findFirst({
    where: {
      idUsuario: session.user.id,
    },
  });
  if(paciente){
    try {
      const res = await uploadImage(values)
      if(res.OK){
        console.log("Entre");
        await db.Paciente.update({
          where: {
            id: paciente.id,
          },
          data: {
            imagen_url: res.data[0].secure_url,
            imagen_id: res.data[0].public_id,
          },
        });
        console.log(res.data);
        return {OK: true, success: "Imagen actualizada", data: res.data };
      }else {
        return {OK:false,  error: res.error };
      }
    } catch (error) {
      return { error: error.message };
    }
  }else{
    return { error: "No existe el paciente" };
  }
};

//Función para obtener el paciente de la sesión
export const getPaciente = async () => {
  const session = await auth();
  try {
    const paciente = await db.Paciente.findFirst({
      where: {
        idUsuario: session.user.id,
      },
    });
    return paciente;
  } catch (error) {
    return { error: error.message };
  }
};

//Funcion para crear un paciente await prisma.Paciente.create
export const createPaciente = async (values) => {
  const session = await auth();
  console.log("Creando paciente", values);
  try {
    const paciente = await db.Paciente.create({
      data: {
        nombre_completo: values.nombre,
        edad: parseInt(values.edad),
        direccion: values.direccion,
        sexo: values.sexo,
        num_celular: values.num_celular,
        idUsuario: session.user.id,
        tipo_documento: values.tipo_documento,
        num_documento: values.num_documento,
        nacionalidad: values.nacionalidad,
        IPS: values.IPS,
        EPS: values.EPS,
        ParentescoFamiliar: values.ParentescoFamiliar,
        contactoFamiliar: values.contactoFamiliar,
      },
    });
    
    return {
      OK: true,
      message: "Paciente creado en edit",
      data: paciente,
    }
  } catch (error) {
    console.log("Error", error)
    return {
      OK: false,
      message: "Error al crear el paciente",
      error: error,
      data: null,
    };
  }
};

//Funcion para obtener un usuario
export const getUser = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  const user = await db.User.findUnique({
    where: {
      id: session.user.id,
    },
  });
  return user;
}
