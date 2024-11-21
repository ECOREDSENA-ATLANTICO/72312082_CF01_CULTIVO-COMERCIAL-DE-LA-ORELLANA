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
          <iframe width="853" height="480" src="https://www.youtube.com/embed/4ghDpL7vTdg?si=7N-RRTiH-Qj6qd3g" title="Conceptos básicos de hongos y sustratos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video: Sena 2014.

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
