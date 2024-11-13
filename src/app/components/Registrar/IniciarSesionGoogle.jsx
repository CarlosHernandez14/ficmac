import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

function IniciarSesionGoogle() {
  return (
    <div className="">
      <div className="flex justify-center py-0">
        <button
          className="flex items-center border border-spacing-2 hover:bg-gray-50 text-black 
          text-xs font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline"
          type="button"
        >
          <FcGoogle className="mr-2" /> Continua con Google
        </button>
      </div>
      <div className="flex justify-between  py-6 px-12">
        <p className="text-[#367B99] underline text-sm">
          ¿Ya tienes una cuenta?{" "}
        </p>
        <Link
          href="/inicioSesion"
          className="text-[#367B99] underline text-sm font-extrabold"
        >
          Inicia sesión
        </Link>
      </div>
    </div>
  );
}

export default IniciarSesionGoogle;
