// pages/forum.js

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
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-[#753350]">Posts en Tendencia</h1>

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
  );
}
