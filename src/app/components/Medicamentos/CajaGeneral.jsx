"use client";
import { useEffect, useState } from "react";
import CajaInformacion from "./CajaInformacion";
import ListaTiposCancer from "./ListaTiposCancer";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";

function CajaGeneral() {
  const [tipos, setTipos] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState(null);

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
    <ListaTiposCancer
      tipos={tipos}
      onSelectTipo={(tipo) => setSelectedTipo(tipo)}
    />
  );
}

export default CajaGeneral;
