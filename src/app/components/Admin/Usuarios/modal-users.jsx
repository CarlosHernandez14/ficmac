import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';
import { Especialidad, UserRole } from '@prisma/client';
import { editUser } from '@/actions/users/users.actions';
import { createMedico } from '@/actions/medicos/medico.actions';
import NotificationMessage from './notification';

const ModalUsers = ({ isOpen, onClose, paciente, user, updateUsers }) => {

  // Refs para los inputs
  const rfcRef = useRef();
  const matriculaRef = useRef();
  const especialidadRef = useRef();

  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    isError: false,
  });

  const showSuccess = () => {
    setNotification({
      isVisible: true,
      message: "¡Medico asignado con exito!",
      isError: false,
    });
    setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000);
  };

  const showError = () => {
    setNotification({
      isVisible: true,
      message: "Error al asignar el medico",
      isError: true,
    });
    setTimeout(() => setNotification({ ...notification, isVisible: false }), 3000);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // 
    const rfc = rfcRef.current.value;
    const matricula = matriculaRef.current.value;
    const especialidad = especialidadRef.current.value;

    console.log("USER ID: ", user.id);
    // Editamos el rol del usuario
    const response = await editUser(user.id, {
      role: UserRole.MEDICO,
    });

    //console.log("EDIT USER RES: ", response);

    const values = {
      nombre_completo: paciente.nombre_completo,
      rfc: rfc,
      matricula: matricula,
      num_celular: paciente.num_celular,
      especialidad: especialidad,
      idUsuario: user.id,
    }
    
    // Si la respuesta es correcta
    if (response.OK) {
      // Creamos el medico
      const responseMedico = await createMedico(values);
      // Si la respuesta es correcta
      if (responseMedico.OK) {
        // Mostramos el mensaje
        showSuccess();
        updateUsers();
        // Cerramos el modal
        onClose();
      } else {
        // Mostramos el error
        showError();
      }
    } else {
      // Mostramos el error
      showError();
    }
    
  };

  // enum Especialidad {
  //   MEDICO_GENERAL
  //   ONCOLOGO
  //   RADIOLOGO
  //   PATOLOGO
  //   CIRUJANO
  //   GINECOLOGO
  //   UROLOGO
  //   OTRO
  // }
  


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NotificationMessage {...notification} />
          <motion.div
            className="modal-content bg-white p-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              width: '500px',
              position: 'relative',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                border: 'none',
                background: 'none',
                fontSize: '18px',
                cursor: 'pointer',
              }}
              className='text-[#753350]'
            >
              <FaWindowClose className='w-full h-full' />
            </button>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }} className='text-[#753350] font-bold text-xl'>Asignar como medico a {paciente?.nombre_completo}</h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <input
                ref={rfcRef}
                type="text"
                placeholder="RFC"
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
                required
              />
              <input
                ref={matriculaRef}
                type="text"
                placeholder="Matrícula"
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
                required
              />
              <select
                ref={especialidadRef}
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              >
                <option value="">Selecciona una especialidad</option>
                <option value={Especialidad.MEDICO_GENERAL}>Médico general</option>
                <option value={Especialidad.ONCOLOGO}>Oncólogo</option>
                <option value={Especialidad.RADIOLOGO}>Radiólogo</option>
                <option value={Especialidad.PATOLOGO}>Patólogo</option>
                <option value={Especialidad.CIRUJANO}>Cirujano</option>
                <option value={Especialidad.GINECOLOGO}>Ginecólogo</option>
                <option value={Especialidad.UROLOGO}>Urólogo</option>
              </select>
              
              <button
                type="submit"
                style={{
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                className='bg-[#753350] text-white font-bold shadow-xl hover:bg-[#a13c68] transition-all transform duration-300 hover:scale-95'
              >
                Asignar
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalUsers;