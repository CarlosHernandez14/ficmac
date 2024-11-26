"use client";
import { useEffect, useState } from "react";
import CajaGeneral from "../General/CajaGeneral";
import { userById } from "@/actions/users/data";
import { createPaciente, updatePaciente } from "@/actions/users/edit";
import { getPacienteByIdUser } from "@/actions/users/edit";
import { FaEdit } from "react-icons/fa";

function InputEditarPerfil() {
  const [mostrarCajaGeneral, setMostrarCajaGeneral] = useState(false);
  const [existePaciente, setExistePaciente] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numCelular, setNumCelular] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Correo Electrónico:", email);
    console.log("Teléfono:", numCelular);
    console.log("Edad:", edad);
    console.log("Género:", sexo);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await userById("cm3xysmy90000dyig77wbdvtd");
      setName(user.name);
      setEmail(user.email);
      setNumCelular(user.num_celular);
    };
    const fetchExistePaciente = async () => {
      const led = await getPacienteByIdUser("cm3xysmy90000dyig77wbdvtd");
      setExistePaciente(led);
    };
    fetchUser();
    fetchExistePaciente();
  }, []);

  const handleCajaGeneral = () => {
    setMostrarCajaGeneral(true);
  };

  //Funcion para llamar a la API createPaciente CON EL onClick del boton
  //Si el ExistePaciente es true llama a updatePaciente si es false llama a createPaciente
  
  const handleCreatePaciente = async () => {
    const values = {
      nombre: name,
      email: email,
      num_celular: numCelular,
      edad: edad,
      sexo: sexo,
    };
    if (existePaciente) {
      const response = await updatePaciente(values);
      console.log(response);
    } else {
      const response = await createPaciente(values);
      console.log(response);
    }
  }
  

  return (
    <div>
      {mostrarCajaGeneral ? (
        <CajaGeneral />
      ) : (
        <div>
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
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
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
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
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
                name="num_celular"
                value={numCelular}
                onChange={(e) => setNumCelular(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
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
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Genero
              </label>
              <select
                name="sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
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
              <button
                onClick={handleCreatePaciente}
                type="submit"
                className="flex items-center px-10 py-2 rounded-2xl text-white bg-[#753350] shadow-lg"
              >
                <FaEdit className="mr-2" />
                <p className="text-white whitespace-nowrap">Guardar</p>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default InputEditarPerfil;
