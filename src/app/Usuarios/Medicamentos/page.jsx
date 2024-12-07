import CajaGeneral from "@/app/components/Medicamentos/CajaGeneral";
import React from "react";

function page() {
  return (
    <div className="relative  ">
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
