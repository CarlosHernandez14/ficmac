import React from "react";
import { FaArrowRight } from "react-icons/fa";

function ButtonPublicacion({link}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#a0737d] hover:bg-[#8d626b] text-white py-2 px-4 rounded-xl flex items-center space-x-2"
    >
      <span>Leer articulo completo</span>
      <FaArrowRight />
    </a>
  );
}

export default ButtonPublicacion;
