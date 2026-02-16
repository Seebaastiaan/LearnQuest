import type { Topic } from "@/lib/types";

export const cellTopic: Topic = {
  id: "cell",
  slug: "celula",
  title: {
    es: "Célula",
    en: "Cell",
  },
  description: {
    es: "Teoría celular y estructura de la célula",
    en: "Cell theory and cell structure",
  },
  icon: "CircleDot",
  color: "emerald",
  bgGradient: "bg-linear-to-br from-emerald-500 to-green-600",
  prerequisites: [],
  order: 1,
  lessons: [
    // LESSON 1: Teoría celular (Learn)
    {
      id: "cell-theory-learn",
      topicId: "cell",
      order: 1,
      title: {
        es: "Teoría celular",
        en: "Cell Theory",
      },
      description: {
        es: "Descubre los postulados de la teoría celular",
        en: "Discover the postulates of cell theory",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "cell-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Quién fue el primero en observar células usando un microscopio en 1665?",
            en: "Who was the first to observe cells using a microscope in 1665?",
          },
          options: [
            { es: "Robert Hooke", en: "Robert Hooke" },
            { es: "Anton van Leeuwenhoek", en: "Anton van Leeuwenhoek" },
            { es: "Matthias Schleiden", en: "Matthias Schleiden" },
            { es: "Theodor Schwann", en: "Theodor Schwann" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Robert Hooke observó células de corcho en 1665 y acuñó el término 'célula' (cellula).",
            en: "Robert Hooke observed cork cells in 1665 and coined the term 'cell' (cellula).",
          },
          difficulty: 1,
          hints: [
            {
              es: "Este científico inglés observó células muertas en corcho.",
              en: "This English scientist observed dead cells in cork.",
            },
          ],
        },
        {
          id: "cell-02",
          type: "true-false",
          prompt: {
            es: "Según la teoría celular, todas las células provienen de células preexistentes.",
            en: "According to cell theory, all cells come from pre-existing cells.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Este es el tercer postulado de la teoría celular, propuesto por Rudolf Virchow (omnis cellula e cellula).",
            en: "Correct. This is the third postulate of cell theory, proposed by Rudolf Virchow (omnis cellula e cellula).",
          },
          difficulty: 1,
        },
        {
          id: "cell-03",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes NO es un postulado de la teoría celular?",
            en: "Which of the following is NOT a postulate of cell theory?",
          },
          options: [
            {
              es: "Todos los seres vivos están formados por células",
              en: "All living things are made of cells",
            },
            {
              es: "La célula es la unidad básica de vida",
              en: "The cell is the basic unit of life",
            },
            {
              es: "Todas las células tienen núcleo",
              en: "All cells have a nucleus",
            },
            {
              es: "Todas las células provienen de células preexistentes",
              en: "All cells come from pre-existing cells",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "NO todas las células tienen núcleo. Las células procariotas (bacterias) no tienen núcleo definido.",
            en: "NOT all cells have a nucleus. Prokaryotic cells (bacteria) don't have a defined nucleus.",
          },
          difficulty: 1,
        },
        {
          id: "cell-04",
          type: "fill-blank",
          prompt: {
            es: "Matthias Schleiden propuso que todas las _______ están formadas por células.",
            en: "Matthias Schleiden proposed that all _______ are made of cells.",
          },
          correctAnswer: "plantas",
          explanation: {
            es: "Schleiden (1838) propuso que todas las PLANTAS están formadas por células.",
            en: "Schleiden (1838) proposed that all PLANTS are made of cells.",
          },
          difficulty: 1,
        },
        {
          id: "cell-05",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué científico propuso que todos los animales están formados por células?",
            en: "Which scientist proposed that all animals are made of cells?",
          },
          options: [
            { es: "Theodor Schwann", en: "Theodor Schwann" },
            { es: "Rudolf Virchow", en: "Rudolf Virchow" },
            { es: "Robert Hooke", en: "Robert Hooke" },
            { es: "Louis Pasteur", en: "Louis Pasteur" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Theodor Schwann (1839) extendió la teoría celular a los animales, complementando el trabajo de Schleiden.",
            en: "Theodor Schwann (1839) extended cell theory to animals, complementing Schleiden's work.",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 2: Estructura celular - Parte 1 (Practice)
    {
      id: "cell-structure-p1",
      topicId: "cell",
      order: 2,
      title: {
        es: "Estructura celular - Parte 1",
        en: "Cell Structure - Part 1",
      },
      description: {
        es: "Células procariotas vs eucariotas",
        en: "Prokaryotic vs eukaryotic cells",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "cell-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la principal diferencia entre células procariotas y eucariotas?",
            en: "What is the main difference between prokaryotic and eukaryotic cells?",
          },
          options: [
            {
              es: "Las eucariotas tienen núcleo definido",
              en: "Eukaryotes have a defined nucleus",
            },
            {
              es: "Las procariotas son más grandes",
              en: "Prokaryotes are larger",
            },
            {
              es: "Las eucariotas no tienen ADN",
              en: "Eukaryotes don't have DNA",
            },
            {
              es: "Las procariotas tienen mitocondrias",
              en: "Prokaryotes have mitochondria",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las células eucariotas tienen núcleo definido rodeado por membrana nuclear, mientras que las procariotas no.",
            en: "Eukaryotic cells have a defined nucleus surrounded by nuclear membrane, while prokaryotes don't.",
          },
          difficulty: 1,
        },
        {
          id: "cell-07",
          type: "true-false",
          prompt: {
            es: "Las bacterias son ejemplos de células eucariotas.",
            en: "Bacteria are examples of eukaryotic cells.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. Las bacterias son células PROCARIOTAS, sin núcleo definido.",
            en: "FALSE. Bacteria are PROKARYOTIC cells, without a defined nucleus.",
          },
          difficulty: 1,
        },
        {
          id: "cell-08",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes organelos NO se encuentra en células procariotas?",
            en: "Which of the following organelles is NOT found in prokaryotic cells?",
          },
          options: [
            { es: "Mitocondrias", en: "Mitochondria" },
            { es: "Ribosomas", en: "Ribosomes" },
            { es: "Membrana plasmática", en: "Plasma membrane" },
            { es: "Citoplasma", en: "Cytoplasm" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las células procariotas NO tienen mitocondrias ni otros organelos membranosos.",
            en: "Prokaryotic cells do NOT have mitochondria or other membrane-bound organelles.",
          },
          difficulty: 2,
        },
        {
          id: "cell-09",
          type: "fill-blank",
          prompt: {
            es: "La región donde se encuentra el ADN en células procariotas se llama _______.",
            en: "The region where DNA is found in prokaryotic cells is called _______.",
          },
          correctAnswer: "nucleoide",
          explanation: {
            es: "El NUCLEOIDE es la región sin membrana donde se concentra el ADN en procariotas.",
            en: "The NUCLEOID is the membrane-free region where DNA is concentrated in prokaryotes.",
          },
          difficulty: 2,
        },
        {
          id: "cell-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de estos organismos tiene células eucariotas?",
            en: "Which of these organisms has eukaryotic cells?",
          },
          options: [
            { es: "Hongos", en: "Fungi" },
            { es: "Bacterias", en: "Bacteria" },
            { es: "Arqueas", en: "Archaea" },
            { es: "Cianobacterias", en: "Cyanobacteria" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los hongos tienen células eucariotas con núcleo y organelos. Bacterias y arqueas son procariotas.",
            en: "Fungi have eukaryotic cells with nucleus and organelles. Bacteria and archaea are prokaryotes.",
          },
          difficulty: 2,
        },
        {
          id: "cell-11",
          type: "true-false",
          prompt: {
            es: "Las células procariotas son generalmente más grandes que las eucariotas.",
            en: "Prokaryotic cells are generally larger than eukaryotic cells.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. Las procariotas son más PEQUEÑAS (1-10 μm) que las eucariotas (10-100 μm).",
            en: "FALSE. Prokaryotes are SMALLER (1-10 μm) than eukaryotes (10-100 μm).",
          },
          difficulty: 1,
        },
        {
          id: "cell-12",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué estructura adicional tienen muchas bacterias que les da protección?",
            en: "What additional structure do many bacteria have that gives them protection?",
          },
          options: [
            { es: "Pared celular", en: "Cell wall" },
            { es: "Núcleo", en: "Nucleus" },
            { es: "Mitocondrias", en: "Mitochondria" },
            { es: "Retículo endoplásmico", en: "Endoplasmic reticulum" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La pared celular de peptidoglicano rodea la membrana plasmática y da protección a las bacterias.",
            en: "The peptidoglycan cell wall surrounds the plasma membrane and provides protection to bacteria.",
          },
          difficulty: 2,
        },
        {
          id: "cell-13",
          type: "fill-blank",
          prompt: {
            es: "Los organismos que tienen células con núcleo se llaman _______.",
            en: "Organisms that have cells with a nucleus are called _______.",
          },
          correctAnswer: "eucariotas",
          explanation: {
            es: "EUCARIOTAS (eu=verdadero, karyon=núcleo) son organismos con células que tienen núcleo definido.",
            en: "EUKARYOTES (eu=true, karyon=nucleus) are organisms with cells that have a defined nucleus.",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 3: Estructura celular - Parte 2 (Practice)
    {
      id: "cell-structure-p2",
      topicId: "cell",
      order: 3,
      title: {
        es: "Estructura celular - Parte 2",
        en: "Cell Structure - Part 2",
      },
      description: {
        es: "Organelos y sus funciones",
        en: "Organelles and their functions",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "cell-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la función principal del núcleo celular?",
            en: "What is the main function of the cell nucleus?",
          },
          options: [
            {
              es: "Almacenar información genética (ADN)",
              en: "Store genetic information (DNA)",
            },
            { es: "Producir energía", en: "Produce energy" },
            { es: "Sintetizar proteínas", en: "Synthesize proteins" },
            { es: "Digerir sustancias", en: "Digest substances" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El núcleo almacena el ADN y controla las actividades celulares mediante la expresión genética.",
            en: "The nucleus stores DNA and controls cellular activities through gene expression.",
          },
          difficulty: 1,
        },
        {
          id: "cell-15",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué organelo es conocido como la 'central energética' de la célula?",
            en: "Which organelle is known as the 'powerhouse' of the cell?",
          },
          options: [
            { es: "Mitocondria", en: "Mitochondria" },
            { es: "Núcleo", en: "Nucleus" },
            { es: "Ribosoma", en: "Ribosome" },
            { es: "Lisosoma", en: "Lysosome" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las mitocondrias producen ATP mediante respiración celular, proporcionando energía a la célula.",
            en: "Mitochondria produce ATP through cellular respiration, providing energy to the cell.",
          },
          difficulty: 1,
        },
        {
          id: "cell-16",
          type: "fill-blank",
          prompt: {
            es: "Los _______ son organelos responsables de la síntesis de proteínas.",
            en: "_______ are organelles responsible for protein synthesis.",
          },
          correctAnswer: "ribosomas",
          explanation: {
            es: "Los RIBOSOMAS traducen el ARNm para sintetizar proteínas. Se encuentran libres o en el RE.",
            en: "RIBOSOMES translate mRNA to synthesize proteins. They are found free or on the ER.",
          },
          difficulty: 1,
        },
        {
          id: "cell-17",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué organelo modifica, empaca y distribuye proteínas?",
            en: "Which organelle modifies, packages, and distributes proteins?",
          },
          options: [
            { es: "Aparato de Golgi", en: "Golgi apparatus" },
            { es: "Retículo endoplásmico liso", en: "Smooth ER" },
            { es: "Lisosoma", en: "Lysosome" },
            { es: "Peroxisoma", en: "Peroxisome" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El aparato de Golgi recibe proteínas del RE, las modifica y las envía a su destino en vesículas.",
            en: "The Golgi apparatus receives proteins from the ER, modifies them, and sends them to their destination in vesicles.",
          },
          difficulty: 2,
        },
        {
          id: "cell-18",
          type: "true-false",
          prompt: {
            es: "Los lisosomas contienen enzimas digestivas que degradan materiales celulares.",
            en: "Lysosomes contain digestive enzymes that break down cellular materials.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Los lisosomas contienen enzimas hidrolíticas para digestión celular y reciclaje.",
            en: "TRUE. Lysosomes contain hydrolytic enzymes for cellular digestion and recycling.",
          },
          difficulty: 1,
        },
        {
          id: "cell-19",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la diferencia entre el retículo endoplásmico rugoso (RER) y el liso (REL)?",
            en: "What is the difference between rough ER (RER) and smooth ER (SER)?",
          },
          options: [
            {
              es: "El RER tiene ribosomas adheridos",
              en: "RER has attached ribosomes",
            },
            {
              es: "El REL es más grande",
              en: "SER is larger",
            },
            {
              es: "El RER produce lípidos",
              en: "RER produces lipids",
            },
            {
              es: "El REL tiene ADN",
              en: "SER has DNA",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El RER tiene ribosomas (síntesis de proteínas), el REL no tiene ribosomas (síntesis de lípidos).",
            en: "RER has ribosomes (protein synthesis), SER doesn't have ribosomes (lipid synthesis).",
          },
          difficulty: 2,
        },
        {
          id: "cell-20",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué organelo contiene clorofila y realiza fotosíntesis en células vegetales?",
            en: "Which organelle contains chlorophyll and performs photosynthesis in plant cells?",
          },
          options: [
            { es: "Cloroplasto", en: "Chloroplast" },
            { es: "Mitocondria", en: "Mitochondria" },
            { es: "Vacuola", en: "Vacuole" },
            { es: "Leucoplasto", en: "Leucoplast" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los cloroplastos contienen clorofila y realizan fotosíntesis, convirtiendo luz en energía química.",
            en: "Chloroplasts contain chlorophyll and perform photosynthesis, converting light into chemical energy.",
          },
          difficulty: 1,
        },
        {
          id: "cell-21",
          type: "fill-blank",
          prompt: {
            es: "La _______ es una estructura que regula el paso de sustancias hacia dentro y fuera de la célula.",
            en: "The _______ is a structure that regulates the passage of substances in and out of the cell.",
          },
          correctAnswer: "membrana",
          explanation: {
            es: "La MEMBRANA plasmática o celular es selectivamente permeable y controla el transporte.",
            en: "The plasma or cell MEMBRANE is selectively permeable and controls transport.",
          },
          difficulty: 1,
        },
        {
          id: "cell-22",
          type: "true-false",
          prompt: {
            es: "Las células vegetales tienen pared celular y las animales no.",
            en: "Plant cells have a cell wall and animal cells don't.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. La pared celular de celulosa da rigidez a las células vegetales.",
            en: "TRUE. The cellulose cell wall gives rigidity to plant cells.",
          },
          difficulty: 1,
        },
        {
          id: "cell-23",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué organelo almacena agua, nutrientes y desechos en células vegetales?",
            en: "Which organelle stores water, nutrients, and waste in plant cells?",
          },
          options: [
            { es: "Vacuola central", en: "Central vacuole" },
            { es: "Lisosoma", en: "Lysosome" },
            { es: "Peroxisoma", en: "Peroxisome" },
            { es: "Vesícula", en: "Vesicle" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La vacuola central es muy grande en células vegetales y almacena agua, manteniendo presión de turgencia.",
            en: "The central vacuole is very large in plant cells and stores water, maintaining turgor pressure.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 4: Evaluación de célula (Quiz)
    {
      id: "cell-quiz",
      topicId: "cell",
      order: 4,
      title: {
        es: "Evaluación: Célula",
        en: "Assessment: Cell",
      },
      description: {
        es: "Demuestra tu conocimiento sobre la célula",
        en: "Demonstrate your knowledge about the cell",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "cell-q01",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el orden correcto de los científicos que contribuyeron a la teoría celular?",
            en: "What is the correct order of scientists who contributed to cell theory?",
          },
          options: [
            {
              es: "Hooke → Schleiden/Schwann → Virchow",
              en: "Hooke → Schleiden/Schwann → Virchow",
            },
            {
              es: "Virchow → Hooke → Schleiden",
              en: "Virchow → Hooke → Schleiden",
            },
            {
              es: "Schleiden → Hooke → Virchow",
              en: "Schleiden → Hooke → Virchow",
            },
            {
              es: "Schwann → Virchow → Hooke",
              en: "Schwann → Virchow → Hooke",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Hooke (1665) observó células, Schleiden/Schwann (1838-39) propusieron teoría celular, Virchow (1855) completó con 'omnis cellula e cellula'.",
            en: "Hooke (1665) observed cells, Schleiden/Schwann (1838-39) proposed cell theory, Virchow (1855) completed with 'omnis cellula e cellula'.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q02",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué estructura NO tienen las células procariotas?",
            en: "What structure do prokaryotic cells NOT have?",
          },
          options: [
            { es: "Membrana nuclear", en: "Nuclear membrane" },
            { es: "ADN", en: "DNA" },
            { es: "Ribosomas", en: "Ribosomes" },
            { es: "Membrana plasmática", en: "Plasma membrane" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las procariotas NO tienen membrana nuclear. Su ADN está en el nucleoide sin membrana.",
            en: "Prokaryotes do NOT have a nuclear membrane. Their DNA is in the nucleoid without a membrane.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q03",
          type: "true-false",
          prompt: {
            es: "Las mitocondrias tienen su propio ADN circular, similar a las bacterias.",
            en: "Mitochondria have their own circular DNA, similar to bacteria.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Esto apoya la teoría endosimbiótica: las mitocondrias fueron bacterias simbiontes.",
            en: "TRUE. This supports endosymbiotic theory: mitochondria were symbiotic bacteria.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q04",
          type: "order-steps",
          prompt: {
            es: "Ordena la ruta de una proteína desde su síntesis hasta su secreción:",
            en: "Order the path of a protein from synthesis to secretion:",
          },
          options: [
            {
              es: "Síntesis en ribosomas del RER",
              en: "Synthesis in RER ribosomes",
            },
            {
              es: "Modificación en aparato de Golgi",
              en: "Modification in Golgi apparatus",
            },
            {
              es: "Empaque en vesículas",
              en: "Packaging in vesicles",
            },
            {
              es: "Secreción por exocitosis",
              en: "Secretion by exocytosis",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Proteínas: Ribosomas (RER) → Golgi → Vesículas → Exocitosis",
            en: "Proteins: Ribosomes (RER) → Golgi → Vesicles → Exocytosis",
          },
          difficulty: 3,
        },
        {
          id: "cell-q05",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de estas estructuras es EXCLUSIVA de células vegetales?",
            en: "Which of these structures is EXCLUSIVE to plant cells?",
          },
          options: [
            { es: "Pared celular de celulosa", en: "Cellulose cell wall" },
            { es: "Mitocondrias", en: "Mitochondria" },
            { es: "Ribosomas", en: "Ribosomes" },
            { es: "Membrana plasmática", en: "Plasma membrane" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La pared celular de CELULOSA es exclusiva de plantas. Los hongos tienen pared de quitina.",
            en: "The CELLULOSE cell wall is exclusive to plants. Fungi have chitin walls.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q06",
          type: "fill-blank",
          prompt: {
            es: "El citoplasma está compuesto principalmente de agua y se llama _______.",
            en: "Cytoplasm is mainly composed of water and is called _______.",
          },
          correctAnswer: "citosol",
          explanation: {
            es: "El CITOSOL es la parte líquida del citoplasma donde están suspendidos los organelos.",
            en: "CYTOSOL is the liquid part of cytoplasm where organelles are suspended.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q07",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué organelo es responsable de la digestión intracelular?",
            en: "Which organelle is responsible for intracellular digestion?",
          },
          options: [
            { es: "Lisosoma", en: "Lysosome" },
            { es: "Peroxisoma", en: "Peroxisome" },
            { es: "Golgi", en: "Golgi" },
            { es: "Vacuola", en: "Vacuole" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los lisosomas contienen enzimas hidrolíticas que digieren macromoléculas y organelos dañados.",
            en: "Lysosomes contain hydrolytic enzymes that digest macromolecules and damaged organelles.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q08",
          type: "true-false",
          prompt: {
            es: "Los cloroplastos y mitocondrias tienen doble membrana.",
            en: "Chloroplasts and mitochondria have a double membrane.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Ambos tienen doble membrana, evidencia de la teoría endosimbiótica.",
            en: "TRUE. Both have double membrane, evidence of endosymbiotic theory.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q09",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la función del citoesqueleto?",
            en: "What is the function of the cytoskeleton?",
          },
          options: [
            {
              es: "Dar forma y soporte a la célula",
              en: "Give shape and support to the cell",
            },
            { es: "Producir ATP", en: "Produce ATP" },
            { es: "Sintetizar proteínas", en: "Synthesize proteins" },
            { es: "Almacenar ADN", en: "Store DNA" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El citoesqueleto (microfilamentos, microtúbulos, filamentos intermedios) da estructura y permite movimiento.",
            en: "The cytoskeleton (microfilaments, microtubules, intermediate filaments) provides structure and enables movement.",
          },
          difficulty: 2,
        },
        {
          id: "cell-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de transporte celular NO requiere energía (ATP)?",
            en: "What type of cellular transport does NOT require energy (ATP)?",
          },
          options: [
            { es: "Difusión simple", en: "Simple diffusion" },
            { es: "Transporte activo", en: "Active transport" },
            { es: "Endocitosis", en: "Endocytosis" },
            { es: "Exocitosis", en: "Exocytosis" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La difusión simple es transporte pasivo a favor del gradiente, sin gasto de ATP.",
            en: "Simple diffusion is passive transport down the gradient, without ATP expenditure.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
