import React from "react";
import IconosAvance from "./IconosAvance";
import ExaminarArchivo from "./ExaminarArchivo";
import Texto from "./Texto";
import DocumentosAdjuntar from "./DocumentosAdjuntar";
import ButtonAzul from "../General/ButtonAzul";

const Documentos = () => {
  return (
    <div className="flex h-screen justify-center">
      <div className=" w-1/5 p-4 flex flex-col items-center justify-start mr-48 ml-10">
        <IconosAvance
          imagen={"/FormularioSolicitarEstudios/carpeta blanca.png"}
          color={"#367B99"}
          fondo={"#367B99"}
        />
      </div>
      <div className="mx-28">
        <DocumentosAdjuntar
          texto={
            "Orden Médica del especialista que solicita el estudio o Formato de Solicitud de Estudios.*"
          }
        />
        <DocumentosAdjuntar texto={"Fotocopia del docuemento de identidad.*"} />
        <DocumentosAdjuntar
          texto={
            "Consentimiento informado de ONTEC (Firmado por el paciente, acudiente del paciente o médico tratante).*"
          }
        />
        <DocumentosAdjuntar
          texto={"Voucher o Bono si fue emitido por su médico tratante.*"}
        />
        <DocumentosAdjuntar texto={"Resumen de Historia Clínica.*"} />
        <DocumentosAdjuntar
          texto={
            "Informe de Patología de la Biopsia de Tejido(Para exámen en Biopsia sólida).*"
          }
        />
        <ButtonAzul text={"Enviar"} className="mt-5" />
      </div>
    </div>
  );
};

export default Documentos;
