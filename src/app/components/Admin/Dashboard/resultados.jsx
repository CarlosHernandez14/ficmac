"use client";

import React, { useEffect, useState, useTransition } from 'react'
import { getResultadosByMedicoId } from "@/actions/estudios/resultados.actions";
import CardResultado from './card-resultado';

const CardResultados = () => {

    const [resultados, setResultados] = useState([]);
    const [isPending, startAction] = useTransition();

    

    const getInfoResultados = async () => {
        startAction(() => {
            console.log("Getting resultados");
            getResultadosByMedicoId("cm3usohw20000121ocf73yyvs").then((response) => {
                if (response.OK === false) {
                    console.log(response.error);
                }
                if (response.OK === true) {
                    setResultados(response.data);
                    console.log("Resultados obtenidos: ", response.data);
                }
            });
        });
    };

    useEffect(() => {
        getInfoResultados();
    }, []);


    return (
        <div className='w-full flex flex-col items-center bg-[#A0737D] rounded-xl shadow-xl z-10 py-5 px-[3%]'>
            <h1 className='text-2xl font-semibold text-white'>Resultados</h1>

            {/* Separador */}
            <hr className="w-full h-[1px] bg-white my-4 rounded-full" />

            {/* En caso de que no haya resultados aún mostramos mensaje */}
            {resultados.length === 0 && (
                <div className="flex flex-col items-center justify-center h-40 bg-transparent">
                    <span className='w-10 text-white'>
                        <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" width={256} height={256} viewBox="0 0 256 256"><path fill="currentColor" d="m203.63 62.65l13.25-14.58a12 12 0 0 0-17.76-16.14l-13.24 14.56A100 100 0 0 0 52.37 193.35l-13.25 14.58a12 12 0 1 0 17.76 16.14l13.24-14.56A100 100 0 0 0 203.63 62.65M52 128a75.94 75.94 0 0 1 117.58-63.57l-100.91 111A75.6 75.6 0 0 1 52 128m76 76a75.5 75.5 0 0 1-41.58-12.43l100.91-111A75.94 75.94 0 0 1 128 204"></path></svg>
                    </span>
                    <p className="text-gray-300 mt-4 text-lg font-semibold">
                        No hay resultados disponibles aun
                    </p>

                </div>
            )}


            {/* Container for the results */}

            <div className="flex flex-col justify-center items-start w-full">
                {resultados.map((resultado, id) => (
                    <div key={id} className='w-full h-auto bg-white rounded-xl flex'>
                        <CardResultado resultado={resultado} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardResultados;