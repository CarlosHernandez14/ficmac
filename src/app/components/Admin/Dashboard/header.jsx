import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className="relative flex flex-row justify-between items-center z-10 bg-[#367B99] rounded-xl px-[2%] py-[1.5%] overflow-visible shadow-xl">
            {/* Contenedor de texto */}
            <div className="flex flex-col justify-center items-start w-[50%] space-y-3">
                <h1 className="text-4xl font-bold text-white">Hola, Dra. Sofia!</h1>
                <p className="text-white text-lg text-justify">
                    “Cuando sientas que el cansancio te vence, recuerda esto: para alguien, tú serás la razón por la que tuvieron una segunda oportunidad, 
                    la razón por la que encontraron fuerza en medio de la adversidad, y la razón por la que creen que los milagros existen.”
                </p>
            </div>

            {/* Imagen de doctores */}
            <div className="absolute right-[-20px] bottom-0 h-[120%] flex items-end">
                <Image
                    className="h-auto w-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px] transform translate-y-[4%]"
                    width={500} // Tamaño base, se ajustará automáticamente
                    height={500}
                    src={"/Admin/dashboard/doctors-admin.png"}
                    quality={100}
                    alt="Doctors"
                />
            </div>
        </div>
    );
};

export default Header;
