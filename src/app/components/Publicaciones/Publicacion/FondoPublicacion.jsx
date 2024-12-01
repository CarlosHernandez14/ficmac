import React from "react";

function FondoPublicacion() {
  return (
    <div className="relative w-full h-[360px]">
      <img
        src="/Publicaciones/imgArticulo1.jpg"
        alt="Background"
        className="w-full h-full object-cover rounded-md"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        }}
      />
    </div>
  );
}

export default FondoPublicacion;
