import React from "react";

function Circulo({ color = "blue", size = "50px", imagen }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
      className="rounded-full overflow-hidden flex items-center justify-center"
    >
      {imagen && (
        <img
          src={imagen}
          alt="Imagen dentro del círculo"
          className="w-1/2 h-2/3 object-cover"
        />
      )}
    </div>
  );
}

export default Circulo;
