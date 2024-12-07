import React from "react";

const IconosAvance = ({color,imagen,fondo}) => {
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

      <div className="flex items-center justify-center w-20 h-20 bg-transparent  rounded-full border-2 "style={{ borderColor: color }}>
        <div className="flex items-center justify-center w-16 h-16  rounded-full " style={{ background: fondo }}>
          <img
            src={imagen}
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default IconosAvance;
