import type { Topic } from "@/lib/types/topic";

export const nuevaEspanaTopic: Topic = {
  id: "nueva-espana",
  subjectId: "historia-mexico",
  title: {
    es: "Mesoamérica y la Nueva España",
    en: "Mesoamerica and New Spain",
  },
  description: {
    es: "De las grandes civilizaciones prehispánicas a la Conquista y la sociedad virreinal.",
    en: "From the great pre-Hispanic civilizations to the Conquest and viceregal society.",
  },
  order: 1,
  color: "red",
  icon: "Landmark",
  bgGradient: "bg-linear-to-br from-red-500 to-rose-600",
  lessons: [
    {
      id: "nueva-espana-l1",
      topicId: "nueva-espana",
      title: {
        es: "Las Civilizaciones Mesoamericanas",
        en: "Mesoamerican Civilizations",
      },
      type: "learn",
      order: 1,
      content: {
        es: "Mesoamérica fue una de las cunas de la civilización mundial. Los Mayas (200-900 d.C.) desarrollaron escritura jeroglífica, matemáticas con el cero y un calendario complejo. Los Aztecas o Mexicas fundaron Tenochtitlán en 1325 y crearon un gran imperio tributario. Los Olmecas (1500-400 a.C.) fueron la 'cultura madre' de Mesoamérica.",
        en: "Mesoamerica was one of the cradles of world civilization. The Maya (200-900 AD) developed hieroglyphic writing, mathematics with zero and a complex calendar.",
      },
      questions: [
        {
          id: "hm_ne_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué año fundaron los mexicas (aztecas) su capital Tenochtitlán, según la tradición?",
            en: "In what year did the Mexica (Aztecs) found their capital Tenochtitlán, according to tradition?",
          },
          options: [
              { es: "1325 d.C., sobre un islote en el lago Texcoco, al ver un águila sobre un nopal devorando una serpiente", en: "1325 AD, on an islet in Lake Texcoco, seeing an eagle on a cactus devouring a serpent" },
              { es: "1200 d.C., al sur del Valle de México", en: "1200 AD, in the southern Valley of Mexico" },
              { es: "1428 d.C., después de la Triple Alianza", en: "1428 AD, after the Triple Alliance" },
              { es: "900 d.C., al abandonar Teotihuacán", en: "900 AD, after abandoning Teotihuacan" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Según la tradición mexica, en 1325 vieron la señal profetizada (águila + nopal + serpiente) en un islote del lago Texcoco. Fundaron Tenochtitlán, que creció hasta ser una de las ciudades más grandes del mundo (~200,000 hab. en 1519).",
            en: "According to Mexica tradition, in 1325 they saw the prophesied sign (eagle + cactus + serpent) on an islet in Lake Texcoco. They founded Tenochtitlan, which grew to be one of the world's largest cities (~200,000 inhabitants in 1519).",
          },
        },
        {
          id: "hm_ne_l1_q2",
          type: "true-false",
          prompt: {
            es: "Los mayas fueron la única civilización mesoamericana que desarrolló un sistema de escritura completo, capaz de registrar cualquier idea.",
            en: "The Maya were the only Mesoamerican civilization to develop a complete writing system, capable of recording any idea.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La escritura maya (logosílabica) es el único sistema de escritura completo en Mesoamérica: capaz de representar cualquier concepto. Los descifradores modernos (Champollion mesoamericano: Yuri Knorozov, 1952) revelaron su complejidad.",
            en: "Correct. Maya writing (logosyllabic) is the only complete writing system in Mesoamerica: capable of representing any concept. Modern decoders (the Mesoamerican Champollion: Yuri Knorozov, 1952) revealed its complexity.",
          },
        },
        {
          id: "hm_ne_l1_q3",
          type: "multiple-choice",
          prompt: {
            es: "La 'Triple Alianza' azteca (1428) que dominó Mesoamérica estaba formada por:",
            en: "The Aztec 'Triple Alliance' (1428) that dominated Mesoamerica was formed by:",
          },
          options: [
              { es: "Tenochtitlán, Texcoco y Tlacopan — alianza que expandió el Imperio Mexica", en: "Tenochtitlan, Texcoco and Tlacopan — alliance that expanded the Mexica Empire" },
              { es: "Teotihuacán, Monte Albán y Cholula", en: "Teotihuacan, Monte Albán and Cholula" },
              { es: "Tenochtitlán, Tlaxcala y Totonacapan", en: "Tenochtitlan, Tlaxcala and Totonacapan" },
              { es: "Aztlán, Tenochtitlán y Teotihuacán", en: "Aztlán, Tenochtitlan and Teotihuacan" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Triple Alianza (Excan Tlahtoloyan, 1428): Tenochtitlán (mexicas), Texcoco (acolhuas) y Tlacopan (tepanecas) formaron la alianza que derrotó a los tepanecas de Azcapotzalco y creó el Imperio Mexica.",
            en: "The Triple Alliance (Excan Tlahtoloyan, 1428): Tenochtitlan (Mexica), Texcoco (Acolhua) and Tlacopan (Tepanec) formed the alliance that defeated the Tepanec of Azcapotzalco and created the Mexica Empire.",
          },
        },
        {
          id: "hm_ne_l1_q4",
          type: "fill-blank",
          prompt: {
            es: "La cultura que los arqueólogos consideran la 'cultura madre' de Mesoamérica, conocida por sus colosales cabezas de basalto, fue la cultura ___.",
            en: "The culture that archaeologists consider the 'mother culture' of Mesoamerica, known for its colossal basalt heads, was the ___ culture.",
          },
          correctAnswer: "Olmeca",
          explanation: {
            es: "Los Olmecas (1500-400 a.C., Veracruz y Tabasco) son la 'cultura madre' de Mesoamérica: inventaron el juego de pelota, el calendárismo, los primeros indicios de escritura y las cabezas colosales (hasta 40 toneladas). Influyeron en todas las culturas posteriores.",
            en: "The Olmec (1500-400 BC, Veracruz and Tabasco) are the 'mother culture' of Mesoamerica: they invented the ball game, calendrics, the first hints of writing and the colossal heads (up to 40 tons). They influenced all later cultures.",
          },
        },
        {
          id: "hm_ne_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "Teotihuacán (siglos I-VII d.C.) fue importante porque:",
            en: "Teotihuacan (1st-7th centuries AD) was important because:",
          },
          options: [
              { es: "Fue la primera gran metrópolis de Mesoamérica (~150,000 hab.) con las pirámides del Sol y la Luna, e influyó en toda la región", en: "It was the first great metropolis of Mesoamerica (~150,000 inhabitants) with the Pyramids of the Sun and Moon, influencing the entire region" },
              { es: "Fue la capital del Imperio Azteca en el periodo clásico", en: "It was the capital of the Aztec Empire in the classic period" },
              { es: "Fue construida por los mayas del Yucatán", en: "It was built by the Maya of Yucatan" },
              { es: "Fue destruida por los olmecas en el siglo VIII", en: "It was destroyed by the Olmec in the 8th century" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Teotihuacán (100-650 d.C.): primera gran ciudad de Mesoamérica con ~150,000 habitantes en su apogeo. Sus pirámides del Sol (63m) y la Luna dominaban la Calzada de los Muertos. Influyó en el arte, arquitectura y religión de toda Mesoamérica.",
            en: "Teotihuacan (100-650 AD): first great city of Mesoamerica with ~150,000 inhabitants at its peak. Its Pyramids of the Sun (63m) and Moon dominated the Avenue of the Dead. It influenced art, architecture and religion throughout Mesoamerica.",
          },
        },
        {
          id: "hm_ne_l1_q6",
          type: "true-false",
          prompt: {
            es: "Los aztecas practicaban sacrificios humanos como parte de su religión, siendo el dios del sol Huitzilopochtli el principal receptor de estos rituales.",
            en: "The Aztecs practiced human sacrifice as part of their religion, with the sun god Huitzilopochtli being the main recipient of these rituals.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Los mexicas creían que el sol (Huitzilopochtli) necesitaba sangre humana para seguir moviéndose y evitar el fin del mundo. Se estima que sacrificaban miles de personas al año, principalmente guerreros capturados.",
            en: "Correct. The Mexica believed the sun (Huitzilopochtli) needed human blood to keep moving and prevent the end of the world. They are estimated to have sacrificed thousands of people per year, mainly captured warriors.",
          },
        },
        {
          id: "hm_ne_l1_q7",
          type: "multiple-choice",
          prompt: {
            es: "El sistema económico del Imperio Mexica se basaba principalmente en:",
            en: "The economic system of the Mexica Empire was mainly based on:",
          },
          options: [
              { es: "Un sistema tributario: los pueblos conquistados pagaban tributo en productos, trabajo y guerreros", en: "A tributary system: conquered peoples paid tribute in goods, labor and warriors" },
              { es: "El comercio marítimo con el Caribe y América del Sur", en: "Maritime trade with the Caribbean and South America" },
              { es: "La agricultura de irrigación en el desierto", en: "Irrigation agriculture in the desert" },
              { es: "La minería intensiva de oro y plata", en: "Intensive gold and silver mining" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Imperio Mexica era fundamentalmente tributario: ~400 pueblos sometidos pagaban tributo (maíz, cacao, mantas, jade, plumas, guerreros). Los calpixques (recaudadores de tributos) supervisaban los pagos. El Códice Mendoza registra los tributos.",
            en: "The Mexica Empire was fundamentally tributary: ~400 subjugated peoples paid tribute (corn, cacao, blankets, jade, feathers, warriors). Calpixques (tribute collectors) supervised payments. The Codex Mendoza records the tributes.",
          },
        },
        {
          id: "hm_ne_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena cronológicamente las principales culturas de Mesoamérica:",
            en: "Chronologically order the main Mesoamerican cultures:",
          },
          options: [
              { es: "Imperio Mexica y Tenochtitlán (1325-1521 d.C.)", en: "Mexica Empire and Tenochtitlan (1325-1521 AD)" },
              { es: "Cultura Olmeca — cultura madre (1500-400 a.C.)", en: "Olmec Culture — mother culture (1500-400 BC)" },
              { es: "Periodo Clásico Maya (200-900 d.C.)", en: "Classic Maya Period (200-900 AD)" },
              { es: "Teotihuacán — primera gran metrópolis (100-650 d.C.)", en: "Teotihuacan — first great metropolis (100-650 AD)" },
              { es: "Culturas Preclásicas tempranas — inicio de la agricultura (5000-1500 a.C.)", en: "Early Preclassic Cultures — beginning of agriculture (5000-1500 BC)" },
            ],
          correctAnswer: ["4", "1", "3", "2", "0"],
          explanation: {
            es: "Orden: Preclásico temprano (5000-1500 a.C.) → Olmecas (1500-400 a.C.) → Teotihuacán (100-650 d.C.) → Maya Clásico (200-900 d.C.) → Imperio Mexica (1325-1521).",
            en: "Order: Early Preclassic (5000-1500 BC) → Olmec (1500-400 BC) → Teotihuacan (100-650 AD) → Classic Maya (200-900 AD) → Mexica Empire (1325-1521).",
          },
        },
      ],
    },
    {
      id: "nueva-espana-l2",
      topicId: "nueva-espana",
      title: {
        es: "La Conquista de México (1519-1521)",
        en: "The Conquest of Mexico (1519-1521)",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hm_ne_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "Hernán Cortés llegó a las costas de México en 1519 al servicio de:",
            en: "Hernán Cortés arrived on the coasts of Mexico in 1519 in service of:",
          },
          options: [
              { es: "La Corona española (Castilla), enviado desde Cuba por el gobernador Diego Velázquez aunque luego actuó por su propia cuenta", en: "The Spanish Crown (Castile), sent from Cuba by Governor Diego Velázquez although he later acted on his own account" },
              { es: "Portugal", en: "Portugal" },
              { es: "El Vaticano para evangelizar", en: "The Vatican to evangelize" },
              { es: "Una empresa privada de comerciantes sevillanos", en: "A private company of Sevillian merchants" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Cortés fue enviado desde Cuba por Diego Velázquez (gobernador), pero violó sus órdenes y actuó de manera independiente. Fundó Veracruz y envió una carta directamente al rey Carlos I (V del Sacro Imperio). La Corona luego legitimó su conquista.",
            en: "Cortés was sent from Cuba by Diego Velázquez (governor), but violated his orders and acted independently. He founded Veracruz and sent a letter directly to King Charles I (V of the Holy Empire). The Crown later legitimized his conquest.",
          },
        },
        {
          id: "hm_ne_l2_q2",
          type: "true-false",
          prompt: {
            es: "La Malinche (Malintzin/Doña Marina) fue una mujer indígena que actuó como intérprete y consejera de Hernán Cortés, siendo clave para la Conquista.",
            en: "La Malinche (Malintzin/Doña Marina) was an indigenous woman who acted as interpreter and advisor to Hernán Cortés, being key to the Conquest.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La Malinche (nahua, hablante de maya y náhuatl) fue entregada a Cortés como esclava en Tabasco (1519). Su papel como intérprete-traductora fue fundamental. Es figura ambigua de la historia mexicana: símbolo de encuentro, adaptación y también de traición.",
            en: "Correct. La Malinche (Nahua, Maya and Nahuatl speaker) was given to Cortés as a slave in Tabasco (1519). Her role as interpreter-translator was fundamental. She is an ambiguous figure in Mexican history: symbol of encounter, adaptation and also of betrayal.",
          },
        },
        {
          id: "hm_ne_l2_q3",
          type: "multiple-choice",
          prompt: {
            es: "La 'Noche Triste' (30 junio 1520) fue el episodio en que:",
            en: "The 'Noche Triste' (June 30, 1520) was the episode in which:",
          },
          options: [
              { es: "Los españoles y sus aliados huyeron de Tenochtitlán bajo ataque mexica, con cientos de muertos y la pérdida del tesoro", en: "The Spanish and their allies fled Tenochtitlan under Mexica attack, with hundreds dead and the loss of the treasure" },
              { es: "Moctezuma II fue asesinado por los españoles en el palacio", en: "Moctezuma II was killed by the Spanish in the palace" },
              { es: "Cortés firmó un acuerdo de paz con Cuauhtémoc", en: "Cortés signed a peace agreement with Cuauhtémoc" },
              { es: "Los tlaxcaltecas traicionaron a los españoles", en: "The Tlaxcalans betrayed the Spanish" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Noche Triste (30 jun 1520): tras la muerte de Moctezuma y el inicio de la rebelión mexica, los españoles huyeron de Tenochtitlán con enormes pérdidas. Cortés lloró bajo un árbol (el 'árbol de la Noche Triste' en Popotla, CDMX).",
            en: "The Noche Triste (Jun 30, 1520): after Moctezuma's death and the start of the Mexica rebellion, the Spanish fled Tenochtitlan with enormous losses. Cortés wept under a tree (the 'tree of the Noche Triste' in Popotla, Mexico City).",
          },
        },
        {
          id: "hm_ne_l2_q4",
          type: "fill-blank",
          prompt: {
            es: "El último gran tlatoani (gobernante) mexica, quien defendió Tenochtitlán hasta su caída el 13 de agosto de 1521, fue ___.",
            en: "The last great Mexica tlatoani (ruler), who defended Tenochtitlan until its fall on August 13, 1521, was ___.",
          },
          correctAnswer: "Cuauhtémoc",
          explanation: {
            es: "Cuauhtémoc (Águila que desciende) fue el último huey tlatoani mexica (1520-21). Defendió Tenochtitlán durante el sitio de 75 días. Capturado el 13 ago 1521, fue torturado para revelar el tesoro azteca. Fue ejecutado por Cortés en Honduras (1525).",
            en: "Cuauhtémoc (Descending Eagle) was the last Mexica huey tlatoani (1520-21). He defended Tenochtitlan during the 75-day siege. Captured on Aug 13, 1521, he was tortured to reveal the Aztec treasure. He was executed by Cortés in Honduras (1525).",
          },
        },
        {
          id: "hm_ne_l2_q5",
          type: "multiple-choice",
          prompt: {
            es: "Los aliados que ayudaron a Cortés a conquistar el Imperio Mexica fueron principalmente:",
            en: "The allies who helped Cortés conquer the Mexica Empire were mainly:",
          },
          options: [
              { es: "Los tlaxcaltecas, enemigos históricos de los mexicas, junto con otros pueblos tributarios descontentos", en: "The Tlaxcalans, historical enemies of the Mexica, along with other discontented tributary peoples" },
              { es: "Los mayas del Yucatán", en: "The Maya of Yucatan" },
              { es: "Los españoles de las Antillas", en: "The Spanish from the Antilles" },
              { es: "Las tribus del norte de México", en: "The northern Mexican tribes" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los tlaxcaltecas (enemigos acérrimos de los mexicas, nunca conquistados) fueron el aliado clave de Cortés. También se unieron: totonacas, texcocanos y otros pueblos sometidos. La conquista fue posible por las alianzas indígenas más que por superioridad militar española.",
            en: "The Tlaxcalans (bitter enemies of the Mexica, never conquered) were Cortés's key ally. Also joined: Totonacs, Texcocans and other subjugated peoples. The conquest was possible due to indigenous alliances more than Spanish military superiority.",
          },
        },
        {
          id: "hm_ne_l2_q6",
          type: "true-false",
          prompt: {
            es: "Las epidemias de viruela y otras enfermedades europeas, para las que los indígenas no tenían inmunidad, causaron la muerte del 80-90% de la población indígena en el siglo XVI.",
            en: "Epidemics of smallpox and other European diseases, to which indigenous people had no immunity, caused the death of 80-90% of the indigenous population in the 16th century.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El 'Gran Choque Demográfico': la población del México central cayó de ~25 millones (1519) a ~1 millón (1605). Las epidemias — viruela (1520), sarampión (1531), tifus (1545, 1576) — fueron más letales que las armas. Fue el mayor colapso demográfico de la historia.",
            en: "Correct. The 'Great Demographic Shock': the population of central Mexico fell from ~25 million (1519) to ~1 million (1605). Epidemics — smallpox (1520), measles (1531), typhus (1545, 1576) — were more lethal than weapons. It was the greatest demographic collapse in history.",
          },
        },
        {
          id: "hm_ne_l2_q7",
          type: "multiple-choice",
          prompt: {
            es: "El sistema de la 'encomienda' colonial consistía en que:",
            en: "The colonial 'encomienda' system consisted of:",
          },
          options: [
              { es: "El rey otorgaba a un conquistador el derecho a cobrar tributo y trabajo forzado de ciertos indígenas a cambio de su evangelización y protección", en: "The king granted a conquistador the right to collect tribute and forced labor from certain indigenous people in exchange for their evangelization and protection" },
              { es: "Los indígenas recibían tierras a cambio de trabajar para la Corona", en: "Indigenous people received land in exchange for working for the Crown" },
              { es: "Los esclavos africanos eran distribuidos entre los colonos españoles", en: "African slaves were distributed among Spanish settlers" },
              { es: "Los frailes administraban haciendas productivas para financiar iglesias", en: "Friars managed productive haciendas to finance churches" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La encomienda: el encomendero tenía derechos sobre el trabajo e impuestos de indígenas asignados; a cambio pagaba su evangelización. Fue duramente criticada por fray Bartolomé de las Casas. Las Leyes Nuevas (1542) intentaron abolirla, generando revueltas.",
            en: "The encomienda: the encomendero had rights over the labor and taxes of assigned indigenous people; in exchange he paid for their evangelization. It was harshly criticized by Friar Bartolomé de las Casas. The New Laws (1542) tried to abolish it, generating revolts.",
          },
        },
        {
          id: "hm_ne_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los eventos de la Conquista de México:",
            en: "Order the events of the Conquest of Mexico:",
          },
          options: [
              { es: "Caída de Tenochtitlán — captura de Cuauhtémoc (13 ago 1521)", en: "Fall of Tenochtitlan — capture of Cuauhtémoc (Aug 13, 1521)" },
              { es: "Llegada de Cortés a la costa mexicana — fundación de Veracruz (1519)", en: "Cortés arrives on the Mexican coast — founding of Veracruz (1519)" },
              { es: "Alianza con los tlaxcaltecas (ago 1519)", en: "Alliance with the Tlaxcalans (Aug 1519)" },
              { es: "Noche Triste — huida española de Tenochtitlán (30 jun 1520)", en: "Noche Triste — Spanish flee Tenochtitlan (Jun 30, 1520)" },
              { es: "Encuentro con Moctezuma II en Tenochtitlán (8 nov 1519)", en: "Meeting with Moctezuma II in Tenochtitlan (Nov 8, 1519)" },
            ],
          correctAnswer: ["1", "2", "4", "3", "0"],
          explanation: {
            es: "Orden: Llegada/Veracruz (1519) → Alianza tlaxcalteca (ago 1519) → Encuentro Moctezuma (nov 1519) → Noche Triste (jun 1520) → Caída Tenochtitlán (ago 1521).",
            en: "Order: Arrival/Veracruz (1519) → Tlaxcalan alliance (Aug 1519) → Meeting Moctezuma (Nov 1519) → Noche Triste (Jun 1520) → Fall of Tenochtitlan (Aug 1521).",
          },
        },
      ],
    },
    {
      id: "nueva-espana-l3",
      topicId: "nueva-espana",
      title: {
        es: "El Virreinato de la Nueva España",
        en: "The Viceroyalty of New Spain",
      },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hm_ne_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "La jerarquía social del Virreinato de la Nueva España colocaba en su cúspide a:",
            en: "The social hierarchy of the Viceroyalty of New Spain placed at its top:",
          },
          options: [
              { es: "Los peninsulares (nacidos en España) en el más alto estatus; seguidos por criollos, mestizos, indígenas y negros esclavos", en: "The peninsulares (born in Spain) at the highest status; followed by criollos, mestizos, indigenous people and Black slaves" },
              { es: "Los criollos como propietarios de las mejores tierras", en: "Criollos as owners of the best lands" },
              { es: "Los mestizos como mayoría dominante de la sociedad colonial", en: "Mestizos as the dominant majority of colonial society" },
              { es: "Los indígenas como ciudadanos con derechos plenos", en: "Indigenous people as citizens with full rights" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La pirámide social novohispana: 1) Peninsulares (nacidos en España, ocupaban altos cargos); 2) Criollos (españoles nacidos en América, propietarios); 3) Mestizos (hijo de español e indígena); 4) Indígenas (tributarios); 5) Esclavos africanos.",
            en: "The New Spanish social pyramid: 1) Peninsulares (born in Spain, held high positions); 2) Criollos (Spanish born in America, landowners); 3) Mestizos (son of Spanish and indigenous); 4) Indigenous (tributaries); 5) African slaves.",
          },
        },
        {
          id: "hm_ne_l3_q2",
          type: "true-false",
          prompt: {
            es: "Sor Juana Inés de la Cruz (1648-1695) fue la primera gran escritora de México y de toda América, conocida como la 'Décima Musa'.",
            en: "Sor Juana Inés de la Cruz (1648-1695) was the first great writer of Mexico and all of America, known as the 'Tenth Muse'.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Sor Juana Inés de la Cruz fue la figura más destacada de las letras novohispanas: poeta, dramaturga y filósofa. Sua obra 'Primero Sueño' es una cumbre de la literatura barroca. Defendió el derecho de la mujer a la educación.",
            en: "Correct. Sor Juana Inés de la Cruz was the most outstanding figure of New Spanish letters: poet, playwright and philosopher. Her work 'First Dream' is a pinnacle of Baroque literature. She defended women's right to education.",
          },
        },
        {
          id: "hm_ne_l3_q3",
          type: "multiple-choice",
          prompt: {
            es: "Las 'Reformas Borbónicas' del siglo XVIII en la Nueva España buscaban principalmente:",
            en: "The 18th-century 'Bourbon Reforms' in New Spain mainly sought to:",
          },
          options: [
              { es: "Aumentar la recaudación fiscal, modernizar la administración y reducir el poder de los criollos y la Iglesia en favor de la Corona", en: "Increase tax collection, modernize administration and reduce the power of criollos and the Church in favor of the Crown" },
              { es: "Dar mayor autonomía política a los territorios americanos", en: "Give greater political autonomy to American territories" },
              { es: "Abolir el sistema de castas e igualar a todos los habitantes", en: "Abolish the caste system and equalize all inhabitants" },
              { es: "Fomentar la industria local y el comercio entre colonias", en: "Promote local industry and trade between colonies" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Las Reformas Borbónicas (ca. 1760-1808): los Borbones reestructuraron el Imperio para maximizar beneficios. Crearon intendencias, aumentaron impuestos, expulsaron a los jesuitas (1767) y restringieron el poder criollo — generando resentimiento que impulsó la independencia.",
            en: "The Bourbon Reforms (ca. 1760-1808): the Bourbons restructured the Empire to maximize benefits. They created intendancies, raised taxes, expelled the Jesuits (1767) and restricted Creole power — generating resentment that fueled independence.",
          },
        },
        {
          id: "hm_ne_l3_q4",
          type: "fill-blank",
          prompt: {
            es: "La gran hacienda colonial dedicada a la producción agrícola y/o ganadera, que dominó la economía rural de la Nueva España, se llamó ___.",
            en: "The great colonial estate dedicated to agricultural and/or livestock production, which dominated the rural economy of New Spain, was called the ___.",
          },
          correctAnswer: "hacienda",
          explanation: {
            es: "La hacienda fue la unidad económica básica del México colonial y del siglo XIX: grandes propiedades con trabajadores indígenas y mestizos endeudados (peones acasillados). El latifundismo surgido de esta institución perduró hasta la Revolución Mexicana.",
            en: "The hacienda was the basic economic unit of colonial and 19th century Mexico: large estates with indebted indigenous and mestizo workers (peones acasillados). The latifundism arising from this institution persisted until the Mexican Revolution.",
          },
        },
        {
          id: "hm_ne_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "La Inquisición novohispana tenía como función principal:",
            en: "The New Spanish Inquisition had as its main function:",
          },
          options: [
              { es: "Perseguir herejías, blasfemia y desvíos religiosos para mantener la ortodoxia católica", en: "Persecute heresies, blasphemy and religious deviations to maintain Catholic orthodoxy" },
              { es: "Controlar el comercio ilegal con otras colonias", en: "Control illegal trade with other colonies" },
              { es: "Supervisar los tributos de los indígenas", en: "Supervise indigenous tribute payments" },
              { es: "Administrar los bienes de los hospitales y conventos", en: "Administer the assets of hospitals and convents" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Tribunal del Santo Oficio de la Inquisición en México (1571-1820): juzgaba herejías, bigamia, brujería y judaísmo secreto. Los indígenas estaban exentos (eran 'neófitos'). Fue un instrumento de control ideológico y social de la sociedad colonial.",
            en: "The Holy Office of the Inquisition in Mexico (1571-1820): judged heresies, bigamy, witchcraft and secret Judaism. Indigenous people were exempt (they were 'neophytes'). It was an instrument of ideological and social control of colonial society.",
          },
        },
        {
          id: "hm_ne_l3_q6",
          type: "true-false",
          prompt: {
            es: "El Virreinato de la Nueva España duró aproximadamente 300 años, desde 1521 hasta la consumación de la Independencia en 1821.",
            en: "The Viceroyalty of New Spain lasted approximately 300 years, from 1521 to the completion of Independence in 1821.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Virreinato de la Nueva España (1521-1821) duró tres siglos. Fue el virreinato más rico y extenso de la América española, abarcando desde lo que hoy es Oregon (EUA) hasta el norte de América del Sur, incluyendo Centroamérica y el Caribe.",
            en: "Correct. The Viceroyalty of New Spain (1521-1821) lasted three centuries. It was the richest and most extensive viceroyalty in Spanish America, spanning from what is now Oregon (USA) to northern South America, including Central America and the Caribbean.",
          },
        },
        {
          id: "hm_ne_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue el principal motor económico de la Nueva España que financiaba a la Corona española?",
            en: "What was the main economic engine of New Spain that financed the Spanish Crown?",
          },
          options: [
              { es: "La minería de plata, especialmente en Zacatecas, Guanajuato y San Luis Potosí", en: "Silver mining, especially in Zacatecas, Guanajuato and San Luis Potosí" },
              { es: "La exportación de productos agrícolas tropicales (cacao, vainilla)", en: "Export of tropical agricultural products (cacao, vanilla)" },
              { es: "El comercio de esclavos africanos hacia las Antillas", en: "The trade of African slaves to the Antilles" },
              { es: "La manufactura textil en los obrajes novohispanos", en: "Textile manufacturing in New Spanish workshops" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Nueva España fue el mayor productor de plata del mundo (siglos XVI-XIX): minas de Zacatecas (desde 1546), Guanajuato y San Luis Potosí. El peso mexicano ('dólar español') fue la moneda de comercio internacional. La plata financiaba guerras europeas.",
            en: "New Spain was the world's largest silver producer (16th-19th centuries): mines of Zacatecas (from 1546), Guanajuato and San Luis Potosí. The Mexican peso ('Spanish dollar') was the international trade currency. Silver financed European wars.",
          },
        },
        {
          id: "hm_ne_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena los elementos que estructuraban la sociedad colonial novohispana:",
            en: "Order the elements that structured New Spanish colonial society:",
          },
          options: [
              { es: "Castas e indígenas — trabajadores tributarios y mano de obra", en: "Castas and indigenous — tributary workers and labor" },
              { es: "Peninsulares — máximo poder político (virrey, obispos, oidores)", en: "Peninsulares — maximum political power (viceroy, bishops, judges)" },
              { es: "Clero y órdenes religiosas — educación y evangelización", en: "Clergy and religious orders — education and evangelization" },
              { es: "Criollos — propiedad de tierras y minas, poder económico local", en: "Criollos — ownership of lands and mines, local economic power" },
              { es: "Esclavos africanos — trabajo en haciendas, minas y casas", en: "African slaves — work in haciendas, mines and houses" },
            ],
          correctAnswer: ["1", "3", "2", "0", "4"],
          explanation: {
            es: "Pirámide: Peninsulares (poder político) → Criollos (poder económico) → Clero (poder espiritual/educativo) → Castas/indígenas (tributarios) → Esclavos africanos (base).",
            en: "Pyramid: Peninsulares (political power) → Criollos (economic power) → Clergy (spiritual/educational power) → Castas/indigenous (tributaries) → African slaves (base).",
          },
        },
      ],
    },
  ],
};
