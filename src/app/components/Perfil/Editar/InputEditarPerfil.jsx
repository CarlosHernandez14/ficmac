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
  const [numDocumento, setNumDocumento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [IPS, setIPS] = useState("");
  const [EPS, setEPS] = useState("");
  const [parentescoFamiliar, setParentescoFamiliar] = useState("");
  const [contactoFamiliar, setContactoFamiliar] = useState("");
 const [errors, setErrors] = useState({});
  //maneja el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePhone(numCelular)) {
      newErrors.numCelular = "El número de celular debe tener 10 dígitos.";
    }

    if (!validatePhone(contactoFamiliar)) {
      newErrors.contactoFamiliar =
        "El número de celular debe tener 10 dígitos.";
    }

    if (!validateText(name)) {
      newErrors.name = "El nombre solo debe contener letras.";
    }

    

    if (!validateText(nacionalidad)) {
      newErrors.nacionalidad = "La nacionalidad solo debe contener letras.";
    }

    if (!validateEmail(email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
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
        setTipoDocumento(pacienteData.tipo_documento);
        setNumDocumento(pacienteData.num_documento);
        setNacionalidad(pacienteData.nacionalidad);
        setIPS(pacienteData.IPS);
        setEPS(pacienteData.EPS);
        setParentescoFamiliar(pacienteData.ParentescoFamiliar);
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
      tipo_documento: tipoDocumento,
      num_documento: numDocumento,
      nacionalidad: nacionalidad,
      IPS: IPS,
      EPS: EPS,
      ParentescoFamiliar: parentescoFamiliar,
      contactoFamiliar: contactoFamiliar,
    };

    //Funcipon para editar un paciente
    updatePaciente(values).then((res) => {
      if (res.success) {
        setMostrarCajaGeneral(true);
        setSuccessMessage("Usuario editado Correctamente");
      } else {
        setErrors({ form: res.error });
      }
    });
  };
  // Función para validar el teléfono
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  // Función para validar el texto
  const validateText = (text) => {
    const textRegex = /^[a-zA-Z\s]+$/;
    return textRegex.test(text);
  };

  // Función para validar el email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.name ? "border-red-500" : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
                pattern="[A-Za-z\s]+"
                title="Solo se permiten letras y espacios"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
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
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.email ? "border-red-500" : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Debe ser un correo electrónico válido"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
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
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.numCelular ? "border-red-500" : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
                pattern="\d{10}"
                title="Debe ser un número de teléfono válido de 10 dígitos"
              />
              {errors.numCelular && (
                <p className="text-red-500 text-xs italic">
                  {errors.numCelular}
                </p>
              )}
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
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
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
                pattern="\d{8}"
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.numDocumento ? "border-red-500" : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
              />
              {errors.numDocumento && (
                <p className="text-red-500 text-xs italic">
                  {errors.numDocumento}
                </p>
              )}
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
                pattern="[A-Za-z\s]+"
                className="shadow-gray-700 shadow-sm block w-full h-10 border border-[#A0737D] rounded-md
          focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold "
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                IPS
              </label>
              <input
                type="number"
                name="IPS"
                value={IPS}
                onChange={(e) => setIPS(e.target.value)}
                pattern="\d{8}"
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.IPS ? "border-red-500" : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
              />
              {errors.IPS && (
                <p className="text-red-500 text-xs italic">{errors.IPS}</p>
              )}
            </div>
            <div>
              <label className="block text-xl font-medium text-black">
                EPS
              </label>
              <input
                type="number"
                name="EPS"
                value={EPS}
                onChange={(e) => setEPS(e.target.value)}
                pattern="\d{8}"
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.EPS ? "border-red-500" : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
              />
              {errors.EPS && (
                <p className="text-red-500 text-xs italic">{errors.EPS}</p>
              )}
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
                pattern="[A-Za-z\s]+"
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.parentescoFamiliar
                    ? "border-red-500"
                    : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
              />
              {errors.parentescoFamiliar && (
                <p className="text-red-500 text-xs italic">
                  {errors.parentescoFamiliar}
                </p>
              )}
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
                className={`shadow-gray-700 shadow-sm block w-full h-10 border ${
                  errors.contactoFamiliar
                    ? "border-red-500"
                    : "border-[#A0737D]"
                } rounded-md focus:ring-[#A0737D] focus:border-[#A0737D] sm:text-sm font-semibold`}
                pattern="\d{10}"
                title="Debe ser un número de teléfono válido de 10 dígitos"
              />
              {errors.contactoFamiliar && (
                <p className="text-red-500 text-xs italic">
                  {errors.contactoFamiliar}
                </p>
              )}
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
