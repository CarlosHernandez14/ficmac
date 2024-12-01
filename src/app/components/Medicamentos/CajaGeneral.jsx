'use client';
import { useEffect, useState } from "react";
import CajaInformacion from "./CajaInformacion";
import ListaTiposCancer from "./ListaTiposCancer";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";


function CajaGeneral() {
  // Estado local para almacenar los tipos de cáncer
  const [tipos, setTipos] = useState([]);
  // Estado local para almacenar el tipo de cáncer seleccionado
  const [selectedTipo, setSelectedTipo] = useState("");

  // useEffect para obtener los tipos de cáncer al montar el componente
  useEffect(() => {
    const fetchTiposCancer = async () => {
      const response = await getTiposCancer();
      if (response.success) {
        // Si la respuesta es exitosa, actualiza el estado con los tipos de cáncer
        setTipos(response.tiposCancer);
      } else {
        // Si hay un error, lo muestra en la consola
        console.log(response.error);
      }
    };
    fetchTiposCancer();
  }, []);
  return (
    <div className="relative flex justify-between">
      <div className=" p-52 space-y-10">
        {selectedTipo && <CajaInformacion tipo={selectedTipo} />}
      </div>
      <div className=" absolute right-52 py-10">
        <ListaTiposCancer
          tipos={tipos}
          onSelectTipo={(tipo) => setSelectedTipo(tipo)}
        />
      </div>
    </div>
  );
}

export default CajaGeneral;
