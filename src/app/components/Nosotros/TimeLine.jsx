"use client"
import Image from "next/image";
import React, { useState } from "react";

export const TimeLine = () => {

    const [imageSrcs, setImageSrcs] = useState({
        img1: "/nosotros/arrow_1.png",
        img2: "/nosotros/arrow_1.png",
        img3: "/nosotros/arrow_1.png",
        img4: "/nosotros/arrow_1.png",
        img5: "/nosotros/arrow_1.png",
        img6: "/nosotros/arrow_1.png",
        img7: "/nosotros/arrow_1.png",
        img8: "/nosotros/arrow_1.png",
      })
    const [imageFill, setImageFill] = useState({
        img1: "/nosotros/arrow_3.png",
        img2: null,
        img3: null,
        img4: null,
        img5: null,
        img6: null,
        img7: null,
        img8: null,
      })
    const [text, setText] = useState("Creación de ONTEC")
    const [year, setYear] = useState("2008")
    const [image, setImage] = useState("/nosotros/Imagen_1_timeline.png")
    
      const handleMouseEnter = (imgKey) => {
        setImageSrcs((prevState) => ({
          ...prevState,
          [imgKey]: "/nosotros/arrow_2.png",
        }))
      }
    
      const handleMouseLeave = (imgKey) => {
        setImageSrcs((prevState) => ({
          ...prevState,
          [imgKey]: "/nosotros/arrow_1.png",
        }))
      }

      const handleClick = (imgKey) => {
        setImageFill({
            img1: null,
            img2: null,
            img3: null,
            img4: null,
            img5: null,
            img6: null,
            img7: null,
            img8: null,
        })
        setImageFill((prevState) => ({
          ...prevState,
          [imgKey]: "/nosotros/arrow_3.png",
        }))
        switch (imgKey) {
            case 'img1':
                setText("Creación de ONTEC")
                setYear("2008")
                setImage("/nosotros/Imagen_1_timeline.png")
                break;
            case 'img2':
                setText("Creación de CLICAP – Consorcio Latinoamericano para la Investigación del Cáncer de Pulmón.")
                setYear("2011")
                setImage("/nosotros/Imagen_2_timeline.png")
                break;
            case 'img3':
                setText("Creación de OncolGroup, grupo de investigación de Oncología avalado por la Universidad El Bosque.")
                setYear("2014")
                setImage("/nosotros/Imagen_3_timeline.png")
                break;
            case 'img4':
                setText("Detección de los polimorfismos de deleción de BIM en pacientes con cáncer de pulmón, gracias a las investigaciones realizadas en FICMAC.")
                setYear("2016")
                setImage("/nosotros/Imagen_4_timeline.png")
                break;
            case 'img5':
                setText("Certificación de OncolGroup como Grupo A1 por Colciencias – Máxima Categoría Científica de un grupo de Investigación, gracias a los más de 80 artículos publicados en revistas indexadas nacionales e internacionales.")
                setYear("2017")
                setImage("/nosotros/Imagen_5_timeline.png")
                break;
            case 'img6':
                setText("Primer centro privado en el país en obtener financiamiento de la Sociedad Americana de Oncología Clínica – ASCO – para ejecutar la propuesta de investigación: Infección por Virus del Papiloma Humano y respuesta inmune en pacientes con adenocarcinoma de pulmón metastásico.")
                setYear("2018")
                setImage("/nosotros/Imagen_6_timeline.png")
                break;
            case 'img7':
                setText("Reconocida como una de las 25 empresas de la Revista Semana que más aportan a Colombia por su contribución a la sociedad y Adquisición del Secuenciador Genético de Segunda Generación Ion S5, único en el país usado con fines médicos y científicos")
                setYear("2019")
                setImage("/nosotros/Imagen_1_timeline.png")
                break;
            case 'img8':
                setText("Premio INNOS, Premio Academia Nacional de Medicina y Premio Asociación Colombiana de Hematología y Oncología (ACHO).")
                setYear("2022")
                setImage("/nosotros/Imagen_1_timeline.png")
                break;
        }
      }

  return (
    <div className="m-10 flex gap-10 shadow-2xl rounded-2xl shadow-[#00000065]">
      <Image
        src={image}
        width={300}
        height={300}
        alt="timelineImage"
        className="h-full object-cover"
      />
      <div className="flex flex-col items-center w-full pr-5">
        <h1 className="text-center text-4xl font-bold text-black pb-2 pt-5">{year}</h1>
        <div className="h-[2px] w-full bg-[#753350]" />
        <p className="pt-5 pb-5 text-xl">
          {text}
        </p>
        <div className="flex justify-between flex-grow items-end pb-5">
            <h3 className="text-2xl font-bold pr-4">2008</h3>
            <Image onMouseEnter={() => handleMouseEnter('img1')} onMouseLeave={() => handleMouseLeave('img1')} onClick={() => handleClick('img1')}
                src={imageFill.img1? imageFill.img1 : imageSrcs.img1} width={95} height={95} alt="1-arrow-black" />
            <Image onMouseEnter={() => handleMouseEnter('img2')} onMouseLeave={() => handleMouseLeave('img2')} onClick={() => handleClick('img2')}
                src={imageFill.img2? imageFill.img2 : imageSrcs.img2} width={95} height={95} alt="2-arrow-black" />
            <Image onMouseEnter={() => handleMouseEnter('img3')} onMouseLeave={() => handleMouseLeave('img3')} onClick={() => handleClick('img3')}
                src={imageFill.img3? imageFill.img3 : imageSrcs.img3} width={95} height={95} alt="3-arrow-black" />
            <Image onMouseEnter={() => handleMouseEnter('img4')} onMouseLeave={() => handleMouseLeave('img4')} onClick={() => handleClick('img4')}
                src={imageFill.img4? imageFill.img4 : imageSrcs.img4} width={95} height={95} alt="4-arrow-black" />
            <Image onMouseEnter={() => handleMouseEnter('img5')} onMouseLeave={() => handleMouseLeave('img5')} onClick={() => handleClick('img5')}
                src={imageFill.img5? imageFill.img5 : imageSrcs.img5} width={95} height={95} alt="5-arrow-black" />
            <Image onMouseEnter={() => handleMouseEnter('img6')} onMouseLeave={() => handleMouseLeave('img6')} onClick={() => handleClick('img6')}
                src={imageFill.img6? imageFill.img6 : imageSrcs.img6} width={95} height={95} alt="6-arrow-black" />
            <Image onMouseEnter={() => handleMouseEnter('img7')} onMouseLeave={() => handleMouseLeave('img7')} onClick={() => handleClick('img7')}
                src={imageFill.img7? imageFill.img7 : imageSrcs.img7} width={95} height={95} alt="7-arrow-black" />
            <Image onMouseEnter={() => handleMouseEnter('img8')} onMouseLeave={() => handleMouseLeave('img8')} onClick={() => handleClick('img8')}
                src={imageFill.img8? imageFill.img8 : imageSrcs.img8} width={95} height={95} alt="8-arrow-black" />
          <h3 className="text-2xl font-bold pl-4">2022</h3>
        </div>
      </div>
    </div>
  );
};
