"use client";

export const dynamic = 'force-dynamic';

import React, { Suspense, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/users/new-password";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DNA } from "react-loader-spinner";
import SuccessBox from "@/app/components/IniciarSesion-Registrar/General/SuccessBox";
import ErrorBox from "@/app/components/IniciarSesion-Registrar/General/ErrorBox";

const NewPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [errorResponse, setErrorResponse] = useState("");
  const [successResponse, setSuccessResponse] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!password) {
      newErrors.password = "La contraseña es incorrecta";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    return newErrors;
  };

  const redirectLogin = () => {
    router.replace("/auth/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorResponse(null);
    setSuccessResponse(null);
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      startTransition(() => {
        newPassword(e.target.password.value, token).then((response) => {
          if (response.error) {
            console.log(response.error);
            setErrorResponse(response.error);
          }
          if (response.success) {
            console.log(response.success);
            setSuccessResponse(response.success);
          }
        });
      });
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at center,  transparent, #753350), url('/inicio_sesion.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bg-white h-auto w-auto rounded-3xl shadow-2xl py-5 px-10  overflow-hidden max-w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 500, opacity: 0 }}
          className=" relative w-96"
        >
          <p className="text-2xl font-extrabold py-5 text-center  text-[#753350] underline">
            Cambiar contraseña
          </p>
          <form onSubmit={handleSubmit}>
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
                <ErrorBox error={errorResponse} />
              </div>
            )}
            {successResponse && (
              <div className="flex items-center justify-center">
                <SuccessBox success={successResponse} />
              </div>
            )}
            {isPending && (
              <div className="flex justify-center items-center">
                <DNA />
              </div>
            )}

            {/* REDIRECCIONAR A PAGINA PRINCIPAL */}
            <div className="flex items-center justify-center">
              <button
                className="bg-[#753350] hover:bg-[#a13c68] text-white text-xs font-bold py-2 px-16 rounded-3xl
                  focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Reestablecer contraseña
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center pt-3">
            <button
              onClick={redirectLogin}
              className=" text-[#753350] rounded-xl p-1 pb-5 w-1/2 hover:underline text-sm"
            >
              Volver a iniciar sesión
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Wrap with Suspense in the export
const WrappedNewPassword = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <NewPassword />
  </Suspense>
);

export default WrappedNewPassword;
