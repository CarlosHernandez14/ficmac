"use client";
import React, { useState } from "react";

import IconosAvance from "./IconosAvance";
import { useRouter } from "next/navigation";
import ButtonNext from "./ButtonNext";

const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\d{10}$/; 
  return phoneRegex.test(phone);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailRegex.test(email);
};
const validateName = (name) => {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 
  return nameRegex.test(name);
};

const Formulario = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    tipoDocumento: "",
    numeroDocumento: "",
    fechaNacimiento: "",
    ciudad: "",
    direccion: "",
    nacionalidad: "",
    telefono: "",
    correo: "",
    ips: "",
    eps: "",
    familiar: "",
    telefonoFamiliar: "",
    aceptaPolitica: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value && key !== "aceptaPolitica") {
        newErrors[key] = "Este campo es obligatorio";
      }
    }
    if (!validatePhoneNumber(formData.telefono)) {
      newErrors.telefono = "El teléfono debe tener exactamente 10 números";
    }
  
    if (!validatePhoneNumber(formData.telefonoFamiliar)) {
      newErrors.telefonoFamiliar = "El teléfono debe tener exactamente 10 números";
    }
  
    if (!validateEmail(formData.correo)) {
      newErrors.correo = "El correo electrónico no es válido";
    }
  
    if (!formData.aceptaPolitica) {
      newErrors.aceptaPolitica = "Acepta la política y privacidad de datos*";
    }
    if (!validateName(formData.nombre)) {
      newErrors.nombre = "El nombre solo debe contener letras y espacios";
    }
  
    if (!validateName(formData.apellidos)) {
      newErrors.apellidos = "Los apellidos solo deben contener letras y espacios";
    }
    if (!validateName(formData.ciudad)) {
      newErrors.ciudad = "La ciudad solo debe contener letras y espacios";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      router.push("/Usuarios/AdjuntarDocumentos"); 
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  };

  
  return (
    <div className="flex h-screen ">
      <div className="w-1/5 p-4 flex flex-col items-center justify-start mr-48 ml-10">
        <IconosAvance
          imagen={"/FormularioSolicitarEstudios/Carpeta.png"}
          color={"black"}
          fondo={"#D9D9D9"}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-start -translate-x-4">
        <div className="bg-[#2B6A86] p-8 rounded-[20px] w-[945px] h-[747px] mt-8">
          <h2 className="text-white text-center text-4xl font-medium mb-6">
            Datos del paciente
          </h2>
          <form className="grid grid-cols-2 gap-6 text-xl font-thin">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Nombre*"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="[419px] h-[56px] rounded-[20px] shadow-2xl  pl-5"
              />
              {errors.nombre && (
                <p className="text-red-500 text-xs  ">{errors.nombre}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Apellidos*"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
              {errors.apellidos && (
                <p className="text-red-500 text-xs  ">{errors.apellidos}</p>
              )}
            </div>
            <div className="flex flex-col">
              <select
                name="tipoDocumento"
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
                value={formData.tipoDocumento}
                onChange={handleChange}
              >
                <option> Tipo de documento*</option>
                <option>INE</option>
                <option>Pasaporte</option>
                <option>Cartilla militar</option>
              </select>
              {errors.tipoDocumento && (
                <p className="text-red-500 text-xs  ">{errors.tipoDocumento}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Número de documento*"
                name="numeroDocumento"
                value={formData.numeroDocumento}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
              {errors.numeroDocumento && (
                <p className="text-red-500 text-xs  ">
                  {errors.numeroDocumento}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="date"
                placeholder="Fecha de nacimiento*"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
              {errors.fechaNacimiento && (
                <p className="text-red-500 text-xs  ">
                  {errors.fechaNacimiento}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Ciudad residente*"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className=" w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
              {errors.ciudad && (
                <p className="text-red-500 text-xs  ">{errors.ciudad}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Dirección de residencia*"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
              {errors.direccion && (
                <p className="text-red-500 text-xs  ">{errors.direccion}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Nacionalidad*"
                name="nacionalidad"
                value={formData.nacionalidad}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
              {errors.nacionalidad && (
                <p className="text-red-500 text-xs  ">{errors.nacionalidad}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Número de teléfono*"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
              {errors.telefono && (
                <p className="text-red-500 text-xs  ">{errors.telefono}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Correo electrónico*"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
              {errors.correo && (
                <p className="text-red-500 text-xs  ">{errors.correo}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="IPS*"
                name="ips"
                value={formData.ips}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
              {errors.ips && (
                <p className="text-red-500 text-xs  ">{errors.ips}</p>
              )}
            </div>
            <div className="flex flex-col">
              <select
                name="eps"
                value={formData.eps}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              >
                <option>EPS*</option>
                <option>Jijo</option>
              </select>
              {errors.eps && (
                <p className="text-red-500 text-xs  ">{errors.eps}</p>
              )}
            </div>
            <div className="flex flex-col">
              <select
                name="familiar"
                value={formData.familiar}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              >
                <option>Familiar de contacto*</option>
                <option>Madre</option>
                <option>Padre</option>
                <option>Hijo/a</option>
              </select>
              {errors.familiar && (
                <p className="text-red-500 text-xs  ">{errors.familiar}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Teléfono del familiar*"
                name="telefonoFamiliar"
                value={formData.telefonoFamiliar}
                onChange={handleChange}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
              {errors.telefonoFamiliar && (
                <p className="text-red-500 text-xs  ">
                  {errors.telefonoFamiliar}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="flex justify-between items-center mt-6 text-black text-xl w-[945px] pl-4">
          <label className="flex items-center col-span-2">
            <input
              type="checkbox"
              name="aceptaPolitica"
              checked={formData.aceptaPolitica}
              onChange={handleChange}
              className="mr-2"
            />
            Autorizo la{" "}
            <span className="underline ml-1">
              política y privacidad de datos
            </span>
          </label>
          {errors.aceptaPolitica && (
            <p className="text-red-500 col-span-2 text-sm">{errors.aceptaPolitica}</p>
          )}

          <a href="" className="underline">
            Ver consentimiento informado
          </a>
        </div>
        <div className="w-full mt-8 flex justify-center">
          <div className="w-1/2">
            <ButtonNext text={"Continuar"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
