
import General from "@/app/components/ConsultarResultados/Consultar/General";

function Page() {
  return (
    <div className="relative w-full h-full ">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/Medicos/MCE1.png')",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#D9D9D9] to-transparent"></div>
      
      <General/>
     
    </div>
  );
}

export default Page;
