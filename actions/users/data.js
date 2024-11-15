import db from "@/libs/db"

export const userByEmail = async (email) => {
    const user = await db.User.findUnique({
        where:{
            email: email
        }
    })
    return user
}

export const userById = async (id) => {
    const user = await db.User.findUnique({
        where:{
            id:id
        }
    })
    return user
}