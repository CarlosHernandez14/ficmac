import Link from "next/link";
import { FaEdit } from "react-icons/fa";
function Boton({ onClick, texto }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center px-10 py-2 rounded-2xl text-white bg-[#753350] shadow-lg"
      >
        <FaEdit className="mr-2" />
        <p className="text-white whitespace-nowrap">{texto}</p>
      </button>
    </div>
  );
}

export default Boton;
