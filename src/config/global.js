export default {
  global: {
    componenteFormativo:
      'Marco normativo sector asegurador, conceptualización y clasificación de riesgos',
    descripcionCurso:
      'Las empresas aseguradoras desarrollan distintos modelos de negocios debido a las nuevas tecnologías en la comercialización y medios de pago. Por esto, han aparecido nuevos riesgos, enfoques y regulaciones que revelan estándares de información financiera, generando la necesidad de transformar las industrias colombianas, con el objetivo de adecuar las nuevas condiciones financieras a la regulación de los estándares normativos internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contexto del concepto de los seguros',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Administración del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normatividad del riesgo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proceso de suscripción y políticas de riesgo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguros',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Contexto del concepto de los seguros',
      referencia:
        'Consultorio Empresarial y Contable - Faceconomia. (2017, julio 3). <i>Tipos de seguros.</i> [Video]. Youtube ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0c6fRTB9_G4',
    },
    {
      tema: 'Seguros',
      referencia:
        'El Espectador. (2021, 20 de abril). ¿Qué es y para qué sirve el contrato de seguros? Tip legal El Espectador. [Video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=esPIXWbhqVc',
    },
    {
      tema: 'Contexto del concepto de los seguros',
      referencia: 'Código Civil Colombiano.',
      tipo: 'PDF',
      link: 'https://www.oas.org/dil/esp/codigo_civil_colombia.pdf',
    },
    {
      tema: 'Contexto del concepto de los seguros',
      referencia:
        'Código del comercio. Ley 45 de 1990. 18 de diciembre de 1990 (Colombia).',
      tipo: 'Código',
      link:
        'https://bogota.gov.co/sites/default/files/tys/2020/08/C%C3%B3digo-de-Comercio-Seguros1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Riesgo operativo',
      significado:
        'hace referencia a la posibilidad de que una entidad incurra en pérdidas originadas por errores humanos, fallas tecnológicas o de procesos, de infraestructura, o por factores externos.',
    },
    {
      termino: 'Sistemas de administración',
      significado:
        'riesgos que permiten a las compañías de seguros hacer una gestión efectiva de los riesgos inherentes a la actividad aseguradora.',
    },
    {
      termino: 'Seguro',
      significado:
        'jurídicamente, es una institución a través de la cual el asegurador, cobrando la prima del seguro, se obliga a pagar el capital o las otras prestaciones acordadas dentro de los límites establecidos en caso de un riesgo, y que hagan parte de lo pactado dentro de la cobertura del seguro. A su vez, este brinda protección contra pérdidas inevitables e inesperadas, tratando de corregir materialmente, en parte o en su totalidad, las consecuencias ocasionadas. Si bien el seguro no evita el riesgo, este indemnizará al asegurado por los daños causados, según lo establecido en el contrato.',
    },
    {
      termino: 'Seguro por cuenta ajena',
      significado:
        'su objeto principal es indemnizar los daños causados por la pérdida de los bienes asegurados.',
    },
    {
      termino: 'Seguros de daños',
      significado:
        'es el mismo seguro de responsabilidad civil; le corresponde poner a disposición de las personas las herramientas jurídicas necesarias para garantizar que las indemnizaciones sean entregadas a las víctimas.',
    },
    {
      termino: 'Seguros de personas',
      significado:
        'su fin es cubrir la vida y la integridad física de las personas.',
    },
    {
      termino: 'Seguros obligatorios',
      significado:
        'son establecidos por el estado, tales como seguros sociales, seguros de vida obligatorios, seguros colectivos para empleados del gobierno, seguros de responsabilidad civil obligatorios de automóviles, etc.',
    },
    {
      termino: 'Siniestro',
      significado:
        'es la realización del riesgo. Es decir, cuando sucede lo que se está amparando en la póliza y es motivo de indemnización, por ejemplo, un robo, un choque, una enfermedad o accidente, un incendio, etc.',
    },
    {
      termino: 'Subrogación',
      significado:
        'está asegurado contra la cesión de derechos similares contra un tercero hasta el monto de la indemnización pagada por el daño causado; es decir, el asegurador es responsable de las acciones que violen este derecho del asegurado. En este caso, el derecho a que el asegurado renuncie en favor del asegurado para tomar acción contra el tercero que causó el siniestro.',
    },
    {
      termino: 'Suma asegurada:',
      significado:
        'es el valor establecido en la póliza como la responsabilidad máxima que debe pagar la compañía de seguros en caso de pérdida o daño a los beneficiarios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Circular Externa 029 de 2014. (2014). Superintendencia Financiera de Colombia.',
      link: 'https://www.superfinanciera.gov.co/jsp/10083444',
    },
    {
      referencia: 'Secretaría Senado (2022). <i>Código de Comercio.</i> ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_civil_pr034.html',
    },
    {
      referencia:
        'Sentencia S-24-08-2009. (2009, 24 de agosto). Corte Suprema de Justicia. Sala de Casación Civil (William Naméz Vargas).',
      link:
        'https://cortesuprema.gov.co/corte/wp-content/uploads/2021/03/S-24-08-2009-1100131030382001-01054-01_.pdf',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (s.f). Información General- Aseguradoras e Intermediarios de Seguros.',
      link:
        'https://www.superfinanciera.gov.co/inicio/industrias-supervisadas/industria-aseguradora/informacion-general-aseguradoras-e-intermediarios-de-seguros-15491',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
