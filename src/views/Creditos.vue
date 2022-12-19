<template lang="pug">
  .curso-main-container.creditos-vista
    BannerInterno(icono="far fa-registered" titulo="Créditos")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      .row.mb-4.justify-content-center.align-items-center
        .col-md-10.mb-4.mb-md-0
          .tarjeta.p-3.text-center.h-100
            h2 Elaborado por:
            img.mx-auto.d-inline-block.mb-3(src='@/assets/template/logo_IE.png' style='width:80%;max-width:613px')

        //.col.mb-4.mb-md-0
          .tarjeta.p-3.text-center.h-100
            img.d-inline-block.mb-3(src='@/assets/template/icono-SENA.svg' style='width:70px')
            
      .row.mb-4.mb-md-5
        .col-md-6.mb-4.mb-md-0
          .tarjeta.credito.p-3.text-center.h-100
            img.d-inline-block(src="@/assets/template/creditos-img.svg" style="width: 70px")
            p Fotografías y vectores tomados de 
              a(href="https://www.freepik.es/" target="_blank") www.freepik.es
              | ,  
              a(href="https://www.shutterstock.com/" target="_blank") www.shutterstock.com
              | , 
              a(href="https://unsplash.com/" target="_blank") unsplash.com 
              | y 
              a(href="https://www.flaticon.com/" target="_blank") www.flaticon.com
        .col-md-6
          .tarjeta.credito.p-3.text-center.h-100
            img.d-inline-block(src="@/assets/template/creditos-cc.svg" style="width: 70px;")
            p.mb-0 Licencia creative commons CC BY-NC-SA
              br
              a(href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank") ver licencia
  
      Footer(all-round)
    
      
  
  </template>
<script>
import BannerInterno from '../../node_modules/ecored-base-pkg/src/components/plantilla/BannerInterno.vue'
import Footer from '../../node_modules/ecored-base-pkg/src/components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
