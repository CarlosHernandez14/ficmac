"use client";
import React from "react";
import TarjetaPaciente from "./TarjetaPaciente";
import { getResultadosByMedicoId } from "@/actions/estudios/resultados.actions";
import { useState, useEffect, useTransition } from "react";

function Resultados() {
  const [resultados, setResultados] = useState([]);
  const [isPending, startAction] = useTransition();

  const getInfoResultados = async () => {
    startAction(() => {
      console.log("Getting resultados");
      getResultadosByMedicoId("cm3mk1lwx00009jo40m196ezt").then((response) => {
        if (response.OK === false) {
          console.log(response.error);
        }
        if (response.OK === true) {
          setResultados(response.data);
          console.log(response.data);
        }
      });
    });
  };

  useEffect(() => {
    getInfoResultados();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <p className="text-4xl font-semibold mb-8">Resultados</p>
      <div className="flex flex-col items-center space-y-4  overflow-y-auto max-h-[460px]">
        {resultados.map((resultado, id) => (
          <TarjetaPaciente key={id} resultado={resultado} />
        ))}
      </div>
    </div>
  );
}

export default Resultados;
