import type { Topic } from "@/lib/types";

export const comprensionLecturaTopic: Topic = {
  id: "comprension-lectura",
  slug: "comprension-lectura",
  title: {
    es: "Comprensión de Lectura",
    en: "Reading Comprehension",
  },
  description: {
    es: "Estructura, ideas principales, inferencias y punto de vista",
    en: "Structure, main ideas, inferences and point of view",
  },
  icon: "BookOpen",
  color: "teal",
  bgGradient: "bg-linear-to-br from-teal-500 to-cyan-600",
  prerequisites: ["formas-discurso"],
  order: 3,
  lessons: [
    {
      id: "comprension-estructura",
      topicId: "comprension-lectura",
      order: 1,
      title: {
        es: "Estructura del Texto",
        en: "Text Structure",
      },
      description: {
        es: "Identificar partes del texto",
        en: "Identify parts of the text",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "esp_cl_1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuáles son las partes generales de un texto expositivo?",
            en: "What are the general parts of an expository text?",
          },
          options: [
            { es: "Verso, estrofa y rima", en: "Verse, stanza and rhyme" },
            { es: "Introducción, desarrollo y conclusión", en: "Introduction, development and conclusion" },
            { es: "Acto, escena y cuadro", en: "Act, scene and tableau" },
            { es: "Planteamiento, nudo y desenlace", en: "Exposition, climax and resolution" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Un texto expositivo se estructura en: introducción (presenta el tema), desarrollo (expone la información detallada) y conclusión (sintetiza las ideas principales).",
            en: "An expository text is structured in: introduction (presents the topic), development (exposes detailed information) and conclusion (synthesizes the main ideas).",
          },
          difficulty: 1,
        },
        {
          id: "esp_cl_2",
          type: "multiple-choice",
          prompt: {
            es: 'Lee el siguiente texto:\n\n"La contaminación del agua es un problema grave. Los ríos reciben desechos industriales que dañan la flora y fauna acuática. Además, el uso excesivo de pesticidas filtra sustancias tóxicas al subsuelo. En conclusión, es urgente implementar políticas de protección hídrica."\n\n¿Cuál es la conclusión del texto?',
            en: 'Read the following text:\n\n"Water pollution is a serious problem. Rivers receive industrial waste that damages aquatic flora and fauna. Additionally, excessive use of pesticides filters toxic substances into the subsoil. In conclusion, it is urgent to implement water protection policies."\n\nWhat is the conclusion of the text?',
          },
          options: [
            { es: "La contaminación del agua es un problema grave", en: "Water pollution is a serious problem" },
            { es: "Los ríos reciben desechos industriales", en: "Rivers receive industrial waste" },
            { es: "El uso excesivo de pesticidas filtra sustancias tóxicas", en: "Excessive use of pesticides filters toxic substances" },
            { es: "Es urgente implementar políticas de protección hídrica", en: "It is urgent to implement water protection policies" },
          ],
          correctAnswer: "3",
          explanation: {
            es: 'La conclusión aparece al final del texto, señalada por el conector "En conclusión", y sintetiza la idea rectora: la urgencia de proteger el agua.',
            en: 'The conclusion appears at the end of the text, marked by the connector "In conclusion", and synthesizes the guiding idea: the urgency of protecting water.',
          },
          difficulty: 2,
        },
        {
          id: "esp_cl_3",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué función cumple el párrafo de introducción en un texto?",
            en: "What function does the introductory paragraph serve in a text?",
          },
          options: [
            { es: "Resumir todos los argumentos presentados", en: "Summarize all arguments presented" },
            { es: "Presentar el tema y captar la atención del lector", en: "Present the topic and capture the reader's attention" },
            { es: "Dar ejemplos detallados del tema", en: "Give detailed examples of the topic" },
            { es: "Refutar las ideas contrarias", en: "Refute opposing ideas" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El párrafo de introducción tiene la función de presentar el tema central del texto, contextualizar al lector y captar su interés para que continúe la lectura.",
            en: "The introductory paragraph has the function of presenting the central topic of the text, contextualizing the reader and capturing their interest to continue reading.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "comprension-ideas",
      topicId: "comprension-lectura",
      order: 2,
      title: {
        es: "Ideas Principales y Secundarias",
        en: "Main and Secondary Ideas",
      },
      description: {
        es: "Distinguir entre ideas centrales y de apoyo",
        en: "Distinguish between central and supporting ideas",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "esp_cl_4",
          type: "multiple-choice",
          prompt: {
            es: 'Lee el siguiente texto:\n\n"El ejercicio regular mejora la salud cardiovascular. Estudios demuestran que 30 minutos diarios de actividad física reducen el riesgo de enfermedades del corazón. Caminar, nadar o andar en bicicleta son opciones accesibles para cualquier persona."\n\n¿Cuál es la idea principal?',
            en: 'Read the following text:\n\n"Regular exercise improves cardiovascular health. Studies show that 30 minutes daily of physical activity reduces the risk of heart disease. Walking, swimming or cycling are accessible options for anyone."\n\nWhat is the main idea?',
          },
          options: [
            { es: "Caminar es una opción accesible", en: "Walking is an accessible option" },
            { es: "El ejercicio regular mejora la salud cardiovascular", en: "Regular exercise improves cardiovascular health" },
            { es: "Los estudios demuestran que 30 minutos son suficientes", en: "Studies show that 30 minutes are enough" },
            { es: "Nadar y andar en bicicleta son opciones válidas", en: "Swimming and cycling are valid options" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La idea principal es la que contiene el mensaje central del texto: \"El ejercicio regular mejora la salud cardiovascular\". Las demás oraciones son ideas secundarias que la complementan con datos y ejemplos.",
            en: "The main idea is the one that contains the central message of the text: \"Regular exercise improves cardiovascular health\". The other sentences are secondary ideas that complement it with data and examples.",
          },
          difficulty: 2,
        },
        {
          id: "esp_cl_5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la función de las ideas secundarias en un texto?",
            en: "What is the function of secondary ideas in a text?",
          },
          options: [
            { es: "Contradecir la idea principal", en: "Contradict the main idea" },
            { es: "Ampliar, ejemplificar o apoyar la idea principal", en: "Expand, exemplify or support the main idea" },
            { es: "Sustituir la idea principal", en: "Replace the main idea" },
            { es: "Presentar un tema diferente al del texto", en: "Present a different topic from the text" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Las ideas secundarias complementan la idea principal: la amplían con más información, la ejemplifican con casos concretos, la explican o la respaldan con datos y evidencias.",
            en: "Secondary ideas complement the main idea: they expand it with more information, exemplify it with specific cases, explain it or support it with data and evidence.",
          },
          difficulty: 1,
        },
        {
          id: "esp_cl_6",
          type: "multiple-choice",
          prompt: {
            es: 'Lee el siguiente texto:\n\n"Las abejas son fundamentales para la agricultura. Polinizan el 75% de los cultivos alimentarios del mundo. Sin su labor, alimentos como manzanas, fresas y almendras desaparecerían de nuestra dieta. Sin embargo, su población ha disminuido drásticamente debido al uso de pesticidas."\n\n¿Cuál es una idea secundaria?',
            en: 'Read the following text:\n\n"Bees are fundamental to agriculture. They pollinate 75% of the world\'s food crops. Without their work, foods like apples, strawberries and almonds would disappear from our diet. However, their population has decreased drastically due to pesticide use."\n\nWhich is a secondary idea?',
          },
          options: [
            { es: "Las abejas son fundamentales para la agricultura", en: "Bees are fundamental to agriculture" },
            { es: "Polinizan el 75% de los cultivos alimentarios del mundo", en: "They pollinate 75% of the world's food crops" },
            { es: "Su población ha disminuido drásticamente", en: "Their population has decreased drastically" },
            { es: "Todas son ideas principales", en: "All are main ideas" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La idea principal es que las abejas son fundamentales para la agricultura. El dato de que polinizan el 75% de los cultivos es una idea secundaria que respalda y amplía la idea principal con una cifra concreta.",
            en: "The main idea is that bees are fundamental to agriculture. The fact that they pollinate 75% of crops is a secondary idea that supports and expands the main idea with a concrete figure.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "comprension-inferencias",
      topicId: "comprension-lectura",
      order: 3,
      title: {
        es: "Inferencias",
        en: "Inferences",
      },
      description: {
        es: "Deducir información no explícita",
        en: "Deduce non-explicit information",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "esp_cl_9",
          type: "multiple-choice",
          prompt: {
            es: 'Lee el siguiente texto:\n\n"Cuando María llegó a la oficina, las luces estaban apagadas, las computadoras parecían no haberse encendido y su café seguía frío sobre el escritorio. Miró el reloj: eran las 6:15 a.m."\n\n¿Qué se puede inferir?',
            en: 'Read the following text:\n\n"When Maria arrived at the office, the lights were off, the computers seemed not to have been turned on and her coffee was still cold on the desk. She looked at the clock: it was 6:15 a.m."\n\nWhat can be inferred?',
          },
          options: [
            { es: "María llegó tarde a trabajar", en: "Maria arrived late to work" },
            { es: "Hubo un apagón en la oficina", en: "There was a power outage in the office" },
            { es: "María llegó antes que sus compañeros", en: "Maria arrived before her colleagues" },
            { es: "María olvidó encender las luces", en: "Maria forgot to turn on the lights" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Se puede inferir que María llegó antes que sus compañeros porque todo está apagado y sin usar, y la hora muy temprana (6:15 a.m.) sugiere que aún no ha llegado nadie más.",
            en: "It can be inferred that Maria arrived before her colleagues because everything is off and unused, and the very early hour (6:15 a.m.) suggests that no one else has arrived yet.",
          },
          difficulty: 2,
        },
        {
          id: "esp_cl_10",
          type: "multiple-choice",
          prompt: {
            es: '"La producción de maíz cayó un 40% respecto al año anterior. Los agricultores reportaron lluvias insuficientes durante todo el ciclo productivo."\n\n¿Qué se puede inferir de estos datos?',
            en: '"Corn production fell 40% compared to the previous year. Farmers reported insufficient rainfall throughout the production cycle."\n\nWhat can be inferred from this data?',
          },
          options: [
            { es: "El precio del maíz bajará", en: "The price of corn will decrease" },
            { es: "La sequía fue una causa probable de la baja producción", en: "Drought was a probable cause of low production" },
            { es: "Los agricultores no sembraron suficiente", en: "Farmers didn't plant enough" },
            { es: "El maíz ya no se cultiva en esa región", en: "Corn is no longer grown in that region" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Al relacionar la caída en producción con las \"lluvias insuficientes\", se infiere que la falta de agua (sequía) fue una causa probable de la disminución en la producción de maíz.",
            en: "By relating the drop in production to \"insufficient rainfall\", it can be inferred that lack of water (drought) was a probable cause of the decrease in corn production.",
          },
          difficulty: 2,
        },
        {
          id: "esp_cl_11",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué significa inferir en el contexto de la comprensión lectora?",
            en: "What does it mean to infer in the context of reading comprehension?",
          },
          options: [
            { es: "Copiar textualmente lo que dice el autor", en: "Copy verbatim what the author says" },
            { es: "Deducir información que no está explícita a partir de los datos del texto", en: "Deduce information that is not explicit from the data in the text" },
            { es: "Inventar datos que no están en el texto", en: "Invent data that is not in the text" },
            { es: "Resumir el texto en pocas palabras", en: "Summarize the text in a few words" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Inferir significa deducir o concluir información que no está expresada directamente en el texto, pero que se puede derivar lógicamente de los datos, pistas y relaciones que sí aparecen en él.",
            en: "To infer means to deduce or conclude information that is not directly expressed in the text, but that can be logically derived from the data, clues and relationships that do appear in it.",
          },
          difficulty: 1,
        },
        {
          id: "esp_cl_12",
          type: "multiple-choice",
          prompt: {
            es: 'Lee el siguiente fragmento:\n\n"Pedro apretaba los puños mientras miraba cómo su hermano recibía el reconocimiento. Cuando todos aplaudieron, él salió del salón sin decir una palabra y cerró la puerta con fuerza."\n\n¿Qué sentimiento se puede inferir en Pedro?',
            en: 'Read the following fragment:\n\n"Pedro clenched his fists while watching his brother receive the recognition. When everyone applauded, he left the room without saying a word and slammed the door."\n\nWhat feeling can be inferred in Pedro?',
          },
          options: [
            { es: "Alegría y orgullo por su hermano", en: "Joy and pride for his brother" },
            { es: "Envidia o resentimiento", en: "Envy or resentment" },
            { es: "Indiferencia total", en: "Total indifference" },
            { es: "Miedo y preocupación", en: "Fear and concern" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Los indicios de \"apretaba los puños\", salir sin decir nada y cerrar la puerta con fuerza sugieren enojo, envidia o resentimiento hacia el reconocimiento de su hermano.",
            en: "The clues of \"clenched his fists\", leaving without saying anything and slamming the door suggest anger, envy or resentment towards his brother's recognition.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "comprension-punto-vista",
      topicId: "comprension-lectura",
      order: 4,
      title: {
        es: "Punto de Vista del Autor",
        en: "Author's Point of View",
      },
      description: {
        es: "Identificar la postura del autor",
        en: "Identify the author's position",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "esp_cl_15",
          type: "multiple-choice",
          prompt: {
            es: 'Lee el siguiente texto:\n\n"Las redes sociales, lejos de acercarnos, nos han aislado más que nunca. Pasamos horas frente a una pantalla mientras ignoramos a quienes están a nuestro alrededor. Es hora de reconsiderar nuestra relación con la tecnología."\n\n¿Cuál es el punto de vista del autor?',
            en: 'Read the following text:\n\n"Social networks, far from bringing us closer, have isolated us more than ever. We spend hours in front of a screen while ignoring those around us. It\'s time to reconsider our relationship with technology."\n\nWhat is the author\'s point of view?',
          },
          options: [
            { es: "Las redes sociales son completamente positivas", en: "Social networks are completely positive" },
            { es: "Las redes sociales nos están aislando y debemos reconsiderar su uso", en: "Social networks are isolating us and we must reconsider their use" },
            { es: "La tecnología no tiene ningún efecto en nuestras relaciones", en: "Technology has no effect on our relationships" },
            { es: "Debemos usar más las redes sociales", en: "We should use social networks more" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El autor presenta una postura crítica: considera que las redes sociales nos aíslan (\"lejos de acercarnos\") y propone que reconsideremos nuestra relación con la tecnología.",
            en: "The author presents a critical stance: considers that social networks isolate us (\"far from bringing us closer\") and proposes that we reconsider our relationship with technology.",
          },
          difficulty: 2,
        },
        {
          id: "esp_cl_16",
          type: "multiple-choice",
          prompt: {
            es: "¿Cómo se identifica el punto de vista del autor en un texto?",
            en: "How is the author's point of view identified in a text?",
          },
          options: [
            { es: "Se busca únicamente en el título del texto", en: "It is sought only in the title of the text" },
            { es: "Se identifica a través de las opiniones, valoraciones y la postura que sostiene sobre el tema", en: "It is identified through the opinions, evaluations and the position held on the topic" },
            { es: "Solo aparece en la última línea del texto", en: "It only appears in the last line of the text" },
            { es: "Siempre se expresa de forma directa con la frase \"yo opino que\"", en: "It is always expressed directly with the phrase \"I think that\"" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El punto de vista del autor se identifica a través del análisis de sus opiniones, los adjetivos valorativos que usa, su tono, las ideas que enfatiza y la postura general que adopta ante el tema.",
            en: "The author's point of view is identified through analysis of their opinions, the evaluative adjectives they use, their tone, the ideas they emphasize and the general stance they adopt on the topic.",
          },
          difficulty: 2,
        },
        {
          id: "esp_cl_17",
          type: "multiple-choice",
          prompt: {
            es: '"La inversión en energías renovables no es un gasto, sino una necesidad imperante. Los países que no actúen ahora enfrentarán consecuencias ambientales irreversibles."\n\n¿Cuál es la postura del autor?',
            en: '"Investment in renewable energy is not an expense, but an imperative necessity. Countries that do not act now will face irreversible environmental consequences."\n\nWhat is the author\'s position?',
          },
          options: [
            { es: "Está en contra de las energías renovables", en: "Is against renewable energy" },
            { es: "Considera que la inversión en energías renovables es urgente e indispensable", en: "Considers that investment in renewable energy is urgent and indispensable" },
            { es: "Piensa que las consecuencias ambientales son exageradas", en: "Thinks environmental consequences are exaggerated" },
            { es: "Es neutral respecto al tema energético", en: "Is neutral regarding the energy issue" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El autor usa expresiones como \"necesidad imperante\" y \"consecuencias irreversibles\" para manifestar que la inversión en energías renovables es urgente e indispensable.",
            en: "The author uses expressions like \"imperative necessity\" and \"irreversible consequences\" to express that investment in renewable energy is urgent and indispensable.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
