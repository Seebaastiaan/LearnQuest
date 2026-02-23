import type { Topic } from "@/lib/types/topic";

export const capitalismoSocialismoTopic: Topic = {
  id: "capitalismo-socialismo",
  subjectId: "historia-universal",
  title: {
    es: "Capitalismo vs. Socialismo: La Guerra Fría",
    en: "Capitalism vs. Socialism: The Cold War",
  },
  description: {
    es: "La rivalidad ideológica entre EUA y la URSS que dividió al mundo durante décadas.",
    en: "The ideological rivalry between the USA and USSR that divided the world for decades.",
  },
  order: 8,
  color: "orange",
  icon: "Swords",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  lessons: [
    {
      id: "cap-soc-l1",
      topicId: "capitalismo-socialismo",
      title: {
        es: "Los Dos Bloques y la Tensión Nuclear",
        en: "The Two Blocs and Nuclear Tension",
      },
      type: "learn",
      order: 1,
      content: {
        es: "La Guerra Fría (1947-1991) fue la confrontación entre EUA (capitalismo, OTAN) y la URSS (comunismo, Pacto de Varsovia). La Doctrina Truman (1947) comprometió a EUA a contener el comunismo. La Crisis de los Misiles Cubanos (1962) llevó al mundo al borde de la guerra nuclear. El Muro de Berlín (1961-1989) simbolizó la división del mundo.",
        en: "The Cold War (1947-1991) was the confrontation between the USA (capitalism, NATO) and the USSR (communism, Warsaw Pact).",
      },
      questions: [
        {
          id: "hu_cs_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "La 'Doctrina Truman' (1947) estableció que EUA:",
            en: "The 'Truman Doctrine' (1947) established that the USA:",
          },
          options: [
              { es: "Apoyaría a cualquier nación libre amenazada por el comunismo soviético", en: "Would support any free nation threatened by Soviet communism" },
              { es: "Atacaría militarmente a cualquier país comunista", en: "Would militarily attack any communist country" },
              { es: "Se mantendría neutral en los conflictos europeos", en: "Would remain neutral in European conflicts" },
              { es: "Cedería Europa Oriental a la URSS", en: "Would cede Eastern Europe to the USSR" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Doctrina Truman (12 mar 1947) fue la política de 'contención': EUA apoyaría (económica y militarmente) a cualquier nación amenazada por el comunismo. Surgió para ayudar a Grecia y Turquía ante la presión soviética.",
            en: "The Truman Doctrine (Mar 12, 1947) was the 'containment' policy: the USA would support (economically and militarily) any nation threatened by communism. It emerged to help Greece and Turkey under Soviet pressure.",
          },
        },
        {
          id: "hu_cs_l1_q2",
          type: "multiple-choice",
          prompt: {
            es: "El Muro de Berlín fue construido en 1961 por la RDA para:",
            en: "The Berlin Wall was built in 1961 by East Germany to:",
          },
          options: [
              { es: "Detener la masiva emigración de ciudadanos de Alemania Oriental hacia el Oeste", en: "Stop the massive emigration of East German citizens to the West" },
              { es: "Protegerse de una invasión de la OTAN", en: "Protect against a NATO invasion" },
              { es: "Separar las zonas militares británica y soviética de Berlín", en: "Separate the British and Soviet military zones of Berlin" },
              { es: "Celebrar la victoria soviética en la Segunda Guerra Mundial", en: "Celebrate the Soviet victory in World War II" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Antes del Muro (1945-61), ~3.5 millones de alemanes orientales huyeron al Oeste por Berlín. La RDA construyó el Muro durante la noche del 12-13 ago 1961 para detener esta 'hemorragia' de población calificada.",
            en: "Before the Wall (1945-61), ~3.5 million East Germans fled to the West through Berlin. East Germany built the Wall during the night of Aug 12-13, 1961 to stop this 'bleeding' of skilled population.",
          },
        },
        {
          id: "hu_cs_l1_q3",
          type: "true-false",
          prompt: {
            es: "La Crisis de los Misiles Cubanos (octubre 1962) fue el momento más peligroso de la Guerra Fría, cuando el mundo estuvo al borde de una guerra nuclear.",
            en: "The Cuban Missile Crisis (October 1962) was the most dangerous moment of the Cold War, when the world was on the brink of nuclear war.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La Crisis de los Misiles (16-28 oct 1962): EUA descubrió misiles soviéticos en Cuba. Kennedy impuso un bloqueo naval. Tras 13 días de tensión máxima, Jruschev retiró los misiles. EUA prometió no invadir Cuba y retirar misiles de Turquía.",
            en: "Correct. The Missile Crisis (Oct 16-28, 1962): the USA discovered Soviet missiles in Cuba. Kennedy imposed a naval blockade. After 13 days of maximum tension, Khrushchev withdrew the missiles. The USA promised not to invade Cuba and to remove missiles from Turkey.",
          },
        },
        {
          id: "hu_cs_l1_q4",
          type: "fill-blank",
          prompt: {
            es: "El sistema de 'Destrucción Mutua Asegurada' que disuadió el conflicto nuclear directo entre EUA y URSS fue conocido por su acrónimo en inglés: ___.",
            en: "The 'Mutual Assured Destruction' system that deterred direct nuclear conflict between the USA and USSR was known by its English acronym: ___.",
          },
          correctAnswer: "MAD",
          explanation: {
            es: "La Destrucción Mutua Asegurada (MAD, por sus siglas en inglés) fue la doctrina nuclear de disuasión: ambas potencias tenían suficientes armas nucleares para destruirse mutuamente, lo que hace irracional el primer ataque.",
            en: "Mutual Assured Destruction (MAD) was the nuclear deterrence doctrine: both powers had enough nuclear weapons to mutually destroy each other, making a first strike irrational.",
          },
        },
        {
          id: "hu_cs_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "La 'carrera espacial' de la Guerra Fría tuvo un punto de inflexión en 1957 cuando la URSS lanzó:",
            en: "The Cold War 'space race' had a turning point in 1957 when the USSR launched:",
          },
          options: [
              { es: "El Sputnik 1, el primer satélite artificial de la historia", en: "Sputnik 1, the first artificial satellite in history" },
              { es: "El primer ser humano al espacio", en: "The first human being into space" },
              { es: "Un cohete con dirección a la Luna", en: "A rocket aimed at the Moon" },
              { es: "El primer satélite espía sobre EUA", en: "The first spy satellite over the USA" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Sputnik 1 (4 oct 1957) fue el primer satélite artificial: 83 kg, orbitó la Tierra en 96 minutos. Causó pánico en EUA ('Sputnik crisis') y aceleró la fundación de la NASA (1958) y los programas espaciales estadounidenses.",
            en: "Sputnik 1 (Oct 4, 1957) was the first artificial satellite: 83 kg, it orbited Earth in 96 minutes. It caused panic in the USA ('Sputnik crisis') and accelerated the founding of NASA (1958) and American space programs.",
          },
        },
        {
          id: "hu_cs_l1_q6",
          type: "multiple-choice",
          prompt: {
            es: "El Pacto de Varsovia (1955) fue la respuesta soviética a:",
            en: "The Warsaw Pact (1955) was the Soviet response to:",
          },
          options: [
              { es: "La entrada de Alemania Occidental en la OTAN y la necesidad de una alianza militar del bloque comunista", en: "West Germany joining NATO and the need for a military alliance of the communist bloc" },
              { es: "La Doctrina Truman de 1947", en: "The 1947 Truman Doctrine" },
              { es: "La Crisis de los Misiles Cubanos", en: "The Cuban Missile Crisis" },
              { es: "El Plan Marshall", en: "The Marshall Plan" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Pacto de Varsovia (14 may 1955) fue la alianza militar del bloque soviético: URSS, Polonia, Checoslovaquia, Hungría, RDA, Rumanía, Bulgaria y Albania. Se formó como respuesta a la entrada de la República Federal Alemana en la OTAN.",
            en: "The Warsaw Pact (May 14, 1955) was the military alliance of the Soviet bloc: USSR, Poland, Czechoslovakia, Hungary, East Germany, Romania, Bulgaria and Albania. It was formed in response to West Germany's entry into NATO.",
          },
        },
        {
          id: "hu_cs_l1_q7",
          type: "true-false",
          prompt: {
            es: "La Guerra de Corea (1950-1953) fue el primer conflicto armado de la Guerra Fría en el que EUA y la URSS/China se enfrentaron indirectamente.",
            en: "The Korean War (1950-1953) was the first armed conflict of the Cold War in which the USA and the USSR/China faced each other indirectly.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Corea del Norte (comunista, apoyada por URSS y China) invadió Corea del Sur (jun 1950). La ONU (liderada por EUA) intervino. El armisticio (jul 1953) restauró la frontera en el paralelo 38° — la misma línea que antes de la guerra.",
            en: "Correct. North Korea (communist, supported by USSR and China) invaded South Korea (Jun 1950). The UN (led by USA) intervened. The armistice (Jul 1953) restored the border at the 38th parallel — the same line as before the war.",
          },
        },
        {
          id: "hu_cs_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los eventos clave de la Guerra Fría:",
            en: "Order the key Cold War events:",
          },
          options: [
              { es: "Crisis de los Misiles Cubanos (oct 1962)", en: "Cuban Missile Crisis (Oct 1962)" },
              { es: "Caída del Muro de Berlín (9 nov 1989)", en: "Fall of the Berlin Wall (Nov 9, 1989)" },
              { es: "Sputnik 1 — primera carrera espacial (4 oct 1957)", en: "Sputnik 1 — first space race (Oct 4, 1957)" },
              { es: "Doctrina Truman y Plan Marshall (1947-48)", en: "Truman Doctrine and Marshall Plan (1947-48)" },
              { es: "Pacto de Varsovia (1955)", en: "Warsaw Pact (1955)" },
            ],
          correctAnswer: ["3", "4", "2", "0", "1"],
          explanation: {
            es: "Orden: Truman/Marshall (1947-48) → Pacto Varsovia (1955) → Sputnik (1957) → misiles Cuba (1962) → Muro cae (1989).",
            en: "Order: Truman/Marshall (1947-48) → Warsaw Pact (1955) → Sputnik (1957) → Cuba missiles (1962) → Wall falls (1989).",
          },
        },
      ],
    },
    {
      id: "cap-soc-l2",
      topicId: "capitalismo-socialismo",
      title: {
        es: "Descolonización y el Movimiento No Alineado",
        en: "Decolonization and the Non-Aligned Movement",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_cs_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "El 'Año de África' (1960) señaló que:",
            en: "The 'Year of Africa' (1960) marked that:",
          },
          options: [
              { es: "17 países africanos obtuvieron su independencia de las potencias coloniales europeas en ese año", en: "17 African countries gained independence from European colonial powers that year" },
              { es: "África se dividió en dos bloques durante la Guerra Fría", en: "Africa was divided into two blocs during the Cold War" },
              { es: "Comenzó la 'Conferencia de Berlín' que repartió África", en: "The 'Berlin Conference' that divided Africa began" },
              { es: "Todos los países africanos eran ya independientes", en: "All African countries were already independent" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "1960 fue el 'Año de África': 17 países africanos (principalmente colonias francesas y británicas) obtuvieron la independencia. El proceso de descolonización aceleró después de la Segunda Guerra Mundial, cuando las potencias europeas quedaron debilitadas.",
            en: "1960 was the 'Year of Africa': 17 African countries (mainly French and British colonies) gained independence. The decolonization process accelerated after World War II, when European powers were weakened.",
          },
        },
        {
          id: "hu_cs_l2_q2",
          type: "true-false",
          prompt: {
            es: "El Movimiento de Países No Alineados (creado en 1961) buscó que las naciones del 'Tercer Mundo' no se alinearan con ninguno de los dos bloques de la Guerra Fría.",
            en: "The Non-Aligned Movement (created in 1961) sought to ensure that 'Third World' nations did not align with either Cold War bloc.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Movimiento No Alineado (MNA, 1961) fue fundado por Nehru (India), Nasser (Egipto), Tito (Yugoslavia), Sukarno (Indonesia) y Nkrumah (Ghana). Representaba a los países que querían independencia de ambas superpotencias.",
            en: "Correct. The Non-Aligned Movement (NAM, 1961) was founded by Nehru (India), Nasser (Egypt), Tito (Yugoslavia), Sukarno (Indonesia) and Nkrumah (Ghana). It represented countries that wanted independence from both superpowers.",
          },
        },
        {
          id: "hu_cs_l2_q3",
          type: "multiple-choice",
          prompt: {
            es: "La Guerra de Vietnam (1955-1975) para EUA fue una guerra de:",
            en: "The Vietnam War (1955-1975) for the USA was a war of:",
          },
          options: [
              { es: "Contención del comunismo en el sureste asiático, que terminó en derrota y retirada de EUA", en: "Containment of communism in Southeast Asia, ending in US defeat and withdrawal" },
              { es: "Expansión colonial estadounidense en Asia", en: "US colonial expansion in Asia" },
              { es: "Defensa de Japón frente a la expansión soviética", en: "Defense of Japan against Soviet expansion" },
              { es: "Protección de recursos petroleros en el Golfo de Tonkín", en: "Protection of oil resources in the Gulf of Tonkin" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "EUA intervino en Vietnam del Sur para evitar que cayera al comunismo (Doctrina del Dominó). Tras el Incidente del Golfo de Tonkín (1964, fabricado), escaló masivamente. Se retiró en 1973 (Acuerdos de París); Saigón cayó en 1975.",
            en: "The USA intervened in South Vietnam to prevent it from falling to communism (Domino Theory). After the Gulf of Tonkin Incident (1964, fabricated), it escalated massively. It withdrew in 1973 (Paris Accords); Saigon fell in 1975.",
          },
        },
        {
          id: "hu_cs_l2_q4",
          type: "fill-blank",
          prompt: {
            es: "La 'Primavera de Praga' (1968) fue el intento reformista de Checoslovaquia liderado por ___, aplastado por la invasión soviética.",
            en: "The 'Prague Spring' (1968) was the Czech reformist attempt led by ___, crushed by the Soviet invasion.",
          },
          correctAnswer: "Alexander Dubček",
          explanation: {
            es: "La Primavera de Praga (ene-ago 1968): Dubček intentó crear 'socialismo con rostro humano' con libertades políticas. El 21 ago 1968, tropas del Pacto de Varsovia invadieron Checoslovaquia. Brezhnev justificó la intervención con la 'Doctrina Brezhnev'.",
            en: "The Prague Spring (Jan-Aug 1968): Dubček tried to create 'socialism with a human face' with political freedoms. On Aug 21, 1968, Warsaw Pact troops invaded Czechoslovakia. Brezhnev justified the intervention with the 'Brezhnev Doctrine'.",
          },
        },
        {
          id: "hu_cs_l2_q5",
          type: "multiple-choice",
          prompt: {
            es: "La 'Revolución China' (1949) liderada por Mao Zedong resultó en:",
            en: "The 'Chinese Revolution' (1949) led by Mao Zedong resulted in:",
          },
          options: [
              { es: "La fundación de la República Popular China como Estado comunista y el exilio de los nacionalistas de Chiang a Taiwán", en: "The founding of the People's Republic of China as a communist state and the exile of Chiang's nationalists to Taiwan" },
              { es: "Una alianza permanente entre China y la URSS", en: "A permanent alliance between China and the USSR" },
              { es: "La división de China en dos países comunistas", en: "The division of China into two communist countries" },
              { es: "La victoria china en la Guerra de Corea", en: "The Chinese victory in the Korean War" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El 1 de octubre de 1949, Mao proclamó la República Popular China en Beijing. El gobierno nacionalista de Chiang Kai-shek huyó a la isla de Formosa (Taiwán). China se convirtió en el segundo gran Estado comunista.",
            en: "On October 1, 1949, Mao proclaimed the People's Republic of China in Beijing. Chiang Kai-shek's nationalist government fled to the island of Formosa (Taiwan). China became the second major communist state.",
          },
        },
        {
          id: "hu_cs_l2_q6",
          type: "true-false",
          prompt: {
            es: "El primer ser humano en el espacio fue Yuri Gagarin (soviético), quien orbitó la Tierra el 12 de abril de 1961.",
            en: "The first human in space was Yuri Gagarin (Soviet), who orbited Earth on April 12, 1961.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Yuri Gagarin completó una órbita alrededor de la Tierra en la nave Vostok 1 el 12 de abril de 1961 (duración: 108 minutos). EUA respondió enviando al primer americano al espacio (Shepard, may 1961) y logrando la primera llegada a la Luna (Armstrong, 20 jul 1969).",
            en: "Correct. Yuri Gagarin completed one orbit around Earth in the Vostok 1 spacecraft on April 12, 1961 (duration: 108 minutes). The USA responded by sending the first American to space (Shepard, May 1961) and achieving the first Moon landing (Armstrong, Jul 20, 1969).",
          },
        },
        {
          id: "hu_cs_l2_q7",
          type: "multiple-choice",
          prompt: {
            es: "La 'détente' (distensión) de los años 70 entre EUA y URSS incluyó:",
            en: "The 'détente' (relaxation of tensions) of the 1970s between the USA and USSR included:",
          },
          options: [
              { es: "Los Acuerdos SALT (limitación de armas nucleares) y la visita de Nixon a China en 1972", en: "The SALT Agreements (nuclear arms limitation) and Nixon's visit to China in 1972" },
              { es: "La eliminación completa de armas nucleares", en: "The complete elimination of nuclear weapons" },
              { es: "La reunificación de Alemania en 1970", en: "The reunification of Germany in 1970" },
              { es: "El fin de la carrera espacial", en: "The end of the space race" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La détente (1969-79) incluyó: SALT I (1972, límites de misiles nucleares), visita de Nixon/Kissinger a China (1972, rompiendo aislamiento), Acuerdos de Helsinki (1975, derechos humanos). La invasión soviética de Afganistán (1979) terminó con la détente.",
            en: "Détente (1969-79) included: SALT I (1972, nuclear missile limits), Nixon/Kissinger visit to China (1972, breaking isolation), Helsinki Accords (1975, human rights). The Soviet invasion of Afghanistan (1979) ended détente.",
          },
        },
        {
          id: "hu_cs_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los eventos de la descolonización y conflictos del Tercer Mundo:",
            en: "Order the events of decolonization and Third World conflicts:",
          },
          options: [
              { es: "Revolución Cubana (1959) y crisis de misiles (1962)", en: "Cuban Revolution (1959) and missile crisis (1962)" },
              { es: "Año de África — 17 independencias (1960)", en: "Year of Africa — 17 independences (1960)" },
              { es: "Revolución China de Mao Zedong (1949)", en: "Mao Zedong's Chinese Revolution (1949)" },
              { es: "Fin de la Guerra de Vietnam / caída de Saigón (1975)", en: "End of Vietnam War / fall of Saigon (1975)" },
              { es: "Fundación del Movimiento No Alineado (1961)", en: "Founding of the Non-Aligned Movement (1961)" },
            ],
          correctAnswer: ["2", "4", "1", "0", "3"],
          explanation: {
            es: "Orden: Revolución China (1949) → Año de África (1960) → No Alineados (1961) → Cuba (1959-1962) → Vietnam cae (1975).",
            en: "Order: Chinese Revolution (1949) → Year of Africa (1960) → Non-Aligned (1961) → Cuba (1959-1962) → Vietnam falls (1975).",
          },
        },
      ],
    },
    {
      id: "cap-soc-l3",
      topicId: "capitalismo-socialismo",
      title: { es: "El Fin de la Guerra Fría", en: "The End of the Cold War" },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_cs_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "La 'Perestroika' y la 'Glásnost' impulsadas por Gorbachov en los 80 significaron respectivamente:",
            en: "The 'Perestroika' and 'Glasnost' promoted by Gorbachev in the 80s respectively meant:",
          },
          options: [
              { es: "Reestructuración económica y apertura/transparencia política en la URSS", en: "Economic restructuring and political openness/transparency in the USSR" },
              { es: "Expansión militar y censura de prensa", en: "Military expansion and press censorship" },
              { es: "Aislamiento económico y represión política", en: "Economic isolation and political repression" },
              { es: "Reforma constitucional y elecciones libres", en: "Constitutional reform and free elections" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Perestroika (reestructuración) = reforma económica, mayor autonomía de empresas soviéticas. Glásnost (apertura) = transparencia, libertad de prensa limitada. Ambas reformas de Gorbachov (1985-91) aceleraron el colapso del sistema soviético.",
            en: "Perestroika (restructuring) = economic reform, greater autonomy for Soviet enterprises. Glasnost (openness) = transparency, limited press freedom. Both reforms by Gorbachev (1985-91) accelerated the collapse of the Soviet system.",
          },
        },
        {
          id: "hu_cs_l3_q2",
          type: "true-false",
          prompt: {
            es: "El Muro de Berlín cayó el 9 de noviembre de 1989, lo que simbólicamente marcó el fin de la Guerra Fría.",
            en: "The Berlin Wall fell on November 9, 1989, which symbolically marked the end of the Cold War.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La caída del Muro de Berlín (9 nov 1989) fue el momento más emblemático del fin de la Guerra Fría. Fue resultado de la Revolución Pacífica en Alemania Oriental. La reunificación alemana siguió el 3 oct 1990.",
            en: "Correct. The fall of the Berlin Wall (Nov 9, 1989) was the most emblematic moment of the end of the Cold War. It resulted from the Peaceful Revolution in East Germany. German reunification followed on Oct 3, 1990.",
          },
        },
        {
          id: "hu_cs_l3_q3",
          type: "multiple-choice",
          prompt: {
            es: "La URSS se disolvió oficialmente en:",
            en: "The USSR was officially dissolved on:",
          },
          options: [
              { es: "25 de diciembre de 1991, cuando Gorbachov renunció y se formó la CEI", en: "December 25, 1991, when Gorbachev resigned and the CIS was formed" },
              { es: "9 de noviembre de 1989, cuando cayó el Muro de Berlín", en: "November 9, 1989, when the Berlin Wall fell" },
              { es: "1 de enero de 1990, cuando Rusia declaró su independencia", en: "January 1, 1990, when Russia declared independence" },
              { es: "4 de julio de 1991, por decreto del Congreso soviético", en: "July 4, 1991, by decree of the Soviet Congress" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El 25 de diciembre de 1991, Gorbachov renunció a la presidencia soviética y bajó la bandera roja del Kremlin. La URSS se disolvió en 15 repúblicas independientes. La Comunidad de Estados Independientes (CEI) fue brevemente su sucesora.",
            en: "On December 25, 1991, Gorbachev resigned from the Soviet presidency and lowered the red flag from the Kremlin. The USSR dissolved into 15 independent republics. The Commonwealth of Independent States (CIS) was briefly its successor.",
          },
        },
        {
          id: "hu_cs_l3_q4",
          type: "fill-blank",
          prompt: {
            es: "La política exterior de Reagan conocida como 'Doctrina Reagan' buscaba apoyar a los movimientos ___ que combatían regímenes comunistas.",
            en: "Reagan's foreign policy known as the 'Reagan Doctrine' sought to support ___ movements fighting communist regimes.",
          },
          correctAnswer: "anticomunistas",
          explanation: {
            es: "La Doctrina Reagan (1985-89) financió y apoyó a movimientos anticomunistas (guerrillas, contras) en países como Nicaragua, Afganistán, Angola y Mozambique. La CIA armó a los muyahidines afganos para combatir a las tropas soviéticas.",
            en: "The Reagan Doctrine (1985-89) funded and supported anti-communist movements (guerrillas, contras) in countries like Nicaragua, Afghanistan, Angola and Mozambique. The CIA armed Afghan mujahideen to fight Soviet troops.",
          },
        },
        {
          id: "hu_cs_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "El 'Telón de Acero', término acuñado por Churchill en 1946, describía:",
            en: "The 'Iron Curtain', a term coined by Churchill in 1946, described:",
          },
          options: [
              { es: "La división entre Europa Occidental (libre) y Europa Oriental (comunista-sovietizada)", en: "The division between Western Europe (free) and Eastern Europe (communist-Sovietized)" },
              { es: "El Muro de Berlín físico", en: "The physical Berlin Wall" },
              { es: "Las defensas militares de la OTAN", en: "NATO's military defenses" },
              { es: "La barrera económica créada por el Plan Marshall", en: "The economic barrier created by the Marshall Plan" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Churchill usó por primera vez 'Telón de Acero' el 5 mar 1946 en Fulton, Missouri: 'Desde Stettin en el Báltico hasta Trieste en el Adriático, un telón de acero ha descendido sobre el continente'. Describía la división ideológica de Europa.",
            en: "Churchill first used 'Iron Curtain' on March 5, 1946, in Fulton, Missouri: 'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent.' It described Europe's ideological division.",
          },
        },
        {
          id: "hu_cs_l3_q6",
          type: "true-false",
          prompt: {
            es: "La Revolución del Solidarity en Polonia (1980-1989), liderada por Lech Wałęsa, fue un movimiento obrero que desafió al régimen comunista polaco.",
            en: "The Solidarity Revolution in Poland (1980-1989), led by Lech Wałęsa, was a labor movement that challenged the Polish communist regime.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Solidarność (Solidaridad) fue fundado en los astilleros de Gdańsk (1980) por Wałęsa. Fue el primer sindicato independiente en el bloque soviético, con 10M de miembros. Fue legalizado en 1989; Wałęsa ganó las elecciones y fue presidente (1990-95).",
            en: "Correct. Solidarność (Solidarity) was founded at the Gdańsk shipyards (1980) by Wałęsa. It was the first independent union in the Soviet bloc, with 10M members. It was legalized in 1989; Wałęsa won elections and was president (1990-95).",
          },
        },
        {
          id: "hu_cs_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué fue la 'Doctrina Brezhnev' (adoptada después de la invasión de Checoslovaquia, 1968)?",
            en: "What was the 'Brezhnev Doctrine' (adopted after the invasion of Czechoslovakia, 1968)?",
          },
          options: [
              { es: "La URSS se reservaba el derecho de intervenir en cualquier país socialista que amenazara con abandonar el comunismo", en: "The USSR reserved the right to intervene in any socialist country that threatened to abandon communism" },
              { es: "Los países del bloque socialista tenían derecho a decidir su propio sistema político", en: "Socialist bloc countries had the right to decide their own political system" },
              { es: "La URSS renunciaba al uso de la fuerza militar en los países del Pacto de Varsovia", en: "The USSR renounced the use of military force in Warsaw Pact countries" },
              { es: "Cada nación del Pacto de Varsovia podía desarrollar armas nucleares propias", en: "Each Warsaw Pact nation could develop its own nuclear weapons" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Doctrina Brezhnev (1968) justificó la invasión de Checoslovaquia: 'Una amenaza al socialismo en un país socialista es una amenaza al socialismo en todos los países'. Fue la justificación soviética para mantener el control del bloque oriental.",
            en: "The Brezhnev Doctrine (1968) justified the invasion of Czechoslovakia: 'A threat to socialism in one socialist country is a threat to socialism in all socialist countries.' It was the Soviet justification for maintaining control of the Eastern bloc.",
          },
        },
        {
          id: "hu_cs_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena el colapso del bloque soviético:",
            en: "Order the collapse of the Soviet bloc:",
          },
          options: [
              { es: "Disolución formal de la URSS (25 dic 1991)", en: "Formal dissolution of the USSR (Dec 25, 1991)" },
              { es: "Solidaridad gana elecciones en Polonia (jun 1989)", en: "Solidarity wins elections in Poland (Jun 1989)" },
              { es: "Gorbachov lanza Perestroika y Glásnost (1985-86)", en: "Gorbachev launches Perestroika and Glasnost (1985-86)" },
              { es: "Reunificación alemana (3 oct 1990)", en: "German reunification (Oct 3, 1990)" },
              { es: "Caída del Muro de Berlín (9 nov 1989)", en: "Fall of the Berlin Wall (Nov 9, 1989)" },
            ],
          correctAnswer: ["2", "1", "4", "3", "0"],
          explanation: {
            es: "Orden: Perestroika/Glásnost (1985-86) → Solidaridad gana (jun 1989) → Cae el Muro (nov 1989) → Reunificación alemana (oct 1990) → URSS disuelta (dic 1991).",
            en: "Order: Perestroika/Glasnost (1985-86) → Solidarity wins (Jun 1989) → Wall falls (Nov 1989) → German reunification (Oct 1990) → USSR dissolved (Dec 1991).",
          },
        },
      ],
    },
  ],
};
