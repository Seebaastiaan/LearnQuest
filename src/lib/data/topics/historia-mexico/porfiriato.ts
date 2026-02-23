import { Topic } from "@/lib/types";

export const porfiriatoTopic: Topic = {
  id: "porfiriato",
  subjectId: "historia-mexico",
  title: { es: "El Porfiriato", en: "The Porfiriato" },
  description: { es: "El régimen de Porfirio Díaz (1876-1911): modernización, dictadura y desigualdad.", en: "Porfirio Díaz's regime (1876-1911): modernization, dictatorship, and inequality." },
  order: 5,
  color: "text-red-600",
  icon: "landmark",
  bgGradient: "from-red-500 to-rose-600",
  lessons: [
    {
      id: "porfiriato-l1",
      topicId: "porfiriato",
      title: { es: "El Proyecto Modernizador de Díaz", en: "Díaz's Modernization Project" },
      type: "learn",
      order: 1,
      questions: [
        {
          id: "hm_po_001",
          type: "multiple-choice",
          prompt: { es: "¿Cuántos años gobernó Porfirio Díaz México ininterrumpidamente (sin contar el período de Manuel González)?", en: "How many years did Porfirio Díaz govern Mexico without interruption (not counting Manuel González's period)?" },
          options: [
              { es: "Aproximadamente 30 años (1876-1911)", en: "Approximately 30 years (1876-1911)" },
              { es: "10 años", en: "10 years" },
              { es: "20 años", en: "20 years" },
              { es: "50 años", en: "50 years" },
            ],
          correctAnswer: "0",
          explanation: { es: "Díaz gobernó de 1876 a 1880, cedió el poder a Manuel González (1880-1884) y regresó para gobernar de 1884 a 1911, sumando aproximadamente 30 años de dominio político.", en: "Díaz governed from 1876 to 1880, handed power to Manuel González (1880-1884), and returned to govern from 1884 to 1911, totaling approximately 30 years of political dominance." }
        },
        {
          id: "hm_po_002",
          type: "true-false",
          prompt: { es: "El lema del Porfiriato fue 'Orden y Progreso', reflejando la influencia del positivismo en su gobierno.", en: "The motto of the Porfiriato was 'Order and Progress', reflecting the influence of positivism on his government." },
          correctAnswer: "true",
          explanation: { es: "El Porfiriato adoptó el positivismo de Auguste Comte ('Orden, Progreso y Amor') como filosofía de Estado, representada por los 'Científicos' (tecnocracia porfiriana). El lema aparece en la bandera brasileña, pero la filosofía fue la misma en México.", en: "The Porfiriato adopted Auguste Comte's positivism ('Order, Progress, and Love') as state philosophy, represented by the 'Científicos' (Porfirian technocracy). The motto appears on the Brazilian flag, but the philosophy was the same in Mexico." }
        },
        {
          id: "hm_po_003",
          type: "multiple-choice",
          prompt: { es: "¿Cuántos kilómetros de vías de ferrocarril se construyeron aproximadamente durante el Porfiriato?", en: "Approximately how many kilometers of railway tracks were built during the Porfiriato?" },
          options: [
              { es: "20,000 km", en: "20,000 km" },
              { es: "5,000 km", en: "5,000 km" },
              { es: "50,000 km", en: "50,000 km" },
              { es: "1,000 km", en: "1,000 km" },
            ],
          correctAnswer: "0",
          explanation: { es: "Durante el Porfiriato se construyeron aproximadamente 20,000 km de vías férreas (de menos de 700 km en 1876), conectando el centro del país con la frontera norte y los puertos, impulsando la economía de exportación.", en: "During the Porfiriato, approximately 20,000 km of railway tracks were built (from less than 700 km in 1876), connecting the country's center with the northern border and ports, boosting the export economy." }
        },
        {
          id: "hm_po_004",
          type: "fill-blank",
          prompt: { es: "Los asesores técnicos del gobierno de Díaz, influenciados por el positivismo, eran conocidos como los '_____'.", en: "The technical advisors of Díaz's government, influenced by positivism, were known as the '_____'." },
          correctAnswer: "Científicos",
          explanation: { es: "Los 'Científicos', liderados por José Yves Limantour (Secretario de Hacienda), eran la élite tecnocrática porfiriana que aplicaba el positivismo para justificar el control autoritario como necesario para el 'progreso'.", en: "The 'Científicos', led by José Yves Limantour (Secretary of Finance), were the Porfirian technocratic elite that applied positivism to justify authoritarian control as necessary for 'progress'." }
        },
        {
          id: "hm_po_005",
          type: "multiple-choice",
          prompt: { es: "¿Qué tipo de inversión extranjera dominó la economía mexicana durante el Porfiriato?", en: "What type of foreign investment dominated the Mexican economy during the Porfiriato?" },
          options: [
              { es: "Inversión en minería, petróleo y ferrocarriles (principalmente de EUA e Inglaterra)", en: "Investment in mining, oil, and railways (mainly from USA and England)" },
              { es: "Inversión en agricultura familiar", en: "Investment in family agriculture" },
              { es: "Tecnología francesa para la industria textil", en: "French technology for the textile industry" },
              { es: "Capital alemán en la banca", en: "German capital in banking" },
            ],
          correctAnswer: "0",
          explanation: { es: "EUA dominó la inversión en ferrocarriles y minería; Gran Bretaña en petróleo y minería; Francia en banca y comercio. Esta dependencia del capital extranjero fue criticada por los revolucionarios de 1910.", en: "The USA dominated investment in railways and mining; Great Britain in oil and mining; France in banking and commerce. This dependence on foreign capital was criticized by the revolutionaries of 1910." }
        },
        {
          id: "hm_po_006",
          type: "true-false",
          prompt: { es: "Las tiendas de raya del Porfiriato funcionaban como un sistema de crédito que mantenía a los trabajadores rurales en deuda permanente.", en: "The 'tiendas de raya' of the Porfiriato functioned as a credit system that kept rural workers in permanent debt." },
          correctAnswer: "true",
          explanation: { es: "Las tiendas de raya eran comercios de las haciendas que vendían a crédito descontado del salario. Los trabajadores se endeudaban y la deuda se heredaba a los hijos, creando servidumbre por deudas.", en: "The 'tiendas de raya' were hacienda stores that sold on credit deducted from wages. Workers went into debt, and the debt was inherited by children, creating debt servitude." }
        },
        {
          id: "hm_po_007",
          type: "multiple-choice",
          prompt: { es: "¿Qué política agraria del Porfiriato despojó a los pueblos indígenas de sus tierras comunales?", en: "What agrarian policy of the Porfiriato dispossessed indigenous communities of their communal lands?" },
          options: [
              { es: "La Ley de Terrenos Baldíos y las compañías deslindadoras", en: "The Vacant Lands Law and surveying companies" },
              { es: "La Ley Lerdo de 1856", en: "The Lerdo Law of 1856" },
              { es: "El Plan de Ayutla", en: "The Plan of Ayutla" },
              { es: "La Ley de Ejidos", en: "The Ejido Law" },
            ],
          correctAnswer: "0",
          explanation: { es: "La Ley de Terrenos Baldíos (1883) permitió a compañías deslindadoras declarar 'baldías' las tierras indígenas comunales (sin títulos individuales formales) y adjudicárselas o venderlas a latifundistas.", en: "The Vacant Lands Law (1883) allowed surveying companies to declare indigenous communal lands 'vacant' (without formal individual titles) and appropriate or sell them to large landowners." }
        },
        {
          id: "hm_po_008",
          type: "order-steps",
          prompt: { es: "Ordena los elementos del modelo económico porfiriano:", en: "Order the elements of the Porfirian economic model:" },
          options: [
              { es: "Inversión extranjera en ferrocarriles, minería y petróleo", en: "Foreign investment in railways, mining, and oil" },
              { es: "Construcción de infraestructura (puertos, telégrafos)", en: "Infrastructure construction (ports, telegraphs)" },
              { es: "Exportación de materias primas (plata, henequén, café)", en: "Export of raw materials (silver, henequen, coffee)" },
              { es: "Concentración de riqueza en élite y latifundios", en: "Concentration of wealth in elite and large estates" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "El modelo porfiriano: inversión extranjera → infraestructura → exportación de materias primas → riqueza concentrada en élite porfiriana y extranjeros, excluyendo a la mayoría de mexicanos.", en: "The Porfirian model: foreign investment → infrastructure → export of raw materials → wealth concentrated in Porfirian elite and foreigners, excluding most Mexicans." }
        }
      ]
    },
    {
      id: "porfiriato-l2",
      topicId: "porfiriato",
      title: { es: "Represión, Resistencia y Crisis del Porfiriato", en: "Repression, Resistance, and Crisis of the Porfiriato" },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hm_po_009",
          type: "multiple-choice",
          prompt: { es: "¿En qué año ocurrió la huelga minera de Cananea, considerada un antecedente de la Revolución Mexicana?", en: "In what year did the Cananea mining strike occur, considered a precursor to the Mexican Revolution?" },
          options: [
              { es: "1906", en: "1906" },
              { es: "1900", en: "1900" },
              { es: "1910", en: "1910" },
              { es: "1903", en: "1903" },
            ],
          correctAnswer: "0",
          explanation: { es: "La huelga de Cananea (1906) en Sonora fue contra la empresa minera estadounidense CCCC (Consolidated Copper Company). Los mineros pedían igual salario que los trabajadores angloamericanos. Fue reprimida con aid of Arizona Rangers y tropas federales.", en: "The Cananea strike (1906) in Sonora was against the American mining company CCCC (Consolidated Copper Company). Miners demanded equal wages as Anglo-American workers. It was repressed with the help of Arizona Rangers and federal troops." }
        },
        {
          id: "hm_po_010",
          type: "true-false",
          prompt: { es: "Ricardo Flores Magón fundó el Partido Liberal Mexicano (PLM) que influyó en la ideología de la Revolución Mexicana.", en: "Ricardo Flores Magón founded the Mexican Liberal Party (PLM) that influenced the ideology of the Mexican Revolution." },
          correctAnswer: "true",
          explanation: { es: "Ricardo Flores Magón y el PLM publicaron el periódico 'Regeneración' desde EUA (exiliados), difundiendo ideas anarquistas y de reforma social que influyeron a los trabajadores y prepararon el terreno ideológico para la Revolución.", en: "Ricardo Flores Magón and the PLM published the newspaper 'Regeneración' from the USA (in exile), spreading anarchist and social reform ideas that influenced workers and prepared the ideological ground for the Revolution." }
        },
        {
          id: "hm_po_011",
          type: "multiple-choice",
          prompt: { es: "La huelga textil de Río Blanco (1907) en Veracruz fue reprimida causando:", en: "The Río Blanco textile strike (1907) in Veracruz was repressed causing:" },
          options: [
              { es: "Cientos de muertos entre los trabajadores huelguistas", en: "Hundreds of deaths among striking workers" },
              { es: "La caída del gobierno de Díaz", en: "The fall of Díaz's government" },
              { es: "Mejoras salariales para los trabajadores", en: "Wage improvements for workers" },
              { es: "La creación del sindicato textil nacional", en: "The creation of the national textile union" },
            ],
          correctAnswer: "0",
          explanation: { es: "La huelga de Río Blanco (7 de enero de 1907) fue brutalmente reprimida por el ejército. Junto con Cananea (1906), es un símbolo de la represión obrera del Porfiriato y antecedente de la Revolución.", en: "The Río Blanco strike (January 7, 1907) was brutally repressed by the army. Together with Cananea (1906), it is a symbol of Porfirian labor repression and a precursor to the Revolution." }
        },
        {
          id: "hm_po_012",
          type: "fill-blank",
          prompt: { es: "En 1908, Porfirio Díaz concedió una entrevista al periodista James _____ donde declaró que México estaba listo para la democracia.", en: "In 1908, Porfirio Díaz gave an interview to journalist James _____ where he declared that Mexico was ready for democracy." },
          correctAnswer: "Creelman",
          explanation: { es: "La Entrevista Creelman (1908) fue un error político de Díaz. Al decir que México estaba listo para elecciones libres, despertó expectativas democráticas que no pensaba cumplir, alentando la candidatura de Francisco I. Madero.", en: "The Creelman Interview (1908) was a political miscalculation by Díaz. By saying Mexico was ready for free elections, he awakened democratic expectations he had no intention of fulfilling, encouraging Francisco I. Madero's candidacy." }
        },
        {
          id: "hm_po_013",
          type: "multiple-choice",
          prompt: { es: "¿Qué institución represiva del Porfiriato mantenía el orden en el campo mediante métodos brutales?", en: "What repressive institution of the Porfiriato maintained order in the countryside through brutal methods?" },
          options: [
              { es: "Los rurales (Cuerpo Rural de la Federación)", en: "The rurales (Rural Corps of the Federation)" },
              { es: "El ejército constitucionalista", en: "The constitutionalist army" },
              { es: "La gendarmería colonial", en: "The colonial gendarmerie" },
              { es: "Los acordados", en: "The acordados" },
            ],
          correctAnswer: "0",
          explanation: { es: "Los 'rurales' eran una fuerza policial rural creada por Juárez y expandida por Díaz. Usaban la 'ley fuga' (disparar a presos supuestamente fugados) para eliminar opositores sin juicio.", en: "The 'rurales' were a rural police force created by Juárez and expanded by Díaz. They used the 'ley fuga' (shooting prisoners supposedly fleeing) to eliminate opponents without trial." }
        },
        {
          id: "hm_po_014",
          type: "true-false",
          prompt: { es: "El Porfiriato logró industrializar a México al punto de que la manufactura superó a la agricultura en el PIB.", en: "The Porfiriato industrialized Mexico to the point that manufacturing surpassed agriculture in GDP." },
          correctAnswer: "false",
          explanation: { es: "México bajo Díaz siguió siendo fundamentalmente agrario y exportador de materias primas. La industrialización fue incipiente y concentrada en textiles. La economía dependía de la exportación de plata, cobre, henequén, café y petróleo.", en: "Mexico under Díaz remained fundamentally agrarian and an exporter of raw materials. Industrialization was incipient and concentrated in textiles. The economy depended on the export of silver, copper, henequen, coffee, and oil." }
        },
        {
          id: "hm_po_015",
          type: "multiple-choice",
          prompt: { es: "Según el censo de 1910, aproximadamente qué porcentaje de la población mexicana era analfabeta?", en: "According to the 1910 census, approximately what percentage of the Mexican population was illiterate?" },
          options: [
              { es: "80%", en: "80%" },
              { es: "40%", en: "40%" },
              { es: "60%", en: "60%" },
              { es: "20%", en: "20%" },
            ],
          correctAnswer: "0",
          explanation: { es: "A pesar del discurso modernizador del Porfiriato, en 1910 aproximadamente el 80% de la población era analfabeta. La educación básica seguía siendo inaccesible para la mayoría de mexicanos, especialmente los rurales.", en: "Despite the Porfiriato's modernizing discourse, in 1910 approximately 80% of the population was illiterate. Basic education remained inaccessible to most Mexicans, especially rural ones." }
        },
        {
          id: "hm_po_016",
          type: "order-steps",
          prompt: { es: "Ordena los factores que llevaron al estallido de la Revolución Mexicana en 1910:", en: "Order the factors that led to the outbreak of the Mexican Revolution in 1910:" },
          options: [
              { es: "Crisis económica de 1907-1908 (recesión mundial)", en: "Economic crisis of 1907-1908 (world recession)" },
              { es: "Entrevista Creelman y candidatura de Madero (1908-1910)", en: "Creelman Interview and Madero's candidacy (1908-1910)" },
              { es: "Encarcelamiento de Madero y elecciones fraudulentas de 1910", en: "Madero's imprisonment and fraudulent elections of 1910" },
              { es: "Plan de San Luis y llamado a la revolución (noviembre 1910)", en: "Plan of San Luis and call to revolution (November 1910)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "La crisis económica debilitó al régimen; la entrevista Creelman abrió expectativas democráticas; las elecciones fraudulentas traicionaron esas esperanzas; el Plan de San Luis fue el detonador de la Revolución.", en: "The economic crisis weakened the regime; the Creelman interview opened democratic expectations; the fraudulent elections betrayed those hopes; the Plan of San Luis was the trigger of the Revolution." }
        }
      ]
    },
    {
      id: "porfiriato-l3",
      topicId: "porfiriato",
      title: { es: "Cultura y Sociedad Porfiriana", en: "Porfirian Culture and Society" },
      type: "quiz",
      order: 3,
      questions: [
        {
          id: "hm_po_017",
          type: "multiple-choice",
          prompt: { es: "¿Qué estilo arquitectónico dominó las construcciones del Porfiriato como el Palacio de Bellas Artes?", en: "What architectural style dominated Porfiriato constructions like the Palace of Fine Arts?" },
          options: [
              { es: "Eclecticismo europeo (neoclásico, art nouveau)", en: "European eclecticism (neoclassical, art nouveau)" },
              { es: "Estilo colonial mexicano", en: "Mexican colonial style" },
              { es: "Arquitectura prehispánica", en: "Pre-Hispanic architecture" },
              { es: "Modernismo racionalista", en: "Rationalist modernism" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Porfiriato promovió la arquitectura europea como símbolo de modernidad. El Palacio de Bellas Artes (iniciado en 1904 por Adamo Boari) combina art nouveau y neoclásico. El 'afrancesamiento' fue la tendencia cultural dominante.", en: "The Porfiriato promoted European architecture as a symbol of modernity. The Palace of Fine Arts (begun in 1904 by Adamo Boari) combines art nouveau and neoclassical styles. 'Afrancesamiento' (Frenchification) was the dominant cultural trend." }
        },
        {
          id: "hm_po_018",
          type: "true-false",
          prompt: { es: "El sistema educativo porfiriano erradicó el analfabetismo en las ciudades aunque no en las zonas rurales.", en: "The Porfirian educational system eradicated illiteracy in cities even though not in rural areas." },
          correctAnswer: "false",
          explanation: { es: "El analfabetismo persistía en ciudades y campo. Aunque Justo Sierra como Ministro de Instrucción Pública modernizó la educación universitaria (fundó la UNAM en 1910), la educación básica llegaba a muy pocos.", en: "Illiteracy persisted in cities and countryside. Although Justo Sierra as Minister of Public Instruction modernized university education (founded UNAM in 1910), basic education reached very few." }
        },
        {
          id: "hm_po_019",
          type: "multiple-choice",
          prompt: { es: "¿Qué poeta modernista mexicano, autor de 'Nocturno', criticó implícitamente al Porfiriato con su obra?", en: "What Mexican modernist poet, author of 'Nocturno', implicitly criticized the Porfiriato with his work?" },
          options: [
              { es: "Manuel Gutiérrez Nájera y Manuel José Othón", en: "Manuel Gutiérrez Nájera and Manuel José Othón" },
              { es: "Amado Nervo", en: "Amado Nervo" },
              { es: "Ramón López Velarde", en: "Ramón López Velarde" },
              { es: "Salvador Díaz Mirón", en: "Salvador Díaz Mirón" },
            ],
          correctAnswer: "0",
          explanation: { es: "El modernismo literario del Porfiriato (Gutiérrez Nájera, Othón, Díaz Mirón) reflejó la dicotomía entre el brillo superficial de la élite y la realidad de miseria de la mayoría. Amado Nervo también fue figura central.", en: "The Porfirian literary modernism (Gutiérrez Nájera, Othón, Díaz Mirón) reflected the dichotomy between the superficial glamour of the elite and the reality of misery for the majority. Amado Nervo was also a central figure." }
        },
        {
          id: "hm_po_020",
          type: "fill-blank",
          prompt: { es: "La Universidad Nacional de México, hoy UNAM, fue fundada en _____ durante el centenario de la Independencia.", en: "The National University of Mexico, today's UNAM, was founded in _____ during the centennial of Independence." },
          correctAnswer: "1910",
          explanation: { es: "Justo Sierra, Ministro de Instrucción Pública, fundó la Universidad Nacional de México el 22 de septiembre de 1910, un mes antes del estallido de la Revolución. La autonomía universitaria fue concedida en 1929.", en: "Justo Sierra, Minister of Public Instruction, founded the National University of Mexico on September 22, 1910, a month before the Revolution broke out. University autonomy was granted in 1929." }
        },
        {
          id: "hm_po_021",
          type: "multiple-choice",
          prompt: { es: "¿Cómo era la estructura social del Porfiriato?", en: "What was the social structure of the Porfiriato?" },
          options: [
              { es: "Altamente estratificada: élite porfirina en la cúspide, clase media reducida, enorme masa campesina y obrera empobrecida", en: "Highly stratified: Porfirian elite at the top, small middle class, enormous impoverished peasant and worker mass" },
              { es: "Relativamente igualitaria gracias al crecimiento económico", en: "Relatively egalitarian thanks to economic growth" },
              { es: "Dominada por una clase media próspera", en: "Dominated by a prosperous middle class" },
              { es: "Sin diferencias entre criollos e indígenas", en: "Without differences between Creoles and Indigenous peoples" },
            ],
          correctAnswer: "0",
          explanation: { es: "La sociedad porfiriana era extremadamente desigual: ca. 1% de familias poseía el 97% de la tierra; el 80% de la población eran campesinos sin tierras que vivían en condiciones de semi-esclavitud.", en: "Porfirian society was extremely unequal: approximately 1% of families owned 97% of the land; 80% of the population were landless peasants living in semi-slavery conditions." }
        },
        {
          id: "hm_po_022",
          type: "true-false",
          prompt: { es: "El Porfiriato fue el período en que México descubrió y comenzó a explotar sus yacimientos petroleros.", en: "The Porfiriato was the period in which Mexico discovered and began to exploit its oil deposits." },
          correctAnswer: "true",
          explanation: { es: "El petróleo mexicano fue explotado principalmente por compañías inglesas (El Águila, de Weetman Pearson) y estadounidenses. En 1910 México era el tercer mayor productor de petróleo del mundo.", en: "Mexican oil was exploited mainly by British (El Águila, of Weetman Pearson) and American companies. In 1910 Mexico was the third largest oil producer in the world." }
        },
        {
          id: "hm_po_023",
          type: "multiple-choice",
          prompt: { es: "¿Qué slogan resumía la política represiva de Porfirio Díaz hacia sus opositores?", en: "What slogan summarized Porfirio Díaz's repressive policy toward his opponents?" },
          options: [
              { es: "'Mátalos en caliente' / 'Pan o palo'", en: "'Kill them hot' / 'Bread or stick'" },
              { es: "'Primero el progreso, luego la justicia'", en: "'Progress first, justice later'" },
              { es: "'La ley o la muerte'", en: "'The law or death'" },
              { es: "'El que mueve, no sale en la foto'", en: "'Whoever moves, doesn't appear in the photo'" },
            ],
          correctAnswer: "0",
          explanation: { es: "'Mátalos en caliente' (1879) fue la instrucción de Díaz para ejecutar sin juicio a los partidarios del movimiento de Tuxtepec. 'Pan o palo' (pán para los aliados, palo para los opositores) resumía su sistema político.", en: "'Kill them hot' (1879) was Díaz's instruction to execute without trial the supporters of the Tuxtepec movement. 'Bread or stick' (bread for allies, stick for opponents) summarized his political system." }
        },
        {
          id: "hm_po_024",
          type: "order-steps",
          prompt: { es: "Ordena los principales grupos sociales del Porfiriato de mayor a menor poder:", en: "Order the main social groups of the Porfiriato from most to least powerful:" },
          options: [
              { es: "Élite porfiriana ('Científicos'), hacendados y empresarios extranjeros", en: "Porfirian elite ('Científicos'), hacendados and foreign businessmen" },
              { es: "Clase media urbana (comerciantes, profesionistas, burocracia)", en: "Urban middle class (merchants, professionals, bureaucracy)" },
              { es: "Obreros industriales y artesanos urbanos", en: "Industrial workers and urban artisans" },
              { es: "Campesinos indígenas y mestizos (peones y jornaleros)", en: "Indigenous and mestizo peasants (peons and day laborers)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "La pirámide social porfiriana: élite en la cima (poder político y económico), clase media moderada (beneficiaria del crecimiento), obreros (sin derechos laborales), y campesinos en la base (sin tierras, sin voz).", en: "The Porfirian social pyramid: elite at the top (political and economic power), moderate middle class (beneficiary of growth), workers (without labor rights), and peasants at the base (landless, voiceless)." }
        }
      ]
    }
  ]
};
