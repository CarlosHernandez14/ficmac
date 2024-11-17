'use strict';
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import DivisionComponentes from "../General/DivisionComponentes";
import IniciarSesionGoogle from "../General/IniciarSesionGoogle";
import TerminosPoliticaPrivacidad from "./TerminosPoliticaPrivacidad";
import { register } from "@/actions/users/register";
import ErrorBox from "../General/ErrorBox";
import SuccessBox from "../General/SuccessBox";
import { DNA } from "react-loader-spinner";


function CajaRegistrar({ setShowLogin }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorResponse, setErrorResponse] = useState("");
  const [successResponse, setSuccessResponse] = useState("");
  const [isPending, startTransition] = useTransition()

  const validate = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = "El nombre completo es requerido";
    if (!phoneNumber)
      newErrors.phoneNumber = "El número de teléfono es requerido";
    if (!email) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorResponse(null)
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const values = {
        email: e.target.email.value,
        name: e.target.fullName.value,
        num_celular: e.target.phoneNumber.value,
        password: e.target.password.value
      }
      startTransition( () => {
        register(values).then(
          (response) => {
            if(response.error){
              console.log(response.error)
              setErrorResponse(response.error)
            }
            if(response.success){
              console.log(response.success)
              setSuccessResponse(response.success)
            }
          }
        )
      })
     
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      className="relative w-96 flex flex-col justify-between h-full "
    >
      <div>
        <p className="text-2xl font-extrabold py-0 text-center  text-[#367B99] underline mb-6">
          Registrate
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Nombre completo"
              maxLength={50}
              disabled={isPending}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs italic">{errors.fullName}</p>
            )}
          </div>
          <div className="mb-5">
            <input
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              maxLength={10}
              placeholder="Número de teléfono"
              disabled={isPending}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs italic">
                {errors.phoneNumber}
              </p>
            )}
          </div>
          <div className="mb-5">
            <input
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              maxLength={50}
              disabled={isPending}
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              disabled={isPending}
              placeholder="Contraseña"
              maxLength={30}
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
          {successResponse && (
            <div className="flex items-center justify-center">
                <SuccessBox success={successResponse}/>
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
              className="bg-[#367B99] hover:bg-[#3f8eb1] text-white text-xs font-bold py-2 px-16 rounded-3xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Crear cuenta
            </button>
          </div>
        </form>

        <DivisionComponentes color={"#367B99"} />
        {/*<IniciarSesionGoogle />*/}
        <div className="flex justify-between  py-6 px-12">
          <p className="text-[#367B99] underline text-sm">
            ¿Ya tienes una cuenta?{" "}
          </p>
          {/* <Link href="/inicioSesion"> */}
          <button
            onClick={() => setShowLogin(true)}
            className="text-[#367B99] underline text-sm font-extrabold"
          >
            Iniciar sesión
          </button>
          {/* </Link> */}
        </div>
        <TerminosPoliticaPrivacidad />
      </div>
    </motion.div>
  );
}

export default CajaRegistrar;
