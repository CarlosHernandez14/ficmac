import React from "react";

function ButtonAzul({text}) {
  return (
    <button className="bg-[#367B99] text-white w-full p-2 rounded-lg hover:bg-[#5c57e8]">
      {text}
    </button>
  );
}

export default ButtonAzul;