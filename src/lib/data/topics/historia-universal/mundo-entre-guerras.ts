import type { Topic } from "@/lib/types/topic";

export const mundoEntreGuerrasTopic: Topic = {
  id: "mundo-entre-guerras",
  subjectId: "historia-universal",
  title: {
    es: "El Mundo Entre Guerras (1919-1939)",
    en: "The Interwar World (1919-1939)",
  },
  description: {
    es: "Los Locos Años 20, la Gran Depresión de 1929, el fascismo, el nazismo y el estalinismo.",
    en: "The Roaring Twenties, the Great Depression of 1929, fascism, Nazism and Stalinism.",
  },
  order: 6,
  color: "amber",
  icon: "TrendingDown",
  bgGradient: "bg-linear-to-br from-amber-700 to-orange-800",
  lessons: [
    {
      id: "entreguerras-l1",
      topicId: "mundo-entre-guerras",
      title: {
        es: "Los Locos Años 20 y la Gran Depresión",
        en: "The Roaring Twenties and the Great Depression",
      },
      type: "learn",
      order: 1,
      content: {
        es: "Los 'Locos Años 20' (1920-1929) fueron una época de prosperidad económica, jazz, cinema y emancipación femenina en EUA. El Jueves Negro (24 octubre 1929) marcó el crack de la Bolsa de Wall Street, iniciando la Gran Depresión. El New Deal (1933-1939) del presidente Roosevelt buscó revivir la economía estadounidense mediante gasto público.",
        en: "The 'Roaring Twenties' (1920-1929) were an era of economic prosperity, jazz, cinema and female emancipation in the USA.",
      },
      questions: [
        {
          id: "hu_eg_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuándo ocurrió el 'Jueves Negro' y qué significó?",
            en: "When did 'Black Thursday' occur and what did it mean?",
          },
          options: [
              { es: "24 de octubre de 1929 — crack de la Bolsa de Wall Street, inicio de la Gran Depresión", en: "October 24, 1929 — Wall Street stock market crash, start of the Great Depression" },
              { es: "11 de noviembre de 1918 — fin de la Primera Guerra Mundial", en: "November 11, 1918 — end of World War I" },
              { es: "1 de septiembre de 1939 — inicio de la Segunda Guerra Mundial", en: "September 1, 1939 — start of World War II" },
              { es: "28 junio 1919 — firma del Tratado de Versalles", en: "June 28, 1919 — signing of Treaty of Versailles" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Jueves Negro (24 oct 1929) fue el inicio del crack de Wall Street: en pocos días las acciones perdieron el 25% de su valor. Desencadenó la Gran Depresión (1929-1939), con desempleo masivo mundial.",
            en: "Black Thursday (Oct 24, 1929) was the start of the Wall Street crash: in a few days stocks lost 25% of their value. It triggered the Great Depression (1929-1939), with massive global unemployment.",
          },
        },
        {
          id: "hu_eg_l1_q2",
          type: "multiple-choice",
          prompt: {
            es: "El New Deal del presidente Franklin D. Roosevelt (1933-1939) fue:",
            en: "President Franklin D. Roosevelt's New Deal (1933-39) was:",
          },
          options: [
              { es: "Un programa de recuperación económica mediante obras públicas, regulación financiera y programas sociales del Estado", en: "An economic recovery program through public works, financial regulation and State social programs" },
              { es: "La política de laissez-faire para recuperar la economía", en: "A laissez-faire policy to recover the economy" },
              { es: "Un plan de militarización de la economía", en: "A plan to militarize the economy" },
              { es: "La privatización de las empresas públicas americanas", en: "The privatization of American public companies" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El New Deal (Nuevo Trato) incluyó: obras públicas (TVA, carreteras), regulación bancaria (Glass-Steagall), seguro de desempleo y pensiones. Fue la mayor expansión del Estado en la historia de EUA hasta entonces.",
            en: "The New Deal included: public works (TVA, roads), banking regulation (Glass-Steagall), unemployment insurance and pensions. It was the largest expansion of the State in US history at that time.",
          },
        },
        {
          id: "hu_eg_l1_q3",
          type: "true-false",
          prompt: {
            es: "La República de Weimar sufrió una hiperinflación devastadora en 1923, donde se necesitaban millones de marcos para comprar una barra de pan.",
            en: "The Weimar Republic suffered devastating hyperinflation in 1923, where millions of marks were needed to buy a loaf of bread.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. En 1923, la hiperinflación alemana llegó a un tipo de cambio de 4.2 billones de marcos por dólar. Las personas llevaban maletas de billetes para comprar alimentos. Fue causada por la impresión masiva de billetes para pagar las reparaciones de guerra.",
            en: "Correct. In 1923, German hyperinflation reached an exchange rate of 4.2 trillion marks per dollar. People carried suitcases of banknotes to buy food. It was caused by massive printing of money to pay war reparations.",
          },
        },
        {
          id: "hu_eg_l1_q4",
          type: "fill-blank",
          prompt: {
            es: "La Ley Seca (18ª Enmienda, 1920-1933) en EUA prohibió la producción y venta de ___, lo que llevó al auge del crimen organizado.",
            en: "Prohibition (18th Amendment, 1920-1933) in the USA banned the production and sale of ___, leading to the rise of organized crime.",
          },
          correctAnswer: "alcohol",
          explanation: {
            es: "La Prohibición (1920-1933) ilegalizó el alcohol en EUA. Esto generó el florecimiento del crimen organizado (Al Capone, speakeasies) y fue finalmente derogada por la 21ª Enmienda en 1933.",
            en: "Prohibition (1920-1933) made alcohol illegal in the USA. This generated the flourishing of organized crime (Al Capone, speakeasies) and was finally repealed by the 21st Amendment in 1933.",
          },
        },
        {
          id: "hu_eg_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la tasa de desempleo aproximada en EUA en el peor momento de la Gran Depresión (1932-1933)?",
            en: "What was the approximate unemployment rate in the USA at the worst of the Great Depression (1932-1933)?",
          },
          options: [
              { es: "25%", en: "25%" },
              { es: "5%", en: "5%" },
              { es: "10%", en: "10%" },
              { es: "40%", en: "40%" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "En 1932-1933, el desempleo en EUA llegó al 25% (~13 millones de desempleados). En Alemania fue aún mayor (un tercio de la fuerza laboral), lo que facilitó el ascenso del nazismo.",
            en: "In 1932-1933, unemployment in the USA reached 25% (~13 million unemployed). In Germany it was even higher (one third of the labor force), which facilitated the rise of Nazism.",
          },
        },
        {
          id: "hu_eg_l1_q6",
          type: "multiple-choice",
          prompt: {
            es: "Los 'Locos Años 20' se caracterizaron principalmente por:",
            en: "The 'Roaring Twenties' were mainly characterized by:",
          },
          options: [
              { es: "Prosperidad económica, jazz, cinema, flappers y el boom de la sociedad de consumo en EUA", en: "Economic prosperity, jazz, cinema, flappers and the consumer society boom in the USA" },
              { es: "Crisis económica y desempleo masivo", en: "Economic crisis and massive unemployment" },
              { es: "Guerras mundiales continuas", en: "Continuous world wars" },
              { es: "El triunfo del socialismo en Europa", en: "The triumph of socialism in Europe" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los Locos Años 20 en EUA: jazz, Hollywood, radio, automóviles (Ford Model-T), refrigeradores, 'flappers' (mujeres liberadas), crédito al consumo. Todo terminó con el crack de 1929.",
            en: "The Roaring Twenties in the USA: jazz, Hollywood, radio, automobiles (Ford Model-T), refrigerators, 'flappers' (liberated women), consumer credit. All ended with the 1929 crash.",
          },
        },
        {
          id: "hu_eg_l1_q7",
          type: "true-false",
          prompt: {
            es: "La Gran Depresión fue exclusivamente un fenómeno económico de EUA que no afectó a otros países.",
            en: "The Great Depression was exclusively an economic phenomenon of the USA that did not affect other countries.",
          },
          correctAnswer: "false",
          explanation: {
            es: "Falso. La Gran Depresión se extendió globalmente: Europa (sobre todo Alemania, que pagaba reparaciones en dólares), América Latina, Asia. Fue la primera crisis económica verdaderamente global del siglo XX.",
            en: "False. The Great Depression spread globally: Europe (especially Germany, paying reparations in dollars), Latin America, Asia. It was the first truly global economic crisis of the 20th century.",
          },
        },
        {
          id: "hu_eg_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estos eventos económicos de los años 20-30 cronológicamente:",
            en: "Order these economic events of the 1920s-30s chronologically:",
          },
          options: [
              { es: "New Deal de Roosevelt (1933)", en: "Roosevelt's New Deal (1933)" },
              { es: "Jueves Negro — crack de Wall Street (oct 1929)", en: "Black Thursday — Wall Street crash (Oct 1929)" },
              { es: "Inicio del auge económico de los 'Locos Años 20' (~1922)", en: "Start of the economic boom of the 'Roaring Twenties' (~1922)" },
              { es: "Hiperinflación alemana (1923)", en: "German hyperinflation (1923)" },
            ],
          correctAnswer: ["2", "3", "1", "0"],
          explanation: {
            es: "Orden: Locos Años 20 (~1922) → Hiperinflación alemana (1923) → Crack Wall Street (oct 1929) → New Deal (1933).",
            en: "Order: Roaring Twenties (~1922) → German hyperinflation (1923) → Wall Street crash (Oct 1929) → New Deal (1933).",
          },
        },
      ],
    },
    {
      id: "entreguerras-l2",
      topicId: "mundo-entre-guerras",
      title: { es: "El Fascismo y el Nazismo", en: "Fascism and Nazism" },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_eg_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la clave del ascenso de Benito Mussolini al poder en Italia (1922)?",
            en: "What was key to Benito Mussolini's rise to power in Italy (1922)?",
          },
          options: [
              { es: "La 'Marcha sobre Roma' de las camisas negras fascistas presionó al rey Víctor Manuel III para nombrarlo Primer Ministro", en: "The 'March on Rome' by fascist Black Shirts pressured King Victor Emmanuel III to appoint him Prime Minister" },
              { es: "Mussolini ganó elecciones democráticas con mayoría absoluta", en: "Mussolini won democratic elections with absolute majority" },
              { es: "Un golpe militar organizado por el ejército italiano", en: "A military coup organized by the Italian army" },
              { es: "La invasión de Roma por fuerzas extranjeras", en: "The invasion of Rome by foreign forces" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La 'Marcha sobre Roma' (oct 1922): decenas de miles de camisas negras se movilizaron hacia Roma. El rey, temiendo la guerra civil, nombró a Mussolini Primer Ministro en lugar de declarar el estado de emergencia.",
            en: "The 'March on Rome' (Oct 1922): tens of thousands of Black Shirts mobilized toward Rome. The king, fearing civil war, appointed Mussolini Prime Minister instead of declaring a state of emergency.",
          },
        },
        {
          id: "hu_eg_l2_q2",
          type: "multiple-choice",
          prompt: {
            es: "Adolf Hitler llegó al poder en Alemania en enero de 1933 como:",
            en: "Adolf Hitler came to power in Germany in January 1933 as:",
          },
          options: [
              { es: "Canciller, designado legalmente por el presidente Hindenburg tras las elecciones", en: "Chancellor, legally appointed by President Hindenburg after elections" },
              { es: "Resultado de un golpe de estado militar", en: "Result of a military coup" },
              { es: "Dictador autoproclamado tras un golpe de estado", en: "Self-proclaimed dictator after a coup" },
              { es: "Ganando las elecciones presidenciales directas", en: "By winning direct presidential elections" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Hitler fue designado canciller el 30 de enero de 1933 por el presidente Hindenburg, de manera legalmente constitucional. Luego aprobó la Ley Habilitante (mar 1933) que le dio plenos poderes dictatoriales.",
            en: "Hitler was appointed chancellor on January 30, 1933 by President Hindenburg, in a legally constitutional manner. He then passed the Enabling Act (Mar 1933) giving him full dictatorial powers.",
          },
        },
        {
          id: "hu_eg_l2_q3",
          type: "true-false",
          prompt: {
            es: "El libro 'Mein Kampf' (Mi Lucha) de Hitler, escrito en 1924 mientras estaba en prisión, ya exponía su ideología racista y sus planes expansionistas.",
            en: "Hitler's book 'Mein Kampf' (My Struggle), written in 1924 while in prison, already exposed his racist ideology and expansionist plans.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Mein Kampf (1924-25) expone claramente: el antisemitismo (los judíos como raza inferior), el Lebensraum (espacio vital en el Este), la raza aria como superior y la necesidad de guerra para expandirse.",
            en: "Correct. Mein Kampf (1924-25) clearly exposes: antisemitism (Jews as an inferior race), Lebensraum (living space in the East), the Aryan race as superior and the need for war to expand.",
          },
        },
        {
          id: "hu_eg_l2_q4",
          type: "fill-blank",
          prompt: {
            es: "Las leyes de Núremberg (1935) privaron a los judíos alemanes de la ciudadanía y prohibieron los matrimonios mixtos entre judíos y ___.",
            en: "The Nuremberg Laws (1935) stripped German Jews of citizenship and banned mixed marriages between Jews and ___.",
          },
          correctAnswer: "arios",
          explanation: {
            es: "Las Leyes de Núremberg (sept 1935): la 'Ley de Ciudadanía del Reich' privó de ciudadanía a los judíos; la 'Ley de Protección de la Sangre Alemana' prohibió matrimonios entre judíos y 'arios'. Fue la base legal del Holocausto.",
            en: "The Nuremberg Laws (Sept 1935): the 'Reich Citizenship Law' stripped Jews of citizenship; the 'Law for the Protection of German Blood' banned marriages between Jews and 'Aryans'. It was the legal basis for the Holocaust.",
          },
        },
        {
          id: "hu_eg_l2_q5",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue el papel del Partido Fascista Italiano de Mussolini en el corporativismo?",
            en: "What was the role of Mussolini's Italian Fascist Party in corporatism?",
          },
          options: [
              { es: "Organizó la economía en 'corporaciones' que agrupaban patrones y obreros bajo control del Estado, eliminando la lucha de clases", en: "Organized the economy into 'corporations' grouping employers and workers under State control, eliminating class struggle" },
              { es: "Privatizó completamente la economía italiana", en: "Completely privatized the Italian economy" },
              { es: "Instauró el socialismo colectivizando las fábricas", en: "Established socialism by collectivizing factories" },
              { es: "Suprimió a los empresarios privados", en: "Suppressed private entrepreneurs" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El corporativismo fascista creó 22 'corporaciones' que agrupaban patronos y trabajadores por sector industrial bajo control del Estado fascista. Buscaba el control social sin socialismo ni capitalismo puro.",
            en: "Fascist corporatism created 22 'corporations' grouping employers and workers by industrial sector under fascist State control. It sought social control without pure socialism or capitalism.",
          },
        },
        {
          id: "hu_eg_l2_q6",
          type: "multiple-choice",
          prompt: {
            es: "La 'Noche de los Cristales Rotos' (Kristallnacht, 9-10 nov 1938) fue:",
            en: "The 'Night of Broken Glass' (Kristallnacht, Nov 9-10, 1938) was:",
          },
          options: [
              { es: "Un pogrom organizado por los nazis contra judíos: sinagogas quemadas, negocios destruidos, ~100 judíos muertos y 30,000 detenidos", en: "A Nazi-organized pogrom against Jews: synagogues burned, businesses destroyed, ~100 Jews killed and 30,000 detained" },
              { es: "Una celebración nazi de la toma del poder", en: "A Nazi celebration of taking power" },
              { es: "Un ataque aliado contra Alemania", en: "An Allied attack on Germany" },
              { es: "Una revuelta obrera contra el nazismo", en: "A workers' revolt against Nazism" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Kristallnacht (9-10 nov 1938): el gobierno nazi organizó ataques a comunidades judías en toda Alemania y Austria: ~1,400 sinagogas quemadas, 7,500 negocios destruidos, ~100 muertos y 30,000 detenidos.",
            en: "Kristallnacht (Nov 9-10, 1938): the Nazi government organized attacks on Jewish communities throughout Germany and Austria: ~1,400 synagogues burned, 7,500 businesses destroyed, ~100 killed and 30,000 detained.",
          },
        },
        {
          id: "hu_eg_l2_q7",
          type: "true-false",
          prompt: {
            es: "El Frente Popular en España (1936-1939) perdió la Guerra Civil Española frente a las fuerzas franquistas apoyadas por Alemania e Italia.",
            en: "The Popular Front in Spain (1936-1939) lost the Spanish Civil War against Franco's forces supported by Germany and Italy.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La República española (Frente Popular) perdió la guerra civil (1936-39) contra el bando nacional de Franco, que recibió apoyo militar decisivo de Hitler (Legión Cóndor — bombardeo de Guernica 1937) y Mussolini.",
            en: "Correct. The Spanish Republic (Popular Front) lost the civil war (1936-39) against Franco's nationalist side, which received decisive military support from Hitler (Condor Legion — bombing of Guernica 1937) and Mussolini.",
          },
        },
        {
          id: "hu_eg_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena el ascenso del nazismo en Alemania:",
            en: "Order the rise of Nazism in Germany:",
          },
          options: [
              { es: "Leyes de Núremberg — persecución judía legal (1935)", en: "Nuremberg Laws — legal Jewish persecution (1935)" },
              { es: "Hitler nombrado Canciller por Hindenburg (30 ene 1933)", en: "Hitler appointed Chancellor by Hindenburg (Jan 30, 1933)" },
              { es: "Publicación de Mein Kampf (1925)", en: "Publication of Mein Kampf (1925)" },
              { es: "Ley Habilitante — plenos poderes a Hitler (mar 1933)", en: "Enabling Act — full powers to Hitler (Mar 1933)" },
            ],
          correctAnswer: ["2", "1", "3", "0"],
          explanation: {
            es: "Orden: Mein Kampf (1925) → Canciller (ene 1933) → Ley Habilitante (mar 1933) → Leyes de Núremberg (1935).",
            en: "Order: Mein Kampf (1925) → Chancellor (Jan 1933) → Enabling Act (Mar 1933) → Nuremberg Laws (1935).",
          },
        },
      ],
    },
    {
      id: "entreguerras-l3",
      topicId: "mundo-entre-guerras",
      title: { es: "El Estalinismo y la URSS", en: "Stalinism and the USSR" },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_eg_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "La 'Nueva Política Económica' (NEP) de Lenin (1921-1928) fue:",
            en: "Lenin's 'New Economic Policy' (NEP) (1921-1928) was:",
          },
          options: [
              { es: "Un retroceso táctico al capitalismo parcial para recuperar la economía devastada por la guerra civil", en: "A tactical retreat to partial capitalism to recover the economy devastated by civil war" },
              { es: "La implementación total del comunismo de guerra", en: "The full implementation of war communism" },
              { es: "La industrialización forzada de la URSS", en: "The forced industrialization of the USSR" },
              { es: "La colectivización de toda la agricultura soviética", en: "The collectivization of all Soviet agriculture" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La NEP (1921-1928) permitió pequeños negocios privados y mercados libres en agricultura mientras el Estado controlaba grandes industrias. Fue un retiro táctico del comunismo puro para recuperar la economía.",
            en: "The NEP (1921-1928) allowed small private businesses and free markets in agriculture while the State controlled large industries. It was a tactical retreat from pure communism to recover the economy.",
          },
        },
        {
          id: "hu_eg_l3_q2",
          type: "multiple-choice",
          prompt: {
            es: "Los 'Planes Quinquenales' de Stalin (desde 1928) buscaban:",
            en: "Stalin's 'Five-Year Plans' (from 1928) sought:",
          },
          options: [
              { es: "Industrializar rápidamente la URSS a costa de la agricultura y los derechos de los trabajadores", en: "Rapidly industrialize the USSR at the cost of agriculture and workers' rights" },
              { es: "Desarrollar la democracia soviética", en: "Develop Soviet democracy" },
              { es: "Privatizar las empresas estatales", en: "Privatize state enterprises" },
              { es: "Introducir el libre mercado en la URSS", en: "Introduce the free market into the USSR" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Los Planes Quinquenales transformaron la URSS de economía agraria a industrial en tiempo récord (producción de acero, carbón, electricidad), pero a un enorme costo humano en trabajo forzado y represión.",
            en: "The Five-Year Plans transformed the USSR from an agrarian to an industrial economy in record time (steel, coal, electricity production), but at enormous human cost in forced labor and repression.",
          },
        },
        {
          id: "hu_eg_l3_q3",
          type: "true-false",
          prompt: {
            es: "La colectivización forzada de la agricultura soviética bajo Stalin causó una hambruna masiva (Holodomor) que mató millones de personas, especialmente en Ucrania.",
            en: "Stalin's forced collectivization of Soviet agriculture caused a massive famine (Holodomor) that killed millions of people, especially in Ukraine.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La colectivización forzada (1929-1933) causó el Holodomor ucranianos (1932-33): una hambruna que mató entre 3.5 y 7 millones de personas sólo en Ucrania. Muchos historiadores lo califican como genocidio.",
            en: "Correct. Forced collectivization (1929-1933) caused the Ukrainian Holodomor (1932-33): a famine that killed between 3.5 and 7 million people in Ukraine alone. Many historians classify it as genocide.",
          },
        },
        {
          id: "hu_eg_l3_q4",
          type: "fill-blank",
          prompt: {
            es: "Las 'Grandes Purgas' de Stalin (1936-1938) eliminaron a líderes del partido, militares y ciudadanos mediante juicios y el campo de concentración soviético conocido como ___.",
            en: "Stalin's 'Great Purges' (1936-1938) eliminated party leaders, military officers and citizens through trials and the Soviet concentration camp known as ___.",
          },
          correctAnswer: "Gulag",
          explanation: {
            es: "El Gulag (Administración Principal de Campos) era el sistema de campos de trabajo forzado soviético. Durante las Grandes Purgas (1936-38), millones fueron enviados al Gulag o ejecutados, incluyendo generales del Ejército Rojo.",
            en: "The Gulag (Main Camp Administration) was the Soviet forced labor camp system. During the Great Purges (1936-38), millions were sent to the Gulag or executed, including Red Army generals.",
          },
        },
        {
          id: "hu_eg_l3_q5",
          type: "multiple-choice",
          prompt: {
            es: "El Pacto Molotov-Ribbentrop (agosto 1939) fue un acuerdo entre:",
            en: "The Molotov-Ribbentrop Pact (August 1939) was an agreement between:",
          },
          options: [
              { es: "La URSS de Stalin y la Alemania de Hitler para no agredirse mutuamente y repartirse Europa Oriental", en: "Stalin's USSR and Hitler's Germany for non-aggression and to divide Eastern Europe" },
              { es: "Una alianza militar soviético-alemana contra Gran Bretaña", en: "A Soviet-German military alliance against Britain" },
              { es: "Un tratado de paz entre la URSS y Polonia", en: "A peace treaty between the USSR and Poland" },
              { es: "Una alianza de la URSS con los países aliados", en: "An alliance of the USSR with the Allied countries" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Pacto Molotov-Ribbentrop (23 ago 1939) sorprendió al mundo: dos enemigos ideológicos (nazismo y comunismo) pactaron no agredirse y, en protocolos secretos, dividieron Polonia, los países bálticos y Rumania.",
            en: "The Molotov-Ribbentrop Pact (Aug 23, 1939) surprised the world: two ideological enemies (Nazism and Communism) agreed not to attack each other and, in secret protocols, divided Poland, the Baltic states and Romania.",
          },
        },
        {
          id: "hu_eg_l3_q6",
          type: "true-false",
          prompt: {
            es: "Durante el período de entreguerras (1919-1939), la democracia liberal se fortaleció en la mayoría de los países europeos.",
            en: "During the interwar period (1919-1939), liberal democracy was strengthened in most European countries.",
          },
          correctAnswer: "false",
          explanation: {
            es: "Falso. La democracia liberal retrocedió masivamente: Mussolini en Italia (1922), Primo de Rivera en España (1923), Hitler en Alemania (1933), Franco tras la guerra civil (1939), dictaduras en Europa del Este. Fue la 'crisis de la democracia'.",
            en: "False. Liberal democracy massively retreated: Mussolini in Italy (1922), Primo de Rivera in Spain (1923), Hitler in Germany (1933), Franco after the civil war (1939), dictatorships in Eastern Europe. It was the 'crisis of democracy'.",
          },
        },
        {
          id: "hu_eg_l3_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la política de 'apaciguamiento' practicada por Gran Bretaña y Francia hacia Hitler en 1938?",
            en: "What was the 'appeasement' policy practiced by Britain and France toward Hitler in 1938?",
          },
          options: [
              { es: "Ceder a las demandas de Hitler (como los Sudetes de Checoslovaquia) para evitar otra guerra mundial", en: "Concede to Hitler's demands (like Czechoslovakia's Sudetenland) to avoid another world war" },
              { es: "Declarar la guerra a Alemania cuando invadió Renania", en: "Declare war on Germany when it invaded the Rhineland" },
              { es: "Aplicar sanciones económicas masivas a Alemania", en: "Apply massive economic sanctions on Germany" },
              { es: "Formar una alianza militar con la URSS contra Alemania", en: "Form a military alliance with the USSR against Germany" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El apaciguamiento culminó en los Acuerdos de Múnich (sept 1938): Chamberlain (GB) y Daladier (Francia) cedieron los Sudetes checos a Hitler a cambio de promesas de paz. Chamberlain declaró 'paz en nuestro tiempo'. Seis meses después Hitler ocupó el resto de Checoslovaquia.",
            en: "Appeasement culminated in the Munich Agreements (Sept 1938): Chamberlain (UK) and Daladier (France) ceded Czech Sudetenland to Hitler in exchange for promises of peace. Chamberlain declared 'peace for our time'. Six months later Hitler occupied the rest of Czechoslovakia.",
          },
        },
        {
          id: "hu_eg_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estos eventos del período de entreguerras (1919-1939):",
            en: "Order these interwar period events (1919-1939):",
          },
          options: [
              { es: "Pacto Molotov-Ribbentrop (ago 1939)", en: "Molotov-Ribbentrop Pact (Aug 1939)" },
              { es: "Hitler canciller de Alemania (ene 1933)", en: "Hitler becomes German Chancellor (Jan 1933)" },
              { es: "Acuerdos de Múnich — apaciguamiento (sep 1938)", en: "Munich Agreements — appeasement (Sep 1938)" },
              { es: "Mussolini toma el poder en Italia (oct 1922)", en: "Mussolini takes power in Italy (Oct 1922)" },
            ],
          correctAnswer: ["3", "1", "2", "0"],
          explanation: {
            es: "Orden: Mussolini (1922) → Hitler canciller (ene 1933) → Múnich (sep 1938) → Pacto M-R (ago 1939).",
            en: "Order: Mussolini (1922) → Hitler chancellor (Jan 1933) → Munich (Sep 1938) → M-R Pact (Aug 1939).",
          },
        },
      ],
    },
  ],
};
