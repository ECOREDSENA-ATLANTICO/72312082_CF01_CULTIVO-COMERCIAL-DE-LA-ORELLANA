<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1(data-aos="fade-right") Tratamientos del sustrato 
    
    p.mb-5 Los procesos de tratamiento del sustrato consisten en suministrar unas condiciones ideales para la siembra o inoculación del hongo, por lo que es fundamental que el sustrato que se utilizará para el cultivo, este preparado para el desarrollo del micelio y la obtención de fructificaciones.
     
    .row
      .col-10.mx-auto
        div(data-aos="fade-right")
          h3.mb-4.titulo-imagen-izq-1 Fermentación
        
        p.mb-4(data-aos="fade-right") Es un tratamiento aeróbico aplicado sólo a algunos sustratos ricos en azucares como la pulpa de café y los bagazos frescos, que si no son eliminados pueden generar la presencia de mohos, levaduras o bacterias que compiten  con el hongo de la orellana, impidiendo su crecimiento y desarrollo.
      
        .titulo-sexto.color-adicional-1.mb-4(data-aos="fade-right")
          h5 Figura 5.
          span Fermentación de Sustrato.
    
        ImagenInfografica.color-primario.mb-5(data-aos="fade-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema7/img01.png', alt='Texto que describa la imagen')
              figcaption Nota. Mauricio Benavides, conoce los tipos de sustratos para tu cultivo hidropónico (2017).

          .tarjeta.bg-white.p-3(x="20.4%" y="60.4%" numero="1")
            p Para lograr una fermentación homogénea, se debe humedecer con agua el sustrato en 70-75% de humedad y formar un montículo, tapándolo con un plástico para mantener la humedad y el calor. 

          .tarjeta.bg-white.p-3(x="43.75%" y="60.4%" numero="2")
            p Luego, se deben realizar volteos cada 3 días para favorecer las condiciones de aireación y la fermentación. Para el caso del bagazo el tiempo de fermentación es de 8-10 días y para la pulpa de café, de 3-5 días. 

          .tarjeta.bg-white.p-3(x="66.1%" y="60.4%" numero="3")
            p De esta manera se obtendrá al final de la fermentación un sustrato rico en lignina y celulosa muy similar a las pajas o tamos (Guzmán, Mata, Salmones, Soto, y Guzmán, 2010).

        div(data-aos="fade-left")
          h3.mb-4.titulo-imagen-izq-1 Fermentación
        
        p.mb-5 Los sustratos secos como el aserrín, las pajas, los tamos, los bagazos secos, la pulpa de café seca son sometidos a hidratación, sumergiendo los costales de fibra con el sustrato en recipientes con agua por espacio de unas 20 horas hasta alcanzar una humedad del 75 %.

        div(data-aos="fade-right")
          h3.mb-4.titulo-imagen-izq-1 Pasteurización
        p.mb-3 Este proceso consiste en eliminar los organismos patógenos con temperaturas entre 70 - 78 grados centígrados durante 1 o 2 horas. Durante este periodo se eliminan los organismos perjudiciales y los microorganismos benéficos se mantienen. Estos organismos benéficos se conocen también como organismos termófilos que ayudan en la selectividad del sustrato. Por cada tonelada de tamo o bagazo seco se producen unas 2.8 toneladas de sustrato.
        p.mb-5 Procedimiento para llevar a cabo la pasteurización por inmersión del sustrato en agua caliente:


        .row.mb-4.align-items-center
          .col-lg-8.col-12.mx-auto.mb-4.mb-lg-0(data-aos="fade-left")
            SlyderF.tipoA(columnas="col-lg-6 col-xl-6")
              .bg-gray.tarjeta.p-4
                .h1.mb-1 Paso 01
                p.mb-0 El sustrato debe colocarse dentro de cilindros metálicos perforados, mallas metálicas o costales de fibra previamente perforados, que luego se sumergirán en canecas de 55 galones.

              .bg-gray.tarjeta.p-4
                .align-items-center
                  .h1.mb-1 Paso 02
                  p.mb-0 Debajo de la caneca debe haber algún tipo de fuente de calor tal como una hoguera o un quemador de gas. Se recomienda utilizar el quemador para controlar la llama.

              .bg-gray.tarjeta.p-4
                .align-items-center
                  .h1.mb-1 Paso 03
                  p.mb-0 Se debe contar con un termómetro para la medición de la temperatura con escala mínima hasta 80 grados Celsius. La temperatura se medirá dentro de los bultos o recipientes donde se encuentre el sustrato.


              .bg-gray.tarjeta.p-4
                .h1.mb-1 Paso 04
                p.mb-0 La pasteurización se debe cronometrar desde el momento en que el sustrato llegue a 70 - 73 grados Celsius y mantenerla ahí durante 1 - 2 horas.

              .bg-gray.tarjeta.p-4
                .align-items-center
                  .h1.mb-1 Paso 05
                  p.mb-0 Luego de terminar la pasteurización se saca el cilindro o bultos para bajar su temperatura hasta 24 - 25 grados Celsius y drenar el agua contendida por saturación, durante un periodo de 3-4 horas.

              .bg-gray.tarjeta.p-4
                .align-items-center
                  .h1.mb-1 Paso 06
                  p.mb-0 Se recomienda ubicar este sustrato ya pasteurizado en una zona limpia y aislada del ambiente exterior.
          .col-lg-4.col-8.mx-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema7/img02.png', alt='Imagen Decorativa')

        p.mb-4 Una vez finalizado la pasteurización, el sustrato selectivo está listo para iniciar el proceso de siembra o inoculación.

        .titulo-sexto.color-adicional-1.mb-4(data-aos="fade-right")
          h5 Figura 6.
          span Proceso de inmersión del sustrato

        figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema7/img03.png', alt='Texto que describa la imagen')
          figcaption Nota. Mauricio Benavides, conoce los tipos de sustratos para tu cultivo hidropónico (2017).).

</template>

<script>
export default {
  name: 'Tema7',
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
