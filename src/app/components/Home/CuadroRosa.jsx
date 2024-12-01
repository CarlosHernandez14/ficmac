import React from "react";

const CuadroRosa = ({ texto,imagen }) => {
  return (
    <div className="bg-[#753350] w-[500px] h-[200px] rounded-[20px] mt-10 flex justify-center items-center">
      <div className="flex w-full h-full">
        <div className="w-[154px] h-[143px] bg-white rounded-[20px] flex justify-center items-center m-6">
          <img src={imagen} className="w-[100px] h-[100px]"/>
        </div>

        <div className="w-3/5 flex items-center pl-4">
          <h1 className="text-white text-xl">{texto}</h1>
        </div>
      </div>
    </div>
  );
};

export default CuadroRosa;
