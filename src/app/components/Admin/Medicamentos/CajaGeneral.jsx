"use client";
import { useEffect, useState } from "react";
import ListaTiposCancer from "./ListaTiposCancer";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";

function CajaGeneral() {
  //  Estado para almacenar los tipos de cancer
  const [tipos, setTipos] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState(null);
//   Funcion para obtener los tipos de cancer
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

  return (
    //  Renderizamos el componente ListaTiposCancer
    <ListaTiposCancer
      tipos={tipos}
      onSelectTipo={(tipo) => setSelectedTipo(tipo)}
    />
  );
}

export default CajaGeneral;
