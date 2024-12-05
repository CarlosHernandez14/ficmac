"use client";
import React, { useState } from "react";
import { enviarCorreo } from "@/actions/mail/email.actions";

const Contactanos_Derecho = () => {
  //Este componente es el form de contactanos la parte derecha donde salen los datos como nombre, apellido, municipio
  

  const municipios = [
    "Acuitzio",
    "Aguililla",
    "Álvaro Obregón",
    "Angamacutiro",
    "Angangueo",
    "Apatzingán",
    "Aporo",
    "Aquila",
    "Ario",
    "Arteaga",
    "Briseñas",
    "Buenavista",
    "Caracuaro",
    "Coahuayana",
    "Coalcomán de Vázquez Pallares",
    "Coeneo",
    "Contepec",
    "Copándaro",
    "Cotija",
    "Cuitzeo",
    "Charapan",
    "Charo",
    "Chavinda",
    "Cherán",
    "Chilchota",
    "Chinicuila",
    "Chucándiro",
    "Churintzio",
    "Churumuco",
    "Ecuandureo",
    "Epitacio Huerta",
    "Erongarícuaro",
    "Gabriel Zamora",
    "Hidalgo",
    "La Huacana",
    "Huandacareo",
    "Huaniqueo",
    "Huetamo",
    "Huiramba",
    "Indaparapeo",
    "Irimbo",
    "Ixtlán",
    "Jacona",
    "Jiménez",
    "Jiquilpan",
    "Juárez",
    "Jungapeo",
    "Lagunillas",
    "Madero",
    "Maravatío",
    "Marcos Castellanos",
    "Lázaro Cárdenas",
    "Morelia",
    "Morelos",
    "Múgica",
    "Nahuatzen",
    "Nocupétaro",
    "Nuevo Parangaricutiro",
    "Nuevo Urecho",
    "Numarán",
    "Ocampo",
    "Pajacuarán",
    "Panindícuaro",
    "Parácuaro",
    "Paracho",
    "Pátzcuaro",
    "Penjamillo",
    "Peribán",
    "La Piedad",
    "Purépero",
    "Puruándiro",
    "Queréndaro",
    "Quiroga",
    "Cojumatlán de Régules",
    "Los Reyes",
    "Sahuayo",
    "San Lucas",
    "Santa Ana Maya",
    "Salvador Escalante",
    "Senguio",
    "Susupuato",
    "Tacámbaro",
    "Tancítaro",
    "Tangamandapio",
    "Tangancícuaro",
    "Tanhuato",
    "Taretan",
    "Tarímbaro",
    "Tepalcatepec",

    "Tingambato",
    "Tingüindín",
    "Tiquicheo de Nicolás Romero",
    "Tlalpujahua",
    "Tlazazalca",
    "Tocumbo",
    "Tumbiscatío",
    "Turicato",
    "Tuxpan",
    "Tuzantla",
    "Tzintzuntzan",
    "Tzitzio",

    "Uruapan",
    "Venustiano Carranza",
    "Villamar",
    "Vista Hermosa",
    "Yurécuaro",
    "Zacapu",
    "Zamora",
    "Zináparo",
    "Zinapécuaro",
    "Ziracuaretiro",
    "Zitácuaro",
  ];
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    municipio: "",
    tipoPersona: "",
    mensaje: "",
    aceptaPolitica: false,
  });

  // Estado para errores de validación
  const [errors, setErrors] = useState({});
  const [mensajeEnvio, setMensajeEnvio] = useState("");

  /**
   * Valida un correo electrónico con regex.
   * @param {string} email - Correo electrónico a validar.
   * @returns {boolean} `true` si es válido, de lo contrario `false`.
   */
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Actualiza los valores del formulario al cambiar un campo.
   * @param {Object} e - Evento del input.
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /**
   * Valida todos los campos del formulario.
   * @returns {boolean} `true` si el formulario es válido.
   */
  const validateForm = () => {
    const newErrors = {};

    // Validar campos obligatorios
    for (const [key, value] of Object.entries(formData)) {
      if (!value && key !== "mensaje") {
        newErrors[key] = "Este campo es obligatorio";
      }
    }

    // Validar correo electrónico
    if (!validateEmail(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }

    // Validar aceptación de políticas
    if (!formData.aceptaPolitica) {
      newErrors.aceptaPolitica =
        "Debes aceptar la política y privacidad de datos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Maneja el envío del formulario.
  
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const destinatario = {
        name: formData.nombres,
        address: "onteccorp@gmail.com",
      };
      const mensaje = formData.mensaje;
      const subject = "Contacto ONTEC";

      const response = await enviarCorreo(destinatario, mensaje, subject);

      if (response.OK) {
        setMensajeEnvio("Correo enviado exitosamente.");
        setFormData({
          nombres: "",
          apellidos: "",
          email: "",
          municipio: "",
          tipoPersona: "",
          mensaje: "",
          aceptaPolitica: false,
        });
      } else {
        setMensajeEnvio("Error al enviar el correo: " + response.message);
      }
    } catch (error) {
      setMensajeEnvio("Ocurrió un error inesperado.");
    }
  };

  // Estilo unificado de los inputs
  const inputStyle = {
    boxShadow:
      "0 6px 2px -2px rgba(54, 123, 153, 0.5), 0 2px 4px -1px rgba(54, 123, 153, 0.25)",
  };

  return (
    <div className="m-20">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Primera fila: Nombres y Apellidos */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nombres*"
              style={inputStyle}
            />
            {errors.nombres && (
              <p className="text-red-500 text-sm">{errors.nombres}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Apellidos*"
              style={inputStyle}
            />
            {errors.apellidos && (
              <p className="text-red-500 text-sm">{errors.apellidos}</p>
            )}
          </div>
        </div>

        {/* Segunda fila: Correo electrónico y Municipio */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Correo electrónico*"
              style={inputStyle}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <select
              name="municipio"
              value={formData.municipio}
              onChange={handleChange}
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={inputStyle}
            >
              <option value="">Municipio*</option>
              {municipios.map((municipio, index) => (
                <option key={index} value={municipio}>
                  {municipio}
                </option>
              ))}
            </select>
            {errors.municipio && (
              <p className="text-red-500 text-sm">{errors.municipio}</p>
            )}
          </div>
        </div>

        {/* Tipo de persona */}
        <div>
          <select
            name="tipoPersona"
            value={formData.tipoPersona}
            onChange={handleChange}
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={inputStyle}
          >
            <option value="">Tipo de persona*</option>
            <option value="Paciente">Paciente</option>
            <option value="Doctor">Doctor</option>
          </select>
          {errors.tipoPersona && (
            <p className="text-red-500 text-sm">{errors.tipoPersona}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mensaje*"
            rows="4"
            style={inputStyle}
          ></textarea>
          {errors.mensaje && (
            <p className="text-red-500 text-sm">{errors.mensaje}</p>
          )}
        </div>

        {/* Política de privacidad */}
        <div className="flex items-center justify-center">
          <label className="flex items-center text-[#666666] font-semibold">
            <input
              type="checkbox"
              name="aceptaPolitica"
              checked={formData.aceptaPolitica}
              onChange={handleChange}
              className="mr-2"
            />
            Acepto la{" "}
            <span className="ml-1 text-[#367B99]">
              política y privacidad de datos
            </span>
          </label>
        </div>
        {errors.aceptaPolitica && (
          <p className="text-red-500 text-sm">{errors.aceptaPolitica}</p>
        )}

        {/* Botón para enviar */}
        <div className="text-center flex justify-center">
          <button
            type="submit"
            className="px-24 py-1 bg-[#CB1662] text-white rounded-xl font-bold hover:bg-[#de7ba590] shadow-md"
          >
            Enviar
          </button>
        </div>

        {/* Mensaje de estado */}
        {mensajeEnvio && (
          <p className="text-center text-green-500 mt-4">{mensajeEnvio}</p>
        )}
      </form>
    </div>
  );
};

export default Contactanos_Derecho;
