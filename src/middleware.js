import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import {getToken} from "next-auth/jwt"

import {
  publicRoutes,
  authRoutes,
  medicalRoutes,
  adminRoutes,
  apiAuthPrefix,
  pacientRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes"

const { auth } = NextAuth(authConfig)
 
export default auth(async (req) => {
  const token =  await getToken({req, secret: process.env.AUTH_SECRET}) 
  const {nextUrl} = req
  const isLoggedIn = !!req.auth
  const isAdmin = isLoggedIn && token.rol=== "ADMIN"
  const isMedical = isLoggedIn && token.rol === "MEDICO"
  const isPacient = isLoggedIn && token.rol === "PACIENTE"
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isMedicalRoute = medicalRoutes.includes(nextUrl.pathname)
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isPacientRoute = pacientRoutes.includes(nextUrl.pathname)

  if(isApiAuthRoute){
    return null
  }

  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null
  }

  if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/auth/login", nextUrl))
  }

  if(isMedicalRoute && !isMedical){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  if(isAdminRoute && !isAdmin){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  if(isPacientRoute && !isPacient){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

   
})
 
export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',],
}