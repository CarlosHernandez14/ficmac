import React from "react";
import Cifras from "./Cifras";


const NuestrosNumeros = () => {
  return (
    <div className="relative p-5">
      <img
        src="/Home/Carrusel_vista_3_Y_Fondo.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 ">
        <h1 className="text-center font-extrabold text-[#CB1662] text-2xl ">
          Nuestros números
        </h1>
        <h1 className="text-center font-extrabold text-[#367B99] text-3xl mt-10">
          Cifras qué hablan por si solas
        </h1>

        <div className="flex flex-wrap gap-4 items-center justify-center mt-32">
          <Cifras
            imagen={"/Home/icono_pacientes.png"}
            numeros={"22.000"}
            texto={
              <span>
                Pacientes
                <br /> <strong className="font-bold">evaluados</strong>
              </span>
            }
            altImagen={"pacientes evaluados icono"}
          />
          <Cifras
            imagen={"/Home/icono_pruebas.png"}
            numeros={"92.000"}
            texto={
              <span>
                Pruebas
                <br /> <strong className="font-bold">ejecutadas</strong>
              </span>
            }
            altImagen={"pruebas evaluados icono"}
          />
          <Cifras
            imagen={"/Home/icono_muestras_2.png"}
            numeros={"9.000"}
            texto={
              <span>
                Muestras actuales
                <br /> en el <strong className="font-bold">biobanco</strong>
              </span>
            }
            altImagen={"muestras evaluados icono"}
          />
          <Cifras
            imagen={"/Home/icono_muestras_1.png"}
            numeros={"12.000"}
            texto={
              <span>
                Muestras actuales
                <br /> en <strong className="font-bold">seroteca</strong>
              </span>
            }
            altImagen={"muestras actuales icono"}
          />
          <Cifras
            imagen={"/Home/icono_articulos.png"}
            numeros={"154"}
            texto={
              <span>
                Artículos
                <strong className="font-bold">
                {" "} publicados
                  <br />
                </strong>
                en la última década
              </span>
            }
            altImagen={"artículos publicados icono"}
          />
          <Cifras
            imagen={"/Home/icono_grant.png"}
            numeros={"+ 15"}
            texto={
              <span>
                Grants nacionales e<br /> internacionales
                <strong className="font-bold"> ejecutados</strong>
              </span>
            }
            altImagen={"grants ejecutados icono"}
          />
          <Cifras
            imagen={"/Home/vida_icono.png"}
            numeros={"+ 98.000"}
            texto={
              <span>
                Años de vida <strong className="font-bold">ganados</strong>
                <br /> gracias al diagnóstico
                <br />
                de precisión
              </span>
            }
            altImagen={"años de vida ganados icono"}
          />
        </div>
      </div>
    </div>
  );
};

export default NuestrosNumeros;
