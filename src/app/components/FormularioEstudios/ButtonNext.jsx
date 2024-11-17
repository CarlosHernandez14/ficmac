import React from "react";

function ButtonNext({text,onClick}) {
  return (
    <button className="bg-[#367B99] text-white w-full p-2 rounded-lg hover:bg-[#5c57e8]" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonNext;