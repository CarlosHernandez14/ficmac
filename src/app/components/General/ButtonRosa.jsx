import React from "react";

function ButtonRosa({text}) {
  return (
    <button className="bg-[#CB1662] text-white w-full p-2 rounded-lg hover:bg-[#ec3d86]">
      {text}
    </button>
  );
}

export default ButtonRosa;
