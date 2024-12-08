"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import NavbarItemGeneral from "./NavbarItemGeneral";
import { getUser } from "@/actions/users/edit";
import { handleLogout } from "@/actions/authActions/authActions";

function NavbarGeneral() {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [pathname, setPathname] = useState("");
  const [isOpaque, setIsOpaque] = useState(false);

  const toggleEducationMenu = () => {
    setIsEducationOpen(!isEducationOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();

      //console.log("LOGGED USER:", user);
      if (user != null) {
        setUserName(user.name);
      }
    };

    fetchUser();
  }, []);

  // Forzamos rerender al cambiar de ruta
  //setUserName(userName);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const handleNavItemClick = (href) => {
    setPathname(href);
    setIsEducationOpen(false);
    setIsProfileOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      (isEducationOpen || isProfileOpen) &&
      !event.target.closest(".dropdown")
    ) {
      setIsEducationOpen(false);
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEducationOpen, isProfileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href) => pathname === href;

  const isEducationActive = () => {
    const educationRoutes = [
      "/Usuarios/Publicaciones",
      "/Usuarios/TiposCancer",
      "/Usuarios/Medicamentos",
    ];
    return educationRoutes.includes(pathname);
  };

  const isProfileActive = () => {
    const profileRoutes = ["/Usuarios/Perfil", "/Usuarios/EditarPerfil"];
    return profileRoutes.includes(pathname);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full p-6 z-50 bg-[#753350]`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpaque ? 0.9 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <img
          src="/General/logoblanco.png"
          alt="logo"
          className="h-12 cursor-pointer"
          onClick={handleLogoClick}
        />
        <div className="flex space-x-4">
          <NavbarItemGeneral
            icon={FaHome}
            name="Inicio"
            href="/Usuarios/Home"
            className={
              isActive("/Usuarios/Home") ? "bg-[#a13c68]" : "text-white"
            }
            onClick={() => handleNavItemClick("/Usuarios/Home")}
          />
          <NavbarItemGeneral
            icon={FaStethoscope}
            name="Estudios"
            href="/Usuarios/FormularioSolicitarEstudios"
            className={
              isActive("/Usuarios/FormularioSolicitarEstudios")
                ? "bg-[#a13c68]"
                : "text-white"
            }
            onClick={() =>
              handleNavItemClick("/Usuarios/FormularioSolicitarEstudios")
            }
          />
          <div className="relative dropdown">
            <button
              className={`text-white text-xl rounded-xl p-2 flex items-center space-x-3 ${
                isEducationOpen || isEducationActive()
                  ? "bg-[#a13c68]"
                  : "hover:bg-[#a13c68]"
              }`}
              onClick={toggleEducationMenu}
            >
              <FaGraduationCap />
              <span>Educación</span>
              {isEducationOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isEducationOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#753350] rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <NavbarItemGeneral
                      icon={FaMicroscope}
                      name="Investigaciones"
                      href="/Usuarios/Publicaciones"
                      className={
                        isActive("/Usuarios/Publicaciones")
                          ? "bg-[#a13c68]"
                          : "text-white"
                      }
                      onClick={() =>
                        handleNavItemClick("/Usuarios/Publicaciones")
                      }
                    />
                  </li>
                  <li>
                    <NavbarItemGeneral
                      icon={FaRibbon}
                      name="Tipos de cáncer"
                      href="/Usuarios/TiposCancer"
                      className={
                        isActive("/Usuarios/TiposCancer")
                          ? "bg-[#a13c68]"
                          : "text-white"
                      }
                      onClick={() =>
                        handleNavItemClick("/Usuarios/TiposCancer")
                      }
                    />
                  </li>
                  <li>
                    <NavbarItemGeneral
                      icon={FaPills}
                      name="Medicamentos"
                      href="/Usuarios/Medicamentos"
                      className={
                        isActive("/Usuarios/Medicamentos")
                          ? "bg-[#a13c68]"
                          : "text-white"
                      }
                      onClick={() =>
                        handleNavItemClick("/Usuarios/Medicamentos")
                      }
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
            className={
              isActive("/Usuarios/Foro") ? "bg-[#a13c68]" : "text-white"
            }
            onClick={() => handleNavItemClick("/Usuarios/Foro")}
          />
          <NavbarItemGeneral
            icon={FaInfoCircle}
            name="Nosotros"
            href="/Usuarios/nosotros"
            className={
              isActive("/Usuarios/nosotros") ? "bg-[#a13c68]" : "text-white"
            }
            onClick={() => handleNavItemClick("/Usuarios/nosotros")}
          />
          
          {/* Si no hay usuario logueado mostrar el boton de login */}
          {
            userName === "" ? (
              <NavbarItemGeneral
                icon={FaUser}
                name="Iniciar sesión"
                href="/auth/login"
                onClick={() => handleNavItemClick("/auth/login")}
              />
            ) : null
          }

          {/* Dropdown para perfil */}
          <div className={userName === "" ? "hidden" : "relative dropdown"}>
            <button
              className={`text-white text-xl rounded-xl p-2 flex items-center space-x-3 ${
                isProfileOpen || isProfileActive()
                  ? "bg-[#a13c68]"
                  : "hover:bg-[#a13c68]"
              }`}
              onClick={toggleProfileMenu}
            >
              <FaUser />
              <span>{userName}</span>
              {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isProfileOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#753350] rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <NavbarItemGeneral
                      icon={FaEdit}
                      name="Editar perfil"
                      href="/Usuarios/Perfil"
                      className={
                        isActive("/Usuarios/Perfil")
                          ? "bg-[#a13c68]"
                          : "text-white"
                      }
                      onClick={() =>
                        handleNavItemClick("/Usuarios/Perfil")
                      }
                    />
                  </li>
                  <li>
                    <NavbarItemGeneral
                      icon={FaSignOutAlt}
                      name="Cerrar sesión"
                      href="/auth/login"
                      className="text-white"
                      onClick={handleLogout}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavbarGeneral;
