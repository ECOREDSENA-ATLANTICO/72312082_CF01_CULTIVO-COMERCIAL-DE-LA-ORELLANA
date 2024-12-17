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
        titulo: 'Ciclo y clasificación de los hongos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Etapas del cultivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Introducción a los sustratos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Características y composición de los sustratos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tratamientos del sustrato',
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
        download: 'downloads/CF01_72312082_DU.pdf',
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
      referencia:
        'Agroequipos Del Valle. Los sustratos agrícolas y sus propiedades. (2024)',
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
      link: 'https://setascultivadas.com/manualescultivo.html',
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
      link: 'https://cenicafe.org/es/publications/bot027.pdf',
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
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñor <em>web</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Andrea Patiño Villarraga',
          cargo: 'Experta temática',
          centro: 'SENA Regional Risaralda',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
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
