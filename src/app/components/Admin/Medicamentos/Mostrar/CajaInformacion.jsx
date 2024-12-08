"use client";
import React, { useEffect, useState } from "react";

import CajaTexto from "./CajaTexto";
import { getMedicamentosByTipoCancer } from "@/actions/medicamentos/medicamento.actions";

function CajaInformacion({ tipo }) {
  const [medicamentos, setMedicamento] = useState(null);

  useEffect(() => {
    const fetchMedicamento = async () => {
      if (tipo) {
        console.log("medicamento", tipo);
        const result = await getMedicamentosByTipoCancer(tipo);

        if (result.OK) {
          setMedicamento(result.data);
        } else {
          console.error(result.error);
        }
      }
    };

    fetchMedicamento();
  }, [tipo]);
  return (
    <div
      className=" flex justify-between w-auto "
    >
      {medicamentos ? (
        <div className="">
          {medicamentos.map((medicamento) => (
            
            <div className="my-5" key={medicamento.id}>
              <CajaTexto tipo={medicamento} />
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default CajaInformacion;
