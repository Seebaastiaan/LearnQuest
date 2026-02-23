import type { Topic } from "@/lib/types/topic";

export const laHistoriaTopic: Topic = {
  id: "la-historia",
  subjectId: "historia-universal",
  title: {
    es: "La Historia y sus Ciencias Auxiliares",
    en: "History and Its Auxiliary Sciences",
  },
  description: {
    es: "Concepto de historia, periodización, fuentes y ciencias que apoyan su estudio.",
    en: "Concept of history, periodization, sources, and supporting sciences.",
  },
  order: 1,
  color: "amber",
  icon: "BookOpen",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  lessons: [
    {
      id: "la-historia-l1",
      topicId: "la-historia",
      title: { es: "¿Qué es la Historia?", en: "What is History?" },
      type: "learn",
      order: 1,
      content: {
        es: "La historia es la ciencia que estudia el pasado humano a partir de fuentes y evidencias. Se divide en Prehistoria e Historia (con escritura desde ~3500 a.C.). Sus ciencias auxiliares incluyen: arqueología, paleografía, numismática, cronología y diplomática. La periodización occidental divide el tiempo en: Edad Antigua (hasta 476 d.C.), Edad Media (476-1453), Edad Moderna (1453-1789) y Edad Contemporánea (1789-presente).",
        en: "History is the science that studies the human past using sources and evidence.",
      },
      questions: [
        {
          id: "hu_lh_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el criterio principal que marca el inicio de la Historia como periodo (frente a la Prehistoria)?",
            en: "What is the main criterion marking the start of History as a period (vs. Prehistory)?",
          },
          options: [
              { es: "La aparición de la escritura (~3500 a.C.)", en: "The appearance of writing (~3500 BC)" },
              { es: "El descubrimiento del fuego", en: "The discovery of fire" },
              { es: "La aparición del Homo sapiens", en: "The appearance of Homo sapiens" },
              { es: "La construcción de pirámides", en: "The construction of pyramids" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Prehistoria termina y la Historia comienza con la invención de la escritura (~3500 a.C. en Mesopotamia), pues a partir de entonces existe registro escrito.",
            en: "Prehistory ends and History begins with the invention of writing (~3500 BC in Mesopotamia).",
          },
        },
        {
          id: "hu_lh_l1_q2",
          type: "multiple-choice",
          prompt: {
            es: "La ciencia auxiliar de la Historia que estudia los documentos escritos antiguos y su escritura se denomina:",
            en: "The auxiliary science of History that studies ancient written documents is called:",
          },
          options: [
              { es: "Numismática", en: "Numismatics" },
              { es: "Paleografía", en: "Paleography" },
              { es: "Arqueología", en: "Archaeology" },
              { es: "Cronología", en: "Chronology" },
            ],
          correctAnswer: "1",
          explanation: {
            es: "La Paleografía estudia las escrituras antiguas y los documentos manuscritos para interpretar su contenido.",
            en: "Paleography studies ancient writings and manuscripts to interpret their content.",
          },
        },
        {
          id: "hu_lh_l1_q3",
          type: "true-false",
          prompt: {
            es: "La Edad Media inicia con la caída del Imperio Romano de Occidente en el año 476 d.C.",
            en: "The Middle Ages begin with the fall of the Western Roman Empire in 476 AD.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La caída de Roma en 476 d.C. marca convencionalmente el inicio de la Edad Media y el fin de la Edad Antigua.",
            en: "Correct. The fall of Rome in 476 AD conventionally marks the start of the Middle Ages.",
          },
        },
        {
          id: "hu_lh_l1_q4",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué evento marca el inicio de la Edad Contemporánea según la periodización occidental?",
            en: "What event marks the beginning of the Contemporary Age in Western periodization?",
          },
          options: [
              { es: "La Revolución Francesa de 1789", en: "The French Revolution of 1789" },
              { es: "La caída de Constantinopla en 1453", en: "The fall of Constantinople in 1453" },
              { es: "La Revolución Industrial de 1760", en: "The Industrial Revolution of 1760" },
              { es: "El descubrimiento de América en 1492", en: "The discovery of America in 1492" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Revolución Francesa (1789) es el hito que marca el inicio de la Edad Contemporánea, caracterizada por el surgimiento de los Estados-nación modernos.",
            en: "The French Revolution (1789) marks the start of the Contemporary Age.",
          },
        },
        {
          id: "hu_lh_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de estas NO es una ciencia auxiliar de la Historia?",
            en: "Which of these is NOT an auxiliary science of History?",
          },
          options: [
              { es: "Arqueología", en: "Archaeology" },
              { es: "Numismática", en: "Numismatics" },
              { es: "Meteorología", en: "Meteorology" },
              { es: "Diplomática", en: "Diplomatics" },
            ],
          correctAnswer: "2",
          explanation: {
            es: "La Meteorología estudia el clima y los fenómenos atmosféricos; no es una ciencia auxiliar de la Historia. La arqueología, numismática y diplomática sí lo son.",
            en: "Meteorology studies climate and atmospheric phenomena; it is not an auxiliary science of History.",
          },
        },
        {
          id: "hu_lh_l1_q6",
          type: "fill-blank",
          prompt: {
            es: "Las fuentes históricas que fueron creadas en el momento en que ocurrieron los hechos se denominan fuentes ___.",
            en: "Historical sources created at the time events occurred are called ___ sources.",
          },
          correctAnswer: "primarias",
          explanation: {
            es: "Las fuentes primarias son documentos, objetos o testimonios directos del periodo estudiado (crónicas, actas, monedas). Las fuentes secundarias son análisis posteriores.",
            en: "Primary sources are direct documents or testimonies from the period studied.",
          },
        },
        {
          id: "hu_lh_l1_q7",
          type: "order-steps",
          prompt: {
            es: "Ordena cronológicamente las edades históricas de la periodización occidental (de más antigua a más reciente):",
            en: "Order the historical ages chronologically (oldest to most recent):",
          },
          options: [
              { es: "Edad Antigua (hasta 476 d.C.)", en: "Ancient Age (to 476 AD)" },
              { es: "Prehistoria (hasta ~3500 a.C.)", en: "Prehistory (to ~3500 BC)" },
              { es: "Edad Contemporánea (1789-presente)", en: "Contemporary Age (1789-present)" },
              { es: "Edad Media (476-1453)", en: "Middle Ages (476-1453)" },
              { es: "Edad Moderna (1453-1789)", en: "Modern Age (1453-1789)" },
            ],
          correctAnswer: ["1", "0", "3", "4", "2"],
          explanation: {
            es: "El orden correcto es: Prehistoria → Edad Antigua → Edad Media → Edad Moderna → Edad Contemporánea.",
            en: "The correct order is: Prehistory → Ancient Age → Middle Ages → Modern Age → Contemporary Age.",
          },
        },
        {
          id: "hu_lh_l1_q8",
          type: "multiple-choice",
          prompt: {
            es: "La numismática, ciencia auxiliar de la Historia, se dedica al estudio de:",
            en: "Numismatics, an auxiliary science of History, is dedicated to the study of:",
          },
          options: [
              { es: "Monedas y medallas", en: "Coins and medals" },
              { es: "Documentos oficiales", en: "Official documents" },
              { es: "Restos arqueológicos", en: "Archaeological remains" },
              { es: "Mapas antiguos", en: "Ancient maps" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La numismática estudia las monedas, billetes y medallas como fuentes históricas para conocer economía, gobernantes y periodos.",
            en: "Numismatics studies coins, banknotes and medals as historical sources.",
          },
        },
      ],
    },
    {
      id: "la-historia-l2",
      topicId: "la-historia",
      title: {
        es: "Fuentes y Métodos Históricos",
        en: "Historical Sources and Methods",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_lh_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "Un ejemplo de fuente primaria para estudiar la Revolución Francesa sería:",
            en: "An example of a primary source for studying the French Revolution would be:",
          },
          options: [
              { es: "Los Cuadernos de Quejas (Cahiers de Doléances) de 1789", en: "The Cahiers de Doléances of 1789" },
              { es: "Un libro de texto moderno sobre la Revolución", en: "A modern textbook about the Revolution" },
              { es: "Un documental televisivo del siglo XX", en: "A 20th-century TV documentary" },
              { es: "Una novela histórica del siglo XXI", en: "A 21st-century historical novel" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los Cahiers de Doléances (1789) fueron redactados durante la Revolución Francesa, por lo que son una fuente primaria directa del evento.",
            en: "The Cahiers de Doléances (1789) were written during the French Revolution, making them a direct primary source.",
          },
        },
        {
          id: "hu_lh_l2_q2",
          type: "true-false",
          prompt: {
            es: "La historia oral (testimonios de personas que vivieron un hecho) se considera una fuente secundaria.",
            en: "Oral history (testimonies from people who lived through an event) is considered a secondary source.",
          },
          correctAnswer: "false",
          explanation: {
            es: "Los testimonios orales de testigos directos son fuentes primarias, ya que provienen de quienes vivieron el hecho. Las fuentes secundarias son interpretaciones o análisis posteriores.",
            en: "Oral testimonies from direct witnesses are primary sources, as they come from those who experienced the event.",
          },
        },
        {
          id: "hu_lh_l2_q3",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes es el método correcto del historiador para obtener conocimiento confiable?",
            en: "Which of the following is the correct historian's method for obtaining reliable knowledge?",
          },
          options: [
              { es: "Recopilar fuentes → Criticarlas → Interpretarlas → Sintetizarlas", en: "Collect sources → Critique them → Interpret them → Synthesize" },
              { es: "Formular hipótesis → Ignorar fuentes contrarias → Publicar", en: "Formulate hypotheses → Ignore contrary sources → Publish" },
              { es: "Copiar solo fuentes secundarias → Aceptarlas sin crítica", en: "Copy only secondary sources → Accept without critique" },
              { es: "Basarse únicamente en la tradición oral", en: "Rely solely on oral tradition" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El método histórico requiere: recopilación de fuentes, crítica interna y externa, interpretación contextual y síntesis para producir conocimiento histórico confiable.",
            en: "The historical method requires: collection of sources, internal and external critique, contextual interpretation and synthesis.",
          },
        },
        {
          id: "hu_lh_l2_q4",
          type: "multiple-choice",
          prompt: {
            es: "¿A qué edad histórica pertenece el Imperio Romano clásico (siglos I-II d.C.)?",
            en: "To which historical age does the classical Roman Empire (1st-2nd centuries AD) belong?",
          },
          options: [
              { es: "Edad Antigua", en: "Ancient Age" },
              { es: "Prehistoria", en: "Prehistory" },
              { es: "Edad Media", en: "Middle Ages" },
              { es: "Edad Moderna", en: "Modern Age" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Imperio Romano clásico (siglos I-II d.C.) pertenece a la Edad Antigua, que cubre desde la escritura hasta 476 d.C.",
            en: "The classical Roman Empire (1st-2nd centuries AD) belongs to the Ancient Age, covering from writing to 476 AD.",
          },
        },
        {
          id: "hu_lh_l2_q5",
          type: "fill-blank",
          prompt: {
            es: "La ciencia auxiliar que estudia los documentos oficiales expedidos por las cancillerías medievales (diplomas, bulas, privilegios) se denomina ___.",
            en: "The auxiliary science that studies official documents issued by medieval chancelleries is called ___.",
          },
          correctAnswer: "diplomática",
          explanation: {
            es: "La Diplomática es la ciencia que analiza los documentos oficiales medievales (diplomas reales, bulas papales, privilegios) para verificar su autenticidad.",
            en: "Diplomatics is the science that analyzes official medieval documents to verify their authenticity.",
          },
        },
        {
          id: "hu_lh_l2_q6",
          type: "true-false",
          prompt: {
            es: "La toma de Constantinopla por los turcos otomanos en 1453 marca el fin de la Edad Media e inicio de la Edad Moderna.",
            en: "The Ottoman Turks' capture of Constantinople in 1453 marks the end of the Middle Ages and beginning of the Modern Age.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La caída de Constantinopla en 1453 es uno de los eventos que marca convencionalmente el fin de la Edad Media y el inicio de la Edad Moderna.",
            en: "Correct. The fall of Constantinople in 1453 conventionally marks the end of the Middle Ages.",
          },
        },
        {
          id: "hu_lh_l2_q7",
          type: "multiple-choice",
          prompt: {
            es: "Un historiador encuentra un vaso griego con imágenes de batallas. ¿Qué ciencia auxiliar le ayudaría principalmente a analizarlo?",
            en: "A historian finds a Greek vase with battle images. What auxiliary science would mainly help analyze it?",
          },
          options: [
              { es: "Arqueología", en: "Archaeology" },
              { es: "Numismática", en: "Numismatics" },
              { es: "Genealogía", en: "Genealogy" },
              { es: "Hemerografía", en: "Hemerography" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Arqueología estudia los objetos materiales del pasado, como vasijas, herramientas y estructuras, por lo que sería la ciencia principal para analizar un vaso griego.",
            en: "Archaeology studies material objects from the past, such as vessels, tools and structures.",
          },
        },
        {
          id: "hu_lh_l2_q8",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de estos conceptos se refiere a la idea de que los hechos históricos ocurren en un contexto de tiempo y lugar específicos que los historiadores deben considerar?",
            en: "Which concept refers to the idea that historical events occur in a specific time and place context that historians must consider?",
          },
          options: [
              { es: "Contextualización histórica", en: "Historical contextualization" },
              { es: "Determinismo histórico", en: "Historical determinism" },
              { es: "Relativismo moral", en: "Moral relativism" },
              { es: "Anacronismo", en: "Anachronism" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La contextualización histórica es el principio de que los hechos deben analizarse dentro de su propio tiempo, lugar y circunstancias, evitando el anacronismo.",
            en: "Historical contextualization is the principle that events must be analyzed within their own time, place and circumstances.",
          },
        },
      ],
    },
    {
      id: "la-historia-l3",
      topicId: "la-historia",
      title: {
        es: "Periodización y Narrativa Histórica",
        en: "Periodization and Historical Narrative",
      },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_lh_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "En el EXANI-II de la UNAM, el término 'anacronismo' se refiere a:",
            en: "In the UNAM EXANI-II, the term 'anachronism' refers to:",
          },
          options: [
              { es: "Atribuir ideas, objetos o costumbres de una época a otro tiempo donde no existían", en: "Attributing ideas, objects or customs of one era to another time where they didn't exist" },
              { es: "El estudio de documentos muy antiguos", en: "The study of very ancient documents" },
              { es: "La división del tiempo histórico en periodos", en: "The division of historical time into periods" },
              { es: "Una fuente histórica no verificada", en: "An unverified historical source" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El anacronismo es el error de atribuir a una época elementos (ideas, objetos, tecnología) propios de otra época diferente.",
            en: "Anachronism is the error of attributing to an era elements (ideas, objects, technology) belonging to a different era.",
          },
        },
        {
          id: "hu_lh_l3_q2",
          type: "true-false",
          prompt: {
            es: "La historia es una ciencia exclusivamente objetiva que no puede contener interpretaciones subjetivas.",
            en: "History is an exclusively objective science that cannot contain subjective interpretations.",
          },
          correctAnswer: "false",
          explanation: {
            es: "Falso. La historia combina rigor científico con interpretación; el historiador selecciona, interpreta y narra los hechos, lo que implica inevitablemente cierta subjetividad.",
            en: "False. History combines scientific rigor with interpretation; the historian selects, interprets and narrates facts, which inevitably implies some subjectivity.",
          },
        },
        {
          id: "hu_lh_l3_q3",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de los siguientes corresponde a la Edad Moderna?",
            en: "Which of the following corresponds to the Modern Age?",
          },
          options: [
              { es: "La Reforma Protestante de 1517", en: "The Protestant Reformation of 1517" },
              { es: "La caída de Roma en 476 d.C.", en: "The fall of Rome in 476 AD" },
              { es: "La Revolución Francesa de 1789", en: "The French Revolution of 1789" },
              { es: "La Primera Guerra Mundial de 1914", en: "World War I in 1914" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Reforma Protestante (1517) ocurre dentro de la Edad Moderna (1453-1789). La caída de Roma pertenece a la Antigua, la Rev. Francesa inicia la Contemporánea, y la IGM es Contemporánea.",
            en: "The Protestant Reformation (1517) occurs within the Modern Age (1453-1789).",
          },
        },
        {
          id: "hu_lh_l3_q4",
          type: "order-steps",
          prompt: {
            es: "Ordena estos pasos del método histórico en el orden correcto:",
            en: "Order these steps of the historical method in the correct order:",
          },
          options: [
              { es: "Síntesis e interpretación", en: "Synthesis and interpretation" },
              { es: "Heurística: búsqueda y recopilación de fuentes", en: "Heuristics: searching and collecting sources" },
              { es: "Hermenéutica: interpretación del significado", en: "Hermeneutics: interpretation of meaning" },
              { es: "Crítica de las fuentes (interna y externa)", en: "Source criticism (internal and external)" },
            ],
          correctAnswer: ["1", "3", "2", "0"],
          explanation: {
            es: "El método histórico sigue: Heurística (buscar fuentes) → Crítica → Hermenéutica → Síntesis.",
            en: "The historical method follows: Heuristics → Critique → Hermeneutics → Synthesis.",
          },
        },
        {
          id: "hu_lh_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál historiador griego clásico es considerado el 'padre de la Historia'?",
            en: "Which classical Greek historian is considered the 'father of History'?",
          },
          options: [
              { es: "Heródoto", en: "Herodotus" },
              { es: "Tucídides", en: "Thucydides" },
              { es: "Polibio", en: "Polybius" },
              { es: "Plutarco", en: "Plutarch" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Heródoto de Halicarnaso (siglo V a.C.) es llamado el 'padre de la Historia' por su obra 'Historias' sobre las Guerras Médicas entre griegos y persas.",
            en: "Herodotus of Halicarnassus (5th century BC) is called the 'father of History' for his work 'Histories' about the Persian Wars.",
          },
        },
        {
          id: "hu_lh_l3_q6",
          type: "fill-blank",
          prompt: {
            es: "La periodización histórica que divide el tiempo en Edad Antigua, Media, Moderna y Contemporánea es de origen ___.",
            en: "The historical periodization dividing time into Ancient, Medieval, Modern and Contemporary Ages is of ___ origin.",
          },
          correctAnswer: "occidental",
          explanation: {
            es: "Esta periodización es de origen occidental (europeo). Otras culturas usan sistemas de periodización distintos basados en sus propias historias y dinásticas.",
            en: "This periodization is of Western (European) origin. Other cultures use different periodization systems based on their own histories.",
          },
        },
        {
          id: "hu_lh_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué distingue a una fuente histórica 'material' de una fuente 'escrita'?",
            en: "What distinguishes a 'material' historical source from a 'written' one?",
          },
          options: [
              { es: "Las fuentes materiales son objetos físicos (edificios, monedas, armas), mientras las escritas son documentos con texto", en: "Material sources are physical objects (buildings, coins, weapons), while written ones are text documents" },
              { es: "Las fuentes materiales son solo de la Prehistoria", en: "Material sources are only from Prehistory" },
              { es: "Las fuentes materiales son más confiables que las escritas", en: "Material sources are more reliable than written ones" },
              { es: "No existe diferencia real entre ellas", en: "There is no real difference between them" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Las fuentes materiales incluyen objetos físicos (arquitectura, herramientas, monedas), mientras las fuentes escritas incluyen documentos, crónicas, leyes, cartas.",
            en: "Material sources include physical objects (architecture, tools, coins), while written sources include documents, chronicles, laws, letters.",
          },
        },
        {
          id: "hu_lh_l3_q8",
          type: "true-false",
          prompt: {
            es: "La proclamación de la República de México en 1867 pertenece a la Edad Contemporánea.",
            en: "The proclamation of the Mexican Republic in 1867 belongs to the Contemporary Age.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. 1867 está dentro de la Edad Contemporánea (1789-presente). La Restauración de la República en México ocurrió tras el Segundo Imperio Mexicano.",
            en: "Correct. 1867 is within the Contemporary Age (1789-present).",
          },
        },
      ],
    },
  ],
};
