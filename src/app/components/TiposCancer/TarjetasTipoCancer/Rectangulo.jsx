import React from 'react'

function Rectangulo ({ texto = ''})  {
    return (
        <div className="bg-[#2e6e8a] flex items-center pl-4 w-96 h-80" >
          <p className="text-left text-white font-bold text-4xl mr-44 ">{texto}</p>
        </div>
    )
  }
  export default Rectangulo