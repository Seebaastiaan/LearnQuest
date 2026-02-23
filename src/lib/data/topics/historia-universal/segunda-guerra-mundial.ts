import type { Topic } from "@/lib/types/topic";

export const segundaGuerraMundialTopic: Topic = {
  id: "segunda-guerra-mundial",
  subjectId: "historia-universal",
  title: {
    es: "La Segunda Guerra Mundial (1939-1945)",
    en: "World War II (1939-1945)",
  },
  description: {
    es: "La guerra más devastadora de la historia: el Holocausto, el Día D y la era nuclear.",
    en: "The most devastating war in history: the Holocaust, D-Day and the nuclear age.",
  },
  order: 7,
  color: "amber",
  icon: "Bomb",
  bgGradient: "bg-linear-to-br from-red-700 to-orange-900",
  lessons: [
    {
      id: "segunda-gm-l1",
      topicId: "segunda-guerra-mundial",
      title: {
        es: "El Inicio y el Desarrollo de la Guerra",
        en: "The Start and Development of the War",
      },
      type: "learn",
      order: 1,
      content: {
        es: "La Segunda Guerra Mundial inició el 1 de septiembre de 1939 con la invasión alemana de Polonia. Alemania usó la Blitzkrieg (guerra relámpago). En junio de 1941, Hitler invadió la URSS (Operación Barbarroja). El Día D (6 junio 1944) fue el desembarco aliado en Normandía. El Holocausto costó la vida a ~6 millones de judíos y 5 millones de otras víctimas.",
        en: "World War II began on September 1, 1939 with the German invasion of Poland. Germany used Blitzkrieg.",
      },
      questions: [
        {
          id: "hu_sgm_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuándo inició oficialmente la Segunda Guerra Mundial y quién la desencadenó?",
            en: "When did World War II officially start and who triggered it?",
          },
          options: [
              { es: "1 de septiembre de 1939 — Alemania invadió Polonia", en: "September 1, 1939 — Germany invaded Poland" },
              { es: "3 de septiembre de 1939 — Gran Bretaña declaró guerra a Alemania", en: "September 3, 1939 — Britain declared war on Germany" },
              { es: "7 de diciembre de 1941 — Japón atacó Pearl Harbor", en: "December 7, 1941 — Japan attacked Pearl Harbor" },
              { es: "10 de mayo de 1940 — Alemania invadió Francia", en: "May 10, 1940 — Germany invaded France" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Segunda Guerra Mundial inició el 1 de septiembre de 1939 con la invasión alemana de Polonia mediante la Blitzkrieg. El 3 de septiembre, Gran Bretaña y Francia declararon la guerra a Alemania.",
            en: "World War II began on September 1, 1939 with the German Blitzkrieg invasion of Poland. On September 3, Britain and France declared war on Germany.",
          },
        },
        {
          id: "hu_sgm_l1_q2",
          type: "multiple-choice",
          prompt: {
            es: "La 'Batalla de Stalingrado' (1942-1943) fue decisiva porque:",
            en: "The 'Battle of Stalingrad' (1942-1943) was decisive because:",
          },
          options: [
              { es: "La rendición del 6° Ejército alemán marcó el punto de inflexión y el inicio del retroceso Nazi en el Frente Oriental", en: "The surrender of the 6th German Army marked the turning point and the start of the Nazi retreat on the Eastern Front" },
              { es: "Alemania capturó la ciudad clave del petróleo soviético", en: "Germany captured the key Soviet oil city" },
              { es: "Stalin rindió la ciudad y negoció la paz", en: "Stalin surrendered the city and negotiated peace" },
              { es: "EUA entró a la guerra por esta batalla", en: "The USA entered the war due to this battle" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Stalingrado (ago 1942-feb 1943) fue la mayor batalla de la historia: ~2 millones de bajas. La rendición del Mariscal Paulus y el 6° Ejército alemán (feb 1943) marcó el inicio del fin del nazismo en el Frente Oriental.",
            en: "Stalingrad (Aug 1942-Feb 1943) was the largest battle in history: ~2 million casualties. The surrender of Field Marshal Paulus and the 6th German Army (Feb 1943) marked the beginning of the end of Nazism on the Eastern Front.",
          },
        },
        {
          id: "hu_sgm_l1_q3",
          type: "true-false",
          prompt: {
            es: "El Día D (Operación Overlord), el 6 de junio de 1944, fue el mayor desembarco anfibio de la historia, en las playas de Normandía, Francia.",
            en: "D-Day (Operation Overlord), June 6, 1944, was the largest amphibious landing in history, on the beaches of Normandy, France.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Día D (6 jun 1944): ~156,000 soldados aliados desembarcaron en las 5 playas normandas (Utah, Omaha, Gold, Juno, Sword). Fue el inicio de la liberación de Europa Occidental del nazismo.",
            en: "Correct. D-Day (Jun 6, 1944): ~156,000 Allied soldiers landed on the 5 Normandy beaches (Utah, Omaha, Gold, Juno, Sword). It was the start of the liberation of Western Europe from Nazism.",
          },
        },
        {
          id: "hu_sgm_l1_q4",
          type: "fill-blank",
          prompt: {
            es: "La bomba atómica fue lanzada sobre Hiroshima el 6 de agosto de 1945 por el avión B-29 llamado ___.",
            en: "The atomic bomb was dropped on Hiroshima on August 6, 1945 by the B-29 aircraft named ___.",
          },
          correctAnswer: "Enola Gay",
          explanation: {
            es: "El B-29 'Enola Gay' lanzó 'Little Boy' sobre Hiroshima el 6 ago 1945 (~80,000 muertos inmediatos). El 9 ago, 'Fat Man' cayó sobre Nagasaki (~40,000). Japón se rindió el 15 ago 1945 (V-J Day).",
            en: "The B-29 'Enola Gay' dropped 'Little Boy' on Hiroshima on Aug 6, 1945 (~80,000 immediate deaths). On Aug 9, 'Fat Man' fell on Nagasaki (~40,000). Japan surrendered on Aug 15, 1945 (V-J Day).",
          },
        },
        {
          id: "hu_sgm_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántas víctimas judías causó el Holocausto (Shoah) durante la Segunda Guerra Mundial?",
            en: "How many Jewish victims did the Holocaust (Shoah) cause during World War II?",
          },
          options: [
              { es: "Aproximadamente 6 millones (2/3 de los judíos europeos)", en: "Approximately 6 million (2/3 of European Jews)" },
              { es: "1 millón", en: "1 million" },
              { es: "10 millones", en: "10 million" },
              { es: "500 mil", en: "500 thousand" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Holocausto mató a ~6 millones de judíos (2/3 de los judíos europeos). Los nazis también asesinaron ~5 millones más: gitanos, homosexuales, prisioneros soviéticos, discapacitados y opositores políticos.",
            en: "The Holocaust killed ~6 million Jews (2/3 of European Jews). The Nazis also murdered ~5 million more: Roma, homosexuals, Soviet prisoners, disabled people and political opponents.",
          },
        },
        {
          id: "hu_sgm_l1_q6",
          type: "multiple-choice",
          prompt: {
            es: "La Conferencia de Yalta (febrero 1945) entre Churchill, Roosevelt y Stalin acordó:",
            en: "The Yalta Conference (February 1945) between Churchill, Roosevelt and Stalin agreed on:",
          },
          options: [
              { es: "Dividir Alemania en zonas de ocupación y establecer la ONU después de la victoria aliada", en: "Divide Germany into occupation zones and establish the UN after Allied victory" },
              { es: "El uso de bombas atómicas contra Japón", en: "The use of atomic bombs against Japan" },
              { es: "La rendición incondicional de Japón", en: "Japan's unconditional surrender" },
              { es: "La independencia inmediata de todas las colonias europeas", en: "The immediate independence of all European colonies" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "En Yalta (feb 1945), los 'Tres Grandes' acordaron: dividir Alemania en 4 zonas de ocupación (GB, Fra, URSS, EUA), celebración de elecciones libres en Europa del Este, y la creación de la ONU.",
            en: "At Yalta (Feb 1945), the 'Big Three' agreed: divide Germany into 4 occupation zones (UK, France, USSR, USA), hold free elections in Eastern Europe, and create the UN.",
          },
        },
        {
          id: "hu_sgm_l1_q7",
          type: "true-false",
          prompt: {
            es: "El ataque japonés a Pearl Harbor (7 diciembre 1941) provocó la entrada de Estados Unidos en la Segunda Guerra Mundial.",
            en: "Japan's attack on Pearl Harbor (December 7, 1941) caused the United States to enter World War II.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El 7 de diciembre de 1941, Japón atacó la base naval de Pearl Harbor, Hawaii, sin declarar la guerra. Al día siguiente, el presidente Roosevelt pidió al Congreso declarar la guerra a Japón. Alemania e Italia declararon la guerra a EUA el 11 de diciembre.",
            en: "Correct. On December 7, 1941, Japan attacked the naval base at Pearl Harbor, Hawaii, without declaring war. The next day, President Roosevelt asked Congress to declare war on Japan. Germany and Italy declared war on the USA on December 11.",
          },
        },
        {
          id: "hu_sgm_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estos eventos de la Segunda Guerra Mundial:",
            en: "Order these World War II events:",
          },
          options: [
              { es: "Bombas atómicas en Hiroshima y Nagasaki (ago 1945)", en: "Atomic bombs on Hiroshima and Nagasaki (Aug 1945)" },
              { es: "Día D — desembarco de Normandía (6 jun 1944)", en: "D-Day — Normandy landing (Jun 6, 1944)" },
              { es: "Invasión alemana de Polonia (1 sep 1939)", en: "German invasion of Poland (Sep 1, 1939)" },
              { es: "Batalla de Stalingrado — punto de inflexión (feb 1943)", en: "Battle of Stalingrad — turning point (Feb 1943)" },
              { es: "Ataque japonés a Pearl Harbor (7 dic 1941)", en: "Japanese attack on Pearl Harbor (Dec 7, 1941)" },
            ],
          correctAnswer: ["2", "4", "3", "1", "0"],
          explanation: {
            es: "Orden: Polonia (sep 1939) → Pearl Harbor (dic 1941) → Stalingrado (feb 1943) → Día D (jun 1944) → Hiroshima (ago 1945).",
            en: "Order: Poland (Sep 1939) → Pearl Harbor (Dec 1941) → Stalingrad (Feb 1943) → D-Day (Jun 1944) → Hiroshima (Aug 1945).",
          },
        },
      ],
    },
    {
      id: "segunda-gm-l2",
      topicId: "segunda-guerra-mundial",
      title: {
        es: "El Holocausto y sus Consecuencias",
        en: "The Holocaust and Its Consequences",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_sgm_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué conferencia nazi (1942) se planificó la 'Solución Final' para el exterminio sistemático de los judíos?",
            en: "At which Nazi conference (1942) was the 'Final Solution' for the systematic extermination of Jews planned?",
          },
          options: [
              { es: "Conferencia de Wannsee (20 ene 1942)", en: "Wannsee Conference (Jan 20, 1942)" },
              { es: "Conferencia de Munich (1938)", en: "Munich Conference (1938)" },
              { es: "Conferencia de Nuremberg (1935)", en: "Nuremberg Conference (1935)" },
              { es: "Conferencia de Berlín (1884)", en: "Berlin Conference (1884)" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "En la Conferencia de Wannsee (20 ene 1942), dirigida por Heydrich, 15 altos funcionarios nazis planificaron la 'Solución Final': la deportación y exterminio sistemático de todos los judíos europeos en campos de exterminio.",
            en: "At the Wannsee Conference (Jan 20, 1942), led by Heydrich, 15 senior Nazi officials planned the 'Final Solution': the systematic deportation and extermination of all European Jews in extermination camps.",
          },
        },
        {
          id: "hu_sgm_l2_q2",
          type: "true-false",
          prompt: {
            es: "Los Juicios de Núremberg (1945-1946) establecieron el precedente de que los líderes pueden ser juzgados por 'crímenes contra la humanidad'.",
            en: "The Nuremberg Trials (1945-1946) established the precedent that leaders can be tried for 'crimes against humanity'.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Los Juicios de Núremberg (1945-46) juzgaron a 24 líderes nazis por crímenes de guerra y contra la humanidad. Establecieron que 'seguir órdenes' no exime de responsabilidad y crearon el precedente del derecho internacional penal.",
            en: "Correct. The Nuremberg Trials (1945-46) tried 24 Nazi leaders for war crimes and crimes against humanity. They established that 'following orders' does not exempt from responsibility and created the precedent for international criminal law.",
          },
        },
        {
          id: "hu_sgm_l2_q3",
          type: "multiple-choice",
          prompt: {
            es: "La ONU fue fundada en 1945 con la misión principal de:",
            en: "The UN was founded in 1945 with the main mission of:",
          },
          options: [
              { es: "Mantener la paz y la seguridad internacionales y promover los derechos humanos", en: "Maintain international peace and security and promote human rights" },
              { es: "Administrar el Plan Marshall", en: "Administer the Marshall Plan" },
              { es: "Coordinar la guerra fría entre EUA y URSS", en: "Coordinate the Cold War between the USA and USSR" },
              { es: "Supervisar las colonias europeas", en: "Supervise European colonies" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Organización de las Naciones Unidas (ONU, fundada 24 oct 1945) tiene como propósito: mantener la paz internacional, promover los derechos humanos, el desarrollo y la cooperación entre naciones.",
            en: "The United Nations (UN, founded October 24, 1945) has the purpose: to maintain international peace, promote human rights, development and cooperation between nations.",
          },
        },
        {
          id: "hu_sgm_l2_q4",
          type: "fill-blank",
          prompt: {
            es: "La doctrina política que siguió a la guerra, en la que EUA y la URSS se enfrentaron sin conflicto armado directo, se llamó Guerra ___.",
            en: "The political doctrine that followed the war, in which the USA and USSR confronted each other without direct armed conflict, was called the ___ War.",
          },
          correctAnswer: "Fría",
          explanation: {
            es: "La Guerra Fría (1947-1991) fue la confrontación ideológica, política y militar entre EUA (capitalismo, OTAN) y la URSS (comunismo, Pacto de Varsovia), sin enfrentamiento armado directo entre ambos superpoderes.",
            en: "The Cold War (1947-1991) was the ideological, political and military confrontation between the USA (capitalism, NATO) and the USSR (communism, Warsaw Pact), without direct armed confrontation between the two superpowers.",
          },
        },
        {
          id: "hu_sgm_l2_q5",
          type: "multiple-choice",
          prompt: {
            es: "El Plan Marshall (1948-1951) fue un programa de EUA para:",
            en: "The Marshall Plan (1948-1951) was a US program to:",
          },
          options: [
              { es: "Reconstruir económicamente a Europa Occidental para prevenir la expansión del comunismo", en: "Economically reconstruct Western Europe to prevent the spread of communism" },
              { es: "Dividir Alemania en dos países", en: "Divide Germany into two countries" },
              { es: "Crear la OTAN", en: "Create NATO" },
              { es: "Conquistar militarmente a Europa", en: "Militarily conquer Europe" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Plan Marshall (Programa de Recuperación Europeo, 1948-51) proporcionó ~13,000 millones de dólares (equivalentes a ~140,000M actuales) a 16 países de Europa Occidental. Mezcló humanitarismo con estrategia anticomunista.",
            en: "The Marshall Plan (European Recovery Program, 1948-51) provided ~$13 billion (~$140B in today's dollars) to 16 Western European countries. It mixed humanitarianism with anti-communist strategy.",
          },
        },
        {
          id: "hu_sgm_l2_q6",
          type: "true-false",
          prompt: {
            es: "La Declaración Universal de los Derechos Humanos fue aprobada por la ONU en diciembre de 1948, en respuesta directa a las atrocidades del Holocausto.",
            en: "The Universal Declaration of Human Rights was approved by the UN in December 1948, in direct response to the atrocities of the Holocaust.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La DUDH fue adoptada por la Asamblea General de la ONU el 10 de diciembre de 1948 (Día de los Derechos Humanos). Fue impulsada directamente por el horror del Holocausto y la necesidad de una ética global.",
            en: "Correct. The UDHR was adopted by the UN General Assembly on December 10, 1948 (Human Rights Day). It was directly driven by the horror of the Holocaust and the need for a global ethics.",
          },
        },
        {
          id: "hu_sgm_l2_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué fue la 'Noche de los Cuchillos Largos' o 'Operación Colibrí' (30 jun 1934)?",
            en: "What was the 'Night of the Long Knives' or 'Operation Hummingbird' (June 30, 1934)?",
          },
          options: [
              { es: "La purga interna de Hitler en la que asesinó a los líderes de las SA (camisas pardas) y otros rivales políticos", en: "Hitler's internal purge killing leaders of the SA (Brown Shirts) and other political rivals" },
              { es: "El ataque a Polonia", en: "The attack on Poland" },
              { es: "El bombardeo de Dresde", en: "The bombing of Dresden" },
              { es: "La ejecución de los líderes judíos en Berlín", en: "The execution of Jewish leaders in Berlin" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Noche de los Cuchillos Largos (30 jun-2 jul 1934): Hitler ordenó el asesinato de Ernst Röhm y líderes de las SA, así como de otros rivales políticos (~85 muertos). Consolidó su poder absoluto y ganó el apoyo del ejército profesional.",
            en: "The Night of the Long Knives (Jun 30-Jul 2, 1934): Hitler ordered the murder of Ernst Röhm and SA leaders, as well as other political rivals (~85 killed). It consolidated his absolute power and gained the support of the professional army.",
          },
        },
        {
          id: "hu_sgm_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los eventos del fin de la Segunda Guerra Mundial:",
            en: "Order the events of the end of World War II:",
          },
          options: [
              { es: "Rendición de Japón (15 ago 1945 / V-J Day)", en: "Japan's surrender (Aug 15, 1945 / V-J Day)" },
              { es: "Día D — desembarco de Normandía (6 jun 1944)", en: "D-Day — Normandy landing (Jun 6, 1944)" },
              { es: "Fundación de la ONU (24 oct 1945)", en: "Founding of the UN (Oct 24, 1945)" },
              { es: "Rendición de Alemania (8 mayo 1945 / V-E Day)", en: "Germany's surrender (May 8, 1945 / V-E Day)" },
              { es: "Bombas atómicas: Hiroshima (6 ago) y Nagasaki (9 ago 1945)", en: "Atomic bombs: Hiroshima (Aug 6) and Nagasaki (Aug 9, 1945)" },
            ],
          correctAnswer: ["1", "3", "4", "0", "2"],
          explanation: {
            es: "Orden: Día D (jun 1944) → Rendición Alemania (8 may 1945) → Hiroshima/Nagasaki (ago 1945) → Rendición Japón (15 ago) → ONU fundada (24 oct 1945).",
            en: "Order: D-Day (Jun 1944) → Germany surrenders (May 8, 1945) → Hiroshima/Nagasaki (Aug 1945) → Japan surrenders (Aug 15) → UN founded (Oct 24, 1945).",
          },
        },
      ],
    },
    {
      id: "segunda-gm-l3",
      topicId: "segunda-guerra-mundial",
      title: {
        es: "El Mundo Después de la Guerra",
        en: "The World After the War",
      },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_sgm_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "El Proceso de Desnazificación en Alemania después de la Segunda Guerra Mundial buscó:",
            en: "The Denazification Process in Germany after World War II aimed to:",
          },
          options: [
              { es: "Eliminar la ideología nazi de la sociedad alemana, juzgar criminales de guerra y reconstruir como democracia", en: "Eliminate Nazi ideology from German society, try war criminals and rebuild as democracy" },
              { es: "Destruir completamente a la nación alemana", en: "Completely destroy the German nation" },
              { es: "Crear un gobierno nazista moderado", en: "Create a moderate Nazi government" },
              { es: "Convertir a Alemania en Estado soviético", en: "Convert Germany into a Soviet state" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La desnazificación (1945-1951) incluyó: Juicios de Núremberg, purga de funcionarios nazis, prohibición del Partido Nazi, reforma educativa y la transformación de Alemania en dos repúblicas democráticas.",
            en: "Denazification (1945-1951) included: Nuremberg Trials, purging of Nazi officials, banning of the Nazi Party, educational reform and transformation of Germany into two democratic republics.",
          },
        },
        {
          id: "hu_sgm_l3_q2",
          type: "true-false",
          prompt: {
            es: "La Segunda Guerra Mundial fue la guerra más costosa en vidas humanas de la historia, con aproximadamente 70-85 millones de muertos.",
            en: "World War II was the most costly war in human lives in history, with approximately 70-85 million deaths.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La II GM causó entre 70 y 85 millones de muertos (cifras varían): ~25M militares aliados, ~8M militares del Eje, ~50M civiles (incluyendo Holocausto, bombardeos, hambrunas). El 75% de los muertos fueron civiles.",
            en: "Correct. WWII caused between 70 and 85 million deaths (figures vary): ~25M Allied military, ~8M Axis military, ~50M civilians (including Holocaust, bombings, famines). 75% of deaths were civilians.",
          },
        },
        {
          id: "hu_sgm_l3_q3",
          type: "multiple-choice",
          prompt: {
            es: "La creación del Estado de Israel (1948) fue una consecuencia directa de:",
            en: "The creation of the State of Israel (1948) was a direct consequence of:",
          },
          options: [
              { es: "El Holocausto y la necesidad de un hogar seguro para el pueblo judío, apoyado por la ONU", en: "The Holocaust and the need for a safe home for the Jewish people, supported by the UN" },
              { es: "La victoria militar judía sobre los árabes en la guerra de 1947", en: "The Jewish military victory over Arabs in the 1947 war" },
              { es: "Una decisión unilateral de Gran Bretaña", en: "A unilateral British decision" },
              { es: "El mandato otomano otorgado en 1920", en: "The Ottoman mandate granted in 1920" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Holocausto intensificó el movimiento sionista y la necesidad de un Estado judío. En 1947, la ONU aprobó el Plan de Partición de Palestina. Israel declaró su independencia el 14 de mayo de 1948.",
            en: "The Holocaust intensified the Zionist movement and the need for a Jewish state. In 1947, the UN approved the Partition Plan of Palestine. Israel declared independence on May 14, 1948.",
          },
        },
        {
          id: "hu_sgm_l3_q4",
          type: "fill-blank",
          prompt: {
            es: "La OTAN (Organización del Tratado del Atlántico Norte) fue fundada en 1949 como alianza de defensa mutua entre EUA y los países de Europa ___.",
            en: "NATO (North Atlantic Treaty Organization) was founded in 1949 as a mutual defense alliance between the USA and ___ European countries.",
          },
          correctAnswer: "Occidental",
          explanation: {
            es: "La OTAN (1949) fue la alianza militar de los países capitalistas occidentales (EUA, GB, Francia, Canadá, países del Benelux, etc.) frente a la amenaza soviética. La respuesta soviética fue el Pacto de Varsovia (1955).",
            en: "NATO (1949) was the military alliance of Western capitalist countries (USA, UK, France, Canada, Benelux countries, etc.) against the Soviet threat. The Soviet response was the Warsaw Pact (1955).",
          },
        },
        {
          id: "hu_sgm_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue el resultado de la Conferencia de Potsdam (julio-agosto 1945) respecto a Alemania?",
            en: "What was the result of the Potsdam Conference (July-August 1945) regarding Germany?",
          },
          options: [
              { es: "Dividir a Alemania en cuatro zonas de ocupación aliada que luego se convirtieron en Alemania Oriental (RDA) y Occidental (RFA)", en: "Divide Germany into four Allied occupation zones that later became East Germany (GDR) and West Germany (FRG)" },
              { es: "Destruir completamente a Alemania", en: "Completely destroy Germany" },
              { es: "Reunificar inmediatamente a Alemania bajo gobierno democrático", en: "Immediately reunify Germany under democratic government" },
              { es: "Dar a Stalin el control completo de toda Alemania", en: "Give Stalin complete control of all Germany" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Potsdam (jul-ago 1945) dividió a Alemania en 4 zonas de ocupación (URSS, USA, Gran Bretaña, Francia). En 1949 se formalizó: la zona soviética se convirtió en la RDA (Alemania del Este) y las otras tres en la RFA (Alemania del Oeste).",
            en: "Potsdam (Jul-Aug 1945) divided Germany into 4 occupation zones (USSR, USA, Britain, France). In 1949 it was formalized: the Soviet zone became the GDR (East Germany) and the other three the FRG (West Germany).",
          },
        },
        {
          id: "hu_sgm_l3_q6",
          type: "true-false",
          prompt: {
            es: "El Juicio de Tokio (1946-1948) fue el equivalente asiático de los Juicios de Núremberg para juzgar crímenes de guerra japoneses.",
            en: "The Tokyo Trial (1946-1948) was the Asian equivalent of the Nuremberg Trials to judge Japanese war crimes.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Tribunal Militar Internacional para el Lejano Oriente (1946-48) juzgó a 28 líderes japoneses por crímenes de guerra. 7 fueron ejecutados, incluyendo el ex Primer Ministro Tojo.",
            en: "Correct. The International Military Tribunal for the Far East (1946-48) tried 28 Japanese leaders for war crimes. 7 were executed, including former Prime Minister Tojo.",
          },
        },
        {
          id: "hu_sgm_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la principal diferencia entre el armisticio de la Primera Guerra Mundial y la rendición en la Segunda?",
            en: "What was the main difference between the armistice of World War I and the surrender in World War II?",
          },
          options: [
              { es: "La SGM terminó con rendiciones incondicionales de Alemania y Japón, sin negociación posible", en: "WWII ended with unconditional surrenders of Germany and Japan, with no negotiation possible" },
              { es: "La PGM terminó con rendición incondicional; la SGM con armisticio negociado", en: "WWI ended with unconditional surrender; WWII with a negotiated armistice" },
              { es: "Ambas terminaron exactamente igual", en: "Both ended exactly the same" },
              { es: "Solo Japón se rindió incondicionalmente en la SGM", en: "Only Japan surrendered unconditionally in WWII" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La IGM terminó con el armisticio del 11 nov 1918 (negociado). La IIGM terminó con rendiciones incondicionales: Alemania (8 may 1945, V-E Day) y Japón (15 ag 1945, V-J Day). Esto se consideró necesario para evitar el 'mito de la puñalada por la espalda' usado por Hitler.",
            en: "WWI ended with the armistice of Nov 11, 1918 (negotiated). WWII ended with unconditional surrenders: Germany (May 8, 1945, V-E Day) and Japan (Aug 15, 1945, V-J Day). This was considered necessary to avoid the 'stab in the back' myth used by Hitler.",
          },
        },
        {
          id: "hu_sgm_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena las consecuencias inmediatas de la Segunda Guerra Mundial:",
            en: "Order the immediate consequences of World War II:",
          },
          options: [
              { es: "Plan Marshall para reconstruir Europa Occidental (1948)", en: "Marshall Plan to rebuild Western Europe (1948)" },
              { es: "Creación del Estado de Israel (may 1948)", en: "Creation of the State of Israel (May 1948)" },
              { es: "Fundación de la ONU (oct 1945)", en: "Founding of the UN (Oct 1945)" },
              { es: "Juicios de Núremberg contra líderes nazis (1945-46)", en: "Nuremberg Trials against Nazi leaders (1945-46)" },
            ],
          correctAnswer: ["2", "3", "0", "1"],
          explanation: {
            es: "Orden: Fundación ONU (oct 1945) → Núremberg (1945-46) → Plan Marshall (1948) → Estado de Israel (may 1948).",
            en: "Order: UN founding (Oct 1945) → Nuremberg (1945-46) → Marshall Plan (1948) → State of Israel (May 1948).",
          },
        },
      ],
    },
  ],
};
