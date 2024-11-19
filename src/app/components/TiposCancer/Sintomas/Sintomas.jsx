import React from "react";
import BolaSintoma from "./BolaSintoma";
function Sintomas({ sintomas = []}) {
  return (
    <div>
      <p className="text-4xl font-bold text-center">Síntomas</p>
      <div className="grid grid-cols-4 gap-2 justify-center py-4">
        {sintomas.map((sintoma, index) => (
          <BolaSintoma
            key={index}
            nombre={sintoma.Sintoma.nombre}
            descripcion={sintoma.Sintoma.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

export default Sintomas;
