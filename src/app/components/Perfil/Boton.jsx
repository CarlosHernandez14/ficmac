
import { FaEdit } from "react-icons/fa";
function Boton() {
  return (
    <div>
      <button className="flex items-center px-10 py-2 rounded-2xl  text-white bg-[#753350] ">
        <FaEdit className="mr-2" />
        <p className="text-white whitespace-nowrap">Editar perfil</p>
      </button>
    </div>
  );
}

export default Boton