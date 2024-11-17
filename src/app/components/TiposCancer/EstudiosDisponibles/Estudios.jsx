import Image from "next/image";
import React from "react";
import Tarjetas from "../TarjetasTipoCancer/Tarjetas";

const Estudios = () => {
  return (
    <div className="relative">
      <img
        src="/EstudioDisponibles/fondo.jpeg"
        alt="Fondo"
        className="w-full h-80 object-cover opacity-75"
      />
      <div>
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent " />
        <h1 className="absolute bottom-10 left-1/3 text-center text-[#753350] text-3xl font-bold">
          Selecciona el tipo de biopsia a solicitar
        </h1>
      </div>
      <div className="absolute left-72 space-y-12">
        <Tarjetas
          texto={"Biopsia Liquida (sangre)"}
          titulo={"No requiere preparación"}
          descripcion={
            "Comunicarse con ONTEC para la programación de la toma de muestra"
          }
          imagen={"/EstudioDisponibles/biopsiaLiquida.png"}
          instructivo={
            "La biopsia líquida es similar a un análisis de sangre. Se extraen algunos mililitros de sangre del brazo mediante una aguja. El proceso dura entre 10 y 15 minutos. Después del procedimiento. Asegúrate de beber suficiente agua después del análisis. Mantén limpia y seca la zona donde se realizó la extracción."
          }
        />
        <Tarjetas
          texto={"Biopsia sólida"}
          titulo={"Requiere preparación"}
          descripcion={
            "El paciente debe llevar para su estudio los bloques de parafina (Obligatorio) y/o Láminas (opcional)"
          }
          imagen={"/EstudioDisponibles/biopsiaSolida.png"}
          instructivo={
            " En biopsias guiadas por imágenes, quirúrgicas o endoscópicas, es común que te pidan no comer ni beber por al menos 6-8 horas antes del procedimiento.Es posible que te pidan suspenderlos varios días antes como anticoagulantes o aspirina. "
          }
        />
        <div className="flex justify-center mt-8 p-4">
          <button className="bg-[#367B99] text-white font-medium rounded-full px-24 py-3 text-sm">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Estudios;
