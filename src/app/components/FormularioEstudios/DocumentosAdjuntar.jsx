import React from "react";
import Texto from "./Texto";
import ExaminarArchivo from "./ExaminarArchivo";
import Linea from "./Linea";

/**
 * Componente `DocumentosAdjuntar`:
 * 
 * Este componente combina un texto descriptivo, un botón para examinar archivos, y un separador (línea).
 * Se utiliza para adjuntar documentos específicos y registrar su cambio mediante la función `onFileChange`.
 * 
 * Props:
 * - `texto`: Descripción del archivo que se espera cargar.
 * - `onFileChange`: Función callback para manejar los cambios en el archivo seleccionado.
 */

const DocumentosAdjuntar = ({ texto,onFileChange }) => {
  return (
    <div>
      <div className="flex my-3 gap-2 justify-between ">
        <div className="mt-8">
          <Texto descripcion={texto} />
        </div>
        <div>
          <ExaminarArchivo onFileChange={onFileChange}/>
        </div>
      </div>
      <div className="mt-2">
        <Linea />
      </div>
    </div>
  );
};

export default DocumentosAdjuntar;
