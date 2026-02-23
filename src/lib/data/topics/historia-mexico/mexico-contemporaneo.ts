import { Topic } from "@/lib/types";

export const mexicoContemporaneoTopic: Topic = {
  id: "mexico-contemporaneo",
  subjectId: "historia-mexico",
  title: { es: "México Contemporáneo", en: "Contemporary Mexico" },
  description: { es: "Del milagro mexicano al 68, la crisis económica y la alternancia democrática.", en: "From the Mexican miracle to 1968, the economic crisis, and democratic alternation." },
  order: 8,
  color: "text-red-600",
  icon: "landmark",
  bgGradient: "from-red-500 to-rose-600",
  lessons: [
    {
      id: "mex-cont-l1",
      topicId: "mexico-contemporaneo",
      title: { es: "El 'Milagro Mexicano' (1940-1970)", en: "The 'Mexican Miracle' (1940-1970)" },
      type: "learn",
      order: 1,
      questions: [
        {
          id: "hm_mc_001",
          type: "multiple-choice",
          prompt: { es: "¿Qué período se conoce como el 'milagro mexicano' o 'desarrollo estabilizador'?", en: "What period is known as the 'Mexican miracle' or 'stabilizing development'?" },
          options: [
              { es: "1954-1970, con crecimiento del 6-7% anual y baja inflación", en: "1954-1970, with 6-7% annual growth and low inflation" },
              { es: "1920-1940, con la Revolución industrializando el país", en: "1920-1940, with the Revolution industrializing the country" },
              { es: "1988-2000, con las reformas neoliberales", en: "1988-2000, with neoliberal reforms" },
              { es: "1940-1954, con el gobierno de Ávila Camacho", en: "1940-1954, with Ávila Camacho's government" },
            ],
          correctAnswer: "0",
          explanation: { es: "El 'desarrollo estabilizador' (1954-1970) se caracterizó por crecimiento económico sostenido del 6-7% anual, baja inflación (gracias a la política del Banco de México) y tipo de cambio fijo de 12.50 pesos por dólar.", en: "The 'stabilizing development' (1954-1970) was characterized by sustained economic growth of 6-7% annually, low inflation (thanks to Banco de México policy), and a fixed exchange rate of 12.50 pesos per dollar." }
        },
        {
          id: "hm_mc_002",
          type: "true-false",
          prompt: { es: "La política de industrialización por sustitución de importaciones (ISI) fue el modelo económico del 'milagro mexicano'.", en: "The policy of industrialization by import substitution (ISI) was the economic model of the 'Mexican miracle'." },
          correctAnswer: "true",
          explanation: { es: "La ISI buscaba producir internamente lo que antes se importaba, protegiendo la industria nacional con aranceles. Fue impulsada por la CEPAL (Comisión Económica para América Latina) y adoptada por México desde los 1940s.", en: "ISI sought to produce domestically what was previously imported, protecting national industry with tariffs. It was promoted by ECLAC (Economic Commission for Latin America) and adopted by Mexico from the 1940s." }
        },
        {
          id: "hm_mc_003",
          type: "multiple-choice",
          prompt: { es: "¿Qué presidente mexicano promovió la campaña de alfabetización que redujo el analfabetismo de 55% a 30% entre 1940 y 1958?", en: "Which Mexican president promoted the literacy campaign that reduced illiteracy from 55% to 30% between 1940 and 1958?" },
          options: [
              { es: "Miguel Alemán y Adolfo Ruiz Cortines (varios presidentes)", en: "Miguel Alemán and Adolfo Ruiz Cortines (multiple presidents)" },
              { es: "Solo Lázaro Cárdenas", en: "Only Lázaro Cárdenas" },
              { es: "Solo Miguel Alemán", en: "Only Miguel Alemán" },
              { es: "Adolfo López Mateos", en: "Adolfo López Mateos" },
            ],
          correctAnswer: "0",
          explanation: { es: "La reducción del analfabetismo fue gradual con varios presidentes. Adolfo López Mateos (1959-1964) fue quien creó los libros de texto gratuitos (1959) como herramienta masiva de alfabetización.", en: "The reduction of illiteracy was gradual under multiple presidents. Adolfo López Mateos (1959-1964) was the one who created free textbooks (1959) as a massive literacy tool." }
        },
        {
          id: "hm_mc_004",
          type: "fill-blank",
          prompt: { es: "El proceso de industrialización urbana del 'milagro mexicano' causó una masiva _____ del campo a las ciudades.", en: "The urban industrialization process of the 'Mexican miracle' caused a massive _____ from the countryside to cities." },
          correctAnswer: "migración",
          explanation: { es: "Entre 1940 y 1970, la Ciudad de México pasó de 1.75 millones a más de 8 millones de habitantes. La migración campo-ciudad transformó demográficamente a México de un país rural a uno mayoritariamente urbano.", en: "Between 1940 and 1970, Mexico City grew from 1.75 million to more than 8 million inhabitants. Rural-urban migration demographically transformed Mexico from a rural to a predominantly urban country." }
        },
        {
          id: "hm_mc_005",
          type: "multiple-choice",
          prompt: { es: "¿Qué empresa paraestatal se convirtió en símbolo del modelo económico mixto del 'milagro mexicano'?", en: "What state enterprise became a symbol of the mixed economic model of the 'Mexican miracle'?" },
          options: [
              { es: "PEMEX y CFE (petróleo y electricidad)", en: "PEMEX and CFE (oil and electricity)" },
              { es: "Solo PEMEX", en: "Only PEMEX" },
              { es: "Telmex y Bancomer", en: "Telmex and Bancomer" },
              { es: "Ferrocarriles Nacionales", en: "National Railways" },
            ],
          correctAnswer: "0",
          explanation: { es: "PEMEX (petróleo) y CFE (Comisión Federal de Electricidad, 1937) fueron las grandes empresas paraestatales del modelo mixto: Estado propietario de energía, industria privada para manufactura y comercio.", en: "PEMEX (oil) and CFE (Federal Electricity Commission, 1937) were the great state enterprises of the mixed model: State owner of energy, private industry for manufacturing and commerce." }
        },
        {
          id: "hm_mc_006",
          type: "true-false",
          prompt: { es: "México organizó los Juegos Olímpicos de 1968, siendo el primer país latinoamericano en hacerlo.", en: "Mexico organized the 1968 Olympic Games, being the first Latin American country to do so." },
          correctAnswer: "true",
          explanation: { es: "México fue sede de los Juegos Olímpicos de 1968, lo que el gobierno usó para proyectar una imagen de modernidad. Sin embargo, el Movimiento del 68 y la masacre de Tlatelolco empañaron este logro.", en: "Mexico hosted the 1968 Olympic Games, which the government used to project an image of modernity. However, the '68 Movement and the Tlatelolco massacre tarnished this achievement." }
        },
        {
          id: "hm_mc_007",
          type: "multiple-choice",
          prompt: { es: "¿A qué presidente se asocia principalmente el período del 'desarrollo estabilizador' y el tipo de cambio fijo de 12.50 pesos?", en: "Which president is mainly associated with the 'stabilizing development' period and the fixed exchange rate of 12.50 pesos?" },
          options: [
              { es: "Antonio Ortiz Mena como Secretario de Hacienda de Ruiz Cortines / López Mateos / Díaz Ordaz", en: "Antonio Ortiz Mena as Finance Secretary under Ruiz Cortines / López Mateos / Díaz Ordaz" },
              { es: "Adolfo López Mateos exclusivamente", en: "Adolfo López Mateos exclusively" },
              { es: "Miguel Alemán", en: "Miguel Alemán" },
              { es: "Luis Echeverría", en: "Luis Echeverría" },
            ],
          correctAnswer: "0",
          explanation: { es: "Antonio Ortiz Mena fue el verdadero arquitecto del 'desarrollo estabilizador' como Secretario de Hacienda durante 12 años (1958-1970). El tipo de cambio de 12.50 pesos por dólar estuvo fijo desde 1954 hasta 1976.", en: "Antonio Ortiz Mena was the true architect of 'stabilizing development' as Finance Secretary for 12 years (1958-1970). The exchange rate of 12.50 pesos per dollar remained fixed from 1954 to 1976." }
        },
        {
          id: "hm_mc_008",
          type: "order-steps",
          prompt: { es: "Ordena los presidentes del 'milagro mexicano' (1946-1970):", en: "Order the presidents of the 'Mexican miracle' (1946-1970):" },
          options: [
              { es: "Miguel Alemán Valdés (1946-1952)", en: "Miguel Alemán Valdés (1946-1952)" },
              { es: "Adolfo Ruiz Cortines (1952-1958)", en: "Adolfo Ruiz Cortines (1952-1958)" },
              { es: "Adolfo López Mateos (1958-1964)", en: "Adolfo López Mateos (1958-1964)" },
              { es: "Gustavo Díaz Ordaz (1964-1970)", en: "Gustavo Díaz Ordaz (1964-1970)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "Los cuatro presidentes del milagro mexicano: Alemán (industrialización y corrupción), Ruiz Cortines (austeridad y voto femenino 1953), López Mateos (libros de texto, ISSSTE), Díaz Ordaz (Tlatelolco 1968).", en: "The four presidents of the Mexican miracle: Alemán (industrialization and corruption), Ruiz Cortines (austerity and women's vote 1953), López Mateos (textbooks, ISSSTE), Díaz Ordaz (Tlatelolco 1968)." }
        }
      ]
    },
    {
      id: "mex-cont-l2",
      topicId: "mexico-contemporaneo",
      title: { es: "El Movimiento del 68 y la Crisis Económica", en: "The 1968 Movement and the Economic Crisis" },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hm_mc_009",
          type: "multiple-choice",
          prompt: { es: "¿Qué ocurrió el 2 de octubre de 1968 en la Plaza de las Tres Culturas de Tlatelolco?", en: "What happened on October 2, 1968, at the Plaza de las Tres Culturas in Tlatelolco?" },
          options: [
              { es: "El ejército masacró a estudiantes y civiles en una manifestación (cientos de muertos)", en: "The army massacred students and civilians at a demonstration (hundreds of dead)" },
              { es: "Los estudiantes tomaron la Ciudad de México", en: "Students took over Mexico City" },
              { es: "El gobierno negoció con el Consejo Nacional de Huelga", en: "The government negotiated with the National Strike Council" },
              { es: "Una protesta olímpica pacífica", en: "A peaceful Olympic protest" },
            ],
          correctAnswer: "0",
          explanation: { es: "El 2 de octubre de 1968, diez días antes de los Juegos Olímpicos, el Batallón Olimpia y el ejército abrieron fuego contra manifestantes en Tlatelolco. El número exacto de muertos sigue sin determinarse oficialmente (estimados: 30-300 o más).", en: "On October 2, 1968, ten days before the Olympic Games, the Olympic Battalion and the army opened fire on demonstrators in Tlatelolco. The exact number of deaths remains officially undetermined (estimates: 30-300 or more)." }
        },
        {
          id: "hm_mc_010",
          type: "true-false",
          prompt: { es: "El Movimiento Estudiantil de 1968 solo tenía demandas estudiantiles universitarias sin contenido político.", en: "The Student Movement of 1968 only had university student demands without political content." },
          correctAnswer: "false",
          explanation: { es: "El Movimiento del 68 exigía, entre otras cosas: libertad de presos políticos, derogación del delito de 'disolución social', diálogo público con el gobierno y democratización del país. Fue un movimiento social y político amplio.", en: "The '68 Movement demanded, among other things: freedom of political prisoners, repeal of the 'social dissolution' crime, public dialogue with the government, and democratization of the country. It was a broad social and political movement." }
        },
        {
          id: "hm_mc_011",
          type: "multiple-choice",
          prompt: { es: "¿Cómo se llamaba el grupo estudiantil que coordinó el Movimiento de 1968?", en: "What was the student group that coordinated the 1968 Movement?" },
          options: [
              { es: "Consejo Nacional de Huelga (CNH)", en: "National Strike Council (CNH)" },
              { es: "Federación de Estudiantes Mexicanos", en: "Federation of Mexican Students" },
              { es: "Comité 68", en: "Committee 68" },
              { es: "Brigadas Estudiantiles", en: "Student Brigades" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Consejo Nacional de Huelga (CNH), integrado por representantes de la UNAM, IPN y otras escuelas, coordinó el movimiento. Sus líderes incluían a Gilberto Guevara Niebla, Marcelino Perelló y otros.", en: "The National Strike Council (CNH), made up of representatives from UNAM, IPN, and other schools, coordinated the movement. Its leaders included Gilberto Guevara Niebla, Marcelino Perelló, and others." }
        },
        {
          id: "hm_mc_012",
          type: "fill-blank",
          prompt: { es: "El presidente Luis Echeverría (1970-1976) abandonó el 'desarrollo estabilizador' por un modelo llamado 'desarrollo _____'.", en: "President Luis Echeverría (1970-1976) abandoned 'stabilizing development' for a model called 'shared _____'." },
          correctAnswer: "compartido",
          explanation: { es: "El 'Desarrollo Compartido' de Echeverría aumentó el gasto público y la deuda externa para redistribuir el ingreso y compensar las tensiones sociales post-68. Terminó con una devaluación del peso en 1976 (de 12.50 a 22 pesos por dólar).", en: "Echeverría's 'Shared Development' increased public spending and external debt to redistribute income and compensate for post-68 social tensions. It ended with a peso devaluation in 1976 (from 12.50 to 22 pesos per dollar)." }
        },
        {
          id: "hm_mc_013",
          type: "multiple-choice",
          prompt: { es: "¿Qué crisis económica sacudió a México en 1982?", en: "What economic crisis shook Mexico in 1982?" },
          options: [
              { es: "Crisis de la deuda externa: México declaró moratoria de pagos", en: "External debt crisis: Mexico declared a payments moratorium" },
              { es: "Crisis bancaria por corrupción", en: "Banking crisis due to corruption" },
              { es: "Devaluación causada por el terremoto de 1985", en: "Devaluation caused by the 1985 earthquake" },
              { es: "Crisis por la caída del petróleo en los 1990s", en: "Crisis due to oil price collapse in the 1990s" },
            ],
          correctAnswer: "0",
          explanation: { es: "El 12 de agosto de 1982, México declaró que no podía pagar su deuda externa (85,000 millones de dólares), desencadenando la 'crisis de la deuda latinoamericana'. López Portillo nacionalizó la banca días después.", en: "On August 12, 1982, Mexico declared it could not pay its foreign debt ($85 billion), triggering the 'Latin American debt crisis'. López Portillo nationalized the banks days later." }
        },
        {
          id: "hm_mc_014",
          type: "true-false",
          prompt: { es: "El terremoto de 1985 tuvo un efecto paradójico: fortaleció a la sociedad civil y debilitó la legitimidad del PRI.", en: "The 1985 earthquake had a paradoxical effect: it strengthened civil society and weakened the PRI's legitimacy." },
          correctAnswer: "true",
          explanation: { es: "Los terremotos del 19 y 20 de septiembre de 1985 en la Ciudad de México causaron ~10,000 muertos. La ineptitud del gobierno de De la Madrid fortaleció la organización ciudadana autónoma, sembrando las bases de la sociedad civil mexicana.", en: "The earthquakes of September 19-20, 1985, in Mexico City caused ~10,000 deaths. De la Madrid's government ineptitude strengthened autonomous citizen organization, sowing the foundations of Mexican civil society." }
        },
        {
          id: "hm_mc_015",
          type: "multiple-choice",
          prompt: { es: "¿Qué elecciones presidenciales de 1988 fueron consideradas las más controvertidas de la historia moderna de México?", en: "What 1988 presidential elections were considered the most controversial in modern Mexican history?" },
          options: [
              { es: "Salinas vs Cárdenas: 'se cayó el sistema' en la noche electoral", en: "Salinas vs Cárdenas: 'the system crashed' on election night" },
              { es: "Zedillo vs Cárdenas (1994)", en: "Zedillo vs Cárdenas (1994)" },
              { es: "Fox vs Labastida (2000)", en: "Fox vs Labastida (2000)" },
              { es: "Calderón vs López Obrador (2006)", en: "Calderón vs López Obrador (2006)" },
            ],
          correctAnswer: "0",
          explanation: { es: "En 1988, Cuauhtémoc Cárdenas (hijo del expresidente) compitió contra Carlos Salinas de Gortari. En la noche electoral 'se cayó el sistema' de cómputo. Salinas fue declarado ganador en medio de acusaciones de fraude.", en: "In 1988, Cuauhtémoc Cárdenas (son of the former president) ran against Carlos Salinas de Gortari. On election night the computer 'system crashed'. Salinas was declared the winner amid fraud accusations." }
        },
        {
          id: "hm_mc_016",
          type: "order-steps",
          prompt: { es: "Ordena los eventos políticos y económicos del México de 1968-1994:", en: "Order the political and economic events of Mexico from 1968-1994:" },
          options: [
              { es: "Masacre de Tlatelolco (2 oct. 1968)", en: "Tlatelolco massacre (Oct. 2, 1968)" },
              { es: "Crisis de deuda y devaluación (1982)", en: "Debt crisis and devaluation (1982)" },
              { es: "Terremoto de 1985 y surgimiento de la sociedad civil", en: "1985 earthquake and rise of civil society" },
              { es: "Elecciones fraudulentas de 1988 y fundación del PRD", en: "Fraudulent elections of 1988 and founding of PRD" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "Tlatelolco (1968) mostró las límites del autoritarismo; la crisis de 1982 acabó con el 'milagro económico'; el terremoto (1985) creó la sociedad civil; el fraude de 1988 motivó la creación del PRD de Cárdenas.", en: "Tlatelolco (1968) showed the limits of authoritarianism; the 1982 crisis ended the 'economic miracle'; the earthquake (1985) created civil society; the 1988 fraud motivated the creation of Cárdenas's PRD." }
        }
      ]
    },
    {
      id: "mex-cont-l3",
      topicId: "mexico-contemporaneo",
      title: { es: "Neoliberalismo, TLCAN y la Alternancia Democrática", en: "Neoliberalism, NAFTA, and Democratic Alternation" },
      type: "quiz",
      order: 3,
      questions: [
        {
          id: "hm_mc_017",
          type: "multiple-choice",
          prompt: { es: "¿En qué fecha entró en vigor el Tratado de Libre Comercio de América del Norte (TLCAN)?", en: "On what date did the North American Free Trade Agreement (NAFTA) enter into force?" },
          options: [
              { es: "1° de enero de 1994", en: "January 1, 1994" },
              { es: "1° de enero de 1988", en: "January 1, 1988" },
              { es: "1° de diciembre de 1992", en: "December 1, 1992" },
              { es: "1° de enero de 2000", en: "January 1, 2000" },
            ],
          correctAnswer: "0",
          explanation: { es: "El TLCAN entró en vigor el 1° de enero de 1994, el mismo día que el EZLN se levantó en Chiapas. El tratado fue negociado por Salinas de Gortari con EUA (Bush/Clinton) y Canadá.", en: "NAFTA entered into force on January 1, 1994, the same day the EZLN rose up in Chiapas. The treaty was negotiated by Salinas de Gortari with the USA (Bush/Clinton) and Canada." }
        },
        {
          id: "hm_mc_018",
          type: "true-false",
          prompt: { es: "El EZLN (Ejército Zapatista de Liberación Nacional) se levantó en armas el 1° de enero de 1994 en el estado de Chiapas.", en: "The EZLN (Zapatista Army of National Liberation) rose up in arms on January 1, 1994, in the state of Chiapas." },
          correctAnswer: "true",
          explanation: { es: "El EZLN, liderado por el Subcomandante Marcos, tomó San Cristóbal de las Casas y otras ciudades chiapanecas el 1° de enero de 1994, día de entrada del TLCAN, protestando contra el neoliberalismo y en defensa de los derechos indígenas.", en: "The EZLN, led by Subcomandante Marcos, took San Cristóbal de las Casas and other Chiapas cities on January 1, 1994, the day NAFTA entered into force, protesting against neoliberalism and in defense of indigenous rights." }
        },
        {
          id: "hm_mc_019",
          type: "multiple-choice",
          prompt: { es: "¿Qué crisis económica obligó al gobierno de Zedillo a devaluar el peso en diciembre de 1994?", en: "What economic crisis forced Zedillo's government to devalue the peso in December 1994?" },
          options: [
              { es: "El 'error de diciembre' (crisis del peso de 1994)", en: "The 'December error' (1994 peso crisis)" },
              { es: "La crisis de 1982", en: "The 1982 crisis" },
              { es: "El terremoto de 1985", en: "The 1985 earthquake" },
              { es: "La crisis asiática de 1997", en: "The 1997 Asian crisis" },
            ],
          correctAnswer: "0",
          explanation: { es: "El 'error de diciembre' fue la devaluación del peso en diciembre de 1994, pocas semanas después de que Zedillo asumió la presidencia. EUA prestó 50,000 millones de dólares para estabilizar la economía mexicana.", en: "The 'December error' was the peso devaluation in December 1994, a few weeks after Zedillo took office. The USA lent $50 billion to stabilize the Mexican economy." }
        },
        {
          id: "hm_mc_020",
          type: "fill-blank",
          prompt: { es: "En el año _____, Vicente Fox del PAN ganó las elecciones presidenciales, dando fin a 71 años de hegemonía priísta.", en: "In the year _____, Vicente Fox of the PAN won the presidential elections, ending 71 years of PRI hegemony." },
          correctAnswer: "2000",
          explanation: { es: "El 2 de julio de 2000, Vicente Fox Quesada del Partido Acción Nacional (PAN) derrotó al candidato del PRI Francisco Labastida, logrando la primera alternancia democrática pacífica en la historia moderna de México.", en: "On July 2, 2000, Vicente Fox Quesada of the National Action Party (PAN) defeated PRI candidate Francisco Labastida, achieving the first peaceful democratic alternation in modern Mexican history." }
        },
        {
          id: "hm_mc_021",
          type: "multiple-choice",
          prompt: { es: "¿Cuáles fueron las principales reformas neoliberales de Carlos Salinas de Gortari (1988-1994)?", en: "What were the main neoliberal reforms of Carlos Salinas de Gortari (1988-1994)?" },
          options: [
              { es: "Privatización de empresas estatales (Telmex, bancos), TLCAN y reforma del Artículo 27 (ejidos)", en: "Privatization of state enterprises (Telmex, banks), NAFTA, and reform of Article 27 (ejidos)" },
              { es: "Nacionalización del petróleo y reforma agraria", en: "Oil nationalization and agrarian reform" },
              { es: "Educación socialista y reforma sindical", en: "Socialist education and union reform" },
              { es: "Creación de PEMEX y CFE", en: "Creation of PEMEX and CFE" },
            ],
          correctAnswer: "0",
          explanation: { es: "Salinas privatizó Telmex (a Carlos Slim), la banca, aerolíneas y otras empresas; negoció el TLCAN; y reformó el Artículo 27 para permitir la venta de tierras ejidales, desmontando el legado cardenista.", en: "Salinas privatized Telmex (to Carlos Slim), the banks, airlines, and other enterprises; negotiated NAFTA; and reformed Article 27 to allow the sale of ejidal land, dismantling the Cardenist legacy." }
        },
        {
          id: "hm_mc_022",
          type: "true-false",
          prompt: { es: "México ingresó a la OCDE (Organización para la Cooperación y el Desarrollo Económicos) en 1994, siendo el único país latinoamericano fundador.", en: "Mexico joined the OECD (Organization for Economic Co-operation and Development) in 1994, being the only founding Latin American country." },
          correctAnswer: "true",
          explanation: { es: "México ingresó a la OCDE el 18 de mayo de 1994, convirtiéndose en el primer y único país latinoamericano miembro en esa época. Esto reforzó la imagen del proyecto neoliberal salinista de integrar a México al 'primer mundo'.", en: "Mexico joined the OECD on May 18, 1994, becoming the first and only Latin American member country at that time. This reinforced the image of Salinas's neoliberal project of integrating Mexico into the 'first world'." }
        },
        {
          id: "hm_mc_023",
          type: "multiple-choice",
          prompt: { es: "¿Qué hecho histórico ocurrió el 23 de marzo de 1994 durante la campaña presidencial mexicana?", en: "What historical event occurred on March 23, 1994, during the Mexican presidential campaign?" },
          options: [
              { es: "Asesinato de Luis Donaldo Colosio, candidato del PRI a la presidencia", en: "Assassination of Luis Donaldo Colosio, PRI presidential candidate" },
              { es: "Atentado contra Carlos Salinas", en: "Assassination attempt on Carlos Salinas" },
              { es: "Asesinato del candidato del PRD", en: "Assassination of the PRD candidate" },
              { es: "Levantamiento del EZLN en Guadalajara", en: "EZLN uprising in Guadalajara" },
            ],
          correctAnswer: "0",
          explanation: { es: "Luis Donaldo Colosio fue asesinado en Lomas Taurinas, Tijuana, el 23 de marzo de 1994, conmocionando al país. Ernesto Zedillo lo sustituyó como candidato y ganó las elecciones en agosto de 1994.", en: "Luis Donaldo Colosio was assassinated in Lomas Taurinas, Tijuana, on March 23, 1994, shocking the country. Ernesto Zedillo replaced him as candidate and won the elections in August 1994." }
        },
        {
          id: "hm_mc_024",
          type: "order-steps",
          prompt: { es: "Ordena los eventos que llevaron a la alternancia democrática en México:", en: "Order the events that led to democratic alternation in Mexico:" },
          options: [
              { es: "Fraude electoral de 1988 y fundación del PRD (Cárdenas)", en: "1988 electoral fraud and founding of PRD (Cárdenas)" },
              { es: "Reformas electorales de la década de 1990 (IFE autónomo, 1996)", en: "Electoral reforms of the 1990s (autonomous IFE, 1996)" },
              { es: "Elecciones intermedias de 1997: PRI pierde mayoría en la Cámara", en: "1997 midterm elections: PRI loses majority in Congress" },
              { es: "Victoria de Vicente Fox (PAN) en 2000", en: "Vicente Fox (PAN) victory in 2000" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "El fraude de 1988 creó al PRD; las reformas de los 90 crearon el IFE autónomo; en 1997 el PRI perdió su mayoría absoluta (primera vez desde 1929); en 2000 Fox ganó la presidencia.", en: "The 1988 fraud created the PRD; the 1990s reforms created the autonomous IFE; in 1997 the PRI lost its absolute majority (first time since 1929); in 2000 Fox won the presidency." }
        }
      ]
    }
  ]
};
