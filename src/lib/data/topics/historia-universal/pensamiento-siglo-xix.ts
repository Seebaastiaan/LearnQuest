import type { Topic } from "@/lib/types/topic";

export const pensamientoSigloXixTopic: Topic = {
  id: "pensamiento-siglo-xix",
  subjectId: "historia-universal",
  title: {
    es: "Pensamiento e Ideologías del Siglo XIX",
    en: "Thought and Ideologies of the 19th Century",
  },
  description: {
    es: "Liberalismo, socialismo, marxismo, y los movimientos de unificación nacionales.",
    en: "Liberalism, socialism, Marxism, and national unification movements.",
  },
  order: 3,
  color: "amber",
  icon: "BookMarked",
  bgGradient: "bg-linear-to-br from-amber-400 to-yellow-600",
  lessons: [
    {
      id: "pensamiento-xix-l1",
      topicId: "pensamiento-siglo-xix",
      title: {
        es: "Liberalismo vs Conservadurismo",
        en: "Liberalism vs Conservatism",
      },
      type: "learn",
      order: 1,
      content: {
        es: "El liberalismo defendía libertades individuales, libre mercado y gobierno constitucional. El conservadurismo (Burke, Metternich) preservaba tradición, monarquía e Iglesia. Marx y Engels publicaron el Manifiesto Comunista en 1848 y El Capital en 1867, proponiendo la lucha de clases y la abolición de la propiedad privada. Los movimientos obreros formaron la Primera Internacional (1864).",
        en: "Liberalism defended individual freedoms, free market and constitutional government. Conservatism (Burke, Metternich) preserved tradition, monarchy and Church.",
      },
      questions: [
        {
          id: "hu_px_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿En qué año publicaron Marx y Engels el Manifiesto Comunista?",
            en: "In what year did Marx and Engels publish the Communist Manifesto?",
          },
          options: [
              { es: "1848", en: "1848" },
              { es: "1867", en: "1867" },
              { es: "1789", en: "1789" },
              { es: "1871", en: "1871" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Manifiesto del Partido Comunista fue publicado en febrero de 1848, en vísperas de las revoluciones europeas. Contiene la famosa frase: 'Un fantasma recorre Europa — el fantasma del comunismo'.",
            en: "The Communist Manifesto was published in February 1848, on the eve of European revolutions.",
          },
        },
        {
          id: "hu_px_l1_q2",
          type: "multiple-choice",
          prompt: {
            es: "Según Marx, el motor de la historia es:",
            en: "According to Marx, the motor of history is:",
          },
          options: [
              { es: "La lucha de clases", en: "Class struggle" },
              { es: "La voluntad divina", en: "Divine will" },
              { es: "El progreso tecnológico", en: "Technological progress" },
              { es: "La razón ilustrada", en: "Enlightened reason" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Para Marx, toda la historia humana es la historia de la lucha de clases: amos vs esclavos, señores vs siervos, burguesía vs proletariado.",
            en: "For Marx, all human history is the history of class struggle: masters vs slaves, lords vs serfs, bourgeoisie vs proletariat.",
          },
        },
        {
          id: "hu_px_l1_q3",
          type: "true-false",
          prompt: {
            es: "El anarquismo, representado por Bakunin, compartía con el marxismo el objetivo final de destruir el Estado capitalista por medio de la revolución.",
            en: "Anarchism, represented by Bakunin, shared with Marxism the final goal of destroying the capitalist state through revolution.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Tanto marxistas como anarquistas querían eliminar el capitalismo, pero diferían en el método: Marx proponía la dictadura del proletariado como etapa transitoria; Bakunin rechazaba cualquier Estado, incluso el obrero.",
            en: "Both Marxists and anarchists wanted to eliminate capitalism, but differed in method: Marx proposed the dictatorship of the proletariat as a transitional stage; Bakunin rejected any State, even a workers' one.",
          },
        },
        {
          id: "hu_px_l1_q4",
          type: "fill-blank",
          prompt: {
            es: "La obra principal de Marx, publicada en 1867, que analiza el modo de producción capitalista se titula El ___.",
            en: "Marx's main work, published in 1867, analyzing the capitalist mode of production is titled Capital or El ___.",
          },
          correctAnswer: "Capital",
          explanation: {
            es: "El Capital (Das Kapital, 1867) es la obra cumbre de Marx, donde analiza el capitalismo, la plusvalía, la alienación del trabajador y predice las contradicciones que llevarían al socialismo.",
            en: "Capital (Das Kapital, 1867) is Marx's masterwork, analyzing capitalism, surplus value, worker alienation and predicting contradictions leading to socialism.",
          },
        },
        {
          id: "hu_px_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la postura del conservadurismo del siglo XIX respecto al mundo post-revolucionario?",
            en: "What was 19th-century conservatism's stance on the post-revolutionary world?",
          },
          options: [
              { es: "Restaurar el orden tradicional: monarquía, Iglesia y aristocracia", en: "Restore traditional order: monarchy, Church and aristocracy" },
              { es: "Ampliar el sufragio universal inmediatamente", en: "Immediately expand universal suffrage" },
              { es: "Industrializar rápidamente a expensas de la tradición", en: "Rapidly industrialize at the expense of tradition" },
              { es: "Apoyar las revoluciones populares", en: "Support popular revolutions" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El conservadurismo (Burke, De Maistre, Metternich) buscaba restaurar y mantener el orden tradicional: monarquías legítimas, poder de la Iglesia y privilegios aristocráticos.",
            en: "Conservatism (Burke, De Maistre, Metternich) sought to restore and maintain the traditional order: legitimate monarchies, Church power and aristocratic privileges.",
          },
        },
        {
          id: "hu_px_l1_q6",
          type: "multiple-choice",
          prompt: {
            es: "La Primera Internacional Obrera (AIT, 1864) fue una organización que:",
            en: "The First Workers' International (IWA, 1864) was an organization that:",
          },
          options: [
              { es: "Agrupó a sindicatos y partidos obreros de diferentes países para coordinar la lucha laboral", en: "Grouped unions and workers' parties from different countries to coordinate labor struggle" },
              { es: "Fue una alianza de monarquías europeas", en: "Was an alliance of European monarchies" },
              { es: "Representó los intereses del capitalismo industrial", en: "Represented industrial capitalism's interests" },
              { es: "Organizó la Primera Guerra Mundial", en: "Organized World War I" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Primera Internacional (Asociación Internacional de Trabajadores, 1864) unió obreros de Europa y América para coordinar la lucha por mejores condiciones laborales y el socialismo.",
            en: "The First International (International Workingmen's Association, 1864) united workers from Europe and America to coordinate the struggle for better working conditions and socialism.",
          },
        },
        {
          id: "hu_px_l1_q7",
          type: "true-false",
          prompt: {
            es: "El nacionalismo del siglo XIX consideraba que cada nación tiene el derecho de gobernarse a sí misma (autodeterminación).",
            en: "19th-century nationalism considered that each nation has the right to govern itself (self-determination).",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El principio de las nacionalidades (autodeterminación) fue el motor del nacionalismo del siglo XIX, impulsando las unificaciones de Alemania e Italia y los movimientos independentistas.",
            en: "Correct. The principle of nationalities (self-determination) was the motor of 19th-century nationalism, driving German and Italian unifications and independence movements.",
          },
        },
        {
          id: "hu_px_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estos ideólogos del siglo XIX de izquierda a derecha en el espectro político:",
            en: "Order these 19th-century ideologues from left to right on the political spectrum:",
          },
          options: [
              { es: "Bakunin (anarquismo)", en: "Bakunin (anarchism)" },
              { es: "Marx (comunismo)", en: "Marx (communism)" },
              { es: "Mill (liberalismo)", en: "Mill (liberalism)" },
              { es: "Burke (conservadurismo)", en: "Burke (conservatism)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: {
            es: "De izquierda a derecha: Anarquismo (Bakunin) → Comunismo (Marx) → Liberalismo (Mill) → Conservadurismo (Burke).",
            en: "From left to right: Anarchism (Bakunin) → Communism (Marx) → Liberalism (Mill) → Conservatism (Burke).",
          },
        },
      ],
    },
    {
      id: "pensamiento-xix-l2",
      topicId: "pensamiento-siglo-xix",
      title: {
        es: "Unificación de Italia y Alemania",
        en: "Unification of Italy and Germany",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_px_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue el papel de Cavour en la unificación italiana?",
            en: "What was Cavour's role in Italian unification?",
          },
          options: [
              { es: "Fue el estadista del Piamonte-Cerdeña que negoció alianzas y modernizó el reino para liderar la unificación", en: "He was the Piedmont-Sardinia statesman who negotiated alliances and modernized the kingdom to lead unification" },
              { es: "Fue el jefe militar que liberó el sur de Italia", en: "He was the military leader who liberated southern Italy" },
              { es: "Fue el primer rey de Italia unificada", en: "He was the first king of unified Italy" },
              { es: "Fue el papa que apoyó la unificación", en: "He was the pope who supported unification" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Cavour (1810-1861) fue el Primer Ministro del Piamonte-Cerdeña que usó la diplomacia, alianzas (con Francia de Napoleón III) y guerra para expulsar a Austria y unificar el norte de Italia.",
            en: "Cavour (1810-1861) was the Prime Minister of Piedmont-Sardinia who used diplomacy, alliances (with Napoleon III's France) and war to expel Austria and unify northern Italy.",
          },
        },
        {
          id: "hu_px_l2_q2",
          type: "multiple-choice",
          prompt: {
            es: "Giuseppe Garibaldi y sus 'Mil Camisas Rojas' liberaron el sur de Italia (el Reino de las Dos Sicilias) en:",
            en: "Giuseppe Garibaldi and his 'Thousand Red Shirts' liberated southern Italy (the Kingdom of the Two Sicilies) in:",
          },
          options: [
              { es: "1860", en: "1860" },
              { es: "1848", en: "1848" },
              { es: "1871", en: "1871" },
              { es: "1815", en: "1815" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "En 1860, Garibaldi y sus 'Mil' voluntarios (Camicie Rosse) desembarcaron en Sicilia y conquistaron el sur de Italia, que luego entregó al rey Víctor Manuel II.",
            en: "In 1860, Garibaldi and his 'Thousand' volunteers (Red Shirts) landed in Sicily and conquered southern Italy, which he then handed to King Victor Emmanuel II.",
          },
        },
        {
          id: "hu_px_l2_q3",
          type: "true-false",
          prompt: {
            es: "Otto von Bismarck utilizó la política de 'sangre y hierro' (guerras contra Dinamarca, Austria y Francia) para lograr la unificación alemana bajo Prusia.",
            en: "Otto von Bismarck used 'blood and iron' policy (wars against Denmark, Austria and France) to achieve German unification under Prussia.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Bismarck, canciller de Prusia, conduciendo guerras contra Dinamarca (1864), Austria (1866) y Francia (1870-71), unificó los estados alemanes bajo la hegemonía prusiana.",
            en: "Correct. Bismarck, chancellor of Prussia, conducting wars against Denmark (1864), Austria (1866) and France (1870-71), unified German states under Prussian hegemony.",
          },
        },
        {
          id: "hu_px_l2_q4",
          type: "fill-blank",
          prompt: {
            es: "El Imperio Alemán fue proclamado en el Salón de los Espejos del Palacio de Versalles en el año ___.",
            en: "The German Empire was proclaimed in the Hall of Mirrors at Versailles Palace in the year ___.",
          },
          correctAnswer: "1871",
          explanation: {
            es: "El 18 de enero de 1871, en el Salón de los Espejos de Versalles (en plena guerra franco-prusiana), se proclamó el Imperio Alemán y Guillermo I fue coronado káiser.",
            en: "On January 18, 1871, in the Hall of Mirrors at Versailles (during the Franco-Prussian War), the German Empire was proclaimed and William I was crowned Kaiser.",
          },
        },
        {
          id: "hu_px_l2_q5",
          type: "multiple-choice",
          prompt: {
            es: "La unificación italiana se completó cuando Roma fue incorporada como capital en:",
            en: "Italian unification was completed when Rome was incorporated as capital in:",
          },
          options: [
              { es: "1870", en: "1870" },
              { es: "1861", en: "1861" },
              { es: "1848", en: "1848" },
              { es: "1882", en: "1882" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Roma fue tomada el 20 de septiembre de 1870, cuando el ejército italiano entró por la Brecha de Porta Pia. El Papa perdió los Estados Pontificios y Roma se convirtió en capital de Italia.",
            en: "Rome was taken on September 20, 1870, when the Italian army entered through the Breach of Porta Pia. The Pope lost the Papal States and Rome became Italy's capital.",
          },
        },
        {
          id: "hu_px_l2_q6",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la consecuencia principal de la guerra franco-prusiana (1870-1871) para Francia?",
            en: "What was the main consequence of the Franco-Prussian War (1870-1871) for France?",
          },
          options: [
              { es: "Francia cedió Alsacia y Lorena a Alemania y pagó una enorme indemnización", en: "France ceded Alsace and Lorraine to Germany and paid a huge indemnity" },
              { es: "Francia conquistó el Rin alemán", en: "France conquered the German Rhine" },
              { es: "Napoleón III reforzó su poder imperial", en: "Napoleon III strengthened his imperial power" },
              { es: "Francia se unió a la Confederación Germánica", en: "France joined the German Confederation" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Francia fue humillada: perdió Alsacia y Lorena (regiones industriales), pagó 5,000 millones de francos de indemnización, y cayó el Segundo Imperio de Napoleón III (surgió la Tercera República).",
            en: "France was humiliated: it lost Alsace and Lorraine (industrial regions), paid 5 billion francs indemnity, and Napoleon III's Second Empire fell (the Third Republic emerged).",
          },
        },
        {
          id: "hu_px_l2_q7",
          type: "true-false",
          prompt: {
            es: "El socialismo utópico de Owen y Fourier propuso reformas graduales y colonias cooperativas, a diferencia del socialismo científico de Marx que proponía la revolución.",
            en: "The utopian socialism of Owen and Fourier proposed gradual reforms and cooperative colonies, unlike Marx's scientific socialism which proposed revolution.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Los socialistas utópicos (Owen, Fourier, Saint-Simon) propusieron cooperativas y reformas pacíficas. Marx los criticó como 'utópicos' y propuso el 'socialismo científico' basado en el materialismo histórico y la revolución.",
            en: "Correct. Utopian socialists (Owen, Fourier, Saint-Simon) proposed cooperatives and peaceful reforms. Marx criticized them as 'utopian' and proposed 'scientific socialism' based on historical materialism and revolution.",
          },
        },
        {
          id: "hu_px_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estos eventos de la unificación italiana cronológicamente:",
            en: "Order these Italian unification events chronologically:",
          },
          options: [
              { es: "Roma se convierte en capital de Italia (1870)", en: "Rome becomes Italy's capital (1870)" },
              { es: "Proclamación del Reino de Italia con Víctor Manuel II (1861)", en: "Proclamation of the Kingdom of Italy with Victor Emmanuel II (1861)" },
              { es: "Garibaldi libera el sur con los 'Mil' (1860)", en: "Garibaldi liberates the south with the 'Thousand' (1860)" },
              { es: "Revueltas de 1848 en los estados italianos", en: "1848 uprisings in Italian states" },
            ],
          correctAnswer: ["3", "2", "1", "0"],
          explanation: {
            es: "Orden: Revueltas 1848 → Garibaldi 'Mil' 1860 → Reino de Italia 1861 → Roma capital 1870.",
            en: "Order: 1848 uprisings → Garibaldi 'Thousand' 1860 → Kingdom of Italy 1861 → Rome capital 1870.",
          },
        },
      ],
    },
    {
      id: "pensamiento-xix-l3",
      topicId: "pensamiento-siglo-xix",
      title: {
        es: "Movimientos Obreros y Socialismo",
        en: "Labor Movements and Socialism",
      },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_px_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué fue la Comuna de París (1871)?",
            en: "What was the Paris Commune (1871)?",
          },
          options: [
              { es: "El primer gobierno obrero de la historia, que gobernó París por 72 días antes de ser aplastado", en: "The first workers' government in history, which governed Paris for 72 days before being crushed" },
              { es: "El parlamento francés que aprobó las leyes laborales", en: "The French parliament that passed labor laws" },
              { es: "El gobierno municipal de los nobles parisinos", en: "The municipal government of Parisian nobles" },
              { es: "La alianza militar contra Prussia", en: "The military alliance against Prussia" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Comuna de París (18 marzo - 28 mayo 1871) fue el primer gobierno obrero de la historia. Gobernó 72 días hasta que el ejército francés la aplastó en la 'Semana Sangrienta'.",
            en: "The Paris Commune (March 18 - May 28, 1871) was the first workers' government in history. It governed for 72 days until the French army crushed it in the 'Bloody Week'.",
          },
        },
        {
          id: "hu_px_l3_q2",
          type: "true-false",
          prompt: {
            es: "El sufragio femenino fue una conquista social que no existía en ningún país durante el siglo XIX.",
            en: "Women's suffrage was a social achievement that did not exist in any country during the 19th century.",
          },
          correctAnswer: "false",
          explanation: {
            es: "Falso. Nueva Zelanda fue el primer país en conceder el sufragio femenino en 1893. Finlandia lo otorgó en 1906. En la mayoría de países, sin embargo, sí fue posterior al siglo XIX.",
            en: "False. New Zealand was the first country to grant women's suffrage in 1893. Finland granted it in 1906.",
          },
        },
        {
          id: "hu_px_l3_q3",
          type: "multiple-choice",
          prompt: {
            es: "La encíclica 'Rerum Novarum' (1891) del Papa León XIII fue importante porque:",
            en: "Pope Leo XIII's encyclical 'Rerum Novarum' (1891) was important because:",
          },
          options: [
              { es: "Propuso una 'tercera vía' entre capitalismo y socialismo, defendiendo los derechos de los trabajadores desde la perspectiva cristiana", en: "Proposed a 'third way' between capitalism and socialism, defending workers' rights from a Christian perspective" },
              { es: "Condenó absolutamente a los sindicatos", en: "Absolutely condemned unions" },
              { es: "Apoyó la revolución socialista", en: "Supported socialist revolution" },
              { es: "Prohibió el trabajo industrial a los católicos", en: "Banned industrial work for Catholics" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Rerum Novarum propuso la Doctrina Social de la Iglesia: criticó el capitalismo deshumanizante y el socialismo ateo, defendiendo el salario justo, el derecho de asociación obrera y la propiedad privada.",
            en: "Rerum Novarum proposed the Social Doctrine of the Church: criticizing dehumanizing capitalism and atheistic socialism, defending fair wages, right of labor association and private property.",
          },
        },
        {
          id: "hu_px_l3_q4",
          type: "fill-blank",
          prompt: {
            es: "El Manifiesto Comunista termina con la famosa frase: '¡Proletarios de todos los países, ___!'",
            en: "The Communist Manifesto ends with the famous phrase: 'Workers of the world, ___!'",
          },
          correctAnswer: "uníos",
          explanation: {
            es: "'¡Proletarios de todos los países, uníos!' ('Workers of the world, unite!') es la frase final del Manifiesto Comunista de Marx y Engels (1848), llamando a la solidaridad internacional obrera.",
            en: "'Workers of the world, unite!' is the final phrase of the Communist Manifesto by Marx and Engels (1848), calling for international working-class solidarity.",
          },
        },
        {
          id: "hu_px_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "El ludismo (luddismo) fue un movimiento de trabajadores del siglo XIX que:",
            en: "Luddism was a 19th-century workers' movement that:",
          },
          options: [
              { es: "Destruía maquinaria industrial que consideraban responsable del desempleo", en: "Destroyed industrial machinery they considered responsible for unemployment" },
              { es: "Defendía el libre comercio global", en: "Defended global free trade" },
              { es: "Organizó las primeras huelgas sindicales del mundo", en: "Organized the world's first union strikes" },
              { es: "Apoyaba la automatización de las fábricas", en: "Supported factory automation" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los luditas (Inglaterra, 1811-1816) destruían telares y maquinaria industrial porque los responsabilizaban del desempleo de los artesanos. Les da nombre a la resistencia tecnológica.",
            en: "Luddites (England, 1811-1816) destroyed looms and industrial machinery because they blamed them for craftsmen's unemployment.",
          },
        },
        {
          id: "hu_px_l3_q6",
          type: "true-false",
          prompt: {
            es: "La Segunda Internacional Obrera (1889) estableció el 1° de mayo como el Día Internacional de los Trabajadores en conmemoración de los mártires de Chicago.",
            en: "The Second Workers' International (1889) established May 1st as International Workers' Day in commemoration of the Chicago martyrs.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La Segunda Internacional (1889) declaró el 1° de mayo como día de los trabajadores en memoria de los obreros ejecutados en Chicago (1886 — los Mártires de Chicago) que pedían la jornada de 8 horas.",
            en: "Correct. The Second International (1889) declared May 1st as Workers' Day in memory of workers executed in Chicago (1886 — Haymarket affair) who demanded an 8-hour workday.",
          },
        },
        {
          id: "hu_px_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue el principal logro del movimiento obrero del siglo XIX en términos laborales?",
            en: "What was the main achievement of the 19th-century labor movement in labor terms?",
          },
          options: [
              { es: "La reducción de la jornada laboral y el reconocimiento del derecho a huelga y sindicatos", en: "Reduction of working hours and recognition of the right to strike and unions" },
              { es: "La eliminación completa del trabajo infantil en todos los países", en: "Complete elimination of child labor in all countries" },
              { es: "La socialización de todos los medios de producción", en: "Socialization of all means of production" },
              { es: "La eliminación de la propiedad privada", en: "Elimination of private property" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los principales logros laborales del siglo XIX incluyeron: reducción de la jornada (de 14-16 horas a 10-12h), reconocimiento legal de sindicatos y huelgas en varios países europeos.",
            en: "The main 19th-century labor achievements included: reduction of working hours (from 14-16 to 10-12h), legal recognition of unions and strikes in several European countries.",
          },
        },
        {
          id: "hu_px_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estas etapas del pensamiento socialista del siglo XIX:",
            en: "Order these stages of 19th-century socialist thought:",
          },
          options: [
              { es: "Segunda Internacional y partidos socialdemócratas (1889)", en: "Second International and social-democratic parties (1889)" },
              { es: "Publicación de 'El Capital' de Marx (1867)", en: "Publication of Marx's 'Capital' (1867)" },
              { es: "Socialismo utópico de Owen y Fourier (1820-1840)", en: "Utopian socialism of Owen and Fourier (1820-1840)" },
              { es: "Manifiesto Comunista y Revoluciones de 1848", en: "Communist Manifesto and Revolutions of 1848" },
            ],
          correctAnswer: ["2", "3", "1", "0"],
          explanation: {
            es: "Orden: Socialismo utópico (1820s) → Manifiesto/1848 → El Capital (1867) → Segunda Internacional (1889).",
            en: "Order: Utopian socialism (1820s) → Manifesto/1848 → Capital (1867) → Second International (1889).",
          },
        },
      ],
    },
  ],
};
