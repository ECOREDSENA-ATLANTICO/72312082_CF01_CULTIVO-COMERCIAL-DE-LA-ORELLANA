<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1(data-aos="fade-right") Características y composición de los sustratos 


    .tarjeta.p-4.bg_texture.mb-5
      .tarjeta.bg-white.p-5 
        SlyderA(tipo="b")
          div
            h3 Nutrientes
            p El sustrato debe contener los nutrientes necesarios para el crecimiento y desarrollo del hongo tales como: la celulosa, hemicelulosa y lignina, que actúan como fuente principal de carbono y nitrógeno. Aunque también se estima que requiere de otros elementos en menor cantidad como fosforo, potasio, azufre, magnesio, calcio, zinc y cobre (Guarín y Ramírez, 2004).
            p.mb-0 Asimismo, se recomienda que los sustratos no tengan presencia de algunos compuestos procedentes de fumigaciones o malos manejos que pueden afectar el desarrollo del cultivo, de allí la importancia de conocer la trazabilidad de los mismos.

          .row.align-items-center
            .col-sm-12.col-lg-3
              h3 Acidez:
              p.mb-3 Los hongos requieren de sustratos de pH ligeramente ácidos a neutros de 6-7.
            .col-sm-12.col-lg-9
              img.tarjeta.img-t(src='@/assets/curso/temas/tema6/img02.jpg' alt='Imagen Decorativa')
            
          .row.align-items-center
            .col-sm-12.col-lg-3
              h3 Aireación:	
              p.mb-3 Los hongos son organismos aeróbicos, por lo cual requiere la circulación de aire al interior del sustrato; por consiguiente, los sustratos no se deben compactar fácilmente.
            .col-sm-12.col-lg-9
              img.tarjeta(src='@/assets/curso/temas/tema6/img03.jpg' alt='Imagen Decorativa')
        
          .row.align-items-center
            .col-sm-12.col-lg-7
              h3 Humedad:
              p.mb-3 Es importante que los materiales a utilizar como sustratos sean frescos (pulpa de café) o estén deshidratados hasta una humedad aproximada del 12 %, para evitar los procesos de descomposición. Se recomienda que no haya estado expuesta a la lluvia y a la humedad. Estos deben tener una buena capacidad de retención de la humedad deseada en el proceso del cultivo que es entre un 70 - 80 %.
            .col-sm-12.col-lg-5
              img.tarjeta(src='@/assets/curso/temas/tema6/img04.jpg' alt='Imagen Decorativa')

    div(data-aos="fade-right")
      h3.mb-4.titulo-imagen-izq-1 Adecuación del sustrato

    .row.mb-5.align-items-center(data-aos="fade-left")
      .col-lg-4.col-md-7.col-8.mx-auto.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema6/img01.png' alt='Imagen Decorativa')
      .col-lg-8
        p.mb-3 Consiste en la adecuación de los materiales del sustrato en cuanto al tamaño de las partículas y su forma de almacenamiento.
        p.mb-3 El proceso inicia con la adecuación del tamaño de las partículas; esta práctica se realiza con el fin de desarrollar una materia prima que absorba mayor cantidad de agua y las fibras se trituren para que sus nutrientes sean más fácilmente asimilados por el micelio de Pleurotus. 
        p.mb-3 Los materiales son triturados de forma manual o mecánica hasta reducir su tamaño de partículas entre 0,5 y 2 cm, dependiendo del tipo de sustrato, para el caso de tamos o pajas se puede obtener cortes entre 3 y 5 cm,  con estos tamaños se logran los mejores resultados, es decir, que entre más pequeña sean las partículas, mejor la invasión del micelio. Sin embargo, es importante estar atento a que no se generen apelmazamientos para garantizar los procesos de aireación.

    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-3 Luego se homogenizan los materiales mezclando de manera uniforme las materias primas a utilizar  como sustratos. Si estos no están secos (caso de los tamos, virutas, bagazos y aserrines) y no se van a utilizar inmediatamente, se deben secar al sol previamente hasta obtener una humedad  aproximada del 13%, seguidamente se empacan en costales de fibra limpios y se almacenan temporalmente para luego recibir el respectivo tratamiento.
      p.mb-0 Para el almacenamiento temporal se deben tener en cuenta las siguientes recomendaciones:

    .row.mb-5.align-items-center(data-aos="fade-right")
      .col-12.col-lg-8.col-xl-7.mx-auto.mb-4.mb-lg-0
        SlyderF.tipoA(columnas="col-lg-6 col-xl-6 col-md-6")
          .bg-gray.tarjeta.p-4
            .h1.mb-1 01
            p Deben estar protegidos de la humedad y bajo cubierta para evitar la lluvia, si esto no se puede lograr, se debe cubrir con un plástico.

          .bg-gray.tarjeta.p-4
            .h1.mb-1 02
            p Lugar acondicionado con capa de concreto preferiblemente.
             
          .bg-gray.tarjeta.p-4
            .h1.mb-1 03
            p Apilados sobre estibas.
              
          .bg-gray.tarjeta.p-4
            .h1.mb-1 04
            p Protegidos de roedores.
              
      .col-8.col-md-6.col-xl-5.mx-auto
        figure
          img(src='@/assets/curso/temas/tema6/img05.png', alt='Imagen Decorativa')


</template>

<script>
export default {
  name: 'Tema6',
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
