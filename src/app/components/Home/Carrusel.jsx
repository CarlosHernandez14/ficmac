"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrusel = ({ slides }) => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen flex flex-col justify-center items-start text-white relative"
              style={{
                backgroundImage: `url(${slide.imagen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(${slide.degradadoDireccion}, ${slide.colorDegradado}, rgba(0, 0, 0, 0))`,
                  zIndex: 1,
                }}
              ></div>
              <div
                className={`z-10 p-8 ml-5 w-1/3  ${
                  slide.textoAlineacion === "derecha"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <h1 className="text-xl font-medium mb-4 text-justify ">
                  {slide.texto}
                </h1>
                <h1 className="text-2xl font-bold mt-10 mb-4 text-justify">
                  {slide.texto2}
                </h1>
                <a href={slide.enlace}>
                <button
                  className={`px-16 py-2 mt-10 bg-white  hover:bg-[#CB1662] rounded-[20px] hover:text-white text-[#CB1662] font-bold ${
                    slide.botonPosicion === "derecha" ? "ml-auto" : "mr-auto"
                  }`}
                >
                  {slide.botonTexto}
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
