"use client";
import React from "react";

function ButtonImage({ text, imagen, onClick }) {
  return (
    <button
      className="bg-[#367B99] text-white w-full p-2 rounded-lg hover:bg-[#5c57e8] flex justify-around"
      onClick={onClick}
    >
      {text}
      <img src={imagen} className="w-6 h-6 " />
    </button>
  );
}

export default ButtonImage;
