import React from "react";
import {
  FaHome,
  FaStethoscope,
  FaGraduationCap,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";
import NavbarItemGeneral from "./NavbarItemGeneral";


function NavbarGeneral() {
  return (
    <nav className="flex items-center flex justify-between bg-[#753350] p-6">
      <img src="/General/logoblanco.png" alt="logo" className="h-12" />
      <div className="flex space-x-8">
        <NavbarItemGeneral icon={FaHome} name="Inicio" href="/" />
        <NavbarItemGeneral icon={FaStethoscope} name="Estudios" href="/estudios" />
        <NavbarItemGeneral icon={FaGraduationCap} name="Educación" href="/educacion" />
        <NavbarItemGeneral icon={FaInfoCircle} name="Nosotros" href="/nosotros" />
        <NavbarItemGeneral icon={FaUser} name="Alejandro Gutiérrez" href="/perfil" />
      </div>
    </nav>
  );
}

export default NavbarGeneral;
