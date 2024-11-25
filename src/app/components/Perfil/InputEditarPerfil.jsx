"use client";
import { useState } from "react";
import Boton from "./Boton";
import CajaGeneral from "./CajaGeneral";

function InputEditarPerfil() {
  const [mostrarCajaGeneral, setMostrarCajaGeneral] = useState(false);

 
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    edad: "",
    sexo: "",
  });
const handleCajaGeneral= () => {
  setMostrarCajaGeneral(true);
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   // Aquí puedes manejar el envío del formulario
   try {
     // Suponiendo que tienes una función para guardar los datos en la base de datos
    //  await saveToDatabase(formData);
    //  console.log("Datos guardados:", formData);
     setMostrarCajaGeneral(true); // Volver al componente Información Básica
   } catch (error) {
     console.error("Error al guardar los datos:", error);
   }
 };

  return (
    <div>
      {mostrarCajaGeneral ? (
        <CajaGeneral />
      ) : (
        <div className="px-28">
          <div className="flex justify-center py-20">
            <img
              src="/General/logoblanco.png"
              alt="Logo"
              className="w-64  object-cover"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 px-40 ">
            <div>
              <label className="block text-xl font-medium text-black">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                // value={" "formData.nombre}
                value={"  Juan Perez"}
                onChange={handleChange}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
                required
                pattern="[A-Za-z\s]+"
                title="Solo se permiten letras y espacios"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Apellidos
              </label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
                required
                pattern="[A-Za-z\s]+"
                title="Solo se permiten letras y espacios"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Debe ser un correo electrónico válido"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
                required
                pattern="\d{10}"
                title="Debe ser un número de teléfono válido de 10 dígitos"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Edad
              </label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
                required
                min="0"
                max="100"
                title="Debe ser un número válido entre 0 y 120"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Genero
              </label>
              <select
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="flex justify-between py-8 space-x-32">
              <button
                onClick={handleCajaGeneral}
                className="flex items-center px-14 py-2 rounded-2xl shadow-lg text-white bg-white border-2 border-[#753350]"
              >
                <p className="text-[#753350] font-semibold whitespace-nowrap">
                  Cancelar
                </p>
              </button>
              <Boton texto={"Guardar"} onClick={handleSubmit} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default InputEditarPerfil;
