import React from 'react'
import NavbarItem from './NavbarItem';
import {
  FaHome,
  FaStethoscope,
  FaGraduationCap,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";

function NavbarLogin() {
  return (
    <nav className="flex items-center flex justify-between p-6">
      <img src="/General/logoblanco.png" alt="logo" className="h-12" />
      <div className="flex space-x-8">
        <NavbarItem icon={FaHome} name="Inicio" href="/" />
        <NavbarItem icon={FaStethoscope} name="Estudios" href="/estudios" />
        <NavbarItem icon={FaGraduationCap} name="Educación" href="/educacion" />
        <NavbarItem icon={FaInfoCircle} name="Nosotros" href="/nosotros" />
      </div>
    </nav>
  );
}

export default NavbarLogin