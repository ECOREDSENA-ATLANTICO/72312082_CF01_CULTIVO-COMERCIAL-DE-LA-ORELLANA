<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Los hongos son organismos fundamentales en diversos ecosistemas. Comprender sus generalidades y la correcta elaboración de sustratos es crucial para optimizar su cultivo y aplicaciones industriales. Bienvenido a este componente formativo:

    figure.mb-5
        .video
          <iframe width="853" height="480" src="https://www.youtube.com/embed/6s1LruNZscY?si=yiTTC03dz9_yGTT-" title="Conceptos básicos de hongos y sustratos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
