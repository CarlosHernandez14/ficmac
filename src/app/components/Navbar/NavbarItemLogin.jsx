import Link from "next/link";
import React from 'react'

function NavbarItemLogin({ icon: Icon, name, href, color}) {
  return (
    <Link
      href={href}
      className="text-white text-xl rounded-xl p-2 flex items-center space-x-3 hover:bg-white"
      onMouseEnter={(e) => {
        e.currentTarget.style.color = color; // Cambia el color al hacer hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = ""; // Restaura el color original
      }}
    >
      <div
        className="flex items-center space-x-3 w-full h-full"
      >
        <Icon />
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default NavbarItemLogin