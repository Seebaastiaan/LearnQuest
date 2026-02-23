import type { Topic } from "@/lib/types";

export const electromagnetismoTopic: Topic = {
  id: "electromagnetismo",
  slug: "electromagnetismo",
  title: {
    es: "Electromagnetismo",
    en: "Electromagnetism",
  },
  description: {
    es: "Electricidad, magnetismo y ondas electromagnéticas",
    en: "Electricity, magnetism and electromagnetic waves",
  },
  icon: "Magnet",
  color: "amber",
  bgGradient: "bg-linear-to-br from-amber-500 to-yellow-600",
  prerequisites: [],
  order: 6,
  lessons: [
    {
      id: "electromagnetismo-electrostatica",
      topicId: "electromagnetismo",
      order: 1,
      title: {
        es: "Electrostática",
        en: "Electrostatics",
      },
      description: {
        es: "Carga eléctrica y Ley de Coulomb",
        en: "Electric charge and Coulomb's Law",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_ele_01",
          type: "multiple-choice",
          prompt: {
            es: "Existen dos tipos de carga eléctrica:",
            en: "There are two types of electric charge:",
          },
          options: [
            { es: "Positiva y negativa", en: "Positive and negative" },
            { es: "Norte y sur", en: "North and south" },
            { es: "Alta y baja", en: "High and low" },
            { es: "Activa y pasiva", en: "Active and passive" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las cargas eléctricas son de dos tipos: positiva (+) como los protones, y negativa (-) como los electrones. Cargas iguales se repelen, opuestas se atraen.",
            en: "Electric charges are of two types: positive (+) like protons, and negative (-) like electrons. Like charges repel, opposite charges attract.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_02",
          type: "true-false",
          prompt: {
            es: "Cargas eléctricas del mismo signo se repelen, mientras que cargas de signo contrario se atraen.",
            en: "Electric charges of the same sign repel, while charges of opposite sign attract.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Esta es una ley fundamental: cargas iguales (+/+ o -/-) se repelen; cargas opuestas (+/-) se atraen.",
            en: "True. This is a fundamental law: like charges (+/+ or -/-) repel; opposite charges (+/-) attract.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_03",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Coulomb establece que la fuerza entre dos cargas es:",
            en: "Coulomb's Law states that the force between two charges is:",
          },
          options: [
            {
              es: "$F = k\\frac{q_1 q_2}{r^2}$",
              en: "$F = k\\frac{q_1 q_2}{r^2}$",
            },
            { es: "$F = ma$", en: "$F = ma$" },
            {
              es: "$F = G\\frac{m_1 m_2}{r^2}$",
              en: "$F = G\\frac{m_1 m_2}{r^2}$",
            },
            { es: "$F = qvB$", en: "$F = qvB$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Ley de Coulomb: $F = k\\frac{q_1 q_2}{r^2}$, donde $k = 9 \\times 10^9$ N·m²/C² es la constante de Coulomb, $q$ son cargas y $r$ la distancia.",
            en: "Coulomb's Law: $F = k\\frac{q_1 q_2}{r^2}$, where $k = 9 \\times 10^9$ N·m²/C² is Coulomb's constant, $q$ are charges and $r$ is distance.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_04",
          type: "multiple-choice",
          prompt: {
            es: "Si la distancia entre dos cargas se duplica, la fuerza eléctrica:",
            en: "If the distance between two charges doubles, the electric force:",
          },
          options: [
            { es: "Se reduce a la mitad", en: "Is reduced by half" },
            {
              es: "Se reduce a la cuarta parte",
              en: "Is reduced to one quarter",
            },
            { es: "Se duplica", en: "Doubles" },
            { es: "Se cuadruplica", en: "Quadruples" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Como $F \\propto \\frac{1}{r^2}$, si $r$ se duplica, $F' = \\frac{F}{4}$. La fuerza disminuye con el cuadrado de la distancia.",
            en: "Since $F \\propto \\frac{1}{r^2}$, if $r$ doubles, $F' = \\frac{F}{4}$. Force decreases with the square of distance.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ele_05",
          type: "multiple-choice",
          prompt: {
            es: "La unidad de carga eléctrica en el SI es:",
            en: "The unit of electric charge in SI is:",
          },
          options: [
            { es: "Coulomb (C)", en: "Coulomb (C)" },
            { es: "Ampere (A)", en: "Ampere (A)" },
            { es: "Volt (V)", en: "Volt (V)" },
            { es: "Ohm (Ω)", en: "Ohm (Ω)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El Coulomb (C) es la unidad de carga eléctrica. 1 C = 6.24 × 10¹⁸ cargas elementales (e).",
            en: "The Coulomb (C) is the unit of electric charge. 1 C = 6.24 × 10¹⁸ elementary charges (e).",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_06",
          type: "multiple-choice",
          prompt: {
            es: "Dos cargas de +3 μC y +6 μC están separadas 2 cm. ¿La fuerza entre ellas es atractiva o repulsiva?",
            en: "Two charges of +3 μC and +6 μC are separated 2 cm. Is the force between them attractive or repulsive?",
          },
          options: [
            { es: "Atractiva", en: "Attractive" },
            { es: "Repulsiva", en: "Repulsive" },
            { es: "Cero", en: "Zero" },
            { es: "Depende de la distancia", en: "Depends on distance" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Ambas cargas son positivas (mismo signo), por lo tanto la fuerza es repulsiva.",
            en: "Both charges are positive (same sign), therefore the force is repulsive.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_07",
          type: "fill-blank",
          prompt: {
            es: "El _______ eléctrico es una región del espacio donde actúan fuerzas sobre cargas eléctricas.",
            en: "The electric _______ is a region of space where forces act on electric charges.",
          },
          correctAnswer: "campo",
          explanation: {
            es: "El campo eléctrico ($\\vec{E}$) es una región donde una carga experimenta fuerza. Se mide en N/C o V/m.",
            en: "The electric field ($\\vec{E}$) is a region where a charge experiences force. It is measured in N/C or V/m.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_08",
          type: "multiple-choice",
          prompt: {
            es: "El proceso de dar o quitar electrones a un objeto neutro se llama:",
            en: "The process of giving or removing electrons from a neutral object is called:",
          },
          options: [
            { es: "Electrización", en: "Electrification" },
            { es: "Magnetización", en: "Magnetization" },
            { es: "Ionización", en: "Ionization" },
            { es: "Polarización", en: "Polarization" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Electrización es el proceso de cargar un objeto. Puede ser por frotamiento, contacto o inducción.",
            en: "Electrification is the process of charging an object. It can be by friction, contact or induction.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "electromagnetismo-circuitos",
      topicId: "electromagnetismo",
      order: 2,
      title: {
        es: "Circuitos y Ley de Ohm",
        en: "Circuits and Ohm's Law",
      },
      description: {
        es: "Corriente, voltaje, resistencia y circuitos",
        en: "Current, voltage, resistance and circuits",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_ele_09",
          type: "multiple-choice",
          prompt: {
            es: "La corriente eléctrica es:",
            en: "Electric current is:",
          },
          options: [
            {
              es: "El flujo de carga por unidad de tiempo",
              en: "The flow of charge per unit time",
            },
            {
              es: "La energía de los electrones",
              en: "The energy of electrons",
            },
            {
              es: "La resistencia de un conductor",
              en: "The resistance of a conductor",
            },
            { es: "La fuerza entre cargas", en: "The force between charges" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La corriente eléctrica ($I$) es la cantidad de carga que fluye por unidad de tiempo: $I = \\frac{Q}{t}$. Se mide en Amperes (A).",
            en: "Electric current ($I$) is the amount of charge flowing per unit time: $I = \\frac{Q}{t}$. It is measured in Amperes (A).",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_10",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Ohm establece que:",
            en: "Ohm's Law states that:",
          },
          options: [
            { es: "$V = IR$", en: "$V = IR$" },
            { es: "$F = ma$", en: "$F = ma$" },
            { es: "$P = VI$", en: "$P = VI$" },
            { es: "$Q = CV$", en: "$Q = CV$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Ley de Ohm relaciona voltaje ($V$), corriente ($I$) y resistencia ($R$): $V = IR$.",
            en: "Ohm's Law relates voltage ($V$), current ($I$) and resistance ($R$): $V = IR$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_11",
          type: "multiple-choice",
          prompt: {
            es: "Un circuito tiene una resistencia de 10 Ω y una corriente de 2 A. ¿Cuál es el voltaje?",
            en: "A circuit has a resistance of 10 Ω and a current of 2 A. What is the voltage?",
          },
          options: [
            { es: "5 V", en: "5 V" },
            { es: "12 V", en: "12 V" },
            { es: "20 V", en: "20 V" },
            { es: "0.2 V", en: "0.2 V" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Usando $V = IR = 2 \\times 10 = 20$ V.",
            en: "Using $V = IR = 2 \\times 10 = 20$ V.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_12",
          type: "true-false",
          prompt: {
            es: "En un circuito en serie, la corriente es la misma en todos los componentes.",
            en: "In a series circuit, current is the same through all components.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. En circuitos en serie: $I_{total} = I_1 = I_2 = I_3...$, pero los voltajes se suman: $V_{total} = V_1 + V_2 + V_3...$",
            en: "True. In series circuits: $I_{total} = I_1 = I_2 = I_3...$, but voltages add: $V_{total} = V_1 + V_2 + V_3...$",
          },
          difficulty: 2,
        },
        {
          id: "fis_ele_13",
          type: "multiple-choice",
          prompt: {
            es: "En un circuito en paralelo:",
            en: "In a parallel circuit:",
          },
          options: [
            {
              es: "El voltaje es el mismo en todas las ramas",
              en: "Voltage is the same across all branches",
            },
            {
              es: "La corriente es la misma en todas las ramas",
              en: "Current is the same through all branches",
            },
            {
              es: "Las resistencias se suman directamente",
              en: "Resistances add directly",
            },
            { es: "No hay corriente", en: "There is no current" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "En paralelo: $V_{total} = V_1 = V_2 = V_3...$, pero las corrientes se suman: $I_{total} = I_1 + I_2 + I_3...$",
            en: "In parallel: $V_{total} = V_1 = V_2 = V_3...$, but currents add: $I_{total} = I_1 + I_2 + I_3...$",
          },
          difficulty: 2,
        },
        {
          id: "fis_ele_14",
          type: "multiple-choice",
          prompt: {
            es: "La potencia eléctrica se calcula como:",
            en: "Electric power is calculated as:",
          },
          options: [
            { es: "$P = VI$", en: "$P = VI$" },
            { es: "$P = IR$", en: "$P = IR$" },
            { es: "$P = \\frac{V}{I}$", en: "$P = \\frac{V}{I}$" },
            { es: "$P = V + I$", en: "$P = V + I$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La potencia eléctrica es $P = VI$. También puede expresarse como $P = I^2R$ o $P = \\frac{V^2}{R}$. Se mide en Watts (W).",
            en: "Electric power is $P = VI$. Can also be expressed as $P = I^2R$ or $P = \\frac{V^2}{R}$. Measured in Watts (W).",
          },
          difficulty: 2,
        },
        {
          id: "fis_ele_15",
          type: "fill-blank",
          prompt: {
            es: "La _______ es la oposición al flujo de corriente eléctrica y se mide en Ohms (Ω).",
            en: "_______ is the opposition to electric current flow and is measured in Ohms (Ω).",
          },
          correctAnswer: "resistencia",
          explanation: {
            es: "La resistencia eléctrica (R) mide la dificultad que opone un material al paso de corriente. Depende del material, longitud y área transversal.",
            en: "Electrical resistance (R) measures the difficulty a material opposes to current flow. Depends on material, length and cross-sectional area.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_16",
          type: "multiple-choice",
          prompt: {
            es: "Dos resistencias de 6 Ω y 12 Ω están en serie. La resistencia total es:",
            en: "Two resistors of 6 Ω and 12 Ω are in series. The total resistance is:",
          },
          options: [
            { es: "4 Ω", en: "4 Ω" },
            { es: "9 Ω", en: "9 Ω" },
            { es: "18 Ω", en: "18 Ω" },
            { es: "72 Ω", en: "72 Ω" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "En serie, las resistencias se suman: $R_{total} = R_1 + R_2 = 6 + 12 = 18$ Ω.",
            en: "In series, resistances add: $R_{total} = R_1 + R_2 = 6 + 12 = 18$ Ω.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "electromagnetismo-campos-ondas",
      topicId: "electromagnetismo",
      order: 3,
      title: {
        es: "Campos e Inducción Electromagnética",
        en: "Fields and Electromagnetic Induction",
      },
      description: {
        es: "Magnetismo, inducción y ondas EM",
        en: "Magnetism, induction and EM waves",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_ele_17",
          type: "multiple-choice",
          prompt: {
            es: "Un campo magnético es producido por:",
            en: "A magnetic field is produced by:",
          },
          options: [
            {
              es: "Cargas en movimiento o imanes",
              en: "Moving charges or magnets",
            },
            { es: "Solo cargas estáticas", en: "Only static charges" },
            { es: "Luz visible", en: "Visible light" },
            { es: "Ondas sonoras", en: "Sound waves" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los campos magnéticos son generados por cargas eléctricas en movimiento (corriente) o por materiales magnéticos (imanes permanentes).",
            en: "Magnetic fields are generated by moving electric charges (current) or by magnetic materials (permanent magnets).",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_18",
          type: "true-false",
          prompt: {
            es: "La Ley de Faraday establece que un campo magnético variable induce una corriente eléctrica en un conductor.",
            en: "Faraday's Law states that a varying magnetic field induces an electric current in a conductor.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. La inducción electromagnética descubierta por Faraday establece que un cambio en el flujo magnético induce una fem (fuerza electromotriz) en un circuito.",
            en: "True. Electromagnetic induction discovered by Faraday states that a change in magnetic flux induces an emf (electromotive force) in a circuit.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ele_19",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Ampère-Maxwell relaciona:",
            en: "Ampère-Maxwell's Law relates:",
          },
          options: [
            {
              es: "El campo magnético con la corriente eléctrica y el campo eléctrico variable",
              en: "Magnetic field with electric current and varying electric field",
            },
            {
              es: "La fuerza con la aceleración",
              en: "Force with acceleration",
            },
            {
              es: "La temperatura con la presión",
              en: "Temperature with pressure",
            },
            { es: "La luz con el sonido", en: "Light with sound" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Ley de Ampère-Maxwell establece que las corrientes eléctricas y los campos eléctricos variables crean campos magnéticos.",
            en: "Ampère-Maxwell's Law states that electric currents and varying electric fields create magnetic fields.",
          },
          difficulty: 3,
        },
        {
          id: "fis_ele_20",
          type: "multiple-choice",
          prompt: {
            es: "Las ondas electromagnéticas:",
            en: "Electromagnetic waves:",
          },
          options: [
            {
              es: "No necesitan medio material para propagarse",
              en: "Do not need a material medium to propagate",
            },
            {
              es: "Solo se propagan en el vacío",
              en: "Only propagate in vacuum",
            },
            { es: "Requieren aire para viajar", en: "Require air to travel" },
            {
              es: "Viajan más lento que el sonido",
              en: "Travel slower than sound",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las ondas electromagnéticas (luz, radio, rayos X, etc.) pueden viajar en el vacío a la velocidad de la luz ($c \\approx 3 \\times 10^8$ m/s).",
            en: "Electromagnetic waves (light, radio, X-rays, etc.) can travel in vacuum at the speed of light ($c \\approx 3 \\times 10^8$ m/s).",
          },
          difficulty: 2,
        },
        {
          id: "fis_ele_21",
          type: "order-steps",
          prompt: {
            es: "Ordena las siguientes ondas electromagnéticas de menor a mayor frecuencia:",
            en: "Order the following electromagnetic waves from lowest to highest frequency:",
          },
          options: [
            { es: "Ondas de radio", en: "Radio waves" },
            { es: "Luz visible", en: "Visible light" },
            { es: "Rayos X", en: "X-rays" },
            { es: "Rayos gamma", en: "Gamma rays" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "El espectro electromagnético ordenado por frecuencia creciente: radio < microondas < infrarrojo < visible < ultravioleta < rayos X < rayos gamma.",
            en: "The electromagnetic spectrum ordered by increasing frequency: radio < microwaves < infrared < visible < ultraviolet < X-rays < gamma rays.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ele_22",
          type: "multiple-choice",
          prompt: {
            es: "La luz es:",
            en: "Light is:",
          },
          options: [
            { es: "Una onda electromagnética", en: "An electromagnetic wave" },
            { es: "Una onda mecánica", en: "A mechanical wave" },
            {
              es: "Una partícula sin propiedades ondulatorias",
              en: "A particle without wave properties",
            },
            { es: "Solo energía térmica", en: "Only thermal energy" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La luz es una onda electromagnética compuesta de campos eléctricos y magnéticos oscilantes perpendiculares entre sí y a la dirección de propagación.",
            en: "Light is an electromagnetic wave composed of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_23",
          type: "fill-blank",
          prompt: {
            es: "El espectro _______ incluye ondas de radio, microondas, luz visible, rayos X y rayos gamma.",
            en: "The _______ spectrum includes radio waves, microwaves, visible light, X-rays and gamma rays.",
          },
          correctAnswer: "electromagnético",
          explanation: {
            es: "El espectro electromagnético es el conjunto de todas las ondas electromagnéticas ordenadas por frecuencia o longitud de onda.",
            en: "The electromagnetic spectrum is the set of all electromagnetic waves ordered by frequency or wavelength.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ele_24",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál propiedad de la luz NO cambia cuando pasa de un medio a otro?",
            en: "Which property of light does NOT change when passing from one medium to another?",
          },
          options: [
            { es: "La velocidad", en: "Velocity" },
            { es: "La longitud de onda", en: "Wavelength" },
            { es: "La frecuencia", en: "Frequency" },
            { es: "La dirección", en: "Direction" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La frecuencia permanece constante cuando la luz cambia de medio. La velocidad y longitud de onda sí cambian según el índice de refracción.",
            en: "Frequency remains constant when light changes medium. Velocity and wavelength do change according to the refractive index.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
