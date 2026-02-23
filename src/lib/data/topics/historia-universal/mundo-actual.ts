import type { Topic } from "@/lib/types/topic";

export const mundoActualTopic: Topic = {
  id: "mundo-actual",
  subjectId: "historia-universal",
  title: {
    es: "El Mundo Actual: Globalización y Nuevos Retos",
    en: "The Contemporary World: Globalization and New Challenges",
  },
  description: {
    es: "Del fin de la Guerra Fría a la globalización digital, el terrorismo y los nuevos desafíos del siglo XXI.",
    en: "From the end of the Cold War to digital globalization, terrorism and new 21st century challenges.",
  },
  order: 9,
  color: "amber",
  icon: "Globe2",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  lessons: [
    {
      id: "mundo-actual-l1",
      topicId: "mundo-actual",
      title: {
        es: "El Nuevo Orden Mundial Tras la Guerra Fría",
        en: "The New World Order After the Cold War",
      },
      type: "learn",
      order: 1,
      content: {
        es: "Con la disolución de la URSS (1991), EUA quedó como única superpotencia ('unipolaridad'). La globalización económica aceleró con la OMC (1995), el TLCAN (1994) y la Unión Europea (Maastricht, 1992). El 11-S (2001) cambió la agenda global hacia la seguridad. La Primavera Árabe (2010-12) y el ascenso de China como potencia constituyen los grandes ejes del mundo contemporáneo.",
        en: "With the dissolution of the USSR (1991), the USA remained as the sole superpower ('unipolarity'). Economic globalization accelerated with the WTO (1995), NAFTA (1994) and the European Union (Maastricht, 1992).",
      },
      questions: [
        {
          id: "hu_ma_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "El 11 de septiembre de 2001 fue un ataque terrorista que:",
            en: "September 11, 2001 was a terrorist attack that:",
          },
          options: [
              { es: "Al-Qaeda atacó las Torres Gemelas de NY y el Pentágono, matando ~3,000 personas y cambiando la política de seguridad global", en: "Al-Qaeda attacked the Twin Towers in NY and the Pentagon, killing ~3,000 people and changing global security policy" },
              { es: "Irak atacó bases militares estadounidenses en Arabia Saudí", en: "Iraq attacked US military bases in Saudi Arabia" },
              { es: "Talibanes atacaron la embajada estadounidense en Kabul", en: "Taliban attacked the US embassy in Kabul" },
              { es: "Corea del Norte lanzó misiles hacia el Pacífico", en: "North Korea launched missiles toward the Pacific" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El 11-S (2001): Al-Qaeda secuestró 4 aviones; 2 impactaron las Torres Gemelas (3,000+ muertos), 1 el Pentágono, 1 cayó en Pennsylvania. EUA lanzó la 'Guerra contra el Terror': invasión de Afganistán (2001) e Irak (2003).",
            en: "9/11 (2001): Al-Qaeda hijacked 4 planes; 2 hit the Twin Towers (3,000+ dead), 1 the Pentagon, 1 crashed in Pennsylvania. The USA launched the 'War on Terror': invasion of Afghanistan (2001) and Iraq (2003).",
          },
        },
        {
          id: "hu_ma_l1_q2",
          type: "true-false",
          prompt: {
            es: "La Unión Europea fue formalmente creada por el Tratado de Maastricht en 1992 y es la mayor integración política y económica supranacional del mundo.",
            en: "The European Union was formally created by the Maastricht Treaty in 1992 and is the world's largest supranational political and economic integration.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Tratado de Maastricht (7 feb 1992) transformó la CEE en la UE, creando la ciudadanía europea, el espacio Schengen y el euro (moneda única del área euro desde 1999/2002).",
            en: "Correct. The Maastricht Treaty (Feb 7, 1992) transformed the EEC into the EU, creating European citizenship, the Schengen Area and the euro (single currency of the eurozone since 1999/2002).",
          },
        },
        {
          id: "hu_ma_l1_q3",
          type: "multiple-choice",
          prompt: {
            es: "La 'globalización' económica se caracteriza principalmente por:",
            en: "Economic 'globalization' is mainly characterized by:",
          },
          options: [
              { es: "La integración de mercados mundiales, libre flujo de capitales, mercancías e información a nivel global", en: "The integration of global markets, free flow of capital, goods and information at a global level" },
              { es: "La dominación militar de EUA sobre el mundo", en: "US military domination of the world" },
              { es: "El control de la economía mundial por la ONU", en: "UN control of the world economy" },
              { es: "La desaparición de las fronteras nacionales", en: "The disappearance of national borders" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La globalización económica (desde los 90): libre comercio (OMC, 1995), cadenas de producción globales, movimiento de capitales, empresas multinacionales, internet, digitalización. Sus críticos señalan el aumento de desigualdad entre países.",
            en: "Economic globalization (since the 90s): free trade (WTO, 1995), global production chains, capital mobility, multinational corporations, internet, digitization. Its critics point to increasing inequality between countries.",
          },
        },
        {
          id: "hu_ma_l1_q4",
          type: "fill-blank",
          prompt: {
            es: "El acuerdo de libre comercio entre EUA, Canadá y México que entró en vigor el 1 de enero de 1994 fue el ___ (por sus siglas en inglés).",
            en: "The free trade agreement between the USA, Canada and Mexico that came into force on January 1, 1994 was ___ (by its English acronym).",
          },
          correctAnswer: "TLCAN / NAFTA",
          explanation: {
            es: "El TLCAN (Tratado de Libre Comercio de América del Norte) / NAFTA (North American Free Trade Agreement) entró en vigor el 1 ene 1994. En 2020 fue renombrado T-MEC / USMCA. Creó la segunda zona de libre comercio más grande del mundo.",
            en: "NAFTA (North American Free Trade Agreement) / TLCAN came into force on January 1, 1994. In 2020 it was renamed USMCA / T-MEC. It created the second largest free trade area in the world.",
          },
        },
        {
          id: "hu_ma_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "La 'Primavera Árabe' (2010-2012) fue una ola de:",
            en: "The 'Arab Spring' (2010-2012) was a wave of:",
          },
          options: [
              { es: "Revolciones y protestas populares en el mundo árabe que derrocaron a varios gobiernos autoritarios", en: "Popular revolutions and protests in the Arab world that overthrew several authoritarian governments" },
              { es: "Elecciones democráticas pacíficas en el Medio Oriente organizadas por la ONU", en: "Peaceful democratic elections in the Middle East organized by the UN" },
              { es: "Invasiones militares de EUA a países árabes", en: "US military invasions of Arab countries" },
              { es: "Acuerdos de paz entre Israel y los países árabes", en: "Peace agreements between Israel and Arab countries" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Primavera Árabe (dic 2010 en Túnez): ola de protestas populares impulsada por redes sociales. Cayeron: Ben Alí (Túnez), Mubarak (Egipto), Gadafi (Libia), Saleh (Yemen). Derivó en guerras civiles en Libia, Yemen y Siria.",
            en: "The Arab Spring (Dec 2010 in Tunisia): wave of popular protests driven by social media. Fell: Ben Ali (Tunisia), Mubarak (Egypt), Gaddafi (Libya), Saleh (Yemen). Led to civil wars in Libya, Yemen and Syria.",
          },
        },
        {
          id: "hu_ma_l1_q6",
          type: "true-false",
          prompt: {
            es: "China se convirtió en la segunda economía mundial en 2010, desplazando a Japón, y es considerada la principal rival estratégica de EUA en el siglo XXI.",
            en: "China became the world's second-largest economy in 2010, displacing Japan, and is considered the USA's main strategic rival in the 21st century.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. China superó a Japón como 2ª economía mundial en 2010. Con el presidente Xi Jinping (desde 2013), China busca ser potencia global ('China Dream'). La rivalidad EUA-China por tecnología, comercio y hegemonía es el eje del siglo XXI.",
            en: "Correct. China surpassed Japan as the world's 2nd largest economy in 2010. Under President Xi Jinping (since 2013), China seeks to be a global power ('China Dream'). The USA-China rivalry over technology, trade and hegemony is the axis of the 21st century.",
          },
        },
        {
          id: "hu_ma_l1_q7",
          type: "multiple-choice",
          prompt: {
            es: "La Organización Mundial del Comercio (OMC) fue creada en 1995 reemplazando al GATT. Su función principal es:",
            en: "The World Trade Organization (WTO) was created in 1995 replacing GATT. Its main function is:",
          },
          options: [
              { es: "Regular el comercio internacional, resolver disputas comerciales y promover la liberalización del comercio", en: "Regulate international trade, resolve trade disputes and promote trade liberalization" },
              { es: "Controlar los precios del petróleo a nivel mundial", en: "Control oil prices worldwide" },
              { es: "Gestionar la deuda externa de los países en desarrollo", en: "Manage the external debt of developing countries" },
              { es: "Supervisar la ayuda humanitaria internacional", en: "Supervise international humanitarian aid" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La OMC (reemplazó al GATT en 1995): es el foro global de reglas comerciales. Sus 164 países miembros negocian acuerdos, resuelven disputas y buscan reducir barreras al comercio. Es la institución central de la globalización económica.",
            en: "The WTO (replaced GATT in 1995): is the global forum for trade rules. Its 164 member countries negotiate agreements, resolve disputes and seek to reduce trade barriers. It is the central institution of economic globalization.",
          },
        },
        {
          id: "hu_ma_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los grandes eventos del mundo contemporáneo (post-Guerra Fría):",
            en: "Order the major events of the contemporary world (post-Cold War):",
          },
          options: [
              { es: "Primavera Árabe: revueltas en Túnez, Egipto, Libia (2010-11)", en: "Arab Spring: revolts in Tunisia, Egypt, Libya (2010-11)" },
              { es: "China supera a Japón como 2ª economía mundial (2010)", en: "China surpasses Japan as 2nd largest economy (2010)" },
              { es: "Atentados del 11-S y Guerra contra el Terror (2001)", en: "9/11 attacks and War on Terror (2001)" },
              { es: "Creación de la OMC y ampliación de la globalización (1995)", en: "Creation of WTO and expansion of globalization (1995)" },
              { es: "Disolución de la URSS — fin de la Guerra Fría (1991)", en: "Dissolution of the USSR — end of Cold War (1991)" },
            ],
          correctAnswer: ["4", "3", "2", "0", "1"],
          explanation: {
            es: "Orden: URSS disuelta (1991) → OMC/globalización (1995) → 11-S (2001) → Primavera Árabe (2010-11) → China 2ª economía (2010).",
            en: "Order: USSR dissolved (1991) → WTO/globalization (1995) → 9/11 (2001) → Arab Spring (2010-11) → China 2nd economy (2010).",
          },
        },
      ],
    },
    {
      id: "mundo-actual-l2",
      topicId: "mundo-actual",
      title: {
        es: "Tecnología, Cambio Climático y el Siglo XXI",
        en: "Technology, Climate Change and the 21st Century",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_ma_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "La 'revolución digital' transformó la sociedad mundial especialmente desde los años 90 con:",
            en: "The 'digital revolution' transformed global society especially since the 1990s with:",
          },
          options: [
              { es: "La masificación de internet, teléfonos inteligentes y redes sociales que cambiaron la comunicación, el trabajo y la política", en: "The mass adoption of internet, smartphones and social media that changed communication, work and politics" },
              { es: "La sustitución completa de los empleos industriales por robots", en: "The complete replacement of industrial jobs by robots" },
              { es: "La eliminación de las fronteras nacionales gracias a la tecnología", en: "The elimination of national borders through technology" },
              { es: "El control de gobiernos sobre la información global", en: "Government control over global information" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La revolución digital: internet masivo (90s), Google (1998), redes sociales (Facebook 2004, Twitter 2006), smartphones (iPhone 2007). Cambió el comercio (e-commerce), la comunicación, la educación, la política (Primavera Árabe) y la economía.",
            en: "The digital revolution: mass internet (90s), Google (1998), social media (Facebook 2004, Twitter 2006), smartphones (iPhone 2007). Changed commerce (e-commerce), communication, education, politics (Arab Spring) and the economy.",
          },
        },
        {
          id: "hu_ma_l2_q2",
          type: "true-false",
          prompt: {
            es: "El Acuerdo de París (2015) es un tratado internacional sobre cambio climático que busca limitar el calentamiento global a menos de 2°C respecto a niveles preindustriales.",
            en: "The Paris Agreement (2015) is an international treaty on climate change that aims to limit global warming to less than 2°C above pre-industrial levels.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Acuerdo de París (COP21, dic 2015): 196 países se comprometieron a limitar el calentamiento global a 1.5-2°C. Es el primer acuerdo climático universal y legalmente vinculante. EUA salió (Trump 2017) y re-ingresó (Biden 2021).",
            en: "Correct. The Paris Agreement (COP21, Dec 2015): 196 countries committed to limiting global warming to 1.5-2°C. It is the first universal and legally binding climate agreement. The USA withdrew (Trump 2017) and rejoined (Biden 2021).",
          },
        },
        {
          id: "hu_ma_l2_q3",
          type: "multiple-choice",
          prompt: {
            es: "La pandemia de COVID-19 (2020-2022) fue declarada pandemia global por la OMS en:",
            en: "The COVID-19 pandemic (2020-2022) was declared a global pandemic by the WHO on:",
          },
          options: [
              { es: "11 de marzo de 2020, cuando ya se extendía por más de 100 países", en: "March 11, 2020, when it had already spread to more than 100 countries" },
              { es: "31 de diciembre de 2019, cuando apareció el primer caso en China", en: "December 31, 2019, when the first case appeared in China" },
              { es: "1 de enero de 2020, con los primeros muertos reportados", en: "January 1, 2020, with the first reported deaths" },
              { es: "1 de abril de 2020, con el primer millón de contagios", en: "April 1, 2020, with the first million infections" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El primer caso oficial fue reportado en Wuhan, China (dic 2019). La OMS declaró pandemia el 11 mar 2020. Causó >6 millones de muertes oficiales, recesión global, y aceleró la digitalización del trabajo y la educación.",
            en: "The first official case was reported in Wuhan, China (Dec 2019). The WHO declared a pandemic on March 11, 2020. It caused >6 million official deaths, global recession, and accelerated the digitization of work and education.",
          },
        },
        {
          id: "hu_ma_l2_q4",
          type: "fill-blank",
          prompt: {
            es: "El protocolo que precede al Acuerdo de París, el Protocolo de ___ (1997), fue el primer tratado internacional vinculante sobre reducción de emisiones de gases de efecto invernadero.",
            en: "The protocol that preceded the Paris Agreement, the ___ Protocol (1997), was the first internationally binding treaty on reducing greenhouse gas emissions.",
          },
          correctAnswer: "Kioto",
          explanation: {
            es: "El Protocolo de Kioto (1997, en vigor 2005): primer tratado internacional con compromisos vinculantes de reducción de CO₂. Solo obligaba a países desarrollados. EUA nunca lo ratificó. El Acuerdo de París (2015) lo reemplazó con mayor alcance.",
            en: "The Kyoto Protocol (1997, in force 2005): first international treaty with binding CO₂ reduction commitments. Only obligated developed countries. The USA never ratified it. The Paris Agreement (2015) replaced it with broader scope.",
          },
        },
        {
          id: "hu_ma_l2_q5",
          type: "multiple-choice",
          prompt: {
            es: "El Brexit (2020) fue el proceso por el cual:",
            en: "Brexit (2020) was the process by which:",
          },
          options: [
              { es: "Reino Unido salió de la Unión Europea tras el referéndum de 2016 en que el 52% votó por la salida", en: "The United Kingdom left the European Union following the 2016 referendum in which 52% voted to leave" },
              { es: "Francia abandonó el euro como moneda oficial", en: "France abandoned the euro as official currency" },
              { es: "Escocia se independizó del Reino Unido", en: "Scotland became independent from the United Kingdom" },
              { es: "Alemania abandonó la OTAN", en: "Germany left NATO" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El referéndum de Brexit (23 jun 2016): 52% votó por abandonar la UE. Tras 3 años de caóticas negociaciones, el Reino Unido salió formalmente de la UE el 31 ene 2020 (UE-27 sin UK). Fue el mayor shock a la integración europea.",
            en: "The Brexit referendum (Jun 23, 2016): 52% voted to leave the EU. After 3 years of chaotic negotiations, the UK formally left the EU on January 31, 2020 (EU-27 without UK). It was the biggest shock to European integration.",
          },
        },
        {
          id: "hu_ma_l2_q6",
          type: "true-false",
          prompt: {
            es: "La invasión rusa de Ucrania en febrero de 2022 fue la mayor guerra en Europa desde la Segunda Guerra Mundial.",
            en: "The Russian invasion of Ukraine in February 2022 was the largest war in Europe since World War II.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El 24 feb 2022, Rusia lanzó una invasión a gran escala de Ucrania (ya había anexado Crimea en 2014). Fue la mayor guerra en Europa desde 1945, causó millones de desplazados y generó la mayor crisis de seguridad europea en décadas.",
            en: "Correct. On February 24, 2022, Russia launched a full-scale invasion of Ukraine (having already annexed Crimea in 2014). It was the largest war in Europe since 1945, caused millions of displaced people and generated the biggest European security crisis in decades.",
          },
        },
        {
          id: "hu_ma_l2_q7",
          type: "multiple-choice",
          prompt: {
            es: "Los Objetivos de Desarrollo Sostenible (ODS) aprobados por la ONU en 2015 incluyen 17 metas para el año:",
            en: "The Sustainable Development Goals (SDGs) approved by the UN in 2015 include 17 targets for the year:",
          },
          options: [
              { es: "2030, incluyendo eliminar la pobreza extrema, garantizar educación de calidad y acción por el clima", en: "2030, including ending extreme poverty, guaranteeing quality education and climate action" },
              { es: "2050, con énfasis solo en cambio climático", en: "2050, with emphasis only on climate change" },
              { es: "2020, como extensión del Protocolo de Kioto", en: "2020, as an extension of the Kyoto Protocol" },
              { es: "2025, con foco en economía digital", en: "2025, focused on digital economy" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Agenda 2030 (ODS): 17 objetivos y 169 metas adoptados por 193 países en sep 2015. Incluyen: fin de la pobreza, hambre cero, salud, educación, igualdad de género, energía limpia, acción climática, etc. Sustituyeron a los Objetivos del Milenio (2000-15).",
            en: "The 2030 Agenda (SDGs): 17 goals and 169 targets adopted by 193 countries in September 2015. They include: no poverty, zero hunger, health, education, gender equality, clean energy, climate action, etc. They replaced the Millennium Development Goals (2000-15).",
          },
        },
        {
          id: "hu_ma_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los hitos del mundo actual en el siglo XXI:",
            en: "Order the milestones of the contemporary world in the 21st century:",
          },
          options: [
              { es: "Pandemia COVID-19 — OMS declara pandemia global (mar 2020)", en: "COVID-19 Pandemic — WHO declares global pandemic (Mar 2020)" },
              { es: "Brexit — Reino Unido sale de la UE (ene 2020)", en: "Brexit — UK leaves the EU (Jan 2020)" },
              { es: "Acuerdo de París sobre cambio climático firmado (2015)", en: "Paris Agreement on climate change signed (2015)" },
              { es: "Invasión rusa de Ucrania a gran escala (feb 2022)", en: "Russian full-scale invasion of Ukraine (Feb 2022)" },
              { es: "Primavera Árabe — derrocamiento de Mubarak en Egipto (feb 2011)", en: "Arab Spring — overthrow of Mubarak in Egypt (Feb 2011)" },
            ],
          correctAnswer: ["4", "2", "1", "0", "3"],
          explanation: {
            es: "Orden: Primavera Árabe (2011) → Acuerdo París (2015) → Brexit (ene 2020) → COVID pandemia (mar 2020) → Invasión Ucrania (feb 2022).",
            en: "Order: Arab Spring (2011) → Paris Agreement (2015) → Brexit (Jan 2020) → COVID pandemic (Mar 2020) → Ukraine invasion (Feb 2022).",
          },
        },
      ],
    },
    {
      id: "mundo-actual-l3",
      topicId: "mundo-actual",
      title: {
        es: "Repaso: De la Guerra Fría al Mundo Contemporáneo",
        en: "Review: From the Cold War to the Contemporary World",
      },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_ma_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué actor no estatal (terrorista) fue responsable de los atentados del 11 de septiembre de 2001?",
            en: "Which non-state (terrorist) actor was responsible for the September 11, 2001 attacks?",
          },
          options: [
              { es: "Al-Qaeda, liderada por Osama Bin Laden", en: "Al-Qaeda, led by Osama Bin Laden" },
              { es: "El Estado Islámico (ISIS/DAESH)", en: "The Islamic State (ISIS/DAESH)" },
              { es: "Los Talibanes afganos", en: "The Afghan Taliban" },
              { es: "Hezbolá libanés", en: "Lebanese Hezbollah" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Al-Qaeda (la Base) fue fundada por Osama Bin Laden en 1988. Planeó y ejecutó los ataques del 11-S. EUA respondió invadiendo Afganistán (2001) para derrocar al régimen Talibán que albergaba a Al-Qaeda. Bin Laden murió en Paquistán (may 2011, operación SEAL).",
            en: "Al-Qaeda (The Base) was founded by Osama Bin Laden in 1988. It planned and executed the 9/11 attacks. The USA responded by invading Afghanistan (2001) to overthrow the Taliban regime that harbored Al-Qaeda. Bin Laden died in Pakistan (May 2011, SEAL operation).",
          },
        },
        {
          id: "hu_ma_l3_q2",
          type: "true-false",
          prompt: {
            es: "La guerra civil siria (iniciada en 2011) como parte de la Primavera Árabe provocó la mayor crisis de refugiados desde la Segunda Guerra Mundial.",
            en: "The Syrian civil war (started in 2011) as part of the Arab Spring caused the largest refugee crisis since World War II.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La guerra civil siria (2011-presente): causó ~6.6 millones de refugiados sirios en el exterior y ~6.9M de desplazados internos. La crisis de refugiados de 2015-16 en Europa fue la mayor desde la IIGM, con llegadas masivas a Grecia, Italia y Alemania.",
            en: "Correct. The Syrian civil war (2011-present): caused ~6.6 million Syrian refugees abroad and ~6.9M internal displaced. The 2015-16 refugee crisis in Europe was the largest since WWII, with mass arrivals in Greece, Italy and Germany.",
          },
        },
        {
          id: "hu_ma_l3_q3",
          type: "multiple-choice",
          prompt: {
            es: "La 'multipolaridad' del siglo XXI se refiere a que:",
            en: "'Multipolarity' in the 21st century refers to:",
          },
          options: [
              { es: "El poder mundial ya no lo tiene solo EUA, sino que se distribuye entre China, Rusia, la UE, India y otros centros de poder emergentes", en: "World power is no longer held only by the USA, but distributed among China, Russia, the EU, India and other emerging power centers" },
              { es: "Los países del Tercer Mundo dominan la política global", en: "Third World countries dominate global politics" },
              { es: "La ONU controla el orden mundial", en: "The UN controls world order" },
              { es: "Las empresas tecnológicas tienen más poder que los Estados", en: "Tech companies have more power than states" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La multipolaridad del siglo XXI: China (2ª economía, poder militar), Rusia (potencia nuclear, energética), UE (potencia comercial), India (1,400M de habitantes, crecimiento económico). Contrastan con la era unipolar (1991-2001) de hegemonía estadounidense.",
            en: "21st century multipolarity: China (2nd economy, military power), Russia (nuclear, energy power), EU (trade power), India (1.4B people, economic growth). They contrast with the unipolar era (1991-2001) of US hegemony.",
          },
        },
        {
          id: "hu_ma_l3_q4",
          type: "fill-blank",
          prompt: {
            es: "El movimiento de jóvenes por el clima liderado por la sueca Greta Thunberg desde 2018 fue llamado ___ por el Clima.",
            en: "The youth climate movement led by Swedish activist Greta Thunberg since 2018 was called ___ for the Climate.",
          },
          correctAnswer: "Fridays for Future / Viernes por el Futuro",
          explanation: {
            es: "Fridays for Future (Viernes por el Futuro): Greta Thunberg comenzó su 'huelga escolar por el clima' frente al Parlamento sueco en agosto 2018. El movimiento se globalizó: el 20 sep 2019 convocó huelgas en 161 países (~4M de participantes).",
            en: "Fridays for Future: Greta Thunberg began her 'school strike for climate' in front of the Swedish Parliament in August 2018. The movement went global: on September 20, 2019 it called strikes in 161 countries (~4M participants).",
          },
        },
        {
          id: "hu_ma_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "La inteligencia artificial (IA) como ChatGPT, lanzado en noviembre 2022, representa una nueva revolución tecnológica porque:",
            en: "Artificial intelligence (AI) like ChatGPT, launched in November 2022, represents a new technological revolution because:",
          },
          options: [
              { es: "Las máquinas pueden generar texto, imágenes y código con capacidades similares a las humanas, transformando economía y educación", en: "Machines can generate text, images and code with human-like capabilities, transforming economy and education" },
              { es: "Los robots reemplazarán completamente a los humanos en 2030", en: "Robots will completely replace humans by 2030" },
              { es: "Solo será útil para aplicaciones militares", en: "It will only be useful for military applications" },
              { es: "Su impacto se limita a países desarrollados", en: "Its impact is limited to developed countries" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La IA generativa (ChatGPT, DALL-E, Gemini): revolucionó la capacidad de procesar y generar lenguaje natural. Impacta: educación, trabajo creativo, programación, medicina, derecho. GPT-4 (mar 2023) pasó el bar de abogados y examen médico en EUA.",
            en: "Generative AI (ChatGPT, DALL-E, Gemini): revolutionized the ability to process and generate natural language. Impacts: education, creative work, programming, medicine, law. GPT-4 (Mar 2023) passed the bar exam and medical exam in the USA.",
          },
        },
        {
          id: "hu_ma_l3_q6",
          type: "true-false",
          prompt: {
            es: "Los BRICS (Brasil, Rusia, India, China y Sudáfrica) representan aproximadamente el 40% de la población mundial y el 25% del PIB global.",
            en: "The BRICS (Brazil, Russia, India, China and South Africa) represent approximately 40% of the world's population and 25% of global GDP.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Los BRICS (término acuñado por Goldman Sachs en 2001): grandes potencias emergentes. Juntos representan ~42% de la población mundial y ~26% del PIB global (2023). En 2024 se ampliaron: Arabia Saudí, Emiratos, Egipto, Etiopía e Irán se unieron.",
            en: "Correct. BRICS (term coined by Goldman Sachs in 2001): major emerging powers. Together they represent ~42% of the world's population and ~26% of global GDP (2023). In 2024 they expanded: Saudi Arabia, UAE, Egypt, Ethiopia and Iran joined.",
          },
        },
        {
          id: "hu_ma_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "El 'Fin de la Historia' fue la tesis del politólogo Francis Fukuyama (1992) que argumentaba que:",
            en: "The 'End of History' was the thesis of political scientist Francis Fukuyama (1992) who argued that:",
          },
          options: [
              { es: "Con el fin de la Guerra Fría, la democracia liberal y el capitalismo habían triunfado definitivamente como modelo universal", en: "With the end of the Cold War, liberal democracy and capitalism had triumphed definitively as the universal model" },
              { es: "La historia había terminado con la muerte de los principales líderes mundiales", en: "History had ended with the death of the main world leaders" },
              { es: "EUA dominaría el mundo para siempre", en: "The USA would dominate the world forever" },
              { es: "No habría más guerras en el mundo", en: "There would be no more wars in the world" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Fukuyama argumentó en '¿El fin de la Historia?' (1989, libro 1992) que el liberalismo democrático era el punto final de la evolución ideológica humana. La tesis fue cuestionada por el ascenso de China, el islamismo radical y el regreso de los autoritarismos.",
            en: "Fukuyama argued in 'The End of History?' (1989, book 1992) that democratic liberalism was the endpoint of human ideological evolution. The thesis was challenged by China's rise, radical Islamism and the return of authoritarianisms.",
          },
        },
        {
          id: "hu_ma_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los grandes procesos de integración económica global:",
            en: "Order the major global economic integration processes:",
          },
          options: [
              { es: "Fundación del Banco Mundial y FMI (Bretton Woods, 1944)", en: "Founding of the World Bank and IMF (Bretton Woods, 1944)" },
              { es: "TLCAN/NAFTA entra en vigor entre México, EUA y Canadá (1994)", en: "NAFTA/TLCAN enters into force between Mexico, USA and Canada (1994)" },
              { es: "Creación de la OMC y liberalización del comercio global (1995)", en: "Creation of the WTO and global trade liberalization (1995)" },
              { es: "Tratado de Maastricht y creación de la Unión Europea (1992)", en: "Maastricht Treaty and creation of the European Union (1992)" },
              { es: "Agenda 2030 y Objetivos de Desarrollo Sostenible — ONU (2015)", en: "2030 Agenda and Sustainable Development Goals — UN (2015)" },
            ],
          correctAnswer: ["0", "3", "1", "2", "4"],
          explanation: {
            es: "Orden: Bretton Woods/FMI (1944) → Maastricht/UE (1992) → TLCAN/NAFTA (1994) → OMC (1995) → ODS 2030 (2015).",
            en: "Order: Bretton Woods/IMF (1944) → Maastricht/EU (1992) → NAFTA/TLCAN (1994) → WTO (1995) → SDGs 2030 (2015).",
          },
        },
      ],
    },
  ],
};
