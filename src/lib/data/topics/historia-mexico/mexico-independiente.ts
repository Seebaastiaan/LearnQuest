import { Topic } from "@/lib/types";

export const mexicoIndependienteTopic: Topic = {
  id: "mexico-independiente",
  subjectId: "historia-mexico",
  title: { es: "México Independiente", en: "Independent Mexico" },
  description: { es: "Primeros años del México independiente, sus gobiernos y conflictos.", en: "Early years of independent Mexico, its governments and conflicts." },
  order: 3,
  color: "text-red-600",
  icon: "landmark",
  bgGradient: "from-red-500 to-rose-600",
  lessons: [
    {
      id: "mexico-indep-l1",
      topicId: "mexico-independiente",
      title: { es: "El Imperio y la Primera República", en: "The Empire and the First Republic" },
      type: "learn",
      order: 1,
      questions: [
        {
          id: "hm_mi_001",
          type: "multiple-choice",
          prompt: { es: "¿Quién fue coronado como Agustín I, el primer Emperador de México?", en: "Who was crowned as Agustín I, the first Emperor of Mexico?" },
          options: [
              { es: "Agustín de Iturbide", en: "Agustín de Iturbide" },
              { es: "Guadalupe Victoria", en: "Guadalupe Victoria" },
              { es: "Vicente Guerrero", en: "Vicente Guerrero" },
              { es: "Antonio López de Santa Anna", en: "Antonio López de Santa Anna" },
            ],
          correctAnswer: "0",
          explanation: { es: "Agustín de Iturbide fue coronado como Agustín I en 1822, estableciendo el Primer Imperio Mexicano, que duró hasta 1823.", en: "Agustín de Iturbide was crowned as Agustín I in 1822, establishing the First Mexican Empire, which lasted until 1823." }
        },
        {
          id: "hm_mi_002",
          type: "true-false",
          prompt: { es: "La Constitución de 1824 estableció un sistema de gobierno federal para México.", en: "The Constitution of 1824 established a federal system of government for Mexico." },
          correctAnswer: "true",
          explanation: { es: "La Constitución de 1824 instauró la República Federal, diviendo al país en estados libres y soberanos, inspirándose en la Constitución estadounidense.", en: "The Constitution of 1824 established the Federal Republic, dividing the country into free and sovereign states, inspired by the U.S. Constitution." }
        },
        {
          id: "hm_mi_003",
          type: "multiple-choice",
          prompt: { es: "¿Quién fue el primer presidente de México bajo la Constitución de 1824?", en: "Who was the first president of Mexico under the Constitution of 1824?" },
          options: [
              { es: "Guadalupe Victoria", en: "Guadalupe Victoria" },
              { es: "Vicente Guerrero", en: "Vicente Guerrero" },
              { es: "Anastasio Bustamante", en: "Anastasio Bustamante" },
              { es: "Agustín de Iturbide", en: "Agustín de Iturbide" },
            ],
          correctAnswer: "0",
          explanation: { es: "Guadalupe Victoria (Manuel Félix Fernández) fue el primer presidente de México, gobernando de 1824 a 1829, y el único del siglo XIX en terminar su mandato.", en: "Guadalupe Victoria (Manuel Félix Fernández) was the first president of Mexico, governing from 1824 to 1829, and the only one of the 19th century to complete his term." }
        },
        {
          id: "hm_mi_004",
          type: "fill-blank",
          prompt: { es: "El Plan de _____ de 1823, proclamado por Santa Anna, desconoció el Imperio de Iturbide.", en: "The Plan of _____ of 1823, proclaimed by Santa Anna, rejected Iturbide's Empire." },
          correctAnswer: "Casa Mata",
          explanation: { es: "El Plan de Casa Mata (1823) unió a republicanos y federalistas contra Iturbide, forzando su abdicación y el fin del Primer Imperio.", en: "The Plan of Casa Mata (1823) united republicans and federalists against Iturbide, forcing his abdication and the end of the First Empire." }
        },
        {
          id: "hm_mi_005",
          type: "order-steps",
          prompt: { es: "Ordena cronológicamente los primeros gobiernos de México independiente:", en: "Chronologically order the first governments of independent Mexico:" },
          options: [
              { es: "Constitución de 1824 y Primera República Federal", en: "Constitution of 1824 and First Federal Republic" },
              { es: "Primer Imperio de Iturbide (1822)", en: "First Empire of Iturbide (1822)" },
              { es: "Plan de Casa Mata y caída del Imperio (1823)", en: "Plan of Casa Mata and fall of the Empire (1823)" },
              { es: "Presidencia de Guadalupe Victoria (1824-1829)", en: "Presidency of Guadalupe Victoria (1824-1829)" },
            ],
          correctAnswer: ["1", "2", "0", "3"],
          explanation: { es: "Después de la Independencia en 1821, Iturbide se coronó en 1822; el Plan de Casa Mata en 1823 lo derrocó; luego la Constitución de 1824 creó la República Federal con Guadalupe Victoria como primer presidente.", en: "After Independence in 1821, Iturbide was crowned in 1822; the Plan of Casa Mata in 1823 overthrew him; then the Constitution of 1824 created the Federal Republic with Guadalupe Victoria as first president." }
        },
        {
          id: "hm_mi_006",
          type: "multiple-choice",
          prompt: { es: "¿En qué año fue fusilado Agustín de Iturbide al regresar a México del exilio?", en: "In what year was Agustín de Iturbide shot upon returning to Mexico from exile?" },
          options: [
              { es: "1824", en: "1824" },
              { es: "1825", en: "1825" },
              { es: "1827", en: "1827" },
              { es: "1823", en: "1823" },
            ],
          correctAnswer: "0",
          explanation: { es: "Iturbide regresó a México en 1824, ignorando el decreto que lo declaraba traidor, y fue capturado y fusilado en Padilla, Tamaulipas, el 19 de julio de 1824.", en: "Iturbide returned to Mexico in 1824, ignoring the decree declaring him a traitor, and was captured and shot in Padilla, Tamaulipas, on July 19, 1824." }
        },
        {
          id: "hm_mi_007",
          type: "true-false",
          prompt: { es: "Vicente Guerrero fue el primer presidente mestizo de México.", en: "Vicente Guerrero was the first mestizo president of Mexico." },
          correctAnswer: "true",
          explanation: { es: "Vicente Guerrero, héroe de la Independencia y de ascendencia afromexicana e indígena, fue el segundo presidente de México (1829) y el primero de origen no criollo.", en: "Vicente Guerrero, hero of Independence and of Afro-Mexican and indigenous descent, was the second president of Mexico (1829) and the first of non-Creole origin." }
        },
        {
          id: "hm_mi_008",
          type: "multiple-choice",
          prompt: { es: "El centralismo y el federalismo fueron las dos grandes corrientes políticas del México del siglo XIX. ¿Cuál fue la principal diferencia?", en: "Centralism and federalism were the two great political currents of 19th-century Mexico. What was the main difference?" },
          options: [
              { es: "El centralismo concentraba el poder en el gobierno nacional; el federalismo lo distribuía en los estados", en: "Centralism concentrated power in the national government; federalism distributed it among the states" },
              { es: "El centralismo favorecía la democracia; el federalismo la monarquía", en: "Centralism favored democracy; federalism the monarchy" },
              { es: "El centralismo era liberal; el federalismo era conservador", en: "Centralism was liberal; federalism was conservative" },
              { es: "El centralismo apoyaba la Iglesia; el federalismo era laico", en: "Centralism supported the Church; federalism was secular" },
            ],
          correctAnswer: "0",
          explanation: { es: "El centralismo buscaba un gobierno fuerte y centralizado, mientras que el federalismo defendía la autonomía de los estados. Los conservadores tendían al centralismo y los liberales al federalismo.", en: "Centralism sought a strong, centralized government, while federalism defended the autonomy of the states. Conservatives tended toward centralism and liberals toward federalism." }
        }
      ]
    },
    {
      id: "mexico-indep-l2",
      topicId: "mexico-independiente",
      title: { es: "La Guerra de Texas y el conflicto con EUA", en: "The Texas War and the Conflict with the USA" },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hm_mi_009",
          type: "multiple-choice",
          prompt: { es: "La Batalla del Álamo (1836) ocurrió durante:", en: "The Battle of the Alamo (1836) occurred during:" },
          options: [
              { es: "La guerra de Independencia de Texas contra México", en: "The Texas War of Independence from Mexico" },
              { es: "La invasión estadounidense de 1847", en: "The American invasion of 1847" },
              { es: "La guerra contra Francia", en: "The war against France" },
              { es: "La revolución de Ayutla", en: "The Ayutla Revolution" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Álamo fue una misión franciscana en San Antonio donde un grupo de texanos (incluyendo Davy Crockett y Jim Bowie) resistió al ejército mexicano de Santa Anna durante 13 días en 1836.", en: "The Alamo was a Franciscan mission in San Antonio where a group of Texans (including Davy Crockett and Jim Bowie) resisted Santa Anna's Mexican army for 13 days in 1836." }
        },
        {
          id: "hm_mi_010",
          type: "true-false",
          prompt: { es: "Texas fue independiente de México por 9 años antes de anexarse a Estados Unidos.", en: "Texas was independent from Mexico for 9 years before being annexed by the United States." },
          correctAnswer: "true",
          explanation: { es: "Texas declaró su independencia en 1836 y formó la República de Texas. En 1845, fue anexada a Estados Unidos, lo que precipitó la guerra entre EUA y México.", en: "Texas declared independence in 1836 and formed the Republic of Texas. In 1845, it was annexed to the United States, which precipitated the war between the USA and Mexico." }
        },
        {
          id: "hm_mi_011",
          type: "multiple-choice",
          prompt: { es: "¿Qué tratado puso fin a la guerra entre México y Estados Unidos en 1848?", en: "What treaty ended the war between Mexico and the United States in 1848?" },
          options: [
              { es: "Tratado de Guadalupe Hidalgo", en: "Treaty of Guadalupe Hidalgo" },
              { es: "Tratado de Velasco", en: "Treaty of Velasco" },
              { es: "Tratado de Mesilla", en: "Gadsden Purchase" },
              { es: "Tratado de París", en: "Treaty of Paris" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Tratado de Guadalupe Hidalgo (2 de febrero de 1848) puso fin a la guerra. México cedió más de la mitad de su territorio (Alta California, Nuevo México y Texas) a cambio de 15 millones de dólares.", en: "The Treaty of Guadalupe Hidalgo (February 2, 1848) ended the war. Mexico ceded more than half its territory (Alta California, New Mexico, and Texas) in exchange for $15 million." }
        },
        {
          id: "hm_mi_012",
          type: "fill-blank",
          prompt: { es: "En 1847, los jóvenes cadetes del Colegio Militar conocidos como los _____ defendieron el Castillo de Chapultepec.", en: "In 1847, the young cadets of the Military College known as the _____ defended Chapultepec Castle." },
          correctAnswer: "Niños Héroes",
          explanation: { es: "Los Niños Héroes (Juan de la Barrera, Juan Escutia, Francisco Márquez, Agustín Melgar, Fernando Montes de Oca y Vicente Suárez) son un símbolo patriótico de México, aunque algunos historiadores debaten los detalles de su muerte.", en: "The Boy Heroes (Juan de la Barrera, Juan Escutia, Francisco Márquez, Agustín Melgar, Fernando Montes de Oca and Vicente Suárez) are a patriotic symbol of Mexico, though some historians debate the details of their deaths." }
        },
        {
          id: "hm_mi_013",
          type: "multiple-choice",
          prompt: { es: "¿Qué porcentaje aproximado del territorio mexicano se perdió con el Tratado de Guadalupe Hidalgo (1848)?", en: "What approximate percentage of Mexican territory was lost with the Treaty of Guadalupe Hidalgo (1848)?" },
          options: [
              { es: "55%", en: "55%" },
              { es: "25%", en: "25%" },
              { es: "40%", en: "40%" },
              { es: "70%", en: "70%" },
            ],
          correctAnswer: "0",
          explanation: { es: "México perdió aproximadamente el 55% de su territorio (2.4 millones de km²), incluyendo los actuales estados de California, Nevada, Utah, Arizona, Nuevo México, Colorado, Wyoming y parte de Texas.", en: "Mexico lost approximately 55% of its territory (2.4 million km²), including the current states of California, Nevada, Utah, Arizona, New Mexico, Colorado, Wyoming, and part of Texas." }
        },
        {
          id: "hm_mi_014",
          type: "true-false",
          prompt: { es: "Antonio López de Santa Anna fue presidente de México en más de diez ocasiones.", en: "Antonio López de Santa Anna served as president of Mexico more than ten times." },
          correctAnswer: "true",
          explanation: { es: "Santa Anna fue presidente de México en 11 ocasiones entre 1833 y 1855, convirtiéndose en la figura dominante de la primera mitad del siglo XIX mexicano.", en: "Santa Anna served as president of Mexico 11 times between 1833 and 1855, becoming the dominant figure of the first half of 19th-century Mexican history." }
        },
        {
          id: "hm_mi_015",
          type: "multiple-choice",
          prompt: { es: "¿Con qué venta de territorio (1853) Antonio López de Santa Anna financió su gobierno?", en: "With what land sale (1853) did Antonio López de Santa Anna finance his government?" },
          options: [
              { es: "La Mesilla (Gadsden Purchase)", en: "La Mesilla (Gadsden Purchase)" },
              { es: "La Baja California", en: "Baja California" },
              { es: "Chiapas", en: "Chiapas" },
              { es: "Yucatán", en: "Yucatán" },
            ],
          correctAnswer: "0",
          explanation: { es: "Santa Anna vendió La Mesilla (actual sur de Arizona y Nuevo México) a Estados Unidos por 10 millones de dólares en el Tratado de La Mesilla (Gadsden Purchase) de 1853.", en: "Santa Anna sold La Mesilla (present-day southern Arizona and New Mexico) to the United States for $10 million in the 1853 Treaty of La Mesilla (Gadsden Purchase)." }
        },
        {
          id: "hm_mi_016",
          type: "order-steps",
          prompt: { es: "Ordena los eventos de la guerra entre México y Estados Unidos (1845-1848):", en: "Order the events of the war between Mexico and the United States (1845-1848):" },
          options: [
              { es: "Anexión de Texas a EUA (1845)", en: "U.S. annexation of Texas (1845)" },
              { es: "Invasión estadounidense y caída de la Ciudad de México (1847)", en: "U.S. invasion and fall of Mexico City (1847)" },
              { es: "Declaración de guerra de EUA a México (1846)", en: "U.S. declaration of war on Mexico (1846)" },
              { es: "Tratado de Guadalupe Hidalgo (1848)", en: "Treaty of Guadalupe Hidalgo (1848)" },
            ],
          correctAnswer: ["0", "2", "1", "3"],
          explanation: { es: "La anexión de Texas provocó la guerra; EUA declaró la guerra en 1846; el ejército estadounidense tomó la Ciudad de México en 1847; el tratado de paz fue firmado en 1848.", en: "The annexation of Texas provoked the war; the US declared war in 1846; the American army took Mexico City in 1847; the peace treaty was signed in 1848." }
        }
      ]
    },
    {
      id: "mexico-indep-l3",
      topicId: "mexico-independiente",
      title: { es: "Inestabilidad Política y Santa Anna", en: "Political Instability and Santa Anna" },
      type: "quiz",
      order: 3,
      questions: [
        {
          id: "hm_mi_017",
          type: "multiple-choice",
          prompt: { es: "¿Qué grupo político defendía la autonomía de los estados frente al gobierno central en el México del siglo XIX?", en: "Which political group defended the autonomy of the states against the central government in 19th-century Mexico?" },
          options: [
              { es: "Los federalistas (liberales)", en: "The federalists (liberals)" },
              { es: "Los centralistas (conservadores)", en: "The centralists (conservatives)" },
              { es: "Los imperialistas", en: "The imperialists" },
              { es: "Los borbonistas", en: "The Bourbonists" },
            ],
          correctAnswer: "0",
          explanation: { es: "Los liberales federalistas defendían el sistema federal como el de la Constitución de 1824, mientras que los conservadores centralistas preferían un gobierno nacional fuerte.", en: "Liberal federalists defended the federal system as in the Constitution of 1824, while conservative centralists preferred a strong national government." }
        },
        {
          id: "hm_mi_018",
          type: "true-false",
          prompt: { es: "La Constitución centralista de las Siete Leyes (1836) sustituyó a la Constitución Federal de 1824.", en: "The centralist Constitution of the Seven Laws (1836) replaced the Federal Constitution of 1824." },
          correctAnswer: "true",
          explanation: { es: "Las Siete Leyes (1836) establecieron la República Centralista y crearon el Supremo Poder Conservador, un cuarto poder que podía anular al ejecutivo, legislativo y judicial.", en: "The Seven Laws (1836) established the Centralist Republic and created the Supreme Conservative Power, a fourth branch that could override the executive, legislative, and judicial branches." }
        },
        {
          id: "hm_mi_019",
          type: "multiple-choice",
          prompt: { es: "La Revolución de Ayutla (1854) tuvo como objetivo principal:", en: "The Ayutla Revolution (1854) had as its main objective:" },
          options: [
              { es: "Derrocar a Santa Anna e iniciar una reforma liberal", en: "Overthrow Santa Anna and begin a liberal reform" },
              { es: "Defender el gobierno de Santa Anna", en: "Defend Santa Anna's government" },
              { es: "Imponer una monarquía en México", en: "Impose a monarchy in Mexico" },
              { es: "Reconquistar el territorio perdido con EUA", en: "Reconquer territory lost to the USA" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Plan de Ayutla (1854), promovido por Juan Álvarez e Ignacio Comonfort, buscaba derrocar a Santa Anna y convocar a un Congreso Constituyente que reformara profundamente al país.", en: "The Plan of Ayutla (1854), promoted by Juan Álvarez and Ignacio Comonfort, sought to overthrow Santa Anna and convene a Constituent Congress to deeply reform the country." }
        },
        {
          id: "hm_mi_020",
          type: "fill-blank",
          prompt: { es: "Santa Anna fue apodado 'El _____ de la Patria' por su papel en conflictos militares.", en: "Santa Anna was nicknamed 'The _____ of the Fatherland' for his role in military conflicts." },
          correctAnswer: "Héroe",
          explanation: { es: "Santa Anna se autoproclamó 'Benemérito de la Patria' y 'Su Alteza Serenísima', usando títulos grandilocuentes para legitimarse políticamente.", en: "Santa Anna proclaimed himself 'Benemérito de la Patria' (Meritorious of the Fatherland) and 'His Most Serene Highness', using grandiose titles to legitimize himself politically." }
        },
        {
          id: "hm_mi_021",
          type: "multiple-choice",
          prompt: { es: "¿Qué documento de 1836 reconocía la independencia de Texas a cambio de la libertad de Santa Anna?", en: "What 1836 document recognized Texas's independence in exchange for Santa Anna's freedom?" },
          options: [
              { es: "Tratados de Velasco", en: "Treaties of Velasco" },
              { es: "Tratado de Guadalupe Hidalgo", en: "Treaty of Guadalupe Hidalgo" },
              { es: "Plan de Casa Mata", en: "Plan of Casa Mata" },
              { es: "Bases de Tacubaya", en: "Bases of Tacubaya" },
            ],
          correctAnswer: "0",
          explanation: { es: "Después de ser capturado en la Batalla de San Jacinto (1836), Santa Anna firmó los Tratados de Velasco reconociendo la independencia texana, tratados que México nunca ratificó.", en: "After being captured at the Battle of San Jacinto (1836), Santa Anna signed the Treaties of Velasco recognizing Texan independence, treaties Mexico never ratified." }
        },
        {
          id: "hm_mi_022",
          type: "true-false",
          prompt: { es: "La guerra de castas de Yucatán (1847) fue una rebelión indígena maya que casi logró expulsar a los blancos de la península.", en: "The Caste War of Yucatán (1847) was a Maya indigenous rebellion that nearly succeeded in expelling whites from the peninsula." },
          correctAnswer: "true",
          explanation: { es: "La Guerra de Castas (1847-1901) fue una de las más largas rebeliones de América. Los mayas yucatecos controlaron gran parte de la península y el conflicto no terminó formalmente hasta 1901.", en: "The Caste War (1847-1901) was one of the longest rebellions in the Americas. The Yucatecan Maya controlled much of the peninsula and the conflict did not formally end until 1901." }
        },
        {
          id: "hm_mi_023",
          type: "multiple-choice",
          prompt: { es: "¿Qué distinguió al México de la primera mitad del siglo XIX en términos de estabilidad gubernamental?", en: "What characterized Mexico in the first half of the 19th century in terms of governmental stability?" },
          options: [
              { es: "Hubo más de 50 gobiernos en 30 años", en: "There were more than 50 governments in 30 years" },
              { es: "Tuvo solo dos presidentes en 50 años", en: "It had only two presidents in 50 years" },
              { es: "Mantuvo la Constitución de 1824 sin cambios", en: "It maintained the Constitution of 1824 unchanged" },
              { es: "Nunca tuvo golpes de estado", en: "It never had coups" },
            ],
          correctAnswer: "0",
          explanation: { es: "Entre 1821 y 1855, México tuvo más de 50 gobiernos diferentes, reflejando la extrema inestabilidad política del período, con pronunciamientos, golpes y cambios constitucionales frecuentes.", en: "Between 1821 and 1855, Mexico had more than 50 different governments, reflecting the extreme political instability of the period, with frequent pronunciamientos, coups, and constitutional changes." }
        },
        {
          id: "hm_mi_024",
          type: "order-steps",
          prompt: { es: "Ordena los principales conflictos externos de México en el siglo XIX:", en: "Order the main external conflicts of Mexico in the 19th century:" },
          options: [
              { es: "Reconquista española (1829)", en: "Spanish Reconquest (1829)" },
              { es: "Guerra de Texas (1836)", en: "Texas War (1836)" },
              { es: "Guerra de los Pasteles con Francia (1838)", en: "Pastry War with France (1838)" },
              { es: "Guerra con EUA / Intervención Americana (1846-1848)", en: "War with USA / American Intervention (1846-1848)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "España intentó reconquistar México en 1829 (derrotada en Tampico por Santa Anna); Texas se independizó en 1836; la Guerra de los Pasteles con Francia fue en 1838-39; la guerra con EUA fue en 1846-48.", en: "Spain attempted to reconquer Mexico in 1829 (defeated at Tampico by Santa Anna); Texas gained independence in 1836; the Pastry War with France was in 1838-39; the war with the USA was in 1846-48." }
        }
      ]
    }
  ]
};
