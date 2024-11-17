import React from 'react'

const SuccessBox = ({success}) => {
  return (
    <div>
        <div className="bg-green-500 p-2 text-white text-center rounded-md mb-6 flex justify-between gap-3">
            <p className='text-white text-sm'>{success}</p>
        </div>
    </div>
  )
}

export default SuccessBox