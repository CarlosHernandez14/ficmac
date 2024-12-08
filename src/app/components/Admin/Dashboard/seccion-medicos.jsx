'use client';

import React, { useEffect, useState } from 'react';
import { getMedicos } from '@/actions/medicos/medico.actions';
import CardMedico from './card-medico';
import { Especialidad } from '@prisma/client';

const SeccionMedicos = () => {

    const [medicos, setMedicos] = useState([]);
    const [setselectedEspecialidad, setSetselectedEspecialidad] = useState("TODAS");

    console.log("Especialidad seleccionada: ", setselectedEspecialidad);

    const filteredMedicos = medicos.filter((medico) => {
        return setselectedEspecialidad === "TODAS" ? true : medico.especialidad === setselectedEspecialidad;
    });

    const getInfoMedicos = async () => {
        const response = await getMedicos();

        if (response.OK === false) {
            console.log(response.error);
        } else {
            setMedicos(response.data);
            //console.log("Medicos obtenidos: ", response.data);
        }


    };

    useEffect(() => {
        getInfoMedicos();
    }, []);

    // enum Especialidad {
    //     MEDICO_GENERAL
    //     ONCOLOGO
    //     RADIOLOGO
    //     PATOLOGO
    //     CIRUJANO
    //     GINECOLOGO
    //     UROLOGO
    //     OTRO
    //   }


    return (
        <div className='w-full min-h-[calc(50dvh)] max-h-[calc(70dvh)] flex flex-col rounded-xl shadow-xl justify-start items-center bg-[#753350] py-6 px-[3%] space-y-[2%] z-10'>
            <h1 className='text-2xl font-semibold text-white'>Medicos</h1>

            {/* Separador */}
            <hr className="w-full h-[1px] bg-white my-4 rounded-full" />

            {/* Barra de busqueda y filtro  */}
            <div className="flex flex-row justify-between w-full h-fit">
                {/* Searchbar with searchico left */}
                <div className="w-[30%] h-10 rounded-lg bg-white p-2 flex justify-center items-start space-x-[2%]">
                    <span className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="black" strokeLinejoin="round" strokeWidth="4"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" /><path strokeLinecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485" /></g></svg>
                    </span>
                    <input
                        type="text"
                        className="w-full h-full bg-transparent text-lg"
                        placeholder="Buscar"
                    />
                </div>
                {/* Filtro por especialidad */}
                <select
                    className="w-1/4 h-10 rounded-lg border-2 border-white p-2"
                    name="filtro"
                    id="filtro"
                    onChange={(e) => setSetselectedEspecialidad(e.target.value)}
                >
                    <option value="TODAS">Todas las especialidades</option>
                    <option value="MEDICO_GENERAL">Medico General</option>
                    <option value="ONCOLOGO">Oncologo</option>
                    <option value="RADIOLOGO">Radiologo</option>
                    <option value="PATOLOGO">Patologo</option>
                    <option value="CIRUJANO">Cirujano</option>
                    <option value="GINECOLOGO">Ginecologo</option>
                    <option value="UROLOGO">Urologo</option>
                </select>
            </div>

            {/* Container for the doctors cards */}
            <div className="flex flex-row flex-wrap gap-5 justify-between items-start w-full overflow-scroll">
                {/* Si no hay medicos encontrados mostrar  mensaje con icono */}
                {filteredMedicos.length === 0 && (
                    <div className="w-full flex flex-col items-center justify-center h-40 bg-transparent">
                        <span className='w-10 text-white'>
                            <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" width={256} height={256} viewBox="0 0 256 256"><path fill="currentColor" d="m203.63 62.65l13.25-14.58a12 12 0 0 0-17.76-16.14l-13.24 14.56A100 100 0 0 0 52.37 193.35l-13.25 14.58a12 12 0 1 0 17.76 16.14l13.24-14.56A100 100 0 0 0 203.63 62.65M52 128a75.94 75.94 0 0 1 117.58-63.57l-100.91 111A75.6 75.6 0 0 1 52 128m76 76a75.5 75.5 0 0 1-41.58-12.43l100.91-111A75.94 75.94 0 0 1 128 204"></path></svg>
                        </span>
                        <p className="text-gray-300 mt-4 text-lg font-semibold">
                            No se encontraron medicos
                        </p>

                    </div>
                )}
                {/* Mostrar medicos encontrados */}
                {filteredMedicos.map((medico, id) => (
                    <div key={id} className='w-[45%] h-auto rounded-xl flex'>
                        <CardMedico medico={medico} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SeccionMedicos;