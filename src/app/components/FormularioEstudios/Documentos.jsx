"use client"
import React, { useState, useTransition } from "react";
import IconosAvance from "./IconosAvance";
import ExaminarArchivo from "./ExaminarArchivo";
import Texto from "./Texto";
import DocumentosAdjuntar from "./DocumentosAdjuntar";
import ButtonAzul from "../General/ButtonAzul";
import { getFilesFromUser, uploadFile } from "@/actions/documentos/documentos";
import { useRouter } from "next/navigation";
import { createSolicitud } from "@/actions/estudios/solicitud.actions";

/**
 * Componente `Documentos`:
 * 
 * Este componente permite al usuario adjuntar una lista de documentos necesarios.
 * Al adjuntar todos los archivos requeridos, el usuario puede enviarlos a través de la acción `uploadFile`.
 * 
 * Funcionalidad:
 * - Usa un estado local (`fileList`) para manejar la lista de archivos.
 * - Incluye validación para asegurarse de que se hayan adjuntado al menos 6 documentos antes de enviarlos.
 * - Integra acciones para subir los documentos y crear una solicitud asociada.
 */


const Documentos = () => {
  //TODO: Corregir fallo, se guarda en la lista el archivo cada que se cambia el documento en cualquier campo, lo cual puede hacer que se generen muchos mas archivos de los necesarios
  const [fileList, setFileList] = useState([]);
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
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
            window.alert("Documentos enviados correctamente")
            router.push('/')
            // Llama a createSolicitud después de subir los documentos
            createSolicitud({
              idPaciente: 'cm3nu5igd0000rpkwze2hk230',
              idEstudio: 2,
              path_orden_medica: response.links[0],
              path_identificacion: response.links[1],
              path_concentimiento: response.links[2],
              path_voucher: response.links[3],
              path_historia_clinica: response.links[4],
              path_informe_patologia: response.links[5]
            }).then((solicitudResponse) => {
              if (solicitudResponse.error) {
                console.log(solicitudResponse.error);
              }
              if (solicitudResponse.success) {
                console.log('Solicitud creada:', solicitudResponse);
              }
            }).catch((error) => {
              console.error('Error al crear la solicitud:', error);
            });
          }
        })
      }
      else{
        console.log("Faltan documentos por adjuntar")
        window.alert("Faltan documentos por adjuntar")
      }
    })
  }

  


  return (

    <div className="flex min-h-screen  justify-center">
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
