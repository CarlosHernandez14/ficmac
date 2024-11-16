
import ScrollBar from "@/app/components/ConsultarResultados/Consultar/ScrollBar";
import TextoTiposBiopsia from "@/app/components/ConsultarResultados/Consultar/TextoTiposBiopsia";

function Page() {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/Medicos/MCE1.png')",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#D9D9D9] to-transparent"></div>
      <div className="flex justify-between relative  py-5 px-24">
        
          <ScrollBar />
       
        <TextoTiposBiopsia />
        
      </div>
      
    </div>
  );
}

export default Page;
