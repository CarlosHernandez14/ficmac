import React from 'react'

function ButtonTipoCancer({tipo}) {
  return (
    <div className='hover:bg-white hover:text-black hover:rounded-r-full text-white'>
        <button className="px-4 py-1 rounded-md text-center ">
            {tipo}
        </button>
    </div>
  )
}

export default ButtonTipoCancer