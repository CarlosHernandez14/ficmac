"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  getPublicacionesCientificas,
  getPublicacionCientificaByTipoCancerId,
} from "@/actions/publicaciones/publicaciones.actions";
import PublicacionAdmin from "./PublicacionAdmin";

function PublicacionesAdmin({ setPublicaciones, publicaciones, idTipoCancer }) {
  useEffect(() => {
    const fetchPublicaciones = async () => {
      if (idTipoCancer === "0") {
        const response = await getPublicacionesCientificas();
        if (response.publicaciones) {
          setPublicaciones([]);
          setPublicaciones(response.publicaciones);
        }
      } else {
        const response = await getPublicacionCientificaByTipoCancerId(
          parseInt(idTipoCancer)
        );
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
    <div className="flex-grow overflow-y-auto max-h-[450px] px-4">
      {publicaciones.map((publicacion) => (
        <PublicacionAdmin key={publicacion.id} publicacion={publicacion} />
      ))}
    </div>
  );
}

export default PublicacionesAdmin;
