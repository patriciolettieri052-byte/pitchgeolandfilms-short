export interface TranslationSchema {
  ui: {
    nav: string;
    page: string;
    of: string;
    totalSlides: string;
    close: string;
    cover: string;
    closing: string;
    content: string;
    orientationTitle: string;
    orientationSubtitle: string;
    logoSubtitle: string;
  };
  hud: {
    problem1: {
      overline: string;
      title: string;
      subtitle: string;
      card1Title: string;
      card1Desc: string;
      card1Footer: string;
      card2Title: string;
      card2Desc: string;
      card2Footer: string;
      card3Title: string;
      card3Desc: string;
      card3Footer: string;
    };
    problem2: {
      overline: string;
      title: string;
      subtitle: string;
      card1Title: string;
      card1Desc: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
      footer: string;
    };
    problem3: {
      overline: string;
      title: string;
      statTitle: string;
      statDesc: string;
      statFooter: string;
      variablesText: string;
      dispersedText: string;
      dispersedBold: string;
    };
    problem4: {
      overline: string;
      title: string;
      subtitle: string;
      case1Overline: string;
      case1Title: string;
      case1Desc: string;
      case1Cost: string;
      case1CostLabel: string;
      case1Footer: string;
      case2Overline: string;
      case2Title: string;
      case2Desc: string;
      case2Cost: string;
      case2CostLabel: string;
      case2Footer: string;
      case3Overline: string;
      case3Title: string;
      case3Desc: string;
      case3Cost: string;
      case3CostLabel: string;
      case3Footer: string;
      bannerText: string;
      bannerFooter: string;
    };
    problem5: {
      overline: string;
      title: string;
      subtitle: string;
      card1Val: string;
      card1Desc: string;
      card2Val: string;
      card2Desc: string;
      card3Val: string;
      card3Desc: string;
      card4Val: string;
      card4Desc: string;
      bannerText: string;
    };
    idea: {
      overline: string;
      title: string;
      subtitle: string;
      line1: string;
      line2: string;
      line3: string;
      line4Bold: string;
    };
    howItWorks: {
      overline: string;
      title: string;
      subtitle: string;
      step1Step: string;
      step1Title: string;
      step1Desc: string;
      step2Step: string;
      step2Title: string;
      step2Desc: string;
      step3Step: string;
      step3Title: string;
      step3Desc: string;
      step4Step: string;
      step4Title: string;
      step4Desc: string;
      step5Step: string;
      step5Title: string;
      step5Desc: string;
    };
    diagramaFuentes: {
      overline: string;
      title: string;
      subtitle: string;
      sourcesTitle: string;
      source1Title: string;
      source1Desc: string;
      source2Title: string;
      source2Desc: string;
      source3Title: string;
      source3Desc: string;
      centerTitle: string;
      centerSub: string;
      outputTitle: string;
      output1Title: string;
      output1Desc: string;
      output2Title: string;
      output2Desc: string;
    };
    caseStudy: {
      overline: string;
      title: string;
      subtitle: string;
      challengeBadge: string;
      challengeTitle: string;
      challengeAgency: string;
      scenesLabel: string;
      scenesVal: string;
      shootLabel: string;
      shootVal: string;
      budgetLabel: string;
      budgetVal: string;
      challengeDesc: string;
      analysisBadge: string;
      analysisTitle: string;
      strengthsHeader: string;
      strengthsDesc: string;
      risksHeader: string;
      risksDesc: string;
      resultBadge: string;
      resultTitle: string;
      quote: string;
      check: string;
    };
    validation: {
      overline: string;
      title: string;
      subtitle: string;
      c1Val: string;
      c1Label: string;
      c1Desc: string;
      c2Val: string;
      c2Label: string;
      c2Desc: string;
      c3Val: string;
      c3Label: string;
      c3Desc: string;
      c4Val: string;
      c4Label: string;
      c4Desc: string;
      c5Val: string;
      c5Label: string;
      c5Desc: string;
      c6Val: string;
      c6Label: string;
      c6Desc: string;
    };
    whyNow: {
      c1Title: string;
      c1Desc: string;
      c2Title: string;
      c2Desc: string;
      c3Title: string;
      c3Desc: string;
      c4Title: string;
      c4Desc: string;
      bannerBold: string;
      bannerLight: string;
    };
    defensibility: {
      card1Title: string;
      card1Desc: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
      card4Title: string;
      card4Desc: string;
      banner: string;
    };
    financial: {
      overline: string;
      title: string;
      subtitle: string;
      withLabel: string;
      runwayLabel: string;
      runwayVal: string;
      payingClientsLabel: string;
      fiveYearTitle: string;
      clientsLabel: string;
      annualArpaLabel: string;
      projectedArrLabel: string;
      yearPrefix: string;
      y1Note: string;
      y2Note: string;
      y3Note: string;
      y4Note: string;
      y5Note: string;
    };
    round: {
      overline: string;
      title: string;
      targetLabel: string;
      useOfFundsTitle: string;
      fund1Label: string;
      fund1Pct: string;
      fund2Label: string;
      fund2Pct: string;
      fund3Label: string;
      fund3Pct: string;
      fund4Label: string;
      fund4Pct: string;
      milestoneTitle: string;
      milestone1: string;
      milestone2: string;
      milestone3: string;
    };
    goToMarket: {
      overline: string;
      title: string;
      phase1Title: string;
      phase1Sub: string;
      phase1Desc: string;
      phase2Title: string;
      phase2Sub: string;
      phase2Desc: string;
      phase3Title: string;
      phase3Sub: string;
      phase3Desc: string;
    };
    unitEconomics: {
      overline: string;
      title: string;
      tier1Title: string;
      tier1Price: string;
      tier1Desc: string;
      tier2Title: string;
      tier2Price: string;
      tier2Desc: string;
      tier3Title: string;
      tier3Price: string;
      tier3Desc: string;
      marginLabel: string;
      marginValue: string;
    };
    financialRoadmap: {
      overline: string;
      title: string;
      year1Title: string;
      year1Rev: string;
      year1Desc: string;
      year2Title: string;
      year2Rev: string;
      year2Desc: string;
      year3Title: string;
      year3Rev: string;
      year3Desc: string;
    };
    skinInTheGame: {
      overline: string;
      title: string;
      card1Title: string;
      card1Desc: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
    };
    competition: {
      overline: string;
      title: string;
      featureCol: string;
      comp1Col: string;
      comp2Col: string;
      geolandCol: string;
    };
    scalability: {
      overline: string;
      title: string;
      level1Title: string;
      level1Desc: string;
      level2Title: string;
      level2Desc: string;
      level3Title: string;
      level3Desc: string;
    };
    advisors: {
      overline: string;
      title: string;
      teamTitle: string;
    };
    visionCards: {
      overline: string;
      title: string;
    };
    diagramaExpansion: {
      overline: string;
      title: string;
    };
    pricing: {
      overline: string;
      title: string;
      text: string;
      t1Title: string;
      t1Price: string;
      t1Period: string;
      t1TargetLabel: string;
      t1TargetVal: string;
      t1TargetDesc: string;
      t1FeaturesLabel: string;
      t1F1: string;
      t1F2: string;
      t1F3: string;
      t1F4: string;
      t2Title: string;
      t2Price: string;
      t2Period: string;
      t2Yearly: string;
      t2TargetLabel: string;
      t2TargetVal: string;
      t2TargetDesc: string;
      t2FeaturesLabel: string;
      t2F1: string;
      t2F2: string;
      t2F3: string;
      t2F4: string;
      t3Title: string;
      t3Price: string;
      t3Period: string;
      t3Yearly: string;
      t3TargetLabel: string;
      t3TargetVal: string;
      t3TargetDesc: string;
      t3FeaturesLabel: string;
      t3F1: string;
      t3F2: string;
      t3F3: string;
      t3F4: string;
    };
  };
}

