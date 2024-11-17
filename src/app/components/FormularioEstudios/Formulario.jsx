"use client";
import React, { useState } from "react";
import ButtonAzul from "../General/ButtonAzul";
import IconosAvance from "./IconosAvance";
import { useRouter } from "next/navigation";

const Formulario = () => {
  const router = useRouter(); // Instancia el enrutador

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
    if (!formData.aceptaPolitica) {
      newErrors.aceptaPolitica = "Debe aceptar la política de privacidad";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      router.push("/AdjuntarDocumentos"); // Redirección con useRouter
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/5 p-4 flex flex-col items-center justify-start mr-48 ml-10">
        <IconosAvance />
      </div>

      <div className="flex-1 flex flex-col items-center justify-start">
        <div className="bg-[#2B6A86] p-8 rounded-[20px] w-[945px] h-[747px] mt-8">
          <h2 className="text-white text-center text-4xl font-medium mb-6">
            Datos del paciente
          </h2>
          <form className="grid grid-cols-2 gap-6 text-xl font-thin">
            <input
              type="text"
              placeholder="Nombre*"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.nombre ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              placeholder="Apellidos*"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.apellidos ? "border-red-500" : ""
              }`}
            />
            <select
              name="tipoDocumento"
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.tipoDocumento ? "border-red-500" : ""
              }`}
              value={formData.tipoDocumento}
              onChange={handleChange}
            >
              <option> Tipo de documento*</option>
              <option>INE</option>
              <option>Pasaporte</option>
              <option>Cartilla militar</option>
            </select>
            <input
              type="text"
              placeholder="Número de documento*"
              name="numeroDocumento"
              value={formData.numeroDocumento}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.numeroDocumento ? "border-red-500" : ""
              }`}
            />
            <input
              type="date"
              placeholder="Fecha de nacimiento*"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.fechaNacimiento ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              placeholder="Ciudad residente*"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.ciudad ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              placeholder="Dirección de residencia*"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.direccion ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              placeholder="Nacionalidad*"
              name="nacionalidad"
              value={formData.nacionalidad}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.nacionalidad ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              placeholder="Número de teléfono*"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.telefono ? "border-red-500" : ""
              }`}
            />
            <input
              type="email"
              placeholder="Correo electrónico*"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.correo ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              placeholder="IPS*"
              name="ips"
              value={formData.ips}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.ips ? "border-red-500" : ""
              }`}
            />
            <select
              name="eps"
              value={formData.eps}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.eps ? "border-red-500" : ""
              }`}
            >
              <option>EPS*</option>
            </select>
            <select
              name="familiar"
              value={formData.familiar}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.familiar ? "border-red-500" : ""
              }`}
            >
              <option>Familiar de contacto*</option>
              <option>Madre</option>
              <option>Padre</option>
              <option>Hijo/a</option>
            </select>
            <input
              type="text"
              placeholder="Teléfono del familiar*"
              name="telefonoFamiliar"
              value={formData.telefonoFamiliar}
              onChange={handleChange}
              className={`w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 ${
                errors.telefonoFamiliar ? "border-red-500" : ""
              }`}
            />
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
            <p className="text-red-500 col-span-2">{errors.aceptaPolitica}</p>
          )}

          <a href="" className="underline">
            Ver consentimiento informado
          </a>
        </div>
        <div className="w-full mt-8 flex justify-center">
          <div className="w-1/2">
            <ButtonAzul text={"Continuar"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
