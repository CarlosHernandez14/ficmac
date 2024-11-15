import db from "@/libs/db"

export const userByEmail = async (email) => {
    const user = await db.Usuario.findUnique({
        where:{
            correo: email
        }
    })
    return user
}

export const userById = async (id) => {
    const user = await db.Usuario.findUnique({
        where:{
            id:id
        }
    })
    return user
}