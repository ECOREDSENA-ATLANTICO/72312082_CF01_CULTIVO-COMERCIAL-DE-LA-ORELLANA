<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Generalidades de los hongos 
      
    .row.mb-3
      .col-12.col-xl-6(data-aos="fade-right")
        p.mb-3 Los hongos no pertenecen al reino de los vegetales, estos pertenecen al reino Fungi, ya que no realizan la fotosíntesis pues carecen de clorofila por lo que son considerados organismos heterótrofos; su pared celular contiene generalmente quitina que le da ese resistente revestimiento exterior al cuerpo de los hongos. Estos se asocian en dos grandes grupos micromicetos y macromicetos, dependiendo de su capacidad para formar estructuras visibles con forma definida o cuerpos fructíferos visibles.
        p.mb-3  Las orellanas u hongo ostra pertenecen al grupo de los macromicetos llamados setas u hongos superiores. 
      .col-8.col-xl-6.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img01.png' alt='Imagen Decorativa')

    .row
      .col-12.col-md-10.mx-auto
        div(data-aos="fade-left")
          h3.mb-3.titulo-imagen-izq-1 Morfología
        p.mb-4(data-aos="fade-left") Presentan una estructura filamentosa, constituida por una red de filamentos con apariencia de hilos llamados hifas, que forman el cuerpo vegetativo del hongo llamado micelio (similar a las raíces de las plantas). Además, tiene partes como micelio, cuerpos fructíferos y sombrero. Así como se muestra a continuación: 
      
        .titulo-sexto.color-adicional-1.mb-4(data-aos="fade-left")
          h5 Figura 1.
          span Partes de los hongos

        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img05.png', alt='Texto que describa la imagen')
          figcaption Nota. www3.gobiernodecanarias.org (2017)
        
        div(data-aos="fade-right")
          h3.mb-3.titulo-imagen-izq-2 Partes de la Orellana
        p.mb-3(data-aos="fade-right") Los hongos orellana, son importantes por su valor ecológico, nutricional y medicinal. Desempeñan un papel esencial en la descomposición de materia orgánica, contribuyendo al reciclaje de nutrientes en los ecosistemas.
        
        .titulo-sexto.color-adicional-1.mb-4(data-aos="fade-right")
          h5 Figura 2.
          span Partes de la orellana (Pleurotus ssp).

        ImagenInfografica.color-primario.mb-5(data-aos="fade-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img06.png', alt='Texto que describa la imagen')
              figcaption Nota. El hongo mágico (2017).

          .tarjeta.bg-white.p-3.shadow-sm(x="48.7%" y="76%" numero="1")
            .h5.mb-2 El cuerpo fructífero o esporocarpo:
            p es una estructura multicelular sobre la que se forman otras estructuras productoras de esporas.
            span.numero-tarjeta 01

          .tarjeta.bg-white.p-3.shadow-sm(x="46.7%" y="37%" numero="2")
            .h5.mb-2 Estipe, pie o pedúnculo:
            p.mb-4 es el que sostiene el sombrero. Está conformado por tejido estéril hifal.
            span.numero-tarjeta 02

          .tarjeta.bg-white.p-3.shadow-sm(x="36.5%" y="83%" numero="3")
            .h5.mb-2 Himenio o himenóforo:
            p es el conjunto de láminas y laminillas, es la parte fértil del hongo.
            span.numero-tarjeta 03

          .tarjeta.bg-white.p-3.shadow-sm(x="66.8%" y="14.4%" numero="4")
            .h5.mb-2 Laminillas: 
            p son las que contienen los basidios, y estos a su vez son los que generan las esporas.
            span.numero-tarjeta 04

          .tarjeta.bg-white.p-3.shadow-sm(x="64%" y="29.8%" numero="5")
            .h5.mb-2 Micelio:
            p es el conjunto de hifas (filamentos cilíndricos) encargada de la nutrición de los hongos.
            span.numero-tarjeta 05

          .tarjeta.bg-white.p-3.shadow-sm(x="55%" y="70.3%" numero="6")
            .h5.mb-2 Píleo o sombrero:
            p es la parte del cuerpo fructífero del hongo que sustenta la superficie donde se alojan las esporas.
            span.numero-tarjeta 06

        div
          h3.mb-3.titulo-imagen-izq-2 Reproducción
        p.mb-5 El himenóforo produce millones de esporas que serán liberadas por esporulación y propagadas en la etapa reproductiva del hongo.
    
    div
      h3.mb-3.titulo-imagen-izq-2 Nutrición
    p.mb-4 Los hongos son de nutrición heterótrofa y obtienen su alimentó por absorción, es decir que se alimentan de materia orgánica muerta o degradada (saprófitos), sustratos vegetales (saprófitos), de sustancias sintetizadas por otros organismos (parásitos) o en asociación con otros seres vivos beneficiándose ambas partes (simbiosis).

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img04.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2.d-block Los hongos del género Pleurotus, pertenecen a los saprófitos, son lignocelulíticos, con una alta capacidad para degradar los materiales ricos en lignina y celulosa. Permitiendo que el cultivo sea bastante económico; pues permite el aprovechamiento de una gran diversidad de desechos agroindustriales como bagazo, tamos de cereales, pulpa de café y aserrín.
        p.mb-0.d-block Además, representa una excelente alternativa para su reciclaje. A continuación, se describen de manera detallada.


    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-12.mx-auto.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
          .bg-beige.tarjeta
            .row.justify-content-center.mb-0
                img(src='@/assets/curso/temas/tema1/img08.jpg' alt='AvatarTop')
            .p-3
              p.text-center.mb-0
                b Caña de azucar:
              p.text-center.mb-0 sustratos para el desarrollo de la Orellana.

          .bg-beige.tarjeta
            .row.justify-content-center.mb-0
                img(src='@/assets/curso/temas/tema1/img09.jpg' alt='AvatarTop')
            .p-3
              p.text-center.mb-0
                b Cascarilla de café:
              p.text-center.mb-0 sustratos para el desarrollo de la Orellana.

          .bg-beige.tarjeta
            .row.justify-content-center.mb-0
                img(src='@/assets/curso/temas/tema1/img10.jpg' alt='AvatarTop')
            .p-3
              p.text-center.mb-0
                b La paja, alfalfa y forraje:
              p.text-center.mb-0 sustratos para el desarrollo de la Orellana.
      .col-lg-5.col-8.mx-auto
        figure
          img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen Decorativa')
      

    div
      h3.mb-3.titulo-imagen-izq-1 Factores físicos requeridos para el desarrollo de los hongos 
    p.mb-5 El proceso de crecimiento de los hongos de orellana se puede ver afectados además de los factores nutricionales, por factores físicos, que varían dependiendo de la etapa de desarrollo del hongo, los que deben ser controlados tales como:
    
    .row.mb-5
      .col-xl-5.col-md-7.col-8.mb-3.mx-auto(data-aos="fade-left")
       figure
          img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen Decorativa')
      
      .col-xl-7.col-md-12.col-12.mx-auto(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-amarillo-claro")
          .row(titulo="La temperatura")
            .col-md-10.mb-4.mb-md-0
              p Es un factor fundamental para la producción del hongo, ésta debe oscilar durante el proceso entre 15 y 28ºC de acuerdo a la fase del cultivo, de allí la importancia de controlar al interior de las instalaciones este parámetro y contar con un termómetro para garantizar la temperatura óptima en las diferentes fases del cultivo.
            .col-md-2.col-5.mx-auto
              figure
                img.img-t(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen Descriptiva')

          .row(titulo="La humedad")
            .col-md-10.mb-4.mb-md-0
              p Los hongos requieren unos niveles altos de humedad, por lo cual se requiere mantener una humedad del sustrato entre un 60 y 70% y una humedad relativa promedio entre 80 y 90% en el área de producción para garantizar un buen desarrollo del cuerpo fructífero del hongo.
            .col-md-2.col-5.mx-auto
              figure
                img.img-t(src='@/assets/curso/temas/tema1/img13.svg', alt='Imagen Descriptiva')

          .row(titulo="La luz")
            .col-md-10.mb-4.mb-md-0
              p Los hongos por ser organismos no fotosintéticos necesitan la luz en intensidades bajas, incluso en la fase de crecimiento del micelio.
            .col-md-2.col-5.mx-auto
              figure
                img.img-t(src='@/assets/curso/temas/tema1/img14.svg', alt='Imagen Descriptiva')

          .row(titulo="La aireación")
            .col-md-10.mb-4.mb-md-0
              p Es otro factor importante en el desarrollo del hongo, pues estos son organismos aeróbicos, por lo que se debe controlar el nivel de oxígeno y la generación de CO2. El desarrollo vegetativo puede aumentar cuando el nivel de dióxido de carbono se incrementa, como ocurre habitualmente en áreas encerradas debido a las actividades respiratorias del micelio. Por lo anterior, la aireación.
            .col-md-2.col-5.mx-auto
              figure
                img.img-t(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen Descriptiva')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
