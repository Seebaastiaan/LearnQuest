import type { Topic } from "@/lib/types";

export const gramaticaTopic: Topic = {
  id: "gramatica",
  slug: "gramatica",
  title: {
    es: "Gramática",
    en: "Grammar",
  },
  description: {
    es: "Oración, sujeto y predicado",
    en: "Sentence, subject and predicate",
  },
  icon: "FileCode",
  color: "indigo",
  bgGradient: "bg-linear-to-br from-indigo-500 to-purple-600",
  prerequisites: ["comprension-lectura"],
  order: 4,
  lessons: [
    {
      id: "gramatica-oracion",
      topicId: "gramatica",
      order: 1,
      title: {
        es: "La Oración",
        en: "The Sentence",
      },
      description: {
        es: "Tipos y estructuras oracionales",
        en: "Sentence types and structures",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "esp_gr_1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes opciones es una oración?",
            en: "Which of the following options is a sentence?",
          },
          options: [
            { es: "El grande y hermoso campo verde", en: "The big and beautiful green field" },
            { es: "Los estudiantes aprobaron el examen", en: "The students passed the exam" },
            { es: "Debajo de la mesa del comedor", en: "Under the dining table" },
            { es: "Rápidamente, con mucha precaución", en: "Quickly, with much caution" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Una oración es una unidad lingüística con sentido completo que contiene al menos un verbo conjugado. \"Los estudiantes aprobaron el examen\" tiene sujeto, verbo conjugado y complemento.",
            en: "A sentence is a linguistic unit with complete meaning that contains at least one conjugated verb. \"The students passed the exam\" has subject, conjugated verb and complement.",
          },
          difficulty: 1,
        },
        {
          id: "esp_gr_2",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de oración es \"¿A qué hora comienza la función?\"?",
            en: "What type of sentence is \"What time does the show start?\"?",
          },
          options: [
            { es: "Oración exclamativa", en: "Exclamatory sentence" },
            { es: "Oración imperativa", en: "Imperative sentence" },
            { es: "Oración interrogativa", en: "Interrogative sentence" },
            { es: "Oración declarativa", en: "Declarative sentence" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Es una oración interrogativa porque formula una pregunta. Se identifica por los signos de interrogación y su entonación ascendente.",
            en: "It is an interrogative sentence because it formulates a question. It is identified by question marks and its rising intonation.",
          },
          difficulty: 1,
        },
        {
          id: "esp_gr_3",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes es una oración compuesta?",
            en: "Which of the following is a compound sentence?",
          },
          options: [
            { es: "Los niños juegan en el parque", en: "The children play in the park" },
            { es: "María estudia y su hermano trabaja", en: "Maria studies and her brother works" },
            { es: "El libro está sobre la mesa", en: "The book is on the table" },
            { es: "Mañana lloverá mucho", en: "Tomorrow it will rain a lot" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "\"María estudia y su herman trabaja\" es una oración compuesta porque contiene dos verbos conjugados (\"estudia\" y \"trabaja\") unidos por la conjunción copulativa \"y\", formando dos proposiciones.",
            en: "\"Maria studies and her brother works\" is a compound sentence because it contains two conjugated verbs (\"studies\" and \"works\") joined by the copulative conjunction \"and\", forming two propositions.",
          },
          difficulty: 2,
        },
        {
          id: "esp_gr_4",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es una oración coordinada adversativa?",
            en: "Which is an adversative coordinate sentence?",
          },
          options: [
            { es: "Iré al cine y después cenaré", en: "I'll go to the movies and then have dinner" },
            { es: "Quería ir, pero no pudo", en: "He wanted to go, but couldn't" },
            { es: "O vienes conmigo o te quedas", en: "Either you come with me or you stay" },
            { es: "Estudia porque mañana tiene examen", en: "Study because tomorrow you have an exam" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Las oraciones coordinadas adversativas se unen mediante conjunciones que expresan oposición o contraste, como \"pero\", \"sin embargo\", \"mas\", \"no obstante\". \"Quería ir, pero no pudo\" opone dos ideas.",
            en: "Adversative coordinate sentences are joined by conjunctions that express opposition or contrast, such as \"but\", \"however\", \"yet\", \"nevertheless\". \"He wanted to go, but couldn't\" opposes two ideas.",
          },
          difficulty: 2,
        },
        {
          id: "esp_gr_5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es una oración subordinada causal?",
            en: "Which is a causal subordinate clause?",
          },
          options: [
            { es: "Si llueve, no iremos al parque", en: "If it rains, we won't go to the park" },
            { es: "Llegó tarde porque había mucho tráfico", en: "He arrived late because there was a lot of traffic" },
            { es: "Cuando termine, te aviso", en: "When I finish, I'll let you know" },
            { es: "El libro que leíste es interesante", en: "The book you read is interesting" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La oración subordinada causal explica la causa o razón de la oración principal. \"Porque había mucho tráfico\" expresa la causa de \"llegó tarde\", introducida por el nexo causal \"porque\".",
            en: "The causal subordinate clause explains the cause or reason for the main clause. \"Because there was a lot of traffic\" expresses the cause of \"arrived late\", introduced by the causal link \"because\".",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "gramatica-sujeto",
      topicId: "gramatica",
      order: 2,
      title: {
        es: "El Sujeto",
        en: "The Subject",
      },
      description: {
        es: "Identificar y analizar el sujeto",
        en: "Identify and analyze the subject",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_gr_6",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el sujeto en la oración \"Los alumnos de tercer grado ganaron el concurso de ortografía\"?",
            en: "What is the subject in the sentence \"The third grade students won the spelling contest\"?",
          },
          options: [
            { es: "Los alumnos", en: "The students" },
            { es: "Los alumnos de tercer grado", en: "The third grade students" },
            { es: "El concurso de ortografía", en: "The spelling contest" },
            { es: "Ganaron el concurso", en: "Won the contest" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El sujeto completo es \"Los alumnos de tercer grado\", pues es de quienes se predica la acción de ganar. \"De tercer grado\" es un complemento del núcleo del sujeto \"alumnos\".",
            en: "The complete subject is \"The third grade students\", as they are the ones of whom the action of winning is predicated. \"Of third grade\" is a complement of the subject nucleus \"students\".",
          },
          difficulty: 2,
        },
        {
          id: "esp_gr_7",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué es un sujeto tácito?",
            en: "What is a tacit subject?",
          },
          options: [
            { es: "Un sujeto que aparece al inicio de la oración", en: "A subject that appears at the beginning of the sentence" },
            { es: "Un sujeto que no se menciona explícitamente pero se deduce del verbo", en: "A subject that is not explicitly mentioned but is deduced from the verb" },
            { es: "Un sujeto que es un pronombre", en: "A subject that is a pronoun" },
            { es: "Un sujeto que es un nombre propio", en: "A subject that is a proper noun" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El sujeto tácito (o implícito) es aquel que no aparece explícitamente en la oración pero se puede deducir de la conjugación del verbo. Ejemplo: \"Fuimos al cine\" (sujeto tácito: nosotros).",
            en: "The tacit (or implicit) subject is one that does not appear explicitly in the sentence but can be deduced from the verb conjugation. Example: \"We went to the movies\" (tacit subject: we).",
          },
          difficulty: 1,
        },
        {
          id: "esp_gr_8",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el núcleo del sujeto en \"La hermosa ciudad de Oaxaca atrae a miles de turistas\"?",
            en: "What is the subject nucleus in \"The beautiful city of Oaxaca attracts thousands of tourists\"?",
          },
          options: [
            { es: "La hermosa", en: "The beautiful" },
            { es: "Oaxaca", en: "Oaxaca" },
            { es: "Ciudad", en: "City" },
            { es: "Turistas", en: "Tourists" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El núcleo del sujeto es el sustantivo principal: \"ciudad\". \"La hermosa\" es artículo + adjetivo (modificadores directos), y \"de Oaxaca\" es un complemento del sustantivo.",
            en: "The subject nucleus is the main noun: \"city\". \"The beautiful\" is article + adjective (direct modifiers), and \"of Oaxaca\" is a complement of the noun.",
          },
          difficulty: 2,
        },
        {
          id: "esp_gr_9",
          type: "multiple-choice",
          prompt: {
            es: "En la oración \"Llueve mucho en esta temporada\", ¿qué tipo de oración es respecto al sujeto?",
            en: "In the sentence \"It rains a lot this season\", what type of sentence is it regarding the subject?",
          },
          options: [
            { es: "Oración con sujeto tácito", en: "Sentence with tacit subject" },
            { es: "Oración impersonal (sin sujeto)", en: "Impersonal sentence (without subject)" },
            { es: "Oración con sujeto compuesto", en: "Sentence with compound subject" },
            { es: "Oración pasiva", en: "Passive sentence" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Las oraciones impersonales carecen de sujeto. Los verbos meteorológicos como \"llover\", \"nevar\", \"granizar\" forman oraciones impersonales porque no se puede atribuir la acción a un sujeto.",
            en: "Impersonal sentences lack a subject. Meteorological verbs like \"to rain\", \"to snow\", \"to hail\" form impersonal sentences because the action cannot be attributed to a subject.",
          },
          difficulty: 2,
        },
        {
          id: "esp_gr_10",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el sujeto en \"Nos preocupa la situación económica del país\"?",
            en: "What is the subject in \"We are worried about the country's economic situation\"?",
          },
          options: [
            { es: "Nos", en: "Us" },
            { es: "La situación económica del país", en: "The country's economic situation" },
            { es: "La situación económica", en: "The economic situation" },
            { es: "Del país", en: "Of the country" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El sujeto es \"la situación económica del país\" porque es de lo que se predica el verbo \"preocupa\". La concordancia es: la situación (singular) preocupa (singular). \"Nos\" es complemento indirecto.",
            en: "The subject is \"the country's economic situation\" because it's what the verb \"worries\" predicates. The agreement is: the situation (singular) worries (singular). \"Us\" is indirect complement.",
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "gramatica-predicado",
      topicId: "gramatica",
      order: 3,
      title: {
        es: "El Predicado",
        en: "The Predicate",
      },
      description: {
        es: "Tipos y complementos del predicado",
        en: "Types and complements of the predicate",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_gr_11",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el predicado en la oración \"Mi abuela prepara una deliciosa sopa de verduras todos los domingos\"?",
            en: "What is the predicate in the sentence \"My grandmother prepares a delicious vegetable soup every Sunday\"?",
          },
          options: [
            { es: "Mi abuela", en: "My grandmother" },
            { es: "Una deliciosa sopa de verduras", en: "A delicious vegetable soup" },
            { es: "Prepara una deliciosa sopa de verduras todos los domingos", en: "Prepares a delicious vegetable soup every Sunday" },
            { es: "Todos los domingos", en: "Every Sunday" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El predicado es todo lo que se dice del sujeto. El sujeto es \"Mi abuela\", por lo tanto el predicado es \"prepara una deliciosa sopa de verduras todos los domingos\".",
            en: "The predicate is everything that is said about the subject. The subject is \"My grandmother\", therefore the predicate is \"prepares a delicious vegetable soup every Sunday\".",
          },
          difficulty: 1,
        },
        {
          id: "esp_gr_12",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el núcleo del predicado en \"Los estudiantes resolvieron correctamente todos los ejercicios\"?",
            en: "What is the predicate nucleus in \"The students correctly solved all exercises\"?",
          },
          options: [
            { es: "Estudiantes", en: "Students" },
            { es: "Correctamente", en: "Correctly" },
            { es: "Resolvieron", en: "Solved" },
            { es: "Ejercicios", en: "Exercises" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El núcleo del predicado es siempre el verbo conjugado. En esta oración, \"resolvieron\" es el verbo conjugado que indica la acción realizada por el sujeto.",
            en: "The predicate nucleus is always the conjugated verb. In this sentence, \"solved\" is the conjugated verb that indicates the action performed by the subject.",
          },
          difficulty: 1,
        },
        {
          id: "esp_gr_13",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el objeto directo en \"El carpintero construyó una mesa de madera\"?",
            en: "What is the direct object in \"The carpenter built a wooden table\"?",
          },
          options: [
            { es: "El carpintero", en: "The carpenter" },
            { es: "Construyó", en: "Built" },
            { es: "Una mesa de madera", en: "A wooden table" },
            { es: "De madera", en: "Of wood" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El objeto directo es lo que recibe directamente la acción del verbo. ¿Qué construyó el carpintero? \"Una mesa de madera\". Se puede sustituir por el pronombre \"la\": \"El carpintero la construyó\".",
            en: "The direct object is what directly receives the action of the verb. What did the carpenter build? \"A wooden table\". It can be replaced by the pronoun \"it\": \"The carpenter built it\".",
          },
          difficulty: 2,
        },
        {
          id: "esp_gr_14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el objeto indirecto en \"La maestra entregó las calificaciones a los alumnos\"?",
            en: "What is the indirect object in \"The teacher gave the grades to the students\"?",
          },
          options: [
            { es: "La maestra", en: "The teacher" },
            { es: "Las calificaciones", en: "The grades" },
            { es: "A los alumnos", en: "To the students" },
            { es: "Entregó", en: "Gave" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El objeto indirecto indica el beneficiario o destinatario de la acción. ¿A quién entregó las calificaciones? \"A los alumnos\". Se puede sustituir por \"les\": \"La maestra les entregó las calificaciones\".",
            en: "The indirect object indicates the beneficiary or recipient of the action. To whom did she give the grades? \"To the students\". It can be replaced by \"them\": \"The teacher gave them the grades\".",
          },
          difficulty: 2,
        },
        {
          id: "esp_gr_15",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué tipo de predicado tiene la oración \"La noche estaba oscura y silenciosa\"?",
            en: "What type of predicate does the sentence \"The night was dark and silent\" have?",
          },
          options: [
            { es: "Predicado verbal", en: "Verbal predicate" },
            { es: "Predicado nominal", en: "Nominal predicate" },
            { es: "Predicado compuesto", en: "Compound predicate" },
            { es: "Predicado impersonal", en: "Impersonal predicate" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El predicado nominal se construye con un verbo copulativo (ser, estar, parecer) más un atributo que describe al sujeto. \"Estaba oscura y silenciosa\" describe cómo era la noche.",
            en: "The nominal predicate is constructed with a copulative verb (to be, to seem) plus an attribute that describes the subject. \"Was dark and silent\" describes how the night was.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
