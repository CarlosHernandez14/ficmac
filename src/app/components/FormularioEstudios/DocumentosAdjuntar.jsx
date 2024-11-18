import React from "react";
import Texto from "./Texto";
import ExaminarArchivo from "./ExaminarArchivo";
import Linea from "./Linea";

const DocumentosAdjuntar = ({ texto,onFileChange }) => {
  return (
    <div>
      <div className="flex my-3 gap-2 justify-between ">
        <div className="mt-8">
          <Texto descripcion={texto} />
        </div>
        <div>
          <ExaminarArchivo />
        </div>
      </div>
      <div className="mt-2">
        <Linea />
      </div>
    </div>
  );
};

export default DocumentosAdjuntar;
