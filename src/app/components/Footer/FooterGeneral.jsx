import React from "react";
import FooterLogo from "./FooterLogo";
import FooterLineaDivisora from "./FooterLineaDivisora";
import FooterSecciones from "./FooterSecciones";
import FooterInformacion from "./FooterInformacion";
import FooterSiguenos from "./FooterSiguenos";

function FooterGeneral() {
  return (
    <div className="bg-[#753350] p-10 flex justify-around">
      <FooterLogo />
      <FooterLineaDivisora />
      <FooterSecciones />
      <FooterLineaDivisora />
      <FooterInformacion />
      <FooterLineaDivisora />
      <FooterSiguenos />
    </div>
  );
}

export default FooterGeneral;
