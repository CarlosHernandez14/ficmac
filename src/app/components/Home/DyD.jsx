import React from "react";
import DerechosyDeberes from "./DerechosyDeberes";

const DyD = () => {
  const deber = [
    "Recibir un trato digno sin discriminación alguna.",
    "Ser orientado de la mejor manera sobre el procedimiento o prueba que se realizará de acuerdo con el tipo de diagnóstico que se requiere.",
    "Ser informado sobre los costos de su atención en salud. Revisar y recibir explicaciones acerca de los costos de los servicios.",
    "Que se mantenga estricta reserva y confidencialidad sobre su historia clínica y solo con su autorización pueda ser entregada a terceros.",
    "Ser incluido en estudios de investigación sobre cáncer, sólo si lo autoriza.",
    "Obtener información necesaria, clara y oportuna del procedimiento, técnicas y tiempos de la prueba.",
    "Recibir información sobre dónde y cómo puede presentar peticiones, quejas o reclamos sobre la atención o servicio recibido.",
    "Expresar su satisfacción o percepción del servicio recibido (A través de SIAU-encuesta de satisfacción).",
    "Solicitar explicación o aclaración en los resultados o diagnóstico entregado (En el área de conocimiento de biología molecular).",
    "Que su muestra sea procesada en condiciones de higiene y seguridad.",
  ];
  const deber2 = [
    "Brindar un trato cortés, digno y respetuoso al personal que lo atiende y a los demás usuarios.",
    "Cumplir las normas y actuar de buena fe frente a ONTEC.",
    "Realizar los pagos respectivos de manera oportuna para asegurar el desarrollo de las pruebas en los tiempos definidos.",
    "Suministrar información veraz, clara y completa sobre su estado de salud y otros exámenes relacionados que se le hayan realizado.",
    "Brindar la información requerida para la atención médica.",
    "Suministrar los datos correctos, actualizados y completos de correo electrónico y número telefónico de contacto para la notificación del resultado.",
    "Llevar y entregar copia y original del documento de identificación que lo acrediten como paciente.",
    "Enviar o realizar la entrega de muestras de acuerdo a lo solicitado y de manera cumplida.",
    "Utilizar los medios de comunicación definidos en ONTEC y la comunicación con el gestor de atención a pacientes para solicitar información, orientación, hacer sugerencias y reclamos.",
    "Realizar la firma del consentimiento informado para el procesamiento y análisis de muestras.",
  ];

  return (
    <div className="relative w-full min-h-screen  p-5">
    {/* Imagen de fondo */}
    <img
      src="/Home/Microambiente_Tumoral.jpg"
      alt="Fondo"
      className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
    />
    <div className="relative z-10">
      <DerechosyDeberes
        derechos={"Derechos de los pacientes"}
        deberes={deber }
      />
      <DerechosyDeberes
        derechos={"Deberes de los pacientes"}
        deberes={deber2}
      />
    </div>
    </div>
  );
};

export default DyD;
