import type { Topic } from "@/lib/types";

export const humanGeographyTopic: Topic = {
  id: "human-geography",
  slug: "geografia-humana",
  title: {
    es: "Geografía humana",
    en: "Human Geography",
  },
  description: {
    es: "Regiones naturales, población, economía y organización política",
    en: "Natural regions, population, economy, and political organization",
  },
  icon: "Users",
  color: "amber",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  prerequisites: ["physical-geography"],
  order: 3,
  lessons: [
    // ── LESSON 1: Regiones naturales (Learn) ──
    {
      id: "natural-regions-learn",
      topicId: "human-geography",
      order: 1,
      title: {
        es: "Regiones naturales",
        en: "Natural Regions",
      },
      description: {
        es: "Biomas, biodiversidad y las regiones naturales del mundo y México",
        en: "Biomes, biodiversity, and natural regions of the world and Mexico",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "geo-hg-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es una región natural?",
            en: "What is a natural region?",
          },
          options: [
            {
              es: "Un área con clima, flora, fauna y suelo similares",
              en: "An area with similar climate, flora, fauna, and soil",
            },
            {
              es: "Solo una zona con el mismo idioma",
              en: "Just a zone with the same language",
            },
            {
              es: "Un país con fronteras definidas",
              en: "A country with defined borders",
            },
            {
              es: "Una zona urbana con edificios",
              en: "An urban zone with buildings",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "REGIÓN NATURAL: área con condiciones climáticas, flora, fauna y suelo homogéneos. Coincide con los BIOMAS del planeta.",
            en: "NATURAL REGION: area with homogeneous climate, flora, fauna, and soil conditions. Coincides with the planet's BIOMES.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-02",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las principales regiones naturales del mundo?",
            en: "What are the world's main natural regions?",
          },
          options: [
            {
              es: "Selva, bosque, desierto, pradera, tundra y taiga",
              en: "Jungle, forest, desert, prairie, tundra, and taiga",
            },
            {
              es: "Norte, sur, este y oeste",
              en: "North, south, east, and west",
            },
            {
              es: "Urbano, rural y suburbano",
              en: "Urban, rural, and suburban",
            },
            { es: "Asia, Europa y América", en: "Asia, Europe, and America" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Biomas principales: SELVA tropical, BOSQUE templado/boreal, DESIERTO, PRADERA/estepa, TUNDRA (polar), TAIGA (coníferas).",
            en: "Main biomes: Tropical JUNGLE, temperate/boreal FOREST, DESERT, PRAIRIE/steppe, TUNDRA (polar), TAIGA (conifers).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-03",
          type: "true-false",
          prompt: {
            es: "México es considerado un país megadiverso.",
            en: "Mexico is considered a megadiverse country.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. México es uno de los 17 países MEGADIVERSOS: 4° lugar mundial en biodiversidad. Tiene selvas, desiertos, bosques, arrecifes.",
            en: "TRUE. Mexico is one of 17 MEGADIVERSE countries: 4th worldwide in biodiversity. Has jungles, deserts, forests, reefs.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-04",
          type: "fill-blank",
          prompt: {
            es: "La región natural con mayor biodiversidad en el mundo es la _______ tropical.",
            en: "The natural region with the greatest biodiversity in the world is the tropical _______.",
          },
          correctAnswer: "selva",
          explanation: {
            es: "SELVA TROPICAL (o bosque lluvioso): mayor biodiversidad. En México: Selva Lacandona (Chiapas), Los Tuxtlas (Veracruz).",
            en: "TROPICAL JUNGLE (or rainforest): greatest biodiversity. In Mexico: Lacandon Jungle (Chiapas), Los Tuxtlas (Veracruz).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-05",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el desierto más grande de México?",
            en: "What is Mexico's largest desert?",
          },
          options: [
            { es: "Desierto de Chihuahua", en: "Chihuahuan Desert" },
            { es: "Desierto de Sonora", en: "Sonoran Desert" },
            { es: "Desierto du Sahara", en: "Sahara Desert" },
            { es: "Desierto de Atacama", en: "Atacama Desert" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "DESIERTO DE CHIHUAHUA: el más grande de México y segundo de Norteamérica. Abarca Chihuahua, Coahuila, Durango y partes de EUA.",
            en: "CHIHUAHUAN DESERT: largest in Mexico and second in North America. Spans Chihuahua, Coahuila, Durango, and parts of the US.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 2: Deterioro ambiental (Practice) ──
    {
      id: "environmental-deterioration-practice",
      topicId: "human-geography",
      order: 2,
      title: {
        es: "Deterioro ambiental",
        en: "Environmental Deterioration",
      },
      description: {
        es: "Contaminación, deforestación y cambio climático",
        en: "Pollution, deforestation, and climate change",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-hg-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son los principales tipos de contaminación ambiental?",
            en: "What are the main types of environmental pollution?",
          },
          options: [
            {
              es: "Del aire, agua, suelo y acústica",
              en: "Air, water, soil, and noise",
            },
            { es: "Solo del aire", en: "Air only" },
            { es: "Solo del agua", en: "Water only" },
            { es: "Solo del suelo", en: "Soil only" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Tipos: AIRE (gases, partículas), AGUA (residuos industriales), SUELO (fertilizantes, basura), ACÚSTICA (ruido excesivo).",
            en: "Types: AIR (gases, particles), WATER (industrial waste), SOIL (fertilizers, garbage), NOISE (excessive noise).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-07",
          type: "fill-blank",
          prompt: {
            es: "La eliminación de grandes áreas de bosque se conoce como _______.",
            en: "The elimination of large forest areas is known as _______.",
          },
          correctAnswer: "deforestación",
          explanation: {
            es: "DEFORESTACIÓN: tala masiva de bosques. Causas: agricultura, ganadería, urbanización. México pierde ~140,000 ha/año.",
            en: "DEFORESTATION: massive forest clearing. Causes: agriculture, ranching, urbanization. Mexico loses ~140,000 ha/year.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-08",
          type: "true-false",
          prompt: {
            es: "El efecto invernadero es un fenómeno natural necesario para la vida en la Tierra.",
            en: "The greenhouse effect is a natural phenomenon necessary for life on Earth.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. El efecto invernadero NATURAL mantiene la Tierra a ~15°C. El PROBLEMA es su INTENSIFICACIÓN por CO₂, metano (actividad humana).",
            en: "TRUE. The NATURAL greenhouse effect keeps Earth at ~15°C. The PROBLEM is its INTENSIFICATION from CO₂, methane (human activity).",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-09",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el principal gas de efecto invernadero producido por actividades humanas?",
            en: "What is the main greenhouse gas produced by human activities?",
          },
          options: [
            { es: "Dióxido de carbono (CO₂)", en: "Carbon dioxide (CO₂)" },
            { es: "Oxígeno (O₂)", en: "Oxygen (O₂)" },
            { es: "Nitrógeno (N₂)", en: "Nitrogen (N₂)" },
            { es: "Helio (He)", en: "Helium (He)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "CO₂: principal gas invernadero antropogénico. Fuentes: quema de combustibles fósiles, deforestación, industria.",
            en: "CO₂: main anthropogenic greenhouse gas. Sources: fossil fuel burning, deforestation, industry.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es el desarrollo sustentable?",
            en: "What is sustainable development?",
          },
          options: [
            {
              es: "Satisfacer necesidades actuales sin comprometer las de futuras generaciones",
              en: "Meeting current needs without compromising those of future generations",
            },
            {
              es: "Producir lo más posible sin importar el medio ambiente",
              en: "Producing as much as possible regardless of the environment",
            },
            {
              es: "No usar ningún recurso natural",
              en: "Not using any natural resources",
            },
            {
              es: "Solo construir edificios verdes",
              en: "Only building green buildings",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "DESARROLLO SUSTENTABLE (Informe Brundtland, 1987): equilibrio entre crecimiento económico, bienestar social y cuidado ambiental.",
            en: "SUSTAINABLE DEVELOPMENT (Brundtland Report, 1987): balance between economic growth, social welfare, and environmental care.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-11",
          type: "fill-blank",
          prompt: {
            es: "El acuerdo internacional para reducir emisiones de gases de efecto invernadero firmado en 2015 es el Acuerdo de _______.",
            en: "The international agreement to reduce greenhouse gas emissions signed in 2015 is the _______ Agreement.",
          },
          correctAnswer: "París",
          explanation: {
            es: "ACUERDO DE PARÍS (2015): 196 países se comprometen a limitar el calentamiento a 1.5-2°C. México ratificó el acuerdo.",
            en: "PARIS AGREEMENT (2015): 196 countries commit to limiting warming to 1.5-2°C. Mexico ratified the agreement.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-12",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué Áreas Naturales Protegidas tiene México?",
            en: "What Protected Natural Areas does Mexico have?",
          },
          options: [
            {
              es: "Reservas de la biosfera, parques nacionales, santuarios",
              en: "Biosphere reserves, national parks, sanctuaries",
            },
            { es: "Solo zoológicos", en: "Only zoos" },
            { es: "Solo parques urbanos", en: "Only urban parks" },
            {
              es: "No tiene áreas protegidas",
              en: "It has no protected areas",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "México: 182+ Áreas Naturales Protegidas. Incluyen RESERVAS DE LA BIOSFERA (Sian Ka'an, Calakmul), PARQUES NACIONALES, SANTUARIOS (mariposa monarca).",
            en: "Mexico: 182+ Protected Natural Areas. Include BIOSPHERE RESERVES (Sian Ka'an, Calakmul), NATIONAL PARKS, SANCTUARIES (monarch butterfly).",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-13",
          type: "true-false",
          prompt: {
            es: "La pérdida de biodiversidad es irreversible: una especie extinta no puede recuperarse.",
            en: "Biodiversity loss is irreversible: an extinct species cannot be recovered.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. La extinción es irreversible. México tiene ~2,600 especies en riesgo. La pérdida de hábitat es la causa principal.",
            en: "TRUE. Extinction is irreversible. Mexico has ~2,600 at-risk species. Habitat loss is the main cause.",
          },
          difficulty: 1,
        },
      ],
    },

    // ── LESSON 3: Población mundial y de México (Practice) ──
    {
      id: "population-practice",
      topicId: "human-geography",
      order: 3,
      title: {
        es: "Población mundial y de México",
        en: "World and Mexico Population",
      },
      description: {
        es: "Demografía, distribución y dinámica poblacional",
        en: "Demographics, distribution, and population dynamics",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-hg-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la población mundial aproximada actual?",
            en: "What is the approximate current world population?",
          },
          options: [
            {
              es: "Más de 8,000 millones de personas",
              en: "More than 8 billion people",
            },
            { es: "1,000 millones", en: "1 billion" },
            { es: "100 millones", en: "100 million" },
            { es: "500 millones", en: "500 million" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Población mundial 2024: ~8,100 millones. Asia es el continente más poblado (~60%). China e India superan los 1,400 millones cada uno.",
            en: "World population 2024: ~8.1 billion. Asia is the most populated continent (~60%). China and India exceed 1.4 billion each.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-15",
          type: "fill-blank",
          prompt: {
            es: "La población de México supera los _______ millones de habitantes.",
            en: "Mexico's population exceeds _______ million inhabitants.",
          },
          correctAnswer: "130",
          explanation: {
            es: "México: ~130 millones (2024). 10° país más poblado del mundo. Estado más poblado: Estado de México. Menor: Colima.",
            en: "Mexico: ~130 million (2024). 10th most populated country. Most populated state: State of Mexico. Least: Colima.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-16",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué indicador mide cuántas personas viven por km²?",
            en: "What indicator measures how many people live per km²?",
          },
          options: [
            { es: "Densidad de población", en: "Population density" },
            { es: "Tasa de natalidad", en: "Birth rate" },
            { es: "Esperanza de vida", en: "Life expectancy" },
            { es: "PIB per cápita", en: "GDP per capita" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "DENSIDAD DE POBLACIÓN = habitantes / km². México: ~66 hab/km². CDMX tiene la mayor densidad (~6,000 hab/km²).",
            en: "POPULATION DENSITY = inhabitants / km². Mexico: ~66 pop/km². CDMX has the highest density (~6,000 pop/km²).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-17",
          type: "true-false",
          prompt: {
            es: "La migración del campo a la ciudad (urbanización) es una tendencia mundial.",
            en: "Migration from rural to urban areas (urbanization) is a worldwide trend.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Más del 55% de la población mundial vive en ciudades. En México: ~80% de la población es URBANA.",
            en: "TRUE. More than 55% of world population lives in cities. In Mexico: ~80% of population is URBAN.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-18",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es una pirámide de población?",
            en: "What is a population pyramid?",
          },
          options: [
            {
              es: "Un gráfico que muestra la distribución de edad y sexo de una población",
              en: "A graph showing the age and sex distribution of a population",
            },
            { es: "Una pirámide egipcia", en: "An Egyptian pyramid" },
            { es: "Un tipo de montaña", en: "A type of mountain" },
            { es: "Un edificio gubernamental", en: "A government building" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "PIRÁMIDE DE POBLACIÓN: gráfico de barras horizontales (hombres izq, mujeres der). Muestra estructura por EDAD y SEXO. Indica si es joven o envejecida.",
            en: "POPULATION PYRAMID: horizontal bar graph (men left, women right). Shows AGE and SEX structure. Indicates if young or aging.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-19",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la principal causa de migración en México?",
            en: "What is the main cause of migration in Mexico?",
          },
          options: [
            {
              es: "Factores económicos (búsqueda de empleo y mejores salarios)",
              en: "Economic factors (seeking employment and better wages)",
            },
            { es: "El clima", en: "Climate" },
            { es: "El idioma", en: "Language" },
            { es: "La religión", en: "Religion" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "MIGRACIÓN en México: principalmente ECONÓMICA. Interna: del campo → ciudad. Internacional: México → EUA (por empleo/salarios).",
            en: "MIGRATION in Mexico: mainly ECONOMIC. Internal: rural → urban. International: Mexico → USA (for jobs/wages).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-20",
          type: "fill-blank",
          prompt: {
            es: "El continente más poblado del mundo es _______.",
            en: "The most populated continent in the world is _______.",
          },
          correctAnswer: "Asia",
          explanation: {
            es: "ASIA: ~4,700 millones (~60% de la población mundial). Países más poblados: China (~1,425 M), India (~1,430 M), Indonesia (~277 M).",
            en: "ASIA: ~4.7 billion (~60% of world population). Most populated countries: China (~1,425 M), India (~1,430 M), Indonesia (~277 M).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-21",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las zonas metropolitanas más grandes de México?",
            en: "What are Mexico's largest metropolitan areas?",
          },
          options: [
            {
              es: "Valle de México (CDMX), Guadalajara y Monterrey",
              en: "Valley of Mexico (CDMX), Guadalajara, and Monterrey",
            },
            {
              es: "Cancún, Acapulco y Los Cabos",
              en: "Cancún, Acapulco, and Los Cabos",
            },
            {
              es: "Tijuana, Juárez y Nogales",
              en: "Tijuana, Juárez, and Nogales",
            },
            { es: "Oaxaca, Puebla y Mérida", en: "Oaxaca, Puebla, and Mérida" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Zonas metro más grandes: VALLE DE MÉXICO (~22 M), GUADALAJARA (~5 M), MONTERREY (~5 M). Concentran servicios, industria y empleo.",
            en: "Largest metro areas: VALLEY OF MEXICO (~22 M), GUADALAJARA (~5 M), MONTERREY (~5 M). Concentrate services, industry, and jobs.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 4: Economía mundial (Practice) ──
    {
      id: "world-economy-practice",
      topicId: "human-geography",
      order: 4,
      title: {
        es: "Economía mundial",
        en: "World Economy",
      },
      description: {
        es: "Actividades económicas, sectores e indicadores",
        en: "Economic activities, sectors, and indicators",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-hg-22",
          type: "order-steps",
          prompt: {
            es: "Ordena los sectores económicos del primario al terciario:",
            en: "Order the economic sectors from primary to tertiary:",
          },
          options: [
            {
              es: "Primario: agricultura, ganadería, pesca, minería",
              en: "Primary: agriculture, ranching, fishing, mining",
            },
            {
              es: "Secundario: industria, manufactura, construcción",
              en: "Secondary: industry, manufacturing, construction",
            },
            {
              es: "Terciario: servicios, comercio, transporte, turismo",
              en: "Tertiary: services, commerce, transport, tourism",
            },
          ],
          correctAnswer: "0,1,2",
          explanation: {
            es: "PRIMARIO: extracción de recursos. SECUNDARIO: transformación (industria). TERCIARIO: servicios. México: el TERCIARIO aporta ~65% del PIB.",
            en: "PRIMARY: resource extraction. SECONDARY: transformation (industry). TERTIARY: services. Mexico: TERTIARY contributes ~65% of GDP.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-23",
          type: "fill-blank",
          prompt: {
            es: "El indicador que mide el valor total de bienes y servicios producidos por un país es el _______ Interno Bruto.",
            en: "The indicator measuring the total value of goods and services produced by a country is the Gross _______ Product.",
          },
          correctAnswer: "Producto",
          explanation: {
            es: "PIB (Producto Interno Bruto): valor monetario de toda la producción de bienes y servicios de un país en un año.",
            en: "GDP (Gross Domestic Product): monetary value of all goods and services produced by a country in one year.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-24",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las principales economías del mundo?",
            en: "What are the world's main economies?",
          },
          options: [
            {
              es: "Estados Unidos, China, Japón, Alemania",
              en: "United States, China, Japan, Germany",
            },
            {
              es: "México, Brasil, Argentina, Chile",
              en: "Mexico, Brazil, Argentina, Chile",
            },
            {
              es: "Nigeria, Etiopía, Congo, Kenia",
              en: "Nigeria, Ethiopia, Congo, Kenya",
            },
            {
              es: "Islandia, Noruega, Dinamarca, Suecia",
              en: "Iceland, Norway, Denmark, Sweden",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Mayores PIB: 1° EUA, 2° China, 3° Japón, 4° Alemania. México: ~15° economía mundial.",
            en: "Largest GDP: 1st USA, 2nd China, 3rd Japan, 4th Germany. Mexico: ~15th world economy.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-25",
          type: "true-false",
          prompt: {
            es: "La globalización implica una mayor interconexión económica, cultural y política entre los países.",
            en: "Globalization implies greater economic, cultural, and political interconnection between countries.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. GLOBALIZACIÓN: intercambio de bienes, servicios, cultura, información a escala mundial. Facilitada por tecnología y libre comercio.",
            en: "TRUE. GLOBALIZATION: exchange of goods, services, culture, information worldwide. Facilitated by technology and free trade.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-26",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el principal socio comercial de México?",
            en: "What is Mexico's main trading partner?",
          },
          options: [
            {
              es: "Estados Unidos (~80% de exportaciones)",
              en: "United States (~80% of exports)",
            },
            { es: "China", en: "China" },
            { es: "Japón", en: "Japan" },
            { es: "Brasil", en: "Brazil" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "EUA: ~80% de las exportaciones mexicanas. Tratado T-MEC (antes TLCAN) entre México, EUA y Canadá regula el comercio.",
            en: "USA: ~80% of Mexican exports. USMCA treaty (formerly NAFTA) between Mexico, USA, and Canada regulates trade.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-27",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué actividad económica genera más ingresos por turismo en México?",
            en: "What economic activity generates the most tourism income in Mexico?",
          },
          options: [
            {
              es: "Turismo de sol y playa (Cancún, Los Cabos, Puerto Vallarta)",
              en: "Beach tourism (Cancún, Los Cabos, Puerto Vallarta)",
            },
            { es: "Minería", en: "Mining" },
            { es: "Pesca industrial", en: "Industrial fishing" },
            { es: "Agricultura de exportación", en: "Export agriculture" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "TURISMO: 3er generador de divisas en México. Sol y playa + turismo cultural (zonas arqueológicas) + ecoturismo.",
            en: "TOURISM: 3rd largest foreign exchange generator in Mexico. Beach + cultural tourism (archaeological sites) + ecotourism.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-28",
          type: "fill-blank",
          prompt: {
            es: "El tratado comercial entre México, Estados Unidos y Canadá se llama T-_______.",
            en: "The trade treaty between Mexico, the United States, and Canada is called _______.",
          },
          correctAnswer: "MEC",
          explanation: {
            es: "T-MEC: Tratado México-EUA-Canadá (2020). Sustituyó al TLCAN (NAFTA). Regula comercio, inversión, propiedad intelectual.",
            en: "USMCA: United States-Mexico-Canada Agreement (2020). Replaced NAFTA. Regulates trade, investment, intellectual property.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-29",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es el IDH (Índice de Desarrollo Humano)?",
            en: "What is the HDI (Human Development Index)?",
          },
          options: [
            {
              es: "Un indicador que mide salud, educación e ingreso de un país",
              en: "An indicator that measures health, education, and income of a country",
            },
            {
              es: "El número de hospitales por ciudad",
              en: "The number of hospitals per city",
            },
            {
              es: "La cantidad de universidades",
              en: "The number of universities",
            },
            { es: "El número de carreteras", en: "The number of highways" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "IDH (ONU): mide 3 dimensiones: SALUD (esperanza de vida), EDUCACIÓN (escolaridad) e INGRESO (PIB per cápita). Escala 0-1.",
            en: "HDI (UN): measures 3 dimensions: HEALTH (life expectancy), EDUCATION (schooling), and INCOME (GDP per capita). Scale 0-1.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 5: Organización política (Practice) ──
    {
      id: "political-organization-practice",
      topicId: "human-geography",
      order: 5,
      title: {
        es: "Organización política de México y el mundo",
        en: "Political Organization of Mexico and the World",
      },
      description: {
        es: "División política, estados y organismos internacionales",
        en: "Political divisions, states, and international organizations",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-hg-30",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántas entidades federativas tiene México?",
            en: "How many federal entities does Mexico have?",
          },
          options: [
            {
              es: "32 (31 estados y la Ciudad de México)",
              en: "32 (31 states and Mexico City)",
            },
            { es: "28 estados", en: "28 states" },
            { es: "50 estados", en: "50 states" },
            { es: "25 estados", en: "25 states" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "México: 32 ENTIDADES FEDERATIVAS = 31 estados + CDMX. Cada estado tiene municipios (2,469 en total).",
            en: "Mexico: 32 FEDERAL ENTITIES = 31 states + CDMX. Each state has municipalities (2,469 total).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-31",
          type: "fill-blank",
          prompt: {
            es: "México es una República Federal, Democrática y _______.",
            en: "Mexico is a Federal, Democratic, and _______ Republic.",
          },
          correctAnswer: "Representativa",
          explanation: {
            es: "México: REPÚBLICA FEDERAL, DEMOCRÁTICA y REPRESENTATIVA. Tres poderes: Ejecutivo, Legislativo, Judicial.",
            en: "Mexico: FEDERAL, DEMOCRATIC, and REPRESENTATIVE REPUBLIC. Three powers: Executive, Legislative, Judicial.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-32",
          type: "multiple-choice",
          prompt: {
            es: "¿Con qué países comparte frontera México?",
            en: "With what countries does Mexico share a border?",
          },
          options: [
            {
              es: "Estados Unidos al norte; Guatemala y Belice al sur",
              en: "United States to the north; Guatemala and Belize to the south",
            },
            { es: "Solo Estados Unidos", en: "Only the United States" },
            { es: "Colombia y Venezuela", en: "Colombia and Venezuela" },
            { es: "Cuba y Honduras", en: "Cuba and Honduras" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Fronteras de México: NORTE = EUA (3,155 km). SUR = Guatemala (958 km) y Belice (276 km).",
            en: "Mexico's borders: NORTH = USA (3,155 km). SOUTH = Guatemala (958 km) and Belize (276 km).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-33",
          type: "true-false",
          prompt: {
            es: "La ONU (Organización de las Naciones Unidas) es la principal organización internacional y México es miembro fundador.",
            en: "The UN (United Nations) is the main international organization and Mexico is a founding member.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. ONU (1945): 193 miembros. México fue MIEMBRO FUNDADOR. Promueve paz, derechos humanos, desarrollo.",
            en: "TRUE. UN (1945): 193 members. Mexico was a FOUNDING MEMBER. Promotes peace, human rights, development.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-34",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántos continentes hay y cuáles son?",
            en: "How many continents are there and what are they?",
          },
          options: [
            {
              es: "6: América, Europa, Asia, África, Oceanía y Antártida",
              en: "6: America, Europe, Asia, Africa, Oceania, and Antarctica",
            },
            {
              es: "4: Norte, Sur, Este, Oeste",
              en: "4: North, South, East, West",
            },
            { es: "3: Tierra, Mar, Aire", en: "3: Land, Sea, Air" },
            { es: "8 continentes", en: "8 continents" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "6 continentes (modelo hispano): AMÉRICA, EUROPA, ASIA, ÁFRICA, OCEANÍA, ANTÁRTIDA. Asia es el más grande y poblado.",
            en: "6 continents (Hispanic model): AMERICA, EUROPE, ASIA, AFRICA, OCEANIA, ANTARCTICA. Asia is largest and most populated.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-35",
          type: "fill-blank",
          prompt: {
            es: "El estado más grande de México por extensión territorial es _______.",
            en: "Mexico's largest state by territorial extension is _______.",
          },
          correctAnswer: "Chihuahua",
          explanation: {
            es: "CHIHUAHUA: 247,455 km², el estado más grande. Le siguen Sonora, Coahuila, Durango. El más pequeño: Tlaxcala.",
            en: "CHIHUAHUA: 247,455 km², the largest state. Followed by Sonora, Coahuila, Durango. Smallest: Tlaxcala.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-36",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son los principales organismos económicos internacionales?",
            en: "What are the main international economic organizations?",
          },
          options: [
            { es: "FMI, Banco Mundial, OMC", en: "IMF, World Bank, WTO" },
            { es: "FIFA, COI, FIBA", en: "FIFA, IOC, FIBA" },
            { es: "NASA, ESA, JAXA", en: "NASA, ESA, JAXA" },
            {
              es: "Cruz Roja, Médicos sin Fronteras",
              en: "Red Cross, Doctors Without Borders",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "FMI: estabilidad financiera. BANCO MUNDIAL: préstamos para desarrollo. OMC: reglas de comercio internacional. México pertenece a los tres.",
            en: "IMF: financial stability. WORLD BANK: development loans. WTO: international trade rules. Mexico belongs to all three.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-37",
          type: "true-false",
          prompt: {
            es: "México pertenece a la OCDE (Organización para la Cooperación y el Desarrollo Económicos).",
            en: "Mexico belongs to the OECD (Organisation for Economic Co-operation and Development).",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. México ingresó a la OCDE en 1994. Fue el primer país latinoamericano en unirse. 38 países miembros.",
            en: "TRUE. Mexico joined the OECD in 1994. It was the first Latin American country to join. 38 member countries.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 6: Evaluación final (Quiz) ──
    {
      id: "human-geography-quiz",
      topicId: "human-geography",
      order: 6,
      title: {
        es: "Evaluación: Geografía humana",
        en: "Assessment: Human Geography",
      },
      description: {
        es: "Demuestra tu dominio de la geografía humana",
        en: "Demonstrate your mastery of human geography",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "geo-hg-q01",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué porcentaje de la población mexicana vive en zonas urbanas?",
            en: "What percentage of Mexico's population lives in urban areas?",
          },
          options: [
            { es: "Aproximadamente 80%", en: "Approximately 80%" },
            { es: "Aproximadamente 20%", en: "Approximately 20%" },
            { es: "Aproximadamente 50%", en: "Approximately 50%" },
            { es: "Aproximadamente 95%", en: "Approximately 95%" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "~80% de mexicanos viven en ciudades. Principales zonas metro: CDMX (~22 M), Guadalajara (~5 M), Monterrey (~5 M).",
            en: "~80% of Mexicans live in cities. Main metro areas: CDMX (~22 M), Guadalajara (~5 M), Monterrey (~5 M).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-q02",
          type: "fill-blank",
          prompt: {
            es: "La entidad más pequeña de México es _______.",
            en: "Mexico's smallest state is _______.",
          },
          correctAnswer: "Tlaxcala",
          explanation: {
            es: "TLAXCALA: 4,016 km², la entidad más pequeña. Pero no la menos poblada (eso es Colima/BCS). Más grande: Chihuahua.",
            en: "TLAXCALA: 4,016 km², the smallest state. But not the least populated (that's Colima/BCS). Largest: Chihuahua.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-q03",
          type: "true-false",
          prompt: {
            es: "El sector terciario (servicios) es el que más aporta al PIB de México.",
            en: "The tertiary sector (services) contributes the most to Mexico's GDP.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Sector TERCIARIO (servicios, comercio, turismo): ~65% del PIB. Secundario: ~30%. Primario: ~5%.",
            en: "TRUE. TERTIARY sector (services, commerce, tourism): ~65% of GDP. Secondary: ~30%. Primary: ~5%.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-q04",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la tasa de natalidad?",
            en: "What is the birth rate?",
          },
          options: [
            {
              es: "Número de nacimientos por cada 1,000 habitantes en un año",
              en: "Number of births per 1,000 inhabitants in a year",
            },
            {
              es: "Número total de hospitales",
              en: "Total number of hospitals",
            },
            { es: "Promedio de años de vida", en: "Average years of life" },
            { es: "Número de escuelas", en: "Number of schools" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "TASA DE NATALIDAD: nacimientos/1,000 hab/año. En México: ~17‰ (ha disminuido). Tasa de mortalidad: defunciones/1,000 hab.",
            en: "BIRTH RATE: births/1,000 pop/year. In Mexico: ~17‰ (has decreased). Mortality rate: deaths/1,000 pop.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-q05",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes NO es un recurso natural renovable?",
            en: "Which of the following is NOT a renewable natural resource?",
          },
          options: [
            { es: "Petróleo", en: "Oil" },
            { es: "Energía solar", en: "Solar energy" },
            { es: "Energía eólica", en: "Wind energy" },
            { es: "Bosques (manejados)", en: "Forests (managed)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "PETRÓLEO: recurso NO renovable (tarda millones de años en formarse). Renovables: sol, viento, agua, biomasa, geotermia.",
            en: "OIL: NON-renewable resource (takes millions of years to form). Renewable: sun, wind, water, biomass, geothermal.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-q06",
          type: "order-steps",
          prompt: {
            es: "Ordena los países por PIB de mayor a menor:",
            en: "Order countries by GDP from highest to lowest:",
          },
          options: [
            { es: "Estados Unidos", en: "United States" },
            { es: "China", en: "China" },
            { es: "Japón", en: "Japan" },
            { es: "Alemania", en: "Germany" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "PIB nominal: 1° EUA (~25T), 2° China (~18T), 3° Japón (~4.2T), 4° Alemania (~4.1T). México ~15° lugar.",
            en: "Nominal GDP: 1st USA (~$25T), 2nd China (~$18T), 3rd Japan (~$4.2T), 4th Germany (~$4.1T). Mexico ~15th.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-q07",
          type: "fill-blank",
          prompt: {
            es: "México tiene _______ entidades federativas (incluyendo la Ciudad de México).",
            en: "Mexico has _______ federal entities (including Mexico City).",
          },
          correctAnswer: "32",
          explanation: {
            es: "32 ENTIDADES FEDERATIVAS: 31 estados libres y soberanos + Ciudad de México (antes Distrito Federal).",
            en: "32 FEDERAL ENTITIES: 31 free and sovereign states + Mexico City (formerly Federal District).",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-q08",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué problemática social está relacionada con la distribución desigual de la riqueza?",
            en: "What social problem is related to unequal wealth distribution?",
          },
          options: [
            {
              es: "Pobreza y desigualdad social",
              en: "Poverty and social inequality",
            },
            { es: "Exceso de empleo", en: "Excess employment" },
            { es: "Demasiada educación", en: "Too much education" },
            { es: "Exceso de recursos", en: "Excess resources" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "DESIGUALDAD: en México ~36% de la población vive en pobreza. El sur (Chiapas, Guerrero, Oaxaca) tiene mayor marginación.",
            en: "INEQUALITY: in Mexico ~36% of population lives in poverty. The south (Chiapas, Guerrero, Oaxaca) has higher marginalization.",
          },
          difficulty: 1,
        },
        {
          id: "geo-hg-q09",
          type: "true-false",
          prompt: {
            es: "México exporta principalmente productos manufacturados (automóviles, electrónica).",
            en: "Mexico mainly exports manufactured products (automobiles, electronics).",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Exportaciones de México: ~89% son MANUFACTURAS (autos, TV, computadoras, partes). Principal destino: EUA.",
            en: "TRUE. Mexico's exports: ~89% are MANUFACTURES (cars, TVs, computers, parts). Main destination: USA.",
          },
          difficulty: 2,
        },
        {
          id: "geo-hg-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de estos es un ejemplo de región natural que se encuentra en el sureste de México?",
            en: "Which of these is an example of a natural region found in southeastern Mexico?",
          },
          options: [
            { es: "Selva tropical húmeda", en: "Tropical rainforest" },
            { es: "Tundra", en: "Tundra" },
            { es: "Taiga", en: "Taiga" },
            { es: "Estepa fría", en: "Cold steppe" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Sureste de México (Chiapas, Tabasco, Campeche): SELVA TROPICAL HÚMEDA, con gran biodiversidad. Selva Lacandona es emblemática.",
            en: "Southeastern Mexico (Chiapas, Tabasco, Campeche): TROPICAL RAINFOREST, with great biodiversity. Lacandon Jungle is emblematic.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
