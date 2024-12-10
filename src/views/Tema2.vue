<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciclo y clasificación de los hongos


    p.mb-3 El ciclo biológico del hongo comienza en el momento en que el hongo maduro libera o germina sus esporas adicionalmente, un pequeño filamento (hifa), comienza a aparecer. Esta hifa continúa creciendo, generando una red más densa llamada micelio. Luego de estar desarrollado completamente el micelio, se alista y genera unos cuerpos reproductores, generando así el producto a cosechar, en este caso la Orellana. El ciclo termina cuando el hongo seta, maduro, finaliza la liberación de esporas, para finalmente degradarse y morir.
    p.mb-5 A continuación, se muestra una imagen del ciclo biológico del hongo seta:

    .row 
      .col-10.mx-auto 
        .titulo-sexto.color-adicional-1.mb-4
          h5 Figura 3.
          span Ciclo biológico de la orellana. 
    
        figure.mb-5
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Texto que describa la imagen')
          figcaption Nota. Morfología de los hongos (2014).


    
    p.mb-4 Existen cuatro clases de hongos dependiendo de la forma de reproducirse:

    TabsC.color-primario
      .py-3.py-md-4(titulo="Ficomicetos")
        .row.align-items-center.bg-texture.p-4
          .col-12.col-md-8.col-lg-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-4
            p.p-5 Considerados hongos primitivos, se caracterizan por ser unicelulares, se reproducen de forma asexual y sexual. A este grupo pertenecen los mohos.
        
        
      .py-3.py-md-4(titulo="Ascomicetos")
        .row.align-items-center.bg-texture.p-4
          .col-12.col-md-8.col-lg-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-4
            p.p-5 Se caracterizan por la formación de ascas dentro de las cuales se producen ascosporas. Pertenecen a este grupo las levaduras. Se reproducen de forma sexual. 

      .py-3.py-md-4(titulo="Basidiomicetos")
        .row.align-items-center.bg-texture.p-4
          .col-12.col-md-8.col-lg-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-4
            p.p-5 En esta clase se encuentra el grupo de hongos comestibles y entre éstos el pleurotus spp. Son hongos con basidios, las cuales son células madre en forma de maza, que producen esporas sexuadas, si están en un sitio con las condiciones adecuadas dará origen al micelio.

        
      .py-3.py-md-4(titulo="Hongos imperfectos")
        .row.d-flex.align-items-center.bg-texture.p-4
          .col-12.col-md-8.col-lg-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-4
            p.p-5 Son hongos con micelio tabicado, pero su etapa de reproducción sexual no se conoce, más que las esporas asexuadas o conidias.
        

</template>

<script>
export default {
  name: 'Tema2',
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
