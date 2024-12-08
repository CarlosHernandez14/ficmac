import Header from '@/app/components/Admin/Dashboard/header';
import CardResultados from '@/app/components/Admin/Dashboard/resultados';
import SeccionMedicos from '@/app/components/Admin/Dashboard/seccion-medicos';
import Image from 'next/image';
import React from 'react';

const Dashboard = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-start relative w-full h-full pt-40 pb-5 space-y-[3%] px-[5%]">
            {/* Imagen de fondo */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-0">
                <Image
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                    src="/Admin/dashboard/background-admin-dashboard.png"
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
            <Header />
            <CardResultados />
            <SeccionMedicos />
        </div>
    );
};

export default Dashboard;
