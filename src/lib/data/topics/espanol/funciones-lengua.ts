import type { Topic } from "@/lib/types";

export const funcionesLenguaTopic: Topic = {
  id: "funciones-lengua",
  slug: "funciones-lengua",
  title: {
    es: "Funciones de la Lengua",
    en: "Language Functions",
  },
  description: {
    es: "Referencial, apelativa y poética",
    en: "Referential, appellative and poetic",
  },
  icon: "MessageSquare",
  color: "green",
  bgGradient: "bg-linear-to-br from-green-500 to-emerald-600",
  prerequisites: [],
  order: 1,
  lessons: [
    {
      id: "funciones-lengua-referencial",
      topicId: "funciones-lengua",
      order: 1,
      title: {
        es: "Función Referencial",
        en: "Referential Function",
      },
      description: {
        es: "Transmite información objetiva sobre la realidad",
        en: "Transmits objective information about reality",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "esp_fl_1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes enunciados corresponde a la función referencial de la lengua?",
            en: "Which of the following statements corresponds to the referential function of language?",
          },
          options: [
            {
              es: "La temperatura en la Ciudad de México será de 22°C mañana",
              en: "The temperature in Mexico City will be 22°C tomorrow",
            },
            {
              es: "¡Qué hermoso atardecer el de hoy!",
              en: "What a beautiful sunset today!",
            },
            {
              es: "Te ordeno que guardes silencio",
              en: "I order you to be silent",
            },
            {
              es: "La luna danza sobre el espejo del lago",
              en: "The moon dances on the mirror of the lake",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La función referencial (o informativa) transmite información objetiva sobre la realidad. El enunciado sobre la temperatura comunica un dato verificable sin emociones ni intención persuasiva.",
            en: "The referential (or informative) function transmits objective information about reality. The statement about temperature communicates verifiable data without emotions or persuasive intent.",
          },
          difficulty: 1,
          hints: [
            {
              es: "La función referencial se centra en datos objetivos y verificables.",
              en: "The referential function focuses on objective and verifiable data.",
            },
          ],
        },
        {
          id: "esp_fl_2",
          type: "multiple-choice",
          prompt: {
            es: "La función referencial del lenguaje se centra en:",
            en: "The referential function of language focuses on:",
          },
          options: [
            {
              es: "El emisor y sus emociones",
              en: "The sender and their emotions",
            },
            {
              es: "El receptor y su comportamiento",
              en: "The receiver and their behavior",
            },
            {
              es: "El contexto o referente del mensaje",
              en: "The context or referent of the message",
            },
            {
              es: "La forma estética del mensaje",
              en: "The aesthetic form of the message",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La función referencial se centra en el contexto o referente, es decir, en la realidad extralingüística de la que se habla. Su objetivo es informar de manera objetiva.",
            en: "The referential function focuses on the context or referent, that is, on the extralinguistic reality being discussed. Its goal is to inform objectively.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fl_3",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es un ejemplo de función referencial?",
            en: "Which is an example of referential function?",
          },
          options: [
            {
              es: '"Por favor, cierra la ventana"',
              en: '"Please close the window"',
            },
            {
              es: '"El agua hierve a 100°C al nivel del mar"',
              en: '"Water boils at 100°C at sea level"',
            },
            {
              es: '"¡Estoy furioso con lo que pasó!"',
              en: '"I am furious with what happened!"',
            },
            {
              es: '"Tres tristes tigres tragaban trigo"',
              en: '"Three sad tigers swallowed wheat"',
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La función referencial transmite información verificable y objetiva. La temperatura de ebullición del agua es un dato científico que informa sobre la realidad.",
            en: "The referential function transmits verifiable and objective information. The boiling temperature of water is scientific data that informs about reality.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fl_4",
          type: "multiple-choice",
          prompt: {
            es: "¿En cuál de los siguientes textos predomina la función referencial?",
            en: "In which of the following texts does the referential function predominate?",
          },
          options: [
            { es: "Un poema de Octavio Paz", en: "A poem by Octavio Paz" },
            {
              es: "Un anuncio publicitario de televisión",
              en: "A television advertisement",
            },
            {
              es: "Una nota informativa de un periódico",
              en: "A news article in a newspaper",
            },
            { es: "Una carta de amor", en: "A love letter" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Las notas informativas de los periódicos tienen como propósito principal comunicar hechos de manera objetiva, lo cual corresponde a la función referencial.",
            en: "News articles in newspapers have as their main purpose to communicate facts objectively, which corresponds to the referential function.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fl_5",
          type: "true-false",
          prompt: {
            es: "La función referencial también se conoce como función informativa o representativa.",
            en: "The referential function is also known as the informative or representative function.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La función referencial también se denomina informativa o representativa, porque representa o informa sobre la realidad exterior al hablante de manera objetiva.",
            en: "Correct. The referential function is also called informative or representative, because it represents or informs about the reality external to the speaker objectively.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "funciones-lengua-apelativa",
      topicId: "funciones-lengua",
      order: 2,
      title: {
        es: "Función Apelativa",
        en: "Appellative Function",
      },
      description: {
        es: "Busca influir en el receptor",
        en: "Seeks to influence the receiver",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_fl_6",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes enunciados utiliza la función apelativa?",
            en: "Which of the following statements uses the appellative function?",
          },
          options: [
            {
              es: "México tiene 32 entidades federativas",
              en: "Mexico has 32 federal entities",
            },
            {
              es: "Compra ahora y obtén un 50% de descuento",
              en: "Buy now and get 50% off",
            },
            { es: "Me siento muy triste hoy", en: "I feel very sad today" },
            {
              es: "Sus cabellos eran hilos de oro",
              en: "Her hair was threads of gold",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: 'La función apelativa (o conativa) busca influir en el receptor para que realice una acción. "Compra ahora" es una orden directa que pretende modificar la conducta del destinatario.',
            en: 'The appellative (or conative) function seeks to influence the receiver to perform an action. "Buy now" is a direct command that aims to modify the recipient\'s behavior.',
          },
          difficulty: 1,
        },
        {
          id: "esp_fl_7",
          type: "multiple-choice",
          prompt: {
            es: "La función apelativa del lenguaje se centra en:",
            en: "The appellative function of language focuses on:",
          },
          options: [
            { es: "El emisor", en: "The sender" },
            { es: "El mensaje", en: "The message" },
            { es: "El receptor", en: "The receiver" },
            { es: "El canal", en: "The channel" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La función apelativa o conativa se centra en el receptor, pues busca provocar en él una reacción: una respuesta, un cambio de conducta o una acción determinada.",
            en: "The appellative or conative function focuses on the receiver, as it seeks to provoke a reaction: a response, a behavior change, or a specific action.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fl_8",
          type: "multiple-choice",
          prompt: {
            es: "¿En cuál de los siguientes textos predomina la función apelativa?",
            en: "In which of the following texts does the appellative function predominate?",
          },
          options: [
            { es: "Un artículo enciclopédico", en: "An encyclopedia article" },
            { es: "Un diario personal", en: "A personal diary" },
            {
              es: "Un cartel de propaganda política",
              en: "A political propaganda poster",
            },
            {
              es: "Una novela de ciencia ficción",
              en: "A science fiction novel",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Los carteles de propaganda política buscan persuadir al receptor para que vote o apoye a un candidato, lo cual es propio de la función apelativa.",
            en: "Political propaganda posters seek to persuade the receiver to vote or support a candidate, which is characteristic of the appellative function.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fl_9",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál modo verbal es característico de la función apelativa?",
            en: "Which verb mood is characteristic of the appellative function?",
          },
          options: [
            { es: "Indicativo", en: "Indicative" },
            { es: "Subjuntivo", en: "Subjunctive" },
            { es: "Imperativo", en: "Imperative" },
            { es: "Condicional", en: "Conditional" },
          ],
          correctAnswer: "2",
          explanation: {
            es: 'El modo imperativo es característico de la función apelativa porque expresa órdenes, mandatos, ruegos o instrucciones dirigidas al receptor: "Estudia", "Ven aquí", "No corras".',
            en: 'The imperative mood is characteristic of the appellative function because it expresses orders, commands, requests, or instructions directed at the receiver: "Study", "Come here", "Don\'t run".',
          },
          difficulty: 2,
        },
        {
          id: "esp_fl_10",
          type: "multiple-choice",
          prompt: {
            es: '"No olvides traer tu credencial el día del examen" es un ejemplo de función:',
            en: '"Don\'t forget to bring your ID on exam day" is an example of function:',
          },
          options: [
            { es: "Referencial", en: "Referential" },
            { es: "Poética", en: "Poetic" },
            { es: "Emotiva", en: "Emotive" },
            { es: "Apelativa", en: "Appellative" },
          ],
          correctAnswer: "3",
          explanation: {
            es: 'El enunciado se dirige al receptor con una instrucción ("no olvides traer"), buscando modificar su conducta, lo cual corresponde a la función apelativa.',
            en: 'The statement addresses the receiver with an instruction ("don\'t forget to bring"), seeking to modify their behavior, which corresponds to the appellative function.',
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "funciones-lengua-poetica",
      topicId: "funciones-lengua",
      order: 3,
      title: {
        es: "Función Poética",
        en: "Poetic Function",
      },
      description: {
        es: "Se centra en la forma estética del mensaje",
        en: "Focuses on the aesthetic form of the message",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_fl_11",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes enunciados corresponde a la función poética del lenguaje?",
            en: "Which of the following statements corresponds to the poetic function of language?",
          },
          options: [
            {
              es: "El río Amazonas es el más caudaloso del mundo",
              en: "The Amazon River is the most voluminous in the world",
            },
            {
              es: "Caminante, no hay camino, se hace camino al andar",
              en: "Traveler, there is no path, the path is made by walking",
            },
            {
              es: "Cierra la puerta al salir, por favor",
              en: "Close the door when you leave, please",
            },
            {
              es: "La reunión será a las tres de la tarde",
              en: "The meeting will be at three in the afternoon",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La función poética se centra en la forma del mensaje, utilizando recursos literarios. El verso de Antonio Machado emplea repetición y metáfora para crear un efecto estético.",
            en: "The poetic function focuses on the form of the message, using literary devices. Antonio Machado's verse uses repetition and metaphor to create an aesthetic effect.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fl_12",
          type: "multiple-choice",
          prompt: {
            es: "La función poética del lenguaje se centra en:",
            en: "The poetic function of language focuses on:",
          },
          options: [
            { es: "El referente o contexto", en: "The referent or context" },
            {
              es: "El receptor del mensaje",
              en: "The receiver of the message",
            },
            {
              es: "La forma del mensaje mismo",
              en: "The form of the message itself",
            },
            { es: "El canal de comunicación", en: "The communication channel" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La función poética (o estética) se centra en el mensaje mismo, en cómo se dice algo más que en qué se dice. Busca producir un efecto estético mediante figuras retóricas, ritmo y sonoridad.",
            en: "The poetic (or aesthetic) function focuses on the message itself, on how something is said rather than what is said. It seeks to produce an aesthetic effect through rhetorical figures, rhythm, and sound.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fl_13",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes recursos es propio de la función poética?",
            en: "Which of the following resources is characteristic of the poetic function?",
          },
          options: [
            { es: "Datos estadísticos", en: "Statistical data" },
            { es: "Uso del modo imperativo", en: "Use of imperative mood" },
            {
              es: "Metáforas y figuras retóricas",
              en: "Metaphors and rhetorical figures",
            },
            { es: "Tecnicismos científicos", en: "Scientific technicalities" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Las metáforas, comparaciones, aliteraciones y demás figuras retóricas son recursos propios de la función poética, pues embellecen y dan forma estética al mensaje.",
            en: "Metaphors, similes, alliterations, and other rhetorical figures are characteristic resources of the poetic function, as they embellish and give aesthetic form to the message.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fl_14",
          type: "multiple-choice",
          prompt: {
            es: '"Verde que te quiero verde. Verde viento. Verdes ramas." (García Lorca). ¿Qué función del lenguaje predomina?',
            en: '"Green I want you green. Green wind. Green branches." (García Lorca). Which language function predominates?',
          },
          options: [
            { es: "Referencial", en: "Referential" },
            { es: "Apelativa", en: "Appellative" },
            { es: "Emotiva", en: "Emotive" },
            { es: "Poética", en: "Poetic" },
          ],
          correctAnswer: "3",
          explanation: {
            es: "En estos versos de García Lorca predomina la función poética por el uso de repeticiones (anáfora), ritmo, y la intención estética del mensaje, que va más allá de la simple información.",
            en: "In these verses by García Lorca, the poetic function predominates through the use of repetitions (anaphora), rhythm, and the aesthetic intention of the message, which goes beyond simple information.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fl_15",
          type: "multiple-choice",
          prompt: {
            es: "¿En cuál género literario predomina la función poética?",
            en: "In which literary genre does the poetic function predominate?",
          },
          options: [
            { es: "En los textos periodísticos", en: "In journalistic texts" },
            { es: "En los textos científicos", en: "In scientific texts" },
            {
              es: "En la poesía y la literatura en general",
              en: "In poetry and literature in general",
            },
            {
              es: "En los manuales de instrucciones",
              en: "In instruction manuals",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La función poética predomina en la poesía y la literatura en general, donde la forma del mensaje (ritmo, figuras retóricas, musicalidad) es tan importante como el contenido.",
            en: "The poetic function predominates in poetry and literature in general, where the form of the message (rhythm, rhetorical figures, musicality) is as important as the content.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
