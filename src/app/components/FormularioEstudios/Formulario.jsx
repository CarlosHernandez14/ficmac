"use client";
import { useEffect, useState } from "react";

import IconosAvance from "./IconosAvance";
import { useRouter } from "next/navigation";
import ButtonNext from "./ButtonNext";

import {
  createPaciente,
  getPacienteDataByIdUser,
  getUser,
  updatePaciente,
} from "@/actions/users/edit";
import { getPacienteByIdUser } from "@/actions/users/edit";

const Formulario = () => {
  const router = useRouter();

  const [paciente, setPaciente] = useState(null);
  const [existePaciente, setExistePaciente] = useState(false);
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
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [aceptaPolitica, setAceptaPolitica] = useState(false);

  // Validar los campos obligatorios
  const validateForm = () => {
    return (
      name &&
      email &&
      numCelular &&
      direccion &&
      tipoDocumento &&
      numDocumento &&
      nacionalidad &&
      IPS &&
      EPS &&
      parentescoFamiliar &&
      contactoFamiliar &&
      aceptaPolitica
    );
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar términos y condiciones
    if (!aceptaPolitica) {
      setErrorMessage("Para continuar acepta términos y condiciones.");
      return;
    }

    // Validar campos
    if (!validateForm()) {
      setShowPopup(true); // Mostrar el pop-up general
    } else {
      router.push("/Usuarios/AdjuntarDocumentos");
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

  return (
    <div className="flex  min-h-screen">
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
              <label className="block text-xl font-medium text-white">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Nombre*"
                readOnly
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="[419px] h-[56px] rounded-[20px] shadow-2xl  pl-5"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Tipo de documento
              </label>
              <input
                type="text"
                readOnly
                name="tipoDocumento"
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Número de documento
              </label>
              <input
                type="text"
                placeholder="Número de documento*"
                readOnly
                name="numeroDocumento"
                value={numDocumento}
                onChange={(e) => setNumDocumento(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Dirección de residencia
              </label>
              <input
                type="text"
                readOnly
                placeholder="Dirección de residencia*"
                name="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Nacionalidad
              </label>
              <input
                type="text"
                readOnly
                placeholder="Nacionalidad*"
                name="nacionalidad"
                value={nacionalidad}
                onChange={(e) => setNacionalidad(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Teléfono
              </label>
              <input
                type="tel"
                readOnly
                placeholder="Número de teléfono*"
                name="num_celular"
                value={numCelular}
                onChange={(e) => setNumCelular(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Correo electrónico
              </label>
              <input
                type="email"
                readOnly
                placeholder="Correo electrónico*"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                IPS
              </label>
              <input
                type="number"
                readOnly
                placeholder="IPS*"
                name="IPS"
                value={IPS}
                onChange={(e) => setIPS(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                EPS
              </label>
              <input
                type="number"
                readOnly
                name="EPS"
                value={EPS}
                onChange={(e) => setEPS(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Parentezco familiar
              </label>
              <input
                type="text"
                readOnly
                name="parentesco_familiar"
                placeholder="Parentezco familiar"
                value={parentescoFamiliar}
                onChange={(e) => setParentescoFamiliar(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-xl font-medium text-white">
                Teléfono del familiar
              </label>
              <input
                type="tel"
                readOnly
                placeholder="Teléfono del familiar*"
                name="contacto_familiar"
                value={contactoFamiliar}
                onChange={(e) => setContactoFamiliar(e.target.value)}
                className="w-[419px] h-[56px] rounded-[20px] shadow-2xl pl-5 "
              />
            </div>
          </form>
        </div>
        <div className="flex justify-between items-center mt-6 text-black text-xl w-[945px] pl-4">
          <label className="flex items-center col-span-2">
            <input
              type="checkbox"
              name="aceptaPolitica"
              onChange={(e) => {
                setAceptaPolitica(e.target.checked);
                setErrorMessage("");
              }}
              className="mr-2"
            />
            Autorizo la{" "}
            <span className="underline ml-1">
              política y privacidad de datos
            </span>
          </label>

          <a href="" className="underline">
            Ver consentimiento informado
          </a>
        </div>
        <div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
        <div className="w-full mt-8 flex justify-center">
          <div className="w-1/2">
            <ButtonNext text={"Continuar"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
      {/* Pop-up */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50  ">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg  ">
            {/* Botón de cierre */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-[#753350] hover:text-black focus:outline-none transform transition-transform duration-200 hover:rotate-180"
            >
              ✖
            </button>

            {/* Logo */}
            <div className="flex justify-center  ">
              <img
                src="/General/logo negro.png"
                alt="Logo"
                className="h-32 w-32 object-contain"
              />
            </div>

            {/* Mensaje */}
            <h3 className="text-lg font-bold mb-4 text-center">
              Para continuar tienes que llenar todos tus datos
            </h3>

            {/* Botón */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setShowPopup(false); // Ocultar el pop-up
                  router.push("/Usuarios/Perfil"); // Redirigir
                }}
                className="bg-[#367B99] text-white px-4 py-2 rounded hover:bg-[#85d9fd]"
              >
                Ir a editar perfil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulario;
