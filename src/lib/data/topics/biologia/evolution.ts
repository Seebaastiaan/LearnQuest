import type { Topic } from "@/lib/types";

export const evolutionTopic: Topic = {
  id: "evolution",
  slug: "evolucion",
  title: {
    es: "Evolución",
    en: "Evolution",
  },
  description: {
    es: "Teorías evolutivas y evidencia del cambio de las especies",
    en: "Evolutionary theories and evidence of species change",
  },
  icon: "TreeDeciduous",
  color: "amber",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  prerequisites: ["heredity"],
  order: 5,
  lessons: [
    // LESSON 1: Origen de la vida (Learn)
    {
      id: "origin-life-learn",
      topicId: "evolution",
      order: 1,
      title: {
        es: "Origen de la vida",
        en: "Origin of Life",
      },
      description: {
        es: "Hipótesis sobre el inicio de la vida en la Tierra",
        en: "Hypotheses about the beginning of life on Earth",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "evo-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la edad aproximada de la Tierra?",
            en: "What is the approximate age of Earth?",
          },
          options: [
            { es: "4,600 millones de años", en: "4,600 million years" },
            { es: "2,000 millones de años", en: "2,000 million years" },
            { es: "10,000 años", en: "10,000 years" },
            { es: "100 millones de años", en: "100 million years" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Tierra tiene aproximadamente 4,600 millones de años. La vida apareció hace ~3,800 millones de años.",
            en: "Earth is approximately 4,600 million years old. Life appeared ~3,800 million years ago.",
          },
          difficulty: 1,
        },
        {
          id: "evo-02",
          type: "true-false",
          prompt: {
            es: "La generación espontánea es la teoría aceptada actualmente sobre el origen de la vida.",
            en: "Spontaneous generation is the currently accepted theory about the origin of life.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. La generación espontánea fue refutada por Pasteur. Teorías actuales: síntesis prebiótica, panspermia.",
            en: "FALSE. Spontaneous generation was refuted by Pasteur. Current theories: prebiotic synthesis, panspermia.",
          },
          difficulty: 1,
        },
        {
          id: "evo-03",
          type: "fill-blank",
          prompt: {
            es: "El experimento de Miller-Urey demostró que se pueden formar _______ orgánicos a partir de compuestos inorgánicos.",
            en: "The Miller-Urey experiment showed that organic _______ can be formed from inorganic compounds.",
          },
          correctAnswer: "aminoácidos",
          explanation: {
            es: "Miller-Urey (1953): simuló atmósfera primitiva y produjo AMINOÁCIDOS (componentes de proteínas).",
            en: "Miller-Urey (1953): simulated primitive atmosphere and produced AMINO ACIDS (protein components).",
          },
          difficulty: 2,
        },
        {
          id: "evo-04",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué propone la teoría de la panspermia?",
            en: "What does the panspermia theory propose?",
          },
          options: [
            {
              es: "La vida llegó a la Tierra desde el espacio",
              en: "Life arrived on Earth from space",
            },
            {
              es: "La vida surgió en volcanes",
              en: "Life arose in volcanoes",
            },
            {
              es: "Los organismos surgen espontáneamente",
              en: "Organisms arise spontaneously",
            },
            {
              es: "La Tierra siempre tuvo vida",
              en: "Earth always had life",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "PANSPERMIA sugiere que moléculas orgánicas o microorganismos llegaron de meteoritos o cometas.",
            en: "PANSPERMIA suggests that organic molecules or microorganisms arrived from meteorites or comets.",
          },
          difficulty: 2,
        },
        {
          id: "evo-05",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles fueron probablemente las primeras formas de vida?",
            en: "What were probably the first forms of life?",
          },
          options: [
            {
              es: "Células procariotas simples",
              en: "Simple prokaryotic cells",
            },
            {
              es: "Mamíferos complejos",
              en: "Complex mammals",
            },
            {
              es: "Plantas con flores",
              en: "Flowering plants",
            },
            {
              es: "Seres humanos",
              en: "Humans",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las primeras formas de vida fueron PROCARIOTAS simples (bacterias), hace ~3,800 millones de años.",
            en: "The first life forms were simple PROKARYOTES (bacteria), ~3,800 million years ago.",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 2: Teorías evolutivas (Practice)
    {
      id: "evolutionary-theories-practice",
      topicId: "evolution",
      order: 2,
      title: {
        es: "Teorías de la evolución",
        en: "Theories of Evolution",
      },
      description: {
        es: "Lamarck, Darwin y síntesis moderna",
        en: "Lamarck, Darwin, and modern synthesis",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "evo-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué proponía Lamarck sobre la evolución?",
            en: "What did Lamarck propose about evolution?",
          },
          options: [
            {
              es: "Los caracteres adquiridos se heredan",
              en: "Acquired characteristics are inherited",
            },
            {
              es: "La selección natural",
              en: "Natural selection",
            },
            {
              es: "Las mutaciones aleatorias",
              en: "Random mutations",
            },
            {
              es: "La deriva genética",
              en: "Genetic drift",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "LAMARCK (incorrecto): caracteres adquiridos se heredan. DARWIN (correcto): selección natural de variaciones.",
            en: "LAMARCK (incorrect): acquired characteristics are inherited. DARWIN (correct): natural selection of variations.",
          },
          difficulty: 2,
        },
        {
          id: "evo-07",
          type: "true-false",
          prompt: {
            es: "Charles Darwin propuso la teoría de la selección natural.",
            en: "Charles Darwin proposed the theory of natural selection.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Darwin publicó 'El origen de las especies' (1859) explicando la SELECCIÓN NATURAL.",
            en: "TRUE. Darwin published 'The Origin of Species' (1859) explaining NATURAL SELECTION.",
          },
          difficulty: 1,
        },
        {
          id: "evo-08",
          type: "fill-blank",
          prompt: {
            es: "Según Darwin, los organismos mejor _______ al ambiente tienen mayor probabilidad de sobrevivir.",
            en: "According to Darwin, organisms best _______ to the environment have greater probability of surviving.",
          },
          correctAnswer: "adaptados",
          explanation: {
            es: "Selección natural: organismos ADAPTADOS sobreviven y reproducen más → descendientes heredan características.",
            en: "Natural selection: ADAPTED organisms survive and reproduce more → offspring inherit characteristics.",
          },
          difficulty: 1,
        },
        {
          id: "evo-09",
          type: "order-steps",
          prompt: {
            es: "Ordena los pasos de la selección natural:",
            en: "Order the steps of natural selection:",
          },
          options: [
            {
              es: "Variación en la población",
              en: "Variation in the population",
            },
            {
              es: "Lucha por la supervivencia",
              en: "Struggle for survival",
            },
            {
              es: "Supervivencia del más apto",
              en: "Survival of the fittest",
            },
            {
              es: "Reproducción diferencial",
              en: "Differential reproduction",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "1) Variación existe 2) Recursos limitados → competencia 3) Más aptos sobreviven 4) Heredan rasgos ventajosos.",
            en: "1) Variation exists 2) Limited resources → competition 3) Fittest survive 4) Inherit advantageous traits.",
          },
          difficulty: 2,
        },
        {
          id: "evo-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué estudió Darwin en las Islas Galápagos?",
            en: "What did Darwin study in the Galápagos Islands?",
          },
          options: [
            {
              es: "Pinzones con diferentes picos",
              en: "Finches with different beaks",
            },
            {
              es: "Plantas acuáticas",
              en: "Aquatic plants",
            },
            {
              es: "Insectos voladores",
              en: "Flying insects",
            },
            {
              es: "Bacterias",
              en: "Bacteria",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Darwin observó PINZONES con picos adaptados a diferentes alimentos en cada isla → evidencia de evolución.",
            en: "Darwin observed FINCHES with beaks adapted to different foods on each island → evidence of evolution.",
          },
          difficulty: 1,
        },
        {
          id: "evo-11",
          type: "true-false",
          prompt: {
            es: "La síntesis moderna combina la selección natural de Darwin con la genética mendeliana.",
            en: "The modern synthesis combines Darwin's natural selection with Mendelian genetics.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. SÍNTESIS MODERNA (neodarwinismo): selección natural + genética + mutaciones + deriva genética.",
            en: "TRUE. MODERN SYNTHESIS (neo-Darwinism): natural selection + genetics + mutations + genetic drift.",
          },
          difficulty: 2,
        },
        {
          id: "evo-12",
          type: "fill-blank",
          prompt: {
            es: "Las _______ son la fuente última de variabilidad genética en las poblaciones.",
            en: "_______ are the ultimate source of genetic variability in populations.",
          },
          correctAnswer: "mutaciones",
          explanation: {
            es: "MUTACIONES crean nueva variabilidad. La selección natural actúa sobre esta variabilidad.",
            en: "MUTATIONS create new variability. Natural selection acts on this variability.",
          },
          difficulty: 2,
        },
        {
          id: "evo-13",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la adaptación evolutiva?",
            en: "What is evolutionary adaptation?",
          },
          options: [
            {
              es: "Característica que aumenta la supervivencia y reproducción",
              en: "Characteristic that increases survival and reproduction",
            },
            {
              es: "Cambio durante la vida del organismo",
              en: "Change during the organism's life",
            },
            {
              es: "Proceso rápido que ocurre en días",
              en: "Rapid process that occurs in days",
            },
            {
              es: "Solo cambios físicos",
              en: "Only physical changes",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ADAPTACIÓN: característica heredable que aumenta éxito reproductivo en ambiente específico (resultado de selección natural).",
            en: "ADAPTATION: heritable characteristic that increases reproductive success in specific environment (result of natural selection).",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 3: Evidencias de la evolución (Practice)
    {
      id: "evolution-evidence-practice",
      topicId: "evolution",
      order: 3,
      title: {
        es: "Evidencias de la evolución",
        en: "Evidence of Evolution",
      },
      description: {
        es: "Pruebas que sustentan la evolución biológica",
        en: "Evidence supporting biological evolution",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "evo-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué son los fósiles?",
            en: "What are fossils?",
          },
          options: [
            {
              es: "Restos o huellas de organismos antiguos preservados",
              en: "Remains or traces of ancient organisms preserved",
            },
            {
              es: "Rocas modernas sin valor científico",
              en: "Modern rocks with no scientific value",
            },
            {
              es: "Solo huesos de dinosaurios",
              en: "Only dinosaur bones",
            },
            {
              es: "Plantas actuales",
              en: "Current plants",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "FÓSILES son evidencia paleontológica: restos, huellas, impresiones de organismos que vivieron hace mucho tiempo.",
            en: "FOSSILS are paleontological evidence: remains, traces, impressions of organisms that lived long ago.",
          },
          difficulty: 1,
        },
        {
          id: "evo-15",
          type: "true-false",
          prompt: {
            es: "Los órganos vestigiales son estructuras que perdieron su función original.",
            en: "Vestigial organs are structures that lost their original function.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Órganos VESTIGIALES: apéndice humano, alas de avestruz, ojos de peces ciegos → evidencia evolutiva.",
            en: "TRUE. VESTIGIAL organs: human appendix, ostrich wings, blind fish eyes → evolutionary evidence.",
          },
          difficulty: 1,
        },
        {
          id: "evo-16",
          type: "fill-blank",
          prompt: {
            es: "Estructuras con el mismo origen evolutivo pero diferentes funciones se llaman _______.",
            en: "Structures with the same evolutionary origin but different functions are called _______.",
          },
          correctAnswer: "homólogas",
          explanation: {
            es: "Estructuras HOMÓLOGAS: mismo origen, diferente función. Ej: brazo humano, ala de murciélago, aleta de ballena.",
            en: "HOMOLOGOUS structures: same origin, different function. Ex: human arm, bat wing, whale flipper.",
          },
          difficulty: 2,
        },
        {
          id: "evo-17",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de evidencia proporcionan el desarrollo embrionario similar entre especies?",
            en: "What type of evidence does similar embryonic development among species provide?",
          },
          options: [
            { es: "Evidencia embriológica", en: "Embryological evidence" },
            { es: "Evidencia molecular", en: "Molecular evidence" },
            { es: "Evidencia fósil", en: "Fossil evidence" },
            { es: "Evidencia conductual", en: "Behavioral evidence" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Evidencia EMBRIOLÓGICA: embriones de vertebrados se parecen en etapas tempranas → ancestro común.",
            en: "EMBRYOLOGICAL evidence: vertebrate embryos resemble each other in early stages → common ancestor.",
          },
          difficulty: 2,
        },
        {
          id: "evo-18",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué evidencia molecular apoya la evolución?",
            en: "What molecular evidence supports evolution?",
          },
          options: [
            {
              es: "Similitud en secuencias de ADN y proteínas",
              en: "Similarity in DNA and protein sequences",
            },
            {
              es: "Color de los organismos",
              en: "Color of organisms",
            },
            {
              es: "Tamaño corporal",
              en: "Body size",
            },
            {
              es: "Hábitat preferido",
              en: "Preferred habitat",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Evidencia MOLECULAR: organismos relacionados tienen ADN y proteínas más similares. Ej: humanos y chimpancés ~99% ADN.",
            en: "MOLECULAR evidence: related organisms have more similar DNA and proteins. Ex: humans and chimps ~99% DNA.",
          },
          difficulty: 1,
        },
        {
          id: "evo-19",
          type: "true-false",
          prompt: {
            es: "La biogeografía estudia la distribución geográfica de los seres vivos como evidencia evolutiva.",
            en: "Biogeography studies the geographic distribution of living beings as evolutionary evidence.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. BIOGEOGRAFÍA: especies más cercanas geográficamente están más relacionadas evolutivamente.",
            en: "TRUE. BIOGEOGRAPHY: geographically closer species are more evolutionarily related.",
          },
          difficulty: 2,
        },
        {
          id: "evo-20",
          type: "fill-blank",
          prompt: {
            es: "Las estructuras que tienen funciones similares pero diferente origen evolutivo se llaman _______.",
            en: "Structures with similar functions but different evolutionary origin are called _______.",
          },
          correctAnswer: "análogas",
          explanation: {
            es: "Estructuras ANÁLOGAS: misma función, diferente origen. Ej: alas de insecto vs alas de ave (evolución convergente).",
            en: "ANALOGOUS structures: same function, different origin. Ex: insect wings vs bird wings (convergent evolution).",
          },
          difficulty: 2,
        },
        {
          id: "evo-21",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué muestra el registro fósil?",
            en: "What does the fossil record show?",
          },
          options: [
            {
              es: "Cambios graduales en las especies a través del tiempo",
              en: "Gradual changes in species over time",
            },
            {
              es: "Que todas las especies son iguales",
              en: "That all species are the same",
            },
            {
              es: "Que no hay extinción",
              en: "That there is no extinction",
            },
            {
              es: "Solo organismos modernos",
              en: "Only modern organisms",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El registro fósil muestra transiciones evolutivas, extinciones, y que la vida ha cambiado dramáticamente.",
            en: "The fossil record shows evolutionary transitions, extinctions, and that life has changed dramatically.",
          },
          difficulty: 1,
        },
      ],
    },

    // LESSON 4: Mecanismos evolutivos (Practice)
    {
      id: "evolutionary-mechanisms-practice",
      topicId: "evolution",
      order: 4,
      title: {
        es: "Mecanismos evolutivos",
        en: "Evolutionary Mechanisms",
      },
      description: {
        es: "Factores que causan cambios en las poblaciones",
        en: "Factors causing changes in populations",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "evo-22",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la deriva genética?",
            en: "What is genetic drift?",
          },
          options: [
            {
              es: "Cambios aleatorios en frecuencias alélicas",
              en: "Random changes in allele frequencies",
            },
            {
              es: "Selección natural dirigida",
              en: "Directed natural selection",
            },
            {
              es: "Migración de todas las especies",
              en: "Migration of all species",
            },
            {
              es: "Reproducción asexual",
              en: "Asexual reproduction",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "DERIVA GENÉTICA: cambios ALEATORIOS en frecuencias alélicas. Mayor efecto en poblaciones pequeñas.",
            en: "GENETIC DRIFT: RANDOM changes in allele frequencies. Greater effect in small populations.",
          },
          difficulty: 2,
        },
        {
          id: "evo-23",
          type: "true-false",
          prompt: {
            es: "El flujo génico ocurre cuando individuos migran entre poblaciones llevando genes.",
            en: "Gene flow occurs when individuals migrate between populations carrying genes.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. FLUJO GÉNICO (migración): movimiento de alelos entre poblaciones. Aumenta variabilidad genética.",
            en: "TRUE. GENE FLOW (migration): movement of alleles between populations. Increases genetic variability.",
          },
          difficulty: 1,
        },
        {
          id: "evo-24",
          type: "fill-blank",
          prompt: {
            es: "El efecto _______ ocurre cuando una pequeña población funda una nueva población con poca variabilidad genética.",
            en: "The _______ effect occurs when a small population founds a new population with low genetic variability.",
          },
          correctAnswer: "fundador",
          explanation: {
            es: "Efecto FUNDADOR: pocos individuos establecen nueva población → frecuencias alélicas diferentes (tipo de deriva genética).",
            en: "FOUNDER effect: few individuals establish new population → different allele frequencies (type of genetic drift).",
          },
          difficulty: 2,
        },
        {
          id: "evo-25",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la especiación?",
            en: "What is speciation?",
          },
          options: [
            {
              es: "Formación de nuevas especies",
              en: "Formation of new species",
            },
            {
              es: "Muerte de todas las especies",
              en: "Death of all species",
            },
            {
              es: "Crecimiento poblacional",
              en: "Population growth",
            },
            {
              es: "Cambio de hábitat",
              en: "Habitat change",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ESPECIACIÓN: proceso por el que una población evoluciona y se divide en dos o más especies distintas.",
            en: "SPECIATION: process by which a population evolves and divides into two or more distinct species.",
          },
          difficulty: 1,
        },
        {
          id: "evo-26",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de selección favorece fenotipos extremos?",
            en: "What type of selection favors extreme phenotypes?",
          },
          options: [
            { es: "Selección disruptiva", en: "Disruptive selection" },
            { es: "Selección estabilizadora", en: "Stabilizing selection" },
            { es: "Selección direccional", en: "Directional selection" },
            { es: "Selección aleatoria", en: "Random selection" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Selección DISRUPTIVA: favorece extremos (elimina intermedios). ESTABILIZADORA: favorece promedio. DIRECCIONAL: favorece un extremo.",
            en: "DISRUPTIVE selection: favors extremes (eliminates intermediates). STABILIZING: favors average. DIRECTIONAL: favors one extreme.",
          },
          difficulty: 3,
        },
        {
          id: "evo-27",
          type: "true-false",
          prompt: {
            es: "El aislamiento reproductivo es necesario para que ocurra la especiación.",
            en: "Reproductive isolation is necessary for speciation to occur.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. AISLAMIENTO REPRODUCTIVO impide el flujo génico entre poblaciones → pueden divergir en especies.",
            en: "TRUE. REPRODUCTIVE ISOLATION prevents gene flow between populations → they can diverge into species.",
          },
          difficulty: 2,
        },
        {
          id: "evo-28",
          type: "fill-blank",
          prompt: {
            es: "La especiación que ocurre en la misma área geográfica se llama especiación _______.",
            en: "Speciation that occurs in the same geographic area is called _______ speciation.",
          },
          correctAnswer: "simpátrica",
          explanation: {
            es: "Especiación SIMPÁTRICA: en la misma área (rara). ALOPÁTRICA: por separación geográfica (más común).",
            en: "SYMPATRIC speciation: in the same area (rare). ALLOPATRIC: by geographic separation (more common).",
          },
          difficulty: 2,
        },
        {
          id: "evo-29",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la coevolución?",
            en: "What is coevolution?",
          },
          options: [
            {
              es: "Evolución recíproca de dos especies que interactúan",
              en: "Reciprocal evolution of two interacting species",
            },
            {
              es: "Evolución simultánea de todas las especies",
              en: "Simultaneous evolution of all species",
            },
            {
              es: "Ausencia de evolución",
              en: "Absence of evolution",
            },
            {
              es: "Evolución reversible",
              en: "Reversible evolution",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "COEVOLUCIÓN: dos especies evolucionan en respuesta una a la otra. Ej: flores y polinizadores, depredador-presa.",
            en: "COEVOLUTION: two species evolve in response to each other. Ex: flowers and pollinators, predator-prey.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 5: Biodiversidad y adaptación (Quiz)
    {
      id: "evolution-quiz",
      topicId: "evolution",
      order: 5,
      title: {
        es: "Evaluación: Evolución y biodiversidad",
        en: "Assessment: Evolution and Biodiversity",
      },
      description: {
        es: "Demuestra tu conocimiento sobre evolución",
        en: "Demonstrate your knowledge about evolution",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "evo-q01",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la unidad básica de la evolución?",
            en: "What is the basic unit of evolution?",
          },
          options: [
            { es: "La población", en: "The population" },
            { es: "El individuo", en: "The individual" },
            { es: "La célula", en: "The cell" },
            { es: "El gen aislado", en: "The isolated gene" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La POBLACIÓN es la unidad evolutiva. Los individuos no evolucionan, las poblaciones evolucionan a través de generaciones.",
            en: "The POPULATION is the evolutionary unit. Individuals don't evolve, populations evolve across generations.",
          },
          difficulty: 2,
        },
        {
          id: "evo-q02",
          type: "order-steps",
          prompt: {
            es: "Ordena cronológicamente estos eventos evolutivos:",
            en: "Order these evolutionary events chronologically:",
          },
          options: [
            {
              es: "Células procariotas",
              en: "Prokaryotic cells",
            },
            {
              es: "Células eucariotas",
              en: "Eukaryotic cells",
            },
            {
              es: "Organismos multicelulares",
              en: "Multicellular organisms",
            },
            {
              es: "Colonización de tierra",
              en: "Land colonization",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Secuencia: Procariotas (~3,800 Ma) → Eucariotas (~2,000 Ma) → Multicelulares (~600 Ma) → Tierra (~500 Ma).",
            en: "Sequence: Prokaryotes (~3,800 Ma) → Eukaryotes (~2,000 Ma) → Multicellular (~600 Ma) → Land (~500 Ma).",
          },
          difficulty: 2,
        },
        {
          id: "evo-q03",
          type: "true-false",
          prompt: {
            es: "La teoría de Lamarck sobre caracteres adquiridos es correcta según la ciencia moderna.",
            en: "Lamarck's theory about acquired characters is correct according to modern science.",
          },
          correctAnswer: "false",
          explanation: {
            es: "FALSO. Los caracteres adquiridos durante la vida NO se heredan. La herencia sigue las leyes de Mendel.",
            en: "FALSE. Characters acquired during life are NOT inherited. Inheritance follows Mendel's laws.",
          },
          difficulty: 1,
        },
        {
          id: "evo-q04",
          type: "fill-blank",
          prompt: {
            es: "El proceso por el cual especies no relacionadas desarrollan características similares se llama evolución _______.",
            en: "The process by which unrelated species develop similar characteristics is called _______ evolution.",
          },
          correctAnswer: "convergente",
          explanation: {
            es: "Evolución CONVERGENTE: ambientes similares → adaptaciones similares. Ej: alas de insectos, aves, murciélagos.",
            en: "CONVERGENT evolution: similar environments → similar adaptations. Ex: wings of insects, birds, bats.",
          },
          difficulty: 2,
        },
        {
          id: "evo-q05",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la biodiversidad?",
            en: "What is biodiversity?",
          },
          options: [
            {
              es: "Variedad de organismos vivos en un área",
              en: "Variety of living organisms in an area",
            },
            {
              es: "Número de células en un organismo",
              en: "Number of cells in an organism",
            },
            {
              es: "Tamaño de una población",
              en: "Size of a population",
            },
            {
              es: "Cantidad de agua en un ecosistema",
              en: "Amount of water in an ecosystem",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "BIODIVERSIDAD es la variedad de vida: diversidad genética, de especies, y de ecosistemas.",
            en: "BIODIVERSITY is the variety of life: genetic diversity, species diversity, and ecosystem diversity.",
          },
          difficulty: 1,
        },
        {
          id: "evo-q06",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál NO es evidencia de la evolución?",
            en: "Which is NOT evidence of evolution?",
          },
          options: [
            {
              es: "El color de ojos de una persona",
              en: "A person's eye color",
            },
            {
              es: "Fósiles transicionales",
              en: "Transitional fossils",
            },
            {
              es: "Estructuras homólogas",
              en: "Homologous structures",
            },
            {
              es: "Similitud de ADN",
              en: "DNA similarity",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El color de ojos es herencia individual, NO evidencia evolutiva. Evidencias: fósiles, anatomía comparada, molecular, biogeografía.",
            en: "Eye color is individual inheritance, NOT evolutionary evidence. Evidence: fossils, comparative anatomy, molecular, biogeography.",
          },
          difficulty: 2,
        },
        {
          id: "evo-q07",
          type: "true-false",
          prompt: {
            es: "Las adaptaciones son características que aumentan la probabilidad de supervivencia y reproducción.",
            en: "Adaptations are characteristics that increase the likelihood of survival and reproduction.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Adaptaciones son rasgos heredables favorecidos por selección natural que mejoran aptitud biológica.",
            en: "TRUE. Adaptations are heritable traits favored by natural selection that improve biological fitness.",
          },
          difficulty: 1,
        },
        {
          id: "evo-q08",
          type: "fill-blank",
          prompt: {
            es: "La extinción _______ fue un evento hace 65 millones de años que eliminó a los dinosaurios.",
            en: "The _______ extinction was an event 65 million years ago that eliminated dinosaurs.",
          },
          correctAnswer: "masiva",
          explanation: {
            es: "Extinción MASIVA del Cretácico-Paleógeno (K-Pg): probable impacto de asteroide eliminó ~75% de especies, incluyend dinosaurios.",
            en: "MASS extinction of Cretaceous-Paleogene (K-Pg): probable asteroid impact eliminated ~75% of species, including dinosaurs.",
          },
          difficulty: 2,
        },
        {
          id: "evo-q09",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué factor NO causa evolución?",
            en: "Which factor does NOT cause evolution?",
          },
          options: [
            {
              es: "Reproducción sexual sin cambios alélicos",
              en: "Sexual reproduction without allele changes",
            },
            {
              es: "Mutaciones",
              en: "Mutations",
            },
            {
              es: "Selección natural",
              en: "Natural selection",
            },
            {
              es: "Deriva genética",
              en: "Genetic drift",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Reproducción sexual mezcla alelos pero no cambia frecuencias. Evolución requiere: mutación, selección, deriva, flujo génico.",
            en: "Sexual reproduction mixes alleles but doesn't change frequencies. Evolution requires: mutation, selection, drift, gene flow.",
          },
          difficulty: 3,
        },
        {
          id: "evo-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es la radiación adaptativa?",
            en: "What is adaptive radiation?",
          },
          options: [
            {
              es: "Diversificación rápida de una especie en muchas formas",
              en: "Rapid diversification of a species into many forms",
            },
            {
              es: "Exposición a radiación nuclear",
              en: "Exposure to nuclear radiation",
            },
            {
              es: "Migración de todas las especies",
              en: "Migration of all species",
            },
            {
              es: "Extinción gradual",
              en: "Gradual extinction",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "RADIACIÓN ADAPTATIVA: una especie diversifica rápidamente en nuevos nichos. Ej: pinzones de Darwin, lémures de Madagascar.",
            en: "ADAPTIVE RADIATION: a species rapidly diversifies into new niches. Ex: Darwin's finches, Madagascar lemurs.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
