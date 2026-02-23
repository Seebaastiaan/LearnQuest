import type { Topic } from "@/lib/types";

export const generosCorrientesTopic: Topic = {
  id: "literatura-generos",
  slug: "literatura-generos",
  title: {
    es: "Géneros y corrientes literarias",
    en: "Literary Genres and Movements",
  },
  description: {
    es: "Clasificación de géneros literarios (épico, lírico, dramático) y principales corrientes desde el Barroco hasta la actualidad.",
    en: "Classification of literary genres (epic, lyric, dramatic) and main literary movements from Baroque to the present.",
  },
  icon: "Theater",
  color: "purple",
  bgGradient: "bg-linear-to-br from-purple-500 to-violet-600",
  prerequisites: [],
  order: 2,
  lessons: [
    {
      id: "lit-generos-clasificacion",
      topicId: "literatura-generos",
      order: 1,
      title: {
        es: "Géneros literarios: épico, lírico y dramático",
        en: "Literary genres: epic, lyric and dramatic",
      },
      description: {
        es: "Características de los géneros épico, lírico y dramático",
        en: "Characteristics of epic, lyric and dramatic genres",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "lit-gen-q1",
          prompt: {
            es: "¿Cuál es la característica esencial del género lírico?",
            en: "What is the essential characteristic of the lyric genre?",
          },
          type: "multiple-choice",
          options: [
            { es: "Presencia de narrador", en: "Presence of narrator" },
            {
              es: "Expresión de sentimientos del yo poético",
              en: "Expression of feelings of the poetic self",
            },
            {
              es: "Diálogos entre personajes",
              en: "Dialogues between characters",
            },
            { es: "Estructura en actos", en: "Structure in acts" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El género lírico se centra en la expresión de emociones y sentimientos del hablante lírico.",
            en: "The lyric genre focuses on expressing emotions and feelings of the lyric speaker.",
          },
          difficulty: 1,
        },
        {
          id: "lit-gen-q2",
          prompt: {
            es: "Lee: 'Volverán las oscuras golondrinas / en tu balcón sus nidos a colgar.' Este fragmento de Bécquer pertenece al género:",
            en: "Read: 'The dark swallows will return / to hang their nests on your balcony.' This fragment by Bécquer belongs to the genre:",
          },
          type: "multiple-choice",
          options: [
            { es: "Épico", en: "Epic" },
            { es: "Lírico", en: "Lyric" },
            { es: "Dramático", en: "Dramatic" },
            { es: "Didáctico", en: "Didactic" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Es un poema que expresa sentimientos de nostalgia y amor perdido, característico del género lírico.",
            en: "It is a poem that expresses feelings of nostalgia and lost love, characteristic of the lyric genre.",
          },
          difficulty: 1,
        },
        {
          id: "lit-gen-q3",
          prompt: {
            es: "¿Qué subgénero épico narra hazañas heroicas en verso?",
            en: "Which epic subgenre narrates heroic deeds in verse?",
          },
          type: "multiple-choice",
          options: [
            { es: "Novela", en: "Novel" },
            { es: "Cuento", en: "Short story" },
            { es: "Epopeya", en: "Epic poem" },
            { es: "Fábula", en: "Fable" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La epopeya es un poema narrativo extenso sobre hazañas heroicas.",
            en: "The epic poem is an extensive narrative poem about heroic deeds.",
          },
          difficulty: 2,
        },
        {
          id: "lit-gen-q4",
          prompt: {
            es: "El género dramático siempre incluye acotaciones escénicas.",
            en: "The dramatic genre always includes stage directions.",
          },
          type: "true-false",
          correctAnswer: "true",
          explanation: {
            es: "Las acotaciones son parte esencial del texto dramático para indicar acciones, movimientos y ambientación.",
            en: "Stage directions are an essential part of dramatic text to indicate actions, movements and setting.",
          },
          difficulty: 1,
        },
        {
          id: "lit-gen-q5",
          prompt: {
            es: "¿En cuál género literario el autor desaparece detrás de los personajes?",
            en: "In which literary genre does the author disappear behind the characters?",
          },
          type: "multiple-choice",
          options: [
            { es: "Lírico", en: "Lyric" },
            { es: "Épico", en: "Epic" },
            { es: "Dramático", en: "Dramatic" },
            { es: "Ensayístico", en: "Essay" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "En el drama los personajes hablan directamente sin mediación de narrador.",
            en: "In drama the characters speak directly without narrator mediation.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "lit-corrientes-literarias",
      topicId: "literatura-generos",
      order: 2,
      title: {
        es: "Corrientes literarias: Barroco, Romanticismo, Realismo, Modernismo",
        en: "Literary movements: Baroque, Romanticism, Realism, Modernism",
      },
      description: {
        es: "Principales movimientos literarios y sus características",
        en: "Main literary movements and their characteristics",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "lit-corr-q1",
          prompt: {
            es: "¿Qué característica define al Barroco literario?",
            en: "What characteristic defines literary Baroque?",
          },
          type: "multiple-choice",
          options: [
            { es: "Sencillez expresiva", en: "Expressive simplicity" },
            {
              es: "Recargamiento ornamental y conceptual",
              en: "Ornamental and conceptual overloading",
            },
            { es: "Imitación de la naturaleza", en: "Imitation of nature" },
            { es: "Exaltación de la razón", en: "Exaltation of reason" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El Barroco se caracteriza por el exceso ornamental, el artificio y la complejidad formal.",
            en: "The Baroque is characterized by ornamental excess, artifice and formal complexity.",
          },
          difficulty: 2,
        },
        {
          id: "lit-corr-q2",
          prompt: {
            es: "En el Romanticismo, ¿qué aspecto predomina sobre la razón?",
            en: "In Romanticism, what aspect predominates over reason?",
          },
          type: "multiple-choice",
          options: [
            { es: "La emoción y el sentimiento", en: "Emotion and feeling" },
            { es: "La lógica científica", en: "Scientific logic" },
            { es: "La observación objetiva", en: "Objective observation" },
            { es: "La disciplina clásica", en: "Classical discipline" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El Romanticismo valora la emoción, la pasión y la imaginación sobre la razón ilustrada.",
            en: "Romanticism values emotion, passion and imagination over enlightened reason.",
          },
          difficulty: 1,
        },
        {
          id: "lit-corr-q3",
          prompt: {
            es: "¿Qué mov imiento literario busca representar fielmente la realidad social?",
            en: "Which literary movement seeks to faithfully represent social reality?",
          },
          type: "multiple-choice",
          options: [
            { es: "Romanticismo", en: "Romanticism" },
            { es: "Realismo", en: "Realism" },
            { es: "Modernismo", en: "Modernism" },
            { es: "Barroco", en: "Baroque" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El Realismo retrata objetivamente la sociedad contemporánea sin idealización.",
            en: "Realism objectively portrays contemporary society without idealization.",
          },
          difficulty: 1,
        },
        {
          id: "lit-corr-q4",
          prompt: {
            es: "El Modernismo hispanoamericano se caracteriza por:",
            en: "Hispanic American Modernism is characterized by:",
          },
          type: "multiple-choice",
          options: [
            {
              es: "Renovación del lenguaje poético y búsqueda de la belleza",
              en: "Renewal of poetic language and search for beauty",
            },
            {
              es: "Imitación de modelos clásicos",
              en: "Imitation of classical models",
            },
            {
              es: "Descripción realista de costumbres",
              en: "Realistic description of customs",
            },
            {
              es: "Predominio de temas religiosos",
              en: "Predominance of religious themes",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El Modernismo renueva la estética con musicalidad, exotismo y refinamiento verbal.",
            en: "Modernism renews aesthetics with musicality, exoticism and verbal refinement.",
          },
          difficulty: 2,
        },
        {
          id: "lit-corr-q5",
          prompt: {
            es: "El Realismo rechaza toda forma de idealización literaria.",
            en: "Realism rejects all forms of literary idealization.",
          },
          type: "true-false",
          correctAnswer: "true",
          explanation: {
            es: "El Realismo busca la objetividad y rechaza la idealización romántica de la realidad.",
            en: "Realism seeks objectivity and rejects the romantic idealization of reality.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "lit-texto-narrativo",
      topicId: "literatura-generos",
      order: 3,
      title: {
        es: "El texto narrativo: elementos y estructura",
        en: "Narrative text: elements and structure",
      },
      description: {
        es: "Narrador, personajes, tiempo, espacio y estructura narrativa",
        en: "Narrator, characters, time, space and narrative structure",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "lit-narr-q1",
          prompt: {
            es: "¿Qué tipo de narrador conoce los pensamientos de todos los personajes?",
            en: "What type of narrator knows the thoughts of all characters?",
          },
          type: "multiple-choice",
          options: [
            { es: "Narrador protagonista", en: "Protagonist narrator" },
            { es: "Narrador testigo", en: "Witness narrator" },
            { es: "Narrador omnisciente", en: "Omniscient narrator" },
            { es: "Narrador objetivo", en: "Objective narrator" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El narrador omnisciente tiene conocimiento total de la historia y los personajes.",
            en: "The omniscient narrator has total knowledge of the story and characters.",
          },
          difficulty: 1,
        },
        {
          id: "lit-narr-q2",
          prompt: {
            es: "En la narración en primera persona, el narrador:",
            en: "In first-person narration, the narrator:",
          },
          type: "multiple-choice",
          options: [
            {
              es: "Conoce todo sobre todos los personajes",
              en: "Knows everything about all characters",
            },
            {
              es: "Participa en la historia como personaje",
              en: "Participates in the story as a character",
            },
            {
              es: "Solo describe objetivamente",
              en: "Only describes objectively",
            },
            {
              es: "Permanece fuera de la historia",
              en: "Remains outside the story",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El narrador en primera persona es parte de la historia, ya sea protagonista o testigo.",
            en: "The first-person narrator is part of the story, either as protagonist or witness.",
          },
          difficulty: 1,
        },
        {
          id: "lit-narr-q3",
          prompt: {
            es: "¿Cómo se llama el inicio de una narración en medio de la acción?",
            en: "What is the beginning of a narrative in the middle of the action called?",
          },
          type: "multiple-choice",
          options: [
            { es: "In extremis", en: "In extremis" },
            { es: "In medias res", en: "In medias res" },
            { es: "Ab initio", en: "Ab initio" },
            { es: "Ex abrupto", en: "Ex abrupto" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "In medias res significa 'en medio de las cosas', técnica que inicia la narración en plena acción.",
            en: "In medias res means 'in the middle of things', a technique that starts the narrative in full action.",
          },
          difficulty: 2,
        },
        {
          id: "lit-narr-q4",
          prompt: {
            es: "Lee: 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota...' ¿Qué recurso narrativo utiliza García Márquez?",
            en: "Read: 'Many years later, facing the firing squad, Colonel Aureliano Buendía would remember that remote afternoon...' What narrative device does García Márquez use?",
          },
          type: "multiple-choice",
          options: [
            { es: "Anticipación o prolepsis", en: "Anticipation or prolepsis" },
            {
              es: "Retrospección o analepsis",
              en: "Retrospection or analepsis",
            },
            { es: "Narración lineal", en: "Linear narration" },
            { es: "Monólogo interior", en: "Interior monologue" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Desde el presente (pelotón) se recuerda el pasado (tarde remota), esto es una analepsis o flashback.",
            en: "From the present (firing squad) the past is remembered (remote afternoon), this is analepsis or flashback.",
          },
          difficulty: 2,
        },
        {
          id: "lit-narr-q5",
          prompt: {
            es: "Los personajes planos son aquellos que evolucionan y cambian a lo largo de la historia.",
            en: "Flat characters are those that evolve and change throughout the story.",
          },
          type: "true-false",
          correctAnswer: "false",
          explanation: {
            es: "Los personajes planos son simples y no cambian. Los que evolucionan son los personajes redondos.",
            en: "Flat characters are simple and don't change. Those that evolve are round characters.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
