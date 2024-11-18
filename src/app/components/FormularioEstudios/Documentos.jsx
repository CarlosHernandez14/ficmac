"use client"
import React, { useState, useTransition } from "react";
import IconosAvance from "./IconosAvance";
import ExaminarArchivo from "./ExaminarArchivo";
import Texto from "./Texto";
import DocumentosAdjuntar from "./DocumentosAdjuntar";
import ButtonAzul from "../General/ButtonAzul";
import { getFilesFromUser, uploadFile } from "@/actions/documentos/documentos";

const Documentos = () => {
  //TODO: Corregir fallo, se guarda en la lista el archivo cada que se cambia el documento en cualquier campo, lo cual puede hacer que se generen muchos mas archivos de los necesarios
  const [fileList, setFileList] = useState([]);
  const [isPending, startTransition] = useTransition()
  const fileListFunction = (file) => {
    const newFileList = fileList
    newFileList.push(file)
    setFileList(newFileList)
    console.log(fileList)
  }

  const enviarDocumentos = async () => {
    startTransition(() => {
      if(fileList.length >= 6){
        console.log("Enviando documentos")
        uploadFile(fileList).then((response) => {
          if(response.error){
            console.log(response.error)
          }
          if(response.success){
            console.log(response.success)
            
          }
        })
      }
      else{
        console.log("Faltan documentos por adjuntar")
      }
    })
  }


  return (
    <div className="flex h-screen justify-center">
      <div className="p-4 flex flex-col items-center justify-start ml-10">
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
          onFileChange={fileListFunction}
        />
        <DocumentosAdjuntar texto={"Fotocopia del docuemento de identidad.*"} onFileChange={fileListFunction}/>
        <DocumentosAdjuntar
          texto={
            "Consentimiento informado de ONTEC (Firmado por el paciente, acudiente del paciente o médico tratante).*"
          }
          onFileChange={fileListFunction}
        />
        <DocumentosAdjuntar
          texto={"Voucher o Bono si fue emitido por su médico tratante.*"}
          onFileChange={fileListFunction}
        />
        <DocumentosAdjuntar texto={"Resumen de Historia Clínica.*"} onFileChange={fileListFunction}/>
        <DocumentosAdjuntar
          texto={
            "Informe de Patología de la Biopsia de Tejido(Para exámen en Biopsia sólida).*"
          }
          onFileChange={fileListFunction}
        />
        <div className="flex justify-center">
          <div className="w-1/3 mt-5">
            <ButtonAzul onClick={enviarDocumentos} text={"Enviar"} className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentos;
