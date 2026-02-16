import type { Topic } from "@/lib/types";

export const physicalGeographyTopic: Topic = {
  id: "physical-geography",
  slug: "geografia-fisica",
  title: {
    es: "Geografía física: el paisaje natural",
    en: "Physical Geography: The Natural Landscape",
  },
  description: {
    es: "Tectónica global, clima y el agua como recurso fundamental",
    en: "Global tectonics, climate, and water as a fundamental resource",
  },
  icon: "Mountain",
  color: "sky",
  bgGradient: "bg-linear-to-br from-sky-500 to-blue-600",
  prerequisites: ["earth-basis"],
  order: 2,
  lessons: [
    // ── LESSON 1: El paisaje natural (Learn) ──
    {
      id: "natural-landscape-learn",
      topicId: "physical-geography",
      order: 1,
      title: {
        es: "El paisaje natural",
        en: "The Natural Landscape",
      },
      description: {
        es: "Esferas terrestres y capas de la Tierra",
        en: "Earth's spheres and layers",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "geo-pf-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las cuatro esferas principales de la Tierra?",
            en: "What are Earth's four main spheres?",
          },
          options: [
            {
              es: "Litosfera, hidrosfera, atmósfera, biosfera",
              en: "Lithosphere, hydrosphere, atmosphere, biosphere",
            },
            { es: "Norte, sur, este, oeste", en: "North, south, east, west" },
            {
              es: "Estratosfera, mesosfera, termosfera, exosfera",
              en: "Stratosphere, mesosphere, thermosphere, exosphere",
            },
            {
              es: "Corteza, manto, núcleo, centro",
              en: "Crust, mantle, core, center",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las 4 esferas: LITOSFERA (rocas), HIDROSFERA (agua), ATMÓSFERA (aire), BIOSFERA (vida). Interactúan entre sí.",
            en: "The 4 spheres: LITHOSPHERE (rocks), HYDROSPHERE (water), ATMOSPHERE (air), BIOSPHERE (life). They interact with each other.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-02",
          type: "order-steps",
          prompt: {
            es: "Ordena las capas internas de la Tierra desde la superficie hacia el centro:",
            en: "Order Earth's internal layers from surface to center:",
          },
          options: [
            { es: "Corteza terrestre", en: "Earth's crust" },
            { es: "Manto", en: "Mantle" },
            { es: "Núcleo externo (líquido)", en: "Outer core (liquid)" },
            { es: "Núcleo interno (sólido)", en: "Inner core (solid)" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "De afuera hacia adentro: CORTEZA (5-70 km) → MANTO (2,900 km) → NÚCLEO EXTERNO (líquido) → NÚCLEO INTERNO (sólido, hierro/níquel).",
            en: "From outside to inside: CRUST (5-70 km) → MANTLE (2,900 km) → OUTER CORE (liquid) → INNER CORE (solid, iron/nickel).",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-03",
          type: "fill-blank",
          prompt: {
            es: "La capa de la atmósfera donde ocurren los fenómenos meteorológicos es la _______.",
            en: "The atmospheric layer where weather phenomena occur is the _______.",
          },
          correctAnswer: "troposfera",
          explanation: {
            es: "TROPOSFERA (0-12 km): capa más baja, contiene 75% del aire, donde ocurre el clima y la vida.",
            en: "TROPOSPHERE (0-12 km): lowest layer, contains 75% of air, where weather and life occur.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-04",
          type: "true-false",
          prompt: {
            es: "La biosfera es la capa donde se desarrolla la vida e incluye partes de las otras tres esferas.",
            en: "The biosphere is the layer where life develops and includes parts of the other three spheres.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. La BIOSFERA abarca zonas de litosfera (suelo), hidrosfera (agua) y atmósfera (aire) donde existe vida.",
            en: "TRUE. The BIOSPHERE covers areas of lithosphere (soil), hydrosphere (water) and atmosphere (air) where life exists.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-05",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué capa de la atmósfera contiene la capa de ozono?",
            en: "Which atmospheric layer contains the ozone layer?",
          },
          options: [
            { es: "Estratosfera", en: "Stratosphere" },
            { es: "Troposfera", en: "Troposphere" },
            { es: "Mesosfera", en: "Mesosphere" },
            { es: "Termosfera", en: "Thermosphere" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La capa de OZONO (O₃) está en la ESTRATOSFERA (12-50 km). Filtra rayos ultravioleta (UV) del Sol.",
            en: "The OZONE layer (O₃) is in the STRATOSPHERE (12-50 km). It filters ultraviolet (UV) rays from the Sun.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 2: La tectónica global (Practice) ──
    {
      id: "tectonics-practice",
      topicId: "physical-geography",
      order: 2,
      title: {
        es: "La tectónica global",
        en: "Global Tectonics",
      },
      description: {
        es: "Placas tectónicas, vulcanismo y sismicidad",
        en: "Tectonic plates, volcanism, and seismicity",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-pf-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es una placa tectónica?",
            en: "What is a tectonic plate?",
          },
          options: [
            {
              es: "Un fragmento rígido de la litosfera que se mueve sobre la astenosfera",
              en: "A rigid fragment of the lithosphere that moves over the asthenosphere",
            },
            { es: "Una capa de la atmósfera", en: "An atmospheric layer" },
            { es: "Un tipo de roca volcánica", en: "A type of volcanic rock" },
            { es: "Una corriente marina", en: "An ocean current" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "PLACA TECTÓNICA: fragmento rígido de litosfera que flota y se desplaza sobre la ASTENOSFERA (manto superior, semiplástico).",
            en: "TECTONIC PLATE: rigid lithosphere fragment that floats and moves over the ASTHENOSPHERE (upper mantle, semi-plastic).",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-07",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles placas tectónicas afectan directamente a México?",
            en: "Which tectonic plates directly affect Mexico?",
          },
          options: [
            {
              es: "Norteamericana, Cocos, Pacífico y Caribe",
              en: "North American, Cocos, Pacific, and Caribbean",
            },
            { es: "Euroasiática y Africana", en: "Eurasian and African" },
            { es: "Sudamericana e Índica", en: "South American and Indian" },
            { es: "Antártica y Pacífico", en: "Antarctic and Pacific" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "México está en la placa NORTEAMERICANA. Interactúa con COCOS (subduce, causa sismos), PACÍFICO y CARIBE.",
            en: "Mexico is on the NORTH AMERICAN plate. It interacts with COCOS (subducts, causes earthquakes), PACIFIC, and CARIBBEAN.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-08",
          type: "fill-blank",
          prompt: {
            es: "Cuando una placa oceánica se hunde bajo una continental, el proceso se llama _______.",
            en: "When an oceanic plate sinks under a continental plate, the process is called _______.",
          },
          correctAnswer: "subducción",
          explanation: {
            es: "SUBDUCCIÓN: placa oceánica (más densa) se hunde bajo continental → genera sismos, volcanes, fosas oceánicas. Ej: Cocos bajo Norteamericana.",
            en: "SUBDUCTION: oceanic plate (denser) sinks under continental → generates earthquakes, volcanoes, ocean trenches. Ex: Cocos under North American.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-09",
          type: "true-false",
          prompt: {
            es: "El Cinturón de Fuego del Pacífico concentra el 75% de los volcanes activos del mundo.",
            en: "The Pacific Ring of Fire concentrates 75% of the world's active volcanoes.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. El CINTURÓN DE FUEGO rodea el Pacífico: ~75% de volcanes activos y 90% de sismos. México está dentro de él.",
            en: "TRUE. The RING OF FIRE surrounds the Pacific: ~75% of active volcanoes and 90% of earthquakes. Mexico is within it.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipos de límites entre placas tectónicas existen?",
            en: "What types of tectonic plate boundaries exist?",
          },
          options: [
            {
              es: "Convergentes, divergentes y transformantes",
              en: "Convergent, divergent, and transform",
            },
            {
              es: "Internos, externos y mixtos",
              en: "Internal, external, and mixed",
            },
            {
              es: "Rápidos, lentos e inmóviles",
              en: "Fast, slow, and immobile",
            },
            { es: "Verticales y horizontales", en: "Vertical and horizontal" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "CONVERGENTE: se acercan (subducción). DIVERGENTE: se separan (dorsales oceánicas). TRANSFORMANTE: se deslizan (falla de San Andrés).",
            en: "CONVERGENT: come together (subduction). DIVERGENT: move apart (ocean ridges). TRANSFORM: slide past (San Andreas Fault).",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-11",
          type: "multiple-choice",
          prompt: {
            es: "¿Por qué México es un país altamente sísmico?",
            en: "Why is Mexico a highly seismic country?",
          },
          options: [
            {
              es: "Porque está en la interacción de varias placas tectónicas",
              en: "Because it's at the interaction of several tectonic plates",
            },
            {
              es: "Porque tiene muchos ríos",
              en: "Because it has many rivers",
            },
            {
              es: "Porque está en el Ecuador",
              en: "Because it's on the Equator",
            },
            {
              es: "Porque tiene pocos volcanes",
              en: "Because it has few volcanoes",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "México: interacción de placas Norteamericana, Cocos, Pacífico y Caribe → zona de SUBDUCCIÓN activa = alta sismicidad.",
            en: "Mexico: interaction of North American, Cocos, Pacific and Caribbean plates → active SUBDUCTION zone = high seismicity.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-12",
          type: "fill-blank",
          prompt: {
            es: "El Eje Neovolcánico Transversal de México incluye volcanes como el Popocatépetl y el _______.",
            en: "Mexico's Trans-Mexican Volcanic Belt includes volcanoes like Popocatépetl and _______.",
          },
          correctAnswer: "Iztaccíhuatl",
          explanation: {
            es: "Eje NEOVOLCÁNICO: franja volcánica de E a O. Volcanes: Popocatépetl, Iztaccíhuatl, Nevado de Toluca, Pico de Orizaba (el más alto).",
            en: "TRANS-MEXICAN VOLCANIC BELT: volcanic strip from E to W. Volcanoes: Popocatépetl, Iztaccíhuatl, Nevado de Toluca, Pico de Orizaba (tallest).",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-13",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la montaña más alta de México?",
            en: "What is the tallest mountain in Mexico?",
          },
          options: [
            {
              es: "Pico de Orizaba (Citlaltépetl) – 5,636 m",
              en: "Pico de Orizaba (Citlaltépetl) – 5,636 m",
            },
            { es: "Popocatépetl – 5,452 m", en: "Popocatépetl – 5,452 m" },
            { es: "Iztaccíhuatl – 5,215 m", en: "Iztaccíhuatl – 5,215 m" },
            {
              es: "Nevado de Toluca – 4,680 m",
              en: "Nevado de Toluca – 4,680 m",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "PICO DE ORIZABA (Citlaltépetl): 5,636 m, la montaña más alta de México y el volcán más alto de Norteamérica.",
            en: "PICO DE ORIZABA (Citlaltépetl): 5,636 m, tallest mountain in Mexico and highest volcano in North America.",
          },
          difficulty: 1,
        },
      ],
    },

    // ── LESSON 3: El agua como recurso fundamental (Practice) ──
    {
      id: "water-resource-practice",
      topicId: "physical-geography",
      order: 3,
      title: {
        es: "El agua como recurso fundamental",
        en: "Water as a Fundamental Resource",
      },
      description: {
        es: "Ciclo hidrológico, distribución y problemática del agua",
        en: "Hydrological cycle, distribution, and water problems",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-pf-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué porcentaje del agua en la Tierra es agua dulce disponible?",
            en: "What percentage of Earth's water is available freshwater?",
          },
          options: [
            { es: "Menos del 1%", en: "Less than 1%" },
            { es: "25%", en: "25%" },
            { es: "50%", en: "50%" },
            { es: "10%", en: "10%" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "97.5% = agua salada (océanos). 2.5% agua dulce, pero ~69% en glaciares. Solo ~1% es accesible (ríos, lagos, acuíferos).",
            en: "97.5% = salt water (oceans). 2.5% fresh water, but ~69% in glaciers. Only ~1% is accessible (rivers, lakes, aquifers).",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-15",
          type: "order-steps",
          prompt: {
            es: "Ordena las etapas del ciclo hidrológico:",
            en: "Order the stages of the hydrological cycle:",
          },
          options: [
            { es: "Evaporación", en: "Evaporation" },
            {
              es: "Condensación (formación de nubes)",
              en: "Condensation (cloud formation)",
            },
            {
              es: "Precipitación (lluvia/nieve)",
              en: "Precipitation (rain/snow)",
            },
            {
              es: "Escurrimiento e infiltración",
              en: "Runoff and infiltration",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Ciclo: EVAPORACIÓN → CONDENSACIÓN (nubes) → PRECIPITACIÓN (lluvia) → ESCURRIMIENTO/INFILTRACIÓN → regresa al inicio.",
            en: "Cycle: EVAPORATION → CONDENSATION (clouds) → PRECIPITATION (rain) → RUNOFF/INFILTRATION → returns to start.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-16",
          type: "fill-blank",
          prompt: {
            es: "Los depósitos de agua subterránea que se forman en rocas porosas se llaman _______.",
            en: "Underground water deposits formed in porous rocks are called _______.",
          },
          correctAnswer: "acuíferos",
          explanation: {
            es: "ACUÍFEROS: formaciones geológicas que almacenan y transmiten agua subterránea. Fuente clave en zonas áridas de México.",
            en: "AQUIFERS: geological formations that store and transmit groundwater. Key source in arid areas of Mexico.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-17",
          type: "true-false",
          prompt: {
            es: "Los océanos Pacífico y Atlántico son los que bañan las costas de México.",
            en: "The Pacific and Atlantic oceans border Mexico's coasts.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. México: costa OESTE = Océano Pacífico. Costa ESTE = Golfo de México y Mar Caribe (parte del Atlántico).",
            en: "TRUE. Mexico: WEST coast = Pacific Ocean. EAST coast = Gulf of Mexico and Caribbean Sea (part of the Atlantic).",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-18",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son los ríos más importantes de México?",
            en: "What are Mexico's most important rivers?",
          },
          options: [
            {
              es: "Lerma-Santiago, Balsas, Grijalva-Usumacinta, Bravo",
              en: "Lerma-Santiago, Balsas, Grijalva-Usumacinta, Bravo",
            },
            { es: "Amazonas, Nilo, Misisipi", en: "Amazon, Nile, Mississippi" },
            { es: "Rin, Danubio, Sena", en: "Rhine, Danube, Seine" },
            { es: "Yangtsé, Ganges, Mekong", en: "Yangtze, Ganges, Mekong" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ríos de México: GRIJALVA-USUMACINTA (mayor caudal), LERMA-SANTIAGO (más largo interior), RÍO BRAVO (frontera con EUA), BALSAS.",
            en: "Mexico's rivers: GRIJALVA-USUMACINTA (largest flow), LERMA-SANTIAGO (longest interior), RIO BRAVO (US border), BALSAS.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-19",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la principal problemática del agua en México?",
            en: "What is the main water problem in Mexico?",
          },
          options: [
            {
              es: "Distribución desigual: abundante en el sureste, escasa en el norte",
              en: "Unequal distribution: abundant in southeast, scarce in the north",
            },
            {
              es: "No hay agua dulce en México",
              en: "There's no freshwater in Mexico",
            },
            {
              es: "Todos los ríos están contaminados",
              en: "All rivers are polluted",
            },
            {
              es: "El agua se evapora completamente",
              en: "Water evaporates completely",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Problema: 77% del agua está en el SURESTE (poca población). El NORTE (mucha población, industria) tiene solo 23% → estrés hídrico.",
            en: "Problem: 77% of water is in the SOUTHEAST (low population). The NORTH (large population, industry) has only 23% → water stress.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-20",
          type: "fill-blank",
          prompt: {
            es: "El océano más grande del mundo es el Océano _______.",
            en: "The world's largest ocean is the _______ Ocean.",
          },
          correctAnswer: "Pacífico",
          explanation: {
            es: "PACÍFICO: el más grande (165.2 M km²). Luego Atlántico (106.4 M), Índico (73.6 M), Antártico, Ártico.",
            en: "PACIFIC: largest (165.2 M km²). Then Atlantic (106.4 M), Indian (73.6 M), Southern, Arctic.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-21",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué corriente marina cálida influye en el clima del sureste de México?",
            en: "What warm ocean current influences the climate of southeastern Mexico?",
          },
          options: [
            { es: "Corriente del Golfo", en: "Gulf Stream" },
            { es: "Corriente de Humboldt", en: "Humboldt Current" },
            { es: "Corriente del Labrador", en: "Labrador Current" },
            { es: "Corriente de Benguela", en: "Benguela Current" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La CORRIENTE DEL GOLFO: corriente cálida que sale del Golfo de México → influye en clima húmedo del sureste.",
            en: "The GULF STREAM: warm current from the Gulf of Mexico → influences the humid climate of the southeast.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 4: Clima y factores climáticos (Practice) ──
    {
      id: "climate-practice",
      topicId: "physical-geography",
      order: 4,
      title: {
        es: "Clima y factores climáticos",
        en: "Climate and Climatic Factors",
      },
      description: {
        es: "Elementos del clima y clasificación climática",
        en: "Climate elements and climate classification",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-pf-22",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la diferencia entre tiempo meteorológico y clima?",
            en: "What is the difference between weather and climate?",
          },
          options: [
            {
              es: "El tiempo es momentáneo, el clima es el promedio a largo plazo",
              en: "Weather is momentary, climate is the long-term average",
            },
            { es: "Son lo mismo", en: "They are the same" },
            { es: "El clima cambia cada día", en: "Climate changes every day" },
            { es: "El tiempo dura años", en: "Weather lasts years" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "TIEMPO: condiciones atmosféricas en un momento y lugar. CLIMA: promedio de condiciones atmosféricas durante 30+ años.",
            en: "WEATHER: atmospheric conditions at a moment and place. CLIMATE: average atmospheric conditions over 30+ years.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-23",
          type: "fill-blank",
          prompt: {
            es: "Los elementos del clima son temperatura, presión atmosférica, viento, humedad y _______.",
            en: "Climate elements are temperature, atmospheric pressure, wind, humidity, and _______.",
          },
          correctAnswer: "precipitación",
          explanation: {
            es: "Elementos del clima: TEMPERATURA, PRECIPITACIÓN, HUMEDAD, PRESIÓN ATMOSFÉRICA, VIENTO. Factores: latitud, altitud, cercanía al mar.",
            en: "Climate elements: TEMPERATURE, PRECIPITATION, HUMIDITY, ATMOSPHERIC PRESSURE, WIND. Factors: latitude, altitude, proximity to sea.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-24",
          type: "true-false",
          prompt: {
            es: "A mayor altitud, la temperatura disminuye.",
            en: "The higher the altitude, the lower the temperature.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. La temperatura disminuye ~6.5°C por cada 1,000 m de altitud. Por eso las montañas altas tienen nieve.",
            en: "TRUE. Temperature decreases ~6.5°C for every 1,000 m of altitude. That's why tall mountains have snow.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-25",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué sistema de clasificación climática se usa más en Geografía?",
            en: "What climate classification system is most used in Geography?",
          },
          options: [
            { es: "Clasificación de Köppen", en: "Köppen classification" },
            { es: "Clasificación de Darwin", en: "Darwin classification" },
            { es: "Escala Richter", en: "Richter scale" },
            { es: "Escala Beaufort", en: "Beaufort scale" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Clasificación de KÖPPEN: usa letras (A=tropical, B=seco, C=templado, D=continental, E=polar). México tiene A, B y C.",
            en: "KÖPPEN classification: uses letters (A=tropical, B=dry, C=temperate, D=continental, E=polar). Mexico has A, B, and C.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-26",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué climas predominan en México?",
            en: "What climates predominate in Mexico?",
          },
          options: [
            {
              es: "Secos y semisecos (más del 50% del territorio)",
              en: "Dry and semi-dry (more than 50% of territory)",
            },
            { es: "Polar y tundra", en: "Polar and tundra" },
            { es: "Continental húmedo", en: "Humid continental" },
            { es: "Ecuatorial", en: "Equatorial" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "México: ~50-60% clima SECO/SEMISECO (norte y centro). También: tropical húmedo (sureste), templado (Sierra Madre).",
            en: "Mexico: ~50-60% DRY/SEMI-DRY climate (north and center). Also: tropical humid (southeast), temperate (Sierra Madre).",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-27",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué fenómeno meteorológico afecta frecuentemente las costas del Pacífico y Golfo de México?",
            en: "What weather phenomenon frequently affects Mexico's Pacific and Gulf coasts?",
          },
          options: [
            {
              es: "Huracanes (ciclones tropicales)",
              en: "Hurricanes (tropical cyclones)",
            },
            { es: "Tornados", en: "Tornadoes" },
            { es: "Tsunamis", en: "Tsunamis" },
            { es: "Auroras boreales", en: "Northern lights" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "HURACANES: ciclones tropicales que se forman en aguas cálidas. Temporada en México: junio-noviembre (Pacífico y Atlántico/Golfo).",
            en: "HURRICANES: tropical cyclones that form in warm waters. Season in Mexico: June-November (Pacific and Atlantic/Gulf).",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-28",
          type: "fill-blank",
          prompt: {
            es: "La latitud es un factor climático: a menor latitud (más cerca del _______ ), mayor temperatura.",
            en: "Latitude is a climatic factor: the lower the latitude (closer to the _______ ), the higher the temperature.",
          },
          correctAnswer: "Ecuador",
          explanation: {
            es: "Cerca del ECUADOR: más rayos solares directos → mayor temperatura. Cerca de los polos: menos rayos → menor temperatura.",
            en: "Near the EQUATOR: more direct sunlight → higher temperature. Near the poles: less sunlight → lower temperature.",
          },
          difficulty: 1,
        },
      ],
    },

    // ── LESSON 5: Evaluación (Quiz) ──
    {
      id: "physical-geography-quiz",
      topicId: "physical-geography",
      order: 5,
      title: {
        es: "Evaluación: Geografía física",
        en: "Assessment: Physical Geography",
      },
      description: {
        es: "Demuestra tu conocimiento sobre el paisaje natural",
        en: "Demonstrate your knowledge about the natural landscape",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "geo-pf-q01",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué escala mide la magnitud de los sismos?",
            en: "What scale measures earthquake magnitude?",
          },
          options: [
            {
              es: "Escala de Richter (o de magnitud de momento)",
              en: "Richter scale (or moment magnitude scale)",
            },
            { es: "Escala Beaufort", en: "Beaufort scale" },
            { es: "Escala de Mohs", en: "Mohs scale" },
            { es: "Escala Fahrenheit", en: "Fahrenheit scale" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Escala RICHTER/momento magnitud: mide energía liberada por sismo. La escala de MERCALLI mide intensidad (daños sentidos).",
            en: "RICHTER/moment magnitude scale: measures energy released by earthquake. MERCALLI scale measures intensity (felt damage).",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-q02",
          type: "true-false",
          prompt: {
            es: "El relieve de México es mayoritariamente plano.",
            en: "Mexico's relief is mostly flat.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. México es mayoritariamente MONTAÑOSO: Sierra Madre Occidental, Sierra Madre Oriental, Eje Neovolcánico, Sierra del Sur.",
            en: "FALSE. Mexico is mostly MOUNTAINOUS: Sierra Madre Occidental, Sierra Madre Oriental, Trans-Mexican Volcanic Belt, Southern Sierra.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-q03",
          type: "fill-blank",
          prompt: {
            es: "Las principales cadenas montañosas de México son la Sierra Madre _______ y la Sierra Madre Oriental.",
            en: "Mexico's main mountain ranges are the Sierra Madre _______ and the Sierra Madre Oriental.",
          },
          correctAnswer: "Occidental",
          explanation: {
            es: "Sierra Madre OCCIDENTAL (oeste, Pacífico) y Sierra Madre ORIENTAL (este, Golfo). Entre ambas: Altiplano Mexicano.",
            en: "Sierra Madre OCCIDENTAL (west, Pacific) and Sierra Madre ORIENTAL (east, Gulf). Between them: Mexican Plateau.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-q04",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la principal consecuencia del calentamiento global sobre el agua?",
            en: "What is the main consequence of global warming on water?",
          },
          options: [
            {
              es: "Deshielo de glaciares y aumento del nivel del mar",
              en: "Glacier melting and sea level rise",
            },
            {
              es: "Congelamiento de todos los ríos",
              en: "Freezing of all rivers",
            },
            { es: "Desaparición de la lluvia", en: "Disappearance of rain" },
            { es: "Aumento de agua dulce", en: "Increase in freshwater" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Calentamiento → DESHIELO de glaciares y casquetes polares → aumento del nivel del mar → inundaciones costeras.",
            en: "Warming → MELTING of glaciers and ice caps → sea level rise → coastal flooding.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-q05",
          type: "order-steps",
          prompt: {
            es: "Ordena las capas de la atmósfera desde la más cercana a la superficie:",
            en: "Order the atmospheric layers from closest to the surface:",
          },
          options: [
            { es: "Troposfera", en: "Troposphere" },
            { es: "Estratosfera", en: "Stratosphere" },
            { es: "Mesosfera", en: "Mesosphere" },
            { es: "Termosfera", en: "Thermosphere" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "De abajo a arriba: TROPOSFERA (0-12 km) → ESTRATOSFERA (12-50) → MESOSFERA (50-80) → TERMOSFERA (80-700) → Exosfera.",
            en: "Bottom to top: TROPOSPHERE (0-12 km) → STRATOSPHERE (12-50) → MESOSPHERE (50-80) → THERMOSPHERE (80-700) → Exosphere.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-q06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué teoría explica el movimiento de las placas tectónicas?",
            en: "What theory explains tectonic plate movement?",
          },
          options: [
            {
              es: "Teoría de la Tectónica de Placas (Wegener: deriva continental)",
              en: "Theory of Plate Tectonics (Wegener: continental drift)",
            },
            { es: "Teoría de la Relatividad", en: "Theory of Relativity" },
            { es: "Teoría celular", en: "Cell theory" },
            { es: "Teoría del Big Bang", en: "Big Bang theory" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "WEGENER (1912): deriva continental (los continentes se mueven). Evolucionó en la TECTÓNICA DE PLACAS (años 60s).",
            en: "WEGENER (1912): continental drift (continents move). Evolved into PLATE TECTONICS (1960s).",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-q07",
          type: "true-false",
          prompt: {
            es: "Los climas secos predominan en el norte de México.",
            en: "Dry climates predominate in northern Mexico.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Norte de México: climas SECOS (desierto de Sonora, Chihuahua). Sureste: climas TROPICALES húmedos.",
            en: "TRUE. Northern Mexico: DRY climates (Sonoran, Chihuahuan deserts). Southeast: humid TROPICAL climates.",
          },
          difficulty: 1,
        },
        {
          id: "geo-pf-q08",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el río más caudaloso de México?",
            en: "What is Mexico's highest-flow river?",
          },
          options: [
            { es: "Grijalva-Usumacinta", en: "Grijalva-Usumacinta" },
            { es: "Río Bravo", en: "Rio Bravo" },
            { es: "Lerma-Santiago", en: "Lerma-Santiago" },
            { es: "Río Balsas", en: "Balsas River" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "GRIJALVA-USUMACINTA: mayor caudal de México, en Tabasco y Chiapas. Aporta ~30% del agua superficial del país.",
            en: "GRIJALVA-USUMACINTA: Mexico's largest flow, in Tabasco and Chiapas. Provides ~30% of the country's surface water.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-q09",
          type: "fill-blank",
          prompt: {
            es: "La falla de San _______ es un límite transformante entre las placas del Pacífico y Norteamericana.",
            en: "The San _______ Fault is a transform boundary between the Pacific and North American plates.",
          },
          correctAnswer: "Andrés",
          explanation: {
            es: "Falla de SAN ANDRÉS: límite transformante (placas se deslizan lateralmente). Atraviesa California y parte de Baja California.",
            en: "SAN ANDREAS Fault: transform boundary (plates slide laterally). Crosses California and part of Baja California.",
          },
          difficulty: 2,
        },
        {
          id: "geo-pf-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Por qué se forman los huracanes?",
            en: "Why do hurricanes form?",
          },
          options: [
            {
              es: "Por la evaporación del agua cálida oceánica (>26°C) y el efecto Coriolis",
              en: "By evaporation of warm ocean water (>26°C) and the Coriolis effect",
            },
            { es: "Por terremotos submarinos", en: "By submarine earthquakes" },
            { es: "Por erupciones volcánicas", en: "By volcanic eruptions" },
            { es: "Por la rotación de la Luna", en: "By the Moon's rotation" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Huracanes: agua oceánica >26°C → evaporación masiva → aire caliente asciende → efecto Coriolis genera rotación → ciclón tropical.",
            en: "Hurricanes: ocean water >26°C → massive evaporation → warm air rises → Coriolis effect generates rotation → tropical cyclone.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
