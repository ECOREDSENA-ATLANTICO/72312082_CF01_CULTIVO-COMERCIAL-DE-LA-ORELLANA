<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciclo biológico


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
