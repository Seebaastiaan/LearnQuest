import { Topic } from "@/lib/types";

export const revolucionMexicanaTopic: Topic = {
  id: "revolucion-mexicana",
  subjectId: "historia-mexico",
  title: { es: "La Revolución Mexicana", en: "The Mexican Revolution" },
  description: { es: "El conflicto armado de 1910-1917 y la Constitución revolucionaria.", en: "The armed conflict of 1910-1917 and the revolutionary Constitution." },
  order: 6,
  color: "text-red-600",
  icon: "landmark",
  bgGradient: "from-red-500 to-rose-600",
  lessons: [
    {
      id: "revolucion-l1",
      topicId: "revolucion-mexicana",
      title: { es: "Inicio de la Revolución: Madero y el Maderismo", en: "Beginning of the Revolution: Madero and Maderism" },
      type: "learn",
      order: 1,
      questions: [
        {
          id: "hm_rm_001",
          type: "multiple-choice",
          prompt: { es: "¿Qué documento político de 1910 convocó al pueblo mexicano a rebelarse el 20 de noviembre?", en: "What 1910 political document called the Mexican people to rebel on November 20?" },
          options: [
              { es: "El Plan de San Luis Potosí", en: "The Plan of San Luis Potosí" },
              { es: "El Plan de Ayala", en: "The Plan of Ayala" },
              { es: "El Plan de Guadalupe", en: "The Plan of Guadalupe" },
              { es: "El Plan de Agua Prieta", en: "The Plan of Agua Prieta" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Plan de San Luis Potosí (5 de octubre de 1910), proclamado por Francisco I. Madero desde el exilio en EUA, declaró nulas las elecciones de 1910 y llamó al levantamiento armado el 20 de noviembre.", en: "The Plan of San Luis Potosí (October 5, 1910), proclaimed by Francisco I. Madero from exile in the USA, declared the 1910 elections null and called for armed uprising on November 20." }
        },
        {
          id: "hm_rm_002",
          type: "true-false",
          prompt: { es: "Francisco I. Madero fue asesinado durante la Decena Trágica (1913) por orden de Victoriano Huerta.", en: "Francisco I. Madero was assassinated during the Tragic Ten Days (1913) on orders from Victoriano Huerta." },
          correctAnswer: "true",
          explanation: { es: "En la Decena Trágica (9-19 de febrero de 1913), Victoriano Huerta traicionó a Madero en acuerdo con el embajador estadounidense Henry Lane Wilson (Pacto de la Embajada). Madero y el vicepresidente Pino Suárez fueron asesinados el 22 de febrero.", en: "In the Tragic Ten Days (February 9-19, 1913), Victoriano Huerta betrayed Madero in agreement with U.S. Ambassador Henry Lane Wilson (Embassy Pact). Madero and Vice President Pino Suárez were assassinated on February 22." }
        },
        {
          id: "hm_rm_003",
          type: "multiple-choice",
          prompt: { es: "¿Cuál era el lema político de la campaña de Madero que resumía su programa?", en: "What was the political slogan of Madero's campaign that summarized his program?" },
          options: [
              { es: "'Sufragio efectivo, no reelección'", en: "'Effective suffrage, no re-election'" },
              { es: "'Tierra y libertad'", en: "'Land and liberty'" },
              { es: "'México para los mexicanos'", en: "'Mexico for Mexicans'" },
              { es: "'Constitución y reformas'", en: "'Constitution and reforms'" },
            ],
          correctAnswer: "0",
          explanation: { es: "'Sufragio efectivo, no reelección' fue el lema que Madero tomó del propio Díaz (quien lo había usado para llegar al poder) para criticar la perpetuidad de Díaz en el poder. Hoy es el lema oficial del gobierno mexicano.", en: "'Effective suffrage, no re-election' was the slogan Madero took from Díaz himself (who had used it to come to power) to criticize Díaz's perpetuity in power. Today it is the official slogan of the Mexican government." }
        },
        {
          id: "hm_rm_004",
          type: "fill-blank",
          prompt: { es: "Porfirio Díaz firmó su renuncia y salió al exilio el 25 de mayo de 1911 en los Tratados de _____.", en: "Porfirio Díaz signed his resignation and went into exile on May 25, 1911, in the Treaties of _____." },
          correctAnswer: "Ciudad Juárez",
          explanation: { es: "Los Tratados de Ciudad Juárez (21 de mayo de 1911) pusieron fin al Porfiriato. Díaz renunció ante la presión militar maderista y se exilió en Francia, donde murió en 1915.", en: "The Treaties of Ciudad Juárez (May 21, 1911) ended the Porfiriato. Díaz resigned under Maderist military pressure and went into exile in France, where he died in 1915." }
        },
        {
          id: "hm_rm_005",
          type: "multiple-choice",
          prompt: { es: "¿Por qué el zapatismo (Emiliano Zapata) rompió con Madero después de que este asumió la presidencia?", en: "Why did Zapatism (Emiliano Zapata) break with Madero after he assumed the presidency?" },
          options: [
              { es: "Madero no cumplió su promesa de reforma agraria", en: "Madero did not fulfill his promise of agrarian reform" },
              { es: "Madero apoyó a los latifundistas del norte", en: "Madero supported northern landowners" },
              { es: "Zapata quería una monarquía", en: "Zapata wanted a monarchy" },
              { es: "Diferencias religiosas", en: "Religious differences" },
            ],
          correctAnswer: "0",
          explanation: { es: "Zapata esperaba que Madero devolviera las tierras a los pueblos del sur. Al ver que Madero era político y no agrario, proclamó el Plan de Ayala (noviembre 1911) que desconocía a Madero y exigía la restitución de tierras.", en: "Zapata expected Madero to return land to southern villages. Seeing that Madero was a politician, not an agrarian reformer, he proclaimed the Plan of Ayala (November 1911), which rejected Madero and demanded land restitution." }
        },
        {
          id: "hm_rm_006",
          type: "true-false",
          prompt: { es: "Pancho Villa y Emiliano Zapata se reunieron en la Ciudad de México en 1914 tras la caída de Victoriano Huerta.", en: "Pancho Villa and Emiliano Zapata met in Mexico City in 1914 after the fall of Victoriano Huerta." },
          correctAnswer: "true",
          explanation: { es: "La foto del 6 de diciembre de 1914 de Villa y Zapata en Palacio Nacional es icónica. La Convención de Aguascalientes (1914) intentó unificar a las facciones revolucionarias pero fracasó.", en: "The photo of December 6, 1914 of Villa and Zapata at the National Palace is iconic. The Aguascalientes Convention (1914) tried to unify the revolutionary factions but failed." }
        },
        {
          id: "hm_rm_007",
          type: "multiple-choice",
          prompt: { es: "¿Qué plan proclamado por Zapata en 1911 resumía el programa agrario del zapatismo?", en: "What plan proclaimed by Zapata in 1911 summarized the agrarian program of Zapatism?" },
          options: [
              { es: "Plan de Ayala", en: "Plan of Ayala" },
              { es: "Plan de San Luis", en: "Plan of San Luis" },
              { es: "Plan de Guadalupe", en: "Plan of Guadalupe" },
              { es: "Plan de Tuxtepec", en: "Plan of Tuxtepec" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Plan de Ayala (noviembre 1911) desconoció a Madero y llamó a la restitución inmediata de tierras, bosques y aguas a los pueblos despojados. El lema zapatista era 'Tierra y Libertad'.", en: "The Plan of Ayala (November 1911) rejected Madero and called for the immediate restitution of land, forests, and waters to dispossessed communities. The Zapatist motto was 'Land and Liberty'." }
        },
        {
          id: "hm_rm_008",
          type: "order-steps",
          prompt: { es: "Ordena los eventos del inicio de la Revolución Mexicana:", en: "Order the events of the beginning of the Mexican Revolution:" },
          options: [
              { es: "Plan de San Luis y estallido de la revolución (nov. 1910)", en: "Plan of San Luis and outbreak of revolution (Nov. 1910)" },
              { es: "Tratados de Ciudad Juárez y renuncia de Díaz (mayo 1911)", en: "Treaties of Ciudad Juárez and Díaz's resignation (May 1911)" },
              { es: "Presidencia de Madero (nov. 1911 - feb. 1913)", en: "Madero's presidency (Nov. 1911 - Feb. 1913)" },
              { es: "Decena Trágica y asesinato de Madero (feb. 1913)", en: "Tragic Ten Days and Madero's assassination (Feb. 1913)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "La revolución estalló en noviembre de 1910; Díaz renunció en mayo de 1911; Madero gobernó hasta que fue traicionado en la Decena Trágica de febrero de 1913.", en: "The revolution broke out in November 1910; Díaz resigned in May 1911; Madero governed until he was betrayed in the Tragic Ten Days of February 1913." }
        }
      ]
    },
    {
      id: "revolucion-l2",
      topicId: "revolucion-mexicana",
      title: { es: "Constitucionalismo, Villa, Zapata y la Lucha por el Poder", en: "Constitutionalism, Villa, Zapata and the Struggle for Power" },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hm_rm_009",
          type: "multiple-choice",
          prompt: { es: "¿Qué plan de 1913 proclamado por Venustiano Carranza desconoció el gobierno usurpador de Victoriano Huerta?", en: "What 1913 plan proclaimed by Venustiano Carranza rejected the usurping government of Victoriano Huerta?" },
          options: [
              { es: "Plan de Guadalupe", en: "Plan of Guadalupe" },
              { es: "Plan de Ayala", en: "Plan of Ayala" },
              { es: "Plan de San Luis", en: "Plan of San Luis" },
              { es: "Plan de Agua Prieta", en: "Plan of Agua Prieta" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Plan de Guadalupe (26 de marzo de 1913) desconoció a Huerta y nombró a Carranza 'Primer Jefe del Ejército Constitucionalista'. Junto con Villa (norte) y Zapata (sur), Huerta fue derrocado en 1914.", en: "The Plan of Guadalupe (March 26, 1913) rejected Huerta and named Carranza 'First Chief of the Constitutionalist Army'. Together with Villa (north) and Zapata (south), Huerta was overthrown in 1914." }
        },
        {
          id: "hm_rm_010",
          type: "true-false",
          prompt: { es: "EUA intervino militarmente en México en 1914, ocupando el puerto de Veracruz.", en: "The USA intervened militarily in Mexico in 1914, occupying the port of Veracruz." },
          correctAnswer: "true",
          explanation: { es: "En abril de 1914, EUA ocupó Veracruz para impedir la llegada de armas alemanas a Huerta. La ocupación duró hasta noviembre de 1914 y generó un fuerte sentimiento antiimperialista en México.", en: "In April 1914, the USA occupied Veracruz to prevent German arms from reaching Huerta. The occupation lasted until November 1914 and generated strong anti-imperialist sentiment in Mexico." }
        },
        {
          id: "hm_rm_011",
          type: "multiple-choice",
          prompt: { es: "¿Cómo se llamaba la famosa División del Norte comandada por Pancho Villa?", en: "What was the famous Division of the North commanded by Pancho Villa called?" },
          options: [
              { es: "División del Norte", en: "División del Norte" },
              { es: "Ejército Libertador del Sur", en: "Liberation Army of the South" },
              { es: "Cuerpo de Ejército del Noreste", en: "Army Corps of the Northeast" },
              { es: "La Brigada Roja", en: "The Red Brigade" },
            ],
          correctAnswer: "0",
          explanation: { es: "La División del Norte fue el ejército más poderoso de la Revolución en su momento de auge (1913-1915). Sus victorias en Zacatecas y Torreón fueron claves para derrocar a Huerta.", en: "The División del Norte was the most powerful army of the Revolution at its height (1913-1915). Its victories at Zacatecas and Torreón were key to overthrowing Huerta." }
        },
        {
          id: "hm_rm_012",
          type: "fill-blank",
          prompt: { es: "El general Álvaro Obregón derrotó definitivamente a las fuerzas de Pancho Villa en la Batalla de _____ (1915).", en: "General Álvaro Obregón definitively defeated Pancho Villa's forces at the Battle of _____ (1915)." },
          correctAnswer: "Celaya",
          explanation: { es: "En las batallas de Celaya (1915), Obregón usó alambradas de púas y ametralladoras (tácticas aprendidas de la Primera Guerra Mundial en Europa) para destruir a la caballería villista y consolidar el dominio constitucionalista.", en: "At the battles of Celaya (1915), Obregón used barbed wire and machine guns (tactics learned from WWI in Europe) to destroy Villa's cavalry and consolidate constitutionalist dominance." }
        },
        {
          id: "hm_rm_013",
          type: "multiple-choice",
          prompt: { es: "¿En qué año fue asesinado Emiliano Zapata, traicionado por las fuerzas de Carranza?", en: "In what year was Emiliano Zapata assassinated, betrayed by Carranza's forces?" },
          options: [
              { es: "1919", en: "1919" },
              { es: "1917", en: "1917" },
              { es: "1921", en: "1921" },
              { es: "1923", en: "1923" },
            ],
          correctAnswer: "0",
          explanation: { es: "Emiliano Zapata fue asesinado el 10 de abril de 1919 en la hacienda de Chinameca, Morelos, tendido en una emboscada por el coronel Jesús Guajardo bajo órdenes de Pablo González, por encargo de Carranza.", en: "Emiliano Zapata was assassinated on April 10, 1919, at the Chinameca hacienda in Morelos, ambushed by Colonel Jesús Guajardo under orders from Pablo González, commissioned by Carranza." }
        },
        {
          id: "hm_rm_014",
          type: "true-false",
          prompt: { es: "Pancho Villa atacó Columbus, Nuevo México (EUA) en 1916, siendo la única invasión militar de territorio continental estadounidense desde 1812.", en: "Pancho Villa attacked Columbus, New Mexico (USA) in 1916, being the only military invasion of continental U.S. territory since 1812." },
          correctAnswer: "true",
          explanation: { es: "El 9 de marzo de 1916, Villa atacó Columbus. En represalia, EUA lanzó la 'Expedición Punitiva' bajo el general Pershing, que pasó meses en México sin capturar a Villa y tuvo que retirarse en 1917.", en: "On March 9, 1916, Villa attacked Columbus. In retaliation, the USA launched the 'Punitive Expedition' under General Pershing, which spent months in Mexico without capturing Villa and had to withdraw in 1917." }
        },
        {
          id: "hm_rm_015",
          type: "multiple-choice",
          prompt: { es: "¿En qué año fue asesinado Pancho Villa en Parral, Chihuahua?", en: "In what year was Pancho Villa assassinated in Parral, Chihuahua?" },
          options: [
              { es: "1923", en: "1923" },
              { es: "1919", en: "1919" },
              { es: "1925", en: "1925" },
              { es: "1920", en: "1920" },
            ],
          correctAnswer: "0",
          explanation: { es: "Pancho Villa fue asesinado el 20 de julio de 1923 en Parral, Chihuahua, emboscado en su automóvil. Los autores intelectuales nunca fueron plenamente identificados.", en: "Pancho Villa was assassinated on July 20, 1923, in Parral, Chihuahua, ambushed in his car. The intellectual authors were never fully identified." }
        },
        {
          id: "hm_rm_016",
          type: "order-steps",
          prompt: { es: "Ordena las fases de la lucha revolucionaria después de la caída de Díaz:", en: "Order the phases of the revolutionary struggle after the fall of Díaz:" },
          options: [
              { es: "Maderismo y presidencia de Madero (1911-1913)", en: "Maderism and Madero's presidency (1911-1913)" },
              { es: "Huertismo y lucha constitucionalista (1913-1914)", en: "Huertism and constitutionalist struggle (1913-1914)" },
              { es: "Guerra entre facciones revolucionarias (villismo vs constitucionalismo, 1914-1916)", en: "War between revolutionary factions (Villism vs constitutionalism, 1914-1916)" },
              { es: "Constitución de 1917 y consolidación constitucionalista", en: "Constitution of 1917 and constitutionalist consolidation" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "La Revolución pasó por cuatro fases: democrática (Madero), anti-usurpación (vs Huerta), entre facciones (villismo vs constitucionalismo), y consolidación constitucional (Carranza).", en: "The Revolution went through four phases: democratic (Madero), anti-usurpation (vs Huerta), between factions (Villism vs constitutionalism), and constitutional consolidation (Carranza)." }
        }
      ]
    },
    {
      id: "revolucion-l3",
      topicId: "revolucion-mexicana",
      title: { es: "La Constitución de 1917", en: "The Constitution of 1917" },
      type: "quiz",
      order: 3,
      questions: [
        {
          id: "hm_rm_017",
          type: "multiple-choice",
          prompt: { es: "¿En qué ciudad fue promulgada la Constitución Política de los Estados Unidos Mexicanos el 5 de febrero de 1917?", en: "In what city was the Political Constitution of the United Mexican States promulgated on February 5, 1917?" },
          options: [
              { es: "Querétaro", en: "Querétaro" },
              { es: "Ciudad de México", en: "Mexico City" },
              { es: "Guadalajara", en: "Guadalajara" },
              { es: "San Luis Potosí", en: "San Luis Potosí" },
            ],
          correctAnswer: "0",
          explanation: { es: "La Constitución de 1917 fue promulgada en Querétaro el 5 de febrero de 1917, fecha que hoy es el Día de la Constitución en México. El Congreso Constituyente fue convocado por Carranza en 1916.", en: "The Constitution of 1917 was promulgated in Querétaro on February 5, 1917, a date now celebrated as Constitution Day in Mexico. The Constituent Congress was convened by Carranza in 1916." }
        },
        {
          id: "hm_rm_018",
          type: "fill-blank",
          prompt: { es: "El Artículo _____ de la Constitución de 1917 estableció los derechos laborales: jornada de 8 horas, salario mínimo y derecho a huelga.", en: "Article _____ of the Constitution of 1917 established labor rights: 8-hour workday, minimum wage, and the right to strike." },
          correctAnswer: "123",
          explanation: { es: "El Artículo 123 de la Constitución de 1917 fue pionero a nivel mundial en establecer derechos laborales con rango constitucional: jornada de 8 horas, salario mínimo, prohibición del trabajo infantil, derecho de huelga y contratación colectiva.", en: "Article 123 of the Constitution of 1917 was a world pioneer in establishing labor rights at the constitutional level: 8-hour workday, minimum wage, prohibition of child labor, right to strike and collective bargaining." }
        },
        {
          id: "hm_rm_019",
          type: "multiple-choice",
          prompt: { es: "¿Qué estableció el Artículo 27 de la Constitución de 1917 sobre los recursos naturales?", en: "What did Article 27 of the Constitution of 1917 establish regarding natural resources?" },
          options: [
              { es: "La propiedad originaria de la nación sobre tierras, agua y subsuelo (incluyendo petróleo y minerales)", en: "The nation's original ownership of land, water, and subsoil (including oil and minerals)" },
              { es: "La propiedad privada absoluta e indivisible", en: "Absolute and indivisible private property" },
              { es: "La privatización de los recursos naturales", en: "The privatization of natural resources" },
              { es: "La devolución de tierras solo a comunidades indígenas", en: "The return of land only to indigenous communities" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Artículo 27 declaró que las tierras, aguas y recursos del subsuelo (petróleo, minerales) son propiedad originaria de la Nación. Esta fue la base constitucional de la expropiación petrolera de 1938.", en: "Article 27 declared that land, water, and subsoil resources (oil, minerals) are the original property of the Nation. This was the constitutional basis for the 1938 oil expropriation." }
        },
        {
          id: "hm_rm_020",
          type: "true-false",
          prompt: { es: "La Constitución de 1917 fue la primera en el mundo en incluir derechos sociales (laborales y agrarios) junto a los derechos individuales.", en: "The Constitution of 1917 was the first in the world to include social rights (labor and agrarian) alongside individual rights." },
          correctAnswer: "true",
          explanation: { es: "La Constitución mexicana de 1917 fue pionera mundial al incorporar derechos sociales (trabajo, tierra, educación) junto a los derechos individuales liberales. Fue dos años anterior a la Constitución de Weimar (1919) de Alemania.", en: "The Mexican Constitution of 1917 was a world pioneer in incorporating social rights (labor, land, education) alongside liberal individual rights. It preceded Germany's Weimar Constitution (1919) by two years." }
        },
        {
          id: "hm_rm_021",
          type: "multiple-choice",
          prompt: { es: "¿Qué artículo de la Constitución de 1917 estableció la educación primaria laica, gratuita y obligatoria?", en: "What article of the Constitution of 1917 established secular, free, and compulsory primary education?" },
          options: [
              { es: "Artículo 3°", en: "Article 3" },
              { es: "Artículo 27°", en: "Article 27" },
              { es: "Artículo 123°", en: "Article 123" },
              { es: "Artículo 130°", en: "Article 130" },
            ],
          correctAnswer: "0",
          explanation: { es: "El Artículo 3° estableció la educación laica, gratuita y obligatoria como responsabilidad del Estado. El Artículo 130° estableció la separación Iglesia-Estado y las restricciones a las actividades políticas del clero.", en: "Article 3 established secular, free, and compulsory education as the State's responsibility. Article 130 established the Church-State separation and restrictions on the political activities of the clergy." }
        },
        {
          id: "hm_rm_022",
          type: "true-false",
          prompt: { es: "Venustiano Carranza fue el primer presidente de México bajo la Constitución de 1917.", en: "Venustiano Carranza was the first president of Mexico under the Constitution of 1917." },
          correctAnswer: "true",
          explanation: { es: "Carranza fue el primer presidente constitucional bajo la Constitución de 1917, gobernando hasta 1920. Fue asesinado en Tlaxcalaltongo, Puebla, huyendo del Plan de Agua Prieta (levantamiento de Obregón).", en: "Carranza was the first constitutional president under the Constitution of 1917, governing until 1920. He was assassinated in Tlaxcalaltongo, Puebla, fleeing from the Plan of Agua Prieta (Obregón's uprising)." }
        },
        {
          id: "hm_rm_023",
          type: "multiple-choice",
          prompt: { es: "¿Cuál fue el costo humano aproximado de la Revolución Mexicana (1910-1920)?", en: "What was the approximate human cost of the Mexican Revolution (1910-1920)?" },
          options: [
              { es: "Entre 1 y 2 millones de muertos", en: "Between 1 and 2 million deaths" },
              { es: "10,000 muertos", en: "10,000 deaths" },
              { es: "500,000 muertos", en: "500,000 deaths" },
              { es: "5 millones de muertos", en: "5 million deaths" },
            ],
          correctAnswer: "0",
          explanation: { es: "Se estima que la Revolución causó entre 1 y 2 millones de muertos (incluyendo combatientes, víctimas civiles y la epidemia de influenza de 1918). La población de México era de aproximadamente 15 millones en 1910.", en: "The Revolution is estimated to have caused between 1 and 2 million deaths (including combatants, civilian victims, and the 1918 influenza epidemic). Mexico's population was approximately 15 million in 1910." }
        },
        {
          id: "hm_rm_024",
          type: "order-steps",
          prompt: { es: "Ordena los tres artículos clave de la Constitución de 1917 con su contenido:", en: "Order the three key articles of the Constitution of 1917 with their content:" },
          options: [
              { es: "Art. 3°: Educación laica, gratuita y obligatoria", en: "Art. 3: Secular, free, and compulsory education" },
              { es: "Art. 27°: Propiedad originaria de la nación sobre tierras y subsuelo", en: "Art. 27: Nation's original ownership of land and subsoil" },
              { es: "Art. 123°: Derechos laborales (8 horas, salario mínimo, huelga)", en: "Art. 123: Labor rights (8 hours, minimum wage, strike)" },
              { es: "Art. 130°: Separación Iglesia-Estado", en: "Art. 130: Church-State separation" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: { es: "Los cuatro artículos pilares de la Constitución de 1917: 3° (educación), 27° (tierra y subsuelo), 123° (derechos laborales) y 130° (relaciones Iglesia-Estado), todos innovadores para su época.", en: "The four pillar articles of the 1917 Constitution: 3rd (education), 27th (land and subsoil), 123rd (labor rights), and 130th (Church-State relations), all innovative for their time." }
        }
      ]
    }
  ]
};
