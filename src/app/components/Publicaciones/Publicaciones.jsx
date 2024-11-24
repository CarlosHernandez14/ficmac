"use client"
import React from 'react'
import Publicacion from './Publicacion/Publicacion'
import { useState, useEffect } from 'react'
import { getPublicacionesCientificas, getPublicacionCientificaByTipoCancerId } from '@/actions/publicaciones/publicaciones.actions'

function Publicaciones({ setPublicaciones, publicaciones, idTipoCancer }) {

  useEffect(() => {
    const fetchPublicaciones = async () => {
      if (idTipoCancer === "0") {
        const response = await getPublicacionesCientificas();
        if (response.publicaciones) {
          setPublicaciones([]);
          setPublicaciones(response.publicaciones);
        }
      } else {
        const response = await getPublicacionCientificaByTipoCancerId(parseInt(idTipoCancer));
        if (response.publicaciones) {
          setPublicaciones([]);
          setPublicaciones(response.publicaciones);
        }
      }
    };
    console.log("Publicaciones", publicaciones);
    fetchPublicaciones();
  }, [idTipoCancer]);

  return (
    <div className='flex-grow overflow-y-auto max-h-[470px] px-4'>
        {publicaciones.map((publicacion) => (
          <Publicacion key={publicacion.id} publicacion={publicacion} />
        ))}
    </div>
  )
}

export default Publicaciones