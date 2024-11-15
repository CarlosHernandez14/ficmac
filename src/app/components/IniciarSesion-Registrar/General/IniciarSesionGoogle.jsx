
import { FcGoogle } from "react-icons/fc";


function IniciarSesionGoogle({ setShowLogin }) {
  return (
    <div className="flex justify-center py-0">
      <button
        className="flex items-center border border-spacing-2 hover:bg-gray-50 text-black 
          text-xs font-bold py-2 px-20 rounded-xl focus:outline-none focus:shadow-outline"
        type="button"
      >
        <FcGoogle className="mr-2" /> Continua con Google
      </button>
    </div>
  );
}

export default IniciarSesionGoogle;
