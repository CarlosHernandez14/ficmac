import React from "react";

const Check = ({texto}) => {
  return (
    <div className="flex">
      <img
        src="/Home/icono_verificacion.png"
        className="w-10 h-10"
      />
      <h1 className=" text-white text-xl">{texto}</h1>
    </div>
  );
};

export default Check;
