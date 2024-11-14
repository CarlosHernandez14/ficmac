"use client"
import { useState } from "react";

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
      categories: ["Cáncer de mama", "Cáncer"],
      likes: 63,
      responses: 16,
    },
    {
      id: 5,
      question: "¿Qué pruebas recomiendan para la detección temprana de cáncer de mama?",
      description:
        "Quiero hacerme estudios para prevenir el cáncer de mama. ¿Qué pruebas son las más recomendadas para una detección temprana?",
      categories: ["Cáncer de mama", "Cáncer"],
      likes: 63,
      responses: 16,
    },
    {
      id: 6,
      question: "¿Qué pruebas recomiendan para la detección temprana de cáncer de mama?",
      description:
        "Quiero hacerme estudios para prevenir el cáncer de mama. ¿Qué pruebas son las más recomendadas para una detección temprana?",
      categories: ["Cáncer de mama", "Cáncer"],
      likes: 63,
      responses: 16,
    },
  ];

  const categories = [
    "Cáncer de piel",
    "Cáncer de colon",
    "Cáncer de pulmón",
    "Leucemia",
    "Cáncer de laringe",
    "Melanoma",
    "Cáncer de seno",
    "Cáncer de próstata",
    "Cáncer de ovario",
    "Cáncer de hígado",
    "Cáncer de estómago",
    "Cáncer de riñón",
  ];

  const [showAllCategories, setShowAllCategories] = useState(false);

  const displayedCategories = showAllCategories ? categories : categories.slice(0, 7);

  return (
    <div className="w-full h-full bg-white flex p-10">

      <div className="max-w-5xl p-4 rounded-3xl pl-8 pr-8 bg-[#D9D9D9]">

        <div className="relative flex items-center space-x-4 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar Post"
              className="w-full h-[3.2rem] pl-10 p-2 border border-gray-300 text-[#666666] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A0737D]"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-1 justify-between">
          {displayedCategories.map((category, index) => (
            <span
              key={index}
              className="bg-white text-gray-700 rounded-xl px-4 py-2 text-sm border border-gray-300 shadow-lg"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="flex justify-end pr-1">
          {categories.length > 7 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-[#753350] hover:underline text-sm"
            >
              {showAllCategories ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>

        <h1 className="text-3xl font-bold pl-1 mb-6 text-[#753350]">Post en Tendencia</h1>

        {posts.map((post) => (
          <div key={post.id} className="bg-[#A0737D] p-6 rounded-lg shadow-lg mb-6">

            <div className="flex items-center">
              <div className="w-12 h-12 bg-black rounded-full mr-4"></div>
              <h2 className="text-xl font-semibold text-white">{post.question}</h2>
            </div>

            <p className="text-white mt-2">{post.description}</p>

            <div className="flex space-x-2 mt-4">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 rounded-xl px-3 py-1 text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>

            <hr className="my-4 border-white" />

            <div className="flex justify-start space-x-10 text-white text-base">
              <span>{post.likes} Votos</span>
              <span>{post.responses} Respuestas</span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
