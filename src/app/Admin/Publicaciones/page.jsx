import InfoPubliAdmin from '@/app/components/Admin/Publicaciones/InfoPubliAdmin'
import React from 'react'

function page() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="\Publicaciones\fondoPub.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>
      <div className="relative z-10">
        <InfoPubliAdmin />
      </div>
    </div>
  )
}

export default page