import React from 'react'

function FotoEstudio({imagen, tipo}) {
  return (
    <div className="w-40 h-auto rounded-l-lg flex justify-center items-center" style={{ background: "linear-gradient(180deg, #DD75A1 0%, #CB1662 43%, #7F0E3D 75%, #650B31 100%)" }}>
        <img src={imagen} alt={tipo} className="w-full h-full rounded-l-lg"/>
    </div>
  )
}

export default FotoEstudio