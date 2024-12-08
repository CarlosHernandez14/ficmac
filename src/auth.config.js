import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { userByEmail } from "@/actions/users/data"
import bcrypt from "bcryptjs"
 
//Configuración de autenticación
const authConfig = { providers: [
    //Autenticación con Google
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    //Autenticación con credenciales
    Credentials({
        async authorize(credentials){
            const user = await userByEmail(credentials.email)
            if(!user || !user.password){
                return null
            }
            const passwordMatch = await bcrypt.compare(credentials.password, user.password)
            
            if(passwordMatch){
                console.log("Usuario autenticado desde auth config:", user);
                return user
            }
            return null
        }
    }),
] }

export default authConfig