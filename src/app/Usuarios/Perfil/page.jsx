import ImagenPerfil from "@/app/components/Perfil/ImagenPerfil";
import CajaInformacion from "@/app/components/Perfil/CajaInformacion";

function page() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/Perfil/PF1.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#D9D9D9] to-transparent"></div>
      <div className="flex justify-between relative z-10 px-20 py-24 space-x-20">
        <ImagenPerfil />
        <CajaInformacion />
      </div>
    </div>
  );
}

export default page;
