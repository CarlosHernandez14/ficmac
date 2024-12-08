"use client"
import { useState, useEffect } from "react";
import Image from 'next/image';

import PostCard from "@/app/components/Foro/PostCard";
import ModalNewPost from "@/app/components/Foro/ModalNewPost";

import { getUser } from "@/actions/users/edit";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";
import { createPost, getPosts, getPostById } from "@/actions/foro/post.actions";

import ImagenPerfil from "@/app/components/Foro/ImagenPerfil";

export default function Forum() {

  const savedPosts = [
    { id: 2, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
    { id: 3, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
    { id: 4, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
    { id: 5, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
  ];

  const [userName, setUserName] = useState("");

  const [categories, setCategories] = useState([]);

  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, categoriesResponse, myPostsResponse] = await Promise.all([
          getPosts(),
          getTiposCancer(),
          getPostById(),
        ]);

        if (postsResponse.OK) {
          setPosts(postsResponse.data);
        } else {
          throw new Error(postsResponse.message || "Error al obtener los posts");
        }

        if (categoriesResponse.tiposCancer) {
          setCategories(categoriesResponse.tiposCancer);
        } else {
          throw new Error(categoriesResponse.error || "Error al obtener las categorías");
        }

        if (myPostsResponse.OK) {
          setMyPosts(myPostsResponse.data);
        } else {
          throw new Error(categoriesResponse.error || "Error al obtener los posts del usuario");
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      if (user) {
        setUserName(user.name);
      }
    };

    fetchUser();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  // Filtrar publicaciones según la categoría seleccionada
  const filteredPosts = selectedCategory ? posts.filter((post) => post.Tipo_Cancer?.nombre === selectedCategory) : posts;

  // Crear post
  const [showModal, setShowModal] = useState(false);

  const handleCreatePost = async (newPost) => {
    try {
      const response = await createPost(newPost);
      if (response.OK) {
        alert("Publicación creada exitosamente");
        setShowModal(false);
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert("Error al crear la publicación");
    }
  };


  return (
    <div className="relative w-full min-h-screen bg-white flex p-10 justify-between">

      <div className="absolute inset-0">
        <Image
          src="/Foro/fondo_foro.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white from-8% to-transparent to-40% z-10" />
      <div className="absolute inset-0 bg-gradient-to-l from-white from-8% to-transparent to-40% z-10" />

      <div className="relative max-w-5xl min-w-[1030px] z-10 p-4 rounded-3xl pl-8 pr-8 bg-[#D9D9D9]">

        <div className="relative flex items-center space-x-4 mb-4">
          <div className="relative flex-grow">
            <img src="/Foro/Search_foro.png" alt="Buscar" className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar Post"
              className="w-full h-[3.2rem] pl-10 p-2 border border-gray-300 text-[#666666] text-xl rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A0737D]"
            />
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-2 mb-6 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.nombre)}
              className={`flex-shrink-0 bg-white text-gray-700 rounded-xl px-4 py-2 text-sm border ${selectedCategory === category.nombre ? "bg-[#753350] text-[#753350] border-[#753350]" : "border-gray-300"}`}
            >
              {category.nombre}
            </button>
          ))}
        </div>

        <h1 className="text-2xl font-bold pl-1 mb-6 text-[#753350]">Post en Tendencia</h1>

        <div className="h-[660px] min-h-[660px] overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              question={post.titulo}
              description={post.cuerpo}
              categories={post.Tipo_Cancer.nombre}
              likes={post.Voto?.length || 0} // Contar los votos
              responses={post.responses || 0}
              compact={false}
            />
          ))}
        </div>
      </div>


      <div className="flex flex-col justify-between space-y-6 w-[40%] z-10">

        {/* Perfil del usuario */}
        <div className="h-[60%] bg-[#D9D9D9] rounded-3xl p-6 shadow-lgs">

          <div className="flex items-center justify-end">
            <button onClick={() => setShowModal(true)} className="flex p-4 bg-[#753350] text-white rounded-full hover:bg-[#5a2530] items-end">
              <img src="/Foro/Nuevo_post_foro.png" alt="Likes" className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="w-[8rem] h-[8rem]">
            <ImagenPerfil/>
            </div>
            
            <h2 className="text-xl font-bold mt-4 text-[#753350]">{userName}</h2>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#753350] ml-2">Mis Posts</h3>

          </div>

          <div className="h-[14rem] overflow-y-scroll pr-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {myPosts.map((post) => (
              <PostCard
                key={post.id}
                question={post.titulo}
                description={post.cuerpo}
                categories={post.Tipo_Cancer?.nombre}
                likes={post.Voto?.length || 0} // Contar los votos
                responses={post.responses || 0}
                compact={true}
                myPost={true}
                postId={post.id}
              />
            ))}
          </div>

          {/* Modal */}
          {showModal && (
            <ModalNewPost
              onClose={() => setShowModal(false)}
              onSubmit={handleCreatePost}
              categories={categories}
            />
          )}

        </div>

        {/* Posts Guardados */}
        <div className="h-[40%] bg-[#D9D9D9] rounded-3xl p-6 shadow-lg">

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#753350]">Post Guardados</h3>
            <button className="text-sm text-[#753350] hover:underline">Ver todos</button>
          </div>

          <div className="h-[16rem] overflow-y-scroll pr-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {savedPosts.map((post) => (
              <PostCard
                key={post.id}
                question={post.titulo}
                description={post.cuerpo}
                categories={post.Tipo_Cancer?.nombre}
                likes={post.Voto?.length || 0} // Contar los votos
                responses={post.responses || 0}
                compact={true}
              />
            ))}
          </div>
        </div>

      </div>



    </div>
  );
}
