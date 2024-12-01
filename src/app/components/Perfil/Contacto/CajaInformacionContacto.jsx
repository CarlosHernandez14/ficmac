'use client'
import React, { useEffect, useState } from "react";
import InformacionContacto from "./InformacionContacto";
import { getUser, getPacienteDataByIdUser } from "@/actions/users/edit";


function CajaInformacionContacto() {
  const [email, setEmail] = useState("");
  const [numCelular, setNumCelular] = useState("");
  const [direccion, setDireccion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      console.log("User en contacto:", user.email);
      setEmail(user.email);
      setNumCelular(user.num_celular);

        const pacienteData = await getPacienteDataByIdUser(user.id);
        if (pacienteData) {
          setDireccion(pacienteData.direccion);
        }
      
    };

    fetchData();
  }, []);
  return (
    <div className="bg-[#A0737D] w-auto h-auto py-4 px-5 space-y-5 rounded-xl">
      <InformacionContacto email={email} numCelular={numCelular} direccion={direccion}/>
    </div>
  );
}

export default CajaInformacionContacto;
