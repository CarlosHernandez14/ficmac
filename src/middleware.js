import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import {getToken} from "next-auth/jwt"

//Configuración de NextAuth
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
//Funciones de middleware
export default auth(async (req) => {
  //Declaración de variables
  const token =  await getToken({req, secret: process.env.AUTH_SECRET}) 
  const {nextUrl} = req
  const isLoggedIn = !!req.auth
  const isAdmin = isLoggedIn && token.role=== "ADMIN"
  const isMedical = isLoggedIn && token.role === "MEDICO"
  const isPacient = isLoggedIn && token.role === "PACIENTE"
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isMedicalRoute = medicalRoutes.includes(nextUrl.pathname)
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isPacientRoute = pacientRoutes.includes(nextUrl.pathname)

  //Verificar si es una ruta con prefijo de autenticación
  if(isApiAuthRoute){
    return null
  }

  //Verificar si es una ruta para autenticación
  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null
  }

  //Verificar si el usuario está autenticado y la ruta es privada
  if(!isLoggedIn && !isPublicRoute){
    //Redirigir a la página de inicio de sesión
    return Response.redirect(new URL("/auth/login", nextUrl))
  }

  //Verificar si el usuario tiene permisos para acceder a la ruta de médico
  if(isMedicalRoute && !isMedical){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  //Verificar si el usuario tiene permisos para acceder a la ruta de administrador
  if(isAdminRoute && !isAdmin){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  //Verificar si el usuario tiene permisos para acceder a la ruta de paciente
  if(isPacientRoute && !isPacient){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

   
})
 
//Expresión regular para protección de rutas de Next.js
export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',],
}