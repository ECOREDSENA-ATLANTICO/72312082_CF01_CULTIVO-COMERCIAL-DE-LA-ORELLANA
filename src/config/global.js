export default {
  global: {
    componenteFormativo: 'Conceptos básicos de hongos y sustratos',
    descripcionCurso:
      'Los hongos son organismos esenciales tanto en la naturaleza como en la producción agrícola. Su ciclo biológico, clasificación y etapas de cultivo permiten un mejor aprovechamiento en las industrias alimentaria y medicinal. Los sustratos, cuya composición varía según la especie, proporcionan nutrientes vitales. Los tratamientos, como la esterilización, aseguran un entorno libre de patógenos, optimizando su crecimiento y relevancia comercial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de los hongos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciclo biológico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Clasificación de los hongos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Etapas del cultivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Introducción a los sustratos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Características y composición de los sustratos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Tratamientos del sustrato ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Generalidades de los hongos.',
      referencia:
        'Primer laboratorio de hongos (2013). Ecosistema de Recursos Educativos Digitales. SENA [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_QDsYS-LW-k',
    },
    {
      tema: 'Introducción a los sustratos',
      referencia: 'Agroequipos Del Valle (2024)',
      tipo: 'Página <em>web</em>',
      link: 'https://www.agroequipos.com.mx/node/1687',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo biológico',
      significado:
        'secuencia de etapas que atraviesan los hongos desde su germinación hasta su madurez y reproducción.',
    },
    {
      termino: 'Cultivo controlado',
      significado:
        'técnica desarrollada a partir del siglo XVII en Francia, que permite la producción de hongos bajo condiciones controladas.',
    },
    {
      termino: 'Elaboración de sustratos',
      significado:
        'proceso de preparar materiales adecuados para el crecimiento óptimo de los hongos en cultivos controlados.',
    },
    {
      termino: 'Hongos comestibles',
      significado:
        'organismos pluricelulares que han sido consumidos desde la antigüedad, recolectados de manera silvestre en los bosques.',
    },
    {
      termino: 'Inoculación',
      significado:
        'introducción de esporas o micelio en el sustrato preparado para iniciar el cultivo de hongos.',
    },
    {
      termino: 'Orellanas',
      significado:
        'especie de hongos comestibles ampliamente cultivada por su valor nutritivo y sabor, también conocidas como setas o champiñones.',
    },
    {
      termino: 'Sustrato',
      significado:
        'material orgánico o inorgánico en el que se cultivan los hongos, proporcionando los nutrientes necesarios para su crecimiento.',
    },
    {
      termino: 'Valor nutricional',
      significado:
        'beneficios alimentarios de los hongos, tales como su contenido en proteínas, carbohidratos y fibra, con bajo aporte de grasas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, F. (2004). Guía práctica de producción de setas. Guadalajara-México: Fungitec Asesorías.',
      link: 'https://goo.gl/1UxgpK',
    },
    {
      referencia:
        'Gaitán, R., Salmones, D., Pérez, R., y Mata, G. (2006). Manual práctico del cultivo de setas aislamiento, siembra y producción. Veracruz-México. Instituto de ecología A.C',
      link: 'https://hispafiles.ru/data/c/37136/src/Manual_PleurotusGaitan.pdf',
    },
    {
      referencia:
        'Guzmán, G., Mata, G., Salmones, D., Soto, C., y Guzmán, L. (2010). El cultivo de los hongos comestibles. Instituto Politécnico Nacional.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, N., Araque, M., y Perdomo, F. (2006). Producción de hongos comestibles orellanas y shiitake. Huila-Colombia: Sección de Divulgación y Transferencia, Cenicafé, FNC.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, N., & Jaramillo, C. (2004). Cultivo de hongos comestibles del género Pleurotus sobre residuos agrícolas de la zona cafetera.',
      link: 'https://goo.gl/AUhgS8.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
