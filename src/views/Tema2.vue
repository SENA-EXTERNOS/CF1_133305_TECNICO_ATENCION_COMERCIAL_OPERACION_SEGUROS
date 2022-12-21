<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Administración del riesgo

    .row.mb-5
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='')
      .col-lg-8
        p Las empresas deben contar con un sistema de evaluación y gestión de riesgos tanto financieros como operativos en su infraestructura, de acuerdo con su tamaño y las actividades a las que se enfocan, por lo que es importante establecer metas para descubrir los riesgos potenciales que la afectan. Para esto, se debe realizar el análisis de los riesgos a los que esta se expone, las medidas de control interno y la adecuación de los sistemas de riesgos obtenidos como resultado de dicho análisis, qué política y nivel de cobertura debe cubrir a la sociedad y asegurar las actividades de control hasta la reducción del riesgo.
        .cajon.color-primario.p-3
          p En los negocios, es importante caracterizar cómo se conoce la empresa y sus actividades, la política de riesgos de la organización, que puede ser influenciada durante las negociaciones, y descubrir las fuentes de riesgo. Esto se realiza a través de documentación y revisión de las actividades de la empresa, el inventario, entrevistas a los responsables del proceso y visitas de comparación de datos a las empresas.

    .row.justify-content-center.mb-3
      .col-lg-11
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.mb-4
              img(src="@/assets/curso/temas/tema2/img2.svg").img2-tm2
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tipos de riesgos
                  p Para profundizar sobre los tipos de riesgos según la Circular Externa 029 de 2014 de la Superintendencia Financiera, lo invitamos a leer el documento Tipos de riesgos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/tipos_de_riesgos.pdf')" target="_blank")
                    span.texto-blanco Descargar
                    i.fas.fa-file-download.texto-blanco

    .row.mb-5
      p Para la gestión de riesgos es usual apoyarse en una matriz de riesgo, la cual es un resumen donde se hace el análisis con relación a los sucesos que se pueden presentar en una entidad. 

    .row.justify-content-center.mb-3
      .col-lg-11
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.mb-4
              img(src="@/assets/curso/temas/tema2/img2.svg").img2-tm2
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Plantilla del modelo de matriz de riesgos
                  p A continuación, lo invitamos a descargar la plantilla del modelo de matriz de riesgos, el cual le permitirá identificar y organizar los riesgos de una organización.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/modelo_matriz_de_riesgos.xlsx')" target="_blank")
                    span.texto-blanco Descargar
                    i.fas.fa-file-download.texto-blanco

    separador

    #t_2_1
    .titulo-segundo.color-acento-contenido.my-5(data-aos="fade-up-right")
      h2 2.1 Normatividad del riesgo

    .row.mb-5
      p A continuación, conocerá algunas clases de seguros con el objetivo de identificar su importancia en el mercado, dado que, quien sufre un perjuicio, adquiere el derecho a ser indemnizado y quien lo causa, consecuentemente, está obligado a reparar al primero de forma integral. Por lo tanto, es importante que conozca estos procesos al momento de asesorar a un cliente.

    .bg3
      .row.mb-3
        h4 Seguro de daños

      .row.mb-5
        .col-lg-6.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img4.svg', alt='')          
        .col-lg-6
          p El seguro de daños es el mismo seguro de responsabilidad civil; le corresponde poner a disposición de las personas las herramientas jurídicas necesarias para garantizar que las indemnizaciones sean entregadas a las víctimas. Este seguro nace para proteger al asegurado cuando este ha causado un perjuicio y se le exige la respectiva indemnización, de manera que no tenga que asumir la obligación de reparar a la víctima directamente si es de una cuantía considerable, sino que encuentre respaldo en la cobertura de la póliza otorgada por la aseguradora.

      .row.mb-5
        p A continuación, se presentan los elementos para tener en cuenta en este contrato.

      .row.mb-5
        .col-lg-7.mb-4
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--verde")
            .row(titulo="Daño")
              p Si no hay perjuicio no puede condenarse a otro, como responsable, a la indemnización. En el daño encontramos algunos planos como el patrimonial (daño material y lucro cesante), daño inmaterial (daño moral, perjuicio fisiológico, daño a la salud) y daño extrapatrimonial de la víctima.

            .row(titulo="Daño según la Corte Suprema")
              p La Corte Suprema de Justicia (2009) establece: “el daño, entendido en sentido icástico, o sea, la lesión, detrimento o menoscabo de un derecho, interés o, incluso, un valor tutelado por el ordenamiento jurídico, es el primer elemento o presupuesto de la responsabilidad civil” (p. 10)

            .row(titulo="El seguro de responsabilidad según el Código de Comercio")
              p El Código de Comercio, norma aplicable en esta materia, define este seguro de la siguiente manera:
              p Artículo 1127.- Modificado. Ley 45/90, Art. 84. “El seguro de responsabilidad impone a cargo del asegurador la obligación de indemnizar los perjuicios patrimoniales que cause el asegurado con motivo de determinada responsabilidad en que incurra de acuerdo con la ley y tiene como propósito el resarcimiento de la víctima, la cual, en tal virtud, se constituye en el beneficiario de la indemnización, sin perjuicio de las prestaciones que se le reconozcan al asegurado. Son asegurables la responsabilidad contractual y la extracontractual, al igual que la culpa grave, con la restricción indicada en el Artículo 1055 del Código de Comercio” (Secretaría Senado, 2022, párr. 32). 

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema2/img5.svg', alt='')           

      .row.mb-3
        h4 Seguro de incendio
        p Según el Código de Comercio en el Artículo 1113, en este tipo de seguros 


      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-b.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p El asegurador contra el riesgo de incendio responde por los daños materiales de que sean objeto las cosas aseguradas, por causa de fuego hostil o rayo, o de sus efectos inmediatos, como el calor, el humo
              b.texto-derecha Secretaría Senado, 2022, párr. 25
              i.fas.fa-quote-right

      .row.mb-5
        p Por lo tanto, es importante  tener presente los siguientes artículos que refieren el tema de seguro de incendio: Art.1114, 1115 y 1116 de la Circular Externa 029 de 2014 de la Superintendencia Financiera.
        p A continuación, se presentan los Artículos mencionados.

      .row.mb-5
        .col-lg-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img6.svg', alt='')        
        
        .col-lg-8
          LineaTiempoD.color-secundario.mt-3
            .row(numero="1" titulo="Artículo 1113 ")
              .col-6.col-lg-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img6-2.svg', alt='')
              .col-lg-10           
                p El asegurador contra el riesgo de incendio responde por los daños materiales de que sean objeto las cosas aseguradas, por causa de fuego hostil o rayo, o de sus efectos inmediatos, como el calor, o el humo. Responde igualmente cuando tales daños sean consecuencia de las medidas adoptadas para evitar la propagación del incendio.

            .row(numero="2" titulo="Artículo 1114")
              .col-6.col-lg-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img6-2.svg', alt='')
              .col-lg-10           
                p El asegurador no responde por las consecuencias de la explosión, a menos que esta sea efecto del incendio.

            .row(numero="3" titulo="Artículo 1115")
              .col-6.col-lg-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img6-2.svg', alt='')
              .col-lg-10           
                p El daño o la pérdida de una cosa, proveniente de su combustión espontánea, no están comprendidos dentro de la extensión del riesgo asumido por el asegurador.

            .row(numero="4" titulo="Artículo 1116")
              .col-6.col-lg-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img6-2.svg', alt='')
              .col-lg-10           
                p Aunque se produzca con ocasión del incendio, la apropiación por un tercero de las cosas aseguradas no compromete la responsabilidad del asegurador.

      .row.mb-3
        h4 Seguro de transporte
        p Para abarcar los seguros de transporte se hará referencia partiendo del Artículo 1117 hasta llegar al Artículo 1126 de la Circular Externa 029 de 2014 de la Superintendencia Financiera.
        p Con base en esta circular, se detalla cada uno de los artículos mencionados.

      .row.mb-5
        .tarjeta.SlyderA-bgr.p-3.p-lg-5
          SlyderA(tipo="b")
            .row
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Artículo 1117 
                p Modificado por el D.E. 01/90, art. 43. Además de las enunciaciones exigidas en el Artículo 1047, el certificado de seguro deberá contener:
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | La forma como se haya hecho o deba hacerse el transporte.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | La designación del punto donde hayan sido o deban ser recibidas las mercancías aseguradas y el lugar de la entrega, es decir, el trayecto asegurado, sin perjuicio de lo dispuesto en el inciso segundo del Artículo siguiente.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Las calidades específicas de las mercancías aseguradas con expresión del número de bultos.

              .col-md-6.mb-5
                figure
                  img(src='@/assets/curso/temas/tema2/img7.svg', alt='')

            .row
              .col-md-6.mb-4.mb-md-0
                p.mb-3 El certificado de seguro de transporte puede ser nominativo, a la orden o al portador. La cesión de los certificados nominativos puede hacerse aun sin el consentimiento del asegurador, a menos que se estipule lo contrario.
                p #[strong Parágrafo:] en la póliza automática, el certificado de seguro tiene también la función de especificar y valorar las mercancías genéricamente señaladas en la póliza. El certificado puede emitirse aún después de que ha transcurrido el riesgo u ocurrido o podido ocurrir el siniestro.

              .col-md-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img8.svg', alt='')

            .row
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Artículo 1118 
                p Modificado. D.E. 01/90, art. 44. La responsabilidad del asegurador inicia desde el momento en que el transportador recibe o ha debido hacerse cargo de las mercancías objeto del seguro y concluye con su entrega al destinatario.
                p Con todo, esta responsabilidad podrá extenderse, a voluntad de las partes, a cubrir la permanencia de los bienes asegurados en los lugares iniciales o finales del trayecto asegurado.

              .col-md-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img9.svg', alt='')

            .row
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Artículo 1119
                p.mb-4 El asegurador ganará irrevocablemente la prima desde el momento en que los riesgos comiencen a correr por su cuenta.
                h4.mb-4 Artículo 1120
                p El seguro de transporte comprenderá todos los riesgos inherentes al transporte. Pero el asegurador no está obligado a responder por los deterioros causados por el simple transcurso del tiempo, ni por los riesgos expresamente excluidos del amparo.

              .col-md-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img10.svg', alt='')

            .row
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Artículo 1121 
                p.mb-4 El asegurador responderá de los daños causados por culpa o dolo de los encargados de la recepción, transporte o entrega de los efectos asegurados, sin perjuicio de la subrogación a que tiene derecho de conformidad con el Artículo 1096.
                h4.mb-4 Artículo 1122 
                p Modificado. D.E. 01/90, art. 45. En la suma asegurada se entenderá incluido, además del costo de las mercancías aseguradas, en el lugar de destino, el lucro cesante si así se hubiere convenido.

              .col-md-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img11.svg', alt='')

            .row
              .col-md-6.mb-4.mb-md-0
                p En los seguros relativos al transporte terrestre, si este lo realiza un tercero, salvo pacto en contrario, la indemnización por concepto de daño emergente a cargo del asegurador tendrá como límite máximo el valor declarado por el remitente según el inciso Artículo 1010, o en tercero del su defecto, el valor determinado conforme al inciso sexto del Artículo 1031 de este código.

              .col-md-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img12.svg', alt='')

            .row
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Artículo 1123 
                p.mb-4 El asegurado no podrá hacer dejación total o parcial de los objetos averiados, a favor del asegurador, salvo estipulación en contrario.
                h4.mb-4 Artículo 1124 
                p Modificado. D.E. 01/90, art. 46. Podrán contratar el seguro de transporte no sólo el propietario de la mercancía, sino también todos aquellos que tengan responsabilidad en su conservación, tales como el comisionista o la empresa de transporte, expresando en la póliza si el interés asegurado es la mercancía o la responsabilidad por el transporte de la mercancía.

              .col-md-6.mb-5
                figure
                  img(src='@/assets/curso/temas/tema2/img13.svg', alt='')

            .row
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Artículo 1125
                p.mb-4 No serán aplicables al seguro de transporte el ordinal 6º del Artículo 1047 ni los Artículos 1070, 1071 y 1107.
                h4.mb-4 Artículo 1126 
                p En los casos no previstos en esta sección se aplicarán las disposiciones sobre el seguro marítimo.

              .col-md-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img14.svg', alt='')

    .row.mb-5
      h4.mb-5 Seguro de responsabilidad
      p.mb-4 Ahora bien, dentro de la normatividad de seguros también se encuentra el seguro de responsabilidad, citado desde el Artículo 1127 hasta el Artículo 1133 de la Circular Externa 029 de 2014 de la Superintendencia Financiera.
      p A continuación, se detalla cada uno de estos Artículos referentes al seguro de responsabilidad.

    .row.mb-5
      TabsA.color-primario
        .tarjeta.color-primario--borde.p-4(titulo="Artículo 1127")
          .row
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
            
            .col-lg-10
              p Modificado por la Ley 45/90, art. 84. Naturaleza del seguro de responsabilidad civil. El seguro de responsabilidad impone a cargo del asegurador la obligación de indemnizar los perjuicios patrimoniales que cause el asegurado con motivo de determinada responsabilidad en que incurra de acuerdo con la ley y tiene como propósito el resarcimiento de la víctima, la cual, en tal virtud, se constituye en el beneficiario de la indemnización, sin perjuicio de las prestaciones que se le reconozcan al asegurado. Son asegurables la responsabilidad contractual y la extracontractual, al igual que la culpa grave, con la restricción indicada en el Artículo 1055. 
        
        .tarjeta.color-primario--borde.p-4(titulo="Artículo 1128")
          .row
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
            
            .col-lg-10
              p Modificado por la Ley 45/90, art. 85. Responsabilidad del asegurador. El asegurador responderá, además, aún en exceso de la suma asegurada por los costos del proceso que el tercero damnificado o sus causahabientes promuevan en su contra o la del asegurado, con las salvedades siguientes:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Si la responsabilidad proviene de dolo o está expresamente excluida del contrato de seguro.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Si el asegurado afronta el proceso contra orden expresa del asegurador.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Si la condena por los perjuicios ocasionados a la víctima excede la suma que, conforme a los artículos pertinentes de este título, delimita la responsabilidad del asegurador, este sólo responderá por los gastos del proceso en proporción a la cuota que le corresponda en la indemnización.

        .tarjeta.color-primario--borde.p-4(titulo="Artículo 1129")
          .row
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
            
            .col-lg-10
              p Será nulo o de nulidad absoluta, el seguro de responsabilidad profesional cuando la profesión y su ejercicio no gocen de la tutela del estado o cuando, al momento de celebrarse el contrato, el asegurado no sea legalmente hábil para ejercer la profesión.

        .tarjeta.color-primario--borde.p-4(titulo="Artículo 1130")
          .row
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
            
            .col-lg-10
              p El seguro de responsabilidad profesional válidamente contratado terminará cuando el asegurado sea legalmente inhabilitado para el ejercicio de su profesión. 

        .tarjeta.color-primario--borde.p-4(titulo="Artículo 1131")
          .row
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
            
            .col-lg-10
              p Modificado por la Ley 45/90, art. 86. Configuración del siniestro en el seguro de responsabilidad civil. En el seguro de responsabilidad se entenderá ocurrido el siniestro en el momento en que acaezca el hecho externo imputable al asegurado, fecha a partir de la cual correrá la prescripción respecto de la víctima. Frente al asegurado ello ocurrirá desde cuando la víctima le formula la petición judicial o extrajudicial.

        .tarjeta.color-primario--borde.p-4(titulo="Artículo 1132")
          .row
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
            
            .col-lg-10
              p En caso de quiebra o concurso de acreedores del asegurado, el crédito del damnificado gozará del orden de prelación asignado a los créditos de primera clase, a continuación de los del fisco.

        .tarjeta.color-primario--borde.p-4(titulo="Artículo 1133")
          .row
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='')
            
            .col-lg-10
              p Modificado por la Ley 45/90, art. 87. Acción de los damnificados en el seguro de responsabilidad. En el seguro de responsabilidad civil los damnificados tienen acción directa contra el asegurador. Para acreditar su derecho ante el asegurador de acuerdo con el Artículo 1077, la víctima en ejercicio de la acción directa podrá en un solo proceso demostrar la responsabilidad del asegurado y demandar la indemnización del asegurador.

    .row.mb-5
      h4.mb-5 Seguro reaseguro
      p.mb-4 Finalmente, se hace referencia al seguro reaseguro presentado en los Artículos 1134, 1135 y 1136 de la Circular Externa 029 de 2014 de la Superintendencia Financiera.
      p A continuación, se presentan los artículos referentes al seguro reaseguro.

    .row.mb-5
      .col-lg-8.mb-4
        LineaTiempoD.color-secundario.mt-3
          .row(numero="1" titulo="Artículo 1134")
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img16.svg', alt='')
            .col-lg-10           
              p Modificado por la Ley 45/90, art. 88. Responsabilidad del reasegurador. En virtud del contrato de reaseguro el reasegurador contrae con el asegurador directo las mismas obligaciones que este ha contraído con el tomador o asegurado y comparte análoga suerte en el desarrollo del contrato de seguro, salvo que se compruebe la mala fe del asegurador, en cuyo caso el contrato de reaseguro no surtirá efecto alguno. La responsabilidad del reasegurador no cesará, en ningún caso, con anterioridad a los términos de prescripción de las acciones que se derivan del contrato de seguro.

          .row(numero="2" titulo="Artículo 1135")
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img16.svg', alt='')
            .col-lg-10           
              p El reaseguro no es un contrato a favor de terceros. El asegurado carece, en tal virtud, de acción directa contra el reasegurador, y este de obligaciones para con aquél.

          .row(numero="3" titulo="Artículo 1136")
            .col-6.col-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img16.svg', alt='')
            .col-lg-10           
              p Los preceptos de este título, salvo los de orden público y los que dicen relación a la esencia del contrato de seguro, sólo se aplicarán al contrato de reaseguro en defecto de estipulación contractual.

      
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img17.svg', alt='')        
      
    separador

    #t_2_2
    .titulo-segundo.color-acento-contenido.my-5(data-aos="fade-up-right")
      h2 2.2 Proceso de suscripción y políticas de riesgo

    .row.mb-5
      p.mb-4 Siguiendo con el desarrollo de estos abordajes, se presenta, a continuación, el proceso de inscripción y políticas que son importantes en el momento de realizar la inscripción según la Circular Externa 029 de 2014 de la Superintendencia Financiera, entidad que reglamenta el sector de las empresas aseguradoras.
      p A continuación, podrá conocer el procedimiento de inscripción en el registro de aseguradoras extranjeras denominado RAIMAT.

    .row.mb-5
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img18.svg', alt='')       

      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--hr")
          .row(titulo="Regla relativa a los sujetos legítimos para presentar la solicitud") 
            p La solicitud de registro de una compañía de seguros extranjera debe presentarse por escrito directamente a esta administración o por la entidad correspondiente o a través de un representante claramente autorizado junto con un documento legal emitido para tal efecto por el solicitante a registrar.

          .row(titulo="Contenido y forma de la solicitud de inscripción de entidades aseguradoras del exterior")
            p Para la inscripción de una entidad aseguradora del exterior en el RAIMAT, la solicitud debe estar acompañada de cierta información que podrá consultar siguiendo el desarrollo de este contenido.

          .row(titulo="Régimen de inscripción para los Miembros de Lloyd’s")
            p Para efectos de la inscripción de Lloyd's en el RAIMAT, se requiere que su Consejo de Administración presente solicitud escrita, acompañada de la siguiente información: 
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta1
                | En original o copia de un documento emitido por una de las calificadoras de riesgo mencionadas anteriormente, se certifica que la empresa cumple o supera una de las calificaciones descritas en este número. Este derecho no podrá corresponder a una fecha anterior a los 12 meses siguientes a la solicitud de registro. 
              li 
                i.fas.fa-angle-right.color-vineta1
                | Copia del documento que formaliza la cadena de seguridad. 
              li 
                i.fas.fa-angle-right.color-vineta1
                | Lista de filiales de Lloyd 's. Los sindicatos no requieren registro individual. Los documentos emitidos en inglés deberán ir acompañados de la correspondiente traducción oficial al español.

          .row(titulo="Negación de la solicitud de inscripción")
            p Atendiendo el propósito y la finalidad del RAIMAT, la SFC (Superintendencia Financiera de Colombia) podrá rechazar la solicitud de registro de una compañía de seguros extranjera cuya calidad e idoneidad resulten distorsionadas por el análisis de la información obtenida de la solicitud de registro u otras fuentes adicionales, teniendo en cuenta los fines y objetivos de RAIMAT. Con base en los procedimientos y normas aplicables para la evaluación de solicitudes, la autoridad de control decide si una compañía de seguros extranjera está registrada en RAIMAT. Este registro se otorga por tiempo indefinido, sin perjuicio de la facultad de la SFC de suspender o retirar dicho registro, siempre que se respeten y mantengan al día en cada caso.

    .bg4
      .row.mb-5
        .tarjeta.tarjeta--amarilla.p-4
          PasosB.color-primario
            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img19.svg', alt='')              
              
              .col-lg-7
                p El nombre de la compañía de seguros extranjera que solicita el registro, la dirección del representante, dirección postal, teléfono, fax y dirección de correo electrónico.

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img20.svg', alt='')              
              
              .col-lg-7
                p El nombre e identidad del representante legal de la compañía de seguros extranjera y del representante especial para recibir correspondencia en Colombia, y poder debidamente otorgado al efecto de conformidad con las normas vigentes.

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img21.svg', alt='')              
              
              .col-lg-7
                p Certificación expedida por la autoridad que supervisa a la entidad aseguradora del exterior en el país donde esta tiene su domicilio principal, en la cual se acredite su existencia, domicilio principal, representantes legales y en la que conste su capacidad para comercializar seguros asociados al transporte marítimo internacional, la aviación comercial internacional, el lanzamiento y transporte espacial (incluyendo satélites), que amparen los riesgos vinculados a las mercancías objeto de transporte, el vehículo que transporte las mercancías y la responsabilidad civil que pueda derivarse de los mismos, así como seguros que amparen mercancías en tránsito internacional. En dicha certificación también se deberá acreditar la existencia en ese país de normas relativas a la Prevención y Control del Lavado de Activos y Financiación del terrorismo (Anti-Money Laundering/Combating the Financing of Terrorism, AML/CFT), de obligatorio cumplimiento por parte de las entidades aseguradoras supervisadas

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img22.svg', alt='')              
              
              .col-lg-7
                p Una sucursal utilizada de acuerdo con los requisitos legales vigentes en Colombia, además de por lo menos el monto del capital suscrito y pagado requerido por la compañía de seguros para constituirse en Colombia, deberá demostrar la solvencia patrimonial del capital requerido para operar los estados financieros anuales auditados del último ejercicio económico de la compañía de seguros extranjera.

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img23.svg', alt='')              
              
              .col-lg-7
                p Original o copia de un documento emitido por una agencia evaluadora de riesgo que otorgue una calificación de solidez financiera internacional que cumpla con todos los requisitos señalados en este párrafo. Este requisito no se exige para las solicitudes de registro de compañías de seguros extranjeras cuya residencia principal se encuentre en uno de los países que tiene un tratado de libre comercio con Colombia que incluye un capítulo sobre servicios financieros, incluidas las transacciones transfronterizas de seguros.

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img24.svg', alt='')              
              
              .col-lg-7
                p Información sobre los seguros que se ofrecen en Colombia. Ejemplos: transporte marítimo internacional, aviación comercial internacional, lanzamiento y transporte espacial (incluidos los satélites). Cubre los riesgos asociados a las mercancías transportadas, los vehículos que las transportan y la responsabilidad civil que de ello se derive. También incluye un seguro que cubre la mercancía con envío internacional.

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img25.svg', alt='')              
              
              .col-lg-7
                p Nombre, país, domicilio principal, dirección y teléfono del corredor de seguros autorizado por la entidad para vender seguros relacionados con el transporte marítimo internacional, aviación comercial internacional, lanzamientos y transporte espacial (incluyendo satélites) en Colombia, fax y direcciones electrónicas son cubiertos. Seguro emitido por una compañía de seguros que cubre las mercancías transportadas, el vehículo que las transporta y los riesgos asociados a la responsabilidad civil que se puedan generar como consecuencia, así como las mercancías en tránsito internacional. Cada vez que una aseguradora extranjera registrada en RAIMAT aprueba un nuevo intermediario para ingresar al mercado en Colombia, el transporte marítimo internacional, la aviación comercial internacional, el transporte de lanzamiento y espacial que cubre bienes relacionados con los bienes transportados (incluidos los satélites), los vehículos que transportan bienes y la responsabilidad civil que de los mismos, y los seguros que cubran las mercancías en tránsito internacional se describen en este inciso, deberá proporcionar a esta autoridad reguladora la información de que disponga.

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img26.svg', alt='')              
              
              .col-lg-7
                p Para que los asegurados y/o beneficiarios de las pólizas de seguros que se ofrecen en el territorio de Colombia puedan presentar los siniestros que ocurran directamente ante las aseguradoras y las autoridades que las supervisan, deben conocer la información sobre los procedimientos y canales proporcionados por las aseguradoras extranjeras, por ejemplo, su residencia principal

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img27.svg', alt='')              
              
              .col-lg-7
                p Una declaración expresa de la empresa solicitante de que toda la información contenida en la solicitud de registro y los documentos que la acompañan es pública y que la divulgación de información por parte de la SFC está permitida para los efectos del RAIMAT.

            .row.justify-content-center(titulo="")
              .col-10.col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img28.svg', alt='')              
              
              .col-lg-7
                p Sin perjuicio de lo contenido en este número, la SFC considera necesario formar una base razonable para que las aseguradoras extranjeras obtengan pruebas suficientes al considerar las solicitudes de ciertas decisiones de registro, pudiendo solicitarse otra información y documentos. El formulario de solicitud y todos los documentos de respaldo deben presentarse en español. Si estos documentos se presentan en otro idioma, estos documentos deben ir acompañados de sus respectivas traducciones oficiales al español. Lo mismo es cierto para los elementos enumerados en la Sección 2.2.2. y 2.2.3. Debe realizar los trámites exigidos por la ley para la validez de los documentos emitidos en el extranjero, los cuales deben estar debidamente legalizados.




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
