import { Topic } from "@/lib/types";

export const reconstruccionNacionalTopic: Topic = {
  id: "reconstruccion-nacional",
  subjectId: "historia-mexico",
  title: { es: "Reconstrucción Nacional y Cardenismo", en: "National Reconstruction and Cardenism" },
  description: { es: "Los gobiernos posrevolucionarios, el Maximato y la expropiación petrolera.", en: "Post-revolutionary governments, the Maximato, and the oil expropriation." },
  order: 7,
  color: "text-red-600",
  icon: "landmark",
  bgGradient: "from-red-500 to-rose-600",
  lessons: [
    {
      id: "reconstruccion-l1",
      topicId: "reconstruccion-nacional",
      title: { es: "Caudillismo y el Maximato (1920-1934)", en: "Caudillism and the Maximato (1920-1934)" },
      type: "learn",
      order: 1,
      questions: [
        {
          id: "hm_rn_001",
          type: "multiple-choice",
          prompt: { es: "¿Quién fue presidente de México inmediatamente después del asesinato de Carranza en 1920?", en: "Who was president of Mexico immediately after Carranza's assassination in 1920?" },
          options: [
              { es: "Álvaro Obregón", en: "Álvaro Obregón" },
              { es: "Plutarco Elías Calles", en: "Plutarco Elías Calles" },
              { es: "Adolfo de la Huerta", en: "Adolfo de la Huerta" },
              { es: "Lázaro Cárdenas", en: "Lázaro Cárdenas" },
            ],
          correctAnswer: "0",
          explanation: { es: "Álvaro Obregón gobernó de 1920 a 1924. Su período se caracterizó por la pacificación del país, la política educativa de José Vasconcelos y el inicio de la distribución de tierras.", en: "Álvaro Obregón governed from 1920 to 1924. His period was characterized by pacification of the country, José Vasconcelos's educational policy, and the beginning of land distribution." }
        },
        {
          id: "hm_rn_002",
          type: "true-false",
          prompt: { es: "José Vasconcelos, como rector de la UNAM y Secretario de Educación, impulsó el muralismo mexicano como arte público.", en: "José Vasconcelos, as rector of UNAM and Secretary of Education, promoted Mexican muralism as public art." },
          correctAnswer: "true",
          explanation: { es: "Vasconcelos encargó murales a Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros en edificios públicos para educar visualmente a la población. El muralismo mexicano se convirtió en un movimiento artístico mundial.", en: "Vasconcelos commissioned murals from Diego Rivera, José Clemente Orozco, and David Alfaro Siqueiros in public buildings to visually educate the population. Mexican muralism became a world art movement." }
        },
        {
          id: "hm_rn_003",
          type: "multiple-choice",
          prompt: { es: "¿En qué año fue asesinado Álvaro Obregón, justo después de ser reelegido presidente?", en: "In what year was Álvaro Obregón assassinated, just after being re-elected president?" },
          options: [
              { es: "1928", en: "1928" },
              { es: "1924", en: "1924" },
              { es: "1930", en: "1930" },
              { es: "1926", en: "1926" },
            ],
          correctAnswer: "0",
          explanation: { es: "Obregón fue asesinado el 17 de julio de 1928 por León Toral, un fanático cristero, en el restaurante La Bombilla de San Ángel. Su muerte abrió la crisis del caudillismo y llevó a la fundación del PNR.", en: "Obregón was assassinated on July 17, 1928, by León Toral, a Cristero fanatic, at La Bombilla restaurant in San Ángel. His death opened the caudillism crisis and led to the founding of the PNR." }
        },
        {
          id: "hm_rn_004",
          type: "fill-blank",
          prompt: { es: "El partido político fundado por Plutarco Elías Calles en 1929 se llamó Partido Nacional _____ (PNR).", en: "The political party founded by Plutarco Elías Calles in 1929 was called the National _____ Party (PNR)." },
          correctAnswer: "Revolucionario",
          explanation: { es: "El PNR (1929), fundado por Calles para institucionalizar la lucha política y evitar más confrontaciones armadas, fue la base del sistema de partido único que después se transformó en PRM (1938) y finalmente en PRI (1946).", en: "The PNR (1929), founded by Calles to institutionalize political struggle and prevent more armed confrontations, was the basis of the single-party system that later transformed into PRM (1938) and finally into PRI (1946)." }
        },
        {
          id: "hm_rn_005",
          type: "multiple-choice",
          prompt: { es: "¿Cuánto duró el período conocido como el 'Maximato', en el que Calles controló la política mexicana desde fuera del poder?", en: "How long did the period known as the 'Maximato' last, during which Calles controlled Mexican politics from outside power?" },
          options: [
              { es: "1928-1934 (6 años)", en: "1928-1934 (6 years)" },
              { es: "1920-1928 (8 años)", en: "1920-1928 (8 years)" },
              { es: "1934-1940 (6 años)", en: "1934-1940 (6 years)" },
              { es: "1924-1934 (10 años)", en: "1924-1934 (10 years)" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Maximato (1928-1934) fue el período en que Plutarco Elías Calles, el 'Jefe Máximo de la Revolución', manejó a tres presidentes títeres (Portes Gil, Ortiz Rubio, Abelardo Rodríguez) desde las sombras.", en: "The Maximato (1928-1934) was the period when Plutarco Elías Calles, the 'Maximum Chief of the Revolution', controlled three puppet presidents (Portes Gil, Ortiz Rubio, Abelardo Rodríguez) from the shadows." }
        },
        {
          id: "hm_rn_006",
          type: "true-false",
          prompt: { es: "La Guerra Cristera (1926-1929) fue un conflicto entre el gobierno de Calles y la Iglesia Católica por las restricciones constitucionales al clero.", en: "The Cristero War (1926-1929) was a conflict between Calles's government and the Catholic Church over constitutional restrictions on the clergy." },
          correctAnswer: "true",
          explanation: { es: "La Ley Calles (1926) restringió drásticamente las actividades del clero. Los cristeros (guerrilleros católicos) se levantaron con el grito '¡Viva Cristo Rey!'. El conflicto causó aproximadamente 70,000 muertos.", en: "The Calles Law (1926) drastically restricted clergy activities. The Cristeros (Catholic guerrillas) rose with the cry 'Long live Christ the King!' The conflict caused approximately 70,000 deaths." }
        },
        {
          id: "hm_rn_007",
          type: "multiple-choice",
          prompt: { es: "¿Qué muralista mexicano pintó 'El hombre en el cruce de caminos' (1934) en el Rockefeller Center de Nueva York, que fue destruido por incluir a Lenin?", en: "Which Mexican muralist painted 'Man at the Crossroads' (1934) at New York's Rockefeller Center, which was destroyed for including Lenin?" },
          options: [
              { es: "Diego Rivera", en: "Diego Rivera" },
              { es: "José Clemente Orozco", en: "José Clemente Orozco" },
              { es: "David Alfaro Siqueiros", en: "David Alfaro Siqueiros" },
              { es: "Rufino Tamayo", en: "Rufino Tamayo" },
            ],
          correctAnswer: "0",
          explanation: { es: "Diego Rivera incluyó un retrato de Lenin en el mural, lo que escandalizó a los Rockefeller. El mural fue destruido. Rivera lo reprodujo en el Palacio de Bellas Artes de México como 'El hombre controlador del universo'.", en: "Diego Rivera included a portrait of Lenin in the mural, which scandalized the Rockefellers. The mural was destroyed. Rivera reproduced it at Mexico's Palace of Fine Arts as 'Man, Controller of the Universe'." }
        },
        {
          id: "hm_rn_008",
          type: "order-steps",
          prompt: { es: "Ordena los presidentes del período posrevolucionario (1920-1934):", en: "Order the presidents of the post-revolutionary period (1920-1934):" },
          options: [
              { es: "Álvaro Obregón (1920-1924)", en: "Álvaro Obregón (1920-1924)" },
              { es: "Plutarco Elías Calles (1924-1928)", en: "Plutarco Elías Calles (1924-1928)" },
              { es: "Emilio Portes Gil / Ortiz Rubio / Abelardo Rodríguez (Maximato, 1928-1934)", en: "Emilio Portes Gil / Ortiz Rubio / Abelardo Rodríguez (Maximato, 1928-1934)" },
              { es: "Lázaro Cárdenas (1934-1940)", en: "Lázaro Cárdenas (1934-1940)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "Obregón → Calles → Maximato (tres presidentes controlados por Calles) → Cárdenas (quien rompió con Calles y lo exilió en 1936).", en: "Obregón → Calles → Maximato (three presidents controlled by Calles) → Cárdenas (who broke with Calles and exiled him in 1936)." }
        }
      ]
    },
    {
      id: "reconstruccion-l2",
      topicId: "reconstruccion-nacional",
      title: { es: "El Cardenismo y la Expropiación Petrolera", en: "Cardenism and the Oil Expropriation" },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hm_rn_009",
          type: "multiple-choice",
          prompt: { es: "¿En qué fecha anunció Lázaro Cárdenas la expropiación petrolera?", en: "On what date did Lázaro Cárdenas announce the oil expropriation?" },
          options: [
              { es: "18 de marzo de 1938", en: "March 18, 1938" },
              { es: "5 de febrero de 1917", en: "February 5, 1917" },
              { es: "15 de septiembre de 1810", en: "September 15, 1810" },
              { es: "20 de noviembre de 1910", en: "November 20, 1910" },
            ],
          correctAnswer: "0",
          explanation: { es: "El 18 de marzo de 1938, Lázaro Cárdenas anunció la expropiación de los bienes de las compañías petroleras (principalmente inglesas y estadounidenses), basándose en el Artículo 27 constitucional.", en: "On March 18, 1938, Lázaro Cárdenas announced the expropriation of oil company assets (mainly British and American), based on Article 27 of the Constitution." }
        },
        {
          id: "hm_rn_010",
          type: "true-false",
          prompt: { es: "Tras la expropiación, el gobierno mexicano creó PEMEX (Petróleos Mexicanos) para administrar la industria petrolera.", en: "After the expropriation, the Mexican government created PEMEX (Petróleos Mexicanos) to manage the oil industry." },
          correctAnswer: "true",
          explanation: { es: "PEMEX fue creada el 7 de junio de 1938, solo tres meses después de la expropiación. Miles de mexicanos donaron joyas y objetos de valor para pagar la deuda a las compañías expropiadas en un acto de apoyo patriótico.", en: "PEMEX was created on June 7, 1938, just three months after the expropriation. Thousands of Mexicans donated jewelry and valuables to pay the debt to the expropriated companies in an act of patriotic support." }
        },
        {
          id: "hm_rn_011",
          type: "multiple-choice",
          prompt: { es: "¿Cuántos ejidatarios aproximadamente se beneficiaron de la reforma agraria cardenista?", en: "Approximately how many ejidatarios benefited from Cárdenas's agrarian reform?" },
          options: [
              { es: "800,000 campesinos y 18 millones de hectáreas distribuidas", en: "800,000 peasants and 18 million hectares distributed" },
              { es: "100,000 campesinos", en: "100,000 peasants" },
              { es: "10 millones con 5 millones de hectáreas", en: "10 million with 5 million hectares" },
              { es: "Solo 50,000 en la Comarca Lagunera", en: "Only 50,000 in La Laguna region" },
            ],
          correctAnswer: "0",
          explanation: { es: "Cárdenas distribuyó más tierra que todos los presidentes anteriores juntos: aproximadamente 18 millones de hectáreas a 800,000 beneficiarios. La Comarca Lagunera (algodón) y los cañaverales de Morelos/Veracruz fueron ejidalizados colectivamente.", en: "Cárdenas distributed more land than all previous presidents combined: approximately 18 million hectares to 800,000 beneficiaries. La Laguna (cotton) and the sugarcane fields of Morelos/Veracruz were collectively 'ejiditalized'." }
        },
        {
          id: "hm_rn_012",
          type: "fill-blank",
          prompt: { es: "Lázaro Cárdenas decretó la expropiación de las compañías petroleras invocando el Artículo _____ de la Constitución de 1917.", en: "Lázaro Cárdenas decreed the oil expropriation invoking Article _____ of the Constitution of 1917." },
          correctAnswer: "27",
          explanation: { es: "El Artículo 27 declara que los recursos del subsuelo (incluyendo el petróleo) son propiedad originaria de la Nación. Cárdenas lo aplicó cuando las compañías extranjeras se negaron a cumplir el fallo de la Suprema Corte sobre salarios.", en: "Article 27 declares that subsoil resources (including oil) are the Nation's original property. Cárdenas invoked it when foreign companies refused to comply with the Supreme Court's ruling on wages." }
        },
        {
          id: "hm_rn_013",
          type: "multiple-choice",
          prompt: { es: "¿Qué organización sindical nacional creó Cárdenas para aglutinar a los trabajadores?", en: "What national labor organization did Cárdenas create to unite workers?" },
          options: [
              { es: "CTM (Confederación de Trabajadores de México)", en: "CTM (Confederation of Mexican Workers)" },
              { es: "CROM (Confederación Regional Obrera Mexicana)", en: "CROM (Regional Confederation of Mexican Workers)" },
              { es: "CNC (Confederación Nacional Campesina)", en: "CNC (National Peasant Confederation)" },
              { es: "CROC", en: "CROC" },
            ],
          correctAnswer: "0",
          explanation: { es: "La CTM fue fundada en 1936 bajo el liderazgo de Vicente Lombardo Toledano, con apoyo de Cárdenas. Junto con la CNC (1938) para campesinos, conformó las bases corporativas del partido oficial (PRM).", en: "The CTM was founded in 1936 under Vicente Lombardo Toledano's leadership, with Cárdenas's support. Together with the CNC (1938) for peasants, it formed the corporate bases of the official party (PRM)." }
        },
        {
          id: "hm_rn_014",
          type: "true-false",
          prompt: { es: "Cárdenas concedió asilo político en México a León Trotsky, rival de Stalin en la URSS.", en: "Cárdenas granted political asylum in Mexico to Leon Trotsky, Stalin's rival in the USSR." },
          correctAnswer: "true",
          explanation: { es: "Trotsky llegó a México en 1937 y vivió en Coyoacán. Fue asesinado el 20 de agosto de 1940 por el agente estalinista Ramón Mercader con un piolet. Diego Rivera y Frida Kahlo fueron amigos cercanos de Trotsky.", en: "Trotsky arrived in Mexico in 1937 and lived in Coyoacán. He was assassinated on August 20, 1940, by Stalinist agent Ramón Mercader with an ice axe. Diego Rivera and Frida Kahlo were close friends of Trotsky." }
        },
        {
          id: "hm_rn_015",
          type: "multiple-choice",
          prompt: { es: "¿En qué año transformó Cárdenas el Partido Nacional Revolucionario (PNR) en el Partido de la Revolución Mexicana (PRM)?", en: "In what year did Cárdenas transform the National Revolutionary Party (PNR) into the Party of the Mexican Revolution (PRM)?" },
          options: [
              { es: "1938", en: "1938" },
              { es: "1934", en: "1934" },
              { es: "1940", en: "1940" },
              { es: "1936", en: "1936" },
            ],
          correctAnswer: "0",
          explanation: { es: "En 1938, Cárdenas transformó el PNR en PRM, reorganizando el partido en cuatro sectores: obrero, campesino, popular y militar. La inclusión del sector militar fue característica del cardenismo.", en: "In 1938, Cárdenas transformed the PNR into the PRM, reorganizing the party into four sectors: labor, peasant, popular, and military. The inclusion of the military sector was characteristic of Cardenism." }
        },
        {
          id: "hm_rn_016",
          type: "order-steps",
          prompt: { es: "Ordena las principales medidas del gobierno cardenista:", en: "Order the main measures of Cárdenas's government:" },
          options: [
              { es: "Ruptura con el Maximato y exilio de Calles (1936)", en: "Break with the Maximato and Calles's exile (1936)" },
              { es: "Reforma agraria masiva (Comarca Lagunera, 1936)", en: "Massive agrarian reform (La Laguna region, 1936)" },
              { es: "Fundación de la CTM y reorganización del partido (PRM, 1936-1938)", en: "Founding of CTM and party reorganization (PRM, 1936-1938)" },
              { es: "Expropiación petrolera (18 marzo 1938)", en: "Oil expropriation (March 18, 1938)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "Cárdenas primero consolidó su poder expulsando a Calles (1936), luego implementó la reforma agraria, reorganizó el partido y los trabajadores, y culminó con la expropiación petrolera (1938).", en: "Cárdenas first consolidated his power by expelling Calles (1936), then implemented agrarian reform, reorganized the party and workers, and culminated with the oil expropriation (1938)." }
        }
      ]
    },
    {
      id: "reconstruccion-l3",
      topicId: "reconstruccion-nacional",
      title: { es: "Legado Cardenista y Transición al Desarrollo", en: "Cardenist Legacy and Transition to Development" },
      type: "quiz",
      order: 3,
      questions: [
        {
          id: "hm_rn_017",
          type: "multiple-choice",
          prompt: { es: "¿Cuál fue el sistema ejidal que el cardenismo expandió masivamente?", en: "What was the ejidal system that Cardenism massively expanded?" },
          options: [
              { es: "Propiedad colectiva de la tierra entregada a comunidades campesinas", en: "Collective land ownership granted to peasant communities" },
              { es: "Latifundios estatales administrados por el gobierno", en: "State latifundios administered by the government" },
              { es: "Cooperativas de productores privados", en: "Private producer cooperatives" },
              { es: "Arrendamiento de tierras a pequeños campesinos", en: "Land rental to small peasants" },
            ],
          correctAnswer: "0",
          explanation: { es: "El ejido es una forma de propiedad social donde la tierra pertenece a la nación y es explotada colectivamente por los ejidatarios. Cárdenas creyó en el ejido colectivo (como en La Laguna) como modelo agrícola socialista.", en: "The ejido is a form of social property where the land belongs to the nation and is collectively exploited by ejidatarios. Cárdenas believed in the collective ejido (as in La Laguna) as a socialist agricultural model." }
        },
        {
          id: "hm_rn_018",
          type: "true-false",
          prompt: { es: "El cardenismo representó el punto más izquierdista de los gobiernos de la Revolución Institucionalizada en México.", en: "Cardenism represented the furthest left point of the Institutionalized Revolution governments in Mexico." },
          correctAnswer: "true",
          explanation: { es: "Cárdenas, con la reforma agraria, la expropiación petrolera, la educación socialista y el apoyo a los sindicatos, representó el ala más radical del PRM. Sus sucesores (Ávila Camacho, Alemán) viraron hacia el centro-derecha.", en: "Cárdenas, with agrarian reform, oil expropriation, socialist education, and support for unions, represented the most radical wing of the PRM. His successors (Ávila Camacho, Alemán) shifted toward the center-right." }
        },
        {
          id: "hm_rn_019",
          type: "multiple-choice",
          prompt: { es: "¿Qué ocurrió con la política de educación socialista que impulsó Cárdenas?", en: "What happened to the socialist education policy that Cárdenas promoted?" },
          options: [
              { es: "Fue modificada por sus sucesores que la moderaron", en: "It was modified by his successors who moderated it" },
              { es: "Fue implementada hasta la actualidad", en: "It has been implemented to the present day" },
              { es: "Nunca se aplicó por oposición de la Iglesia", en: "It was never applied due to Church opposition" },
              { es: "Solo se aplicó en ciudades", en: "It was only applied in cities" },
            ],
          correctAnswer: "0",
          explanation: { es: "En 1946, el presidente Alemán reformó el Artículo 3° para eliminar el carácter 'socialista' de la educación y sustituirlo por 'democrático, nacional y científico', moderando el proyecto cardenista.", en: "In 1946, President Alemán reformed Article 3 to eliminate the 'socialist' character of education and replace it with 'democratic, national, and scientific', moderating the Cardenist project." }
        },
        {
          id: "hm_rn_020",
          type: "fill-blank",
          prompt: { es: "El Instituto Politécnico Nacional (IPN) fue fundado en _____ como parte del proyecto educativo de Cárdenas.", en: "The National Polytechnic Institute (IPN) was founded in _____ as part of Cárdenas's educational project." },
          correctAnswer: "1936",
          explanation: { es: "El IPN (1936) fue creado para formar técnicos e ingenieros que impulsaran el desarrollo industrial de México. Fue concebido como la universidad del pueblo, en contraste con la UNAM percibida como más elitista.", en: "The IPN (1936) was created to train technicians and engineers to drive Mexico's industrial development. It was conceived as the people's university, in contrast to UNAM perceived as more elitist." }
        },
        {
          id: "hm_rn_021",
          type: "multiple-choice",
          prompt: { es: "¿Qué sucedió con el sector militar dentro del PRM cuando Manuel Ávila Camacho transformó el partido en PRI en 1946?", en: "What happened to the military sector within the PRM when Manuel Ávila Camacho transformed the party into PRI in 1946?" },
          options: [
              { es: "El sector militar fue eliminado del partido", en: "The military sector was eliminated from the party" },
              { es: "El sector militar quedó como el más poderoso", en: "The military sector remained the most powerful" },
              { es: "El ejército creó su propio partido", en: "The army created its own party" },
              { es: "Los militares se unieron al sector popular", en: "The military joined the popular sector" },
            ],
          correctAnswer: "0",
          explanation: { es: "Al transformar el PRM en PRI (1946), el sector militar fue eliminado, consolidando el principio de subordinación del ejército al poder civil — un logro histórico de la institucionalización revolucionaria mexicana.", en: "When transforming the PRM into PRI (1946), the military sector was eliminated, consolidating the principle of the army's subordination to civilian power — a historic achievement of Mexico's revolutionary institutionalization." }
        },
        {
          id: "hm_rn_022",
          type: "true-false",
          prompt: { es: "México sirvió de refugio para los republicanos españoles exiliados tras la Guerra Civil Española (1936-1939).", en: "Mexico served as a refuge for Spanish republicans exiled after the Spanish Civil War (1936-1939)." },
          correctAnswer: "true",
          explanation: { es: "Cárdenas abrió las puertas a miles de republicanos españoles que huían del franquismo. Los exiliados enriquecieron enormemente la cultura, ciencia y educación mexicanas. El Colegio de México fue fundado por exiliados españoles en 1940.", en: "Cárdenas opened the doors to thousands of Spanish republicans fleeing Francoism. The exiles enormously enriched Mexican culture, science, and education. El Colegio de México was founded by Spanish exiles in 1940." }
        },
        {
          id: "hm_rn_023",
          type: "multiple-choice",
          prompt: { es: "¿Cuál fue el nombre del presidente que sustituyó a Cárdenas en 1940 y moderó el rumbo revolucionario?", en: "Who was the president who succeeded Cárdenas in 1940 and moderated the revolutionary course?" },
          options: [
              { es: "Manuel Ávila Camacho", en: "Manuel Ávila Camacho" },
              { es: "Miguel Alemán Valdés", en: "Miguel Alemán Valdés" },
              { es: "Adolfo Ruiz Cortines", en: "Adolfo Ruiz Cortines" },
              { es: "Gustavo Díaz Ordaz", en: "Gustavo Díaz Ordaz" },
            ],
          correctAnswer: "0",
          explanation: { es: "Manuel Ávila Camacho (1940-1946) fue el último presidente militar de México. Moderó el cardenismo, apoyó a los Aliados en la Segunda Guerra Mundial (declaró guerra al Eje en 1942) y promovió la 'Unidad Nacional'.", en: "Manuel Ávila Camacho (1940-1946) was the last military president of Mexico. He moderated Cardenism, supported the Allies in WWII (declared war on the Axis in 1942), and promoted 'National Unity'." }
        },
        {
          id: "hm_rn_024",
          type: "order-steps",
          prompt: { es: "Ordena la evolución del partido oficial mexicano:", en: "Order the evolution of the Mexican official party:" },
          options: [
              { es: "PNR: Partido Nacional Revolucionario (Calles, 1929)", en: "PNR: National Revolutionary Party (Calles, 1929)" },
              { es: "PRM: Partido de la Revolución Mexicana (Cárdenas, 1938)", en: "PRM: Party of the Mexican Revolution (Cárdenas, 1938)" },
              { es: "PRI: Partido Revolucionario Institucional (Ávila Camacho, 1946)", en: "PRI: Institutional Revolutionary Party (Ávila Camacho, 1946)" },
              { es: "Derrota del PRI y alternancia democrática (Fox, 2000)", en: "PRI defeat and democratic alternation (Fox, 2000)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "PNR (1929) para institucionalizar la lucha política; PRM (1938) para incorporar corporativamente a obreros y campesinos; PRI (1946) eliminando el sector militar; derrota del PRI en 2000 con la alternancia democrática.", en: "PNR (1929) to institutionalize political struggle; PRM (1938) to corporately incorporate workers and peasants; PRI (1946) eliminating the military sector; PRI defeat in 2000 with democratic alternation." }
        }
      ]
    }
  ]
};
