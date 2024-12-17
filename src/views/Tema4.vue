<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Introducción a los sustratos
    
    .row.mb-4
        .col-xl-8.col-lg-12
          p.mb-4 Los hongos comestibles, adquieren los nutrientes necesarios para su alimentación, de los materiales sobre los cuales crecen, es decir, el medio donde se propaga la semilla del hongo, llamado sustrato. En el caso de las orellanas crecen principalmente en sustratos de residuos vegetales fibrosos o leñosos, ya que poseen la capacidad de degradar celulosa y ligninas presentes en: troncos, bagazos, virutas, aserrines, restos de leguminosas, pajas, rastrojos, tamos de cereales, heno, fibra de coco, cascarillas de granos, entre otros. Esto indica que existe una amplia gama de residuos en los cuales se puede producir la orellana y una facilidad para la obtención de los mismos.
        .col-12.col-xl-4.col-sm-10.col-lg-8.mx-auto.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/tema5/img02.png' alt='Imagen Decorativa')
    .row
      .col-10.mx-auto
        
        .titulo-sexto.color-adicional-1.mb-4(data-aos="fade-left")
          h5 Figura 3.
          span Tipos de sustratos.

        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img01.png', alt='Muestra los diferentes tipos de sustratos: materiales fibrosos y leñosos, el bagazo, la concha de café y la paja.')
          figcaption Nota. Mauricio Benavides, conoce los tipos de sustratos para tu cultivo hidropónico (2017).

        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Los sustratos cumplen una función muy importante en el desarrollo óptimo del cultivo, por lo cual debe cumplir con las condiciones necesarias, pues allí se alimentará el hongo hasta el final de su ciclo; luego, de la calidad del sustrato redunda la productividad, convirtiéndose en uno de los factores más importantes en el éxito del cultivo.
   
        div(data-aos="fade-left")
          h3.mb-4.titulo-imagen-izq-1 Criterios para la selección del sustrato
        
        p.mb-3 Para seleccionar el sustrato ideal para el cultivo de hongos Orellana, es crucial considerar su composición nutricional y física. Debe ser rico en nutrientes como nitrógeno y carbono, con una textura que facilite la retención de agua y el intercambio gaseoso. La esterilización adecuada y la ausencia de contaminantes son también criterios fundamentales para asegurar un ambiente propicio para su crecimiento óptimo. 
        p.mb-5 Para la selección del sustrato, es necesario conocer:

    .bloque-texto-g.color-beige.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        div.mb-0 
          ul.bullets
            li La cantidad y disponibilidad del material en la zona del cultivo.
            li Las características fisicoquímicas.
            li La trazabilidad.
            li La localización.
            li La facilidad de transporte.
            li El precio que sea de fácil adquisición.
            li La capacidad de almacenamiento de los materiales.
</template>

<script>
export default {
  name: 'Tema5',
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
