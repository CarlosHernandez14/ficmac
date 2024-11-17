import React from "react";

const IconosAvance = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-20 h-20 bg-transparent  rounded-full border-2 border-[#2B6A86]">
        <div className="flex items-center justify-center w-16 h-16 bg-[#2B6A86] text-white rounded-full border-2 ">
          <img
            src="/FormularioSolicitarEstudios/IconoPersonas.png"
            className="w-8 h-8"
          />
        </div>
      </div>
      <div className="w-1 bg-[#2B6A86] h-56"></div>

      <div className="flex items-center justify-center w-20 h-20 bg-transparent text-black rounded-full border-2 border-black">
        <div className="flex items-center justify-center w-16 h-16 bg-[#D9D9D9] text-black rounded-full ">
          <img
            src="/FormularioSolicitarEstudios/Carpeta.png"
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default IconosAvance;
