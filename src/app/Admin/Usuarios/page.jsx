'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

import { getUsers } from '@/actions/users/users.actions';
import CardUser from '@/app/components/Admin/Usuarios/card-user';

const UsuariosAdmin = () => {

    const [usuarios, setUsuarios] = useState([]);

    const obtenerUsuarios = async () => {
        const response = await getUsers();
        
        if (response.OK) {
            setUsuarios(response.data);
        } else {
            console.error(response.error);
        }
    }

    // Trigger para actualizar la lista de usuarios
    const actualizarUsuarios = async () => {
        await obtenerUsuarios();
    }

    // console.log("RESPONSE ACTIO USERS: ", usuarios);

    // Obtener usuarios al cargar la pagina
    useEffect(() => {
        obtenerUsuarios();
    }, []);

    return (
        <div className="bg-white flex flex-col items-center justify-start relative w-full h-full pb-5 space-y-[3%] px-[5%]">
            {/* Imagen de fondo */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-0">
                <Image
                    className="w-full h-full object-cover"
                    width={10000}
                    height={10000}
                    src="/Admin/usuarios/background-usuarios.png"
                    quality={100}
                    alt="Dashboard"
                />
                {/* Degradado superpuesto */}
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: "linear-gradient(to top, white 10%, transparent)",
                    }}
                ></div>

            </div>

            {/* Contenido */}
            <div className="w-full h-full flex flex-col justify-start items-center z-10 space-y-[5%]">
                <h1 className="text-5xl font-bold text-white">Usuarios</h1>


                {
                    usuarios && (
                        <div className="w-full h-full flex flex-col gap-5 overflow-scroll justify-center items-start">
                            {usuarios.map((usuario) => (
                                <div key={usuario.id} className='w-full h-fit flex justify-center'>
                                    <CardUser user={usuario} updateUsers={actualizarUsuarios} />
                                </div>
                            ))}
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default UsuariosAdmin;