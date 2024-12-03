"use client";
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaStethoscope,
  FaGraduationCap,
  FaInfoCircle,
  FaUser,
  FaComments,
  FaRibbon,
  FaPills,
  FaChevronDown,
  FaChevronUp,
  FaMicroscope,
} from "react-icons/fa";
import NavbarItemGeneral from "./NavbarItemGeneral";
import { getUser } from "@/actions/users/edit";

function NavbarGeneral() {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [pathname, setPathname] = useState("");

  const toggleEducationMenu = () => {
    setIsEducationOpen(!isEducationOpen);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      if (user) {
        setUserName(user.name);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const handleNavItemClick = (href) => {
    setPathname(href);
  };

  const isActive = (href) => pathname === href;

  const isEducationActive = () => {
    const educationRoutes = [
      "/Usuarios/Publicaciones",
      "/Usuarios/TiposCancer",
      "/Usuarios/Medicamentos",
    ];
    return educationRoutes.includes(pathname);
  };

  return (
    <nav className="flex items-center justify-between bg-[#753350] p-6">
      <img src="/General/logoblanco.png" alt="logo" className="h-12" />
      <div className="flex space-x-4">
        <NavbarItemGeneral
          icon={FaHome}
          name="Inicio"
          href="/Usuarios/Home"
          className={isActive("/Usuarios/Home") ? "bg-[#a13c68]" : "text-white"}
          onClick={() => handleNavItemClick("/Usuarios/Home")}
        />
        <NavbarItemGeneral
          icon={FaStethoscope}
          name="Estudios"
          href="/Usuarios/FormularioSolicitarEstudios"
          className={isActive("/Usuarios/FormularioSolicitarEstudios") ? "bg-[#a13c68]" : "text-white"}
          onClick={() => handleNavItemClick("/Usuarios/FormularioSolicitarEstudios")}
        />
        <div className="relative">
        <button
            className={`text-white text-xl rounded-xl p-2 flex items-center space-x-3 ${
              isEducationOpen || isEducationActive() ? "bg-[#a13c68]" : "hover:bg-[#a13c68]"
            }`}
            onClick={toggleEducationMenu}
          >
            <FaGraduationCap />
            <span>Educación</span>
            {isEducationOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isEducationOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-[#753350] rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li>
                  <NavbarItemGeneral
                    icon={FaMicroscope}
                    name="Investigaciones"
                    href="/Usuarios/Publicaciones"
                    className={isActive("/Usuarios/Publicaciones") ? "bg-[#a13c68]" : "text-white"}
                    onClick={() => handleNavItemClick("/Usuarios/Publicaciones")}
                  />
                </li>
                <li>
                  <NavbarItemGeneral
                    icon={FaRibbon}
                    name="Tipos de cáncer"
                    href="/Usuarios/TiposCancer"
                    className={isActive("/Usuarios/TiposCancer") ? "bg-[#a13c68]" : "text-white"}
                    onClick={() => handleNavItemClick("/Usuarios/TiposCancer")}
                  />
                </li>
                <li>
                  <NavbarItemGeneral
                    icon={FaPills}
                    name="Medicamentos"
                    href="/Usuarios/Medicamentos"
                    className={isActive("/Usuarios/Medicamentos") ? "bg-[#a13c68]" : "text-white"}
                    onClick={() => handleNavItemClick("/Usuarios/Medicamentos")}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
        <NavbarItemGeneral
          icon={FaComments}
          name="Foro"
          href="/Usuarios/Foro"
          className={isActive("/Usuarios/Foro") ? "bg-[#a13c68]" : "text-white"}
          onClick={() => handleNavItemClick("/Usuarios/Foro")}
        />
        <NavbarItemGeneral
          icon={FaInfoCircle}
          name="Nosotros"
          href="/Usuarios/nosotros"
          className={isActive("/Usuarios/nosotros") ? "bg-[#a13c68]" : "text-white"}
          onClick={() => handleNavItemClick("/Usuarios/nosotros")}
        />
        <NavbarItemGeneral
          icon={FaUser}
          name={userName}
          href="/Usuarios/Perfil"
          className={isActive("/Usuarios/Perfil") ? "bg-[#a13c68]" : "text-white"}
          onClick={() => handleNavItemClick("/Usuarios/Perfil")}
        />
      </div>
    </nav>
  );
}

export default NavbarGeneral;