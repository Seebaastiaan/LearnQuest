import type { Topic } from "@/lib/types";

export const ortografiaTopic: Topic = {
  id: "ortografia",
  slug: "ortografia",
  title: {
    es: "Ortografía",
    en: "Spelling",
  },
  description: {
    es: "Acentos, uso de letras y puntuación",
    en: "Accents, letter usage and punctuation",
  },
  icon: "Pen",
  color: "rose",
  bgGradient: "bg-linear-to-br from-rose-500 to-pink-600",
  prerequisites: ["gramatica"],
  order: 5,
  lessons: [
    {
      id: "ortografia-acentos",
      topicId: "ortografia",
      order: 1,
      title: {
        es: "Acentuación",
        en: "Accentuation",
      },
      description: {
        es: "Reglas de acentuación y tildes diacríticas",
        en: "Accentuation rules and diacritical marks",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "esp_or_24",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes palabras es esdrújula?",
            en: "Which of the following words is proparoxytone (stress on third-to-last syllable)?",
          },
          options: [
            { es: "Canción", en: "Song" },
            { es: "Teléfono", en: "Telephone" },
            { es: "Reloj", en: "Clock" },
            { es: "Casa", en: "House" },
          ],
          correctAnswer: "1",
          explanation: {
            es: '"Teléfono" es esdrújula porque la sílaba tónica es la antepenúltima (te-LÉ-fo-no). Todas las palabras esdrújulas siempre llevan tilde.',
            en: '"Teléfono" is proparoxytone because the stressed syllable is the third-to-last (te-LÉ-fo-no). All proparoxytone words always carry an accent mark.',
          },
          difficulty: 2,
        },
        {
          id: "esp_or_25",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes palabras debería llevar tilde?",
            en: "Which of the following words should have an accent mark?",
          },
          options: [
            { es: "Examen", en: "Exam" },
            { es: "Util", en: "Useful" },
            { es: "Lopez", en: "Lopez" },
            { es: "Las opciones b y c", en: "Options b and c" },
          ],
          correctAnswer: "3",
          explanation: {
            es: '"Útil" lleva tilde porque es grave terminada en consonante distinta de n o s (l). "López" lleva tilde porque es grave terminada en z (consonante distinta de n o s). "Examen" es grave terminada en n, así que no lleva tilde.',
            en: '"Útil" has an accent because it\'s paroxytone ending in a consonant other than n or s (l). "López" has an accent because it\'s paroxytone ending in z (consonant other than n or s). "Examen" is paroxytone ending in n, so it doesn\'t have an accent.',
          },
          difficulty: 2,
        },
        {
          id: "esp_or_26",
          type: "multiple-choice",
          prompt: {
            es: '¿Qué tipo de acento llevan las palabras "aún" y "aun" y cuándo se usa cada una?',
            en: 'What type of accent do the words "aún" and "aun" have and when is each used?',
          },
          options: [
            {
              es: "Siempre se escriben sin tilde",
              en: "They are always written without accent",
            },
            {
              es: '"Aún" lleva tilde cuando significa "todavía" y "aun" no la lleva cuando significa "incluso"',
              en: '"Aún" has an accent when it means "still" and "aun" doesn\'t when it means "even"',
            },
            { es: "Siempre llevan tilde", en: "They always have an accent" },
            {
              es: "Se escriben igual en todos los contextos",
              en: "They are written the same in all contexts",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: '"Aún" lleva tilde (acento diacrítico) cuando equivale a "todavía": "Aún no llega". "Aun" sin tilde se usa cuando significa "incluso" o "hasta": "Aun así, continuó".',
            en: '"Aún" has an accent (diacritical) when it means "still": "He still hasn\'t arrived". "Aun" without accent is used when it means "even" or "until": "Even so, he continued".',
          },
          difficulty: 2,
        },
        {
          id: "esp_or_27",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes oraciones usa correctamente las tildes diacríticas?",
            en: "Which of the following sentences correctly uses diacritical accents?",
          },
          options: [
            {
              es: "El quiere que le dé más te",
              en: "He wants you to give him more tea",
            },
            {
              es: "Él quiere que le dé más té",
              en: "He wants you to give him more tea",
            },
            {
              es: "El quiere que le de más té",
              en: "He wants you to give him more tea",
            },
            {
              es: "Él quiere que le de mas te",
              en: "He wants you to give him more tea",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: '"Él" (pronombre personal) lleva tilde para diferenciarlo de "el" (artículo). "Dé" (del verbo dar) lleva tilde para diferenciarlo de "de" (preposición). "Té" (la bebida) lleva tilde para diferenciarlo de "te" (pronombre).',
            en: '"Él" (personal pronoun) has an accent to differentiate it from "el" (article). "Dé" (from verb to give) has an accent to differentiate it from "de" (preposition). "Té" (the drink) has an accent to differentiate it from "te" (pronoun).',
          },
          difficulty: 3,
        },
        {
          id: "esp_or_28",
          type: "multiple-choice",
          prompt: {
            es: '¿Por qué la palabra "día" lleva tilde aunque sea de dos sílabas y terminada en vocal?',
            en: 'Why does the word "día" have an accent even though it has two syllables and ends in a vowel?',
          },
          options: [
            {
              es: "Porque es una palabra aguda",
              en: "Because it's an oxytone word",
            },
            {
              es: "Porque tiene un hiato: la vocal débil (i) tónica junto a una vocal fuerte (a) necesita tilde para romper el diptongo",
              en: "Because it has a hiatus: the stressed weak vowel (i) next to a strong vowel (a) needs an accent to break the diphthong",
            },
            {
              es: "Porque todas las palabras de dos sílabas llevan tilde",
              en: "Because all two-syllable words have accents",
            },
            {
              es: "Es una excepción sin explicación",
              en: "It's an exception without explanation",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: '"Día" lleva tilde porque hay un hiato: la vocal débil (i) es la tónica y está junto a una vocal fuerte (a). Se coloca la tilde sobre la vocal débil para indicar que no forman diptongo sino hiato: dí-a.',
            en: '"Día" has an accent because there is a hiatus: the weak vowel (i) is stressed and is next to a strong vowel (a). The accent is placed on the weak vowel to indicate that they don\'t form a diphthong but a hiatus: dí-a.',
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "ortografia-letras",
      topicId: "ortografia",
      order: 2,
      title: {
        es: "Uso de Letras",
        en: "Letter Usage",
      },
      description: {
        es: "B/V, S/C/Z, G/J, H y más",
        en: "B/V, S/C/Z, G/J, H and more",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_or_1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál palabra está correctamente escrita?",
            en: "Which word is correctly written?",
          },
          options: [
            { es: "Desición", en: "Decision (incorrect)" },
            { es: "Decisión", en: "Decision" },
            { es: "Desisión", en: "Decision (incorrect)" },
            { es: "Decición", en: "Decision (incorrect)" },
          ],
          correctAnswer: "1",
          explanation: {
            es: 'La palabra correcta es "decisión" (con c-s). Viene del verbo "decidir" y las palabras terminadas en -sión que derivan de verbos terminados en -dir llevan s: decidir → decisión.',
            en: 'The correct word is "decisión" (with c-s). It comes from the verb "decidir" and words ending in -sión that derive from verbs ending in -dir use s: decidir → decisión.',
          },
          difficulty: 2,
        },
        {
          id: "esp_or_6",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál palabra está correctamente escrita?",
            en: "Which word is correctly written?",
          },
          options: [
            { es: "Probecho", en: "Advantage (incorrect)" },
            { es: "Provecho", en: "Advantage" },
            { es: "Provheco", en: "Advantage (incorrect)" },
            { es: "Probheco", en: "Advantage (incorrect)" },
          ],
          correctAnswer: "1",
          explanation: {
            es: '"Provecho" se escribe con v. Después de la sílaba "pro-" se escribe v en la mayoría de los casos: provecho, proveer, provocar, provincia.',
            en: '"Provecho" is written with v. After the syllable "pro-" v is written in most cases: provecho, proveer, provocar, provincia.',
          },
          difficulty: 2,
        },
        {
          id: "esp_or_11",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál palabra está correctamente escrita?",
            en: "Which word is correctly written?",
          },
          options: [
            { es: "Lenguage", en: "Language (incorrect)" },
            { es: "Lenguaje", en: "Language" },
            { es: "Lenguague", en: "Language (incorrect)" },
            { es: "Lengüage", en: "Language (incorrect)" },
          ],
          correctAnswer: "1",
          explanation: {
            es: '"Lenguaje" se escribe con j. Las palabras terminadas en -aje y -eje se escriben con j: lenguaje, paisaje, viaje, equipaje, hereje.',
            en: '"Lenguaje" is written with j. Words ending in -aje and -eje are written with j: lenguaje, paisaje, viaje, equipaje, hereje.',
          },
          difficulty: 1,
        },
        {
          id: "esp_or_18",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes palabras se escribe con h?",
            en: "Which of the following words is written with h?",
          },
          options: [
            { es: "Asta (de bandera)", en: "Pole (flagpole)" },
            { es: "Onda (de sonido)", en: "Wave (sound wave)" },
            { es: "Orfanato", en: "Orphanage" },
            { es: "Huérfano", en: "Orphan" },
          ],
          correctAnswer: "3",
          explanation: {
            es: '"Huérfano" se escribe con h. Las palabras que empiezan con el diptongo "ue" se escriben con h: huérfano, hueso, huevo, hueco, huerta. También: "asta" (de bandera, sin h) vs. "hasta" (preposición, con h).',
            en: '"Huérfano" is written with h. Words that begin with the diphthong "ue" are written with h: huérfano, hueso, huevo, hueco, huerta. Also: "asta" (flagpole, without h) vs. "hasta" (preposition, with h).',
          },
          difficulty: 2,
        },
        {
          id: "esp_vo_16",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la oración correcta?",
            en: "Which is the correct sentence?",
          },
          options: [
            {
              es: "Tubo que salir temprano de la oficina",
              en: "He tube to leave the office early (incorrect)",
            },
            {
              es: "Tuvo que salir temprano de la oficina",
              en: "He had to leave the office early",
            },
            { es: "Las dos son correctas", en: "Both are correct" },
            { es: "Ninguna es correcta", en: "Neither is correct" },
          ],
          correctAnswer: "1",
          explanation: {
            es: '"Tuvo" (con v) es el pasado del verbo "tener". "Tubo" (con b) es un sustantivo que designa una pieza cilíndrica hueca. La oración requiere el verbo "tener", por lo tanto se escribe "tuvo".',
            en: '"Tuvo" (with v) is the past tense of the verb "tener" (to have). "Tubo" (with b) is a noun that designates a hollow cylindrical piece. The sentence requires the verb "tener", therefore it\'s written "tuvo".',
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "ortografia-puntuacion",
      topicId: "ortografia",
      order: 3,
      title: {
        es: "Puntuación",
        en: "Punctuation",
      },
      description: {
        es: "Comas, puntos, dos puntos y más",
        en: "Commas, periods, colons and more",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_or_29",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál oración usa correctamente la coma?",
            en: "Which sentence correctly uses the comma?",
          },
          options: [
            {
              es: "María, compró frutas verduras y pan",
              en: "Maria, bought fruits vegetables and bread",
            },
            {
              es: "María compró frutas, verduras y pan",
              en: "Maria bought fruits, vegetables and bread",
            },
            {
              es: "María compró, frutas verduras y pan",
              en: "Maria bought, fruits vegetables and bread",
            },
            {
              es: "María compró frutas verduras, y pan",
              en: "Maria bought fruits vegetables, and bread",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: 'La coma se usa para separar elementos de una enumeración, excepto antes de la conjunción "y" que une los dos últimos. "María compró frutas, verduras y pan" es la puntuación correcta.',
            en: 'The comma is used to separate elements in an enumeration, except before the conjunction "and" that joins the last two. "Maria bought fruits, vegetables and bread" is the correct punctuation.',
          },
          difficulty: 2,
        },
        {
          id: "esp_or_30",
          type: "multiple-choice",
          prompt: {
            es: "¿En cuál oración se usan correctamente los dos puntos?",
            en: "In which sentence are colons correctly used?",
          },
          options: [
            {
              es: "Los colores primarios son: rojo, azul y amarillo",
              en: "The primary colors are: red, blue and yellow",
            },
            {
              es: "Los colores: primarios son rojo, azul y amarillo",
              en: "The colors: primary are red, blue and yellow",
            },
            {
              es: "Los colores primarios: son rojo, azul y amarillo",
              en: "The primary colors: are red, blue and yellow",
            },
            {
              es: "Los: colores primarios son rojo, azul y amarillo",
              en: "The: primary colors are red, blue and yellow",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: 'Los dos puntos se utilizan para introducir una enumeración cuando hay un elemento anticipador (como "son"). "Los colores primarios son: rojo, azul y amarillo" es el uso correcto.',
            en: 'Colons are used to introduce an enumeration when there is an anticipatory element (like "are"). "The primary colors are: red, blue and yellow" is the correct usage.',
          },
          difficulty: 2,
        },
        {
          id: "esp_or_32",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál oración usa correctamente los signos de puntuación?",
            en: "Which sentence correctly uses punctuation marks?",
          },
          options: [
            {
              es: "El profesor dijo: «Estudien para el examen».",
              en: "The teacher said: «Study for the exam».",
            },
            {
              es: "El profesor dijo «Estudien para el examen.»",
              en: "The teacher said «Study for the exam.»",
            },
            {
              es: "El profesor, dijo: «Estudien para el examen»",
              en: "The teacher, said: «Study for the exam»",
            },
            {
              es: "El profesor dijo, «Estudien para el examen».",
              en: "The teacher said, «Study for the exam».",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: 'Se usan dos puntos después del verbo de habla ("dijo:") para introducir la cita textual, que va entre comillas angulares (« »). El punto final va después de las comillas de cierre.',
            en: 'Colons are used after the verb of speech ("said:") to introduce the textual quote, which goes between angle quotes (« »). The final period goes after the closing quotes.',
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
