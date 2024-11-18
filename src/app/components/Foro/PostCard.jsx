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
      <div className="flex space-x-2 mb-4">
        {categories.map((category, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 rounded-xl px-3 py-1 text-sm font-medium"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Separador */}
      <hr className="my-4 border-white" />

      {/* Interacciones */}
      <div className="flex justify-start space-x-10 text-white text-base">
        <span>{likes} Votos</span>
        <span>{responses} Respuestas</span>
      </div>
    </div>
  );
};

export default PostCard;