<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Conceptos básicos de hongos y sustratos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Validar el conocimiento adquirido conceptos básicos de hongos y sustratos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué papel clave juegan los hongos en la naturaleza?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Producen oxígeno.', esCorrecta: false },
            { id: 'b', texto: 'Reciclan nutrientes.', esCorrecta: true },
            { id: 'c', texto: 'Forman raíces.', esCorrecta: false },
            { id: 'd', texto: 'Generan luz.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es una etapa del ciclo biológico de los hongos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reproducción sexual.', esCorrecta: true },
            { id: 'b', texto: 'Metamorfosis.', esCorrecta: false },
            { id: 'c', texto: 'Germinación de semillas.', esCorrecta: false },
            { id: 'd', texto: 'Fotosíntesis.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cómo se clasifican los hongos según su ecología?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plantas y animales.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Vertebrados e invertebrados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Saprofitos y micorrizógenos.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Carnívoros y herbívoros.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué material es común en los sustratos para el cultivo de hongos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Arena.', esCorrecta: false },
            { id: 'b', texto: 'Paja.', esCorrecta: true },
            { id: 'c', texto: 'Grava.', esCorrecta: false },
            { id: 'd', texto: 'Tierra volcánica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una de las etapas del cultivo de hongos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inoculación.', esCorrecta: true },
            { id: 'b', texto: 'Germinación.', esCorrecta: false },
            { id: 'c', texto: 'Fotosíntesis.', esCorrecta: false },
            { id: 'd', texto: 'Polinización.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es un hongo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un vegetal.', esCorrecta: false },
            { id: 'b', texto: 'Un animal.', esCorrecta: false },
            { id: 'c', texto: 'Un organismo sin clorofila.', esCorrecta: true },
            { id: 'd', texto: 'Una bacteria.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué función cumplen los hongos en la agricultura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Polinización.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Descomposición de materia orgánica.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Creación de oxígeno.', esCorrecta: false },
            { id: 'd', texto: 'Protección contra plagas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de hongo es esencial en la industria alimentaria actual?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Micorrizógenos.', esCorrecta: false },
            { id: 'b', texto: 'Seta.', esCorrecta: true },
            { id: 'c', texto: 'Liquenizados.', esCorrecta: false },
            { id: 'd', texto: 'Parásitos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué compone el sustrato para el cultivo de hongos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Rocas y arena.', esCorrecta: false },
            { id: 'b', texto: 'Paja, estiércol y aserrín.', esCorrecta: true },
            { id: 'c', texto: 'Agua y arcilla.', esCorrecta: false },
            { id: 'd', texto: 'Tierra y hojas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es la estructura principal de los hongos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Raíces.', esCorrecta: false },
            { id: 'b', texto: 'Micelio.', esCorrecta: true },
            { id: 'c', texto: 'Hojas.', esCorrecta: false },
            { id: 'd', texto: 'Espinas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cómo se reproducen los hongos principalmente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mediante esporas.', esCorrecta: true },
            { id: 'b', texto: 'Por semillas.', esCorrecta: false },
            { id: 'c', texto: 'Por esporofitos.', esCorrecta: false },
            { id: 'd', texto: 'Mediante huevos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la diferencia entre hongos y plantas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los hongos no tienen clorofila.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Los hongos tienen raíces.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Los hongos producen su propio alimento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las plantas no tienen células.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es una función médica importante de algunos hongos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Producir penicilina.', esCorrecta: true },
            { id: 'b', texto: 'Generar oxígeno.', esCorrecta: false },
            { id: 'c', texto: 'Crear proteínas.', esCorrecta: false },
            { id: 'd', texto: 'Formar tejidos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué tipo de reproducción pueden tener los hongos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Asexual y sexual.', esCorrecta: true },
            { id: 'b', texto: 'Sexual solo.', esCorrecta: false },
            { id: 'c', texto: 'Por clonación solo.', esCorrecta: false },
            { id: 'd', texto: 'Ninguna de las anteriores.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿En qué fase del ciclo los hongos producen esporas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reproductiva.', esCorrecta: true },
            { id: 'b', texto: 'Germinativa.', esCorrecta: false },
            { id: 'c', texto: 'Digestiva.', esCorrecta: false },
            { id: 'd', texto: 'Expansiva.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es la primera etapa en el cultivo de hongos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cosecha.', esCorrecta: false },
            { id: 'b', texto: 'Inoculación.', esCorrecta: true },
            { id: 'c', texto: 'Esterilización.', esCorrecta: false },
            { id: 'd', texto: 'Secado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿¿Qué es la inoculación en el cultivo de hongos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar esporas al sustrato.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Recoger los hongos.', esCorrecta: false },
            { id: 'c', texto: 'Esterilizar el micelio.', esCorrecta: true },
            { id: 'd', texto: 'Mezclar nutrientes.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es un tipo de sustrato común para hongos comestibles?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Residuos de café.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Grava.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Suelo fértil.', esCorrecta: false },
            { id: 'd', texto: 'Sal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál de los siguientes materiales puede ser sustrato?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Papel.', esCorrecta: false },
            { id: 'b', texto: 'Suelo de jardín.', esCorrecta: false },
            { id: 'c', texto: 'Aserrín.', esCorrecta: true },
            { id: 'd', texto: 'Arena.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué característica es esencial en un buen sustrato para hongos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Alta densidad.', esCorrecta: false },
            { id: 'b', texto: 'Buena aireación.', esCorrecta: true },
            { id: 'c', texto: 'Acidez baja.', esCorrecta: false },
            { id: 'd', texto: 'Alta temperatura.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
