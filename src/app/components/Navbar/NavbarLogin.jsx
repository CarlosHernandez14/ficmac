import React from 'react'
import NavbarItemLogin from './NavbarItemLogin';
import {
  FaHome,
  FaStethoscope,
  FaGraduationCap,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";

function NavbarLogin({color}) {
  return (
    <nav className="flex items-center justify-between p-6 z-50">
      <img src="/General/logoblanco.png" alt="logo" className="h-12"/>
      <div className="flex space-x-8">
        <NavbarItemLogin icon={FaHome} name="Inicio" href="/" color={color}/>
        <NavbarItemLogin icon={FaGraduationCap} name="Educación" href="/educacion" color={color}/>
        <NavbarItemLogin icon={FaInfoCircle} name="Nosotros" href="/nosotros" color={color}/>
        <NavbarItemLogin icon={FaStethoscope} name="Estudios" href="/estudios" color={color}/>
      </div>
    </nav>
  );
}

export default NavbarLogin