export const translations: Record<'es' | 'en', TranslationSchema> = {
  es: {
    ui: {
      nav: 'Navegación',
      page: 'Página',
      of: 'de',
      totalSlides: 'Slides Totales',
      close: 'Cerrar',
      cover: 'PORTADA',
      closing: 'CIERRE',
      content: 'CONTENIDO',
      orientationTitle: 'Por favor, gira tu dispositivo',
      orientationSubtitle: 'La presentación está diseñada exclusivamente para formato horizontal.',
      logoSubtitle: 'DECISION SYSTEM FOR FILM PRODUCTION',
    },
    hud: {
      problem1: {
        overline: 'EL PROBLEMA',
        title: 'Una locación no es solo filmar.',
        subtitle: 'Son permisos, accesos, tráfico, parking, seguridad, ruido y cientos de variables más. Una sola variable no detectada compromete toda la producción — y un error de locación puede costar cientos de miles de euros.',
        card1Title: 'USD 670K–1.3M',
        card1Desc: 'por día de rodaje en locación, en producciones profesionales.',
        card1Footer: 'Fuente: Motion Picture Association',
        card2Title: '+USD 300K/día',
        card2Desc: 'de gasto local promedio en producciones de alto presupuesto.',
        card2Footer: 'Fuente: Olsberg SPI / MPA',
        card3Title: 'Decenas de variables',
        card3Desc: 'permisos, accesos, tráfico, parking, generadores, seguridad, ruido y comunidad.',
        card3Footer: "Fuente: NYC Mayor's Office of Media & Entertainment",
      },
      problem2: {
        overline: 'EL PROBLEMA',
        title: 'Una sola variable no detectada compromete toda la producción.',
        subtitle: 'La locación puede ser visualmente perfecta — y aun así, un solo detalle fuera de plano puede parar el rodaje:',
        card1Title: 'Una obra al lado del set',
        card1Desc: 'Martillos, taladros y vibraciones contaminan el sonido directo — aunque la locación sea perfecta, la escena no puede rodarse.',
        card2Title: 'Un festival a metros del rodaje',
        card2Desc: 'Accesos bloqueados, tráfico cortado y seguridad alterada. La producción queda detenida mientras el presupuesto sigue corriendo.',
        card3Title: 'Una ruta aérea sobre una escena de época',
        card3Desc: 'Cada pocos minutos cruza un avión. La imagen no funciona, el sonido tampoco.',
        footer: 'No son casos hipotéticos: The Revenant se quedó sin nieve en Canadá y tuvo que trasladar el rodaje a Patagonia — un imprevisto de ~USD 10M por elegir mal la locación.',
      },
      problem3: {
        overline: 'EL PROBLEMA',
        title: 'EL HUMANO NO PUEDE ANALIZAR TANTAS VARIABLES FRAGMENTADAS.',
        statTitle: '1 DE CADA 7',
        statDesc: 'permisos de rodaje en locación genera una incidencia formal.',
        statFooter: 'Fuente: Los Angeles County / FilmLA FY 2021–2022. 399 concerns sobre 2.741 permisos.',
        variablesText: 'Ruido. Parking. Tráfico.\nVecinos. Permisos. Seguridad.\nAccesos. Horarios. Clima.\nObras. Restricciones locales.',
        dispersedText: 'Hoy todo eso vive disperso entre',
        dispersedBold: 'llamadas, emails, scouts, Excel, Google Maps, experiencia e intuición.',
      },
      problem4: {
        overline: 'REFERENCIAS EXTERNAS',
        title: 'Cuando una locación falla, falla toda la producción.',
        subtitle: 'Casos históricos documentados. No son casos realizados con GEOLAND.',
        case1Overline: 'THE REVENANT',
        case1Title: 'La nieve desapareció.',
        case1Desc: 'La producción necesitaba nieve real. Al fallar las condiciones en Canadá, parte del rodaje tuvo que moverse a Patagonia.',
        case1Cost: 'USD 10M extra',
        case1CostLabel: 'por 6 días no planificados de rodaje.',
        case1Footer: 'Fuente: TheWrap / Vanity Fair',
        case2Overline: 'MAD MAX: FURY ROAD',
        case2Title: 'El desierto dejó de ser desierto.',
        case2Desc: 'Broken Hill estaba preparada como locación, pero lluvias inusuales cambiaron el paisaje. El rodaje se movió a Namibia.',
        case2Cost: 'USD 1.3M',
        case2CostLabel: 'en infraestructura preparada que quedó varada.',
        case2Footer: 'Fuente: NFSA / ABC Australia',
        case3Overline: 'MIDNIGHT RIDER',
        case3Title: 'El permiso no existía.',
        case3Desc: 'La producción filmó en una infraestructura ferroviaria activa sin autorización. El proyecto quedó cancelado.',
        case3Cost: 'USD 11.2M',
        case3CostLabel: 'en exposición legal tras una locación operativamente inviable.',
        case3Footer: 'Fuente: NTSB / Variety',
        bannerText: 'Una locación puede fallar por clima, cambio visual del entorno o falta de control operativo.',
        bannerFooter: 'Fuentes: TheWrap, Vanity Fair, NFSA, ABC Australia, NTSB, Variety.',
      },
      problem5: {
        overline: 'EL PROBLEMA',
        title: 'La industria no tiene un sistema global de decisión.',
        subtitle: 'Tiene imágenes, bases dispersas, scouts, intuición, contactos y mucha fricción. Y el problema crece con la escala del mercado:',
        card1Val: 'USD 360B',
        card1Desc: 'mercado global anual de producción audiovisual',
        card2Val: '+300K',
        card2Desc: 'productoras activas en el mundo',
        card3Val: '+9,500',
        card3Desc: 'películas al año, sin contar series, publicidad y streaming',
        card4Val: 'Millones',
        card4Desc: 'de decisiones de locación y operación cada año',
        bannerText: 'Hoy, encontrar una locación puede tomar semanas o meses de scouts, referencias visuales y análisis manual — y ninguna herramienta actual organiza la decisión operacional completa.',
      },
      idea: {
        overline: 'LA IDEA',
        title: 'GEOLAND',
        subtitle: 'Un sistema de inteligencia de decisión que combina la comprensión contextual de la IA con el rigor de un software de precisión, para encontrar la mejor locación para cada escena — cruzando lo que la producción busca visualmente con lo que realmente necesita para rodar: permisos, costes, logística, clima, luz e infraestructura.',
        line1: 'No es un portal.',
        line2: 'No es un dashboard.',
        line3: 'No es una herramienta de búsqueda.',
        line4Bold: 'Es el sistema que conecta cada dato con cada decisión de producción.',
      },
      howItWorks: {
        overline: 'WORKFLOW',
        title: 'CÓMO FUNCIONA',
        subtitle: 'De una escena a una locación lista para rodar.',
        step1Step: '1. INPUT',
        step1Title: 'Describir Escena',
        step1Desc: 'A través de lenguaje simple o incluso subiendo un guion técnico o mood board.',
        step2Step: '2. ENGINE',
        step2Title: 'PSV Vector',
        step2Desc: 'La IA traduce la necesidad en un perfil comparable de viabilidad y riesgo.',
        step3Step: '3. MATCH',
        step3Title: 'Locaciones Rankeadas',
        step3Desc: 'Cards con G-Score, alineadas a las prioridades reales de producción.',
        step4Step: '4. ANALYZE',
        step4Title: 'Dashboard Profundo',
        step4Desc: 'Costes, permisos, riesgos y próximos pasos por locación.',
        step5Step: '5. EXECUTE',
        step5Title: 'Activación',
        step5Desc: 'Contacto directo con scouts y location managers verificados.',
      },
      diagramaFuentes: {
        overline: 'ARQUITECTURA DE DATOS',
        title: 'Fuentes de Datos del Sistema',
        subtitle: 'Integración continua de datos heterogéneos en tiempo real.',
        sourcesTitle: 'DATOS DE ENTRADA',
        source1Title: 'Cartografía y Satélite',
        source1Desc: 'Modelos 3D, elevación, insolación y coberturas.',
        source2Title: 'Bases Normativas',
        source2Desc: 'Permisos municipales, restricciones acústicas y ambientales.',
        source3Title: 'Histórico Operativo',
        source3Desc: 'Datos reales de producciones anteriores e incidencias.',
        centerTitle: 'MOTOR GEOLAND',
        centerSub: 'Procesamiento e IA',
        outputTitle: 'PRODUCTOS DE SALIDA',
        output1Title: 'Reporte de Viabilidad',
        output1Desc: 'Diagnóstico preventivo de riesgos.',
        output2Title: 'Ficha de Locación',
        output2Desc: 'Plan logístico completo.',
      },
      caseStudy: {
        overline: 'PRUEBA REAL',
        title: 'Uno de nuestros casos',
        subtitle: 'Caso Real - Activación en Barcelona',
        challengeBadge: 'EL RETO',
        challengeTitle: 'Campaña ASCER',
        challengeAgency: 'Weber Shandwick Europe',
        scenesLabel: 'Escenas',
        scenesVal: '+10',
        shootLabel: 'Rodaje',
        shootVal: '2 Días',
        budgetLabel: 'Presupuesto',
        budgetVal: '200K',
        challengeDesc: '+10 scenes con estética europea y cerámicas específicas, sin rodar en varios países. Todo concentrado en Barcelona.',
        analysisBadge: 'ANÁLISIS',
        analysisTitle: 'Fortalezas & Riesgos',
        strengthsHeader: 'Fortalezas',
        strengthsDesc: 'Variedad visual dentro del hub, reducción de traslados, control de costes y equipo local disponible.',
        risksHeader: 'Riesgos Operativos',
        risksDesc: 'Disponibilidad limitada de locaciones con cerámicas específicas, permisos y ruido urbano.',
        resultBadge: 'RESULTADO',
        resultTitle: 'Conclusión',
        quote: '"GEOLAND convirtió una búsqueda urgente y compleja en una selección accionable de locaciones - concentrando la producción en un único hub y haciendo viable el rodaje en los 2 días previstos."',
        check: '✓ Producción viable en el plazo previsto.',
      },
      validation: {
        overline: 'BETA NETWORK',
        title: 'VALIDACIÓN INICIAL',
        subtitle: 'Módulo de pruebas operativas privadas con productoras asociadas de mercados seleccionados.',
        c1Val: '6',
        c1Label: 'MESES',
        c1Desc: 'Probando el sistema en entornos reales.',
        c2Val: 'ESPAÑA',
        c2Label: 'TOTAL PAÍS',
        c2Desc: 'Cobertura de locaciones en todo el territorio.',
        c3Val: '11',
        c3Label: 'PRODUCTORAS ACTIVAS',
        c3Desc: 'Testeando y nutriendo el sistema.',
        c4Val: '+620',
        c4Label: 'PROCESOS',
        c4Desc: 'Análisis y búsquedas operativas completadas.',
        c5Val: '8/11',
        c5Label: 'USO RECURRENTE',
        c5Desc: 'Productoras con uso constante de la herramienta.',
        c6Val: '60%',
        c6Label: 'PARA PRESUPUESTOS',
        c6Desc: 'El sistema ya está integrado en decisiones financieras reales, no solo en búsquedas exploratorias.',
      },
      whyNow: {
        c1Title: '1. más producción',
        c1Desc: 'netflix, amazon, disney, hbo, apple y marcas producen más contenido en más países. más proyectos, más presión.',
        c2Title: '2. más datos fragmentados',
        c2Desc: 'permisos, clima, tráfico, ruido, incentivos, seguridad, accesos, disponibilidad y más. dispersos entre decenas de fuentes y herramientas.',
        c3Title: '3. mejor tecnología',
        c3Desc: 'llms, datos geoespaciales, apis climáticas y computer vision ya permiten cruzar variables creativas, operativas y de riesgo a escala global.',
        c4Title: '4. white space claro',
        c4Desc: 'las soluciones actuales son marketplaces, bases de datos o herramientas de planificación. no existe una capa global de decisión que conecte todo.',
        bannerBold: 'la industria produce más rápido que su capacidad para decidir bien dónde rodar.',
        bannerLight: 'geoland conecta datos, contexto y operación para transformar la incertidumbre en decisiones claras.',
      },
      defensibility: {
        card1Title: 'Memoria operacional',
        card1Desc: 'Qué funcionó, qué falló, qué permisos fueron difíciles y qué costes aparecieron tarde.',
        card2Title: 'Dataset de riesgo por ciudad',
        card2Desc: 'Ruido, accesos, tráfico, horarios, ventanas, restricciones y fricción local.',
        card3Title: 'Red verificada',
        card3Desc: 'Scouts, fixers y location managers evaluados por desempeño real.',
        card4Title: 'Switching cost',
        card4Desc: 'La productora acumula contexto operativo propio dentro de GEOLAND. Cambiar implica perder memoria.',
        banner: 'Cada producción genera datos que no existen en bases públicas: decisiones, fricciones, costes reales y desempeño local.',
      },
      financial: {
        overline: 'PROYECCIONES',
        title: 'ROADMAP FINANCIERO',
        subtitle: 'De hoy al crecimiento sostenible.',
        withLabel: 'Con',
        runwayLabel: 'Runway',
        runwayVal: '12 Meses',
        payingClientsLabel: 'Clientes Pagando',
        fiveYearTitle: 'Proyecciones a 5 Años',
        clientsLabel: 'Clientes',
        annualArpaLabel: 'ARPA Anual',
        projectedArrLabel: 'ARR Proyectado',
        yearPrefix: 'AÑO',
        y1Note: 'Principalmente On-Demand',
        y2Note: 'On-Demand + primeros Hub',
        y3Note: 'Hub gana peso + primeros Enterprise',
        y4Note: 'Hub + Enterprise',
        y5Note: 'Hub consolidado + Enterprise',
      },
      round: {
        overline: 'OPORTUNIDAD DE INVERSIÓN',
        title: 'La Ronda de Inversión',
        targetLabel: 'OBJETIVO DE LA RONDA:',
        useOfFundsTitle: 'Uso de Fondos',
        fund1Label: 'Desarrollo de Producto & IA',
        fund1Pct: '45%',
        fund2Label: 'Expansión Comercial & Ventas',
        fund2Pct: '30%',
        fund3Label: 'Adquisición de Datos & Cobertura',
        fund3Pct: '15%',
        fund4Label: 'Operaciones & Legal',
        fund4Pct: '10%',
        milestoneTitle: 'Hitos a 18 Meses',
        milestone1: 'Alcanzar EUR 1.5M ARR con 150+ producciones activas.',
        milestone2: 'Cobertura completa en España, Portugal y Reino Unido.',
        milestone3: 'Integración con los principales softwares de preproducción.',
      },
      goToMarket: {
        overline: 'ESTRATEGIA',
        title: 'Estrategia Go-To-Market',
        phase1Title: 'FASE 1: CONSOLIDACIÓN',
        phase1Sub: 'España y Portugal',
        phase1Desc: 'Enfoque directo en productoras de ficción y publicidad consolidadas.',
        phase2Title: 'FASE 2: EXPANSIÓN EUROPEA',
        phase2Sub: 'UK, Francia e Italia',
        phase2Desc: 'Alianzas estratégicas con Film Commissions y asociaciones del sector.',
        phase3Title: 'FASE 3: ESCALA GLOBAL',
        phase3Sub: 'LatAm & US Hubs',
        phase3Desc: 'Desembarco en hubs clave de producción audiovisual en América.',
      },
      unitEconomics: {
        overline: 'MODELO DE NEGOCIO',
        title: 'Unit Economics',
        tier1Title: 'STARTER',
        tier1Price: 'EUR 490/mes',
        tier1Desc: 'Hasta 3 producciones simultáneas y scoring básico.',
        tier2Title: 'PRO',
        tier2Price: 'EUR 1.200/mes',
        tier2Desc: 'Producciones ilimitadas, alertas en tiempo real y soporte 24/7.',
        tier3Title: 'ENTERPRISE',
        tier3Price: 'Custom',
        tier3Desc: 'API dedicada, integración custom e informes a medida.',
        marginLabel: 'Margen de Contribución:',
        marginValue: '85%',
      },
      financialRoadmap: {
        overline: 'HOJA DE RUTA',
        title: 'Roadmap de Crecimiento Financiero',
        year1Title: 'AÑO 1',
        year1Rev: 'EUR 600K',
        year1Desc: 'Validación en mercado local y 50 productoras activas.',
        year2Title: 'AÑO 2',
        year2Rev: 'EUR 2.1M',
        year2Desc: 'Expansión a 3 países clave europeos.',
        year3Title: 'AÑO 3',
        year3Rev: 'EUR 5.8M',
        year3Desc: 'Liderazgo en Europa y apertura de mercado americano.',
      },
      skinInTheGame: {
        overline: 'EQUIPO',
        title: 'Skin in the Game',
        card1Title: 'Inversión Propia',
        card1Desc: 'El equipo fundador ha invertido capital propio para validar el producto inicial.',
        card2Title: 'Dedicación 100%',
        card2Desc: 'Equipo dedicado a tiempo completo en el proyecto con visión a largo plazo.',
        card3Title: 'Track Record',
        card3Desc: 'Experiencia previa demostrada en producción audiovisual y software SaaS.',
      },
      competition: {
        overline: 'PANORAMA COMPETITIVO',
        title: 'Matriz Comparativa',
        featureCol: 'CARACTERÍSTICA',
        comp1Col: 'Métodos Tradicionales',
        comp2Col: 'Software Genérico',
        geolandCol: 'GEOLAND',
      },
      scalability: {
        overline: 'ESCALABILIDAD',
        title: 'Arquitectura Escalable',
        level1Title: 'Local Hub',
        level1Desc: 'Captura y validación de datos a nivel ciudad.',
        level2Title: 'Regional Engine',
        level2Desc: 'Procesamiento cruzado y expansión nacional.',
        level3Title: 'Global Network',
        level3Desc: 'Red global de inteligencia de locaciones en tiempo real.',
      },
      advisors: {
        overline: 'EQUIPO Y ADVISORS',
        title: 'Experiencia de la Industria y Tecnología',
        teamTitle: 'CO-FOUNDERS & LIDERAZGO',
      },
      visionCards: {
        overline: 'VISIÓN DE FUTURO',
        title: 'Reinventando la Logística Audiovisual',
      },
      diagramaExpansion: {
        overline: 'EXPANSIÓN GEOGRÁFICA',
        title: 'Plan de Escalado de Mercados',
      },
      pricing: {
        overline: 'MODELO DE NEGOCIO',
        title: 'MONETIZACIÓN',
        text: 'Suscripciones y On-Demand diseñados para el flujo de trabajo real.',
        t1Title: '1. ON-DEMAND',
        t1Price: '€349',
        t1Period: '/ PROYECTO',
        t1TargetLabel: 'PARA QUIÉNES SON:',
        t1TargetVal: 'SCOUTS & PRODUCTORAS INDEPENDIENTES',
        t1TargetDesc: 'Ideal para validación inicial y proyectos puntuales sin costos fijos.',
        t1FeaturesLabel: 'CARACTERÍSTICAS CLAVE:',
        t1F1: 'G-Score por escena y locación',
        t1F2: 'Carga e interpretación básica de guion',
        t1F3: 'Filtro inicial de permisos',
        t1F4: 'Exportación de reporte PDF',
        t2Title: '2. PRODUCTION HUB',
        t2Price: '€899',
        t2Period: '/ MES',
        t2Yearly: '€8.999 / AÑO',
        t2TargetLabel: 'PARA QUIÉNES SON:',
        t2TargetVal: 'PRODUCTORAS MEDIANAS & AGENCIAS',
        t2TargetDesc: 'Escalabilidad continua, multiusuario y optimización de recursos recurrentes.',
        t2FeaturesLabel: 'CARACTERÍSTICAS CLAVE:',
        t2F1: '3 proyectos activos en simultáneo',
        t2F2: 'Análisis multi-escena y multi-locación',
        t2F3: 'Production Board + memoria operacional',
        t2F4: 'Soporte prioritario',
        t3Title: '3. ENTERPRISE',
        t3Price: '€3K - €15K+',
        t3Period: '/ MES',
        t3Yearly: '€30.000 - €150.000 / AÑO',
        t3TargetLabel: 'PARA QUIÉNES SON:',
        t3TargetVal: 'GRANDES PRODUCTORAS & STUDIOS',
        t3TargetDesc: 'Soluciones a gran escala, automatización y máxima gobernanza de datos.',
        t3FeaturesLabel: 'CARACTERÍSTICAS CLAVE:',
        t3F1: 'Volumen ilimitado de proyectos',
        t3F2: 'Data layer dedicado',
        t3F3: 'Memoria operacional privada',
        t3F4: 'SSO, auditoría, API e integraciones',
      },
    },
  },
  en: {
    ui: {
      nav: 'Navigation',
      page: 'Page',
      of: 'of',
      totalSlides: 'Total Slides',
      close: 'Close',
      cover: 'COVER',
      closing: 'CLOSING',
      content: 'CONTENT',
      orientationTitle: 'Please rotate your device',
      orientationSubtitle: 'The presentation is exclusively designed for landscape orientation.',
      logoSubtitle: 'DECISION SYSTEM FOR FILM PRODUCTION',
    },
    hud: {
      problem1: {
        overline: 'THE PROBLEM',
        title: 'A location is not just about filming.',
        subtitle: 'It involves permits, access points, traffic, parking, security, noise, and hundreds of other variables. A single undetected factor compromises the entire production — and a location mistake can cost hundreds of thousands of euros.',
        card1Title: 'USD 670K–1.3M',
        card1Desc: 'per day of on-location shooting for professional productions.',
        card1Footer: 'Source: Motion Picture Association',
        card2Title: '+USD 300K/day',
        card2Desc: 'average local spend in high-budget feature film productions.',
        card2Footer: 'Source: Olsberg SPI / MPA',
        card3Title: 'Dozens of variables',
        card3Desc: 'permits, access, traffic, parking, generators, security, noise, and community.',
        card3Footer: "Source: NYC Mayor's Office of Media & Entertainment",
      },
      problem2: {
        overline: 'THE PROBLEM',
        title: 'A single undetected variable compromises the entire production.',
        subtitle: 'The location might be visually flawless — yet a single off-camera detail can halt the shoot:',
        card1Title: 'Construction next to the set',
        card1Desc: 'Hammers, drills, and vibrations ruin live audio recording — even if the location looks perfect, the scene cannot be shot.',
        card2Title: 'A festival meters away',
        card2Desc: 'Blocked access roads, diverted traffic, and tight security. Production grinds to a halt while costs keep accumulating.',
        card3Title: 'A flight path over a period film',
        card3Desc: 'Planes cross overhead every few minutes. Neither the visual continuity nor the audio works.',
        footer: 'These are not hypothetical cases: The Revenant ran out of snow in Canada and had to relocate production to Patagonia — a ~$10M unexpected expense due to location selection.',
      },
      problem3: {
        overline: 'THE PROBLEM',
        title: 'HUMANS CANNOT PROCESS SO MANY FRAGMENTED VARIABLES.',
        statTitle: '1 IN EVERY 7',
        statDesc: 'location filming permits encounters a formal incident.',
        statFooter: 'Source: Los Angeles County / FilmLA FY 2021–2022. 399 concerns across 2,741 permits.',
        variablesText: 'Noise. Parking. Traffic.\nNeighbors. Permits. Security.\nAccess. Schedules. Weather.\nConstruction. Local restrictions.',
        dispersedText: 'Today all of this lives scattered across',
        dispersedBold: 'phone calls, emails, scouts, Excel spreadsheets, Google Maps, gut feel, and intuition.',
      },
      problem4: {
        overline: 'EXTERNAL REFERENCES',
        title: 'When a location fails, the entire production fails.',
        subtitle: 'Documented historical cases. These projects were not conducted with GEOLAND.',
        case1Overline: 'THE REVENANT',
        case1Title: 'The snow vanished.',
        case1Desc: 'Real snow was required. When conditions broke down in Canada, shooting had to relocate to Patagonia.',
        case1Cost: 'USD 10M extra',
        case1CostLabel: 'for 6 unplanned days of principal photography.',
        case1Footer: 'Source: TheWrap / Vanity Fair',
        case2Overline: 'MAD MAX: FURY ROAD',
        case2Title: 'The desert stopped being a desert.',
        case2Desc: 'Broken Hill was prepped as the main set, but unexpected heavy rain turned it green. Production moved to Namibia.',
        case2Cost: 'USD 1.3M',
        case2CostLabel: 'in prepped infrastructure left stranded.',
        case2Footer: 'Source: NFSA / ABC Australia',
        case3Overline: 'MIDNIGHT RIDER',
        case3Title: 'The permit did not exist.',
        case3Desc: 'Filming took place on active railroad tracks without proper authorization. The project was shut down.',
        case3Cost: 'USD 11.2M',
        case3CostLabel: 'in legal exposure after an operationally unviable location.',
        case3Footer: 'Source: NTSB / Variety',
        bannerText: 'A location can fail due to weather, visual landscape changes, or lack of operational control.',
        bannerFooter: 'Sources: TheWrap, Vanity Fair, NFSA, ABC Australia, NTSB, Variety.',
      },
      problem5: {
        overline: 'THE PROBLEM',
        title: 'The industry lacks a global decision system.',
        subtitle: 'It has images, scattered databases, scouts, intuition, contacts, and massive friction. And the problem grows with market scale:',
        card1Val: 'USD 360B',
        card1Desc: 'annual global audiovisual production market',
        card2Val: '+300K',
        card2Desc: 'active production houses worldwide',
        card3Val: '+9,500',
        card3Desc: 'feature films per year, excluding series, ads, and streaming',
        card4Val: 'Millions',
        card4Desc: 'of location and operational decisions made every year',
        bannerText: 'Today, finding a location can take weeks or months of scouting, visual references, and manual analysis — and no current tool structures the complete operational decision.',
      },
      idea: {
        overline: 'THE IDEA',
        title: 'GEOLAND',
        subtitle: 'A decision intelligence system that combines AI contextual understanding with precision software rigor to find the best location for every scene — bridging what the production visually seeks with what it actually needs to shoot: permits, costs, logistics, weather, light, and infrastructure.',
        line1: 'It is not a portal.',
        line2: 'It is not a dashboard.',
        line3: 'It is not a search tool.',
        line4Bold: 'It is the system that connects every piece of data with every production decision.',
      },
      howItWorks: {
        overline: 'WORKFLOW',
        title: 'HOW IT WORKS',
        subtitle: 'From a scene description to a location ready to shoot.',
        step1Step: '1. INPUT',
        step1Title: 'Describe Scene',
        step1Desc: 'Through plain text or by uploading a technical script or mood board.',
        step2Step: '2. ENGINE',
        step2Title: 'PSV Vector',
        step2Desc: 'AI translates the need into a comparable viability and risk profile.',
        step3Step: '3. MATCH',
        step3Title: 'Ranked Locations',
        step3Desc: 'Cards with G-Score, matched to real production priorities.',
        step4Step: '4. ANALYZE',
        step4Title: 'Deep Dashboard',
        step4Desc: 'Costs, permits, risks, and next steps per location.',
        step5Step: '5. EXECUTE',
        step5Title: 'Activation',
        step5Desc: 'Direct connection with verified location scouts and managers.',
      },
      diagramaFuentes: {
        overline: 'DATA ARCHITECTURE',
        title: 'System Data Sources',
        subtitle: 'Continuous real-time integration of heterogeneous data feeds.',
        sourcesTitle: 'INPUT DATA',
        source1Title: 'Mapping & Satellite',
        source1Desc: '3D terrain models, elevation, solar exposure, and coverage maps.',
        source2Title: 'Regulatory Databases',
        source2Desc: 'Municipal filming permits, noise restrictions, and environmental codes.',
        source3Title: 'Operational History',
        source3Desc: 'Real data from past productions and logged logistical incidents.',
        centerTitle: 'GEOLAND ENGINE',
        centerSub: 'Processing & AI',
        outputTitle: 'OUTPUT PRODUCTS',
        output1Title: 'Viability Report',
        output1Desc: 'Preventive risk diagnosis.',
        output2Title: 'Location Dossier',
        output2Desc: 'Complete logistical masterplan.',
      },
      caseStudy: {
        overline: 'REAL PROOF',
        title: 'One of our case studies',
        subtitle: 'Real Case Study - Barcelona Activation',
        challengeBadge: 'THE CHALLENGE',
        challengeTitle: 'ASCER Campaign',
        challengeAgency: 'Weber Shandwick Europe',
        scenesLabel: 'Scenes',
        scenesVal: '+10',
        shootLabel: 'Shoot',
        shootVal: '2 Days',
        budgetLabel: 'Budget',
        budgetVal: '200K',
        challengeDesc: '+10 scenes with European aesthetics and specific tile ceramics, without shooting across multiple countries. All concentrated in Barcelona.',
        analysisBadge: 'ANALYSIS',
        analysisTitle: 'Strengths & Risks',
        strengthsHeader: 'Strengths',
        strengthsDesc: 'Visual variety within the hub, reduced travel, cost control, and available local crew.',
        risksHeader: 'Operational Risks',
        risksDesc: 'Limited availability of locations with specific tile ceramics, permits, and urban noise.',
        resultBadge: 'RESULT',
        resultTitle: 'Conclusion',
        quote: '"GEOLAND turned an urgent, complex search into an actionable selection of locations — concentrating production into a single hub and making the 2-day shoot viable."',
        check: '✓ Production viable within scheduled timeframe.',
      },
      validation: {
        overline: 'BETA NETWORK',
        title: 'INITIAL VALIDATION',
        subtitle: 'Private operational testing module with partner production companies in selected markets.',
        c1Val: '6',
        c1Label: 'MONTHS',
        c1Desc: 'Testing the system in real production environments.',
        c2Val: 'SPAIN',
        c2Label: 'FULL COVERAGE',
        c2Desc: 'Location coverage across the entire country.',
        c3Val: '11',
        c3Label: 'ACTIVE PRODUCTIONS',
        c3Desc: 'Testing and feeding data into the system.',
        c4Val: '+620',
        c4Label: 'PROCESSES',
        c4Desc: 'Completed operational analyses and location searches.',
        c5Val: '8/11',
        c5Label: 'RECURRING USE',
        c5Desc: 'Production companies using the tool on an ongoing basis.',
        c6Val: '60%',
        c6Label: 'FOR BUDGETING',
        c6Desc: 'The system is already integrated into real financial decisions, not just exploratory searches.',
      },
      whyNow: {
        c1Title: '1. more production',
        c1Desc: 'netflix, amazon, disney, hbo, apple, and brands produce more content across more countries. more projects, higher pressure.',
        c2Title: '2. more fragmented data',
        c2Desc: 'permits, weather, traffic, noise, incentives, security, access, availability, and more. scattered across dozens of sources and tools.',
        c3Title: '3. better technology',
        c3Desc: 'LLMs, geospatial data, weather APIs, and computer vision enable cross-analyzing creative, operational, and risk variables at scale.',
        c4Title: '4. clear white space',
        c4Desc: 'current solutions are marketplaces, databases, or scheduling tools. no global decision layer connects everything.',
        bannerBold: 'the industry produces faster than its ability to decide where to shoot.',
        bannerLight: 'geoland connects data, context, and operations to turn uncertainty into clear decisions.',
      },
      defensibility: {
        card1Title: 'Operational Memory',
        card1Desc: 'What worked, what failed, which permits were difficult, and what costs surfaced late.',
        card2Title: 'City Risk Dataset',
        card2Desc: 'Noise, access, traffic, schedules, time windows, restrictions, and local friction.',
        card3Title: 'Verified Network',
        card3Desc: 'Scouts, fixers, and location managers evaluated on real performance.',
        card4Title: 'Switching Cost',
        card4Desc: 'The production company builds its own operational context within GEOLAND. Switching means losing history.',
        banner: 'Every production generates data that does not exist in public databases: decisions, friction points, real costs, and local performance.',
      },
      financial: {
        overline: 'PROJECTIONS',
        title: 'FINANCIAL ROADMAP',
        subtitle: 'From today to sustainable growth.',
        withLabel: 'With',
        runwayLabel: 'Runway',
        runwayVal: '12 Months',
        payingClientsLabel: 'Paying Clients',
        fiveYearTitle: '5-Year Projections',
        clientsLabel: 'Clients',
        annualArpaLabel: 'Annual ARPA',
        projectedArrLabel: 'Projected ARR',
        yearPrefix: 'YEAR',
        y1Note: 'Mainly On-Demand',
        y2Note: 'On-Demand + early Hubs',
        y3Note: 'Hub grows + early Enterprise',
        y4Note: 'Hub + Enterprise',
        y5Note: 'Consolidated Hub + Enterprise',
      },
      round: {
        overline: 'INVESTMENT OPPORTUNITY',
        title: 'Investment Round',
        targetLabel: 'ROUND TARGET:',
        useOfFundsTitle: 'Use of Funds',
        fund1Label: 'Product & AI R&D',
        fund1Pct: '45%',
        fund2Label: 'Sales & Commercial Expansion',
        fund2Pct: '30%',
        fund3Label: 'Data Acquisition & Coverage',
        fund3Pct: '15%',
        fund4Label: 'Operations & Legal',
        fund4Pct: '10%',
        milestoneTitle: '18-Month Milestones',
        milestone1: 'Reach EUR 1.5M ARR with 150+ active productions.',
        milestone2: 'Full coverage across Spain, Portugal, and the UK.',
        milestone3: 'Native integration with top pre-production software.',
      },
      goToMarket: {
        overline: 'STRATEGY',
        title: 'Go-To-Market Strategy',
        phase1Title: 'PHASE 1: CONSOLIDATION',
        phase1Sub: 'Spain & Portugal',
        phase1Desc: 'Direct focus on established fiction and commercial production companies.',
        phase2Title: 'PHASE 2: EUROPEAN EXPANSION',
        phase2Sub: 'UK, France & Italy',
        phase2Desc: 'Strategic partnerships with Film Commissions and regional industry guilds.',
        phase3Title: 'PHASE 3: GLOBAL SCALE',
        phase3Sub: 'LatAm & US Hubs',
        phase3Desc: 'Entry into key production hubs across North and South America.',
      },
      unitEconomics: {
        overline: 'BUSINESS MODEL',
        title: 'Unit Economics',
        tier1Title: 'STARTER',
        tier1Price: 'EUR 490/mo',
        tier1Desc: 'Up to 3 concurrent productions with core viability scoring.',
        tier2Title: 'PRO',
        tier2Price: 'EUR 1,200/mo',
        tier2Desc: 'Unlimited productions, real-time risk alerts, and 24/7 priority support.',
        tier3Title: 'ENTERPRISE',
        tier3Price: 'Custom',
        tier3Desc: 'Dedicated API, custom database integrations, and tailored reports.',
        marginLabel: 'Contribution Margin:',
        marginValue: '85%',
      },
      financialRoadmap: {
        overline: 'ROADMAP',
        title: 'Financial Growth Roadmap',
        year1Title: 'YEAR 1',
        year1Rev: 'EUR 600K',
        year1Desc: 'Local market validation and 50 active production clients.',
        year2Title: 'AÑO 2',
        year2Rev: 'EUR 2.1M',
        year2Desc: 'Expansion across 3 key European film hubs.',
        year3Title: 'YEAR 3',
        year3Rev: 'EUR 5.8M',
        year3Desc: 'Leadership position in Europe and US market entry.',
      },
      skinInTheGame: {
        overline: 'TEAM',
        title: 'Skin in the Game',
        card1Title: 'Founder Capital',
        card1Desc: 'The founding team has invested personal capital to validate initial product development.',
        card2Title: '100% Commitment',
        card2Desc: 'Full-time dedicated team with long-term vision and commitment.',
        card3Title: 'Proven Track Record',
        card3Desc: 'Demonstrated experience across film production and SaaS software development.',
      },
      competition: {
        overline: 'COMPETITIVE LANDSCAPE',
        title: 'Comparison Matrix',
        featureCol: 'FEATURE',
        comp1Col: 'Traditional Methods',
        comp2Col: 'Generic Software',
        geolandCol: 'GEOLAND',
      },
      scalability: {
        overline: 'SCALABILITY',
        title: 'Scalable Architecture',
        level1Title: 'Local Hub',
        level1Desc: 'City-level data capture and validation.',
        level2Title: 'Regional Engine',
        level2Desc: 'Cross-processing and national expansion.',
        level3Title: 'Global Network',
        level3Desc: 'Global real-time location intelligence network.',
      },
      advisors: {
        overline: 'TEAM & ADVISORS',
        title: 'Industry Expertise & Technology',
        teamTitle: 'CO-FOUNDERS & LEADERSHIP',
      },
      visionCards: {
        overline: 'FUTURE VISION',
        title: 'Reinventing Screen Logistics',
      },
      diagramaExpansion: {
        overline: 'GEOGRAPHIC EXPANSION',
        title: 'Market Rollout Plan',
      },
      pricing: {
        overline: 'BUSINESS MODEL',
        title: 'MONETIZATION',
        text: 'Subscriptions and On-Demand plans designed for the real production workflow.',
        t1Title: '1. ON-DEMAND',
        t1Price: '€349',
        t1Period: '/ PROJECT',
        t1TargetLabel: 'WHO IS IT FOR:',
        t1TargetVal: 'SCOUTS & INDEPENDENT PRODUCERS',
        t1TargetDesc: 'Ideal for initial validation and one-off projects without fixed costs.',
        t1FeaturesLabel: 'KEY FEATURES:',
        t1F1: 'G-Score per scene and location',
        t1F2: 'Basic script upload and processing',
        t1F3: 'Initial permit filtering',
        t1F4: 'PDF report export',
        t2Title: '2. PRODUCTION HUB',
        t2Price: '€899',
        t2Period: '/ MONTH',
        t2Yearly: '€8,999 / YEAR',
        t2TargetLabel: 'WHO IS IT FOR:',
        t2TargetVal: 'MID-SIZED PRODUCERS & AGENCIES',
        t2TargetDesc: 'Continuous scalability, multi-user, and ongoing resource optimization.',
        t2FeaturesLabel: 'KEY FEATURES:',
        t2F1: '3 active projects concurrently',
        t2F2: 'Multi-scene and multi-location analysis',
        t2F3: 'Production Board + operational memory',
        t2F4: 'Priority support',
        t3Title: '3. ENTERPRISE',
        t3Price: '€3K - €15K+',
        t3Period: '/ MONTH',
        t3Yearly: '€30,000 - €150,000 / YEAR',
        t3TargetLabel: 'WHO IS IT FOR:',
        t3TargetVal: 'LARGE PRODUCERS & STUDIOS',
        t3TargetDesc: 'Large-scale solutions, automation, and full data governance.',
        t3FeaturesLabel: 'KEY FEATURES:',
        t3F1: 'Unlimited projects',
        t3F2: 'Dedicated data layer',
        t3F3: 'Private operational memory',
        t3F4: 'SSO, auditing, API, and integrations',
      },
    },
  },
};
