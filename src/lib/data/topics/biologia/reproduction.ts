import type { Topic } from "@/lib/types";

export const reproductionTopic: Topic = {
  id: "reproduction",
  slug: "reproduccion",
  title: {
    es: "Reproducción",
    en: "Reproduction",
  },
  description: {
    es: "Ciclo celular y reproducción celular y de organismos",
    en: "Cell cycle and cellular and organism reproduction",
  },
  icon: "Copy",
  color: "purple",
  bgGradient: "bg-linear-to-br from-purple-500 to-violet-600",
  prerequisites: ["cell"],
  order: 3,
  lessons: [
    // LESSON 1: Ciclo celular (Learn)
    {
      id: "cell-cycle-learn",
      topicId: "reproduction",
      order: 1,
      title: {
        es: "Ciclo celular",
        en: "Cell Cycle",
      },
      description: {
        es: "Comprende las fases del ciclo celular",
        en: "Understand the phases of the cell cycle",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "repro-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las dos fases principales del ciclo celular?",
            en: "What are the two main phases of the cell cycle?",
          },
          options: [
            { es: "Interfase y Fase M", en: "Interphase and M Phase" },
            { es: "Mitosis y Meiosis", en: "Mitosis and Meiosis" },
            { es: "G1 y G2", en: "G1 and G2" },
            { es: "Profase y Metafase", en: "Prophase and Metaphase" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El ciclo se divide en INTERFASE (G1, S, G2 - la célula crece y duplica ADN) y FASE M (mitosis + citocinesis).",
            en: "The cycle is divided into INTERPHASE (G1, S, G2 - cell grows and duplicates DNA) and M PHASE (mitosis + cytokinesis).",
          },
          difficulty: 1,
        },
        {
          id: "repro-02",
          type: "fill-blank",
          prompt: {
            es: "Durante la fase _______ del ciclo celular ocurre la replicación del ADN.",
            en: "During the _______ phase of the cell cycle, DNA replication occurs.",
          },
          correctAnswer: "S",
          explanation: {
            es: "La fase S (Síntesis) es cuando se duplica el ADN. Después la célula tiene 2 copias de cada cromosoma.",
            en: "The S phase (Synthesis) is when DNA is duplicated. Afterwards the cell has 2 copies of each chromosome.",
          },
          difficulty: 1,
        },
        {
          id: "repro-03",
          type: "true-false",
          prompt: {
            es: "La fase G1 ocurre antes de la replicación del ADN.",
            en: "The G1 phase occurs before DNA replication.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Orden: G1 (crecimiento) → S (síntesis ADN) → G2 (preparación) → M (división).",
            en: "TRUE. Order: G1 (growth) → S (DNA synthesis) → G2 (preparation) → M (division).",
          },
          difficulty: 1,
        },
        {
          id: "repro-04",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué ocurre durante la fase G2 del ciclo celular?",
            en: "What happens during the G2 phase of the cell cycle?",
          },
          options: [
            {
              es: "La célula se prepara para la división",
              en: "The cell prepares for division",
            },
            { es: "Se replica el ADN", en: "DNA is replicated" },
            { es: "Ocurre la mitosis", en: "Mitosis occurs" },
            { es: "La célula muere", en: "The cell dies" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "En G2 la célula sintetiza proteínas necesarias para la división y verifica que el ADN se haya replicado correctamente.",
            en: "In G2 the cell synthesizes proteins needed for division and verifies that DNA has been correctly replicated.",
          },
          difficulty: 1,
        },
        {
          id: "repro-05",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué proceso sigue inmediatamente después de la mitosis?",
            en: "What process immediately follows mitosis?",
          },
          options: [
            { es: "Citocinesis", en: "Cytokinesis" },
            { es: "Fase S", en: "S phase" },
            { es: "Meiosis", en: "Meiosis" },
            { es: "Apoptosis", en: "Apoptosis" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La CITOCINESIS es la división del citoplasma que sigue a la mitosis, formando dos células hijas.",
            en: "CYTOKINESIS is the division of cytoplasm that follows mitosis, forming two daughter cells.",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 2: Reproducción celular - Mitosis (Practice)
    {
      id: "mitosis-practice",
      topicId: "reproduction",
      order: 2,
      title: {
        es: "Reproducción celular - Mitosis",
        en: "Cellular Reproduction - Mitosis",
      },
      description: {
        es: "División celular para crecimiento y reparación",
        en: "Cell division for growth and repair",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "repro-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el resultado de la mitosis?",
            en: "What is the result of mitosis?",
          },
          options: [
            {
              es: "2 células hijas idénticas (2n)",
              en: "2 identical daughter cells (2n)",
            },
            {
              es: "4 células hijas diferentes (n)",
              en: "4 different daughter cells (n)",
            },
            {
              es: "1 célula con doble ADN",
              en: "1 cell with double DNA",
            },
            {
              es: "Muerte celular",
              en: "Cell death",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La mitosis produce 2 células hijas DIPLOIDES (2n) genéticamente IDÉNTICAS a la célula madre.",
            en: "Mitosis produces 2 DIPLOID (2n) daughter cells genetically IDENTICAL to the mother cell.",
          },
          difficulty: 1,
        },
        {
          id: "repro-07",
          type: "order-steps",
          prompt: {
            es: "Ordena las fases de la mitosis:",
            en: "Order the phases of mitosis:",
          },
          options: [
            { es: "Profase", en: "Prophase" },
            { es: "Metafase", en: "Metaphase" },
            { es: "Anafase", en: "Anaphase" },
            { es: "Telofase", en: "Telophase" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Orden: PROFASE → METAFASE → ANAFASE → TELOFASE (mnemotecnia: Pro Metro Ana Telo).",
            en: "Order: PROPHASE → METAPHASE → ANAPHASE → TELOPHASE (mnemonic: Pro Met Ana Telo).",
          },
          difficulty: 1,
        },
        {
          id: "repro-08",
          type: "fill-blank",
          prompt: {
            es: "Durante la _______ los cromosomas se alinean en el ecuador de la célula.",
            en: "During _______ chromosomes align at the cell's equator.",
          },
          correctAnswer: "metafase",
          explanation: {
            es: "En la METAFASE los cromosomas se organizan en el plano ecuatorial (placa metafásica).",
            en: "In METAPHASE chromosomes organize at the equatorial plane (metaphase plate).",
          },
          difficulty: 2,
        },
        {
          id: "repro-09",
          type: "true-false",
          prompt: {
            es: "Durante la profase, la envoltura nuclear se desintegra.",
            en: "During prophase, the nuclear envelope breaks down.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. En profase: cromosomas se condensan, centriolos migran a polos, envoltura nuclear se desintegra.",
            en: "TRUE. In prophase: chromosomes condense, centrioles migrate to poles, nuclear envelope breaks down.",
          },
          difficulty: 1,
        },
        {
          id: "repro-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué ocurre durante la anafase?",
            en: "What happens during anaphase?",
          },
          options: [
            {
              es: "Las cromátidas hermanas se separan",
              en: "Sister chromatids separate",
            },
            {
              es: "Los cromosomas se alinean",
              en: "Chromosomes align",
            },
            {
              es: "Se forma la envoltura nuclear",
              en: "Nuclear envelope forms",
            },
            {
              es: "El ADN se replica",
              en: "DNA replicates",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "En ANAFASE las cromátidas hermanas se separan y migran hacia polos opuestos de la célula.",
            en: "In ANAPHASE sister chromatids separate and migrate toward opposite poles of the cell.",
          },
          difficulty: 1,
        },
        {
          id: "repro-11",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué fase se forma nuevamente la envoltura nuclear?",
            en: "In which phase does the nuclear envelope reform?",
          },
          options: [
            { es: "Telofase", en: "Telophase" },
            { es: "Profase", en: "Prophase" },
            { es: "Metafase", en: "Metaphase" },
            { es: "Anafase", en: "Anaphase" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "En TELOFASE se forman dos nuevas envolturas nucleares alrededor de cada grupo de cromosomas.",
            en: "In TELOPHASE two new nuclear envelopes form around each group of chromosomes.",
          },
          difficulty: 1,
        },
        {
          id: "repro-12",
          type: "true-false",
          prompt: {
            es: "Las células somáticas (del cuerpo) se dividen por mitosis.",
            en: "Somatic cells (body cells) divide by mitosis.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Células somáticas → MITOSIS (2n→2n). Células sexuales → MEIOSIS (2n→n).",
            en: "TRUE. Somatic cells → MITOSIS (2n→2n). Sex cells → MEIOSIS (2n→n).",
          },
          difficulty: 1,
        },
        {
          id: "repro-13",
          type: "fill-blank",
          prompt: {
            es: "Las fibras del _______ ayudan a separar los cromosomas durante la mitosis.",
            en: "The _______ fibers help separate chromosomes during mitosis.",
          },
          correctAnswer: "huso",
          explanation: {
            es: "El HUSO mitótico (o acromático) está formado por microtúbulos que mueven los cromosomas.",
            en: "The mitotic SPINDLE (or achromatic) is formed by microtubules that move chromosomes.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 3: Meiosis y reproducción sexual (Practice)
    {
      id: "meiosis-practice",
      topicId: "reproduction",
      order: 3,
      title: {
        es: "Meiosis y reproducción",
        en: "Meiosis and Reproduction",
      },
      description: {
        es: "División celular para formar gametos",
        en: "Cell division to form gametes",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "repro-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el resultado de la meiosis?",
            en: "What is the result of meiosis?",
          },
          options: [
            {
              es: "4 células hijas haploides (n)",
              en: "4 haploid daughter cells (n)",
            },
            {
              es: "2 células hijas diploides (2n)",
              en: "2 diploid daughter cells (2n)",
            },
            {
              es: "1 célula con doble ADN",
              en: "1 cell with double DNA",
            },
            {
              es: "8 células idénticas",
              en: "8 identical cells",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La meiosis produce 4 células HAPLOIDES (n) con la mitad de cromosomas que la célula original (2n).",
            en: "Meiosis produces 4 HAPLOID (n) cells with half the chromosomes of the original cell (2n).",
          },
          difficulty: 1,
        },
        {
          id: "repro-15",
          type: "true-false",
          prompt: {
            es: "La meiosis consta de dos divisiones: Meiosis I y Meiosis II.",
            en: "Meiosis consists of two divisions: Meiosis I and Meiosis II.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Meiosis I (reducción: 2n→n) y Meiosis II (similar a mitosis: n→n).",
            en: "TRUE. Meiosis I (reduction: 2n→n) and Meiosis II (similar to mitosis: n→n).",
          },
          difficulty: 1,
        },
        {
          id: "repro-16",
          type: "fill-blank",
          prompt: {
            es: "El intercambio de segmentos entre cromosomas homólogos se llama _______.",
            en: "The exchange of segments between homologous chromosomes is called _______.",
          },
          correctAnswer: "entrecruzamiento",
          explanation: {
            es: "El ENTRECRUZAMIENTO (crossing-over) ocurre en profase I y aumenta variabilidad genética.",
            en: "CROSSING-OVER occurs in prophase I and increases genetic variability.",
          },
          difficulty: 2,
        },
        {
          id: "repro-17",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué fase de la meiosis ocurre el entrecruzamiento?",
            en: "In which phase of meiosis does crossing-over occur?",
          },
          options: [
            { es: "Profase I", en: "Prophase I" },
            { es: "Metafase I", en: "Metaphase I" },
            { es: "Profase II", en: "Prophase II" },
            { es: "Anafase II", en: "Anaphase II" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "En PROFASE I los cromosomas homólogos se aparean (sinapsis) y pueden intercambiar segmentos.",
            en: "In PROPHASE I homologous chromosomes pair (synapsis) and can exchange segments.",
          },
          difficulty: 2,
        },
        {
          id: "repro-18",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la diferencia fundamental entre mitosis y meiosis?",
            en: "What is the fundamental difference between mitosis and meiosis?",
          },
          options: [
            {
              es: "Meiosis reduce el número de cromosomas a la mitad",
              en: "Meiosis reduces chromosome number by half",
            },
            {
              es: "Mitosis produce 4 células",
              en: "Mitosis produces 4 cells",
            },
            {
              es: "Meiosis no tiene metafase",
              en: "Meiosis has no metaphase",
            },
            {
              es: "Son idénticas",
              en: "They are identical",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Mitosis: 2n→2n (2 células idénticas). Meiosis: 2n→n (4 células haploides diferentes).",
            en: "Mitosis: 2n→2n (2 identical cells). Meiosis: 2n→n (4 different haploid cells).",
          },
          difficulty: 1,
        },
        {
          id: "repro-19",
          type: "true-false",
          prompt: {
            es: "Los gametos (óvulos y espermatozoides) se forman por meiosis.",
            en: "Gametes (eggs and sperm) are formed by meiosis.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. La GAMETOGÉNESIS (formación de gametos) ocurre por meiosis para producir células n.",
            en: "TRUE. GAMETOGENESIS (gamete formation) occurs by meiosis to produce n cells.",
          },
          difficulty: 1,
        },
        {
          id: "repro-20",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de reproducción produce mayor variabilidad genética?",
            en: "Which type of reproduction produces greater genetic variability?",
          },
          options: [
            { es: "Reproducción sexual", en: "Sexual reproduction" },
            { es: "Reproducción asexual", en: "Asexual reproduction" },
            { es: "Fisión binaria", en: "Binary fission" },
            { es: "Gemación", en: "Budding" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Reproducción SEXUAL: meiosis + fecundación = mayor variabilidad (entrecruzamiento + combinación de gametos).",
            en: "SEXUAL reproduction: meiosis + fertilization = greater variability (crossing-over + gamete combination).",
          },
          difficulty: 1,
        },
        {
          id: "repro-21",
          type: "fill-blank",
          prompt: {
            es: "Cuando un espermatozoide (n) se une con un óvulo (n), se forma un _______ (2n).",
            en: "When a sperm (n) joins with an egg (n), a _______ (2n) is formed.",
          },
          correctAnswer: "cigoto",
          explanation: {
            es: "El CIGOTO es la primera célula diploide (2n) que resulta de la fecundación.",
            en: "The ZYGOTE is the first diploid cell (2n) that results from fertilization.",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 4: Evaluación de reproducción (Quiz)
    {
      id: "reproduction-quiz",
      topicId: "reproduction",
      order: 4,
      title: {
        es: "Evaluación: Reproducción",
        en: "Assessment: Reproduction",
      },
      description: {
        es: "Demuestra tu conocimiento sobre reproducción",
        en: "Demonstrate your knowledge about reproduction",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "repro-q01",
          type: "order-steps",
          prompt: {
            es: "Ordena las fases del ciclo celular:",
            en: "Order the phases of the cell cycle:",
          },
          options: [
            { es: "Fase G1", en: "G1 phase" },
            { es: "Fase S", en: "S phase" },
            { es: "Fase G2", en: "G2 phase" },
            { es: "Fase M (mitosis)", en: "M phase (mitosis)" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Ciclo celular: G1 (crecimiento) → S (síntesis ADN) → G2 (preparación) → M (división).",
            en: "Cell cycle: G1 (growth) → S (DNA synthesis) → G2 (preparation) → M (division).",
          },
          difficulty: 2,
        },
        {
          id: "repro-q02",
          type: "multiple-choice",
          prompt: {
            es: "Si una célula humana tiene 46 cromosomas (2n=46), ¿cuántos tendrá después de la mitosis?",
            en: "If a human cell has 46 chromosomes (2n=46), how many will it have after mitosis?",
          },
          options: [
            { es: "46 cromosomas", en: "46 chromosomes" },
            { es: "23 cromosomas", en: "23 chromosomes" },
            { es: "92 cromosomas", en: "92 chromosomes" },
            { es: "12 cromosomas", en: "12 chromosomes" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La mitosis mantiene el número de cromosomas: 2n→2n. Cada célula hija tendrá 46 cromosomas.",
            en: "Mitosis maintains chromosome number: 2n→2n. Each daughter cell will have 46 chromosomes.",
          },
          difficulty: 2,
        },
        {
          id: "repro-q03",
          type: "true-false",
          prompt: {
            es: "Durante la metafase, los cromosomas están más condensados y visibles.",
            en: "During metaphase, chromosomes are most condensed and visible.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Los cromosomas alcanzan su máxima condensación en metafase, facilitando su observación.",
            en: "TRUE. Chromosomes reach maximum condensation in metaphase, facilitating their observation.",
          },
          difficulty: 2,
        },
        {
          id: "repro-q04",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántos cromosomas tienen los gametos humanos?",
            en: "How many chromosomes do human gametes have?",
          },
          options: [
            { es: "23 (haploide)", en: "23 (haploid)" },
            { es: "46 (diploide)", en: "46 (diploid)" },
            { es: "92 (tetraploide)", en: "92 (tetraploid)" },
            { es: "12 (haploide)", en: "12 (haploid)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los gametos humanos tienen 23 cromosomas (n). La fecundación restaura 2n=46.",
            en: "Human gametes have 23 chromosomes (n). Fertilization restores 2n=46.",
          },
          difficulty: 1,
        },
        {
          id: "repro-q05",
          type: "fill-blank",
          prompt: {
            es: "La división del citoplasma al final de la mitosis se llama _______.",
            en: "The division of cytoplasm at the end of mitosis is called _______.",
          },
          correctAnswer: "citocinesis",
          explanation: {
            es: "CITOCINESIS divide el citoplasma, formando dos células hijas separadas físicamente.",
            en: "CYTOKINESIS divides the cytoplasm, forming two physically separate daughter cells.",
          },
          difficulty: 2,
        },
        {
          id: "repro-q06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué evento de la meiosis aumenta la variabilidad genética?",
            en: "Which event in meiosis increases genetic variability?",
          },
          options: [
            {
              es: "Entrecruzamiento (crossing-over)",
              en: "Crossing-over",
            },
            { es: "Replicación del ADN", en: "DNA replication" },
            { es: "Citocinesis", en: "Cytokinesis" },
            { es: "Formación del huso", en: "Spindle formation" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El ENTRECRUZAMIENTO en profase I intercambia segmentos entre cromosomas homólogos, creando nuevas combinaciones.",
            en: "CROSSING-OVER in prophase I exchanges segments between homologous chromosomes, creating new combinations.",
          },
          difficulty: 2,
        },
        {
          id: "repro-q07",
          type: "true-false",
          prompt: {
            es: "La reproducción asexual produce descendencia genéticamente idéntica (clones).",
            en: "Asexual reproduction produces genetically identical offspring (clones).",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Reproducción asexual (mitosis, gemación, fisión) → CLONES genéticamente idénticos.",
            en: "TRUE. Asexual reproduction (mitosis, budding, fission) → genetically identical CLONES.",
          },
          difficulty: 1,
        },
        {
          id: "repro-q08",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué se diferencian Meiosis I y Meiosis II?",
            en: "How do Meiosis I and Meiosis II differ?",
          },
          options: [
            {
              es: "Meiosis I separa homólogos, Meiosis II separa cromátidas",
              en: "Meiosis I separates homologs, Meiosis II separates chromatids",
            },
            {
              es: "Meiosis I es más corta",
              en: "Meiosis I is shorter",
            },
            {
              es: "Meiosis II produce 8 células",
              en: "Meiosis II produces 8 cells",
            },
            {
              es: "Son idénticas",
              en: "They are identical",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Meiosis I: división REDUCCIONAL (2n→n, separa homólogos). Meiosis II: división ECUACIONAL (n→n, separa cromátidas).",
            en: "Meiosis I: REDUCTIONAL division (2n→n, separates homologs). Meiosis II: EQUATIONAL division (n→n, separates chromatids).",
          },
          difficulty: 3,
        },
        {
          id: "repro-q09",
          type: "fill-blank",
          prompt: {
            es: "El proceso de formación de espermatozoides se llama _______.",
            en: "The process of sperm formation is called _______.",
          },
          correctAnswer: "espermatogénesis",
          explanation: {
            es: "ESPERMATOGÉNESIS produce espermatozoides (gametos masculinos) por meiosis en los testículos.",
            en: "SPERMATOGENESIS produces sperm (male gametes) by meiosis in the testes.",
          },
          difficulty: 2,
        },
        {
          id: "repro-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué ventaja tiene la reproducción sexual sobre la asexual?",
            en: "What advantage does sexual reproduction have over asexual?",
          },
          options: [
            {
              es: "Mayor variabilidad genética y adaptación",
              en: "Greater genetic variability and adaptation",
            },
            {
              es: "Es más rápida",
              en: "It's faster",
            },
            {
              es: "Requiere menos energía",
              en: "Requires less energy",
            },
            {
              es: "Produce más descendencia",
              en: "Produces more offspring",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Reproducción sexual combina genes de dos padres, aumentando variabilidad y capacidad de adaptación a cambios ambientales.",
            en: "Sexual reproduction combines genes from two parents, increasing variability and ability to adapt to environmental changes.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
