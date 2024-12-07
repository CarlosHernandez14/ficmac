"use client";
import React, { useEffect, useState } from "react";
import InformacionContacto from "./InformacionContacto";
import { getUser, getPacienteDataByIdUser } from "@/actions/users/edit";

function CajaInformacionContacto() {
  //Estados para almacenar los datos del paciente
  const [email, setEmail] = useState("");
  const [numCelular, setNumCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numDocumento, setNumDocumento] = useState("");
  const [parentescoFamiliar, setParentescoFamiliar] = useState("");
  const [contactoFamiliar, setContactoFamiliar] = useState("");
  //Función para obtener los datos del paciente
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      console.log("User en contacto:", user.email);
      setEmail(user.email);
      setNumCelular(user.num_celular);

      //Obtiene los datos del paciente
      const pacienteData = await getPacienteDataByIdUser(user.id);
      if (pacienteData) {
        setDireccion(pacienteData.direccion);
        setContactoFamiliar(pacienteData.contactoFamiliar);
        setParentescoFamiliar(pacienteData.ParentescoFamiliar);
        setTipoDocumento(pacienteData.tipo_documento);
        setNumDocumento(pacienteData.num_documento);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-[#A0737D] w-auto h-auto py-4 px-5 space-y-5 rounded-xl">
      <InformacionContacto
        email={email}
        numCelular={numCelular}
        direccion={direccion}
        tipoDocumento={tipoDocumento}
        numDocumento={numDocumento}
        parentescoFamiliar={parentescoFamiliar}
        contactoFamiliar={contactoFamiliar}
        
      />
    </div>
  );
}

export default CajaInformacionContacto;
