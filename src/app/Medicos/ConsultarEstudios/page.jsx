import ScrollBar from "@/app/components/ConsultarResultados/Consultar/ScrollBar";

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
      <div className="relative  py-10 px-72 right-56">
        <ScrollBar />
      </div>
    </div>
  );
}

export default Page;
