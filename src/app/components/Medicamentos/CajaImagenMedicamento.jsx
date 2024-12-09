import React from 'react'

function CajaImagenMedicamento({tipo}) {
    return (
      <div className="bg-[#CB1662] w-80 h-auto p-5 rounded-e-xl">
        {tipo ? (
          <img
            src={tipo}
            alt={"Medicamento"}
            className="rounded-2xl w-full h-full object-cover "
          />
        ) : (
          <p>No hay imagen disponible</p>
        )}
      </div>
    );
}

export default CajaImagenMedicamento
