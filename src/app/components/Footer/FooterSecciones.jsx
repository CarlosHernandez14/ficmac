import Link from 'next/link';
import React from 'react'

function FooterSecciones() {
  return (
    <div className="flex flex-col text-white ">
      <p className=" font-bold">O N T E C</p>
      <Link href={""}>
        <p className="hover:text-[#A0737D]">Inicio</p>
      </Link>
      <Link href={""}>
        <p className="hover:text-[#A0737D]">Estudios</p>
      </Link>
      <Link href={""}>
        <p className="hover:text-[#A0737D]">Educación</p>
      </Link>
      <Link href={""}>
        <p className="hover:text-[#A0737D]">Nosotros</p>
      </Link>
    </div>
  );
}

export default FooterSecciones