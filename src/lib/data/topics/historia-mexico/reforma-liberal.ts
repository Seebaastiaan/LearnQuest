import { Topic } from "@/lib/types";

export const reformaLiberalTopic: Topic = {
  id: "reforma-liberal",
  subjectId: "historia-mexico",
  title: { es: "La Reforma Liberal", en: "The Liberal Reform" },
  description: { es: "Las Leyes de Reforma, la Constitución de 1857 y la Intervención Francesa.", en: "The Reform Laws, the Constitution of 1857, and the French Intervention." },
  order: 4,
  color: "text-red-600",
  icon: "landmark",
  bgGradient: "from-red-500 to-rose-600",
  lessons: [
    {
      id: "reforma-l1",
      topicId: "reforma-liberal",
      title: { es: "La Constitución de 1857 y las Leyes de Reforma", en: "The Constitution of 1857 and the Reform Laws" },
      type: "learn",
      order: 1,
      questions: [
        {
          id: "hm_rl_001",
          type: "multiple-choice",
          prompt: { es: "¿Qué plan político de 1854 inició el movimiento que llevaría a la Reforma Liberal?", en: "What 1854 political plan initiated the movement that would lead to the Liberal Reform?" },
          options: [
              { es: "Plan de Ayutla", en: "Plan of Ayutla" },
              { es: "Plan de Iguala", en: "Plan of Iguala" },
              { es: "Plan de Casa Mata", en: "Plan of Casa Mata" },
              { es: "Plan de Tuxtepec", en: "Plan of Tuxtepec" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Plan de Ayutla (1854), lanzado por Juan Álvarez e Ignacio Comonfort, derrocó a Santa Anna e inició la era de la Reforma Liberal bajo el liderazgo de Benito Juárez.", en: "The Plan of Ayutla (1854), launched by Juan Álvarez and Ignacio Comonfort, overthrew Santa Anna and initiated the Liberal Reform era under the leadership of Benito Juárez." }
        },
        {
          id: "hm_rl_002",
          type: "true-false",
          prompt: { es: "Benito Juárez fue el primer presidente indígena de México.", en: "Benito Juárez was the first Indigenous president of Mexico." },
          correctAnswer: "true",
          explanation: { es: "Benito Juárez García, de origen zapoteca de Oaxaca, fue el primer presidente con ascendencia indígena de México. Gobernó con interrupciones de 1858 a 1872.", en: "Benito Juárez García, of Zapotec origin from Oaxaca, was Mexico's first president of Indigenous descent. He governed with interruptions from 1858 to 1872." }
        },
        {
          id: "hm_rl_003",
          type: "multiple-choice",
          prompt: { es: "¿Cuál fue el principal objetivo de la Ley Lerdo (1856)?", en: "What was the main objective of the Lerdo Law (1856)?" },
          options: [
              { es: "Desamortizar (vender) los bienes raíces de la Iglesia y comunidades indígenas", en: "Disentail (sell) the real estate of the Church and indigenous communities" },
              { es: "Crear un ejército nacional", en: "Create a national army" },
              { es: "Abolir la esclavitud", en: "Abolish slavery" },
              { es: "Establecer la educación laica", en: "Establish secular education" },
            ],
          correctAnswer: "0",
          explanation: { es: "La Ley Lerdo (1856), promovida por Miguel Lerdo de Tejada, buscaba poner en circulación los bienes 'amortizados' (no vendibles) de la Iglesia y comunidades indígenas para dinamizar la economía.", en: "The Lerdo Law (1856), promoted by Miguel Lerdo de Tejada, sought to put into circulation the 'amortized' (non-sellable) property of the Church and indigenous communities to stimulate the economy." }
        },
        {
          id: "hm_rl_004",
          type: "fill-blank",
          prompt: { es: "La Ley _____ (1855) suprimió los fueros eclesiásticos y militares, sometiendo a clérigos y soldados a los tribunales civiles.", en: "The _____ Law (1855) suppressed ecclesiastical and military privileges, subjecting clergy and soldiers to civilian courts." },
          correctAnswer: "Juárez",
          explanation: { es: "La Ley Juárez (1855), promovida por Benito Juárez como Ministro de Justicia, fue la primera de las Leyes de Reforma y eliminó los fueros especiales de la Iglesia y el ejército.", en: "The Juárez Law (1855), promoted by Benito Juárez as Minister of Justice, was the first of the Reform Laws and eliminated the special privileges of the Church and the military." }
        },
        {
          id: "hm_rl_005",
          type: "multiple-choice",
          prompt: { es: "¿Qué artículo de la Constitución de 1857 estableció la libertad de enseñanza en México?", en: "What article of the Constitution of 1857 established freedom of education in Mexico?" },
          options: [
              { es: "Artículo 3°", en: "Article 3rd" },
              { es: "Artículo 27°", en: "Article 27th" },
              { es: "Artículo 123°", en: "Article 123rd" },
              { es: "Artículo 130°", en: "Article 130th" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Artículo 3° de la Constitución de 1857 estableció la libertad de enseñanza, secularizando la educación. Este artículo fue transformado por la Constitución de 1917 para establecer la educación laica, gratuita y obligatoria.", en: "Article 3 of the Constitution of 1857 established freedom of education, secularizing it. This article was transformed by the Constitution of 1917 to establish secular, free, and compulsory education." }
        },
        {
          id: "hm_rl_006",
          type: "true-false",
          prompt: { es: "La Guerra de Reforma (1858-1861) fue un conflicto civil entre liberales y conservadores por la aplicación de la Constitución de 1857.", en: "The Reform War (1858-1861) was a civil conflict between liberals and conservatives over the application of the Constitution of 1857." },
          correctAnswer: "true",
          explanation: { es: "La Guerra de Tres Años o Guerra de Reforma (1858-1861) enfrentó al gobierno liberal de Juárez contra el gobierno conservador. Los liberales ganaron, pero México quedó en ruinas y con una enorme deuda externa.", en: "The Three Years' War or Reform War (1858-1861) pitted Juárez's liberal government against the conservative government. The liberals won, but Mexico was left in ruins and with an enormous external debt." }
        },
        {
          id: "hm_rl_007",
          type: "multiple-choice",
          prompt: { es: "Las Leyes de Reforma de 1859-1860 incluyeron la nacionalización de bienes eclesiásticos y la Ley del _____, que separó la Iglesia del Estado.", en: "The Reform Laws of 1859-1860 included the nationalization of ecclesiastical property and the Law of _____, which separated Church and State." },
          options: [
              { es: "Registro Civil", en: "Civil Registry" },
              { es: "Educación Laica", en: "Secular Education" },
              { es: "Ejército Nacional", en: "National Army" },
              { es: "Hacienda", en: "Treasury" },
            ],
          correctAnswer: "0",
          explanation: { es: "La Ley del Registro Civil (1859) secularizó los actos vitales (nacimiento, matrimonio, defunción), quitándolos de la administración eclesiástica. También se creó el matrimonio civil obligatorio.", en: "The Civil Registry Law (1859) secularized vital acts (birth, marriage, death), removing them from ecclesiastical administration. Mandatory civil marriage was also created." }
        },
        {
          id: "hm_rl_008",
          type: "order-steps",
          prompt: { es: "Ordena las etapas del movimiento de Reforma Liberal en México:", en: "Order the stages of the Liberal Reform movement in Mexico:" },
          options: [
              { es: "Plan de Ayutla y caída de Santa Anna (1854-1855)", en: "Plan of Ayutla and fall of Santa Anna (1854-1855)" },
              { es: "Constitución de 1857 y Leyes de Reforma (1857-1860)", en: "Constitution of 1857 and Reform Laws (1857-1860)" },
              { es: "Guerra de Reforma (1858-1861)", en: "Reform War (1858-1861)" },
              { es: "Restauración de la República (1867)", en: "Restoration of the Republic (1867)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "El Plan de Ayutla derrocó a Santa Anna; la Constitución de 1857 y las Leyes de Reforma transformaron el Estado; la Guerra de Reforma enfrentó a liberales y conservadores; la República fue restaurada tras expulsar al Imperio de Maximiliano.", en: "The Plan of Ayutla overthrew Santa Anna; the Constitution of 1857 and Reform Laws transformed the State; the Reform War pitted liberals against conservatives; the Republic was restored after expelling Maximilian's Empire." }
        }
      ]
    },
    {
      id: "reforma-l2",
      topicId: "reforma-liberal",
      title: { es: "La Intervención Francesa y el Imperio de Maximiliano", en: "The French Intervention and Maximilian's Empire" },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hm_rl_009",
          type: "multiple-choice",
          prompt: { es: "¿Cuál fue la causa inmediata que provocó la intervención francesa en México (1862)?", en: "What was the immediate cause that triggered the French intervention in Mexico (1862)?" },
          options: [
              { es: "La suspensión del pago de la deuda externa por Juárez en 1861", en: "The suspension of foreign debt payments by Juárez in 1861" },
              { es: "La Constitución de 1857", en: "The Constitution of 1857" },
              { es: "La Guerra de Reforma", en: "The Reform War" },
              { es: "El asesinato de ciudadanos franceses", en: "The assassination of French citizens" },
            ],
          correctAnswer: "0",
          explanation: { es: "En 1861, Juárez suspendió por dos años el pago de la deuda externa. Francia, España e Inglaterra acordaron intervenir militarmente. España e Inglaterra se retiraron al recibir garantías, pero Napoleón III aprovechó para instalar una monarquía en México.", en: "In 1861, Juárez suspended foreign debt payments for two years. France, Spain, and England agreed to intervene militarily. Spain and England withdrew upon receiving guarantees, but Napoleon III took the opportunity to install a monarchy in Mexico." }
        },
        {
          id: "hm_rl_010",
          type: "true-false",
          prompt: { es: "La Batalla de Puebla del 5 de mayo de 1862 fue la derrota definitiva del ejército francés en México.", en: "The Battle of Puebla on May 5, 1862 was the definitive defeat of the French army in Mexico." },
          correctAnswer: "false",
          explanation: { es: "La Batalla del 5 de mayo de 1862 fue una victoria táctica mexicana bajo el general Ignacio Zaragoza, pero no fue definitiva. Los franceses regresaron con más tropas y tomaron la Ciudad de México en 1863.", en: "The Battle of May 5, 1862 was a Mexican tactical victory under General Ignacio Zaragoza, but it was not decisive. The French returned with more troops and took Mexico City in 1863." }
        },
        {
          id: "hm_rl_011",
          type: "multiple-choice",
          prompt: { es: "¿Quién fue el archiduque austriaco que aceptó la corona del Segundo Imperio Mexicano en 1864?", en: "Who was the Austrian archduke who accepted the crown of the Second Mexican Empire in 1864?" },
          options: [
              { es: "Fernando Maximiliano de Habsburgo", en: "Ferdinand Maximilian of Habsburg" },
              { es: "Francisco José I", en: "Franz Joseph I" },
              { es: "Carlos V", en: "Charles V" },
              { es: "Napoleón III", en: "Napoleon III" },
            ],
          correctAnswer: "0",
          explanation: { es: "Fernando Maximiliano de Habsburgo aceptó la corona de México en 1864, propuesta por conservadores mexicanos y respaldada por Napoleón III de Francia. Fue fusilado en el Cerro de las Campanas, Querétaro, el 19 de junio de 1867.", en: "Ferdinand Maximilian of Habsburg accepted the crown of Mexico in 1864, proposed by Mexican conservatives and backed by Napoleon III of France. He was executed at the Cerro de las Campanas, Querétaro, on June 19, 1867." }
        },
        {
          id: "hm_rl_012",
          type: "fill-blank",
          prompt: { es: "Benito Juárez pronunció la célebre frase: 'Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la _____.'", en: "Benito Juárez pronounced the famous phrase: 'Among individuals, as among nations, respect for the rights of others is _____.' " },
          correctAnswer: "paz",
          explanation: { es: "'Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz' es la máxima juarista más célebre, pronunciada en Monterrey en 1867 al restaurar la República.", en: "'Among individuals, as among nations, respect for the rights of others is peace' is Juárez's most famous maxim, proclaimed in Monterrey in 1867 upon restoring the Republic." }
        },
        {
          id: "hm_rl_013",
          type: "multiple-choice",
          prompt: { es: "¿Qué hecho internacional obligó a Napoleón III a retirar sus tropas de México en 1866-67?", en: "What international event forced Napoleon III to withdraw his troops from Mexico in 1866-67?" },
          options: [
              { es: "La presión de Estados Unidos y el ascenso de Prusia en Europa", en: "Pressure from the United States and the rise of Prussia in Europe" },
              { es: "La derrota francesa en Puebla", en: "The French defeat at Puebla" },
              { es: "La dimisión del propio Napoleón III", en: "Napoleon III's own resignation" },
              { es: "La firma del Tratado de París", en: "The signing of the Treaty of Paris" },
            ],
          correctAnswer: "0",
          explanation: { es: "EUA aplicó la Doctrina Monroe exigiendo la salida francesa, y Prusia amenazaba a Francia en Europa, lo que convenció a Napoleón III de retirar sus tropas en 1866, dejando a Maximiliano sin apoyo.", en: "The USA applied the Monroe Doctrine demanding French withdrawal, and Prussia threatened France in Europe, convincing Napoleon III to withdraw his troops in 1866, leaving Maximilian without support." }
        },
        {
          id: "hm_rl_014",
          type: "true-false",
          prompt: { es: "Maximiliano de Habsburgo mantuvo varias de las Leyes de Reforma de Juárez durante su Imperio.", en: "Maximilian of Habsburg maintained several of Juárez's Reform Laws during his Empire." },
          correctAnswer: "true",
          explanation: { es: "Paradójicamente, Maximiliano, un liberal europeo, mantuvo la nacionalización de bienes eclesiásticos y otras leyes reformistas, lo que decepcionó a los conservadores mexicanos que lo habían traído.", en: "Paradoxically, Maximilian, a European liberal, maintained the nationalization of ecclesiastical property and other reform laws, disappointing the Mexican conservatives who had brought him." }
        },
        {
          id: "hm_rl_015",
          type: "multiple-choice",
          prompt: { es: "¿En qué año se restauró la República bajo Benito Juárez tras la caída del Imperio de Maximiliano?", en: "In what year was the Republic restored under Benito Juárez after the fall of Maximilian's Empire?" },
          options: [
              { es: "1867", en: "1867" },
              { es: "1865", en: "1865" },
              { es: "1869", en: "1869" },
              { es: "1872", en: "1872" },
            ],
          correctAnswer: "0",
          explanation: { es: "En 1867, Maximiliano fue capturado y fusilado en Querétaro. Juárez entró triunfante a la Ciudad de México el 15 de julio de 1867, restaurando la República y las instituciones liberales.", en: "In 1867, Maximilian was captured and executed in Querétaro. Juárez entered Mexico City triumphantly on July 15, 1867, restoring the Republic and liberal institutions." }
        },
        {
          id: "hm_rl_016",
          type: "order-steps",
          prompt: { es: "Ordena los eventos de la Intervención Francesa en México:", en: "Order the events of the French Intervention in Mexico:" },
          options: [
              { es: "Suspensión del pago de la deuda por Juárez (1861)", en: "Suspension of debt payments by Juárez (1861)" },
              { es: "Batalla del 5 de mayo en Puebla (1862)", en: "Battle of May 5th in Puebla (1862)" },
              { es: "Llegada de Maximiliano como Emperador (1864)", en: "Arrival of Maximilian as Emperor (1864)" },
              { es: "Fusilamiento de Maximiliano y restauración de la República (1867)", en: "Execution of Maximilian and Restoration of the Republic (1867)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "La suspensión de pagos en 1861 provocó la intervención; el 5 de mayo de 1862 fue una victoria efímera; Maximiliano llegó en 1864; en 1867 fue fusilado y la República restaurada.", en: "The suspension of payments in 1861 provoked the intervention; May 5, 1862 was a fleeting victory; Maximilian arrived in 1864; in 1867 he was executed and the Republic restored." }
        }
      ]
    },
    {
      id: "reforma-l3",
      topicId: "reforma-liberal",
      title: { es: "Legado de la Reforma y la República Restaurada", en: "Legacy of the Reform and the Restored Republic" },
      type: "quiz",
      order: 3,
      questions: [
        {
          id: "hm_rl_017",
          type: "multiple-choice",
          prompt: { es: "¿Cuál fue el principal legado constitucional de la Reforma Liberal en México?", en: "What was the main constitutional legacy of the Liberal Reform in Mexico?" },
          options: [
              { es: "La separación Iglesia-Estado y la secularización de instituciones", en: "The Church-State separation and secularization of institutions" },
              { es: "La creación del ejército permanente", en: "The creation of the permanent army" },
              { es: "La abolición de la propiedad privada", en: "The abolition of private property" },
              { es: "La federalización de la educación", en: "The federalization of education" },
            ],
          correctAnswer: "0",
          explanation: { es: "La Reforma Liberal estableció definitivamente la separación Iglesia-Estado, la secularización del registro civil, la educación y los cementerios, y la libertad de culto, transformando a México en un Estado laico.", en: "The Liberal Reform definitively established the Church-State separation, the secularization of civil registry, education and cemeteries, and freedom of worship, transforming Mexico into a secular state." }
        },
        {
          id: "hm_rl_018",
          type: "true-false",
          prompt: { es: "Porfirio Díaz se sublevó contra Juárez en la Revolución de la Noria (1871) y contra Lerdo de Tejada en el Plan de Tuxtepec (1876).", en: "Porfirio Díaz rebelled against Juárez in the Noria Revolution (1871) and against Lerdo de Tejada in the Plan of Tuxtepec (1876)." },
          correctAnswer: "true",
          explanation: { es: "Díaz se rebeló dos veces: en 1871 contra la reelección de Juárez (Revolución de La Noria) y en 1876 contra Lerdo de Tejada (Plan de Tuxtepec), esta vez con éxito, iniciando el Porfiriato.", en: "Díaz rebelled twice: in 1871 against Juárez's reelection (Noria Revolution) and in 1876 against Lerdo de Tejada (Plan of Tuxtepec), this time successfully, initiating the Porfiriato." }
        },
        {
          id: "hm_rl_019",
          type: "multiple-choice",
          prompt: { es: "¿Qué hecho político marcó el fin del período de la República Restaurada (1867-1876)?", en: "What political event marked the end of the Restored Republic period (1867-1876)?" },
          options: [
              { es: "El triunfo del Plan de Tuxtepec de Porfirio Díaz", en: "The triumph of Porfirio Díaz's Plan of Tuxtepec" },
              { es: "La muerte de Benito Juárez", en: "The death of Benito Juárez" },
              { es: "La guerra contra Guatemala", en: "The war against Guatemala" },
              { es: "La nueva intervención francesa", en: "A new French intervention" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Plan de Tuxtepec (1876) de Porfirio Díaz derrocó al gobierno de Sebastián Lerdo de Tejada, poniendo fin a la República Restaurada e iniciando el Porfiriato (1876-1911).", en: "The Plan of Tuxtepec (1876) by Porfirio Díaz overthrew Sebastián Lerdo de Tejada's government, ending the Restored Republic and beginning the Porfiriato (1876-1911)." }
        },
        {
          id: "hm_rl_020",
          type: "fill-blank",
          prompt: { es: "La Ley _____ de 1856 estableció la desamortización de los bienes de las corporaciones civiles y eclesiásticas en México.", en: "The _____ Law of 1856 established the confiscation of property from civil and ecclesiastical corporations in Mexico." },
          correctAnswer: "Lerdo",
          explanation: { es: "La Ley Lerdo, promovida por Miguel Lerdo de Tejada, obligó a la venta de las propiedades en manos de corporaciones (incluyendo comunidades indígenas), lo que irónicamente facilitó la concentración de tierras en pocas manos.", en: "The Lerdo Law, promoted by Miguel Lerdo de Tejada, forced the sale of properties held by corporations (including indigenous communities), which ironically facilitated the concentration of land in few hands." }
        },
        {
          id: "hm_rl_021",
          type: "multiple-choice",
          prompt: { es: "¿Cuál fue la posición de la Iglesia Católica ante la Constitución de 1857 y las Leyes de Reforma?", en: "What was the Catholic Church's position regarding the Constitution of 1857 and the Reform Laws?" },
          options: [
              { es: "Las rechazó totalmente y excomulgó a quienes las juraran", en: "It totally rejected them and excommunicated those who swore to them" },
              { es: "Las aprobó condicionalmente", en: "It conditionally approved them" },
              { es: "Permaneció neutral", en: "It remained neutral" },
              { es: "Las apoyó porque protegían la educación", en: "It supported them because they protected education" },
            ],
          correctAnswer: "0",
          explanation: { es: "La Iglesia Católica condenó la Constitución de 1857 y las Leyes de Reforma, excomulgando a los funcionarios que las aceptaron. Esta posición profundizó el conflicto entre conservadores (pro-Iglesia) y liberales (Estado laico).", en: "The Catholic Church condemned the Constitution of 1857 and the Reform Laws, excommunicating officials who accepted them. This position deepened the conflict between conservatives (pro-Church) and liberals (secular State)." }
        },
        {
          id: "hm_rl_022",
          type: "true-false",
          prompt: { es: "Benito Juárez fue el único presidente en la historia de México nacido en una comunidad indígena hablante de una lengua autóctona.", en: "Benito Juárez was the only president in Mexican history born in an indigenous community speaking a native language." },
          correctAnswer: "true",
          explanation: { es: "Juárez nació en Guelatao, Oaxaca, en una familia zapoteca. Aprendió el español a los 12 años cuando se mudó a la ciudad. Es símbolo de movilidad social y orgullo indígena en México.", en: "Juárez was born in Guelatao, Oaxaca, in a Zapotec family. He learned Spanish at age 12 when he moved to the city. He is a symbol of social mobility and Indigenous pride in Mexico." }
        },
        {
          id: "hm_rl_023",
          type: "multiple-choice",
          prompt: { es: "¿Qué consagró el Artículo 27 de la Constitución de 1857 respecto a la propiedad?", en: "What did Article 27 of the Constitution of 1857 establish regarding property?" },
          options: [
              { es: "Prohibió a las corporaciones religiosas y civiles poseer bienes raíces", en: "Prohibited religious and civil corporations from owning real estate" },
              { es: "Nacionalizó el petróleo", en: "Nationalized oil" },
              { es: "Distribuyó tierras a campesinos", en: "Distributed land to peasants" },
              { es: "Creó el ejido", en: "Created the ejido system" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Artículo 27 de la Constitución de 1857 fue la base constitucional de la Ley Lerdo, prohibiendo a corporaciones religiosas y civiles poseer bienes raíces que no fueran para su uso directo.", en: "Article 27 of the Constitution of 1857 was the constitutional basis for the Lerdo Law, prohibiting religious and civil corporations from owning real estate that wasn't for their direct use." }
        },
        {
          id: "hm_rl_024",
          type: "order-steps",
          prompt: { es: "Ordena las principales Leyes de Reforma de 1855 a 1860:", en: "Order the main Reform Laws from 1855 to 1860:" },
          options: [
              { es: "Ley Juárez: elimina fueros eclesiásticos y militares (1855)", en: "Juárez Law: eliminates ecclesiastical and military privileges (1855)" },
              { es: "Ley Lerdo: desamortización de bienes corporativos (1856)", en: "Lerdo Law: disentailment of corporate property (1856)" },
              { es: "Constitución de 1857: derechos individuales y libertades", en: "Constitution of 1857: individual rights and freedoms" },
              { es: "Leyes de Nacionalización de bienes del clero (1859)", en: "Laws nationalizing Church property (1859)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "Las reformas fueron escalonadas: Ley Juárez (1855) para fueros, Ley Lerdo (1856) para propiedades corporativas, Constitución (1857) que las elevó a rango constitucional, y finalmente la nacionalización de bienes eclesiásticos (1859).", en: "The reforms were staged: Juárez Law (1855) for privileges, Lerdo Law (1856) for corporate properties, Constitution (1857) elevating them to constitutional rank, and finally the nationalization of ecclesiastical property (1859)." }
        }
      ]
    }
  ]
};
