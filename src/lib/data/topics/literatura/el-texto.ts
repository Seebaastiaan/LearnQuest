import type { Topic } from "@/lib/types";

export const elTextoTopic: Topic = {
  id: "literatura-texto",
  slug: "literatura-texto",
  title: { es: "El texto", en: "The Text" },
  description: {
    es: "Propiedades del texto, funciones del lenguaje y tipos de textos según su estructura.",
    en: "Text properties, language functions, and types of texts according to their structure.",
  },
  icon: "BookText",
  color: "indigo",
  bgGradient: "bg-linear-to-br from-indigo-500 to-purple-600",
  prerequisites: [],
  order: 1,
  lessons: [
    {
      id: "lit-texto-propiedades",
      topicId: "literatura-texto",
      order: 1,
      title: {
        es: "Propiedades del texto",
        en: "Text properties",
      },
      description: {
        es: "Coherencia, cohesión y adecuación textual",
        en: "Coherence, cohesion and textual adequacy",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "lit-texto-q1",
          prompt: {
            es: "¿Qué propiedad del texto garantiza que todas las ideas se relacionen con un tema central?",
            en: "Which text property ensures that all ideas relate to a central theme?",
          },
          type: "multiple-choice",
          options: [
            { es: "Coherencia", en: "Coherence" },
            { es: "Cohesión", en: "Cohesion" },
            { es: "Adecuación", en: "Adequacy" },
            { es: "Corrección", en: "Correctness" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La coherencia es la propiedad que asegura unidad temática y progresión lógica de las ideas.",
            en: "Coherence is the property that ensures thematic unity and logical progression of ideas.",
          },
          difficulty: 1,
        },
        {
          id: "lit-texto-q2",
          prompt: {
            es: "¿Cuál recurso NO es un mecanismo de cohesión textual?",
            en: "Which resource is NOT a textual cohesion mechanism?",
          },
          type: "multiple-choice",
          options: [
            { es: "Conectores", en: "Connectors" },
            { es: "Referencias anafóricas", en: "Anaphoric references" },
            { es: "Metáforas", en: "Metaphors" },
            { es: "Sinónimos", en: "Synonyms" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Las metáforas son recursos estilísticos. La cohesión se logra con conectores, referencias y sustituciones léxicas.",
            en: "Metaphors are stylistic resources. Cohesion is achieved with connectors, references and lexical substitutions.",
          },
          difficulty: 2,
        },
        {
          id: "lit-texto-q3",
          prompt: {
            es: "Un texto está bien escrito solo si tiene correcta ortografía y gramática.",
            en: "A text is well written only if it has correct spelling and grammar.",
          },
          type: "true-false",
          correctAnswer: "false",
          explanation: {
            es: "Un buen texto también requiere coherencia, cohesión y adecuación al contexto comunicativo.",
            en: "A good text also requires coherence, cohesion and adequacy to the communicative context.",
          },
          difficulty: 1,
        },
        {
          id: "lit-texto-q4",
          prompt: {
            es: "Lee: 'María estudia medicina. Ella quiere ser pediatra. Esta decisión la tomó hace dos años.' Los términos subrayados (Ella, Esta, la) son ejemplos de:",
            en: "Read: 'María studies medicine. She wants to be a pediatrician. She made this decision two years ago.' The underlined terms (She, this, she) are examples of:",
          },
          type: "multiple-choice",
          options: [
            { es: "Coherencia temática", en: "Thematic coherence" },
            { es: "Mecanismos de cohesión", en: "Cohesion mechanisms" },
            { es: "Marcadores textuales", en: "Textual markers" },
            { es: "Figuras retóricas", en: "Rhetorical figures" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Los pronombres y referencias evitan repeticiones y dan cohesión al texto.",
            en: "Pronouns and references avoid repetitions and give cohesion to the text.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "lit-texto-funciones",
      topicId: "literatura-texto",
      order: 2,
      title: {
        es: "Función lingüística predominante",
        en: "Predominant linguistic function",
      },
      description: {
        es: "Funciones referencial, apelativa, emotiva y poética",
        en: "Referential, appellative, emotive and poetic functions",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "lit-texto-q5",
          prompt: {
            es: "¿Qué función del lenguaje predomina en: 'El agua hierve a 100°C a nivel del mar'?",
            en: "Which language function predominates in: 'Water boils at 100°C at sea level'?",
          },
          type: "multiple-choice",
          options: [
            { es: "Referencial", en: "Referential" },
            { es: "Emotiva", en: "Emotive" },
            { es: "Apelativa", en: "Appellative" },
            { es: "Metalingüística", en: "Metalinguistic" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La función referencial transmite información objetiva sobre la realidad.",
            en: "The referential function transmits objective information about reality.",
          },
          difficulty: 1,
        },
        {
          id: "lit-texto-q6",
          prompt: {
            es: "En publicidad comercial, ¿qué función lingüística es predominante?",
            en: "In commercial advertising, which linguistic function is predominant?",
          },
          type: "multiple-choice",
          options: [
            { es: "Referencial", en: "Referential" },
            { es: "Apelativa", en: "Appellative" },
            { es: "Fática", en: "Phatic" },
            { es: "Metalingüística", en: "Metalinguistic" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La publicidad busca persuadir o influir en el receptor, característica de la función apelativa.",
            en: "Advertising seeks to persuade or influence the receiver, characteristic of the appellative function.",
          },
          difficulty: 1,
        },
        {
          id: "lit-texto-q7",
          prompt: {
            es: "La función poética se centra exclusivamente en la poesía literaria.",
            en: "The poetic function focuses exclusively on literary poetry.",
          },
          type: "true-false",
          correctAnswer: "false",
          explanation: {
            es: "La función poética aparece en cualquier texto que enfatice la forma del mensaje: eslóganes, trabalenguas, canciones, etc.",
            en: "The poetic function appears in any text that emphasizes the form of the message: slogans, tongue twisters, songs, etc.",
          },
          difficulty: 2,
        },
        {
          id: "lit-texto-q8",
          prompt: {
            es: "¿En qué tipo de texto predomina la función emotiva o expresiva?",
            en: "In which type of text does the emotive or expressive function predominate?",
          },
          type: "multiple-choice",
          options: [
            { es: "Artículo científico", en: "Scientific article" },
            { es: "Diario personal", en: "Personal diary" },
            { es: "Manual de instrucciones", en: "Instruction manual" },
            { es: "Contrato legal", en: "Legal contract" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El diario personal expresa sentimientos y emociones del emisor.",
            en: "The personal diary expresses feelings and emotions of the sender.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "lit-texto-tipos",
      topicId: "literatura-texto",
      order: 3,
      title: {
        es: "Tipos de texto: periodístico, dramático y poético",
        en: "Types of text: journalistic, dramatic and poetic",
      },
      description: {
        es: "Características de textos periodísticos, dramáticos y poéticos",
        en: "Characteristics of journalistic, dramatic and poetic texts",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "lit-texto-q9",
          prompt: {
            es: "¿Cuál es la estructura característica del texto periodístico informativo?",
            en: "What is the characteristic structure of informative journalistic text?",
          },
          type: "multiple-choice",
          options: [
            { es: "Pirámide invertida", en: "Inverted pyramid" },
            { es: "Estructura circular", en: "Circular structure" },
            { es: "Actos y escenas", en: "Acts and scenes" },
            { es: "Estrofas y versos", en: "Stanzas and verses" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La pirámide invertida coloca la información más importante al inicio del texto.",
            en: "The inverted pyramid places the most important information at the beginning of the text.",
          },
          difficulty: 1,
        },
        {
          id: "lit-texto-q10",
          prompt: {
            es: "¿Qué elemento es exclusivo del texto dramático?",
            en: "Which element is exclusive to dramatic text?",
          },
          type: "multiple-choice",
          options: [
            { es: "Narrador omnisciente", en: "Omniscient narrator" },
            { es: "Acotaciones escénicas", en: "Stage directions" },
            { es: "Estrofas regulares", en: "Regular stanzas" },
            { es: "Titular y subtítulo", en: "Headline and subtitle" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Las acotaciones son indicaciones para la puesta en escena, propias del género dramático.",
            en: "Stage directions are indications for staging, typical of the dramatic genre.",
          },
          difficulty: 2,
        },
        {
          id: "lit-texto-q11",
          prompt: {
            es: "En el texto poético, ¿qué recurso consiste en la repetición de sonidos consonánticos?",
            en: "In poetic text, which device consists of the repetition of consonant sounds?",
          },
          type: "multiple-choice",
          options: [
            { es: "Metáfora", en: "Metaphor" },
            { es: "Aliteración", en: "Alliteration" },
            { es: "Hipérbole", en: "Hyperbole" },
            { es: "Epíteto", en: "Epithet" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La aliteración repite sonidos consonánticos para crear efectos sonoros.",
            en: "Alliteration repeats consonant sounds to create sound effects.",
          },
          difficulty: 2,
        },
        {
          id: "lit-texto-q12",
          prompt: {
            es: "Todo texto poético debe estar escrito en verso.",
            en: "All poetic text must be written in verse.",
          },
          type: "true-false",
          correctAnswer: "false",
          explanation: {
            es: "Existe la prosa poética, que mantiene recursos literarios sin estructura métrica regular.",
            en: "Poetic prose exists, which maintains literary devices without regular metric structure.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
