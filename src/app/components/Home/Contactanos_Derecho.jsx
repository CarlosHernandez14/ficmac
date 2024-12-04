"use client";
import React, { useState } from "react";
import { enviarCorreo } from "@/actions/mail/email.actions";

const Contactanos_Derecho = () => {
  //Este componente es el form de contacto la parte derecha donde salen los datos como nombre, apellido, municipio
  //**En tipo de persona preguntar si si es Paciente y doctor

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
  });

  const [mensajeEnvio, setMensajeEnvio] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar recargar la página

    // Datos del formulario
    const destinatario = {
      name: formData.nombres, 
      address: "onteccorp@gmail.com", 
    };

    const mensaje = formData.mensaje; 
    const subject = "Contacto ONTEC"; 

    try {
      // Llamar a la función enviarCorreo
      const response = await enviarCorreo(destinatario, mensaje, subject);

      // Manejo de la respuesta
      if (response.OK) {
        alert("Correo enviado exitosamente.");
      } else {
        alert("Hubo un problema al enviar el correo: " + response.message);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error inesperado.");
    }
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
              style={{
                boxShadow:
                  "0 6px 2px -2px rgba(54, 123, 153, 0.5), 0 2px 4px -1px rgba(54, 123, 153, 0.25)",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Apellidos*"
              style={{
                boxShadow:
                  "0 6px 2px -2px rgba(54, 123, 153, 0.5), 0 2px 4px -1px rgba(54, 123, 153, 0.25)",
              }}
            />
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
              style={{
                boxShadow:
                  "0 6px 2px -2px rgba(54, 123, 153, 0.5), 0 2px 4px -1px rgba(54, 123, 153, 0.25)",
              }}
            />
          </div>
          <div>
            <select
              name="municipio"
              value={formData.municipio}
              onChange={handleChange}
              style={{
                boxShadow:
                  "0 6px 2px -2px rgba(54, 123, 153, 0.5), 0 2px 4px -1px rgba(54, 123, 153, 0.25)",
              }}
              className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Municipio*</option>
              {municipios.map((municipio, index) => (
                <option key={index} value={municipio}>
                  {municipio}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tipo de persona */}
        <div>
          <select
            name="tipoPersona"
            value={formData.tipoPersona}
            onChange={handleChange}
            style={{
              boxShadow:
                "0 6px 2px -2px rgba(54, 123, 153, 0.5), 0 2px 4px -1px rgba(54, 123, 153, 0.25)",
            }}
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Tipo de persona*</option>
            <option value="Fisica">Paciente</option>
            <option value="Moral">Doctor</option>
          </select>
        </div>

        {/* Mensaje */}
        <div>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            style={{
              boxShadow:
                "0 6px 2px -2px rgba(54, 123, 153, 0.5), 0 2px 4px -1px rgba(54, 123, 153, 0.25)",
            }}
            className="shadow-md appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mensaje*"
            rows="4"
          ></textarea>
        </div>

        {/* Botón para enviar */}
        <div className="text-center">
          <button
            type="submit"
            className="px-24 py-1 bg-[#CB1662] text-white rounded-xl font-bold hover:bg-[#de7ba590] shadow-md"
          >
            Enviar
          </button>
        </div>

        <div className="flex items-center justify-center">
          <label className="flex items-center col-span-2 text-[#666666] font-semibold">
            <input type="checkbox" name="aceptaPolitica" className="mr-2 " />
            Autorizo la{" "}
            <span className="ml-1 text-[#367B99]">
              política y privacidad de datos
            </span>
          </label>
        </div>

        {/* Mensaje de estado */}
        {mensajeEnvio && (
          <p className="text-center text-red-500 mt-4">{mensajeEnvio}</p>
        )}
      </form>
    </div>
  );
};

export default Contactanos_Derecho;
