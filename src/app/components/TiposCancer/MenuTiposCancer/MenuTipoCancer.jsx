"use client"
import React, { useEffect, useState, useTransition } from "react";
import ButtonTipoCancer from "./ButtonTipoCancer";
import { getCancer, getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";

function MenuTipoCancer({ setCanceres }) {
  const [isPending, startAction] = useTransition()
  const [tiposCancer, setTiposCancer] = useState([])
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleButtonClick = (id) => {
    setClickedButtonId(id);
  };

  const getInfo = async () => {
    startAction(() => {
      getTiposCancer().then((response) => {
        if(response.error){
          console.log(response.error)
        }
        if(response.success){
          setTiposCancer(response.tiposCancer)
          console.log(response.tiposCancer)
        }
      })
    })
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div className="bg-[#753350] 
    sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-1/3
    sm:h-screen md:h-screen lg:h-screen xl:h-[500px] 2xl:h-[500px]  
    rounded-md">
      <p className="text-white font-bold p-4 text-center text-lg">Tipos de cáncer</p>
      <hr className="border-t border-white mx-4" />
      <div className="flex flex-col py-4 space-y-4 cursor-pointer overflow-y-auto max-h-[400px]">
        {tiposCancer && tiposCancer.map((tipo, id) => (
          <ButtonTipoCancer key={id} tipo={tipo.nombre} id={tipo.id} setCanceres={setCanceres}
          isClicked={clickedButtonId === tipo.id} onClick={handleButtonClick}/>
        ))}
      </div>
    </div>
  );
}

export default MenuTipoCancer;
