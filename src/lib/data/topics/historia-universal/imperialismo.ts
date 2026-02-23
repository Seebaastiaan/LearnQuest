import type { Topic } from "@/lib/types/topic";

export const imperialismoTopic: Topic = {
  id: "imperialismo",
  subjectId: "historia-universal",
  title: {
    es: "El Imperialismo y la Segunda Revolución Industrial",
    en: "Imperialism and the Second Industrial Revolution",
  },
  description: {
    es: "La Segunda Revolución Industrial, el reparto de África y Asia, y el imperialismo europeo.",
    en: "The Second Industrial Revolution, partition of Africa and Asia, and European imperialism.",
  },
  order: 4,
  color: "amber",
  icon: "Globe2",
  bgGradient: "bg-linear-to-br from-yellow-500 to-orange-500",
  lessons: [
    {
      id: "imperialismo-l1",
      topicId: "imperialismo",
      title: {
        es: "La Segunda Revolución Industrial",
        en: "The Second Industrial Revolution",
      },
      type: "learn",
      order: 1,
      content: {
        es: "La Segunda Revolución Industrial (1870-1914) introdujo el acero, el petróleo, la electricidad y el motor de combustión interna. Surgieron los monopolios y el capital financiero. El imperialismo llevó a las potencias europeas a repartirse África en la Conferencia de Berlín (1884-85). Las justificaciones incluían la 'misión civilizadora' y el darwinismo social de Herbert Spencer.",
        en: "The Second Industrial Revolution (1870-1914) introduced steel, oil, electricity and the internal combustion engine.",
      },
      questions: [
        {
          id: "hu_imp_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la principal diferencia entre la Primera y Segunda Revolución Industrial?",
            en: "What was the main difference between the First and Second Industrial Revolution?",
          },
          options: [
              { es: "La Segunda incorporó electricidad, acero, petróleo y química; la Primera se basó en carbón y vapor", en: "The Second incorporated electricity, steel, oil and chemistry; the First was based on coal and steam" },
              { es: "La Segunda fue solo en países coloniales", en: "The Second was only in colonial countries" },
              { es: "La Primera fue más tecnológica que la Segunda", en: "The First was more technological than the Second" },
              { es: "No hubo diferencias significativas entre ambas", en: "There were no significant differences between them" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Primera Rev. Industrial (1760-1840) se basó en el vapor y el carbón. La Segunda (1870-1914) introdujo la electricidad (Edison/Tesla), el acero (Bessemer), el petróleo y el motor de combustión interna.",
            en: "The First Industrial Revolution (1760-1840) was based on steam and coal. The Second (1870-1914) introduced electricity (Edison/Tesla), steel (Bessemer), oil and the internal combustion engine.",
          },
        },
        {
          id: "hu_imp_l1_q2",
          type: "multiple-choice",
          prompt: {
            es: "La Conferencia de Berlín (1884-1885) fue significativa porque:",
            en: "The Berlin Conference (1884-1885) was significant because:",
          },
          options: [
              { es: "Las potencias europeas se repartieron África sin considerar a sus pueblos nativos", en: "European powers divided up Africa without considering its native peoples" },
              { es: "Estableció la paz entre Francia y Alemania", en: "It established peace between France and Germany" },
              { es: "África logró su independencia de Europa", en: "Africa achieved independence from Europe" },
              { es: "Se fundó la Liga de las Naciones", en: "The League of Nations was founded" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "En la Conferencia de Berlín (1884-85), 14 potencias europeas se repartieron África trazando fronteras artificiales, sin consultar a las poblaciones africanas. Para 1914, el 90% de África estaba colonizado.",
            en: "At the Berlin Conference (1884-85), 14 European powers divided Africa drawing artificial borders, without consulting African populations. By 1914, 90% of Africa was colonized.",
          },
        },
        {
          id: "hu_imp_l1_q3",
          type: "true-false",
          prompt: {
            es: "El darwinismo social aplicó las ideas de Darwin sobre la selección natural a las sociedades humanas para justificar la dominación de pueblos 'inferiores'.",
            en: "Social Darwinism applied Darwin's ideas about natural selection to human societies to justify the domination of 'inferior' peoples.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El darwinismo social (Herbert Spencer) distorsionó la teoría de Darwin para afirmar que las razas y naciones 'más fuertes' tenían derecho a dominar a las 'más débiles'. Fue ideología legitimadora del imperialismo.",
            en: "Correct. Social Darwinism (Herbert Spencer) distorted Darwin's theory to claim that 'stronger' races and nations had the right to dominate 'weaker' ones. It was the legitimizing ideology of imperialism.",
          },
        },
        {
          id: "hu_imp_l1_q4",
          type: "fill-blank",
          prompt: {
            es: "La carrera por dominar el Imperio Chino entre las potencias europeas y Japón a finales del siglo XIX se conoce como la política de las 'esferas de ___'.",
            en: "The race to dominate the Chinese Empire among European powers and Japan in the late 19th century is known as the policy of '___ of influence'.",
          },
          correctAnswer: "influencia",
          explanation: {
            es: "Las esferas de influencia en China dividieron el territorio chino en zonas controladas por potencias imperialistas (Gran Bretaña, Francia, Alemania, Rusia, Japón, EUA), sin conquistar formalmente el país.",
            en: "Spheres of influence in China divided Chinese territory into zones controlled by imperialist powers (Britain, France, Germany, Russia, Japan, USA), without formally conquering the country.",
          },
        },
        {
          id: "hu_imp_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál país fue la principal potencia imperial en India durante el siglo XIX?",
            en: "Which country was the main imperial power in India during the 19th century?",
          },
          options: [
              { es: "Gran Bretaña", en: "Great Britain" },
              { es: "Francia", en: "France" },
              { es: "Portugal", en: "Portugal" },
              { es: "Países Bajos", en: "Netherlands" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Gran Bretaña dominó India ('la joya de la Corona'). Tras el Motín de los Cipayos (1857), la Corona Británica asumió el control directo, creando el Imperio Indio hasta 1947.",
            en: "Great Britain dominated India ('the jewel of the Crown'). After the Sepoy Mutiny (1857), the British Crown took direct control, creating the Indian Empire until 1947.",
          },
        },
        {
          id: "hu_imp_l1_q6",
          type: "multiple-choice",
          prompt: {
            es: "Los monopolios y oligopolios industriales que surgieron durante la Segunda Revolución Industrial son conocidos como:",
            en: "Industrial monopolies and oligopolies that emerged during the Second Industrial Revolution are known as:",
          },
          options: [
              { es: "Cárteles, trusts y holdings", en: "Cartels, trusts and holdings" },
              { es: "Gremios medievales", en: "Medieval guilds" },
              { es: "Cooperativas obreras", en: "Workers' cooperatives" },
              { es: "Sindicatos patronales", en: "Employer unions" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los cárteles (acuerdos de precios), trusts (fusión de empresas) y holdings (control accionario) fueron las formas organizativas del capitalismo monopolista de finales del siglo XIX.",
            en: "Cartels (price agreements), trusts (company mergers) and holdings (share control) were the organizational forms of late 19th-century monopoly capitalism.",
          },
        },
        {
          id: "hu_imp_l1_q7",
          type: "true-false",
          prompt: {
            es: "Etiopía y Liberia fueron los únicos países africanos que mantuvieron su independencia durante el reparto imperialista de África.",
            en: "Ethiopia and Liberia were the only African countries that maintained their independence during the imperialist partition of Africa.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Etiopía (tras derrotar a Italia en Adua, 1896) y Liberia (fundada por esclavos liberados bajo protección de EUA) fueron los únicos estados africanos que no fueron colonizados en el siglo XIX.",
            en: "Correct. Ethiopia (after defeating Italy at Adwa, 1896) and Liberia (founded by freed slaves under US protection) were the only African states not colonized in the 19th century.",
          },
        },
        {
          id: "hu_imp_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estas características del imperialismo del siglo XIX de causa a consecuencia:",
            en: "Order these characteristics of 19th-century imperialism from cause to consequence:",
          },
          options: [
              { es: "Tensiones entre potencias por territorios → semillas de la I GM", en: "Tensions between powers over territories → seeds of WWI" },
              { es: "Segunda Rev. Industrial: necesidad de materias primas y mercados", en: "Second Industrial Revolution: need for raw materials and markets" },
              { es: "Conferencia de Berlín: reparto sistemático de África (1884)", en: "Berlin Conference: systematic partition of Africa (1884)" },
              { es: "Colonización y resistencia de pueblos africanos/asiáticos", en: "Colonization and resistance of African/Asian peoples" },
            ],
          correctAnswer: ["1", "2", "3", "0"],
          explanation: {
            es: "Cadena causal: Rev. Industrial → necesidad recursos → Conf. Berlín/colonización → resistencia → tensiones entre potencias → WWI.",
            en: "Causal chain: Industrial Revolution → resource needs → Berlin Conf./colonization → resistance → tensions between powers → WWI.",
          },
        },
      ],
    },
    {
      id: "imperialismo-l2",
      topicId: "imperialismo",
      title: {
        es: "Colonialismo y Resistencia",
        en: "Colonialism and Resistance",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_imp_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "La guerra hispano-estadounidense (1898) resultó en:",
            en: "The Spanish-American War (1898) resulted in:",
          },
          options: [
              { es: "EUA adquirió Cuba, Puerto Rico, Guam y Filipinas, marcando su emergencia como potencia imperial", en: "USA acquired Cuba, Puerto Rico, Guam and Philippines, marking its emergence as imperial power" },
              { es: "España recuperó sus colonias americanas", en: "Spain recovered its American colonies" },
              { es: "México reclamó Texas y California", en: "Mexico reclaimed Texas and California" },
              { es: "Filipinas fue independiente de inmediato", en: "Philippines became immediately independent" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La guerra de 1898 fue una derrota total de España: EUA obtuvo Cuba (protectorado), Puerto Rico, Guam y Filipinas. Marcó el debut de EUA como potencia imperial y el fin del Imperio Español.",
            en: "The 1898 war was a total Spanish defeat: USA obtained Cuba (protectorate), Puerto Rico, Guam and Philippines. It marked USA's debut as an imperial power and the end of the Spanish Empire.",
          },
        },
        {
          id: "hu_imp_l2_q2",
          type: "true-false",
          prompt: {
            es: "La Guerra de los Bóers (1899-1902) fue un conflicto entre Gran Bretaña y los colonos holandeses en Sudáfrica por el control de yacimientos de oro y diamantes.",
            en: "The Boer War (1899-1902) was a conflict between Britain and Dutch settlers in South Africa over control of gold and diamond deposits.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La Guerra de los Bóers (1899-1902) enfrentó al Imperio Británico contra los colonos holandeses (bóers: Transvaal y Estado Libre de Orange) por el control de las ricas minas de oro y diamantes de Sudáfrica.",
            en: "Correct. The Boer War (1899-1902) pitted the British Empire against Dutch settlers (Boers: Transvaal and Orange Free State) for control of South Africa's rich gold and diamond mines.",
          },
        },
        {
          id: "hu_imp_l2_q3",
          type: "multiple-choice",
          prompt: {
            es: "El Motín de los Cipayos (India, 1857) fue:",
            en: "The Sepoy Mutiny (India, 1857) was:",
          },
          options: [
              { es: "Una revuelta de soldados indios al servicio de la Compañía Británica de las Indias Orientales contra el dominio colonial", en: "A revolt of Indian soldiers serving the British East India Company against colonial rule" },
              { es: "Una revolución obrera en Calcuta", en: "A workers' revolution in Calcutta" },
              { es: "Una guerra entre India y Pakistán", en: "A war between India and Pakistan" },
              { es: "La primera guerra de independencia de India (que tuvo éxito)", en: "The first Indian independence war (which succeeded)" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Motín (o Gran Rebelión) de los Cipayos (1857) fue una revuelta de soldados indios contra la Compañía Británica de las Indias Orientales. Fue reprimido y llevó a la Corona Británica a asumir el control directo de India.",
            en: "The Sepoy Mutiny (or Great Rebellion, 1857) was a revolt of Indian soldiers against the British East India Company. It was suppressed and led the British Crown to assume direct control of India.",
          },
        },
        {
          id: "hu_imp_l2_q4",
          type: "fill-blank",
          prompt: {
            es: "La doctrina Monroe (1823) de EUA declaraba que América era para los ___ y se oponía a nuevas colonizaciones europeas.",
            en: "The Monroe Doctrine (1823) of the USA declared that America was for the ___ and opposed new European colonizations.",
          },
          correctAnswer: "americanos",
          explanation: {
            es: "La Doctrina Monroe ('América para los americanos', 1823) fue proclamada por el presidente James Monroe y advertía a las potencias europeas que no intervinieran en el hemisferio americano.",
            en: "The Monroe Doctrine ('America for Americans', 1823) was proclaimed by President James Monroe and warned European powers not to intervene in the American hemisphere.",
          },
        },
        {
          id: "hu_imp_l2_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes fue una consecuencia negativa del colonialismo para los pueblos africanos?",
            en: "Which of the following was a negative consequence of colonialism for African peoples?",
          },
          options: [
              { es: "Imposición de fronteras artificiales que dividieron tribus y grupos étnicos", en: "Imposition of artificial borders that divided tribes and ethnic groups" },
              { es: "Aumento de la autonomía política local", en: "Increase in local political autonomy" },
              { es: "Desarrollo de industrias propias independientes", en: "Development of independent local industries" },
              { es: "Fortalecimiento de las monarquías africanas tradicionales", en: "Strengthening of traditional African monarchies" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Las fronteras artificiales trazadas en la Conferencia de Berlín dividieron grupos étnicos y unidos a pueblos enemigos, creando conflictos que persisten hasta hoy en África.",
            en: "The artificial borders drawn at the Berlin Conference divided ethnic groups and united enemy peoples, creating conflicts that persist to this day in Africa.",
          },
        },
        {
          id: "hu_imp_l2_q6",
          type: "true-false",
          prompt: {
            es: "Japón pudo resistir el imperialismo occidental porque modernizó rápidamente su economía y ejército durante la Restauración Meiji (1868).",
            en: "Japan was able to resist Western imperialism because it rapidly modernized its economy and army during the Meiji Restoration (1868).",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La Restauración Meiji (1868) modernizó Japón a ritmo acelerado: industria occidental, ejército moderno, constitución (1889). Esto permitió a Japón resistir y luego convertirse en potencia imperial (Guerra Sino-Japonesa 1894, Ruso-Japonesa 1904).",
            en: "Correct. The Meiji Restoration (1868) rapidly modernized Japan: Western industry, modern army, constitution (1889). This allowed Japan to resist and then become an imperial power (Sino-Japanese War 1894, Russo-Japanese War 1904).",
          },
        },
        {
          id: "hu_imp_l2_q7",
          type: "multiple-choice",
          prompt: {
            es: "El concepto de 'la carga del hombre blanco' (Kipling, 1899) representaba:",
            en: "The concept of 'the white man's burden' (Kipling, 1899) represented:",
          },
          options: [
              { es: "La justificación ideológica del imperialismo como 'misión civilizadora' de los europeos hacia pueblos 'inferiores'", en: "The ideological justification of imperialism as 'civilizing mission' of Europeans toward 'inferior' peoples" },
              { es: "Una crítica socialista al imperialismo", en: "A socialist critique of imperialism" },
              { es: "Un llamado a la independencia de las colonias", en: "A call for colonial independence" },
              { es: "La denuncia de las condiciones laborales en las fábricas", en: "A denunciation of working conditions in factories" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "'La carga del hombre blanco' fue el poema de Rudyard Kipling que justificaba el imperialismo como una obligación moral de los europeos para 'civilizar' a los pueblos no occidentales. Fue ideología central del imperialismo.",
            en: "'The White Man's Burden' was Rudyard Kipling's poem justifying imperialism as a moral obligation of Europeans to 'civilize' non-Western peoples. It was central ideology of imperialism.",
          },
        },
        {
          id: "hu_imp_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estas potencias imperiales según el tamaño de su imperio en 1914 (de mayor a menor):",
            en: "Order these imperial powers by the size of their empire in 1914 (largest to smallest):",
          },
          options: [
              { es: "Francia (segundo mayor Imperio)", en: "France (second largest Empire)" },
              { es: "Gran Bretaña (mayor Imperio, ~33% del mundo)", en: "Great Britain (largest Empire, ~33% of world)" },
              { es: "Alemania (territorio colonial menor, adquirido tarde)", en: "Germany (smaller colonial territory, acquired late)" },
              { es: "Estados Unidos (expansión reciente en el Pacífico y Caribe)", en: "United States (recent expansion in Pacific and Caribbean)" },
            ],
          correctAnswer: ["1", "0", "3", "2"],
          explanation: {
            es: "Por tamaño de Imperio en 1914: 1. Gran Bretaña (~33M km²) → 2. Francia → 3. EUA (menor, más reciente) → 4. Alemania (colonial tardío).",
            en: "By Empire size in 1914: 1. Great Britain (~33M km²) → 2. France → 3. USA (smaller, more recent) → 4. Germany (late colonial power).",
          },
        },
      ],
    },
    {
      id: "imperialismo-l3",
      topicId: "imperialismo",
      title: {
        es: "Tensiones Previas a la Guerra Mundial",
        en: "Pre-World War Tensions",
      },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_imp_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "La Triple Alianza (formada en 1882) estaba integrada por:",
            en: "The Triple Alliance (formed in 1882) was composed of:",
          },
          options: [
              { es: "Alemania, Austria-Hungría e Italia", en: "Germany, Austria-Hungary and Italy" },
              { es: "Gran Bretaña, Francia y Rusia", en: "Great Britain, France and Russia" },
              { es: "Alemania, Turquía y Bulgaria", en: "Germany, Turkey and Bulgaria" },
              { es: "Francia, España y Portugal", en: "France, Spain and Portugal" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Triple Alianza (1882) unió a Alemania, Austria-Hungría e Italia (aunque Italia se pasó al bando rival en 1915). Se formó frente a la Triple Entente de Gran Bretaña, Francia y Rusia.",
            en: "The Triple Alliance (1882) united Germany, Austria-Hungary and Italy (although Italy switched sides in 1915). It was formed opposite the Triple Entente of Great Britain, France and Russia.",
          },
        },
        {
          id: "hu_imp_l3_q2",
          type: "true-false",
          prompt: {
            es: "La carrera armamentista naval entre Gran Bretaña y Alemania (programa de los Dreadnoughts) fue una de las causas de tensión previa a la Primera Guerra Mundial.",
            en: "The naval arms race between Britain and Germany (Dreadnought program) was one of the causes of tension before World War I.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Alemania desafió la supremacía naval británica construyendo acorazados Dreadnought, lo que generó intensa rivalidad y fue una de las causas estructurales de la Primera Guerra Mundial.",
            en: "Correct. Germany challenged British naval supremacy by building Dreadnought battleships, generating intense rivalry and being one of the structural causes of World War I.",
          },
        },
        {
          id: "hu_imp_l3_q3",
          type: "multiple-choice",
          prompt: {
            es: "Los 'Balcanes' eran llamados 'el polvorín de Europa' antes de 1914 porque:",
            en: "The 'Balkans' were called 'the powder keg of Europe' before 1914 because:",
          },
          options: [
              { es: "Múltiples nacionalismos, la influencia austro-húngara y el interés ruso creaban constantes conflictos", en: "Multiple nationalisms, Austro-Hungarian influence and Russian interest created constant conflicts" },
              { es: "Era la región más industrializada de Europa", en: "It was Europe's most industrialized region" },
              { es: "Almacenaban la mayor cantidad de armamento de Europa", en: "It stored the largest amount of armament in Europe" },
              { es: "Era la región con mayor pobreza del continente", en: "It was the region with the most poverty on the continent" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los Balcanes eran polvorín por: rivalidades entre Austria-Hungría, Rusia y el Imperio Otomano; movimientos nacionalistas serbios, búlgaros, etc.; Guerras Balcánicas (1912-13). Era caldo de cultivo para conflicto mayor.",
            en: "The Balkans were a powder keg due to: rivalries between Austria-Hungary, Russia and the Ottoman Empire; Serbian, Bulgarian, etc. nationalist movements; Balkan Wars (1912-13). It was a breeding ground for larger conflict.",
          },
        },
        {
          id: "hu_imp_l3_q4",
          type: "fill-blank",
          prompt: {
            es: "El sistema de alianzas secretas de la época imperialista hizo que un conflicto local se convirtiera en una guerra ___ en 1914.",
            en: "The system of secret alliances of the imperialist era meant that a local conflict became a ___ war in 1914.",
          },
          correctAnswer: "mundial",
          explanation: {
            es: "El sistema de alianzas (Triple Alianza vs Triple Entente) convirtió el asesinato del archiduque en Sarajevo (un conflicto local entre Austria y Serbia) en la Primera Guerra Mundial.",
            en: "The alliance system (Triple Alliance vs Triple Entente) turned the archduke's assassination in Sarajevo (a local conflict between Austria and Serbia) into World War I.",
          },
        },
        {
          id: "hu_imp_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "Las 'Crisis Marroquíes' de 1905 y 1911 fueron disputas entre:",
            en: "The 'Moroccan Crises' of 1905 and 1911 were disputes between:",
          },
          options: [
              { es: "Alemania y Francia por el control colonial de Marruecos", en: "Germany and France over colonial control of Morocco" },
              { es: "España y Reino Unido por Gibraltar", en: "Spain and Britain over Gibraltar" },
              { es: "Italia y Francia por Túnez", en: "Italy and France over Tunisia" },
              { es: "Rusia y Austria por los Balcanes", en: "Russia and Austria over the Balkans" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Las Crisis Marroquíes (1905 y 1911) fueron confrontaciones entre Alemania y Francia por el control de Marruecos. Fueron resueltas diplomáticamente pero incrementaron las tensiones europeas.",
            en: "The Moroccan Crises (1905 and 1911) were confrontations between Germany and France over control of Morocco. They were resolved diplomatically but increased European tensions.",
          },
        },
        {
          id: "hu_imp_l3_q6",
          type: "true-false",
          prompt: {
            es: "El canal de Suez, inaugurado en 1869, fue construido por Francia y posteriormente adquirido por Gran Bretaña en 1875.",
            en: "The Suez Canal, opened in 1869, was built by France and subsequently acquired by Great Britain in 1875.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Canal de Suez fue construido por la compañía francesa dirigida por Ferdinand de Lesseps. En 1875, Disraeli compró el 44% de las acciones para Gran Bretaña al jedive de Egipto, dando a GB el control estratégico.",
            en: "Correct. The Suez Canal was built by the French company led by Ferdinand de Lesseps. In 1875, Disraeli purchased 44% of shares for Britain from the Khedive of Egypt, giving GB strategic control.",
          },
        },
        {
          id: "hu_imp_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué fue el 'Plan Schlieffen' alemán?",
            en: "What was Germany's 'Schlieffen Plan'?",
          },
          options: [
              { es: "Un plan militar de guerra en dos frentes: atacar rápido a Francia por Bélgica, luego voltearse contra Rusia", en: "A two-front war military plan: quickly attack France through Belgium, then turn against Russia" },
              { es: "Un plan económico para industrializar rápidamente Alemania", en: "An economic plan to rapidly industrialize Germany" },
              { es: "El plan de Bismarck para unificar Alemania", en: "Bismarck's plan to unify Germany" },
              { es: "Un tratado de paz propuesto antes de la guerra", en: "A peace treaty proposed before the war" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Plan Schlieffen (diseñado ~1905) era el plan alemán para una guerra en dos frentes: derrotar rápidamente a Francia invadiendo por Bélgica, luego trasladar tropas al Este para enfrentar a Rusia.",
            en: "The Schlieffen Plan (designed ~1905) was Germany's plan for a two-front war: quickly defeat France by invading through Belgium, then move troops East to face Russia.",
          },
        },
        {
          id: "hu_imp_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena las causas de la Primera Guerra Mundial de las más estructurales a las más inmediatas:",
            en: "Order the causes of World War I from the most structural to the most immediate:",
          },
          options: [
              { es: "Asesinato del Archiduque Franz Ferdinand (28 jun 1914)", en: "Assassination of Archduke Franz Ferdinand (Jun 28, 1914)" },
              { es: "Imperialismo y rivalidad colonial entre potencias", en: "Imperialism and colonial rivalry between powers" },
              { es: "Sistema de alianzas rígidas (Triple Alianza vs Triple Entente)", en: "Rigid alliance system (Triple Alliance vs Triple Entente)" },
              { es: "Carrera armamentista y militarismo", en: "Arms race and militarism" },
            ],
          correctAnswer: ["1", "3", "2", "0"],
          explanation: {
            es: "De estructural a inmediato: Imperialismo (contexto) → Militarismo (carrera armamentista) → Alianzas (mecanismo) → Asesinato Sarajevo (detonante).",
            en: "From structural to immediate: Imperialism (context) → Militarism (arms race) → Alliances (mechanism) → Sarajevo assassination (trigger).",
          },
        },
      ],
    },
  ],
};
