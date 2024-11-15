import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import {db} from "@/libs/db"
import authConfig from "@/auth.config"
import { userById } from "../actions/users/data";


export const {
    handlers:{GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async signIn({user}){
            const existingUser = await userById(user.id)
            if(!existingUser || existingUser.correoVerificado) return false
            return true
        },
        async session({token, session}){
            if(token.sub && session.user){
                session.user.id = token.sub
            } 

            if(token.rol && session.user){
                session.user.rol = token.rol
            }
            return session
        },
        async jwt({token}){

            if(!token.sub) return token

            const existingUser = await userById(token.sub)
            if(!existingUser) return token

            token.rol = existingUser.rol
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig,
})