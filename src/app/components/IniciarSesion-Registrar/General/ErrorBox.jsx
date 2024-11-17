import React from 'react'
import { BiError } from 'react-icons/bi'

const ErrorBox = ({error}) => {
  return (
    <div>
        <div className="bg-red-500 p-2 text-white text-center rounded-md mb-6 flex justify-between gap-3">
            <BiError className='text-xl'/>
            <p className='text-white text-sm'>{error}</p>
        </div>
    </div>
  )
}

export default ErrorBox