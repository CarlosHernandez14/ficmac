import React from 'react'

function Inputs({setValor, setDescripcion}) {

  const handleValorChange = (event) => {
    const value = event.target.value;
    
    setValor(value);
    
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleKeyDown = (event) => {
    const allowedKeys = [
      'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter', 'Escape',
    ];
    const isNumberKey = event.key >= '0' && event.key <= '9';

    if (!allowedKeys.includes(event.key) && !isNumberKey) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-8 py-4 space-x-6">
        <div className="flex flex-col w-full">
          <label htmlFor="monto" className="text-white">
            Monto (USD)
          </label>
          <input
            type="text"
            id="monto"
            placeholder='Monto (USD)*'
            className="w-full p-2 rounded-md bg-gray-200 focus:outline-none text-sm"
            onChange={handleValorChange}
            onKeyDown={handleKeyDown}
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
            onChange={handleDescripcionChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Inputs