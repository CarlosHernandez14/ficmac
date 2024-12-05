"use client";
import React, { useEffect, useState } from "react";
import InformacionBasica from "./InformacionBasica";
import { getPacienteDataByIdUser, getUser } from "@/actions/users/edit";

function CajaInformacionBasica() {
  //Estados para almacenar los datos del paciente
  const [name, setName] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [eps, setEps] = useState("");
  const [ips, setIps] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [paciente, setPaciente] = useState(null);
//Función para obtener los datos del paciente
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      console.log("User:", user);
      setName(user.name);
      //Obtiene los datos del paciente
      const pacienteData = await getPacienteDataByIdUser(user.id);
      if (pacienteData) {
        setPaciente(pacienteData);
        setEdad(pacienteData.edad);
        setSexo(pacienteData.sexo);
        setEdad(pacienteData.edad);
        setEps(pacienteData.EPS);
        setIps(pacienteData.IPS);
        setNacionalidad(pacienteData.nacionalidad);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-[#A0737D] w-auto h-auto py-4 px-5 space-y-5 rounded-xl">
      {/* Manda datos del paciente */}
      <InformacionBasica
        name={name}
        edad={edad}
        sexo={sexo}
        eps={eps}
        ips={ips}
        nacionalidad={nacionalidad}
      />
    </div>
  );
}

export default CajaInformacionBasica;
