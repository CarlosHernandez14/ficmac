import React from 'react';

import { deletePost } from "@/actions/foro/post.actions";
import ImagenPost from "@/app/components/Foro/ImagenPost";

const PostCard = ({ question, description, categories, likes, responses, compact = false, myPost = false, postId, imageSrc, onClickResponses, isSelected = false }) => {

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este post?");
    if (confirmDelete) {
      try {
        const response = await deletePost(postId);
        if (response.OK) {
          alert("Post eliminado exitosamente");
          // Aquí puedes agregar lógica adicional, como actualizar la lista de posts en el estado.
        } else {
          alert(response.message || "No se pudo eliminar el post");
        }
      } catch (error) {
        alert("Error al intentar eliminar el post");
      }
    }
  };

  return (
    <div
      className={`mb-6 p-${compact ? '4' : '6'} rounded-lg shadow-lg ${compact ? 'text-sm' : 'text-base'} ${isSelected ? 'bg-[#753350]' : 'bg-[#A0737D]'}`}
    >
      {/* Encabezado */}
      <div className="flex items-center mb-4">
        <div className="w-[3rem] h-[3rem] mr-4">
          <ImagenPost imageSrc={imageSrc || "/Perfil/PF2.webp"}/>
        </div>
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
      <div className="flex justify-between space-x-10 text-white text-base items-center">

        <div className='flex justify-start space-x-4'>
          <div className="flex items-center space-x-2">
            <img src="/Foro/like_foro.png" alt="Likes" className="w-5 h-5" />
            <span>{likes} Votos</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer" onClick={onClickResponses}>
            <img src="/Foro/Comentario_foro.png" alt="Comentarios" className="w-5 h-5" />
            <span>{responses} Respuestas</span>
          </div>
        </div>

        <div className='flex items-end justify-end'>
          {/* Botón de eliminar si es un post del usuario */}
          {myPost && (
            <button onClick={handleDelete} className="flex items-center justify-center bg-[#cd2c2c] text-white rounded-lg p-2 hover:bg-red-700">
              <img src="/Foro/delete_foro.png" alt="Likes" className="w-5 h-5" />
            </button>
          )}
        </div>


      </div>


    </div>
  );
};

export default PostCard;