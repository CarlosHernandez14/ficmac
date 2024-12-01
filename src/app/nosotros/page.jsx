import React from 'react'
import FlotadorDonacion from '../components/Donacion/FlotadorDonacion'
import FooterGeneral from '../components/Footer/FooterGeneral'
import NavbarGeneral from '../components/Navbar/NavbarGeneral'
import { Historia } from '../components/Nosotros/Historia'
import { TimeLine } from '../components/Nosotros/TimeLine'
import { QuienesSomos } from '../components/Nosotros/QuienesSomos'
import { MisionVisionValores } from '../components/Nosotros/MisionVisionValores'

const Nosotros = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarGeneral />
          <Historia/>
          <TimeLine/>
          <QuienesSomos/>
          <MisionVisionValores/>
      <FooterGeneral />
      <FlotadorDonacion />
    </div>
  )
}

export default Nosotros