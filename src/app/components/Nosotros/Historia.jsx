import Image from "next/image";
import React from "react";

export const Historia = () => {
  return (
    
      <div className="flex gap-10 pl-10 pb-10 ">
      <div className="pt-10 w-full">
      <h1 className="font-bold text-[#A0737D] text-2xl">Nuestra</h1>
      <h2 className="font-bold text-[#A0737D] text-6xl pb-5">Historia</h2>
        <p className="text-black text-justify text-xl">
          ONTEC surge en el 2008 como respuesta para suplir la necesidad de
          generar conocimiento alrededor de las variaciones epidemiológicas y de
          la estructura genética del cáncer en Morelia. Nuestro objetivo
          primario es impactar la supervivencia y calidad de vida de los
          pacientes con diferentes neoplasias a través de la medicina
          personalizada logrando: <br/>
          <span className="pr-5"/>
          ● <span className="pr-2"/>Correcta implementación de las herramientas
          terapéuticas. <br/>  <span className="pr-5"/>● <span className="pr-2"/>Ser parte de la solución personalizada para el paciente
          y el oncólogo. <br/> <span className="pr-5"/> ● <span className="pr-2"/>Disminución de los eventos adversos derivados del
          tratamiento del cáncer. <br/> <span className="pr-5"/> ● <span className="pr-2"/>Ahorro presupuestal para el Sistema de Salud.
        </p>
      </div>
        <Image src="/nosotros/historia.png" width={500} height={500} alt="historyImage" className="h-full object-cover "/>
      </div>
    
  );
};
