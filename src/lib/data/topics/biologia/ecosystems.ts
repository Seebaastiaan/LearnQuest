import type { Topic } from "@/lib/types";

export const ecosystemsTopic: Topic = {
  id: "ecosystems",
  slug: "ecosistemas",
  title: {
    es: "Los seres vivos y su ambiente",
    en: "Living Beings and Their Environment",
  },
  description: {
    es: "Ecosistemas, ciclos biogeoquímicos y conservación",
    en: "Ecosystems, biogeochemical cycles, and conservation",
  },
  icon: "Leaf",
  color: "green",
  bgGradient: "bg-linear-to-br from-green-500 to-emerald-600",
  prerequisites: ["evolution"],
  order: 6,
  lessons: [
    // LESSON 1: Estructura de ecosistemas (Learn)
    {
      id: "ecosystem-structure-learn",
      topicId: "ecosystems",
      order: 1,
      title: {
        es: "Estructura de ecosistemas",
        en: "Ecosystem Structure",
      },
      description: {
        es: "Componentes bióticos y abióticos",
        en: "Biotic and abiotic components",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "eco-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es un ecosistema?",
            en: "What is an ecosystem?",
          },
          options: [
            {
              es: "Comunidad de organismos interactuando con su ambiente físico",
              en: "Community of organisms interacting with their physical environment",
            },
            {
              es: "Solo las plantas de un área",
              en: "Only the plants of an area",
            },
            {
              es: "Un tipo de célula",
              en: "A type of cell",
            },
            {
              es: "Una molécula orgánica",
              en: "An organic molecule",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ECOSISTEMA = factores BIÓTICOS (seres vivos) + ABIÓTICOS (agua, luz, temperatura) interactuando.",
            en: "ECOSYSTEM = BIOTIC factors (living beings) + ABIOTIC (water, light, temperature) interacting.",
          },
          difficulty: 1,
        },
        {
          id: "eco-02",
          type: "true-false",
          prompt: {
            es: "Los factores abióticos son los seres vivos de un ecosistema.",
            en: "Abiotic factors are the living beings of an ecosystem.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. BIÓTICOS = seres vivos (plantas, animales, bacterias). ABIÓTICOS = no vivos (luz, agua, suelo, temperatura).",
            en: "FALSE. BIOTIC = living beings (plants, animals, bacteria). ABIOTIC = non-living (light, water, soil, temperature).",
          },
          difficulty: 1,
        },
        {
          id: "eco-03",
          type: "fill-blank",
          prompt: {
            es: "Los organismos que producen su propio alimento mediante fotosíntesis se llaman _______.",
            en: "Organisms that produce their own food through photosynthesis are called _______.",
          },
          correctAnswer: "productores",
          explanation: {
            es: "PRODUCTORES (autótrofos): plantas y algas que hacen fotosíntesis. Base de cadenas alimentarias.",
            en: "PRODUCERS (autotrophs): plants and algae that photosynthesize. Base of food chains.",
          },
          difficulty: 1,
        },
        {
          id: "eco-04",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el rol de los descomponedores?",
            en: "What is the role of decomposers?",
          },
          options: [
            {
              es: "Reciclar nutrientes de materia orgánica muerta",
              en: "Recycle nutrients from dead organic matter",
            },
            {
              es: "Producir oxígeno",
              en: "Produce oxygen",
            },
            {
              es: "Cazar otros animales",
              en: "Hunt other animals",
            },
            {
              es: "Hacer fotosíntesis",
              en: "Photosynthesize",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "DESCOMPONEDORES (bacterias, hongos) descomponen materia muerta y liberan nutrientes al ecosistema.",
            en: "DECOMPOSERS (bacteria, fungi) break down dead matter and release nutrients into the ecosystem.",
          },
          difficulty: 1,
        },
        {
          id: "eco-05",
          type: "order-steps",
          prompt: {
            es: "Ordena los niveles tróficos de una cadena alimentaria:",
            en: "Order the trophic levels of a food chain:",
          },
          options: [
            { es: "Productores", en: "Producers" },
            { es: "Consumidores primarios", en: "Primary consumers" },
            { es: "Consumidores secundarios", en: "Secondary consumers" },
            { es: "Consumidores terciarios", en: "Tertiary consumers" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Flujo de energía: Productores → Herbívoros (1°) → Carnívoros (2°) → Depredadores tope (3°).",
            en: "Energy flow: Producers → Herbivores (1°) → Carnivores (2°) → Top predators (3°).",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 2: Dinámica de ecosistemas (Practice)
    {
      id: "ecosystem-dynamics-practice",
      topicId: "ecosystems",
      order: 2,
      title: {
        es: "Dinámica de ecosistemas",
        en: "Ecosystem Dynamics",
      },
      description: {
        es: "Flujo de energía y relaciones ecológicas",
        en: "Energy flow and ecological relationships",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "eco-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué establece la regla del 10% en las cadenas alimentarias?",
            en: "What does the 10% rule establish in food chains?",
          },
          options: [
            {
              es: "Solo ~10% de energía se transfiere al siguiente nivel trófico",
              en: "Only ~10% of energy transfers to the next trophic level",
            },
            {
              es: "10% de organismos sobreviven",
              en: "10% of organisms survive",
            },
            {
              es: "Se produce 10% más oxígeno",
              en: "10% more oxygen is produced",
            },
            {
              es: "10% del agua se evapora",
              en: "10% of water evaporates",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "REGLA DEL 10%: solo ~10% de energía pasa al siguiente nivel. El 90% se pierde como calor, respiración, etc.",
            en: "10% RULE: only ~10% of energy passes to next level. 90% is lost as heat, respiration, etc.",
          },
          difficulty: 2,
        },
        {
          id: "eco-07",
          type: "true-false",
          prompt: {
            es: "Una red alimentaria es más compleja que una cadena alimentaria simple.",
            en: "A food web is more complex than a simple food chain.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. CADENA: lineal (planta→herbívoro→carnívoro). RED: múltiples cadenas interconectadas (más realista).",
            en: "TRUE. CHAIN: linear (plant→herbivore→carnivore). WEB: multiple interconnected chains (more realistic).",
          },
          difficulty: 1,
        },
        {
          id: "eco-08",
          type: "fill-blank",
          prompt: {
            es: "El número total de organismos que un ambiente puede sostener se llama capacidad de _______.",
            en: "The total number of organisms an environment can sustain is called _______ capacity.",
          },
          correctAnswer: "carga",
          explanation: {
            es: "CAPACIDAD DE CARGA: máximo número de individuos que el ambiente puede mantener (limitado por recursos).",
            en: "CARRYING CAPACITY: maximum number of individuals the environment can maintain (limited by resources).",
          },
          difficulty: 2,
        },
        {
          id: "eco-09",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la simbiosis?",
            en: "What is symbiosis?",
          },
          options: [
            {
              es: "Relación estrecha entre dos especies diferentes",
              en: "Close relationship between two different species",
            },
            {
              es: "Competencia entre especies",
              en: "Competition between species",
            },
            {
              es: "Reproducción sexual",
              en: "Sexual reproduction",
            },
            {
              es: "Migración animal",
              en: "Animal migration",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "SIMBIOSIS: relación estrecha. Tipos: MUTUALISMO (+/+), COMENSALISMO (+/0), PARASITISMO (+/-).",
            en: "SYMBIOSIS: close relationship. Types: MUTUALISM (+/+), COMMENSALISM (+/0), PARASITISM (+/-).",
          },
          difficulty: 1,
        },
        {
          id: "eco-10",
          type: "multiple-choice",
          prompt: {
            es: "En el mutualismo, ¿cómo se benefician las especies?",
            en: "In mutualism, how do the species benefit?",
          },
          options: [
            { es: "Ambas se benefician", en: "Both benefit" },
            {
              es: "Una se beneficia, otra es neutral",
              en: "One benefits, other is neutral",
            },
            {
              es: "Una se beneficia, otra es perjudicada",
              en: "One benefits, other is harmed",
            },
            { es: "Ninguna se beneficia", en: "Neither benefits" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "MUTUALISMO: ambas especies se benefician (+/+). Ej: abejas y flores, líquenes (hongo + alga).",
            en: "MUTUALISM: both species benefit (+/+). Ex: bees and flowers, lichens (fungus + alga).",
          },
          difficulty: 1,
        },
        {
          id: "eco-11",
          type: "true-false",
          prompt: {
            es: "En el parasitismo, el parásito se beneficia mientras el hospedero es perjudicado.",
            en: "In parasitism, the parasite benefits while the host is harmed.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. PARASITISMO (+/-): parásito obtiene nutrientes del hospedero, causándole daño. Ej: garrapatas, tenias.",
            en: "TRUE. PARASITISM (+/-): parasite obtains nutrients from host, causing harm. Ex: ticks, tapeworms.",
          },
          difficulty: 1,
        },
        {
          id: "eco-12",
          type: "fill-blank",
          prompt: {
            es: "La relación donde un organismo caza y come a otro se llama _______.",
            en: "The relationship where one organism hunts and eats another is called _______.",
          },
          correctAnswer: "depredación",
          explanation: {
            es: "DEPREDACIÓN: depredador mata y consume presa. Control importante de poblaciones.",
            en: "PREDATION: predator kills and consumes prey. Important population control.",
          },
          difficulty: 1,
        },
        {
          id: "eco-13",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es un nicho ecológico?",
            en: "What is an ecological niche?",
          },
          options: [
            {
              es: "Rol funcional de una especie en su ecosistema",
              en: "Functional role of a species in its ecosystem",
            },
            {
              es: "Lugar físico donde vive",
              en: "Physical place where it lives",
            },
            {
              es: "Número de individuos",
              en: "Number of individuals",
            },
            {
              es: "Tamaño corporal",
              en: "Body size",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "NICHO: función/rol de especie (qué come, cuándo está activa, cómo interactúa). HÁBITAT: dónde vive.",
            en: "NICHE: function/role of species (what it eats, when active, how it interacts). HABITAT: where it lives.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 3: Ciclos biogeoquímicos (Practice)
    {
      id: "biogeochemical-cycles-practice",
      topicId: "ecosystems",
      order: 3,
      title: {
        es: "Ciclos biogeoquímicos",
        en: "Biogeochemical Cycles",
      },
      description: {
        es: "Ciclos del agua, carbono, nitrógeno y fósforo",
        en: "Water, carbon, nitrogen, and phosphorus cycles",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "eco-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son los procesos principales del ciclo del agua?",
            en: "What are the main processes of the water cycle?",
          },
          options: [
            {
              es: "Evaporación, condensación, precipitación",
              en: "Evaporation, condensation, precipitation",
            },
            {
              es: "Fotosíntesis y respiración",
              en: "Photosynthesis and respiration",
            },
            {
              es: "Digestión y absorción",
              en: "Digestion and absorption",
            },
            {
              es: "Mutación y selección",
              en: "Mutation and selection",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ciclo del AGUA: evaporación (líquido→gas) → condensación (gas→líquido, nubes) → precipitación (lluvia/nieve).",
            en: "WATER cycle: evaporation (liquid→gas) → condensation (gas→liquid, clouds) → precipitation (rain/snow).",
          },
          difficulty: 1,
        },
        {
          id: "eco-15",
          type: "true-false",
          prompt: {
            es: "La fotosíntesis elimina CO₂ de la atmósfera en el ciclo del carbono.",
            en: "Photosynthesis removes CO₂ from the atmosphere in the carbon cycle.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Fotosíntesis: CO₂ + H₂O → glucosa + O₂ (fija carbono). Respiración: proceso inverso (libera CO₂).",
            en: "TRUE. Photosynthesis: CO₂ + H₂O → glucose + O₂ (fixes carbon). Respiration: inverse process (releases CO₂).",
          },
          difficulty: 1,
        },
        {
          id: "eco-16",
          type: "fill-blank",
          prompt: {
            es: "Las bacterias _______ convierten nitrógeno atmosférico (N₂) en formas utilizables por las plantas.",
            en: "_______ bacteria convert atmospheric nitrogen (N₂) into forms usable by plants.",
          },
          correctAnswer: "fijadoras",
          explanation: {
            es: "Bacterias FIJADORAS (Rhizobium) convierten N₂ → NH₃/NH₄⁺ (amoníaco/amonio) en raíces de leguminosas.",
            en: "NITROGEN-FIXING bacteria (Rhizobium) convert N₂ → NH₃/NH₄⁺ (ammonia/ammonium) in legume roots.",
          },
          difficulty: 2,
        },
        {
          id: "eco-17",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué proceso del ciclo del nitrógeno convierte amonio en nitratos?",
            en: "What process of the nitrogen cycle converts ammonium to nitrates?",
          },
          options: [
            { es: "Nitrificación", en: "Nitrification" },
            { es: "Desnitrificación", en: "Denitrification" },
            { es: "Fijación", en: "Fixation" },
            { es: "Amonificación", en: "Ammonification" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "NITRIFICACIÓN: bacterias convierten NH₄⁺ (amonio) → NO₂⁻ (nitrito) → NO₃⁻ (nitrato, usado por plantas).",
            en: "NITRIFICATION: bacteria convert NH₄⁺ (ammonium) → NO₂⁻ (nitrite) → NO₃⁻ (nitrate, used by plants).",
          },
          difficulty: 2,
        },
        {
          id: "eco-18",
          type: "order-steps",
          prompt: {
            es: "Ordena las etapas del ciclo del carbono:",
            en: "Order the stages of the carbon cycle:",
          },
          options: [
            {
              es: "Fotosíntesis (CO₂ → glucosa)",
              en: "Photosynthesis (CO₂ → glucose)",
            },
            {
              es: "Consumo por herbívoros",
              en: "Consumption by herbivores",
            },
            {
              es: "Respiración celular (glucosa → CO₂)",
              en: "Cellular respiration (glucose → CO₂)",
            },
            {
              es: "Descomposición (libera CO₂)",
              en: "Decomposition (releases CO₂)",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Carbono fluye: atmósfera → productores → consumidores → descomponedores → atmósfera (ciclo completo).",
            en: "Carbon flows: atmosphere → producers → consumers → decomposers → atmosphere (complete cycle).",
          },
          difficulty: 2,
        },
        {
          id: "eco-19",
          type: "true-false",
          prompt: {
            es: "El fósforo NO tiene fase gaseosa significativa en su ciclo biogeoquímico.",
            en: "Phosphorus does NOT have a significant gaseous phase in its biogeochemical cycle.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Ciclo del FÓSFORO es principalmente en rocas, suelo, agua (no atmosférico). Limitante en ecosistemas acuáticos.",
            en: "TRUE. PHOSPHORUS cycle is mainly in rocks, soil, water (not atmospheric). Limiting in aquatic ecosystems.",
          },
          difficulty: 2,
        },
        {
          id: "eco-20",
          type: "fill-blank",
          prompt: {
            es: "La quema de combustibles fósiles libera grandes cantidades de _______ a la atmósfera.",
            en: "Burning fossil fuels releases large amounts of _______ into the atmosphere.",
          },
          correctAnswer: "CO₂",
          explanation: {
            es: "Combustibles fósiles (carbón, petróleo): carbono almacenado. Al quemarlos → CO₂ atmosférico → efecto invernadero.",
            en: "Fossil fuels (coal, oil): stored carbon. When burned → atmospheric CO₂ → greenhouse effect.",
          },
          difficulty: 1,
        },
        {
          id: "eco-21",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué rol tienen las bacterias desnitrificantes?",
            en: "What role do denitrifying bacteria have?",
          },
          options: [
            {
              es: "Convierten nitratos en N₂ gaseoso",
              en: "Convert nitrates to N₂ gas",
            },
            {
              es: "Fijan nitrógeno atmosférico",
              en: "Fix atmospheric nitrogen",
            },
            {
              es: "Producen oxígeno",
              en: "Produce oxygen",
            },
            {
              es: "Aumentan la acidez del suelo",
              en: "Increase soil acidity",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "DESNITRIFICACIÓN: bacterias anaerobias convierten NO₃⁻ → N₂, regresando nitrógeno a la atmósfera (cierra ciclo).",
            en: "DENITRIFICATION: anaerobic bacteria convert NO₃⁻ → N₂, returning nitrogen to atmosphere (closes cycle).",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 4: Evaluación de ecosistemas (Quiz)
    {
      id: "ecosystems-quiz",
      topicId: "ecosystems",
      order: 4,
      title: {
        es: "Evaluación: Ecosistemas y ambiente",
        en: "Assessment: Ecosystems and Environment",
      },
      description: {
        es: "Demuestra tu conocimiento sobre ecología",
        en: "Demonstrate your knowledge about ecology",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "eco-q01",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál NO es un factor abiótico?",
            en: "Which is NOT an abiotic factor?",
          },
          options: [
            { es: "Bacterias", en: "Bacteria" },
            { es: "Temperatura", en: "Temperature" },
            { es: "Luz solar", en: "Sunlight" },
            { es: "pH del suelo", en: "Soil pH" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "BACTERIAS son factor BIÓTICO (vivo). Abióticos: temperatura, luz, agua, pH, minerales, viento.",
            en: "BACTERIA are a BIOTIC factor (living). Abiotic: temperature, light, water, pH, minerals, wind.",
          },
          difficulty: 1,
        },
        {
          id: "eco-q02",
          type: "order-steps",
          prompt: {
            es: "Ordena los niveles de organización ecológica de menor a mayor:",
            en: "Order the levels of ecological organization from smallest to largest:",
          },
          options: [
            { es: "Organismo", en: "Organism" },
            { es: "Población", en: "Population" },
            { es: "Comunidad", en: "Community" },
            { es: "Ecosistema", en: "Ecosystem" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Organismo → Población (misma especie) → Comunidad (varias especies) → Ecosistema (comunidad + abiótico) → Bioma → Biosfera.",
            en: "Organism → Population (same species) → Community (multiple species) → Ecosystem (community + abiotic) → Biome → Biosphere.",
          },
          difficulty: 2,
        },
        {
          id: "eco-q03",
          type: "true-false",
          prompt: {
            es: "Los herbívoros son consumidores primarios.",
            en: "Herbivores are primary consumers.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Productores → Consumidores PRIMARIOS (herbívoros) → Secundarios (carnívoros) → Terciarios (tope).",
            en: "TRUE. Producers → PRIMARY consumers (herbivores) → Secondary (carnivores) → Tertiary (top).",
          },
          difficulty: 1,
        },
        {
          id: "eco-q04",
          type: "fill-blank",
          prompt: {
            es: "El proceso donde bacterias convierten materia orgánica muerta en nutrientes simples se llama _______.",
            en: "The process where bacteria convert dead organic matter into simple nutrients is called _______.",
          },
          correctAnswer: "descomposición",
          explanation: {
            es: "DESCOMPOSICIÓN: bacterias y hongos degradan materia orgánica → nutrientes inorgánicos (reciclaje).",
            en: "DECOMPOSITION: bacteria and fungi break down organic matter → inorganic nutrients (recycling).",
          },
          difficulty: 1,
        },
        {
          id: "eco-q05",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué gases son principales responsables del efecto invernadero?",
            en: "What gases are mainly responsible for the greenhouse effect?",
          },
          options: [
            {
              es: "CO₂, metano (CH₄), óxido nitroso (N₂O)",
              en: "CO₂, methane (CH₄), nitrous oxide (N₂O)",
            },
            {
              es: "Oxígeno y nitrógeno",
              en: "Oxygen and nitrogen",
            },
            {
              es: "Helio y neón",
              en: "Helium and neon",
            },
            {
              es: "Solo ozono",
              en: "Only ozone",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Gases de EFECTO INVERNADERO: CO₂ (principal), CH₄, N₂O, vapor de agua. Atrapan calor → calentamiento global.",
            en: "GREENHOUSE gases: CO₂ (main), CH₄, N₂O, water vapor. Trap heat → global warming.",
          },
          difficulty: 1,
        },
        {
          id: "eco-q06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la eutrofización?",
            en: "What is eutrophication?",
          },
          options: [
            {
              es: "Enriquecimiento excesivo de nutrientes en agua",
              en: "Excessive nutrient enrichment in water",
            },
            {
              es: "Falta de oxígeno en montañas",
              en: "Lack of oxygen in mountains",
            },
            {
              es: "Aumento de biodiversidad",
              en: "Increase in biodiversity",
            },
            {
              es: "Sequía prolongada",
              en: "Prolonged drought",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "EUTROFIZACIÓN: exceso N y P en agua → proliferación de algas → muerte y descomposición → hipoxia (zona muerta).",
            en: "EUTROPHICATION: excess N and P in water → algae bloom → death and decomposition → hypoxia (dead zone).",
          },
          difficulty: 2,
        },
        {
          id: "eco-q07",
          type: "true-false",
          prompt: {
            es: "La deforestación contribuye al aumento de CO₂ atmosférico.",
            en: "Deforestation contributes to increased atmospheric CO₂.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Deforestación: elimina árboles que absorben CO₂ + libera CO₂al quemar/descomponer → cambio climático.",
            en: "TRUE. Deforestation: removes trees that absorb CO₂ + releases CO₂ when burning/decomposing → climate change.",
          },
          difficulty: 1,
        },
        {
          id: "eco-q08",
          type: "fill-blank",
          prompt: {
            es: "La reducción permanente en el número de especies se llama pérdida de _______.",
            en: "The permanent reduction in the number of species is called loss of _______.",
          },
          correctAnswer: "biodiversidad",
          explanation: {
            es: "Pérdida de BIODIVERSIDAD: extinción de especies, reducción genética. Causas: deforestación, contaminación, cambio climático.",
            en: "Loss of BIODIVERSITY: species extinction, genetic reduction. Causes: deforestation, pollution, climate change.",
          },
          difficulty: 1,
        },
        {
          id: "eco-q09",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es una estrategia de conservación de ecosistemas?",
            en: "What is an ecosystem conservation strategy?",
          },
          options: [
            {
              es: "Establecer áreas naturales protegidas",
              en: "Establish protected natural areas",
            },
            {
              es: "Aumentar uso de pesticidas",
              en: "Increase pesticide use",
            },
            {
              es: "Talar más bosques",
              en: "Cut down more forests",
            },
            {
              es: "Eliminar depredadores",
              en: "Eliminate predators",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Conservación: áreas protegidas, restauración, uso sostenible, reducir contaminación, combatir cambio climático.",
            en: "Conservation: protected areas, restoration, sustainable use, reduce pollution, combat climate change.",
          },
          difficulty: 1,
        },
        {
          id: "eco-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es el desarrollo sostenible?",
            en: "What is sustainable development?",
          },
          options: [
            {
              es: "Satisfacer necesidades actuales sin comprometer futuras generaciones",
              en: "Meet current needs without compromising future generations",
            },
            {
              es: "Explotar todos los recursos rápidamente",
              en: "Exploit all resources quickly",
            },
            {
              es: "Detener todo desarrollo humano",
              en: "Stop all human development",
            },
            {
              es: "Usar solo energía nuclear",
              en: "Use only nuclear energy",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Desarrollo SOSTENIBLE: equilibrio entre necesidades humanas, economía y conservación ambiental a largo plazo.",
            en: "SUSTAINABLE development: balance between human needs, economy, and long-term environmental conservation.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
