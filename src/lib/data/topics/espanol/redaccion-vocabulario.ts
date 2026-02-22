import type { Topic } from "@/lib/types";

export const redaccionVocabularioTopic: Topic = {
  id: "redaccion-vocabulario",
  slug: "redaccion-vocabulario",
  title: {
    es: "Redacción y Vocabulario",
    en: "Writing and Vocabulary",
  },
  description: {
    es: "Coherencia, cohesión y relaciones semánticas",
    en: "Coherence, cohesion and semantic relationships",
  },
  icon: "PenTool",
  color: "amber",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  prerequisites: ["comprension-lectura"],
  order: 6,
  lessons: [
    {
      id: "redaccion-coherencia",
      topicId: "redaccion-vocabulario",
      order: 1,
      title: {
        es: "Coherencia y Cohesión",
        en: "Coherence and Cohesion",
      },
      description: {
        es: "Estructura y fluidez del texto",
        en: "Text structure and fluency",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "esp_re_1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes oraciones está correctamente redactada?",
            en: "Which of the following sentences is correctly written?",
          },
          options: [
            { es: "Se venden vestidos para señoras de seda", en: "Dresses for silk ladies are sold" },
            { es: "Se venden vestidos de seda para señoras", en: "Silk dresses for ladies are sold" },
            { es: "Para señoras se venden de seda vestidos", en: "For ladies silk dresses are sold" },
            { es: "Vestidos de seda para señoras se venden", en: "Silk dresses for ladies are sold" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La opción correcta evita la ambigüedad. \"Se venden vestidos de seda para señoras\" deja claro que los vestidos son de seda, mientras que \"vestidos para señoras de seda\" genera confusión sobre quién es de seda.",
            en: "The correct option avoids ambiguity. \"Silk dresses for ladies are sold\" makes it clear that the dresses are silk, while \"dresses for silk ladies\" creates confusion about what is silk.",
          },
          difficulty: 2,
        },
        {
          id: "esp_re_2",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes oraciones presenta un error de concordancia?",
            en: "Which of the following sentences has a concordance error?",
          },
          options: [
            { es: "La mayoría de los estudiantes aprobó el examen", en: "The majority of students passed the exam" },
            { es: "El grupo de niños jugaban en el parque", en: "The group of children were playing in the park" },
            { es: "Las flores del jardín están marchitas", en: "The flowers in the garden are withered" },
            { es: "Los resultados del estudio fueron reveladores", en: "The results of the study were revealing" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Hay un error de concordancia: el sujeto \"El grupo\" es singular, por lo que el verbo debe ser singular: \"El grupo de niños jugaba en el parque\". El núcleo del sujeto es \"grupo\", no \"niños\".",
            en: "There is a concordance error: the subject \"The group\" is singular, so the verb should be singular: \"The group of children was playing in the park\". The nucleus of the subject is \"group\", not \"children\".",
          },
          difficulty: 2,
        },
        {
          id: "esp_re_3",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué error de redacción presenta la oración \"El paciente dijo de que se sentía mejor\"?",
            en: "What writing error does the sentence \"The patient said of that he felt better\" present?",
          },
          options: [
            { es: "Falta de concordancia", en: "Lack of concordance" },
            { es: "Dequeísmo", en: "Dequeism" },
            { es: "Queísmo", en: "Queism" },
            { es: "Anacoluto", en: "Anacoluthon" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El dequeísmo es el uso indebido de \"de que\" donde solo corresponde \"que\". Lo correcto es \"El paciente dijo que se sentía mejor\", pues el verbo \"decir\" no requiere la preposición \"de\".",
            en: "Dequeism is the improper use of \"of that\" where only \"that\" is appropriate. The correct form is \"The patient said that he felt better\", as the verb \"to say\" does not require the preposition \"of\".",
          },
          difficulty: 2,
        },
        {
          id: "esp_re_4",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes oraciones tiene un error de redundancia?",
            en: "Which of the following sentences has a redundancy error?",
          },
          options: [
            { es: "El resultado fue inesperado para todos", en: "The result was unexpected for everyone" },
            { es: "Subió arriba para buscar las llaves", en: "He went up upwards to look for the keys" },
            { es: "La conferencia fue muy interesante", en: "The conference was very interesting" },
            { es: "Llegaron puntuales a la reunión", en: "They arrived punctually to the meeting" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "\"Subió arriba\" es redundante (pleonasmo vicioso) porque \"subir\" ya implica ir hacia arriba. Lo correcto es simplemente \"Subió para buscar las llaves\".",
            en: "\"Went up upwards\" is redundant (vicious pleonasm) because \"to go up\" already implies moving upwards. The correct form is simply \"He went up to look for the keys\".",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "vocabulario-analogias",
      topicId: "redaccion-vocabulario",
      order: 2,
      title: {
        es: "Analogías",
        en: "Analogies",
      },
      description: {
        es: "Relaciones semánticas entre palabras",
        en: "Semantic relationships between words",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_vo_1",
          type: "multiple-choice",
          prompt: {
            es: "DOCTOR es a HOSPITAL como MAESTRO es a:",
            en: "DOCTOR is to HOSPITAL as TEACHER is to:",
          },
          options: [
            { es: "Alumno", en: "Student" },
            { es: "Escuela", en: "School" },
            { es: "Libro", en: "Book" },
            { es: "Enseñanza", en: "Teaching" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La relación analógica es: profesional → lugar donde ejerce. El doctor trabaja en el hospital, así como el maestro trabaja en la escuela.",
            en: "The analogical relationship is: professional → place where they practice. The doctor works at the hospital, just as the teacher works at the school.",
          },
          difficulty: 2,
        },
        {
          id: "esp_vo_2",
          type: "multiple-choice",
          prompt: {
            es: "OJO es a VER como OÍDO es a:",
            en: "EYE is to SEE as EAR is to:",
          },
          options: [
            { es: "Oreja", en: "External ear" },
            { es: "Sonido", en: "Sound" },
            { es: "Escuchar", en: "Hear" },
            { es: "Hablar", en: "Speak" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La relación analógica es: órgano → función que realiza. El ojo sirve para ver, así como el oído sirve para escuchar.",
            en: "The analogical relationship is: organ → function it performs. The eye serves to see, just as the ear serves to hear.",
          },
          difficulty: 2,
        },
        {
          id: "esp_vo_3",
          type: "multiple-choice",
          prompt: {
            es: "HAMBRE es a COMER como SED es a:",
            en: "HUNGER is to EAT as THIRST is to:",
          },
          options: [
            { es: "Agua", en: "Water" },
            { es: "Beber", en: "Drink" },
            { es: "Sed", en: "Thirst" },
            { es: "Desierto", en: "Desert" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La relación analógica es: necesidad → acción para satisfacerla. El hambre se satisface al comer, así como la sed se satisface al beber.",
            en: "The analogical relationship is: need → action to satisfy it. Hunger is satisfied by eating, just as thirst is satisfied by drinking.",
          },
          difficulty: 1,
        },
        {
          id: "esp_vo_4",
          type: "multiple-choice",
          prompt: {
            es: "LIBRO es a BIBLIOTECA como CUADRO es a:",
            en: "BOOK is to LIBRARY as PAINTING is to:",
          },
          options: [
            { es: "Pintor", en: "Painter" },
            { es: "Arte", en: "Art" },
            { es: "Museo", en: "Museum" },
            { es: "Marco", en: "Frame" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La relación analógica es: objeto → lugar donde se guarda o exhibe una colección. Los libros se guardan en la biblioteca, así como los cuadros se exhiben en el museo.",
            en: "The analogical relationship is: object → place where a collection is stored or exhibited. Books are stored in the library, just as paintings are exhibited in the museum.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "vocabulario-sinonimos-antonimos",
      topicId: "redaccion-vocabulario",
      order: 3,
      title: {
        es: "Sinónimos y Antónimos",
        en: "Synonyms and Antonyms",
      },
      description: {
        es: "Palabras con significados similares y opuestos",
        en: "Words with similar and opposite meanings",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_vo_6",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el sinónimo de \"efímero\"?",
            en: "What is the synonym of \"ephemeral\"?",
          },
          options: [
            { es: "Eterno", en: "Eternal" },
            { es: "Pasajero", en: "Fleeting" },
            { es: "Sólido", en: "Solid" },
            { es: "Importante", en: "Important" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "\"Efímero\" significa de corta duración, que desaparece rápidamente. Su sinónimo es \"pasajero\", que también indica algo transitorio y breve.",
            en: "\"Ephemeral\" means short-lived, disappearing quickly. Its synonym is \"fleeting\", which also indicates something transitory and brief.",
          },
          difficulty: 2,
        },
        {
          id: "esp_vo_7",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el sinónimo de \"prolijo\"?",
            en: "What is the synonym of \"meticulous\"?",
          },
          options: [
            { es: "Breve", en: "Brief" },
            { es: "Minucioso", en: "Detailed" },
            { es: "Descuidado", en: "Careless" },
            { es: "Rápido", en: "Fast" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "\"Prolijo\" significa detallado, minucioso, que se hace con gran cuidado y atención a los detalles. \"Minucioso\" es su sinónimo más cercano.",
            en: "\"Meticulous\" means detailed, thorough, done with great care and attention to detail. \"Detailed\" is its closest synonym.",
          },
          difficulty: 2,
        },
        {
          id: "esp_vo_11",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el antónimo de \"próspero\"?",
            en: "What is the antonym of \"prosperous\"?",
          },
          options: [
            { es: "Rico", en: "Rich" },
            { es: "Exitoso", en: "Successful" },
            { es: "Decadente", en: "Decadent" },
            { es: "Abundante", en: "Abundant" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "\"Próspero\" significa que tiene éxito, que progresa favorablemente. Su antónimo es \"decadente\", que indica deterioro, declive o pérdida de calidad.",
            en: "\"Prosperous\" means successful, progressing favorably. Its antonym is \"decadent\", which indicates deterioration, decline or loss of quality.",
          },
          difficulty: 2,
        },
        {
          id: "esp_vo_12",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el antónimo de \"elocuente\"?",
            en: "What is the antonym of \"eloquent\"?",
          },
          options: [
            { es: "Expresivo", en: "Expressive" },
            { es: "Convincente", en: "Convincing" },
            { es: "Inarticulado", en: "Inarticulate" },
            { es: "Persuasivo", en: "Persuasive" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "\"Elocuente\" significa que se expresa con fluidez, claridad y poder de persuasión. Su antónimo es \"inarticulado\", que indica incapacidad para expresarse con claridad.",
            en: "\"Eloquent\" means expressing oneself with fluency, clarity and persuasive power. Its antonym is \"inarticulate\", which indicates inability to express oneself clearly.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
