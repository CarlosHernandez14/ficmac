import React from "react";
import InfoCancer from "./InfoCancer";

function InfoTipoCancer() {
  return (
    <div className="flex justify-between items-center space-x-8 py-6">
      <img
        className="w-full 
        sm:w-64 md:w-72 lg:w-80 xl:w-80 2xl:w-96
        sm:h-64 md:h-72 lg:h-80 xl:h-80 2xl:h-96 
        rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2s07dMjpSs01ra4vQJoYL31Lu8Ytb-Fhd2w&s"
        alt="Cáncer de mama"
      />
      <InfoCancer />
    </div>
  );
}

export default InfoTipoCancer;
