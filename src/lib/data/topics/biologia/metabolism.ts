import type { Topic } from "@/lib/types";

export const metabolismTopic: Topic = {
  id: "metabolism",
  slug: "metabolismo",
  title: {
    es: "Metabolismo celular",
    en: "Cellular Metabolism",
  },
  description: {
    es: "Anabolismo, catabolismo, fotosíntesis y respiración",
    en: "Anabolism, catabolism, photosynthesis and respiration",
  },
  icon: "Zap",
  color: "amber",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  prerequisites: ["cell"],
  order: 2,
  lessons: [
    // LESSON 1: Anabolismo y catabolismo (Learn)
    {
      id: "metabolism-basics-learn",
      topicId: "metabolism",
      order: 1,
      title: {
        es: "Anabolismo y catabolismo",
        en: "Anabolism and Catabolism",
      },
      description: {
        es: "Comprende los procesos metabólicos básicos",
        en: "Understand basic metabolic processes",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "meta-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es el metabolismo?",
            en: "What is metabolism?",
          },
          options: [
            {
              es: "Conjunto de reacciones químicas en los seres vivos",
              en: "Set of chemical reactions in living beings",
            },
            {
              es: "Solo la producción de energía",
              en: "Only energy production",
            },
            {
              es: "La respiración celular",
              en: "Cellular respiration",
            },
            {
              es: "La digestión de alimentos",
              en: "Food digestion",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El metabolismo incluye TODAS las reacciones químicas que ocurren en un organismo vivo.",
            en: "Metabolism includes ALL chemical reactions that occur in a living organism.",
          },
          difficulty: 1,
        },
        {
          id: "meta-02",
          type: "true-false",
          prompt: {
            es: "El anabolismo es un proceso que libera energía.",
            en: "Anabolism is a process that releases energy.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. El anabolismo REQUIERE energía (es endergónico) para construir moléculas complejas.",
            en: "FALSE. Anabolism REQUIRES energy (is endergonic) to build complex molecules.",
          },
          difficulty: 1,
        },
        {
          id: "meta-03",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de estos es un proceso catabólico?",
            en: "Which of these is a catabolic process?",
          },
          options: [
            {
              es: "Degradación de glucosa",
              en: "Glucose breakdown",
            },
            {
              es: "Síntesis de proteínas",
              en: "Protein synthesis",
            },
            {
              es: "Formación de ADN",
              en: "DNA formation",
            },
            {
              es: "Construcción de lípidos",
              en: "Lipid construction",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El catabolismo DEGRADA moléculas complejas liberando energía. La glucólisis es catabólica.",
            en: "Catabolism BREAKS DOWN complex molecules releasing energy. Glycolysis is catabolic.",
          },
          difficulty: 1,
        },
        {
          id: "meta-04",
          type: "fill-blank",
          prompt: {
            es: "La molécula que almacena energía en enlaces de alta energía es el _______.",
            en: "The molecule that stores energy in high-energy bonds is _______.",
          },
          correctAnswer: "ATP",
          explanation: {
            es: "El ATP (adenosín trifosfato) es la 'moneda energética' de la célula.",
            en: "ATP (adenosine triphosphate) is the 'energy currency' of the cell.",
          },
          difficulty: 1,
        },
        {
          id: "meta-05",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál afirmación es correcta sobre los procesos metabólicos?",
            en: "Which statement is correct about metabolic processes?",
          },
          options: [
            {
              es: "Anabolismo construye, catabolismo degrada",
              en: "Anabolism builds, catabolism breaks down",
            },
            {
              es: "Ambos liberan energía",
              en: "Both release energy",
            },
            {
              es: "Ambos requieren energía",
              en: "Both require energy",
            },
            {
              es: "Son procesos independientes",
              en: "They are independent processes",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El anabolismo CONSTRUYE moléculas (requiere ATP), el catabolismo las DEGRADA (libera ATP).",
            en: "Anabolism BUILDS molecules (requires ATP), catabolism BREAKS them down (releases ATP).",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 2: Fotosíntesis (Practice)
    {
      id: "photosynthesis-practice",
      topicId: "metabolism",
      order: 2,
      title: {
        es: "Fotosíntesis",
        en: "Photosynthesis",
      },
      description: {
        es: "El proceso de captura de energía solar",
        en: "The process of capturing solar energy",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "meta-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la ecuación general de la fotosíntesis?",
            en: "What is the general equation of photosynthesis?",
          },
          options: [
            {
              es: "6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂",
              en: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
            },
            {
              es: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
              en: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
            },
            {
              es: "CO₂ + H₂O → glucosa",
              en: "CO₂ + H₂O → glucose",
            },
            {
              es: "Glucosa → ATP + CO₂",
              en: "Glucose → ATP + CO₂",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La fotosíntesis convierte CO₂ y H₂O en glucosa (C₆H₁₂O₆) y O₂ usando energía lumínica.",
            en: "Photosynthesis converts CO₂ and H₂O into glucose (C₆H₁₂O₆) and O₂ using light energy.",
          },
          difficulty: 2,
        },
        {
          id: "meta-07",
          type: "true-false",
          prompt: {
            es: "La fotosíntesis es un proceso anabólico.",
            en: "Photosynthesis is an anabolic process.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. La fotosíntesis CONSTRUYE glucosa a partir de moléculas simples (CO₂ y H₂O).",
            en: "TRUE. Photosynthesis BUILDS glucose from simple molecules (CO₂ and H₂O).",
          },
          difficulty: 1,
        },
        {
          id: "meta-08",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué organelo ocurre la fotosíntesis?",
            en: "In which organelle does photosynthesis occur?",
          },
          options: [
            { es: "Cloroplasto", en: "Chloroplast" },
            { es: "Mitocondria", en: "Mitochondria" },
            { es: "Núcleo", en: "Nucleus" },
            { es: "Ribosoma", en: "Ribosome" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los cloroplastos contienen clorofila y son el sitio de la fotosíntesis.",
            en: "Chloroplasts contain chlorophyll and are the site of photosynthesis.",
          },
          difficulty: 1,
        },
        {
          id: "meta-09",
          type: "fill-blank",
          prompt: {
            es: "El pigmento verde que captura la luz en la fotosíntesis se llama _______.",
            en: "The green pigment that captures light in photosynthesis is called _______.",
          },
          correctAnswer: "clorofila",
          explanation: {
            es: "La CLOROFILA absorbe luz roja y azul, reflejando el verde.",
            en: "CHLOROPHYLL absorbs red and blue light, reflecting green.",
          },
          difficulty: 1,
        },
        {
          id: "meta-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las dos fases principales de la fotosíntesis?",
            en: "What are the two main phases of photosynthesis?",
          },
          options: [
            {
              es: "Fase lumínica (clara) y fase oscura (Calvin)",
              en: "Light phase (light) and dark phase (Calvin)",
            },
            {
              es: "Glucólisis y ciclo de Krebs",
              en: "Glycolysis and Krebs cycle",
            },
            {
              es: "Anabolismo y catabolismo",
              en: "Anabolism and catabolism",
            },
            {
              es: "Absorción y digestión",
              en: "Absorption and digestion",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Fase lumínica (tilacoides): captura luz, produce ATP y NADPH. Fase oscura (estroma): fija CO₂.",
            en: "Light phase (thylakoids): captures light, produces ATP and NADPH. Dark phase (stroma): fixes CO₂.",
          },
          difficulty: 2,
        },
        {
          id: "meta-11",
          type: "true-false",
          prompt: {
            es: "La fase oscura de la fotosíntesis solo ocurre de noche.",
            en: "The dark phase of photosynthesis only occurs at night.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. Se llama 'oscura' porque no requiere luz directamente, pero ocurre de día usando productos de la fase lumínica.",
            en: "FALSE. It's called 'dark' because it doesn't directly require light, but it occurs during the day using products from the light phase.",
          },
          difficulty: 2,
        },
        {
          id: "meta-12",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué se produce en la fase lumínica de la fotosíntesis?",
            en: "What is produced in the light phase of photosynthesis?",
          },
          options: [
            {
              es: "ATP, NADPH y O₂",
              en: "ATP, NADPH and O₂",
            },
            {
              es: "Glucosa y agua",
              en: "Glucose and water",
            },
            {
              es: "CO₂ y H₂O",
              en: "CO₂ and H₂O",
            },
            {
              es: "Solo oxígeno",
              en: "Only oxygen",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La fase lumínica produce ATP (energía), NADPH (poder reductor) y O₂ (subproducto de la fotólisis del agua).",
            en: "The light phase produces ATP (energy), NADPH (reducing power), and O₂ (byproduct of water photolysis).",
          },
          difficulty: 2,
        },
        {
          id: "meta-13",
          type: "fill-blank",
          prompt: {
            es: "El ciclo de _______ es la fase oscura donde se fija el CO₂.",
            en: "The _______ cycle is the dark phase where CO₂ is fixed.",
          },
          correctAnswer: "Calvin",
          explanation: {
            es: "El ciclo de CALVIN (o ciclo de Calvin-Benson) fija CO₂ atmosférico para formar glucosa.",
            en: "The CALVIN cycle (or Calvin-Benson cycle) fixes atmospheric CO₂ to form glucose.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 3: Respiración anaerobia y aerobia (Practice)
    {
      id: "respiration-practice",
      topicId: "metabolism",
      order: 3,
      title: {
        es: "Respiración celular",
        en: "Cellular Respiration",
      },
      description: {
        es: "Respiración anaerobia y aerobia",
        en: "Anaerobic and aerobic respiration",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "meta-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la ecuación de la respiración celular aerobia?",
            en: "What is the equation for aerobic cellular respiration?",
          },
          options: [
            {
              es: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
              en: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
            },
            {
              es: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
              en: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
            },
            {
              es: "Glucosa → ácido láctico + ATP",
              en: "Glucose → lactic acid + ATP",
            },
            {
              es: "ATP → ADP + energía",
              en: "ATP → ADP + energy",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La respiración aerobia degrada glucosa con O₂ para producir CO₂, H₂O y ~36-38 ATP.",
            en: "Aerobic respiration breaks down glucose with O₂ to produce CO₂, H₂O and ~36-38 ATP.",
          },
          difficulty: 2,
        },
        {
          id: "meta-15",
          type: "true-false",
          prompt: {
            es: "La respiración celular es un proceso catabólico.",
            en: "Cellular respiration is a catabolic process.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. La respiración DEGRADA glucosa para liberar energía (ATP).",
            en: "TRUE. Respiration BREAKS DOWN glucose to release energy (ATP).",
          },
          difficulty: 1,
        },
        {
          id: "meta-16",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la diferencia principal entre respiración aerobia y anaerobia?",
            en: "What is the main difference between aerobic and anaerobic respiration?",
          },
          options: [
            {
              es: "La aerobia requiere oxígeno",
              en: "Aerobic requires oxygen",
            },
            {
              es: "La anaerobia produce más ATP",
              en: "Anaerobic produces more ATP",
            },
            {
              es: "La aerobia ocurre en el citoplasma",
              en: "Aerobic occurs in cytoplasm",
            },
            {
              es: "Son idénticas",
              en: "They are identical",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Respiración AEROBIA usa O₂ (produce ~36-38 ATP). ANAEROBIA no usa O₂ (produce ~2 ATP).",
            en: "AEROBIC respiration uses O₂ (produces ~36-38 ATP). ANAEROBIC doesn't use O₂ (produces ~2 ATP).",
          },
          difficulty: 1,
        },
        {
          id: "meta-17",
          type: "fill-blank",
          prompt: {
            es: "La glucólisis ocurre en el _______ y produce 2 ATP.",
            en: "Glycolysis occurs in the _______ and produces 2 ATP.",
          },
          correctAnswer: "citoplasma",
          explanation: {
            es: "La glucólisis ocurre en el CITOPLASMA, degradando glucosa en 2 piruvatos + 2 ATP.",
            en: "Glycolysis occurs in the CYTOPLASM, breaking glucose into 2 pyruvates + 2 ATP.",
          },
          difficulty: 2,
        },
        {
          id: "meta-18",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué etapas forman la respiración aerobia?",
            en: "What stages form aerobic respiration?",
          },
          options: [
            {
              es: "Glucólisis, ciclo de Krebs, cadena de transporte",
              en: "Glycolysis, Krebs cycle, transport chain",
            },
            {
              es: "Solo fermentación",
              en: "Only fermentation",
            },
            {
              es: "Fotosíntesis y respiración",
              en: "Photosynthesis and respiration",
            },
            {
              es: "Anabolismo y catabolismo",
              en: "Anabolism and catabolism",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Respiración aerobia: 1) Glucólisis (citoplasma), 2) Ciclo de Krebs (matriz mitocondrial), 3) Cadena transportadora (crestas).",
            en: "Aerobic respiration: 1) Glycolysis (cytoplasm), 2) Krebs cycle (mitochondrial matrix), 3) Transport chain (cristae).",
          },
          difficulty: 2,
        },
        {
          id: "meta-19",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de fermentación ocurre en músculos durante ejercicio intenso?",
            en: "What type of fermentation occurs in muscles during intense exercise?",
          },
          options: [
            {
              es: "Fermentación láctica",
              en: "Lactic fermentation",
            },
            {
              es: "Fermentación alcohólica",
              en: "Alcoholic fermentation",
            },
            {
              es: "Ninguna, solo aerobia",
              en: "None, only aerobic",
            },
            {
              es: "Fotosíntesis",
              en: "Photosynthesis",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Sin suficiente O₂, los músculos realizan fermentación LÁCTICA (piruvato → ácido láctico + 2 ATP).",
            en: "Without enough O₂, muscles perform LACTIC fermentation (pyruvate → lactic acid + 2 ATP).",
          },
          difficulty: 2,
        },
        {
          id: "meta-20",
          type: "true-false",
          prompt: {
            es: "La fermentación alcohólica produce etanol y CO₂.",
            en: "Alcoholic fermentation produces ethanol and CO₂.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Levaduras realizan fermentación alcohólica: glucosa → etanol + CO₂ + 2 ATP.",
            en: "TRUE. Yeasts perform alcoholic fermentation: glucose → ethanol + CO₂ + 2 ATP.",
          },
          difficulty: 1,
        },
        {
          id: "meta-21",
          type: "fill-blank",
          prompt: {
            es: "El ciclo de Krebs ocurre en la _______ mitocondrial.",
            en: "The Krebs cycle occurs in the mitochondrial _______.",
          },
          correctAnswer: "matriz",
          explanation: {
            es: "El ciclo de Krebs (o del ácido cítrico) ocurre en la MATRIZ mitocondrial.",
            en: "The Krebs cycle (or citric acid cycle) occurs in the mitochondrial MATRIX.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 4: Evaluación de metabolismo (Quiz)
    {
      id: "metabolism-quiz",
      topicId: "metabolism",
      order: 4,
      title: {
        es: "Evaluación: Metabolismo",
        en: "Assessment: Metabolism",
      },
      description: {
        es: "Demuestra tu conocimiento sobre metabolismo celular",
        en: "Demonstrate your knowledge about cellular metabolism",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "meta-q01",
          type: "order-steps",
          prompt: {
            es: "Ordena las etapas de la respiración aerobia:",
            en: "Order the stages of aerobic respiration:",
          },
          options: [
            {
              es: "Glucólisis (citoplasma)",
              en: "Glycolysis (cytoplasm)",
            },
            {
              es: "Formación de Acetil-CoA",
              en: "Acetyl-CoA formation",
            },
            {
              es: "Ciclo de Krebs (matriz)",
              en: "Krebs cycle (matrix)",
            },
            {
              es: "Cadena transportadora (crestas)",
              en: "Transport chain (cristae)",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Orden: Glucólisis → Acetil-CoA → Krebs → Cadena transportadora de electrones.",
            en: "Order: Glycolysis → Acetyl-CoA → Krebs → Electron transport chain.",
          },
          difficulty: 3,
        },
        {
          id: "meta-q02",
          type: "multiple-choice",
          prompt: {
            es: "¿Aproximadamente cuántas moléculas de ATP produce la respiración aerobia completa?",
            en: "Approximately how many ATP molecules does complete aerobic respiration produce?",
          },
          options: [
            { es: "36-38 ATP", en: "36-38 ATP" },
            { es: "2 ATP", en: "2 ATP" },
            { es: "100 ATP", en: "100 ATP" },
            { es: "10 ATP", en: "10 ATP" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Glucólisis (2) + Krebs (2) + Cadena transport (32-34) = ~36-38 ATP total.",
            en: "Glycolysis (2) + Krebs (2) + Transport chain (32-34) = ~36-38 ATP total.",
          },
          difficulty: 2,
        },
        {
          id: "meta-q03",
          type: "true-false",
          prompt: {
            es: "La fotosíntesis y la respiración celular son procesos inversos.",
            en: "Photosynthesis and cellular respiration are inverse processes.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Fotosíntesis: CO₂+H₂O→glucosa+O₂. Respiración: glucosa+O₂→CO₂+H₂O+ATP.",
            en: "TRUE. Photosynthesis: CO₂+H₂O→glucose+O₂. Respiration: glucose+O₂→CO₂+H₂O+ATP.",
          },
          difficulty: 2,
        },
        {
          id: "meta-q04",
          type: "multiple-choice",
          prompt: {
            es: "¿Dónde se produce la mayor cantidad de ATP en la respiración aerobia?",
            en: "Where is most ATP produced in aerobic respiration?",
          },
          options: [
            {
              es: "Cadena transportadora de electrones",
              en: "Electron transport chain",
            },
            { es: "Glucólisis", en: "Glycolysis" },
            { es: "Ciclo de Krebs", en: "Krebs cycle" },
            { es: "Fermentación", en: "Fermentation" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La cadena transportadora produce ~32-34 ATP (de ~36-38 total), la mayoría del ATP.",
            en: "The transport chain produces ~32-34 ATP (of ~36-38 total), most of the ATP.",
          },
          difficulty: 2,
        },
        {
          id: "meta-q05",
          type: "fill-blank",
          prompt: {
            es: "El producto de la glucólisis que entra al ciclo de Krebs es el _______.",
            en: "The product of glycolysis that enters the Krebs cycle is _______.",
          },
          correctAnswer: "piruvato",
          explanation: {
            es: "El PIRUVATO (2 moléculas) se convierte en Acetil-CoA antes de entrar al ciclo de Krebs.",
            en: "PYRUVATE (2 molecules) is converted to Acetyl-CoA before entering the Krebs cycle.",
          },
          difficulty: 2,
        },
        {
          id: "meta-q06",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál proceso NO requiere oxígeno?",
            en: "Which process does NOT require oxygen?",
          },
          options: [
            { es: "Fermentación", en: "Fermentation" },
            { es: "Cadena transportadora", en: "Transport chain" },
            { es: "Ciclo de Krebs completo", en: "Complete Krebs cycle" },
            { es: "Respiración aerobia", en: "Aerobic respiration" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La fermentación es anaeróbica (sin O₂). Solo produce 2 ATP vs ~36-38 de aerobia.",
            en: "Fermentation is anaerobic (without O₂). Only produces 2 ATP vs ~36-38 from aerobic.",
          },
          difficulty: 2,
        },
        {
          id: "meta-q07",
          type: "true-false",
          prompt: {
            es: "Los organismos autótrofos pueden realizar fotosíntesis.",
            en: "Autotrophic organisms can perform photosynthesis.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Los AUTÓTROFOS (plantas, algas) producen su propio alimento mediante fotosíntesis.",
            en: "TRUE. AUTOTROPHS (plants, algae) produce their own food through photosynthesis.",
          },
          difficulty: 1,
        },
        {
          id: "meta-q08",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué molécula transporta electrones de alta energía al ciclo de Krebs?",
            en: "Which molecule carries high-energy electrons to the Krebs cycle?",
          },
          options: [
            { es: "NADH", en: "NADH" },
            { es: "H₂O", en: "H₂O" },
            { es: "CO₂", en: "CO₂" },
            { es: "O₂", en: "O₂" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "NADH (y FADH₂) transportan electrones de la glucólisis y Krebs a la cadena transportadora.",
            en: "NADH (and FADH₂) carry electrons from glycolysis and Krebs to the transport chain.",
          },
          difficulty: 2,
        },
        {
          id: "meta-q09",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el aceptor final de electrones en la respiración aerobia?",
            en: "What is the final electron acceptor in aerobic respiration?",
          },
          options: [
            { es: "Oxígeno (O₂)", en: "Oxygen (O₂)" },
            { es: "Agua (H₂O)", en: "Water (H₂O)" },
            { es: "CO₂", en: "CO₂" },
            { es: "ATP", en: "ATP" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El O₂ es el aceptor final de electrones, formando H₂O al final de la cadena transportadora.",
            en: "O₂ is the final electron acceptor, forming H₂O at the end of the transport chain.",
          },
          difficulty: 2,
        },
        {
          id: "meta-q10",
          type: "fill-blank",
          prompt: {
            es: "Los organismos que NO pueden producir su propio alimento se llaman _______.",
            en: "Organisms that CANNOT produce their own food are called _______.",
          },
          correctAnswer: "heterótrofos",
          explanation: {
            es: "Los HETERÓTROFOS (animales, hongos) deben consumir otros organismos para obtener energía.",
            en: "HETEROTROPHS (animals, fungi) must consume other organisms to obtain energy.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
