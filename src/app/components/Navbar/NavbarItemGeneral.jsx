import Link from "next/link";
import React from "react";

function NavbarItemGeneral({ icon: Icon, name, href}) {
  return (
    <Link
      href={href}
      className="text-white text-xl hover:bg-[#a13c68] rounded-xl p-2 flex items-center space-x-3"
    >
      <Icon />
      <span>{name}</span>
    </Link>
  );
}

export default NavbarItemGeneral;
