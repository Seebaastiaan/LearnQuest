import type { Topic } from "@/lib/types";

export const formasDiscursoTopic: Topic = {
  id: "formas-discurso",
  slug: "formas-discurso",
  title: {
    es: "Formas del Discurso",
    en: "Forms of Discourse",
  },
  description: {
    es: "Descriptivo, narrativo y argumentativo",
    en: "Descriptive, narrative and argumentative",
  },
  icon: "FileText",
  color: "emerald",
  bgGradient: "bg-linear-to-br from-emerald-500 to-green-600",
  prerequisites: ["funciones-lengua"],
  order: 2,
  lessons: [
    {
      id: "formas-discurso-descriptivo",
      topicId: "formas-discurso",
      order: 1,
      title: {
        es: "Discurso Descriptivo",
        en: "Descriptive Discourse",
      },
      description: {
        es: "Presenta características y cualidades",
        en: "Presents characteristics and qualities",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "esp_fd_1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes fragmentos corresponde a un discurso descriptivo?",
            en: "Which of the following fragments corresponds to descriptive discourse?",
          },
          options: [
            {
              es: "La casa tenía paredes blancas, un techo de teja roja y un jardín lleno de buganvilias moradas",
              en: "The house had white walls, a red tile roof and a garden full of purple bougainvillea",
            },
            {
              es: "Primero fue al mercado, luego cocinó y finalmente sirvió la cena",
              en: "First he went to the market, then cooked and finally served dinner",
            },
            {
              es: "Es necesario invertir en educación porque el futuro del país depende de ello",
              en: "It is necessary to invest in education because the future of the country depends on it",
            },
            {
              es: "Entonces el caballero desenvainó su espada y enfrentó al dragón",
              en: "Then the knight unsheathed his sword and faced the dragon",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El discurso descriptivo presenta las características, cualidades y rasgos de personas, objetos, lugares o situaciones. El fragmento detalla cómo es la casa usando adjetivos y detalles sensoriales.",
            en: "Descriptive discourse presents the characteristics, qualities and features of people, objects, places or situations. The fragment details what the house is like using adjectives and sensory details.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fd_2",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de palabras predominan en el discurso descriptivo?",
            en: "What type of words predominate in descriptive discourse?",
          },
          options: [
            {
              es: "Verbos de acción en pasado",
              en: "Action verbs in past tense",
            },
            {
              es: "Adjetivos calificativos y adverbios",
              en: "Qualifying adjectives and adverbs",
            },
            { es: "Conjunciones adversativas", en: "Adversative conjunctions" },
            {
              es: "Conectores de causa y consecuencia",
              en: "Cause and consequence connectors",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "En el discurso descriptivo predominan los adjetivos calificativos (que indican cualidades) y los adverbios (que precisan modo, lugar, etc.), pues su función es caracterizar y detallar.",
            en: "In descriptive discourse, qualifying adjectives (which indicate qualities) and adverbs (which specify manner, place, etc.) predominate, as their function is to characterize and detail.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fd_3",
          type: "multiple-choice",
          prompt: {
            es: "La prosopografía es un tipo de descripción que se refiere a:",
            en: "Prosopography is a type of description that refers to:",
          },
          options: [
            {
              es: "Las cualidades morales de una persona",
              en: "The moral qualities of a person",
            },
            {
              es: "Los rasgos físicos de una persona",
              en: "The physical features of a person",
            },
            { es: "Un lugar o paisaje", en: "A place or landscape" },
            { es: "Una época histórica", en: "A historical period" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La prosopografía es la descripción de los rasgos físicos o externos de una persona (apariencia, vestimenta, complexión). La descripción de cualidades morales se llama etopeya.",
            en: "Prosopography is the description of the physical or external features of a person (appearance, clothing, complexion). The description of moral qualities is called ethopoeia.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fd_4",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la diferencia entre descripción objetiva y subjetiva?",
            en: "What is the difference between objective and subjective description?",
          },
          options: [
            {
              es: "La objetiva usa adjetivos y la subjetiva no",
              en: "Objective uses adjectives and subjective doesn't",
            },
            {
              es: "La objetiva presenta datos verificables y la subjetiva incluye valoraciones personales",
              en: "Objective presents verifiable data and subjective includes personal evaluations",
            },
            {
              es: "La objetiva es literaria y la subjetiva es científica",
              en: "Objective is literary and subjective is scientific",
            },
            {
              es: "No hay diferencia, son lo mismo",
              en: "There is no difference, they are the same",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La descripción objetiva presenta características comprobables sin opiniones personales (textos científicos), mientras que la subjetiva incluye valoraciones, emociones e impresiones del autor (textos literarios).",
            en: "Objective description presents verifiable characteristics without personal opinions (scientific texts), while subjective includes valuations, emotions and impressions of the author (literary texts).",
          },
          difficulty: 2,
        },
        {
          id: "esp_fd_5",
          type: "multiple-choice",
          prompt: {
            es: '"El salón era amplio y luminoso; las cortinas de terciopelo rojo enmarcaban los ventanales, y un candelabro de cristal colgaba del techo artesonado." ¿Qué tipo de descripción es?',
            en: '"The room was spacious and bright; red velvet curtains framed the windows, and a crystal chandelier hung from the coffered ceiling." What type of description is this?',
          },
          options: [
            { es: "Etopeya", en: "Ethopoeia" },
            { es: "Prosopografía", en: "Prosopography" },
            { es: "Topografía", en: "Topography" },
            { es: "Cronografía", en: "Chronography" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La topografía es la descripción de un lugar o espacio. El fragmento describe un salón con sus características físicas: dimensiones, iluminación, decoración y mobiliario.",
            en: "Topography is the description of a place or space. The fragment describes a room with its physical characteristics: dimensions, lighting, decoration and furniture.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "formas-discurso-narrativo",
      topicId: "formas-discurso",
      order: 2,
      title: {
        es: "Discurso Narrativo",
        en: "Narrative Discourse",
      },
      description: {
        es: "Relata hechos en el tiempo",
        en: "Relates events in time",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_fd_6",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la característica principal del discurso narrativo?",
            en: "What is the main characteristic of narrative discourse?",
          },
          options: [
            {
              es: "Presenta las cualidades de un objeto",
              en: "Presents the qualities of an object",
            },
            {
              es: "Relata una sucesión de hechos o acciones en el tiempo",
              en: "Relates a succession of facts or actions in time",
            },
            {
              es: "Defiende una postura mediante razones",
              en: "Defends a position through reasons",
            },
            {
              es: "Explica un concepto de manera técnica",
              en: "Explains a concept in a technical way",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El discurso narrativo se caracteriza por relatar una sucesión de hechos o acciones que se desarrollan en el tiempo, con un inicio, un desarrollo (nudo) y un desenlace.",
            en: "Narrative discourse is characterized by relating a succession of facts or actions that develop over time, with a beginning, a development (climax) and a resolution.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fd_7",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son los elementos fundamentales de la narración?",
            en: "What are the fundamental elements of narration?",
          },
          options: [
            {
              es: "Tesis, argumento y conclusión",
              en: "Thesis, argument and conclusion",
            },
            {
              es: "Narrador, personajes, espacio, tiempo y acción",
              en: "Narrator, characters, space, time and action",
            },
            {
              es: "Introducción, desarrollo y conclusión",
              en: "Introduction, development and conclusion",
            },
            {
              es: "Sujeto, verbo y complemento",
              en: "Subject, verb and complement",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Los elementos fundamentales de la narración son: narrador (quien cuenta), personajes (quiénes participan), espacio (dónde ocurre), tiempo (cuándo sucede) y acción (qué sucede).",
            en: "The fundamental elements of narration are: narrator (who tells), characters (who participate), space (where it happens), time (when it happens) and action (what happens).",
          },
          difficulty: 2,
        },
        {
          id: "esp_fd_8",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de narrador conoce los pensamientos y sentimientos de todos los personajes?",
            en: "What type of narrator knows the thoughts and feelings of all characters?",
          },
          options: [
            { es: "Narrador protagonista", en: "Protagonist narrator" },
            { es: "Narrador testigo", en: "Witness narrator" },
            { es: "Narrador omnisciente", en: "Omniscient narrator" },
            { es: "Narrador en segunda persona", en: "Second-person narrator" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El narrador omnisciente sabe todo sobre los personajes: sus pensamientos, sentimientos, pasado y futuro. Narra en tercera persona y tiene una visión completa de la historia.",
            en: "The omniscient narrator knows everything about the characters: their thoughts, feelings, past and future. Narrates in third person and has a complete vision of the story.",
          },
          difficulty: 2,
        },
        {
          id: "esp_fd_9",
          type: "multiple-choice",
          prompt: {
            es: '"Al día siguiente, Juan salió temprano de casa, caminó hasta la estación y tomó el tren de las siete." ¿Qué forma del discurso predomina?',
            en: '"The next day, Juan left home early, walked to the station and took the seven o\'clock train." What form of discourse predominates?',
          },
          options: [
            { es: "Descriptiva", en: "Descriptive" },
            { es: "Narrativa", en: "Narrative" },
            { es: "Argumentativa", en: "Argumentative" },
            { es: "Expositiva", en: "Expository" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El fragmento presenta una serie de acciones sucesivas en el tiempo (salió, caminó, tomó), lo cual es propio del discurso narrativo.",
            en: "The fragment presents a series of successive actions in time (left, walked, took), which is characteristic of narrative discourse.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fd_10",
          type: "multiple-choice",
          prompt: {
            es: "En la estructura narrativa, el nudo o clímax corresponde a:",
            en: "In the narrative structure, the climax corresponds to:",
          },
          options: [
            {
              es: "La presentación de los personajes y el escenario",
              en: "The presentation of characters and setting",
            },
            {
              es: "El momento de mayor tensión o conflicto en la historia",
              en: "The moment of greatest tension or conflict in the story",
            },
            {
              es: "La resolución final del conflicto",
              en: "The final resolution of the conflict",
            },
            {
              es: "La moraleja o enseñanza del relato",
              en: "The moral or lesson of the story",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El nudo o clímax es el momento de mayor tensión, donde el conflicto alcanza su punto más alto. Es la parte central de la narración, entre el planteamiento y el desenlace.",
            en: "The climax is the moment of greatest tension, where the conflict reaches its highest point. It is the central part of the narration, between the exposition and the resolution.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "formas-discurso-argumentativo",
      topicId: "formas-discurso",
      order: 3,
      title: {
        es: "Discurso Argumentativo",
        en: "Argumentative Discourse",
      },
      description: {
        es: "Defiende una postura con argumentos",
        en: "Defends a position with arguments",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_fd_11",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el propósito del discurso argumentativo?",
            en: "What is the purpose of argumentative discourse?",
          },
          options: [
            {
              es: "Relatar una historia con personajes",
              en: "Tell a story with characters",
            },
            {
              es: "Describir las características de un objeto",
              en: "Describe the characteristics of an object",
            },
            {
              es: "Defender una postura o idea mediante razones y evidencias",
              en: "Defend a position or idea through reasons and evidence",
            },
            {
              es: "Dar instrucciones paso a paso",
              en: "Give step-by-step instructions",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El discurso argumentativo tiene como propósito convencer o persuadir al receptor mediante razones, evidencias y argumentos que respaldan una tesis o postura.",
            en: "Argumentative discourse aims to convince or persuade the receiver through reasons, evidence and arguments that support a thesis or position.",
          },
          difficulty: 1,
        },
        {
          id: "esp_fd_12",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la estructura básica de un texto argumentativo?",
            en: "What is the basic structure of an argumentative text?",
          },
          options: [
            {
              es: "Inicio, nudo y desenlace",
              en: "Beginning, climax and resolution",
            },
            {
              es: "Tesis, argumentos y conclusión",
              en: "Thesis, arguments and conclusion",
            },
            {
              es: "Sujeto, verbo y predicado",
              en: "Subject, verb and predicate",
            },
            {
              es: "Título, desarrollo y bibliografía",
              en: "Title, development and bibliography",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La estructura básica del texto argumentativo es: tesis (idea que se defiende), argumentos (razones y evidencias que la sustentan) y conclusión (cierre que reafirma la tesis).",
            en: "The basic structure of argumentative text is: thesis (idea being defended), arguments (reasons and evidence that support it) and conclusion (closure that reaffirms the thesis).",
          },
          difficulty: 1,
        },
        {
          id: "esp_fd_13",
          type: "multiple-choice",
          prompt: {
            es: '"La lectura es fundamental para el desarrollo intelectual porque amplía el vocabulario, mejora la comprensión y estimula el pensamiento crítico." ¿Qué forma del discurso predomina?',
            en: '"Reading is fundamental for intellectual development because it expands vocabulary, improves comprehension and stimulates critical thinking." What form of discourse predominates?',
          },
          options: [
            { es: "Narrativa", en: "Narrative" },
            { es: "Descriptiva", en: "Descriptive" },
            { es: "Argumentativa", en: "Argumentative" },
            { es: "Poética", en: "Poetic" },
          ],
          correctAnswer: "2",
          explanation: {
            es: 'El fragmento presenta una tesis ("La lectura es fundamental") seguida de argumentos que la sustentan ("amplía el vocabulario, mejora la comprensión, estimula el pensamiento crítico"), lo cual es propio del discurso argumentativo.',
            en: 'The fragment presents a thesis ("Reading is fundamental") followed by arguments that support it ("expands vocabulary, improves comprehension, stimulates critical thinking"), which is characteristic of argumentative discourse.',
          },
          difficulty: 2,
        },
        {
          id: "esp_fd_14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes conectores es típico del discurso argumentativo?",
            en: "Which of the following connectors is typical of argumentative discourse?",
          },
          options: [
            { es: "Érase una vez", en: "Once upon a time" },
            {
              es: "De color azul y forma redonda",
              en: "Blue in color and round in shape",
            },
            {
              es: "Por lo tanto, en consecuencia, sin embargo",
              en: "Therefore, consequently, however",
            },
            {
              es: "Al día siguiente, después de eso",
              en: "The next day, after that",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: 'Conectores como "por lo tanto", "en consecuencia", "sin embargo", "no obstante", "porque" son típicos del discurso argumentativo, pues establecen relaciones de causa, consecuencia y contraargumentación.',
            en: 'Connectors like "therefore", "consequently", "however", "nevertheless", "because" are typical of argumentative discourse, as they establish relationships of cause, consequence and counter-argumentation.',
          },
          difficulty: 2,
        },
        {
          id: "esp_fd_15",
          type: "multiple-choice",
          prompt: {
            es: "¿En cuál de los siguientes textos predomina el discurso argumentativo?",
            en: "In which of the following texts does argumentative discourse predominate?",
          },
          options: [
            { es: "Una receta de cocina", en: "A recipe" },
            { es: "Un cuento infantil", en: "A children's story" },
            { es: "Un editorial periodístico", en: "A newspaper editorial" },
            { es: "Una nota enciclopédica", en: "An encyclopedia entry" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El editorial periodístico es un texto de opinión donde se expone una postura sobre un tema de actualidad y se defiende con argumentos, lo cual lo hace esencialmente argumentativo.",
            en: "The newspaper editorial is an opinion text where a position on a current issue is presented and defended with arguments, which makes it essentially argumentative.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
