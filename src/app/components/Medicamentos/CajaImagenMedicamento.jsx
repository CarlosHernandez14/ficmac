import React from 'react'

function CajaImagenMedicamento({tipo}) {
    return (
      <div className="bg-[#CB1662] w-80 h-auto p-5 rounded-e-xl">
        <img
          src={tipo.path_imagen}
          alt={tipo.nombre}
          className="rounded-2xl w-full h-full object-cover "
        />
      </div>
    );
}

export default CajaImagenMedicamento
