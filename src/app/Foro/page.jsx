"use client"
import { useState } from "react";
import Image from 'next/image';
import PostCard from "@/app/components/Foro/PostCard";
//import PostCard from './components/Foro/PostCard';

export default function Forum() {
  const posts = [
    {
      id: 1,
      question: "¿Cuáles son los síntomas iniciales del cáncer de piel?",
      description:
        "Estoy notandno una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?",
      categories: ["Cáncer de piel", "Cáncer"],
      likes: 120,
      responses: 30,
    },
    {
      id: 2,
      question: "¿Qué pruebas recomiendan para la detección temprana de cáncer de mama?",
      description:
        "Quiero hacerme estudios para prevenir el cáncer de mama. ¿Qué pruebas son las más recomendadas para una detección temprana?",
      categories: ["Cáncer de mama", "Cáncer"],
      likes: 63,
      responses: 16,
    },
    {
      id: 3,
      question: "¿Qué pruebas recomiendan para la detección temprana de cáncer de mama?",
      description:
        "Quiero hacerme estudios para prevenir el cáncer de mama. ¿Qué pruebas son las más recomendadas para una detección temprana?",
      categories: ["Cáncer de mama", "Cáncer"],
      likes: 63,
      responses: 16,
    },
    {
      id: 4,
      question: "¿Qué pruebas recomiendan para la detección temprana de cáncer de mama?",
      description:
        "Quiero hacerme estudios para prevenir el cáncer de mama. ¿Qué pruebas son las más recomendadas para una detección temprana?",
      categories: ["Cáncer de colon", "Cáncer"],
      likes: 63,
      responses: 16,
    },
    {
      id: 5,
      question: "¿Qué pruebas recomiendan para la detección temprana de cáncer de mama?",
      description:
        "Quiero hacerme estudios para prevenir el cáncer de mama. ¿Qué pruebas son las más recomendadas para una detección temprana?",
      categories: ["Cáncer de colon", "Cáncer"],
      likes: 63,
      responses: 16,
    },
    {
      id: 6,
      question: "¿Qué pruebas recomiendan para la detección temprana de cáncer de mama?",
      description:
        "Quiero hacerme estudios para prevenir el cáncer de mama. ¿Qué pruebas son las más recomendadas para una detección temprana?",
      categories: ["Cáncer de próstata", "Cáncer"],
      likes: 63,
      responses: 16,
    },
  ];

  const myPosts = [
    { id: 1, question: "¿Cómo prevenir el cáncer de piel?", description: "¿Qué tipo de protector solar recomiendan para prevenir el cáncer de piel en climas cálidos?", categories: ["Cáncer de piel", "Cuidado personal"], likes: 45, responses: 10 },
    { id: 3, question: "¿Cómo prevenir el cáncer de piel?", description: "¿Qué tipo de protector solar recomiendan para prevenir el cáncer de piel en climas cálidos?", categories: ["Cáncer de piel", "Cuidado personal"], likes: 45, responses: 10 },
    { id: 4, question: "¿Cómo prevenir el cáncer de piel?", description: "¿Qué tipo de protector solar recomiendan para prevenir el cáncer de piel en climas cálidos?", categories: ["Cáncer de piel", "Cuidado personal"], likes: 45, responses: 10 },
    { id: 5, question: "¿Cómo prevenir el cáncer de piel?", description: "¿Qué tipo de protector solar recomiendan para prevenir el cáncer de piel en climas cálidos?", categories: ["Cáncer de piel", "Cuidado personal"], likes: 45, responses: 10 },
  ];

  const savedPosts = [
    { id: 2, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
    { id: 3, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
    { id: 4, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
    { id: 5, question: "¿Cuáles son los síntomas iniciales del cáncer de piel?", description: "Estoy notando una nueva mancha en mi piel. ¿Cómo puedo saber si es un síntoma de alerta o solo algo benigno?", categories: ["Cáncer de piel", "Cáncer"], likes: 120, responses: 30 },
  ];

  const categories = [
    "Cáncer de piel",
    "Cáncer de mama",
    "Cáncer de colon",
    "Cáncer de pulmón",
    "Leucemia",
    "Cáncer de laringe",
    "Melanoma",
    "Cáncer de próstata",
    "Cáncer de ovario",
    "Cáncer de hígado",
    "Cáncer de estómago",
    "Cáncer de riñón",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  // Filtrar publicaciones según la categoría seleccionada
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts; // Si no hay categoría seleccionada, mostrar todas las publicaciones


  return (
    <div className="w-full min-h-screen bg-white flex p-10 justify-between">

      <div className="absolute inset-0">
        <Image
          src="/fondo_foro.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white from-8% to-transparent to-40% z-10" />
      <div className="absolute inset-0 bg-gradient-to-l from-white from-8% to-transparent to-40% z-10" />

      <div className="relative max-w-5xl z-10 p-4 rounded-3xl pl-8 pr-8 bg-[#D9D9D9]">

        <div className="relative flex items-center space-x-4 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar Post"
              className="w-full h-[3.2rem] pl-10 p-2 border border-gray-300 text-[#666666] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A0737D]"
            />
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-2 mb-6 pb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`flex-shrink-0 bg-white text-gray-700 rounded-xl px-4 py-2 text-sm border ${selectedCategory === category ? "bg-[#753350] text-gray-700 border-[#753350]" : "border-gray-300"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <h1 className="text-3xl font-bold pl-1 mb-6 text-[#753350]">Post en Tendencia</h1>

        <div className="h-[660px] overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              question={post.question}
              description={post.description}
              categories={post.categories}
              likes={post.likes}
              responses={post.responses}
              compact={false}
            />
          ))}
        </div>
      </div>


      <div className="flex flex-col justify-between space-y-6 w-[40%] z-10">

        {/* Perfil del usuario */}
        <div className="h-[53%] bg-[#D9D9D9] rounded-3xl p-6 shadow-lg">

          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 bg-black rounded-full"></div>
            <h2 className="text-xl font-bold mt-4 text-[#753350]">Leonardo Aguilar</h2>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#753350]">Mis Posts</h3>
            <button className="text-sm text-[#753350] hover:underline">Ver todos</button>
          </div>

          <div className="h-[14rem] overflow-y-scroll pr-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {myPosts.map((post) => (
              <PostCard
                key={post.id}
                question={post.question}
                description={post.description}
                categories={post.categories}
                likes={post.likes}
                responses={post.responses}
                compact={true}
              />
            ))}
          </div>

        </div>

        {/* Posts Guardados */}
        <div className="h-[40%] bg-[#D9D9D9] rounded-3xl p-6 shadow-lg">
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#753350]">Post Guardados</h3>
            <button className="text-sm text-[#753350] hover:underline">Ver todos</button>
          </div>

          <div className="h-[16rem] overflow-y-scroll pr-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {savedPosts.map((post) => (
              <PostCard
                key={post.id}
                question={post.question}
                description={post.description}
                categories={post.categories}
                likes={post.likes}
                responses={post.responses}
                compact={true}
              />
            ))}
          </div>
        </div>

      </div>



    </div>
  );
}
