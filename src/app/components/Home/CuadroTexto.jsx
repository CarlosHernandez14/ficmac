import React from 'react'
import CuadroAzul from './CuadroAzul'
import Texto from '../FormularioEstudios/Texto'
import TextoDerecho from './TextoDerecho'

const CuadroTexto = () => {
  return (
    <div className="flex my-20">
      <CuadroAzul/>
        <TextoDerecho
        titulo={"¡Cada persona es única, y en Ontec, cada tratamiento está diseñado para reflejar esa singularidad!"}
        descripcion={"La medicina de precisión es el futuro del cuidado de la salud, brindando tratamientos personalizados para cada paciente."}
        boton={"Conocer más"}
        />

  
    </div>
  )
}

export default CuadroTexto
