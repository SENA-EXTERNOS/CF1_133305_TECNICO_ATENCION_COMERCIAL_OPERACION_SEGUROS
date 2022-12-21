<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-6.mb-4
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='')
      .col-lg-6
        p Apreciado aprendiz, bienvenido a este componente formativo, en el que conocerá acerca de la historia del sector de las empresas aseguradoras en Colombia, cómo inició y hasta dónde ha llegado en la actualidad, la importancia que tienen estas empresas en la economía colombiana brindando soporte a los negocios, como garantía de que se van a hacer efectivos y reales en el momento de la transacción. También, podrá aprender acerca de cómo unas normas locales se transforman en estándares, entre otras cosas, una adecuada gestión del riesgo y una exigencia de capital que mitiguen los riesgos inesperados.

    .row.mb-3
      p A continuación, lo invitamos a ver el siguiente video, que le dará un panorama general sobre las diferentes temáticas que se van a estudiar.
      p ¡Muchos éxitos en este proceso de aprendizaje!

    .row.mb-5(data-aos="fade-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
