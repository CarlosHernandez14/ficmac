import Link from "next/link";
import React from "react";

function NavbarItem({ icon: Icon, name, href }) {
  return (
    <Link
      href={href}
      className="text-white text-xl hover:bg-[#69AFEC] rounded-xl p-2 flex items-center space-x-3"
    >
      <Icon />
      <span>{name}</span>
    </Link>
  );
}

export default NavbarItem;
