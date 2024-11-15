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
        async session({token, session}){
            if(token.sub && session.user){
                session.user.id = token.sub
            } 

            if(token.rol && session.user){
                session.user.role = token.role
            }
            return session
        },
        async jwt({token}){

            if(!token.sub) return token

            const existingUser = await userById(token.sub)
            if(!existingUser) return token

            token.role = existingUser.role
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig,
})