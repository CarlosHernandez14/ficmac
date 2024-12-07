import React from 'react';

const PostCard = ({ question, description, categories, likes, responses, compact = false }) => {
  return (
    <div
      className={`bg-[#A0737D] mb-6 p-${compact ? '4' : '6'} rounded-lg shadow-lg ${compact ? 'text-sm' : 'text-base'
        }`}
    >
      {/* Encabezado */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-black rounded-full mr-4"></div>
        <h2 className="text-xl font-semibold text-white">{question}</h2>
      </div>

      {/* Descripción */}
      <p className="text-white mb-4">{description}</p>

      {/* Categorías */}
      <div className="mb-4">
        {categories ? (
          <span className="bg-gray-200 text-gray-700 rounded-lg px-3 py-1 text-sm font-medium">
            {categories}
          </span>
        ) : (
          <span className="text-gray-400 italic">Sin categoría</span>
        )}
      </div>

      {/* Separador */}
      <hr className="my-4 border-white" />

      {/* Interacciones */}
      <div className="flex justify-start space-x-10 text-white text-base items-start">

        <div className="flex items-center space-x-2">
          <img src="/Foro/like_foro.png" alt="Likes" className="w-5 h-5" />
          <span>{likes} Votos</span>
        </div>

        <div className="flex items-center space-x-2">
          <img src="/Foro/Comentario_foro.png" alt="Comentarios" className="w-5 h-5" />
          <span>{responses} Respuestas</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;