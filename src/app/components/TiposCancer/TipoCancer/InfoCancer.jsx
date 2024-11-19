import React from "react";

function InfoCancer({descripcion}) {
  return (
    <div className="bg-[#D9D9D9] 
    w-96 h-80 
    sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-96
    sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-96 
    shadow-lg p-4 rounded-md overflow-y-auto">
      <p className="text-sm text-justify">
        {descripcion}
      </p>
    </div>
  );
}

export default InfoCancer;
