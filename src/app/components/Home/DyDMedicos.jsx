import React from 'react'
import DerechosyDeberes from './DerechosyDeberes';

const DyDMedicos = () => {
 
    const deber = [
        "Recibir y solicitar información sobre el estado y proceso de las pruebas o diagnostico solicitados.",
        "Recibir de manera oportuna el informe de resultados de la prueba realizada.",
        "Ser orientado de la mejor manera sobre el procedimiento o prueba que se realizará de acuerdo con el tipo de diagnóstico que se requiere.",
        "Recibir información sobre dónde y cómo puede presentar peticiones, quejas o reclamos sobre la atención o servicio recibido.",
        "Expresar su satisfacción o percepción del servicio recibido (A través de SIAU-encuesta de satisfacción).",
        "Solicitar explicación o aclaración en los resultados o diagnóstico entregado.",
      ];
      const deber2 = [
        "Enviar la autorización u orden del estudio de manera clara, completa y debidamente firmada.",
        "Orientar a los pacientes sobre el proceso y comunicación preliminar que se debe realizar con ONTEC para el estudio.",
        "Cumplir de manera responsable con las recomendaciones para el servicio de los profesionales de salud y gestores de apoyo a pacientes que lo atiendan.",
        "Brindar un trato cortés, digno y respetuoso al personal que lo atiende y a los demás usuarios.",
        "Cumplir las normas y actuar de buena fe frente a ONTEC.",
        "Suministrar los datos correctos, actualizados y completos de correo electrónico y número telefónico de contacto para la notificación del resultado.",
        "Utilizar los medios de comunicación definidos en ONTEC y la comunicación con el gestor de atención a pacientes para solicitar información, orientación, hacer sugerencias y reclamos",
      ];
    
      return (
        <div className="relative w-auto min-h-screen p-5">
        {/* Imagen de fondo */}
        <img
          src="/Home/Microambiente_Tumoral.jpg"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <div className='relative z-10'>
          <DerechosyDeberes
            derechos={"Derechos de los médicos"}
            deberes={deber }
          />
          <DerechosyDeberes
            derechos={"Deberes de los médicos"}
            deberes={deber2}
          />
        </div>
        </div>
  )
}

export default DyDMedicos