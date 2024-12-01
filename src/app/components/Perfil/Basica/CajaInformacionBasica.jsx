"use client";
import React, { useEffect, useState } from "react";
import InformacionBasica from "./InformacionBasica";
import { getPacienteDataByIdUser, getUser } from "@/actions/users/edit";

function CajaInformacionBasica() {
  const [name, setName] = useState("");

  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [paciente, setPaciente] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      console.log("User:", user);
      setName(user.name);


      const pacienteData = await getPacienteDataByIdUser(user.id);
      if (pacienteData) {
        setPaciente(pacienteData);
        setEdad(pacienteData.edad);
        setSexo(pacienteData.sexo);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-[#A0737D] w-auto h-auto py-4 px-5 space-y-5 rounded-xl">
      <InformacionBasica name={name} edad={edad} sexo={sexo} />
    </div>
  );
}

export default CajaInformacionBasica;
