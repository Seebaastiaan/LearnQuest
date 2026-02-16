import type { Topic } from "@/lib/types";

export const heredityTopic: Topic = {
  id: "heredity",
  slug: "herencia",
  title: {
    es: "Mecanismos de la herencia",
    en: "Mechanisms of Heredity",
  },
  description: {
    es: "Genética mendeliana y herencia molecular",
    en: "Mendelian genetics and molecular heredity",
  },
  icon: "Dna",
  color: "emerald",
  bgGradient: "bg-linear-to-br from-emerald-500 to-teal-600",
  prerequisites: ["reproduction"],
  order: 4,
  lessons: [
    // LESSON 1: Leyes de Mendel (Learn)
    {
      id: "mendel-laws-learn",
      topicId: "heredity",
      order: 1,
      title: {
        es: "Leyes de Mendel",
        en: "Mendel's Laws",
      },
      description: {
        es: "Principios básicos de la herencia genética",
        en: "Basic principles of genetic inheritance",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "hered-01",
          type: "multiple-choice",
          prompt: {
            es: "¿Quién es considerado el padre de la genética?",
            en: "Who is considered the father of genetics?",
          },
          options: [
            { es: "Gregor Mendel", en: "Gregor Mendel" },
            { es: "Charles Darwin", en: "Charles Darwin" },
            { es: "Louis Pasteur", en: "Louis Pasteur" },
            { es: "James Watson", en: "James Watson" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "GREGOR MENDEL (1822-1884) descubrió las leyes de la herencia experimentando con guisantes.",
            en: "GREGOR MENDEL (1822-1884) discovered the laws of inheritance experimenting with peas.",
          },
          difficulty: 1,
        },
        {
          id: "hered-02",
          type: "true-false",
          prompt: {
            es: "Un alelo dominante se expresa incluso cuando hay un solo alelo presente.",
            en: "A dominant allele is expressed even when only one allele is present.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Alelo DOMINANTE (A) se expresa en AA y Aa. Alelo RECESIVO (a) solo en aa.",
            en: "TRUE. DOMINANT allele (A) is expressed in AA and Aa. RECESSIVE allele (a) only in aa.",
          },
          difficulty: 1,
        },
        {
          id: "hered-03",
          type: "fill-blank",
          prompt: {
            es: "El conjunto de alelos que posee un organismo se llama _______.",
            en: "The set of alleles an organism possesses is called _______.",
          },
          correctAnswer: "genotipo",
          explanation: {
            es: "GENOTIPO = conjunto de genes/alelos (Ej: AA, Aa, aa). FENOTIPO = características observables (Ej: alto, bajo).",
            en: "GENOTYPE = set of genes/alleles (Ex: AA, Aa, aa). PHENOTYPE = observable characteristics (Ex: tall, short).",
          },
          difficulty: 1,
        },
        {
          id: "hered-04",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué establece la Primera Ley de Mendel (Ley de la Segregación)?",
            en: "What does Mendel's First Law (Law of Segregation) state?",
          },
          options: [
            {
              es: "Los alelos se separan durante la formación de gametos",
              en: "Alleles separate during gamete formation",
            },
            {
              es: "Los genes se heredan juntos",
              en: "Genes are inherited together",
            },
            {
              es: "Los cromosomas se duplican",
              en: "Chromosomes duplicate",
            },
            {
              es: "Las mutaciones son aleatorias",
              en: "Mutations are random",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "1ª Ley de SEGREGACIÓN: los dos alelos de un gen se separan durante la meiosis. Cada gameto recibe solo 1 alelo.",
            en: "1st Law of SEGREGATION: the two alleles of a gene separate during meiosis. Each gamete receives only 1 allele.",
          },
          difficulty: 2,
        },
        {
          id: "hered-05",
          type: "multiple-choice",
          prompt: {
            es: "Si se cruza Aa x Aa, ¿qué proporción fenotípica se espera (si A es dominante)?",
            en: "If Aa x Aa are crossed, what phenotypic ratio is expected (if A is dominant)?",
          },
          options: [
            { es: "3:1 (dominante:recesivo)", en: "3:1 (dominant:recessive)" },
            { es: "1:1", en: "1:1" },
            { es: "2:1", en: "2:1" },
            { es: "4:0", en: "4:0" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Aa x Aa → 1 AA : 2 Aa : 1 aa (genotipo). Fenotipo: 3 dominante : 1 recesivo = 3:1.",
            en: "Aa x Aa → 1 AA : 2 Aa : 1 aa (genotype). Phenotype: 3 dominant : 1 recessive = 3:1.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 2: Cuadro de Punnett y herencia (Practice)
    {
      id: "punnett-practice",
      topicId: "heredity",
      order: 2,
      title: {
        es: "Cuadro de Punnett",
        en: "Punnett Square",
      },
      description: {
        es: "Predice la herencia de características",
        en: "Predict inheritance of traits",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "hered-06",
          type: "multiple-choice",
          prompt: {
            es: "¿Para qué se usa el cuadro de Punnett?",
            en: "What is the Punnett square used for?",
          },
          options: [
            {
              es: "Predecir proporciones genotípicas y fenotípicas",
              en: "Predict genotypic and phenotypic ratios",
            },
            {
              es: "Observar cromosomas",
              en: "Observe chromosomes",
            },
            {
              es: "Medir temperatura",
              en: "Measure temperature",
            },
            {
              es: "Contar células",
              en: "Count cells",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El CUADRO DE PUNNETT muestra todas las combinaciones posibles de alelos en la descendencia.",
            en: "The PUNNETT SQUARE shows all possible combinations of alleles in offspring.",
          },
          difficulty: 1,
        },
        {
          id: "hered-07",
          type: "true-false",
          prompt: {
            es: "Un organismo homocigoto tiene dos alelos idénticos para un gen.",
            en: "A homozygous organism has two identical alleles for a gene.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. HOMOCIGOTO: AA o aa (alelos idénticos). HETEROCIGOTO: Aa (alelos diferentes).",
            en: "TRUE. HOMOZYGOUS: AA or aa (identical alleles). HETEROZYGOUS: Aa (different alleles).",
          },
          difficulty: 1,
        },
        {
          id: "hered-08",
          type: "fill-blank",
          prompt: {
            es: "Un cruce entre un homocigoto dominante (AA) y un homocigoto recesivo (aa) produce descendencia 100% _______.",
            en: "A cross between a homozygous dominant (AA) and a homozygous recessive (aa) produces 100% _______ offspring.",
          },
          correctAnswer: "heterocigota",
          explanation: {
            es: "AA x aa → 100% Aa (heterocigoto). Todos tendrán fenotipo dominante.",
            en: "AA x aa → 100% Aa (heterozygous). All will have dominant phenotype.",
          },
          difficulty: 2,
        },
        {
          id: "hered-09",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué proporción genotípica resulta del cruce Aa x Aa?",
            en: "What genotypic ratio results from the cross Aa x Aa?",
          },
          options: [
            { es: "1 AA : 2 Aa : 1 aa", en: "1 AA : 2 Aa : 1 aa" },
            { es: "3 AA : 1 aa", en: "3 AA : 1 aa" },
            { es: "1 AA : 1 Aa", en: "1 AA : 1 Aa" },
            { es: "4 Aa", en: "4 Aa" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Aa x Aa produce: 25% AA, 50% Aa, 25% aa → proporción 1:2:1.",
            en: "Aa x Aa produces: 25% AA, 50% Aa, 25% aa → ratio 1:2:1.",
          },
          difficulty: 2,
        },
        {
          id: "hered-10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué establece la Segunda Ley de Mendel (Ley de la Distribución Independiente)?",
            en: "What does Mendel's Second Law (Law of Independent Assortment) state?",
          },
          options: [
            {
              es: "Los genes en cromosomas diferentes se heredan independientemente",
              en: "Genes on different chromosomes are inherited independently",
            },
            {
              es: "Los alelos nunca se separan",
              en: "Alleles never separate",
            },
            {
              es: "Todos los genes están ligados",
              en: "All genes are linked",
            },
            {
              es: "El ADN no muta",
              en: "DNA does not mutate",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "2ª Ley: los genes en CROMOSOMAS DIFERENTES se distribuyen independientemente en los gametos.",
            en: "2nd Law: genes on DIFFERENT CHROMOSOMES are distributed independently in gametes.",
          },
          difficulty: 2,
        },
        {
          id: "hered-11",
          type: "true-false",
          prompt: {
            es: "En herencia intermedia, el heterocigoto muestra un fenotipo intermedio entre los dos homocigotos.",
            en: "In intermediate inheritance, the heterozygote shows an intermediate phenotype between both homozygotes.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Ej: flores rojas (RR) x blancas (BB) → rosas (RB). No hay dominancia completa.",
            en: "TRUE. Ex: red flowers (RR) x white (BB) → pink (RB). No complete dominance.",
          },
          difficulty: 2,
        },
        {
          id: "hered-12",
          type: "fill-blank",
          prompt: {
            es: "Cuando ambos alelos se expresan simultáneamente en el heterocigoto, se llama _______.",
            en: "When both alleles are expressed simultaneously in the heterozygote, it's called _______.",
          },
          correctAnswer: "codominancia",
          explanation: {
            es: "CODOMINANCIA: ambos alelos se expresan. Ej: grupo sanguíneo AB (alelos A y B se expresan ambos).",
            en: "CODOMINANCE: both alleles are expressed. Ex: blood type AB (A and B alleles both expressed).",
          },
          difficulty: 2,
        },
        {
          id: "hered-13",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es un ejemplo de herencia ligada al sexo?",
            en: "What is an example of sex-linked inheritance?",
          },
          options: [
            {
              es: "Hemofilia y daltonismo",
              en: "Hemophilia and color blindness",
            },
            { es: "Grupo sanguíneo", en: "Blood type" },
            { es: "Color de ojos", en: "Eye color" },
            { es: "Altura", en: "Height" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "HEMOFILIA y DALTONISMO están en el cromosoma X. Los hombres (XY) son más afectados que mujeres (XX).",
            en: "HEMOPHILIA and COLOR BLINDNESS are on the X chromosome. Males (XY) are more affected than females (XX).",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 3: Cromosomas y ADN (Practice)
    {
      id: "chromosomes-dna-practice",
      topicId: "heredity",
      order: 3,
      title: {
        es: "Cromosomas y material genético",
        en: "Chromosomes and Genetic Material",
      },
      description: {
        es: "Estructura y función del ADN",
        en: "DNA structure and function",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "hered-14",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué son los cromosomas?",
            en: "What are chromosomes?",
          },
          options: [
            {
              es: "Estructuras de ADN condensado y proteínas",
              en: "Structures of condensed DNA and proteins",
            },
            {
              es: "Orgánulos que producen energía",
              en: "Organelles that produce energy",
            },
            {
              es: "Membrana nuclear",
              en: "Nuclear membrane",
            },
            {
              es: "Tipo de célula",
              en: "Type of cell",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los CROMOSOMAS son ADN condensado enrollado en proteínas histonas. Contienen genes.",
            en: "CHROMOSOMES are condensed DNA wrapped around histone proteins. They contain genes.",
          },
          difficulty: 1,
        },
        {
          id: "hered-15",
          type: "fill-blank",
          prompt: {
            es: "Los humanos tienen _______ pares de cromosomas en células somáticas.",
            en: "Humans have _______ pairs of chromosomes in somatic cells.",
          },
          correctAnswer: "23",
          explanation: {
            es: "Humanos: 23 PARES = 46 cromosomas totales (22 pares autosómicos + 1 par sexual XX o XY).",
            en: "Humans: 23 PAIRS = 46 total chromosomes (22 autosomal pairs + 1 sex pair XX or XY).",
          },
          difficulty: 1,
        },
        {
          id: "hered-16",
          type: "true-false",
          prompt: {
            es: "El ADN está compuesto por nucleótidos que contienen azúcar, fosfato y base nitrogenada.",
            en: "DNA is composed of nucleotides containing sugar, phosphate, and nitrogenous base.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Nucleótido = desoxirribosa (azúcar) + fosfato + base (A, T, C, o G).",
            en: "TRUE. Nucleotide = deoxyribose (sugar) + phosphate + base (A, T, C, or G).",
          },
          difficulty: 1,
        },
        {
          id: "hered-17",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las cuatro bases nitrogenadas del ADN?",
            en: "What are the four nitrogenous bases of DNA?",
          },
          options: [
            {
              es: "Adenina, Timina, Citosina, Guanina",
              en: "Adenine, Thymine, Cytosine, Guanine",
            },
            {
              es: "Adenina, Uracilo, Citosina, Guanina",
              en: "Adenine, Uracil, Cytosine, Guanine",
            },
            {
              es: "Glucosa, Ribosa, Timina, Guanina",
              en: "Glucose, Ribose, Thymine, Guanine",
            },
            {
              es: "Proteínas A, B, C, D",
              en: "Proteins A, B, C, D",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ADN: A (adenina), T (timina), C (citosina), G (guanina). Apareamiento: A-T y C-G.",
            en: "DNA: A (adenine), T (thymine), C (cytosine), G (guanine). Pairing: A-T and C-G.",
          },
          difficulty: 1,
        },
        {
          id: "hered-18",
          type: "fill-blank",
          prompt: {
            es: "La estructura del ADN es una doble _______ descubierta por Watson y Crick.",
            en: "DNA structure is a double _______ discovered by Watson and Crick.",
          },
          correctAnswer: "hélice",
          explanation: {
            es: "El ADN tiene estructura de DOBLE HÉLICE (descubierta en 1953 por Watson, Crick, Franklin y Wilkins).",
            en: "DNA has a DOUBLE HELIX structure (discovered in 1953 by Watson, Crick, Franklin, and Wilkins).",
          },
          difficulty: 1,
        },
        {
          id: "hered-19",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es un gen?",
            en: "What is a gene?",
          },
          options: [
            {
              es: "Segmento de ADN que codifica una proteína",
              en: "DNA segment that codes for a protein",
            },
            {
              es: "Un cromosoma completo",
              en: "A complete chromosome",
            },
            {
              es: "Un tipo de célula",
              en: "A type of cell",
            },
            {
              es: "Una enzima",
              en: "An enzyme",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Un GEN es una secuencia de ADN que codifica información para sintetizar una proteína o ARN funcional.",
            en: "A GENE is a DNA sequence that encodes information to synthesize a protein or functional RNA.",
          },
          difficulty: 1,
        },
        {
          id: "hered-20",
          type: "true-false",
          prompt: {
            es: "Las mutaciones son cambios en la secuencia del ADN.",
            en: "Mutations are changes in the DNA sequence.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. MUTACIONES = cambios en ADN (sustitución, inserción, deleción). Pueden ser beneficiosas, neutrales o dañinas.",
            en: "TRUE. MUTATIONS = DNA changes (substitution, insertion, deletion). Can be beneficial, neutral, or harmful.",
          },
          difficulty: 1,
        },
        {
          id: "hered-21",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tecnología permite editar genes con precisión?",
            en: "What technology allows precise gene editing?",
          },
          options: [
            { es: "CRISPR-Cas9", en: "CRISPR-Cas9" },
            { es: "Microscopio", en: "Microscope" },
            { es: "PCR", en: "PCR" },
            { es: "Centrifugación", en: "Centrifugation" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "CRISPR-Cas9 es una herramienta de edición genética que permite cortar y modificar ADN con precisión.",
            en: "CRISPR-Cas9 is a gene editing tool that allows cutting and modifying DNA with precision.",
          },
          difficulty: 2,
        },
      ],
    },

    // LESSON 4: Evaluación de herencia (Quiz)
    {
      id: "heredity-quiz",
      topicId: "heredity",
      order: 4,
      title: {
        es: "Evaluación: Herencia",
        en: "Assessment: Heredity",
      },
      description: {
        es: "Demuestra tu conocimiento sobre genética",
        en: "Demonstrate your knowledge about genetics",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "hered-q01",
          type: "multiple-choice",
          prompt: {
            es: "Si se cruza Rr x rr (R dominante), ¿qué proporción fenotípica se espera?",
            en: "If Rr x rr are crossed (R dominant), what phenotypic ratio is expected?",
          },
          options: [
            { es: "1:1 (dominante:recesivo)", en: "1:1 (dominant:recessive)" },
            { es: "3:1", en: "3:1" },
            { es: "100% dominante", en: "100% dominant" },
            { es: "100% recesivo", en: "100% recessive" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Rr x rr → 50% Rr (dominante) y 50% rr (recesivo) = proporción fenotípica 1:1.",
            en: "Rr x rr → 50% Rr (dominant) and 50% rr (recessive) = phenotypic ratio 1:1.",
          },
          difficulty: 2,
        },
        {
          id: "hered-q02",
          type: "fill-blank",
          prompt: {
            es: "Un organismo con genotipo Aa es _______.",
            en: "An organism with genotype Aa is _______.",
          },
          correctAnswer: "heterocigoto",
          explanation: {
            es: "Aa = HETEROCIGOTO (alelos diferentes). AA o aa = HOMOCIGOTO (alelos iguales).",
            en: "Aa = HETEROZYGOUS (different alleles). AA or aa = HOMOZYGOUS (same alleles).",
          },
          difficulty: 1,
        },
        {
          id: "hered-q03",
          type: "true-false",
          prompt: {
            es: "El fenotipo es la apariencia física observable de un organismo.",
            en: "The phenotype is the observable physical appearance of an organism.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. FENOTIPO = características observables. GENOTIPO = información genética (alelos).",
            en: "TRUE. PHENOTYPE = observable characteristics. GENOTYPE = genetic information (alleles).",
          },
          difficulty: 1,
        },
        {
          id: "hered-q04",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántos cromosomas tiene un espermatozoide humano?",
            en: "How many chromosomes does a human sperm have?",
          },
          options: [
            { es: "23", en: "23" },
            { es: "46", en: "46" },
            { es: "92", en: "92" },
            { es: "12", en: "12" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los gametos (óvulos y espermatozoides) son haploides: 23 cromosomas (n). Células somáticas: 46 (2n).",
            en: "Gametes (eggs and sperm) are haploid: 23 chromosomes (n). Somatic cells: 46 (2n).",
          },
          difficulty: 1,
        },
        {
          id: "hered-q05",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles bases nitrogenadas se aparean en el ADN?",
            en: "Which nitrogenous bases pair in DNA?",
          },
          options: [
            { es: "A con T, y C con G", en: "A with T, and C with G" },
            { es: "A con G, y T con C", en: "A with G, and T with C" },
            { es: "A con C, y T con G", en: "A with C, and T with G" },
            { es: "Todas se aparean igual", en: "All pair equally" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Complementariedad de bases: A-T (2 puentes H) y C-G (3 puentes H). Ley de Chargaff.",
            en: "Base complementarity: A-T (2 H bonds) and C-G (3 H bonds). Chargaff's rule.",
          },
          difficulty: 1,
        },
        {
          id: "hered-q06",
          type: "order-steps",
          prompt: {
            es: "Ordena los niveles de organización del material genético:",
            en: "Order the levels of organization of genetic material:",
          },
          options: [
            { es: "Nucleótido", en: "Nucleotide" },
            { es: "ADN", en: "DNA" },
            { es: "Gen", en: "Gene" },
            { es: "Cromosoma", en: "Chromosome" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Nucleótido → ADN (cadena de nucleótidos) → Gen (segmento de ADN) → Cromosoma (ADN + proteínas).",
            en: "Nucleotide → DNA (chain of nucleotides) → Gene (DNA segment) → Chromosome (DNA + proteins).",
          },
          difficulty: 2,
        },
        {
          id: "hered-q07",
          type: "true-false",
          prompt: {
            es: "La hemofilia es más común en hombres porque es un rasgo ligado al cromosoma X.",
            en: "Hemophilia is more common in men because it is an X-linked trait.",
          },
          correctAnswer: "true",
          explanation: {
            es: "VERDADERO. Hombres (XY) solo necesitan 1 alelo recesivo. Mujeres (XX) necesitan 2 para manifestar el rasgo.",
            en: "TRUE. Males (XY) only need 1 recessive allele. Females (XX) need 2 to manifest the trait.",
          },
          difficulty: 2,
        },
        {
          id: "hered-q08",
          type: "fill-blank",
          prompt: {
            es: "El proceso de copia del ADN se llama _______.",
            en: "The process of copying DNA is called _______.",
          },
          correctAnswer: "replicación",
          explanation: {
            es: "REPLICACIÓN del ADN ocurre en la fase S del ciclo celular. Enzima principal: ADN polimerasa.",
            en: "DNA REPLICATION occurs in the S phase of the cell cycle. Main enzyme: DNA polymerase.",
          },
          difficulty: 2,
        },
        {
          id: "hered-q09",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es el ADN recombinante?",
            en: "What is recombinant DNA?",
          },
          options: [
            {
              es: "ADN combinado de diferentes organismos",
              en: "DNA combined from different organisms",
            },
            {
              es: "ADN que no funciona",
              en: "DNA that doesn't work",
            },
            {
              es: "ADN sin mutaciones",
              en: "DNA without mutations",
            },
            {
              es: "ADN de plantas únicamente",
              en: "DNA from plants only",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ADN RECOMBINANTE combina ADN de diferentes fuentes. Se usa en biotecnología (ej: insulina humana en bacterias).",
            en: "RECOMBINANT DNA combines DNA from different sources. Used in biotechnology (ex: human insulin in bacteria).",
          },
          difficulty: 2,
        },
        {
          id: "hered-q10",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué proporción de descendientes será aa en el cruce Aa x Aa?",
            en: "What proportion of offspring will be aa in the cross Aa x Aa?",
          },
          options: [
            { es: "25% (1/4)", en: "25% (1/4)" },
            { es: "50% (1/2)", en: "50% (1/2)" },
            { es: "75% (3/4)", en: "75% (3/4)" },
            { es: "100%", en: "100%" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Aa x Aa → 1 AA : 2 Aa : 1 aa. Probabilidad de aa = 1/4 = 25%.",
            en: "Aa x Aa → 1 AA : 2 Aa : 1 aa. Probability of aa = 1/4 = 25%.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
