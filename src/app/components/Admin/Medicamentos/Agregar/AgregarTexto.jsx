"use client";
import React, { useEffect, useState } from "react";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";
import { createMedicamento } from "@/actions/medicamentos/medicamento.actions";
import { FaCheck } from "react-icons/fa";
import AgregarImagen from "./AgregarImagen";

function AgregarTexto() {
  //  Estado para almacenar los tipos de cancer
  const [tipos, setTipos] = useState([]);
  //   Estados para almacenar los datos del medicamento
  const [tipoCancer, setTipoCancer] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [efectosSecundarios, setEfectosSecundarios] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});
  // Funcion para obtener los tipos de cancer
  useEffect(() => {
    const fetchTiposCancer = async () => {
      const response = await getTiposCancer();
      if (response.success) {
        setTipos(response.tiposCancer);
      } else {
        console.log(response.error);
      }
    };
    fetchTiposCancer();
  }, []);
  // metodo para guardar el medicamento
  const handleSave = async () => {
    // Validar los datos
    const newErrors = {};
    if (!nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!descripcion) newErrors.descripcion = "La descripción es obligatoria";
    if (!efectosSecundarios)
      newErrors.efectosSecundarios = "Los efectos secundarios son obligatorios";
    if (!selectedImage) newErrors.selectedImage = "La imagen es obligatoria";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const nuevoMedicamento = {
      idTipoCancer: tipoCancer,
      nombre,
      descripcion,
      efectos_secundarios: efectosSecundarios,
      //  url_imagen: urlImagen,
    };
    console.log("Datos a guardar:", nuevoMedicamento);
    // Funcion para crear un medicamento
    const response = await createMedicamento(nuevoMedicamento);
    if (response.OK) {
      console.log("Medicamento creado:", response.data);
      setSuccessMessage("Medicamento creado Correctamente");
    } else {
      console.error("Error al crear el medicamento:", response.error);
    }
  };
  //Metodo para seleccionar imagen
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  //Metodo para cancelar
  const onCancel = () => {
    setTipoCancer("");
    setNombre("");
    setDescripcion("");
    setEfectosSecundarios("");
    setUrlImagen("");
  };

  return (
    <div className="shadow-2xl flex  bg-white w-auto h-auto rounded-xl  ">
      <div className="flex-1 p-5 space-y-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tipo_cancer"
          >
            Tipo de cáncer
          </label>
          <select
            id="tipo_cancer"
            value={tipoCancer}
            onChange={(e) => setTipoCancer(e.target.value)}
            className="shadow-lg appearance-none border border-[#A0737D] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Seleccionar tipo de cáncer</option>
            {Array.isArray(tipos) &&
              tipos.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre medicamento
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={`shadow-lg appearance-none border ${
              errors.nombre ? "border-red-500" : "border-[#A0737D]"
            } rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs italic">{errors.nombre}</p>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="descripcion"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className={`shadow-lg appearance-none border ${
              errors.descripcion ? "border-red-500" : "border-[#A0737D]"
            } rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.descripcion && (
            <p className="text-red-500 text-xs italic">{errors.descripcion}</p>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="efectos_secundarios"
          >
            Efectos Secundarios
          </label>
          <textarea
            id="efectos_secundarios"
            value={efectosSecundarios}
            onChange={(e) => setEfectosSecundarios(e.target.value)}
            className={`shadow-lg appearance-none border ${
              errors.efectosSecundarios ? "border-red-500" : "border-[#A0737D]"
            } rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.efectosSecundarios && (
            <p className="text-red-500 text-xs italic">
              {errors.efectosSecundarios}
            </p>
          )}
        </div>
        <div className="flex justify-end space-x-4">
          <div>
            <button
              onClick={onCancel}
              className="bg-white border border-[#753350] hover:bg-gray-100 text-[#753350] py-1 px-16 rounded-xl shadow-lg"
            >
              Cancelar
            </button>
          </div>
          <div>
            <button
              onClick={handleSave}
              className="bg-[#753350] hover:bg-[#b44e7a] text-white py-1 px-16 rounded-xl shadow-lg"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <AgregarImagen onImageSelect={handleImageSelect} />
      </div>
      {successMessage && (
        <div className="mt-4 text-[#753350] font-bold flex justify-center items-center">
          <FaCheck className="mr-2 text-xl" />
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
}

export default AgregarTexto;
