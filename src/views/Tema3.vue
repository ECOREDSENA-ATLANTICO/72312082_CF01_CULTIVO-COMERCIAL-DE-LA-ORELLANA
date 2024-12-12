<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Etapas del cultivo

    .row.mb-5
      .col-lg-5.col-8.mx-auto
        figure
          img.mb-4(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen Decorativa')
      .col-lg-7.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-amarillo-claro")
          .row(titulo="Obtención de la semilla")
            .col-md-7.mb-4.mb-md-0
              p La semilla inicial de los hongos comestibles, es de color blanco, se obtiene a partir de cultivos puros de los hongos, los cuales se encuentran en su fase micelial que se reproducen sobre agares nutritivos, estas semillas son utilizadas posteriormente para inocular los sustratos. La actividad propia de la producción de la semilla del hongo es muy delicada y requiere especiales técnicos para evitar riesgo de pérdida del material principalmente por la aparición de hongos competidores, por lo que normalmente se lleva a cabo en laboratorio. Por lo anterior se recomienda a los pequeños productores obtener la semilla en laboratorios certificados.
            .col-md-5
              figure
                img.tarjeta(src='@/assets/curso/temas/tema4/img02.jpg', alt='Imagen Decorativa')

          .row(titulo="Preparación del sustrato")
            .col-md-5.mb-4.mb-md-0
              p Consiste en seleccionar y adecuar el medio de crecimiento (sustrato) para proporcionar las condiciones de asepsia, humedad y nutrición adecuadas para que el hongo de orellana se desarrolle.
            .col-md-7
              figure
                img.tarjeta(src='@/assets/curso/temas/tema4/img03.jpg', alt='Imagen Decorativa')

          .row(titulo="Inoculación o siembra")
            .col-md-6.mb-4.mb-md-0
              p La inoculación consiste en agregar la semilla o micelio del hongo al sustrato definitivo en donde se va a desarrollar. El sustrato inoculado se acondiciona en bolsas, donde crecerá el micelio y emergerán finalmente los cuerpos fructíferos o carpóforos.
            .col-md-6
              figure
                img.tarjeta(src='@/assets/curso/temas/tema4/img04.jpg', alt='Imagen Decorativa')

          .row(titulo="Incubación")
            .col-md-6.mb-4.mb-md-0
              p Durante esta etapa la semilla del hongo se desarrolla invadiendo el sustrato poco a poco, tornándose de color blanco, hasta que todo el sustrato termina completamente invadido por el hongo, e inicia la formación de los primordios de los hongos.
            .col-md-6
              figure
                img.tarjeta(src='@/assets/curso/temas/tema4/img05.jpg', alt='Imagen Decorativa')

          .row(titulo="Fructificación")
            .col-md-6.mb-4.mb-md-0
              p Una vez el micelio haya invadido el sustrato, se da inicio a la etapa de producción o fructificación la cual inicia con el brote y crecimiento de los primordios.
            .col-md-6
              figure
                img.tarjeta(src='@/assets/curso/temas/tema4/img06.jpg', alt='Imagen Decorativa')
    
    div(data-aos="fade-right")
      h3.mb-4.titulo-imagen-izq-1 Uso de materiales, equipamiento y herramientas para el cultivo

    .row.mb-5.align-items-center(data-aos="fade-left")
      .col-lg-7
        p.mb-3 Para el desarrollo de las etapas del cultivo se requiere el uso de materiales, equipos y herramientas, que permiten al hombre llevar a cabo procesos en condiciones técnicas optimas y sanitarias adecuadas, de tal manera que se garantice una mejor calidad en el producto y se disminuyan los diferentes riegos a los cuales se verán expuestos durante la operación, por ello realizando una adecuada gestión se promocionan unas condiciones de salud optimas de los operarios y por ende a sus consumidores.
        p.mb-4 De conformidad con lo anterior, se plantea en el siguiente cuadro de materiales, equipos y herramientas necesarios para el desarrollo seguro de las diferentes etapas del cultivo:
      .col-lg-5.col-10.mx-auto.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img07.png' alt='Imagen Decorativa')

    
    .tarjeta.p-4.bg_texture(data-aos="fade-right")
      .tarjeta.bg-white.p-5 
        SlyderA(tipo="b")
          .mb-2
            h3.mb-3 Preparación del sustrato
            .row.pt-4.azul
              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Materiales
                  p.text-center Residuos agrícolas ricos en lignina y celulosa (pajas, bagazo, tamos de cereales, pulpa de café y aserrín).<br>Cal agrícola o yeso agrícola. Tulas o costales.

              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Equipos
                  p.text-center Estufa u hogar.<br> Termómetro.


              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Herramientas
                  p.text-center Machete o trituradora.<br>Recipiente metálico resistente al calor de capacidad de acuerdo a la cantidad de sustrato.


              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b  Elementos de protección personal
                  p.text-center Tapabocas con respirador. Guantes. Delantal plástico industrial. Botas de caucho antideslizantes.


              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                div.h-100.w-100.tarjeta(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img10.png')})`,'background-size':`cover`,'min-height':`200px`}"
                )
          .mb-2
            h3 Inoculación o siembra
            .row.pt-4.naranja
              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Materiales
                  p.text-center Sustrato pasteurizado. Semilla o inóculo del hongo. Solución desinfectante. Bolsas de plástico transparente. Solución desinfectante.

              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Equipos
                  p.text-center Mechero.

              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Herramientas
                  p.text-center Navaja o tijeras. Delantal plástico industrial.Botas de caucho antideslizantes

              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b  Elementos de protección personal
                  p.text-center  Elementos de protección personal Gorro o cofia. Tapabocas con filtro respirador. Guantes de nitrilo. Bata antifluidos. Botas de caucho antideslizantes.

                  
              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                div.h-100.w-100.tarjeta(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img11.png')})`,'background-size':`cover`,'min-height':`200px`}"
                )

          .mb-2
            h3 Incubación y fructificación
            .row.pt-4.verde
              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Materiales
                  p.text-center Estantes.

              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Equipos
                  p.text-center Sistemas de ventilación. Higrómetro (medidor de humedad relativa).

              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Herramientas
                  p.text-center Termómetro.

              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b  Elementos de protección personal
                  p.text-center Elementos de protección personal. Gorro o cofia. Tapabocas con filtro respirador. Guantes de nitrilo. Bata antifluido. Botas de caucho antideslizantes.

              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                div.h-100.w-100.tarjeta(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img12.png')})`,'background-size':`cover`,'min-height':`200px`}"
                )

          .mb-2
            h3 Cosecha y poscosecha
            .row.pt-4.amarillo
              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Materiales
                  p.text-center Plástico cristaflex. Bolsas de papel 
                    i kraft. 
                    | Canastillas plásticas. Bandejas de icopor.


              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Equipos
                  p.text-center Gramera o báscula. Sistemas de refrigeración. Sistemas de secado o deshidratación.

              .col-xl.col-lg-4.col-md-4.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b Herramientas
                  p.text-center Navaja o cuchillo desinfectados.

              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                .tarjeta-texto.color-acento-contenido.p-3.pt-5.h-100
                  .tarjeta-texto__txt
                    p.text-center
                      b  Elementos de protección personal
                  p.text-center Gorro. Tapabocas con filtro respirador. Guantes de nitrilo. Bata antifluidos.
              
              .col-xl.col-lg-6.col-md-6.col-sm-12.mb-5
                div.h-100.w-100.tarjeta(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img13.png')})`,'background-size':`cover`,'min-height':`200px`}"
                )


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
