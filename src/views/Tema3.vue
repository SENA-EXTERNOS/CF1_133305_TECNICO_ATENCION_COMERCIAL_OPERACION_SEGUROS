<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguros

    .row.mb-5
      .col-lg-6.mb-4
        p Los seguros son instrumentos financieros que brindan garantías a las personas, las empresas y al Estado, al transferir sus ingresos a otra persona o compañía, mediante el pago de una suma de dinero. En caso de que sucedan los hechos que están contemplados en el seguro, el tercero debe pagar al asegurado una indemnización por la suma asegurada, o en su lugar, brindar un servicio. De acuerdo con las condiciones de la póliza, los seguros contribuyen a la recuperación de los efectos adversos que puedan producirse por situaciones inesperadas, para que no se vea afectada la calidad de vida de la persona involucrada o de su familia. 

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='')

    .row.mb-3
      p A continuación, se presentan los componentes que lo conforman.

    .row.mb-5
      TabsA.color-primario
        .tarjeta.color-primario--borde.p-4(titulo="Póliza de seguro")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
            
            .col-lg-10.mt-5
              p Documento que expide la compañía de seguros, en la cual se indican todas las condiciones de cobertura del seguro contratado.

        .tarjeta.color-primario--borde.p-4(titulo="Prima")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img3.svg', alt='')
            
            .col-lg-10.mt-5
              p Cantidad que se paga por el seguro, es decir, el costo. Se puede pagar de contado y en ocasiones en cuotas, dependiendo del tipo de seguro.


        .tarjeta.color-primario--borde.p-4(titulo="Tomador")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img4.svg', alt='')
            
            .col-lg-10.mt-5
              p Persona que adquiere el seguro. Generalmente es la misma persona que lo paga. 

        .tarjeta.color-primario--borde.p-4(titulo="Asegurado")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img5.svg', alt='')
            
            .col-lg-10.mt-5
              p Persona a quien cubre la póliza en caso de resultar afectada por alguno de los riesgos contemplados en el seguro. 

        .tarjeta.color-primario--borde.p-4(titulo="Beneficiario")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img6.svg', alt='')
            
            .col-lg-10.mt-5
              p Persona que obtiene el pago de la indemnización o se le presta el servicio cuando se ejecuta el riesgo cubierto por el seguro.

        .tarjeta.color-primario--borde.p-4(titulo="Valor asegurado")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='')
            
            .col-lg-10.mt-5
              p Valor o monto que recibe el afectado como indemnización por la materialización del riesgo cubierto por el seguro.

        .tarjeta.color-primario--borde.p-4(titulo="Deducible")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
            
            .col-lg-10.mt-5
              p Valor que debe asumir la persona que recibe la indemnización; es decir, el monto que la compañía de seguros no paga al beneficiario.

        .tarjeta.color-primario--borde.p-4(titulo="Exclusiones")
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img9.svg', alt='')
            
            .col-lg-10.mt-5
              p Condiciones específicas que no están cubiertas en el contrato de seguros, por lo tanto no serán pagadas por el este. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img10.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p Cuando un riesgo sea asegurable, este se proyecta a futuro, es decir, es incierto y medible, por lo tanto, no ha ocurrido aún. Los riesgos que cubre el seguro deben tener una probabilidad de ocurrencia y se pueden cuantificar económicamente; estos no pueden cubrir hechos ciertos o previamente conocidos, por ejemplo: los videojuegos del almacén de Anderson pueden ser asegurados contra robo. En caso de que ocurra este delito, la aseguradora pagará a Jairo el valor de los equipos, pero, el seguro no puede ser adquirido después de ocurrido el robo, ya que este es un hecho cierto, es decir, ya se sabe que hubo un robo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p Los seguros se pueden clasificar en dos grupos: seguros de daños y seguros de personas. Los seguros de daños de uso o propiedad patrimonial del cliente dependen de las condiciones que obtenga y la cobertura que posea. Estos amparan los bienes muebles o inmuebles, como las casas y lo que hay dentro de ellas. Los seguros de personas amparan la vida, la integridad y la salud de los individuos.

    .bg5
      .row.justify-content-center.mb-5       
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img11.svg', alt='')

          div(x="11%" y="62%" tooltip="" numero="+")
            h5 Seguros de vida
            p Son pólizas que cubren muchos beneficios, entre los cuales están: brindar asistencia financiera en caso de fallecimiento y entregar ahorros o reembolsos si el cliente decide no continuar con el seguro. Su objetivo es asegurar a la persona de por vida en un solo pago y entregar dinero al beneficiario si la persona asegurada fallece.

          div(x="27%" y="20%" tooltip="" numero="+")
            h5 Seguros de transporte
            p Especialmente diseñados para la seguridad y protección de automóviles, camiones y otros medios de transporte de personas. Este tipo de seguros tienen cobertura de daños en caso de pérdida parcial o total del vehículo y cualquier asistencia técnica requerida por el cliente. Los beneficios de este seguro incluyen el asesoramiento legal, los servicios de grúa, la indemnización por daños causados a terceros y el reembolso de los gastos necesarios para la defensa jurídica en caso de accidente o daños al vehículo.

          div(x="43%" y="62%" tooltip="" numero="+")
            h5 Seguros de vivienda
            p Este beneficio fue creado para proteger a los hogares en caso de accidentes y desastres que causen daños, tales como derrumbes, incendios y huracanes. En este caso, el beneficio tiene cobertura por humo, granizo, inundaciones, derrumbes o deslizamientos, rayos, ciclones, tifones, tornados, explosiones, daños causados por vehículos terrestres o por parte del beneficiario. También cubre los daños a la tierra y al terreno. 

          div(x="59%" y="20%" tooltip="" numero="+")
            h5 Seguros de salud o enfermedad
            p Estos son seguros muy populares a nivel internacional, ya que ofrecen un servicio médico VIP a sus usuarios, brindando expertos siempre disponibles y una atención médica óptima y oportuna que no se encuentra en los sistemas de salud tradicionales. Además, cuenta con la posibilidad de elegir las clínicas en las cuales atienden especialistas exclusivos, realizan cirugías ambulatorias, intervenciones de fracturas, laboratorios clínicos, consultas médicas y ambulatorias, entre otros. También hacen parte de este tipo los Seguros de Recién Nacido o de accidentes. 

          div(x="75%" y="62%" tooltip="" numero="+")
            h5 Seguro de accidentes personales
            p Tipo de seguro que ofrece una indemnización en caso de que una persona fallezca en un accidente. Cuenta con un apoyo económico en caso de invalidez o desmembración a causa del accidente.

          div(x="91%" y="20%" tooltip="" numero="+")
            h5 Seguro de viajes 
            p Es un seguro para turistas que puedan tener un accidente; este cuenta con una indemnización y garantiza la cobertura durante el viaje a Colombia.

      .row.mb-5
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema3/img12.svg', alt='')

        .col-lg-6.mt-4
          p Cuando se habla de seguros, también es necesario hablar de reaseguros, que se refiere a las compañías de seguros y cooperativas que realizan actividades de seguros con normas y sucursales expresamente autorizadas, salvo lo específicamente previsto por la ley. También pueden ejercer el reaseguro en las condiciones que establezca el gobierno, debiendo tener únicamente este objeto las empresas que tengan como propósito la realización de seguros individuales, sin que sus actividades puedan extenderse a otras actividades aseguradoras, excepto las que tengan carácter complementario, como lo indica el  Artículo 38 del Reglamento Financiero.  El reaseguro también puede clasificarse según el tipo de contrato y el objeto de la función del contenido de las cesiones. 

    .row.mb-5
      p A continuación, se presentan los tipos de reaseguros según el método de contratación.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img13.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center.mt-2 Reaseguro obligatorio
            p.mb-0.text-center.my-3 Contrato de la aseguradora que se compromete a entregar al asegurador todas las pólizas que cubran determinados riesgos y los obliga a aceptarlos. Se deben cumplir las condiciones pactadas en el contrato por ambas partes (asegurador y reasegurador).

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img14.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center.mt-2 Reaseguro facultativo
            p.mb-0.text-center.my-3 El asegurador y el reasegurador no están en la obligación de ceder o aceptar los riesgos. Cada uno de ellos negocia de manera individual e independiente las condiciones para cada uno de los casos.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img15.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center.mt-2 Reaseguro semi facultativo
            p.mb-0.text-center.my-3 El reasegurador tiene la obligación de aceptar los riesgos que le ceda la aseguradora, cuando se cumplan los requisitos que se han establecido en la carta de garantías y no está obligado a transferirlos

    .row.mb-5
      p Así como se presentó la clasificación de los reaseguros según el método de contratación, también se presenta la clasificación de los reaseguros según la función del contenido de las cesiones.
      p De esta manera, se presentan estos tipos de reaseguros.


    .row.justify-content-center.mb-5
      .col-lg-8.mb-4
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla2.px-lg-5
            .p-4
              h4 Reaseguro de cuota parte  
              p El asegurador transfiere al reasegurador parte proporcional del capital que tiene asegurado a una modalidad o una sección determinada.

        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--morada.px-lg-5
            .p-4
              h4 Reaseguro de excedente  
              p Se conceden los capitales asegurados de las pólizas que excedan un valor determinado, que haya sido establecido previamente. El reasegurador participa en una proporción variable.

        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--amarilla3.px-lg-5
            .p-4
              h4 Reaseguro de exceso de siniestralidad  
              p La aseguradora establece qué porcentaje máximo de siniestralidad global va a cubrir en una determinada modalidad mientras que el reasegurador hará frente al evento.

      .col-6.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/img19.svg", alt="alt").img19-tm3
    .bg6
      .row.justify-content-center
        .col-lg-9
          .cajon.color-primario.p-3
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para hacerlo, diríjase al menú principal, donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a desarrollar la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.



</template>

<script>
export default {
  name: 'Tema3',
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
