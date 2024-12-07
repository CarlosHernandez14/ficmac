import React, { useState, useEffect } from "react";
import { FaTimes, FaSave } from "react-icons/fa";
import { getTiposCancer } from "@/actions/tipos_cancer/tiposCancer";
import { editPublicacionCientifica } from "@/actions/publicaciones/publicaciones.actions";
import NotificacionModal from "../Notificaciones/NotificacionModal";

function PopUpEditar({ publicacion, onClose }) {
  const [tipoCancer, setTipoCancer] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [titulo, setTitulo] = useState(publicacion.titulo);
  const [resumen, setResumen] = useState(publicacion.resumen);
  const [link, setLink] = useState(publicacion.link);
  const [selectedTipoCancer, setSelectedTipoCancer] = useState(publicacion.idTipoCancer);

  // Función para obtener los tipos de cáncer
  const obtenerTiposCancer = async () => {
    const response = await getTiposCancer();
    if (response.success) {
      setTipoCancer(response.tiposCancer);
    } else {
      console.log(response.error);
    }
  };

  // Cargar los tipos de cáncer cuando el componente se monte
  useEffect(() => {
    obtenerTiposCancer();
  }, []);

  // Función para editar una publicación científica en la base de datos
  const editarPublicacion = async (e) => {
    e.preventDefault();

    const data = {
      id: publicacion.id,
      titulo,
      resumen,
      link,
      idTipoCancer: selectedTipoCancer,
    };

    const response = await editPublicacionCientifica(data);
    if (response.success) {
      console.log(response.success);
      setShowNotification(true); // Muestra la notificación de éxito
    } else {
      console.log(response.error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#a0737d] p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Editar Publicación</h2>
          <button onClick={onClose} className="text-white hover:text-red-700">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={editarPublicacion}>
          <div className="mb-4">
            <label className="text-white">Título</label>
            <input
              name="titulo"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Título de la publicación"
            />
          </div>
          <div className="mb-4">
            <label className="text-white">Resumen</label>
            <textarea
              name="resumen"
              value={resumen}
              onChange={(e) => setResumen(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Resumen de la publicación"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-white">Tipo de Cáncer</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              name="tipoCancer"
              value={selectedTipoCancer}
              onChange={(e) => setSelectedTipoCancer(e.target.value)}
            >
              <option value="">Seleccione un tipo de cáncer</option>
              {tipoCancer.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="text-white">Link</label>
            <input
              name="link"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Link"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#753350] text-white px-4 py-2 rounded-lg hover:bg-[#652c45] flex items-center space-x-2"
            >
              <span>Editar</span>
              <FaSave />
            </button>
          </div>
        </form>
      </div>
      {showNotification && (
        <NotificacionModal
          message="Publicación editada con éxito"
          onClose={() => setShowNotification(false)}
          onClosePopUp={onClose}
        />
      )}
    </div>
  );
}

export default PopUpEditar;