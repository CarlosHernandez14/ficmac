'use client';
import React, { useEffect, useState } from "react";
import CajaTexto from "./CajaTexto";
import {getMedicamentosByTipoCancer}  from "@/actions/medicamentos/medicamento.actions";

function CajaInformacion({tipo}) {
  // Estado para almacenar los medicamentos
   const [medicamentos, setMedicamento] = useState(null);
  // Funcion para obtener los medicamentos por tipo de cancer
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
    <div className=" flex justify-between w-auto h-auto ">
      {/* Hace una busqueda de lo medicamentos y manda su id a caja texto */}
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
