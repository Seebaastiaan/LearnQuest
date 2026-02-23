import type { Topic } from "@/lib/types/topic";

export const revolucionesBurguesasTopic: Topic = {
  id: "revoluciones-burguesas",
  subjectId: "historia-universal",
  title: {
    es: "Ilustración y Revoluciones Burguesas",
    en: "Enlightenment and Bourgeois Revolutions",
  },
  description: {
    es: "La Ilustración, la Revolución Francesa y el surgimiento del liberalismo moderno.",
    en: "The Enlightenment, the French Revolution and the rise of modern liberalism.",
  },
  order: 2,
  color: "orange",
  icon: "Flame",
  bgGradient: "bg-linear-to-br from-orange-500 to-amber-600",
  lessons: [
    {
      id: "revoluciones-burguesas-l1",
      topicId: "revoluciones-burguesas",
      title: {
        es: "La Ilustración y sus Pensadores",
        en: "The Enlightenment and Its Thinkers",
      },
      type: "learn",
      order: 1,
      content: {
        es: "La Ilustración (siglo XVIII) fue un movimiento intelectual que defendía la razón, la ciencia y los derechos naturales. Voltaire criticó la intolerancia religiosa. Montesquieu propuso la separación de poderes (ejecutivo, legislativo, judicial) en 'El Espíritu de las Leyes' (1748). Rousseau desarrolló el contrato social y la soberanía popular. Adam Smith fundó la economía liberal en 'La Riqueza de las Naciones' (1776) con el laissez-faire.",
        en: "The Enlightenment (18th century) was an intellectual movement defending reason, science and natural rights.",
      },
      questions: [
        {
          id: "hu_rb_l1_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál filósofo ilustrado propuso la separación de los tres poderes del Estado en su obra 'El Espíritu de las Leyes' (1748)?",
            en: "Which Enlightenment philosopher proposed the separation of the three powers of the State in 'The Spirit of the Laws' (1748)?",
          },
          options: [
              { es: "Montesquieu", en: "Montesquieu" },
              { es: "Voltaire", en: "Voltaire" },
              { es: "Rousseau", en: "Rousseau" },
              { es: "Locke", en: "Locke" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Montesquieu (1689-1755) propuso la separación del poder en ejecutivo, legislativo y judicial en 'El Espíritu de las Leyes' para evitar la tiranía.",
            en: "Montesquieu (1689-1755) proposed the separation of power into executive, legislative and judicial in 'The Spirit of the Laws' to prevent tyranny.",
          },
        },
        {
          id: "hu_rb_l1_q2",
          type: "multiple-choice",
          prompt: {
            es: "Adam Smith, en 'La Riqueza de las Naciones' (1776), defendió que la economía funciona mejor con:",
            en: "Adam Smith, in 'The Wealth of Nations' (1776), argued that the economy works best with:",
          },
          options: [
              { es: "Libre mercado sin intervención del Estado (laissez-faire)", en: "Free market without State intervention (laissez-faire)" },
              { es: "Control total del Estado sobre la producción", en: "Total State control over production" },
              { es: "Mercantilismo y monopolios imperiales", en: "Mercantilism and imperial monopolies" },
              { es: "Gremios medievales regulando los precios", en: "Medieval guilds regulating prices" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Adam Smith defendió el laissez-faire ('dejad hacer'): la 'mano invisible' del mercado libre asigna recursos mejor que el Estado. Es el fundamento del liberalismo económico.",
            en: "Adam Smith defended laissez-faire: the 'invisible hand' of the free market allocates resources better than the State.",
          },
        },
        {
          id: "hu_rb_l1_q3",
          type: "true-false",
          prompt: {
            es: "Rousseau planteó que la soberanía reside en el pueblo y no en el monarca, mediante el 'contrato social'.",
            en: "Rousseau argued that sovereignty resides in the people, not the monarch, through the 'social contract'.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. Rousseau (1712-1778) en 'El Contrato Social' (1762) argumentó que la legitimidad del gobierno proviene del pueblo soberano, no del derecho divino del rey.",
            en: "Correct. Rousseau (1712-1778) in 'The Social Contract' (1762) argued that governmental legitimacy comes from the sovereign people, not the king's divine right.",
          },
        },
        {
          id: "hu_rb_l1_q4",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la principal obra de Voltaire en la que critica la intolerancia religiosa y la superstición?",
            en: "What was Voltaire's main work in which he criticizes religious intolerance and superstition?",
          },
          options: [
              { es: "Cándido (1759)", en: "Candide (1759)" },
              { es: "El Espíritu de las Leyes", en: "The Spirit of the Laws" },
              { es: "El Contrato Social", en: "The Social Contract" },
              { es: "Emilio o De la Educación", en: "Emile, or On Education" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Cándido (1759) es la obra más famosa de Voltaire, una novela filosófica que critica el optimismo irracional, la iglesia y la intolerancia mediante la sátira.",
            en: "Candide (1759) is Voltaire's most famous work, a philosophical novel criticizing irrational optimism, the church, and intolerance through satire.",
          },
        },
        {
          id: "hu_rb_l1_q5",
          type: "multiple-choice",
          prompt: {
            es: "La Enciclopedia (1751-1772) dirigida por Diderot y D'Alembert fue importante porque:",
            en: "The Encyclopedia (1751-1772) directed by Diderot and D'Alembert was important because:",
          },
          options: [
              { es: "Difundió el conocimiento científico y filosófico ilustrado para combatir la ignorancia", en: "It spread Enlightenment scientific and philosophical knowledge to combat ignorance" },
              { es: "Consolidó el poder de la Iglesia Católica en Francia", en: "It consolidated the Catholic Church's power in France" },
              { es: "Estableció la censura de ideas filosóficas", en: "It established censorship of philosophical ideas" },
              { es: "Sirvió como manual militar de Napoleón", en: "It served as Napoleon's military manual" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La Gran Enciclopedia reunió el conocimiento ilustrado en 28 volúmenes, difundiendo ideas de razón, ciencia y libertad que prepararon el terreno para la Revolución Francesa.",
            en: "The Great Encyclopedia gathered Enlightenment knowledge in 28 volumes, spreading ideas of reason, science and freedom that prepared the ground for the French Revolution.",
          },
        },
        {
          id: "hu_rb_l1_q6",
          type: "fill-blank",
          prompt: {
            es: "El sistema político en el que el monarca gobernaba con poder absoluto pero aplicando las ideas de la Ilustración se denominó despotismo ___.",
            en: "The political system in which the monarch governed with absolute power but applying Enlightenment ideas was called ___ despotism.",
          },
          correctAnswer: "ilustrado",
          explanation: {
            es: "El despotismo ilustrado fue el sistema de monarcas como Federico II de Prusia, Catalina II de Rusia y Carlos III de España, que adoptaron reformas ilustradas pero mantuvieron el poder absoluto.",
            en: "Enlightened despotism was the system of monarchs like Frederick II of Prussia, Catherine II of Russia, and Charles III of Spain.",
          },
        },
        {
          id: "hu_rb_l1_q7",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes ideas NO pertenece al pensamiento ilustrado del siglo XVIII?",
            en: "Which of the following ideas does NOT belong to 18th-century Enlightenment thought?",
          },
          options: [
              { es: "El derecho divino de los reyes como base del poder político", en: "The divine right of kings as the basis of political power" },
              { es: "La soberanía popular como fundamento del gobierno", en: "Popular sovereignty as the foundation of government" },
              { es: "La separación de poderes para evitar la tiranía", en: "Separation of powers to prevent tyranny" },
              { es: "El progreso humano guiado por la razón y la ciencia", en: "Human progress guided by reason and science" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El derecho divino de los reyes es una idea preilustrada del Antiguo Régimen. La Ilustración propuso, al contrario, la soberanía popular y los derechos naturales.",
            en: "The divine right of kings is a pre-Enlightenment idea of the Old Regime. The Enlightenment proposed, instead, popular sovereignty and natural rights.",
          },
        },
        {
          id: "hu_rb_l1_q8",
          type: "order-steps",
          prompt: {
            es: "Asocia correctamente cada pensador con su principal aportación ordenando de mayor a menor impacto en la Revolución Francesa:",
            en: "Order these Enlightenment thinkers by their influence on the French Revolution (greatest to least):",
          },
          options: [
              { es: "Rousseau — soberanía popular y voluntad general", en: "Rousseau — popular sovereignty and general will" },
              { es: "Montesquieu — separación de poderes", en: "Montesquieu — separation of powers" },
              { es: "Voltaire — libertad de expresión y crítica religiosa", en: "Voltaire — freedom of expression and religious critique" },
              { es: "Adam Smith — liberalismo económico (impacto más indirecto)", en: "Adam Smith — economic liberalism (most indirect impact)" },
            ],
          correctAnswer: ["0", "1", "2", "3"],
          explanation: {
            es: "Rousseau fue el más influyente en la Rev. Francesa con su soberanía popular. Montesquieu inspiró la Constitución. Voltaire influyó culturalmente. Smith influyó más en lo económico.",
            en: "Rousseau was most influential in the French Revolution with his popular sovereignty. Montesquieu inspired the Constitution. Voltaire influenced culturally. Smith influenced more economically.",
          },
        },
      ],
    },
    {
      id: "revoluciones-burguesas-l2",
      topicId: "revoluciones-burguesas",
      title: {
        es: "La Revolución Francesa (1789)",
        en: "The French Revolution (1789)",
      },
      type: "practice",
      order: 2,
      questions: [
        {
          id: "hu_rb_l2_q1",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue la principal causa social que detonó la Revolución Francesa en 1789?",
            en: "What was the main social cause that triggered the French Revolution in 1789?",
          },
          options: [
              { es: "La desigualdad del sistema de tres estamentos (clero, nobleza, tercer estado)", en: "The inequality of the three estates system (clergy, nobility, third estate)" },
              { es: "La invasión de Austria a Francia", en: "Austria's invasion of France" },
              { es: "La muerte del rey Luis XIV", en: "The death of King Louis XIV" },
              { es: "El descontento de los nobles por perder tierras", en: "Nobles' discontent over losing land" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El sistema de tres estamentos era profundamente desigual: el 97% de la población (tercer estado) pagaba impuestos, mientras el clero y la nobleza tenían privilegios. Esta injusticia desencadenó la revolución.",
            en: "The three estates system was deeply unequal: 97% of the population (third estate) paid taxes, while clergy and nobility had privileges. This injustice triggered the revolution.",
          },
        },
        {
          id: "hu_rb_l2_q2",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué fecha marca simbólicamente el inicio de la Revolución Francesa?",
            en: "What date symbolically marks the start of the French Revolution?",
          },
          options: [
              { es: "14 de julio de 1789 — toma de la Bastilla", en: "July 14, 1789 — storming of the Bastille" },
              { es: "4 de agosto de 1789 — abolición del feudalismo", en: "August 4, 1789 — abolition of feudalism" },
              { es: "26 de agosto de 1789 — Declaración de Derechos", en: "August 26, 1789 — Declaration of Rights" },
              { es: "21 de enero de 1793 — guillotina de Luis XVI", en: "January 21, 1793 — guillotine of Louis XVI" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La toma de la Bastilla el 14 de julio de 1789 es el símbolo del inicio de la Revolución Francesa. La Bastilla era la prisión que representaba el absolutismo real.",
            en: "The storming of the Bastille on July 14, 1789 is the symbol of the start of the French Revolution.",
          },
        },
        {
          id: "hu_rb_l2_q3",
          type: "true-false",
          prompt: {
            es: "La Declaración de los Derechos del Hombre y del Ciudadano (1789) afirmó que 'los hombres nacen y permanecen libres e iguales en derechos'.",
            en: "The Declaration of the Rights of Man and Citizen (1789) stated that 'men are born and remain free and equal in rights'.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El Artículo 1° de la Declaración de los Derechos del Hombre y del Ciudadano (26 ago 1789) establece que todos los hombres nacen libres e iguales en derechos.",
            en: "Correct. Article 1 of the Declaration of the Rights of Man and Citizen (Aug 26, 1789) states that all men are born free and equal in rights.",
          },
        },
        {
          id: "hu_rb_l2_q4",
          type: "multiple-choice",
          prompt: {
            es: "El período conocido como 'El Terror' (1793-1794) estuvo dominado por:",
            en: "The period known as 'The Terror' (1793-1794) was dominated by:",
          },
          options: [
              { es: "Maximilien Robespierre y el Comité de Salud Pública", en: "Maximilien Robespierre and the Committee of Public Safety" },
              { es: "El rey Luis XVI y la guardia real", en: "King Louis XVI and the royal guard" },
              { es: "Napoleón Bonaparte y el ejército", en: "Napoleon Bonaparte and the army" },
              { es: "Los girondinos y los moderados", en: "The Girondins and moderates" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Terror (1793-94) fue dirigido por Robespierre y el Comité de Salud Pública, que guillotinaron a miles de 'enemigos de la Revolución'. Terminó con la ejecución del propio Robespierre.",
            en: "The Terror (1793-94) was led by Robespierre and the Committee of Public Safety, who guillotined thousands of 'enemies of the Revolution'.",
          },
        },
        {
          id: "hu_rb_l2_q5",
          type: "fill-blank",
          prompt: {
            es: "El lema de la Revolución Francesa que resume sus tres valores fundamentales es: 'Liberté, Égalité, ___'.",
            en: "The motto of the French Revolution summarizing its three fundamental values is: 'Liberté, Égalité, ___'.",
          },
          correctAnswer: "Fraternité",
          explanation: {
            es: "'Liberté, Égalité, Fraternité' (Libertad, Igualdad, Fraternidad) fue el lema de la Revolución Francesa y sigue siendo el lema oficial de la República Francesa.",
            en: "'Liberté, Égalité, Fraternité' (Liberty, Equality, Fraternity) was the motto of the French Revolution and remains the official motto of the French Republic.",
          },
        },
        {
          id: "hu_rb_l2_q6",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué significó la abolición del feudalismo en la noche del 4 de agosto de 1789?",
            en: "What did the abolition of feudalism on the night of August 4, 1789 mean?",
          },
          options: [
              { es: "Los nobles renunciaron voluntariamente a sus privilegios feudales y diezmos", en: "Nobles voluntarily renounced their feudal privileges and tithes" },
              { es: "El rey disolvió el ejército feudal", en: "The king dissolved the feudal army" },
              { es: "Se confiscaron todas las tierras de la nobleza", en: "All noble lands were confiscated" },
              { es: "Se expulsó a la Iglesia de Francia", en: "The Church was expelled from France" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "En la noche del 4 de agosto de 1789, en un acto de entusiasmo revolucionario, los nobles de la Asamblea renunciaron voluntariamente a sus privilegios feudales, aboliendo el sistema señorial.",
            en: "On the night of August 4, 1789, in an act of revolutionary enthusiasm, nobles in the Assembly voluntarily renounced their feudal privileges, abolishing the seigneurial system.",
          },
        },
        {
          id: "hu_rb_l2_q7",
          type: "true-false",
          prompt: {
            es: "Napoleón Bonaparte llegó al poder en Francia mediante el golpe de Estado del 18 Brumario (noviembre 1799), poniendo fin al Directorio.",
            en: "Napoleon Bonaparte came to power in France through the coup d'état of 18 Brumaire (November 1799), ending the Directory.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. El 18 Brumario del año VIII (9 de noviembre de 1799) Napoleón dio un golpe de Estado que disolvió el Directorio e instauró el Consulado, con él como Primer Cónsul.",
            en: "Correct. On 18 Brumaire of Year VIII (November 9, 1799) Napoleon staged a coup that dissolved the Directory and established the Consulate, with himself as First Consul.",
          },
        },
        {
          id: "hu_rb_l2_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena cronológicamente estos eventos de la Revolución Francesa:",
            en: "Order these French Revolution events chronologically:",
          },
          options: [
              { es: "Declaración de los Derechos del Hombre (26 ago 1789)", en: "Declaration of Rights of Man (Aug 26, 1789)" },
              { es: "Toma de la Bastilla (14 jul 1789)", en: "Storming of the Bastille (Jul 14, 1789)" },
              { es: "Ejecución de Luis XVI (21 ene 1793)", en: "Execution of Louis XVI (Jan 21, 1793)" },
              { es: "Golpe de Napoleón — 18 Brumario (nov 1799)", en: "Napoleon's coup — 18 Brumaire (Nov 1799)" },
              { es: "El Terror de Robespierre (jun 1793-jul 1794)", en: "Robespierre's Terror (Jun 1793-Jul 1794)" },
            ],
          correctAnswer: ["1", "0", "2", "4", "3"],
          explanation: {
            es: "Orden: Toma de la Bastilla → Declaración Derechos → Ejecución Luis XVI → El Terror → Golpe Napoleón.",
            en: "Order: Storming of the Bastille → Declaration of Rights → Execution of Louis XVI → The Terror → Napoleon's coup.",
          },
        },
      ],
    },
    {
      id: "revoluciones-burguesas-l3",
      topicId: "revoluciones-burguesas",
      title: {
        es: "Independencias y Liberalismo",
        en: "Independences and Liberalism",
      },
      type: "practice",
      order: 3,
      questions: [
        {
          id: "hu_rb_l3_q1",
          type: "multiple-choice",
          prompt: {
            es: "La Declaración de Independencia de los Estados Unidos (1776) influyó en la Revolución Francesa principalmente porque:",
            en: "The United States Declaration of Independence (1776) influenced the French Revolution mainly because:",
          },
          options: [
              { es: "Demostró que era posible establecer un gobierno republicano basado en los derechos naturales", en: "It demonstrated that it was possible to establish a republican government based on natural rights" },
              { es: "Causó la quiebra financiera de Francia al apoyar militarmente la guerra", en: "It caused France's financial bankruptcy by supporting the war militarily" },
              { es: "Fue el modelo para la Declaración de los Derechos Feudales", en: "It was the model for the Declaration of Feudal Rights" },
              { es: "Inspiró a Napoleón a expandirse hacia América", en: "It inspired Napoleon to expand into America" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "La independencia de EUA demostró que los principios ilustrados (derechos naturales, soberanía popular) podían aplicarse en la práctica para crear un nuevo estado republicano.",
            en: "The US independence demonstrated that Enlightenment principles (natural rights, popular sovereignty) could be practically applied to create a new republican state.",
          },
        },
        {
          id: "hu_rb_l3_q2",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál fue el principal impacto del Código Napoleónico (1804) en Europa?",
            en: "What was the main impact of the Napoleonic Code (1804) on Europe?",
          },
          options: [
              { es: "Uniformizó las leyes civiles con principios de igualdad jurídica, propiedad privada y libertad contractual", en: "Unified civil laws with principles of legal equality, private property and contractual freedom" },
              { es: "Restableció los privilegios feudales de la nobleza", en: "Restored feudal privileges of the nobility" },
              { es: "Prohibió la libertad de prensa en todos los territorios", en: "Banned press freedom in all territories" },
              { es: "Estableció la monarquía absoluta como único sistema válido", en: "Established absolute monarchy as the only valid system" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Código Napoleónico (Code Civil, 1804) estableció igualdad ante la ley, propiedad privada garantizada y libertad de contratos. Se extendió por toda Europa y fue modelo para muchos códigos civiles.",
            en: "The Napoleonic Code (Code Civil, 1804) established equality before the law, guaranteed private property and freedom of contracts. It spread throughout Europe and was a model for many civil codes.",
          },
        },
        {
          id: "hu_rb_l3_q3",
          type: "true-false",
          prompt: {
            es: "La Revolución Haitiana (1791-1804) fue la única revolución exitosa de esclavos en la historia que resultó en una nación independiente.",
            en: "The Haitian Revolution (1791-1804) was the only successful slave revolution in history that resulted in an independent nation.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La Revolución Haitiana, liderada por Toussaint Louverture y Jean-Jacques Dessalines, fue única en la historia: una revuelta de esclavos que creó la primera república negra libre, Haití, el 1 de enero de 1804.",
            en: "Correct. The Haitian Revolution, led by Toussaint Louverture and Jean-Jacques Dessalines, was unique in history: a slave revolt that created the first free Black republic, Haiti, on January 1, 1804.",
          },
        },
        {
          id: "hu_rb_l3_q4",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué estableció el Congreso de Viena (1814-1815) después de la derrota de Napoleón?",
            en: "What did the Congress of Vienna (1814-1815) establish after Napoleon's defeat?",
          },
          options: [
              { es: "Restauró las monarquías absolutas y redibujó el mapa de Europa siguiendo el principio de legitimidad", en: "Restored absolute monarchies and redrew the map of Europe following the principle of legitimacy" },
              { es: "Creó la primera democracia europea", en: "Created the first European democracy" },
              { es: "Estableció la República Universal propuesta por Napoleón", en: "Established the Universal Republic proposed by Napoleon" },
              { es: "Abolió todas las monarquías europeas", en: "Abolished all European monarchies" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "El Congreso de Viena (1814-15), dominado por Metternich, restauró las monarquías legítimas, redibujó fronteras para el 'equilibrio de poderes' y reprimió los movimientos liberales y nacionalistas.",
            en: "The Congress of Vienna (1814-15), dominated by Metternich, restored legitimate monarchies, redrew borders for 'balance of power' and suppressed liberal and nationalist movements.",
          },
        },
        {
          id: "hu_rb_l3_q5",
          type: "fill-blank",
          prompt: {
            es: "El periodo entre 1815 y 1848 en Europa, dominado por el conservadurismo post-napoleónico y las reacciones liberales, es conocido como la época de la ___ y la Restauración.",
            en: "The period between 1815 and 1848 in Europe, dominated by post-Napoleonic conservatism and liberal reactions, is known as the era of ___ and Restoration.",
          },
          correctAnswer: "Santa Alianza",
          explanation: {
            es: "La Santa Alianza (1815) fue un pacto entre Rusia, Austria y Prusia para defenderse mutuamente de las revoluciones liberales y mantener el orden conservador post-Viena.",
            en: "The Holy Alliance (1815) was a pact between Russia, Austria and Prussia to defend each other from liberal revolutions and maintain the conservative post-Vienna order.",
          },
        },
        {
          id: "hu_rb_l3_q6",
          type: "multiple-choice",
          prompt: {
            es: "Las 'Revoluciones de 1848' en Europa fueron movimientos que demandaban principalmente:",
            en: "The 'Revolutions of 1848' in Europe were movements that mainly demanded:",
          },
          options: [
              { es: "Constituciones liberales, derechos civiles y unificación nacional", en: "Liberal constitutions, civil rights and national unification" },
              { es: "El regreso del feudalismo", en: "The return of feudalism" },
              { es: "La expansión del Imperio Napoleónico", en: "The expansion of the Napoleonic Empire" },
              { es: "La abolición del capitalismo", en: "The abolition of capitalism" },
            ],
          correctAnswer: "0",
          explanation: {
            es: "Las revoluciones de 1848 ('Primavera de los Pueblos') demandaron constituciones, libertades civiles y unificación nacional en Francia, Alemania, Austria, Italia y Hungría.",
            en: "The revolutions of 1848 ('Springtime of Nations') demanded constitutions, civil liberties and national unification in France, Germany, Austria, Italy and Hungary.",
          },
        },
        {
          id: "hu_rb_l3_q7",
          type: "true-false",
          prompt: {
            es: "La Revolución Industrial comenzó en Inglaterra aproximadamente en 1760 y fue contemporánea a la Ilustración.",
            en: "The Industrial Revolution began in England approximately in 1760 and was contemporary to the Enlightenment.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Correcto. La Revolución Industrial comenzó en Inglaterra ~1760 con la máquina de vapor (Watt, 1769), siendo contemporánea al periodo ilustrado y complementaria en sus efectos transformadores.",
            en: "Correct. The Industrial Revolution began in England ~1760 with the steam engine (Watt, 1769), being contemporary to the Enlightenment period.",
          },
        },
        {
          id: "hu_rb_l3_q8",
          type: "order-steps",
          prompt: {
            es: "Ordena estos eventos relacionados con Napoleón Bonaparte:",
            en: "Order these events related to Napoleon Bonaparte:",
          },
          options: [
              { es: "Promulgación del Código Napoleónico (1804)", en: "Promulgation of the Napoleonic Code (1804)" },
              { es: "Golpe de Estado del 18 Brumario (1799)", en: "Coup d'état of 18 Brumaire (1799)" },
              { es: "Coronación como Emperador (dic 1804)", en: "Coronation as Emperor (Dec 1804)" },
              { es: "Derrota en Waterloo (jun 1815)", en: "Defeat at Waterloo (Jun 1815)" },
              { es: "Campaña de Rusia — desastre (1812)", en: "Russian Campaign — disaster (1812)" },
            ],
          correctAnswer: ["1", "0", "2", "4", "3"],
          explanation: {
            es: "Orden cronológico: 18 Brumario → Código Napoleónico → Coronación Emperador → Campaña Rusia → Waterloo.",
            en: "Chronological order: 18 Brumaire → Napoleonic Code → Imperial Coronation → Russian Campaign → Waterloo.",
          },
        },
      ],
    },
  ],
};
