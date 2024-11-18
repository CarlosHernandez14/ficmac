import React, { useEffect, useState } from "react";
import TarjetaDesplegable from "./TarjetaDesplegable";
import { getEstudios } from "@/actions/estudios/estudio.actions";

function ScrollBar({ tipo }) {
  const [estudios, setEstudios] = useState([]);

  useEffect(() => {
    const fetchEstudios = async () => {
      try {
        const response = await getEstudios();
        if (response.OK) {
          setEstudios(response.data);
        } else {
          console.error("Error al obtener los estudios:", response.message);
        }
      } catch (error) {
        console.error("Error fetching estudios:", error);
      }
    };

    fetchEstudios();
  }, [tipo]);

  return (
    <div className="bg-[#D9D9D9] overflow-y-auto overflow-x-auto  h-screen w-auto p-2 space-y-2 ">
      {estudios
        .filter((estudio) => estudio.tipo === tipo) // Filtrar por tipo
        .map((estudio, index) => (
          <TarjetaDesplegable
            key={index}
            nombre={estudio.nombre}
            tipo={estudio.tipo}
            sexo={estudio.sexo}
            NombreCancer={estudio.NombreCancer}
            NombreMedico={estudio.NombreMedico}
            TelefonoPaciente={estudio.TelefonoPaciente}
            NombreSintomas={estudio.NombreSintomas}
            CedulaMedico={estudio.CedulaMedico}
            CorreoPaciente={estudio.CorreoPaciente}
            DescripcionCancer={estudio.DescripcionCancer}
          />
        ))}
    </div>
  );
}

export default ScrollBar;
