<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Contexto del concepto de los seguros 

    .row.mb-5
      p Antes de empezar a conocer en detalle el tema de los seguros, es importante repasar su reseña histórica, la cual le permitirá saber más sobre los seguros, dónde se crean las compañías, los procesos, la normatividad y las reformas que se han estado desarrollando en este sector con el paso del tiempo.
      p A continuación, se presenta una parte de la historia de los seguros en Colombia:

    .row.mb-5
      .tarjeta.tarjeta--amarilla.p-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1874")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img1.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Creación de la Compañía Colombiana de Seguros
              p Debido a la atención de Estados Unidos en Colombia gracias al transporte marítimo, surgen los negocios internacionales entre ambos países. Sin embargo, teniendo en cuenta los riesgos implicados en este negocio, los empresarios reconocieron la necesidad de que las transacciones fueran aseguradas, con el propósito de no llegar a tener pérdidas del 100%. 

          .row(titulo="1927")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Ley 105 de 1927
              p Con el paso del tiempo, los negocios internacionales tuvieron gran acogida, por lo cual surgieron las reglas que regularizaron estos procesos, como la Ley 105 de 1927, la cual fue modificada por otras normas, tales como el Decreto Ley 1403 de 1940 (capitales mínimos), el Decreto Ley 1691 de 1960 (inversiones admisibles) y la Ley 16 de 1979 (inversiones forzosas). 

          .row(titulo="1989")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Desarrollo del programa de apertura y desregulación de la economía colombiana
              p En 1989 y 1990, el Gobierno Nacional y el regulador bancario en Colombia desarrollaron un programa de apertura económica y desregulación, emitiendo una serie de decretos para fortalecer el patrimonio empresarial. Actualmente, debido a la necesidad de seguros, la competencia en el mercado aumentó mediante primas y mecanismos acordados y gracias a la introducción de un sistema integral, se moderniza y liberaliza la regulación de seguros en Colombia, lo que ha cambiado muchos aspectos.

          .row(titulo="1990")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Reforma al sector asegurador
              p En la década de 1990, la reforma del sector de seguros fue aprobada por la Ley 45 de 1990. Esta ley transformó el negocio de seguros en el país, ya que reguló el principio de libre competencia; en esta se establecen elementos que fortalecen el patrimonio de empresas del sector de seguros, suprimiendo los monopolios oficiales de este campo. Esta reforma cambió los seguros de monedas extranjeras y de inversiones en el exterior, creando agentes independientes. 

          .row(titulo="1991")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Creación del primer Estatuto Orgánico del Sistema Financiero
              p En 1991 se crea el Decreto 1730 de 1991, este es el primer Estatuto Orgánico del Sistema Financiero, el cual agrupó las normas vigentes de las entidades vigiladas por la Superintendencia Bancaria.

          .row(titulo="1993")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img6.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Ley 35 de 1993
              p En 1993 se sancionó la Ley 35 de 1993, que corresponde al Marco para la Industria Financiera, Bursátil y de Seguros; en esta se establecen las reglas generales y se dictan las normas, objetivos y criterios que deben seguir los gobiernos nacionales para regular las actividades del sector de las compañías de seguros. Esta ley otorgó al Presidente de la República facultades extraordinarias al aprobarse el nuevo Estatuto del Sistema Financiero. 

          .row(titulo="2003")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img7.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Ley 795 de 2003
              p En el 2003 se modifica la Ley 510 de 1999 por la Ley 795 de 2003, iniciando la liberalización comercial y financiera; esto facilitó la inversión extranjera directa en la industria aseguradora, y eliminó los controles de las autoridades sobre las tarifas de los seguros. 

          .row(titulo="2009")
            .col-md-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img8.svg', alt='')

            .col-md-8.mb-4.mb-md-0
              h3 Reforma financiera
              p La liberalización financiera en el sector asegurador se amplió de manera definitiva en el 2009 con la aprobación de una reforma financiera que prevé que desde el 2012 los colombianos puedan obtener todos sus seguros tanto a nivel nacional como exterior. Por lo anterior, y debido al crecimiento acelerado de la seguridad social en Colombia, surge la necesidad de los seguros obligatorios en áreas como la salud, los riesgos profesionales, accidentes de tránsito y el desarrollo de esquemas de seguros previsionales y rentas vitalicias para ahorradores y pensionados de las administradoras de fondos privados de pensiones.

    .row.mb-5
      h3 Órganos de control de los seguros en Colombia
      p En el siguiente recurso, vamos a conocer cuáles son los órganos de control para los seguros en el país; además, se presentarán los objetivos, roles y funciones, que desempeña cada uno de estos.

      p Los organismos de control de los seguros en Colombia son:

    .bg1
      .row.justify-content-center.mb-5
        .col-lg-8          
          ImagenInfograficaB.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img9.svg', alt='')

            div(x="23%" y="22%" tooltip="" numero="+")
              h5 Superintendencia Financiera de Colombia
              p Entidad del Estado encargada de la supervisión y control de la actividad aseguradora. El objeto de esta entidad es controlar el sistema financiero colombiano, mantener la estabilidad, seguridad y confianza de los seguros en Colombia, además de promover, organizar y desarrollar el mercado de valores del país; esta entidad es una institución técnica del Ministerio de Hacienda y Crédito, cuenta con personería jurídica, autonomía administrativa, financiamiento y recursos propios.

            div(x="20%" y="59%" tooltip="" numero="+")
              h5 Contraloría General de la República
              p Entidad del Estado con el máximo órgano de control tributario y fiscal de Colombia. Algunas de las funciones desarrolladas por esta entidad son: controlar la gestión tributaria de la autoridad de acuerdo a las entidades administradoras de los recursos y bienes del estado; evaluar los resultados alcanzados; controlar la justificación de los informes contables bajo supervisión fiscal y tributaria; formar la cultura de supervisión del patrimonio estatal y administrativo público; fortalecer la implementación de las correspondientes sanciones financieras y verificar la justificación de los informes contables bajo supervisión fiscal, además de las otras actuaciones derivadas de la supervisión financiera, que están definidas mediante la Ley 42 de 1993. Por otro lado, moderniza el país a través de medidas de mejora continua en las comunidades públicas.

            div(x="30%" y="96%" tooltip="" numero="+")
              h5 Revisoría Fiscal
              p Es una actividad de auditoría integral de interés público, liderada por un especialista contable, quien recibe apoyo de expertos o auxiliares en caso de ser necesario. Las tareas mínimas de los auditores jurados son las tareas establecidas en el Código de Comercio, tales como la evaluación del sistema de control interno, que se realiza en relación con la auditoría; en esta, el auditor debe dar instrucciones sobre las medidas de control necesarias para mantener los valores de la empresa. Por estas razones, es claro que la opinión del auditor de cuentas debe incluir una evaluación del control interno en general. También, debe estar acompañada, principalmente, por un contador público, quien esté supervisando y analizando las operaciones de la empresa durante el año, verificando las órdenes de la asamblea general y del directorio y las leyes y reglamentos que les son aplicables en los aspectos financieros y contables, para dar una opinión sobre las operaciones de la empresa en particular. 

            div(x="77%" y="22%" tooltip="" numero="+")
              h5 Procuraduría General de la Nación
              p Entidad del Estado del Ministerio Público que también incluye la oficina de la Defensoría del Pueblo y las personerías. Es una unidad gubernamental responsable de iniciar investigaciones y fallar ante estos procesos; investigar disciplinariamente a los funcionarios públicos y quienes desempeñan funciones públicas o manejan dinero, además de sancionar los delitos de Estado que están estipulados en el Código Disciplinario Común. También interviene en los distintos niveles de jurisdicción administrativa, estatal y penal, penal militar, civil, ambiental y agraria, familiar y laboral, el Consejo Superior de Tribunales y los órganos administrativos y policiales

            div(x="80%" y="59%" tooltip="" numero="+")
              h5 Congreso de la República
              p En virtud de lo previsto en el Artículo 28 de la Ley 5 de 1992, los senadores y representantes pueden solicitar cualquier informe a la entidad, en ejercicio del control que le corresponde adelantar al Congreso, siendo este el máximo órgano representativo del poder legislativo. Según el Artículo 114 de la Constitución Política de Colombia, le corresponde al Congreso de la República reformar la constitución, hacer las leyes y ejercer control político sobre el gobierno y la administración. Actualmente el programa Congreso Visible de la Universidad de los Andes y el "Observatorio Legislativo" de la Universidad Nacional de Colombia le hacen seguimiento al Congreso de la República.

            div(x="70%" y="96%" tooltip="" numero="+")
              h5 Aseguradoras e intermediarios de seguros
              p El Artículo 5 del Estatuto Financiero trata sobre las entidades aseguradoras e intermediarios. En estas empresas son intermediarios de seguros los corredores, las agencias y sus agentes, cuya función consiste en la realización de las actividades contempladas en el Estatuto Financiero, mientras que los intermediarios de reaseguros son los corredores de reaseguros. Por otra parte, el sistema financiero muestra cómo sería la constitución de los intermediarios de seguros en el Artículo 54, en el que se exponen las normas especiales sobre la formación de intermediarios de seguros, cuya constitución se somete a las normas generales del Código de Comercio.


      .row.mb-5
        h4 Marco Regulatorio
        p La normativa vigente del sector de las empresas aseguradoras, es importante al momento de proceder con un cliente y realizar una negociación, lo mismo que las partes que componen el contrato de una póliza, con su función o cómo se debe registrar, teniendo presente la normatividad vigente.

      .row.mb-5
        .col-lg-6.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img10.svg', alt='')
        .col-lg-6
          p El primer estatuto del sistema financiero que reunió la normatividad vigente de las entidades bajo la supervisión de la autoridad de control bancario es la #[strong Normativa del sector de empresas aseguradoras], Decreto 1730 de 1991. La Ley 45 de 1990 debe mantenerse vigente en la medida en que no se opongan a las nuevas disposiciones. Esta ley establece los lineamientos generales para la actividad aseguradora en Colombia, la cual está sujeta a la supervisión gubernamental y es realizada por la supervisión bancaria, puesto que se esfuerza por proteger los derechos de los asegurados y por crear las condiciones adecuadas para el desarrollo del mercado de seguros y la sana competencia entre las instituciones participantes. La Ley 35 de 1993, o Ley de Marco del Sector Financiero, Bursátil y de Seguros, mediante la cual se establecen las normas generales y se señalan los objetivos y criterios que el Gobierno Nacional debe regular en esta actividad.

    .row.mb-3
      p Siguiendo con la normativa referente a los seguros, se hace necesario mencionar el Código del Comercio - Capítulo V, el cual hace referencia a los principios comunes a los seguros terrestres, iniciando con el Artículo 1036, hasta el Artículo 1082 y, desde el Artículo 1083 hasta el Artículo 1112, donde se abordan los temas sobre los principios comunes a los seguros de daños. A continuación, lo invitamos a ver el siguiente video, en el cual podrá conocer cuáles son los elementos esenciales del contrato de seguro.

      p Elementos esenciales del contrato de seguro:

    .bg2
      .row.mb-5(data-aos="fade-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
