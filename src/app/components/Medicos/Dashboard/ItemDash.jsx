import Link from "next/link";
import React from "react";

function ItemDash({ icon: Icon, name, href, className, onClick }) {
  return (
    <Link
      href={href}
      className={`text-xl hover:bg-[#a13c68] rounded-xl p-2 flex items-center space-x-3 text-white  ${className}`}
      onClick={onClick}
    >
      <Icon />
      <span>{name}</span>
    </Link>
  )
}

export default ItemDash