import React from 'react'

function Inputs() {
  return (
    <div>
      <div className="flex justify-between items-center px-8 py-4 space-x-6">
        <div className="flex flex-col w-full">
          <label htmlFor="monto" className="text-white">
            Monto
          </label>
          <input
            type="text"
            id="monto"
            placeholder='Monto *'
            className="w-full p-2 rounded-md bg-gray-200 focus:outline-none text-sm"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="descripcion" className="text-white">
            Descripcion del pago
          </label>
          <input
            type="text"
            id="descripcion"
            placeholder='Descripcion del pago *'
            className="w-full p-2 rounded-md text-sm bg-gray-200 focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}

export default Inputs