import type { Topic } from "@/lib/types";

export const earthBasisTopic: Topic = {
  id: "earth-basis",
  slug: "la-tierra",
  title: {
    es: "La Tierra, base del desarrollo del hombre",
    en: "Earth, Basis of Human Development",
  },
  description: {
    es: "Geografía como ciencia y ubicación espacial y temporal",
    en: "Geography as a science and spatial-temporal location",
  },
  icon: "Globe",
  color: "teal",
  bgGradient: "bg-linear-to-br from-teal-500 to-cyan-600",
  prerequisites: [],
  order: 1,
  lessons: [
    // ── LESSON 1: La Geografía, ciencia natural y social (Learn) ──
    {
      id: "geo-science-learn",
      topicId: "earth-basis",
      order: 1,
      title: {
        es: "La Geografía como ciencia",
        en: "Geography as a Science",
      },
      description: {
        es: "Relación del hombre con la naturaleza y ramas de la Geografía",
        en: "Relationship between humans and nature and branches of Geography",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "geo-eb-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué estudia la Geografía?",
            en: "What does Geography study?",
          },
          options: [
            {
              es: "La relación entre el hombre y el espacio geográfico",
              en: "The relationship between humans and geographic space",
            },
            {
              es: "Solo los mapas y continentes",
              en: "Only maps and continents",
            },
            {
              es: "Únicamente los fenómenos climáticos",
              en: "Only climatic phenomena",
            },
            { es: "La historia de los pueblos", en: "The history of peoples" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La GEOGRAFÍA estudia la relación entre el ser humano y su espacio geográfico, integrando aspectos naturales y sociales.",
            en: "GEOGRAPHY studies the relationship between humans and their geographic space, integrating natural and social aspects.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-02",
          type: "true-false",
          prompt: {
            es: "La geografía es exclusivamente una ciencia natural.",
            en: "Geography is exclusively a natural science.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. La Geografía es una ciencia MIXTA: natural (estudia relieve, clima, agua) y social (estudia población, economía, cultura).",
            en: "FALSE. Geography is a MIXED science: natural (studies relief, climate, water) and social (studies population, economy, culture).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-03",
          type: "fill-blank",
          prompt: {
            es: "La palabra Geografía proviene del griego y significa 'descripción de la _______'.",
            en: "The word Geography comes from Greek and means 'description of the _______'.",
          },
          correctAnswer: "Tierra",
          explanation: {
            es: "Geo = Tierra, grafía = descripción. Eratóstenes fue el primero en usar el término 'Geografía'.",
            en: "Geo = Earth, graphy = description. Eratosthenes was the first to use the term 'Geography'.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-04",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las dos grandes ramas de la Geografía?",
            en: "What are the two major branches of Geography?",
          },
          options: [
            {
              es: "Geografía física y Geografía humana",
              en: "Physical Geography and Human Geography",
            },
            {
              es: "Geografía antigua y Geografía moderna",
              en: "Ancient Geography and Modern Geography",
            },
            {
              es: "Cartografía y Climatología",
              en: "Cartography and Climatology",
            },
            { es: "Geología y Biología", en: "Geology and Biology" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Geografía FÍSICA: estudia elementos naturales (relieve, clima, agua). Geografía HUMANA: estudia la sociedad (población, economía, política).",
            en: "PHYSICAL Geography: studies natural elements (relief, climate, water). HUMAN Geography: studies society (population, economy, politics).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-05",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es un principio básico de la Geografía?",
            en: "What is a basic principle of Geography?",
          },
          options: [
            {
              es: "Principio de localización (todo hecho geográfico tiene una ubicación)",
              en: "Principle of location (every geographic fact has a location)",
            },
            { es: "Principio de gravedad", en: "Principle of gravity" },
            { es: "Principio de evolución", en: "Principle of evolution" },
            { es: "Principio de relatividad", en: "Principle of relativity" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Principios geográficos: LOCALIZACIÓN, DISTRIBUCIÓN, RELACIÓN, CAUSALIDAD y EVOLUCIÓN de los fenómenos.",
            en: "Geographic principles: LOCATION, DISTRIBUTION, RELATIONSHIP, CAUSALITY and EVOLUTION of phenomena.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 2: Ubicación espacial (Practice) ──
    {
      id: "spatial-location-practice",
      topicId: "earth-basis",
      order: 2,
      title: {
        es: "Ubicación espacial",
        en: "Spatial Location",
      },
      description: {
        es: "Coordenadas geográficas, meridianos y paralelos",
        en: "Geographic coordinates, meridians and parallels",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-eb-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué línea imaginaria divide la Tierra en hemisferio norte y hemisferio sur?",
            en: "What imaginary line divides Earth into northern and southern hemispheres?",
          },
          options: [
            { es: "El Ecuador (paralelo 0°)", en: "The Equator (parallel 0°)" },
            { es: "El Meridiano de Greenwich", en: "The Greenwich Meridian" },
            { es: "El Trópico de Cáncer", en: "The Tropic of Cancer" },
            { es: "El Círculo Polar Ártico", en: "The Arctic Circle" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El ECUADOR (paralelo 0°) divide la Tierra en hemisferio NORTE y hemisferio SUR. Es el paralelo más largo.",
            en: "The EQUATOR (parallel 0°) divides Earth into NORTHERN and SOUTHERN hemispheres. It's the longest parallel.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-07",
          type: "fill-blank",
          prompt: {
            es: "El Meridiano de _______ (0°) divide la Tierra en hemisferio oriental y occidental.",
            en: "The _______ Meridian (0°) divides Earth into eastern and western hemispheres.",
          },
          correctAnswer: "Greenwich",
          explanation: {
            es: "El Meridiano de GREENWICH (0°) pasa por Londres y divide la Tierra en hemisferio ESTE y OESTE.",
            en: "The GREENWICH Meridian (0°) passes through London and divides Earth into EASTERN and WESTERN hemispheres.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-08",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué mide la latitud?",
            en: "What does latitude measure?",
          },
          options: [
            {
              es: "Distancia angular al norte o sur del Ecuador",
              en: "Angular distance north or south of the Equator",
            },
            {
              es: "Distancia angular al este o oeste de Greenwich",
              en: "Angular distance east or west of Greenwich",
            },
            {
              es: "Altura sobre el nivel del mar",
              en: "Height above sea level",
            },
            {
              es: "Distancia entre dos ciudades",
              en: "Distance between two cities",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "LATITUD: distancia angular al ECUADOR (N o S, 0° a 90°). LONGITUD: distancia angular a GREENWICH (E u O, 0° a 180°).",
            en: "LATITUDE: angular distance from EQUATOR (N or S, 0° to 90°). LONGITUDE: angular distance from GREENWICH (E or W, 0° to 180°).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-09",
          type: "true-false",
          prompt: {
            es: "La longitud se mide de 0° a 180° al este y al oeste del Meridiano de Greenwich.",
            en: "Longitude is measured from 0° to 180° east and west of the Greenwich Meridian.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Longitud: 0°-180° E/O desde Greenwich. Latitud: 0°-90° N/S desde el Ecuador.",
            en: "TRUE. Longitude: 0°-180° E/W from Greenwich. Latitude: 0°-90° N/S from the Equator.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántos husos horarios tiene la Tierra?",
            en: "How many time zones does Earth have?",
          },
          options: [
            { es: "24 husos horarios", en: "24 time zones" },
            { es: "12 husos horarios", en: "12 time zones" },
            { es: "36 husos horarios", en: "36 time zones" },
            { es: "48 husos horarios", en: "48 time zones" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "24 HUSOS HORARIOS (360° ÷ 15° = 24). Cada huso = 15° de longitud = 1 hora de diferencia.",
            en: "24 TIME ZONES (360° ÷ 15° = 24). Each zone = 15° of longitude = 1 hour difference.",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-11",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántos husos horarios tiene México?",
            en: "How many time zones does Mexico have?",
          },
          options: [
            { es: "4 husos horarios", en: "4 time zones" },
            { es: "2 husos horarios", en: "2 time zones" },
            { es: "1 huso horario", en: "1 time zone" },
            { es: "6 husos horarios", en: "6 time zones" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "México tiene 4 HUSOS HORARIOS: Sureste (UTC-5), Centro (UTC-6), Pacífico (UTC-7) y Noroeste (UTC-8).",
            en: "Mexico has 4 TIME ZONES: Southeast (UTC-5), Central (UTC-6), Pacific (UTC-7), and Northwest (UTC-8).",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-12",
          type: "fill-blank",
          prompt: {
            es: "Las líneas imaginarias que van de polo a polo se llaman _______.",
            en: "The imaginary lines that go from pole to pole are called _______.",
          },
          correctAnswer: "meridianos",
          explanation: {
            es: "MERIDIANOS: de polo a polo (miden longitud). PARALELOS: círculos horizontales (miden latitud).",
            en: "MERIDIANS: from pole to pole (measure longitude). PARALLELS: horizontal circles (measure latitude).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-13",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué latitud se encuentra el Trópico de Cáncer?",
            en: "At what latitude is the Tropic of Cancer?",
          },
          options: [
            { es: "23° 26' N", en: "23° 26' N" },
            { es: "23° 26' S", en: "23° 26' S" },
            { es: "66° 33' N", en: "66° 33' N" },
            { es: "0°", en: "0°" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Trópico de CÁNCER: 23° 26' N (pasa por México). Trópico de CAPRICORNIO: 23° 26' S.",
            en: "Tropic of CANCER: 23° 26' N (passes through Mexico). Tropic of CAPRICORN: 23° 26' S.",
          },
          difficulty: 2,
        },
      ],
    },

    // ── LESSON 3: Ubicación temporal y cartografía (Practice) ──
    {
      id: "cartography-practice",
      topicId: "earth-basis",
      order: 3,
      title: {
        es: "Cartografía y representación",
        en: "Cartography and Representation",
      },
      description: {
        es: "Mapas, escalas, proyecciones y herramientas geográficas",
        en: "Maps, scales, projections and geographic tools",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "geo-eb-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la escala en un mapa?",
            en: "What is scale on a map?",
          },
          options: [
            {
              es: "La relación entre la distancia en el mapa y la distancia real",
              en: "The relationship between map distance and real distance",
            },
            { es: "El color del mapa", en: "The color of the map" },
            { es: "La leyenda del mapa", en: "The map legend" },
            { es: "El título del mapa", en: "The title of the map" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ESCALA = proporción mapa:realidad. Ej: 1:50,000 significa 1 cm en el mapa = 50,000 cm (500 m) reales.",
            en: "SCALE = map:reality proportion. Ex: 1:50,000 means 1 cm on map = 50,000 cm (500 m) in reality.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-15",
          type: "true-false",
          prompt: {
            es: "Una escala 1:10,000 es más detallada que una escala 1:1,000,000.",
            en: "A 1:10,000 scale is more detailed than a 1:1,000,000 scale.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. A MENOR denominador, MAYOR detalle. 1:10,000 (escala grande) muestra más detalle que 1:1,000,000 (escala pequeña).",
            en: "TRUE. SMALLER denominator = GREATER detail. 1:10,000 (large scale) shows more detail than 1:1,000,000 (small scale).",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-16",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la proyección cartográfica más conocida?",
            en: "What is the most well-known map projection?",
          },
          options: [
            {
              es: "Proyección de Mercator (cilíndrica)",
              en: "Mercator projection (cylindrical)",
            },
            { es: "Proyección solar", en: "Solar projection" },
            { es: "Proyección lunar", en: "Lunar projection" },
            { es: "Proyección digital", en: "Digital projection" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Proyección de MERCATOR (cilíndrica, 1569): respeta formas pero distorsiona tamaños en los polos.",
            en: "MERCATOR projection (cylindrical, 1569): preserves shapes but distorts sizes near the poles.",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-17",
          type: "fill-blank",
          prompt: {
            es: "El sistema de posicionamiento global que usa satélites para ubicar puntos en la Tierra se llama _______.",
            en: "The global positioning system that uses satellites to locate points on Earth is called _______.",
          },
          correctAnswer: "GPS",
          explanation: {
            es: "GPS (Global Positioning System): sistema de satélites que permite determinar ubicación precisa (latitud, longitud, altitud).",
            en: "GPS (Global Positioning System): satellite system that allows determining precise location (latitude, longitude, altitude).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-18",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de mapa muestra el relieve, ríos y montañas?",
            en: "What type of map shows relief, rivers, and mountains?",
          },
          options: [
            {
              es: "Mapa físico o topográfico",
              en: "Physical or topographic map",
            },
            { es: "Mapa político", en: "Political map" },
            { es: "Mapa demográfico", en: "Demographic map" },
            { es: "Mapa económico", en: "Economic map" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Mapa FÍSICO: relieve, ríos, montañas. Mapa POLÍTICO: fronteras, países, ciudades. Mapa TEMÁTICO: un tema específico.",
            en: "PHYSICAL map: relief, rivers, mountains. POLITICAL map: borders, countries, cities. THEMATIC map: a specific topic.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-19",
          type: "true-false",
          prompt: {
            es: "Los Sistemas de Información Geográfica (SIG) permiten analizar datos espaciales por computadora.",
            en: "Geographic Information Systems (GIS) allow analyzing spatial data by computer.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Los SIG integran mapas, bases de datos y análisis espacial con herramientas informáticas.",
            en: "TRUE. GIS integrate maps, databases, and spatial analysis with computer tools.",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-20",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué forma tiene la Tierra?",
            en: "What shape does Earth have?",
          },
          options: [
            {
              es: "Geoide (esfera achatada en los polos)",
              en: "Geoid (sphere flattened at the poles)",
            },
            { es: "Esfera perfecta", en: "Perfect sphere" },
            { es: "Cilindro", en: "Cylinder" },
            { es: "Cubo", en: "Cube" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Tierra es un GEOIDE: esfera ligeramente achatada en los polos y ensanchada en el Ecuador.",
            en: "Earth is a GEOID: a sphere slightly flattened at the poles and widened at the Equator.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-21",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son los movimientos principales de la Tierra?",
            en: "What are Earth's main movements?",
          },
          options: [
            {
              es: "Rotación (sobre su eje) y Traslación (alrededor del Sol)",
              en: "Rotation (on its axis) and Revolution (around the Sun)",
            },
            { es: "Oscilación y Vibración", en: "Oscillation and Vibration" },
            { es: "Solo rotación", en: "Only rotation" },
            {
              es: "Precesión y nutación únicamente",
              en: "Precession and nutation only",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ROTACIÓN: giro sobre su eje (24 h → día/noche). TRASLACIÓN: órbita alrededor del Sol (365.25 días → estaciones).",
            en: "ROTATION: spin on its axis (24 h → day/night). REVOLUTION: orbit around Sun (365.25 days → seasons).",
          },
          difficulty: 1,
        },
      ],
    },

    // ── LESSON 4: Evaluación (Quiz) ──
    {
      id: "earth-basis-quiz",
      topicId: "earth-basis",
      order: 4,
      title: {
        es: "Evaluación: La Tierra",
        en: "Assessment: The Earth",
      },
      description: {
        es: "Demuestra tu conocimiento sobre la Tierra y ubicación",
        en: "Demonstrate your knowledge about Earth and location",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "geo-eb-q01",
          type: "order-steps",
          prompt: {
            es: "Ordena los paralelos notables de norte a sur:",
            en: "Order the notable parallels from north to south:",
          },
          options: [
            {
              es: "Círculo Polar Ártico (66° 33' N)",
              en: "Arctic Circle (66° 33' N)",
            },
            {
              es: "Trópico de Cáncer (23° 26' N)",
              en: "Tropic of Cancer (23° 26' N)",
            },
            { es: "Ecuador (0°)", en: "Equator (0°)" },
            {
              es: "Trópico de Capricornio (23° 26' S)",
              en: "Tropic of Capricorn (23° 26' S)",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "De norte a sur: Círculo Polar Ártico → Trópico de Cáncer → Ecuador → Trópico de Capricornio → Círculo Polar Antártico.",
            en: "North to south: Arctic Circle → Tropic of Cancer → Equator → Tropic of Capricorn → Antarctic Circle.",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-q02",
          type: "multiple-choice",
          prompt: {
            es: "Si en Greenwich son las 12:00 PM, ¿qué hora es en una ciudad con longitud 90° O?",
            en: "If it's 12:00 PM in Greenwich, what time is it in a city at 90° W longitude?",
          },
          options: [
            { es: "6:00 AM (6 horas menos)", en: "6:00 AM (6 hours less)" },
            { es: "6:00 PM (6 horas más)", en: "6:00 PM (6 hours more)" },
            { es: "3:00 AM", en: "3:00 AM" },
            { es: "12:00 PM (igual)", en: "12:00 PM (same)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "90° O ÷ 15° = 6 husos al OESTE → 6 horas MENOS que Greenwich. 12:00 - 6 = 6:00 AM.",
            en: "90° W ÷ 15° = 6 zones WEST → 6 hours LESS than Greenwich. 12:00 - 6 = 6:00 AM.",
          },
          difficulty: 3,
        },
        {
          id: "geo-eb-q03",
          type: "true-false",
          prompt: {
            es: "El movimiento de traslación de la Tierra causa el día y la noche.",
            en: "Earth's revolution movement causes day and night.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. ROTACIÓN → día y noche. TRASLACIÓN → estaciones del año (por la inclinación del eje terrestre 23.5°).",
            en: "FALSE. ROTATION → day and night. REVOLUTION → seasons (due to Earth's axial tilt of 23.5°).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-q04",
          type: "fill-blank",
          prompt: {
            es: "Las coordenadas geográficas de un punto se expresan con _______ y longitud.",
            en: "The geographic coordinates of a point are expressed with _______ and longitude.",
          },
          correctAnswer: "latitud",
          explanation: {
            es: "Coordenadas geográficas = LATITUD (N/S respecto al Ecuador) + LONGITUD (E/O respecto a Greenwich).",
            en: "Geographic coordinates = LATITUDE (N/S from Equator) + LONGITUDE (E/W from Greenwich).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-q05",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué trópico pasa por el territorio mexicano?",
            en: "Which tropic passes through Mexican territory?",
          },
          options: [
            { es: "Trópico de Cáncer", en: "Tropic of Cancer" },
            { es: "Trópico de Capricornio", en: "Tropic of Capricorn" },
            { es: "Ecuador", en: "Equator" },
            { es: "Ninguno", en: "None" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El Trópico de CÁNCER (23° 26' N) cruza México por Baja California Sur, Sinaloa, Durango, Zacatecas, SLP, Tamaulipas.",
            en: "The Tropic of CANCER (23° 26' N) crosses Mexico through Baja California Sur, Sinaloa, Durango, Zacatecas, SLP, Tamaulipas.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-q06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué consecuencia geográfica tiene la inclinación del eje terrestre (23.5°)?",
            en: "What geographic consequence does Earth's axial tilt (23.5°) have?",
          },
          options: [
            { es: "Las estaciones del año", en: "The seasons" },
            { es: "El día y la noche", en: "Day and night" },
            { es: "Los tsunamis", en: "Tsunamis" },
            { es: "Los volcanes", en: "Volcanoes" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La inclinación de 23.5° del eje terrestre + traslación = diferente incidencia solar → ESTACIONES del año.",
            en: "The 23.5° axial tilt + revolution = different solar incidence → SEASONS.",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-q07",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la coordenada aproximada de la Ciudad de México?",
            en: "What are the approximate coordinates of Mexico City?",
          },
          options: [
            { es: "19° N, 99° O", en: "19° N, 99° W" },
            { es: "33° N, 117° O", en: "33° N, 117° W" },
            { es: "0° N, 78° O", en: "0° N, 78° W" },
            { es: "40° N, 74° O", en: "40° N, 74° W" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ciudad de México: ~19° N latitud, 99° O longitud. Está en el hemisferio norte y el hemisferio occidental.",
            en: "Mexico City: ~19° N latitude, 99° W longitude. It's in the northern and western hemispheres.",
          },
          difficulty: 2,
        },
        {
          id: "geo-eb-q08",
          type: "true-false",
          prompt: {
            es: "México se encuentra en el hemisferio norte y en el hemisferio occidental.",
            en: "Mexico is in the northern hemisphere and the western hemisphere.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. México: al NORTE del Ecuador (hemisferio norte) y al OESTE de Greenwich (hemisferio occidental).",
            en: "TRUE. Mexico: NORTH of Equator (northern hemisphere) and WEST of Greenwich (western hemisphere).",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-q09",
          type: "fill-blank",
          prompt: {
            es: "La Tierra tarda aproximadamente _______ horas en completar un giro de rotación.",
            en: "Earth takes approximately _______ hours to complete one rotation.",
          },
          correctAnswer: "24",
          explanation: {
            es: "ROTACIÓN: ~24 horas (día solar). La Tierra gira de OESTE a ESTE sobre su eje.",
            en: "ROTATION: ~24 hours (solar day). Earth spins from WEST to EAST on its axis.",
          },
          difficulty: 1,
        },
        {
          id: "geo-eb-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Por qué todas las proyecciones cartográficas tienen distorsiones?",
            en: "Why do all map projections have distortions?",
          },
          options: [
            {
              es: "Porque es imposible representar una esfera en un plano sin deformar algo",
              en: "Because it's impossible to represent a sphere on a plane without deforming something",
            },
            {
              es: "Porque los cartógrafos cometen errores",
              en: "Because cartographers make mistakes",
            },
            {
              es: "Porque la Tierra cambia de forma",
              en: "Because Earth changes shape",
            },
            {
              es: "Porque los satélites son imprecisos",
              en: "Because satellites are imprecise",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ninguna proyección es perfecta: al pasar de esfera (3D) a plano (2D) se distorsiona forma, área, distancia o dirección.",
            en: "No projection is perfect: going from sphere (3D) to plane (2D) distorts shape, area, distance, or direction.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
