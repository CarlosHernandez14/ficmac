import React from "react";
import InfoCancer from "./InfoCancer";

function InfoTipoCancer() {
  return (
    <div className="flex justify-between items-center space-x-8 py-6">
      <img
        className="w-60 h-60 rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2s07dMjpSs01ra4vQJoYL31Lu8Ytb-Fhd2w&s"
        alt="Cáncer de mama"
      />
      <InfoCancer />
    </div>
  );
}

export default InfoTipoCancer;
