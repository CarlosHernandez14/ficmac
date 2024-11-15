import React from "react";
import {
  FaHome,
  FaStethoscope,
  FaGraduationCap,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";
import NavbarItem from "./NavbarItem";

function NavbarGeneral() {
  return (
    <nav className="flex items-center flex justify-between bg-[#753350] p-6">
      <img src="/General/logoblanco.png" alt="logo" className="h-12" />
      <div className="flex space-x-8">
        <NavbarItem icon={FaHome} name="Inicio" href="/" />
        <NavbarItem icon={FaStethoscope} name="Estudios" href="/estudios" />
        <NavbarItem icon={FaGraduationCap} name="Educación" href="/educacion" />
        <NavbarItem icon={FaInfoCircle} name="Nosotros" href="/nosotros" />
        <NavbarItem icon={FaUser} name="Alejandro Gutiérrez" href="/perfil" />
      </div>
    </nav>
  );
}

export default NavbarGeneral;
