import React from "react";
import CardFases from "./CardFases";


//Este componente se utiliza para mostrar las "fases del cáncer", se necesita el color, la imagen, titulo y descripción.
//Se utiliza en la redirección 2 del carrusel. 
const Fases = () => {
  return (
    <div className="relative w-full min-h-screen">
      <img
        src="/Home/Carrusel_vista_3_Y_Fondo.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-wrap justify-around gap-6 p-10">
        <CardFases
          color={"#753350"}
          imagen={"/Home/Crecimiento_Celular_Incontrolado.jpg"}
          titulo={"Crecimiento Celular Incontrolado"}
          numero={"1"}
          descripcion={
            "Las células cancerosas se dividen sin control y no responden a las señales normales que limitan el crecimiento celular."
          }
        />

        <CardFases
          color={"#A0737D"}
          imagen={"/Home/Evasion del Sistema Inmunologico.jpg"}
          titulo={"Evasión del Sistema Inmunológico"}
          numero={"5"}
          descripcion={
            'Las células cancerosas encuentran maneras de "ocultarse" del sistema inmunológico o incluso inhibirlo para evitar ser destruidas.'
          }
        />

        <CardFases
          color={"#A0737D"}
          imagen={"/Home/Resistencia_a_la_Apoptosis.jpeg"}
          titulo={"Resistencia a la Apoptosis"}
          numero={"2"}
          descripcion={
            'Las células cancerosas evitan el proceso de muerte celular programada, lo que les permite sobrevivir y proliferar sin restricciones.'
          }
        />

        <CardFases
          color={"#753350"}
          imagen={"/Home/Inestabilidad_Genomica.jpg"}
          titulo={"Inestabilidad Genómica"}
          numero={"6"}
          descripcion={
            "Las mutaciones y alteraciones genéticas en las células cancerosas les permiten adaptarse y resistir los tratamientos."
          }
        />

        <CardFases
          color={"#753350"}
          imagen={"/Home/Invasion_Metastasis.jpg"}
          titulo={"Invasión y Metástasis"}
          numero={"3"}
          descripcion={
            "Las células cancerosas pueden moverse y formar tumores en otras partes del cuerpo, dificultando el tratamiento."
          }
        />

        <CardFases
          color={"#A0737D"}
          imagen={"/Home/Microambiente_Tumoral.jpg"}
          titulo={"Microambiente Tumoral"}
          numero={"7"}
          descripcion={
            "El entorno alrededor del tumor, compuesto de células y moléculas, juega un rol crucial en el crecimiento y la resistencia al tratamiento."
          }
        />

        <CardFases
          color={"#A0737D"}
          imagen={"/Home/Desregulacion_Energetica.jpeg"}
          titulo={"Desregulación Energética"}
          numero={"4"}
          descripcion={
            "Las células cancerosas alteran su metabolismo para obtener la energía necesaria para su rápido crecimiento."
          }
        />

        <CardFases
          color={"#753350"}
          imagen={"/Home/Evasion de Inhibidores de Crecimiento.jpg"}
          titulo={"Evasión de Inhibidores de Crecimiento"}
          numero={"8"}
          descripcion={
            "Las células cancerosas ignoran las señales que normalmente detendrían su proliferación."
          }
        />
      </div>
    </div>
  );
};

export default Fases;
