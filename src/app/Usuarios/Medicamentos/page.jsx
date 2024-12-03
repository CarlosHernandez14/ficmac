import CajaGeneral from "@/app/components/Medicamentos/CajaGeneral";
import ListaTiposCancer from "@/app/components/Medicamentos/ListaTiposCancer";
import React from "react";

function page() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/Medicamentos/MF1.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#D9D9D9] to-transparent"></div>
      <div className="relative ">
       
          <CajaGeneral />
        
        
      </div>
    </div>
  );
}

export default page;
