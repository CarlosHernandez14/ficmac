"use client";
import React, { useRef, useState } from "react";
import ButtonImage from "./ButtonImage";

const ExaminarArchivo = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(
    "Ningún archivo seleccionado | Tamaño máximo 3MB"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="rounded-[20px] border-[#367B99] w-[400px] h-[105px] border-[3px] bg-white">
      <div className="flex flex-col p-2">
        <div className="text-sm text-center">{fileName}</div>
        <div className="w-full mt-5 flex justify-center">
          <div className="w-1/2">
            <ButtonImage
              text={"Examinar"}
              imagen={"/FormularioSolicitarEstudios/adjuntar.png"}
              onClick={handleButtonClick}
            />
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ExaminarArchivo;
