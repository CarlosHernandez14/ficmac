import React, { useState } from "react";
import { IoDuplicateOutline } from "react-icons/io5";

function EditarImagen({ tipo }) {
  const [editando, setEditando] = useState(false);

  return (
    <div className="bg-[#CB1662] w-80 h-auto p-8 flex justify-center rounded-e-xl relative">
      <div className="relative">
        <img
          src={"/Medicamentos/image.png"}
          alt="Medicamento"
          className="rounded-2xl w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <button
            onClick={() => setEditando(true)}
            className=" hover:text-[#e4aec4] text-white font-bold py-2 px-4 rounded "
          >
            <IoDuplicateOutline className="text-6xl " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarImagen;
