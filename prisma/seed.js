const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Crear datos de ejemplo para Pacientes
  const pacientes = await prisma.paciente.createMany({
    data: [
      {
        nombre_completo: "Juan Pérez",
        edad: 35,
        direccion: "Calle Falsa 123",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        sexo: "Masculino",
        num_celular: "5551234567",
        imagen_url: "imagen",
      },
      {
        nombre_completo: "María Gómez",
        edad: 40,
        direccion: "Avenida Siempreviva 123",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        sexo: "Femenino",
        num_celular: "5557654321",
        imagen_url: "imagen",
      },
      {
        nombre_completo: "Alejandro Gutiérrez",
        edad: 50,
        direccion: "Calle Falsa 456",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        sexo: "Masculino",
        num_celular: "5552345678",
        imagen_url: "imagen",
      },
      {
        nombre_completo: "Judith Martinez",
        edad: 28,
        direccion: "Avenida Siempreviva 456",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        sexo: "Femenino",
        num_celular: "5559876543",
        imagen_url: "imagen",
      },
    ],
  });

  console.log("Pacientes creados:", pacientes);

  // Crear datos de ejemplo para Médicos
  const medicos = await prisma.medico.createMany({
    data: [
      {
        nombre_completo: "Dr. José Gómez",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // Asegúrate de que este ID de usuario ya exista
        rfc: "GOME840101ABC",
        matricula: "MED123456",
        num_celular: "5556543210",
        especialidad: "ONCOLOGO",
      },
      {
        nombre_completo: "Dra. Ana Pérez",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // Asegúrate de que este ID de usuario ya exista
        rfc: "PERA840101ABC",
        matricula: "MED654321",
        num_celular: "5554321098",
        especialidad: "ONCOLOGO",
      },
      {
        nombre_completo: "Dr. Juan Hernández",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // Asegúrate de que este ID de usuario ya exista
        rfc: "HERN840101ABC",
        matricula: "MED789012",
        num_celular: "5552109876",
        especialidad: "ONCOLOGO",
      },
      {
        nombre_completo: "Dra. María López",
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // Asegúrate de que este ID de usuario ya exista
        rfc: "LOPE840101ABC",
        matricula: "MED890123",
        num_celular: "5551098765",
        especialidad: "ONCOLOGO",
      },
    ],
  });

  console.log("Médico creado:", medicos);

  // Crear datos de ejemplo para Tipo de Cáncer
  const tipoCancers = await prisma.tipo_Cancer.createMany({
    data: [
      {
        nombre: "Cáncer de Pulmón",
        descripcion:
          "El cáncer de pulmón es un cáncer que se forma en los tejidos del pulmón, generalmente en las células que recubren los conductos de aire. Es la principal causa de muerte por cáncer tanto en hombres como mujeres. Hay dos tipos principales, cáncer de pulmón de células pequeñas y cáncer de pulmón de células no pequeñas.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Mama",
        descripcion:
          "El cáncer de mama es un cáncer que se forma en los tejidos de la mama, generalmente en los conductos (tubos que llevan la leche al pezón) y los lobulillos (glándulas que producen leche). Es el cáncer más común en las mujeres, aunque también puede presentarse en los hombres.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Próstata",
        descripcion:
          "El cáncer de próstata es un cáncer que se forma en la próstata, una glándula del aparato reproductor masculino. Es uno de los cánceres más comunes entre los hombres. Por lo general, crece lentamente y se limita a la próstata, donde puede no causar daño serio. Sin embargo, en algunos casos puede ser agresivo y diseminarse rápidamente.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Colon",
        descripcion:
          "El cáncer de colon es un cáncer que se forma en el colon (intestino grueso). La mayoría de los cánceres de colon son adenocarcinomas (cánceres que comienzan en las células que producen y liberan moco y otros líquidos). El cáncer de colon es el tercer cáncer más común en hombres y mujeres en los Estados Unidos.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Cuello Uterino",
        descripcion:
          "El cáncer de cuello uterino es un cáncer que se forma en los tejidos del cuello uterino, la parte inferior del útero (matriz) que se conecta al canal vaginal (nacimiento). El cáncer de cuello uterino es causado por el virus del papiloma humano (VPH).",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Ovario",
        descripcion:
          "El cáncer de ovario es un cáncer que se forma en los ovarios, dos glándulas en forma de almendra que forman parte del sistema reproductor femenino. El cáncer de ovario es la causa más mortal de cáncer ginecológico y es el quinto cáncer más común en las mujeres.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Páncreas",
        descripcion:
          "El cáncer de páncreas es un cáncer que se forma en los tejidos del páncreas, un órgano en el abdomen que se encuentra detrás del estómago. El páncreas produce enzimas que ayudan a la digestión y hormonas que ayudan a regular la forma en que su cuerpo procesa el azúcar (glucosa).",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Hígado",
        descripcion:
          "El cáncer de hígado es un cáncer que se forma en los tejidos del hígado, un órgano en la parte superior derecha del abdomen. El hígado tiene muchas funciones, incluida la eliminación de toxinas del cuerpo, la producción de bilis y la descomposición de los nutrientes de los alimentos para que puedan ser absorbidos por el cuerpo.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Estómago",
        descripcion:
          "El cáncer de estómago es un cáncer que se forma en los tejidos del estómago, generalmente en las células que recubren la superficie interna del estómago. También se le llama cáncer gástrico. El cáncer de estómago es el quinto cáncer más común en el mundo y es la tercera causa principal de muerte por cáncer.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Cerebro",
        descripcion:
          "El cáncer de cerebro es un cáncer que se forma en los tejidos del cerebro o la médula espinal. Los tumores cerebrales son masas de células anormales en el cerebro. Los tumores pueden ser benignos o malignos. Los tumores malignos son cancerosos, mientras que los tumores benignos no lo son.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Piel",
        descripcion:
          "El cáncer de piel es un cáncer que se forma en los tejidos de la piel. Hay varios tipos de cáncer de piel. El cáncer de piel de células basales y el cáncer de piel de células escamosas son los tipos más comunes. El melanoma es un tipo menos común pero más peligroso.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Tiroides",
        descripcion:
          "El cáncer de tiroides es un cáncer que se forma en la glándula tiroides, un órgano en la base del cuello que produce hormonas que regulan el ritmo cardíaco, la presión arterial, la temperatura corporal y el peso. El cáncer de tiroides es más común en mujeres que en hombres.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Riñón",
        descripcion:
          "El cáncer de riñón es un cáncer que se forma en los riñones, dos órganos en forma de frijol que filtran los desechos y el exceso de agua de la sangre y los convierten en orina. El cáncer de riñón es uno de los 10 cánceres más comunes en hombres y mujeres.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Vejiga",
        descripcion:
          "El cáncer de vejiga es un cáncer que se forma en los tejidos de la vejiga, el órgano hueco en la parte inferior del abdomen que almacena la orina. La mayoría de los cánceres de vejiga son cánceres de células transicionales, que comienzan en las células que recubren el interior de la vejiga.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Esófago",
        descripcion:
          "El cáncer de esófago es un cáncer que se forma en los tejidos del esófago, el tubo muscular que transporta alimentos desde la boca hasta el estómago. El cáncer de esófago puede ocurrir en cualquier lugar a lo largo del esófago.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cancer de testiculo",
        descripcion:
          "El cáncer de testículo es un cáncer que se forma en los testículos, dos glándulas en forma de huevo en el escroto que producen espermatozoides y testosterona. El cáncer de testículo es el cáncer más común en hombres jóvenes de 15 a 35 años.",
        path_imagen: "/adn.jfif",
      },
      {
        nombre: "Cáncer de Laringe",
        descripcion:
          "El cáncer de laringe es un cáncer que se forma en los tejidos de la laringe (caja de la voz), un órgano en la parte  superior de la tráquea (conducto de aire) en el cuello. La laringe contiene las cuerdas vocales, dos pliegues de tejido que vibran y producen sonido cuando el aire pasa a través de ellos.",
        path_imagen: "/adn.jfif",
      },
    ],
  });

  console.log("Tipo de cáncer creados:", tipoCancers);

  // Crear datos de ejemplo para Publicaciones Científicas
  const publicacion = await prisma.publicacion_Cientifica.createMany({
    data: [
      {
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // ID del usuario existente
        idTipoCancer: 1, // ID del tipo de cáncer existente
        titulo: "Investigación sobre tratamiento de cáncer",
        fecha_publicado: new Date(),
        resumen:
          "Desde hace un tiempo se sabe que la pobreza está asociada con peores desenlaces para el cáncer, como un riesgo más alto de morir por la enfermedad. Se piensa que hay muchos factores que causan esta y otras desigualdades por cáncer. En un nuevo estudio de investigadores del Instituto Nacional del Cáncer NCI y otros colegas se profundiza en los vínculos entre la pobreza y la muerte por cáncer en los Estados Unidos. En el estudio se observó que las personas que viven en condados de los Estados Unidos con pobreza persistente tienen una probabilidad mayor de morir por cáncer que las personas en otros condados. El riesgo se suma al riesgo agudizado en áreas donde hay pobreza que aún no es persistente, señaló el investigador del estudio, el doctor Robert Croyle, que dirige la División de Control de Cáncer y Ciencias Demográficas DCCPS del NCI",
        link: "https://www.cancer.gov/espanol/noticias/temas-y-relatos-blog/2021/pobreza-persistente-aumento-riesgo-morir-cancer",
      },
      {
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // ID del usuario existente
        idTipoCancer: 2, // ID del tipo de cáncer existente
        titulo: "Investigación sobre tratamiento de cáncer",
        fecha_publicado: new Date(),
        resumen:
          "Desde hace un tiempo se sabe que la pobreza está asociada con peores desenlaces para el cáncer, como un riesgo más alto de morir por la enfermedad.",
        link: "https://www.cancer.gov/espanol/noticias/temas-y-relatos-blog/2021/pobreza-persistente-aumento-riesgo-morir-cancer",
      },
      {
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // ID del usuario existente
        idTipoCancer: 3, // ID del tipo de cáncer existente
        titulo: "Investigación sobre el cancer de prostata",
        fecha_publicado: new Date(),
        resumen:
          "El cáncer de próstata es un cáncer que se forma en la próstata, una glándula del aparato reproductor masculino.",
        link: "https://www.cancer.gov/espanol/noticias/temas-y-relatos-blog/2021/pobreza-persistente-aumento-riesgo-morir-cancer",
      },
      {
        idUsuario: "cm42a1y9y0000shb6uyvhkbut", // ID del usuario existente
        idTipoCancer: 4, // ID del tipo de cáncer existente
        titulo: "Investigación sobre el cancer de colon",
        fecha_publicado: new Date(),
        resumen:
          "El cáncer de colon es un cáncer que se forma en el colon (intestino grueso).",
        link: "https://www.cancer.gov/espanol/noticias/temas-y-relatos-blog/2021/pobreza-persistente-aumento-riesgo-morir-cancer",
      },
    ],
  });

  console.log("Publicación científica creada:", publicacion);

  // Crear datos de ejemplo para Síntomas
  const sintoma = await prisma.sintoma.createMany({
    data: [
      {
        nombre: "Dolor de cabeza persistente",
        descripcion: "Dolor intenso que no se alivia con analgésicos comunes.",
      },
      {
        nombre: "Dolor de huesos",
        descripcion:
          "Dolor en los huesos que no se alivia con analgésicos comunes.",
      },
      {
        nombre: "Cansancio extremo",
        descripcion:
          "Sensación de fatiga constante que no mejora con el descanso.",
      },
      {
        nombre: "Pérdida de peso sin razón aparente",
        descripcion:
          "Pérdida de peso sin haber cambiado la dieta o la actividad física.",
      },
      {
        nombre: "Fiebre sin razón aparente",
        descripcion:
          "Fiebre que no se relaciona con una infección o enfermedad conocida.",
      },
      {
        nombre: "Sangrado inusual",
        descripcion: "Sangrado inusual en cualquier parte del cuerpo.",
      },
      {
        nombre: "Cambios en la piel",
        descripcion:
          "Cambios en la piel, como manchas, lunares o lesiones que cambian de tamaño o forma.",
      },
      {
        nombre: "Dificultad para tragar",
        descripcion: "Dificultad para tragar alimentos o líquidos.",
      },
      {
        nombre: "Cambios en el hábito intestinal",
        descripcion:
          "Cambios en la frecuencia o consistencia de las evacuaciones intestinales.",
      },
      {
        nombre: "Cambios en la vejiga",
        descripcion: "Cambios en la frecuencia o urgencia de orinar.",
      },
      {
        nombre: "Tos persistente",
        descripcion: "Tos que no mejora con medicamentos comunes.",
      },
      {
        nombre: "Dificultad para respirar",
        descripcion: "Sensación de falta de aire o dificultad para respirar.",
      },
      {
        nombre: "Dolor en el pecho",
        descripcion:
          "Dolor en el pecho que no se alivia con medicamentos comunes.",
      },
      {
        nombre: "Cambios en la voz",
        descripcion: "Cambios en la voz, como ronquera o afonía.",
      },
      {
        nombre: "Dolor abdominal",
        descripcion:
          "Dolor en el abdomen que no se alivia con medicamentos comunes.",
      },
    ],
  });

  const sintomaTipoCancer = await prisma.Tipo_Cancer_Sintoma.createMany({
    data: [
      {
        idSintoma: 1, // ID del síntoma existente
        idTipoCancer: 1, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 2, // ID del síntoma existente
        idTipoCancer: 1, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 3, // ID del síntoma existente
        idTipoCancer: 1, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 4, // ID del síntoma existente
        idTipoCancer: 2, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 5, // ID del síntoma existente
        idTipoCancer: 2, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 6, // ID del síntoma existente
        idTipoCancer: 2, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 7, // ID del síntoma existente
        idTipoCancer: 2, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 8, // ID del síntoma existente
        idTipoCancer: 3, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 9, // ID del síntoma existente
        idTipoCancer: 3, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 10, // ID del síntoma existente
        idTipoCancer: 3, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 11, // ID del síntoma existente
        idTipoCancer: 3, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 12, // ID del síntoma existente
        idTipoCancer: 3, // ID del tipo
      },
      {
        idSintoma: 13, // ID del síntoma existente
        idTipoCancer: 4, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 14, // ID del síntoma existente
        idTipoCancer: 4, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 5, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 6, // ID del tipo de cánc
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 7, // ID del tipo de cánc
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 8, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 9, // ID del tipo de cánc
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 10, // ID del tipo de cánc
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 11, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 12, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 13, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 14, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 15, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 16, // ID del tipo de cáncer existente
      },
      {
        idSintoma: 15, // ID del síntoma existente
        idTipoCancer: 17, // ID del tipo de cáncer existente
      },
    ],
  });

  console.log("Síntoma creado:", sintomaTipoCancer);

  // Crear datos de ejemplo para Estudios
  const estudio = await prisma.estudio.createMany({
    data: [
      {
        nombre: "Biopsia Líquida",
        descripcion: "Estudio para detectar células tumorales en la sangre.",
        precio: 2500.5,
        tipo: "BIOPSIA_LIQUIDA",
      },
      {
        nombre: "Tomografía Computarizada",
        descripcion:
          "Estudio para obtener imágenes detalladas del interior del cuerpo.",
        precio: 1500.75,
        tipo: "BIOPSIA_SOLIDA",
      },
      {
        nombre: "Resonancia Magnética",
        descripcion:
          "Estudio para obtener imágenes detalladas del interior del cuerpo.",
        precio: 2000.25,
        tipo: "BIOPSIA_LIQUIDA",
      },
      {
        nombre: "Biopsia de Tejido",
        descripcion:
          "Estudio para obtener una muestra de tejido para su análisis.",
        precio: 3000.0,
        tipo: "BIOPSIA_SOLIDA",
      },
      {
        nombre: "Análisis de Sangre",
        descripcion:
          "Estudio para medir los niveles de sustancias en la sangre.",
        precio: 500.0,
        tipo: "BIOPSIA_LIQUIDA",
      },
      {
        nombre: "Radiografía",
        descripcion:
          "Estudio para obtener imágenes de los huesos y órganos internos.",
        precio: 1000.0,
        tipo: "BIOPSIA_SOLIDA",
      },
      {
        nombre: "Ecografía",
        descripcion:
          "Estudio para obtener imágenes de los órganos internos con ultrasonido.",
        precio: 1200.0,
        tipo: "BIOPSIA_SOLIDA",
      },
      {
        nombre: "Biopsia de Médula Ósea",
        descripcion:
          "Estudio para obtener una muestra de médula ósea para su análisis.",
        precio: 3500.0,
        tipo: "BIOPSIA_SOLIDA",
      },
      {
        nombre: "Biopsia de Ganglio Linfático",
        descripcion:
          "Estudio para obtener una muestra de ganglio linfático para su análisis.",
        precio: 4000.0,
        tipo: "BIOPSIA_SOLIDA",
      },
      {
        nombre: "Biopsia de Hígado",
        descripcion:
          "Estudio para obtener una muestra de hígado para su análisis.",
        precio: 4500.0,
        tipo: "BIOPSIA_SOLIDA",
      },
    ],
  });

  console.log("Estudio creado:", estudio);

  const post = await prisma.post.createMany({
    data: [
      {
        titulo: "Me dio cancer de mama",
        cuerpo:
          "Me dio cancer de mama, en el pasado y lo que me sirvio fue ser paciente, mis papas me ayudaron y mi familia, se que es una lucha fuerte pero ustedes pueden",
        fecha: new Date(),
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 2,
      },
      {
        titulo: "Cancer de pulmon",
        cuerpo:
          "Me diagnosticaron cancer de pulmon y estoy muy asustado, alguien que haya pasado por esto y me pueda dar consejos",
          fecha: new Date(),  
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 1,
      },
      {
        titulo: "Cancer de prostata",
        cuerpo:
          "Me diagnosticaron cancer de prostata y estoy muy asustado, alguien que haya pasado por esto y me pueda dar consejos",
          fecha: new Date(),
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 3,
      },
      {
        titulo: "Cancer de colon",
        cuerpo:
          "Me diagnosticaron cancer de colon y estoy muy asustado, alguien que haya pasado por esto y me pueda dar consejos",
          fecha: new Date(),
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 4,
      },
      {
        titulo: "Cancer de mama",
        cuerpo:
          "Me diagnosticaron cancer de mama y estoy muy asustado, alguien que haya pasado por esto y me pueda dar consejos",
          fecha: new Date(),
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 2,
      },
      {
        titulo: "Cancer de pulmon",
        cuerpo:
          "Me diagnosticaron cancer de pulmon y estoy muy asustado, alguien que haya pasado por esto y me pueda dar consejos",
          fecha: new Date(),
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 1,
      },
      {
        titulo: "Cancer de prostata",
        cuerpo:
          "Me diagnosticaron cancer de prostata y estoy muy asustado, alguien que haya pasado por esto y me pueda dar consejos",
          fecha: new Date(),
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 3,
      },
      {
        titulo: "Cancer de colon",
        cuerpo:
          "Me diagnosticaron cancer de colon y estoy muy asustado, alguien que haya pasado por esto y me pueda dar consejos",
          fecha: new Date(),
          idUsuario: "cm42a1y9y0000shb6uyvhkbut",
        idTipoCancer: 4,
      },
    ],
  });

  console.log("Post creados:", post);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
