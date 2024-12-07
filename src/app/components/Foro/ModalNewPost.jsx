import { useState } from "react";


export default function ModalNewPost({ onClose, onSubmit, categories }) {

    const [newPost, setNewPost] = useState({
        titulo: "",
        cuerpo: "",
        idTipoCancer: "",
    });

    const handleSubmit = () => {
        if (!newPost.titulo || !newPost.cuerpo || !newPost.idTipoCancer) {
            alert("Por favor completa todos los campos.");
            return;
        }
        onSubmit(newPost); // Envía los datos al componente padre
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
                {/* Título y flecha hacia atrás */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={onClose}
                        className="text-[#753350] font-semibold hover:text-gray-800 focus:outline-none"
                    >
                        Atrás
                    </button>
                    <h2 className="text-xl font-semibold text-[#753350]">Nueva Publicación</h2>
                </div>
                <hr className="border-t border-[#A0737D]" />

                {/* Formulario */}
                <div className="">
                    <input
                        type="text"
                        placeholder="Título de la publicación"
                        value={newPost.titulo}
                        onChange={(e) =>
                            setNewPost({ ...newPost, titulo: e.target.value })
                        }
                        className="w-full p-2 mb-4 text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                    <hr className="border-t border-[#A0737D]" />

                    <textarea
                        placeholder="Escribe lo que piensas"
                        value={newPost.cuerpo}
                        onChange={(e) =>
                            setNewPost({ ...newPost, cuerpo: e.target.value })
                        }
                        className="w-full p-2 mb-4 text-gray-800 placeholder-gray-500 focus:outline-none"
                        rows={5}
                    />
                    <hr className="border-t border-[#A0737D]" />

                    <select
                        value={newPost.idTipoCancer}
                        onChange={(e) =>
                            setNewPost({
                                ...newPost,
                                idTipoCancer: parseInt(e.target.value, 10),
                            })
                        }
                        className="w-full p-2 mb-4 text-gray-800 bg-transparent focus:outline-none"
                    >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.nombre}
                            </option>
                        ))}
                    </select>
                    <hr className="border-t border-[#A0737D] pb-3" />

                    <button
                        onClick={handleSubmit}
                        className="w-full p-2 bg-[#753350] text-white rounded-lg hover:bg-[#5a2530]"
                    >
                        Publicar
                    </button>
                </div>
            </div>
        </div>
    );
}
