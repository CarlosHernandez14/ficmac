"use client";
import React, { useState, useTransition } from "react";
import IniciarSesionGoogle from "../General/IniciarSesionGoogle";
import DivisionComponentes from "../General/DivisionComponentes";
import { motion } from "framer-motion";
import { login } from "@/actions/users/login";
import ErrorBox from "../General/ErrorBox";
import { DNA } from "react-loader-spinner";
import { useRouter } from "next/navigation";

function CajaInicioSesion({ setShowLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [isPending, startTransition] = useTransition()
  const [errorResponse, setErrorResponse] = useState("")
  const router = useRouter();

  //VALIDAR LA CONTRASEÑA Y EL USUARIO
  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "El correo o teléfono es Incorrecto";
    if (!password) {
      newErrors.password = "La contraseña es incorrecta";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {

      const values = {
        email: e.target.username.value,
        password: e.target.password.value
      }
      startTransition(() => {
        login(values).then(
          (response) =>{
            if(response.error){
              console.log(response.error)
              setErrorResponse(response.error)
            }
            if(response.success){
              console.log(response.success)

            }
          })
      })
    }
  };

  const handleForgotPassword = () => {
    router.push('/auth/forgot-password')
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      className=" relative w-96"
    >
      <p className="text-2xl font-extrabold py-10 text-center  text-[#753350] underline">
        Iniciar sesión
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            disabled={isPending}
            placeholder="Correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">{errors.username}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            disabled={isPending}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        {errorResponse && (
            <div className="flex items-center justify-center">
                <ErrorBox error={errorResponse}/>
            </div>
          )}
        {isPending && (
          <div className="flex justify-center items-center">
            <DNA/>
          </div>
        )}
        
        {/* REDIRECCIONAR A PAGINA PRINCIPAL */}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#753350] hover:bg-[#a13c68] text-white text-xs font-bold py-2 px-16 rounded-3xl
            focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      {/* RECUPERACION DE CONTRASEÑA */}
      <div className="flex justify-end py-8 ">
        <button onClick={handleForgotPassword} className="text-[#753350] underline text-sm focus:outline-none font-extrabold">
          ¿Olvidaste tu contraseña?
        </button>
      </div>
      <DivisionComponentes color={"#753350"} />
      {/*<IniciarSesionGoogle />*/}
      <div className="flex justify-between py-6 px-12">
        <p className="text-[#753350] underline text-sm">
          ¿No tienes una cuenta?{" "}
        </p>
        {/* <Link href="/inicioSesion"> */}
        <button
          onClick={() => setShowLogin(false)}
          className="text-[#753350] underline text-sm font-extrabold"
        >
          Registrate
        </button>
        {/* </Link> */}
      </div>
    </motion.div>
  );
}

export default CajaInicioSesion;
