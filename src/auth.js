import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import {db} from "@/libs/db"
import authConfig from "@/auth.config"
import { userById } from "@/actions/users/data";

//Configuracion de NextAuth
export const {
    //Funciones a exportar
    handlers:{GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    //Páginas de autenticación y error
    pages:{
        signIn: "/auth/login",
        //TODO: Crear página de error (front)
        error: "/auth/error",
    },
    //Eventos de autenticación para verificar el correo en caso de inicio con OAuth provider
    events:{
        async linkAccount({user}){
            await db.user.update({
                where: {id: user.id},
                data: {emailVerified: new Date()}
            })
        }
    },
    //Callbacks de autenticación
    callbacks: {
        //Verificar si el correo está verificado
       async signIn({user, account}){
            //Permite OAuth sin verificar el correo
             if(account?.provider !== "credentials") return true

            const existingUser =  await userById(user.id)
            //Verificar si el correo está verificado
            if(!existingUser?.emailVerified) return false
            
            return true
        },
        //Actualizar la sesión con el id del usuario y el rol para obtenerlo dentro de la app
        async session({token, session}){
            if(token.sub && session.user){
                session.user.id = token.sub
            } 

            if(token.rol && session.user){
                session.user.role = token.role
            }
            return session
        },
        //Actualizar el token con el rol del usuario para obtenerlo dentro del middleware
        async jwt({token}){

            if(!token.sub) return token

            const existingUser = await userById(token.sub)
            if(!existingUser) return token

            token.role = existingUser.role
            return token
        }
    },
    //Adaptador de Prisma
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig,
})