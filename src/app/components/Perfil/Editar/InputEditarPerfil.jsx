"use client";
import { useEffect, useState } from "react";
import CajaGeneral from "../General/CajaGeneral";
import { FaCheck } from "react-icons/fa";
import {
  createPaciente,
  getPacienteDataByIdUser,
  getUser,
  updatePaciente,
} from "@/actions/users/edit";
import { getPacienteByIdUser } from "@/actions/users/edit";
import { FaEdit } from "react-icons/fa";

function InputEditarPerfil() {
  //Estado para mostrar la caja general
  const [mostrarCajaGeneral, setMostrarCajaGeneral] = useState(false);
  //Estados para los datos del paciente
  const [existePaciente, setExistePaciente] = useState(false);
  //Estados para los datos del paciente
  const [paciente, setPaciente] = useState(null);
  //Estados para los datos del paciente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numCelular, setNumCelular] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const[numDocumento, setNumDocumento] = useState("");
  const[nacionalidad, setNacionalidad] = useState("");
  const[IPS, setIPS] = useState("");
  const[EPS, setEPS] = useState("");
  const[parentescoFamiliar, setParentescoFamiliar] = useState("");
  const[contactoFamiliar, setContactoFamiliar] = useState("");

  //maneja el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Usuario editado Correctamente");
  };
  //efecto para obtener los datos del usuario y del paciente
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setName(user.name);
      setEmail(user.email);
      setNumCelular(user.num_celular);

      const pacienteData = await getPacienteDataByIdUser(user.id);

      if (pacienteData) {
        setPaciente(pacienteData);
        setEdad(pacienteData.edad);
        setSexo(pacienteData.sexo);
        setDireccion(pacienteData.direccion);
        setTipoDocumento(pacienteData.tipoDocumento);
        setNumDocumento(pacienteData.numDocumento);
        setNacionalidad(pacienteData.nacionalidad);
        setIPS(pacienteData.IPS);
        setEPS(pacienteData.EPS);
        setParentescoFamiliar(pacienteData.parentescoFamiliar);
        setContactoFamiliar(pacienteData.contactoFamiliar);
      }
    };
    const fetchExistePaciente = async () => {
      const user = await getUser();
      const led = await getPacienteByIdUser(user.id);
      setExistePaciente(led);
    };
    fetchUser();
    fetchExistePaciente();
  }, []);

//Metodo para manejar el estado de la caja general
  const handleCajaGeneral = () => {
    setMostrarCajaGeneral(true);
  };
//Metodo para crear o actualizar un paciente
  const handleCreatePaciente = async () => {
    const values = {
      nombre: name,
      email: email,
      num_celular: numCelular,
      edad: edad,
      sexo: sexo,
      direccion: direccion,
      tipoDocumento: tipoDocumento,
      numDocumento: numDocumento,
      nacionalidad: nacionalidad,
      IPS: IPS,
      EPS: EPS,
      parentescoFamiliar: parentescoFamiliar,
      contactoFamiliar: contactoFamiliar,
    };

    console.log("Paciente", values);

    if (existePaciente) {
      const response = await updatePaciente(values);
    } else {
      const response = await createPaciente(values);
    }
    setMostrarCajaGeneral(true);
  };

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
            <div>
              <label className="block text-xl font-medium text-black">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Tipo documento
              </label>
              <select
                name="tipo_documento"
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md 
         focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              >
                <option value="">Seleccione una opción</option>
                <option value="femenino">INE</option>
                <option value="masculino">Pasaporte</option>
                <option value="otro">Licencia de conducir</option>
                <option value="otro">Cartilla militar</option>
              </select>
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Número documento
              </label>
              <input
                type="text"
                name="num_documento"
                value={numDocumento}
                onChange={(e) => setNumDocumento(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md
          focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Nacionalidad
              </label>
              <input
                type="text"
                name="nacionalidad"
                value={nacionalidad}
                onChange={(e) => setNacionalidad(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md
          focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                IPS
              </label>
              <input
                type="text"
                name="IPS"
                value={IPS}
                onChange={(e) => setIPS(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md
          focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                EPS
              </label>
              <input
                type="text"
                name="EPS"
                value={EPS}
                onChange={(e) => setEPS(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md
          focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Parentesco familiar
              </label>
              <input
                type="text"
                name="parentesco_familiar"
                value={parentescoFamiliar}
                onChange={(e) => setParentescoFamiliar(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md
          focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                Contacto familiar
              </label>
              <input
                type="tel"
                name="contacto_familiar"
                value={contactoFamiliar}
                onChange={(e) => setContactoFamiliar(e.target.value)}
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md
          focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
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
          {successMessage && (
            <div className="mt-4 text-[#753350] font-bold flex justify-center items-center">
              <FaCheck className="mr-2 text-xl" />
              <span>{successMessage}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default InputEditarPerfil;
