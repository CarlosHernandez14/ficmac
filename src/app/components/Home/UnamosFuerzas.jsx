import React from "react";
import TextoDerecho from "./TextoDerecho";
import CuadroRosa from "./CuadroRosa";

const UnamosFuerzas = () => {
  return (
    <div className="relative p-5">
      <img
        src="/Home/Carrusel_vista_3_Y_Fondo.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 ">
        <h1 className="text-center font-extrabold text-[#367B99]  text-2xl ">
          UNAMOS FUERZAS
        </h1>

        <div className="flex">
          <div className="w-1/2 ">
            <img src="/Home/Carrusel_vista_1.jpg" className="rounded-2xl" />
          </div>
          <TextoDerecho
            titulo={
              "Da el regalo de esperanza y vida a más pacientes en su lucha contra el cáncer"
            }
            descripcion={
              "Gracias al apoyo generoso de personas y organizaciones, ONTEC ha alcanzado avances innovadores en diagnóstico, estandarizando biomarcadores para garantizar su efectividad antes de su aplicación clínica."
            }
          />
        </div>
        <h1 className="text-center font-extrabold text-[#367B99]  text-2xl ">
          Forma parte de la comunidad Ontec y contribuye a lograr juntos:
        </h1>
        <div className="flex gap-5 justify-center items-center">
          <CuadroRosa
            texto={
              "La consolidación de proyectos de investigación sobre el cáncer."
            }
          />
          <CuadroRosa
            texto={"La innovación y desarrollo de biomarcadores oncológicos."}
          />
        </div>
      </div>
    </div>
  );
};

export default UnamosFuerzas;
