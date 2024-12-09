import Image from 'next/image';
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FaDeleteLeft, FaTrash } from 'react-icons/fa6';
import { IoTrashBin } from 'react-icons/io5';
import ModalUsers from './modal-users';
import { UserRole } from '@prisma/client';

const CardUser = ({ user, updateUsers }) => {

    // State para el modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    //console.log("USER: ", user);

    // Pick first paciente of user.Paciente array
    const paciente = user.Paciente[0];

    return (
        <div className='flex flex-row w-3/4 h-[calc(15dvh)] rounded-xl justify-evenly items-center shadow-xl space-x-5 bg-[#753350] p-5'>
            <ModalUsers isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} paciente={paciente} updateUsers={updateUsers} />
            {
                paciente?.imagen_url ? (
                    <div className='flex justify-center items-center rounded-full w-[200px] h-20 drop-shadow-xl bg-white'>
                        <Image
                            src={paciente?.imagen_url}
                            alt="Imagen de usuario"
                            width={100}
                            height={100}
                            className='rounded-full w-[85%] h-full'
                        />
                    </div>
                ) : (
                    <div className='flex justify-center items-center rounded-full w-[200px] h-20 drop-shadow-xl'>
                        <FaUserCircle size={70} color='white' />
                    </div>
                )

            }

            <h1 className='w-full text-xl text-white font-bold '>{paciente?.nombre_completo} ({user.role})</h1>

            {/* Separador vertical */}
            <div className='h-full w-0.5 bg-white mx-5'></div>

            <div className="w-full flex justify-end items-center h-full space-x-[10%]">

                {
                    user.role === UserRole.PACIENTE && (
                        <button
                            className='flex font-semibold justify-center items-center text-[#753350] bg-white rounded-xl w-1/2 h-1/2 shadow-xl hover:bg-white/70 transition-all transform duration-300 hover:scale-110 '
                            onClick={() => setIsModalOpen(true)}
                        >
                            <span>Asignar como medico</span>
                        </button>
                    )
                }


                <button className='w-8 flex justify-center items-center text-white rounded-xl transition-all transform duration-200 hover:scale-125 hover:text-white/70'>
                    <FaTrash className='w-full h-full' />
                </button>
            </div>

        </div>
    )
}

export default CardUser;