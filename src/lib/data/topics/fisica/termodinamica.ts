import type { Topic } from "@/lib/types";

export const termodinamicaTopic: Topic = {
  id: "termodinamica",
  slug: "termodinamica",
  title: {
    es: "Termodinámica",
    en: "Thermodynamics",
  },
  description: {
    es: "Calor, temperatura y teoría cinética",
    en: "Heat, temperature and kinetic theory",
  },
  icon: "Thermometer",
  color: "red",
  bgGradient: "bg-linear-to-br from-red-500 to-orange-600",
  prerequisites: [],
  order: 4,
  lessons: [
    {
      id: "termodinamica-calor-temperatura",
      topicId: "termodinamica",
      order: 1,
      title: {
        es: "Calor y Temperatura",
        en: "Heat and Temperature",
      },
      description: {
        es: "Diferencia entre calor y temperatura, escalas y calorimetría",
        en: "Difference between heat and temperature, scales and calorimetry",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_ter_01",
          type: "multiple-choice",
          prompt: {
            es: "La temperatura es una medida de:",
            en: "Temperature is a measure of:",
          },
          options: [
            {
              es: "La energía cinética promedio de las moléculas",
              en: "The average kinetic energy of molecules",
            },
            {
              es: "La energía total de un sistema",
              en: "The total energy of a system",
            },
            {
              es: "El calor contenido en un objeto",
              en: "The heat contained in an object",
            },
            { es: "La masa de las partículas", en: "The mass of particles" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La temperatura mide la energía cinética promedio de las moléculas de una sustancia. A mayor temperatura, mayor movimiento molecular.",
            en: "Temperature measures the average kinetic energy of molecules in a substance. Higher temperature means greater molecular motion.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_02",
          type: "multiple-choice",
          prompt: {
            es: "El calor es:",
            en: "Heat is:",
          },
          options: [
            { es: "Una propiedad de un cuerpo", en: "A property of a body" },
            {
              es: "Energía en tránsito debido a diferencia de temperatura",
              en: "Energy in transit due to temperature difference",
            },
            { es: "Lo mismo que temperatura", en: "The same as temperature" },
            { es: "Una forma de materia", en: "A form of matter" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El calor es energía térmica que fluye de un cuerpo de mayor temperatura a uno de menor temperatura. No es una propiedad sino un proceso de transferencia.",
            en: "Heat is thermal energy that flows from a body of higher temperature to one of lower temperature. It is not a property but a transfer process.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_03",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la temperatura de congelación del agua en la escala Celsius?",
            en: "What is the freezing temperature of water in Celsius scale?",
          },
          options: [
            { es: "0°C", en: "0°C" },
            { es: "32°C", en: "32°C" },
            { es: "100°C", en: "100°C" },
            { es: "273°C", en: "273°C" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El agua se congela a 0°C (o 32°F, o 273.15 K). Esta es una de las referencias de la escala Celsius.",
            en: "Water freezes at 0°C (or 32°F, or 273.15 K). This is one of the references of the Celsius scale.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_04",
          type: "true-false",
          prompt: {
            es: "El cero absoluto (0 K) es la temperatura más baja posible y corresponde a -273.15°C.",
            en: "Absolute zero (0 K) is the lowest possible temperature and corresponds to -273.15°C.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. El cero absoluto es 0 K = -273.15°C = -459.67°F, donde cesa el movimiento molecular.",
            en: "True. Absolute zero is 0 K = -273.15°C = -459.67°F, where molecular motion ceases.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_05",
          type: "multiple-choice",
          prompt: {
            es: "La ecuación de calorimetría $Q = mc\\Delta T$ se usa para calcular:",
            en: "The calorimetry equation $Q = mc\\Delta T$ is used to calculate:",
          },
          options: [
            { es: "El trabajo realizado", en: "The work done" },
            {
              es: "El calor absorbido o cedido sin cambio de fase",
              en: "The heat absorbed or released without phase change",
            },
            { es: "La temperatura final", en: "The final temperature" },
            { es: "La presión del gas", en: "The gas pressure" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Esta ecuación calcula el calor ($Q$) transferido cuando cambia la temperatura, donde $m$ es masa, $c$ es calor específico y $\\Delta T$ es cambio de temperatura.",
            en: "This equation calculates heat ($Q$) transferred when temperature changes, where $m$ is mass, $c$ is specific heat and $\\Delta T$ is temperature change.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_06",
          type: "multiple-choice",
          prompt: {
            es: "Se calientan 200 g de agua de 20°C a 80°C. Si el calor específico del agua es 1 cal/g°C, ¿cuánto calor se necesita?",
            en: "200 g of water is heated from 20°C to 80°C. If the specific heat of water is 1 cal/g°C, how much heat is needed?",
          },
          options: [
            { es: "12,000 cal", en: "12,000 cal" },
            { es: "6,000 cal", en: "6,000 cal" },
            { es: "16,000 cal", en: "16,000 cal" },
            { es: "20,000 cal", en: "20,000 cal" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "$Q = mc\\Delta T = 200 \\times 1 \\times (80-20) = 200 \\times 60 = 12,000$ cal.",
            en: "$Q = mc\\Delta T = 200 \\times 1 \\times (80-20) = 200 \\times 60 = 12,000$ cal.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_07",
          type: "fill-blank",
          prompt: {
            es: "La unidad de calor en el SI es el _______, mientras que también se usa la caloría.",
            en: "The unit of heat in SI is the _______, while the calorie is also used.",
          },
          correctAnswer: "Joule",
          explanation: {
            es: "El Joule (J) es la unidad SI de energía y calor. 1 cal = 4.186 J.",
            en: "The Joule (J) is the SI unit of energy and heat. 1 cal = 4.186 J.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_08",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál propiedad térmica indica cuánto calor se necesita para aumentar 1°C la temperatura de 1 g de sustancia?",
            en: "Which thermal property indicates how much heat is needed to increase 1°C the temperature of 1 g of substance?",
          },
          options: [
            { es: "Conductividad térmica", en: "Thermal conductivity" },
            { es: "Calor específico", en: "Specific heat" },
            { es: "Capacidad calorífica", en: "Heat capacity" },
            { es: "Calor latente", en: "Latent heat" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El calor específico (c) es la cantidad de calor necesaria para elevar 1°C la temperatura de 1 g de sustancia.",
            en: "Specific heat (c) is the amount of heat needed to raise 1°C the temperature of 1 g of substance.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "termodinamica-gases",
      topicId: "termodinamica",
      order: 2,
      title: {
        es: "Teoría Cinética de los Gases",
        en: "Kinetic Theory of Gases",
      },
      description: {
        es: "Ley de gases ideales y comportamiento molecular",
        en: "Ideal gas law and molecular behavior",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_ter_09",
          type: "multiple-choice",
          prompt: {
            es: "La ley de los gases ideales se expresa como:",
            en: "The ideal gas law is expressed as:",
          },
          options: [
            { es: "$PV = nRT$", en: "$PV = nRT$" },
            { es: "$F = ma$", en: "$F = ma$" },
            { es: "$E = mc^2$", en: "$E = mc^2$" },
            { es: "$Q = mc\\Delta T$", en: "$Q = mc\\Delta T$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La ecuación de estado de los gases ideales es $PV = nRT$, donde $P$ es presión, $V$ volumen, $n$ moles, $R$ constante de gases y $T$ temperatura absoluta.",
            en: "The ideal gas equation of state is $PV = nRT$, where $P$ is pressure, $V$ volume, $n$ moles, $R$ gas constant and $T$ absolute temperature.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_10",
          type: "true-false",
          prompt: {
            es: "Según la teoría cinética, la temperatura de un gas es directamente proporcional a la energía cinética promedio de sus moléculas.",
            en: "According to kinetic theory, gas temperature is directly proportional to the average kinetic energy of its molecules.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. La temperatura absoluta es proporcional a la energía cinética promedio: $\\bar{E_k} = \\frac{3}{2}k_BT$, donde $k_B$ es la constante de Boltzmann.",
            en: "True. Absolute temperature is proportional to average kinetic energy: $\\bar{E_k} = \\frac{3}{2}k_BT$, where $k_B$ is Boltzmann's constant.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_11",
          type: "multiple-choice",
          prompt: {
            es: "Si se mantiene constante el volumen de un gas y se aumenta la temperatura, la presión:",
            en: "If the volume of a gas is kept constant and temperature is increased, the pressure:",
          },
          options: [
            { es: "Disminuye", en: "Decreases" },
            { es: "Aumenta", en: "Increases" },
            { es: "Permanece igual", en: "Remains the same" },
            { es: "Se vuelve cero", en: "Becomes zero" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "A volumen constante, la presión es directamente proporcional a la temperatura (Ley de Gay-Lussac): $\\frac{P}{T} = $ constante.",
            en: "At constant volume, pressure is directly proportional to temperature (Gay-Lussac's Law): $\\frac{P}{T} = $ constant.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_12",
          type: "multiple-choice",
          prompt: {
            es: "Un gas ocupa 2 L a 300 K. Si la temperatura aumenta a 600 K manteniendo la presión constante, el nuevo volumen será:",
            en: "A gas occupies 2 L at 300 K. If temperature increases to 600 K keeping pressure constant, the new volume will be:",
          },
          options: [
            { es: "1 L", en: "1 L" },
            { es: "2 L", en: "2 L" },
            { es: "4 L", en: "4 L" },
            { es: "6 L", en: "6 L" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Ley de Charles: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\rightarrow \\frac{2}{300} = \\frac{V_2}{600} \\rightarrow V_2 = 4$ L.",
            en: "Charles's Law: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\rightarrow \\frac{2}{300} = \\frac{V_2}{600} \\rightarrow V_2 = 4$ L.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_13",
          type: "multiple-choice",
          prompt: {
            es: "La constante universal de los gases R tiene un valor aproximado de:",
            en: "The universal gas constant R has an approximate value of:",
          },
          options: [
            { es: "8.314 J/(mol·K)", en: "8.314 J/(mol·K)" },
            { es: "9.8 m/s²", en: "9.8 m/s²" },
            { es: "6.67 × 10⁻¹¹ N·m²/kg²", en: "6.67 × 10⁻¹¹ N·m²/kg²" },
            { es: "3 × 10⁸ m/s", en: "3 × 10⁸ m/s" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La constante de los gases es $R = 8.314$ J/(mol·K) o 0.0821 L·atm/(mol·K).",
            en: "The gas constant is $R = 8.314$ J/(mol·K) or 0.0821 L·atm/(mol·K).",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_14",
          type: "fill-blank",
          prompt: {
            es: "La Ley de _______ establece que a temperatura constante, el producto de presión por volumen es constante: PV = constante.",
            en: "_______ Law states that at constant temperature, the product of pressure times volume is constant: PV = constant.",
          },
          correctAnswer: "Boyle",
          explanation: {
            es: "La Ley de Boyle-Mariotte describe el comportamiento isotérmico de los gases: $P_1V_1 = P_2V_2$.",
            en: "Boyle-Mariotte's Law describes isothermal behavior of gases: $P_1V_1 = P_2V_2$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_15",
          type: "multiple-choice",
          prompt: {
            es: "En un gas ideal, ¿qué sucede con la velocidad promedio de las moléculas al aumentar la temperatura?",
            en: "In an ideal gas, what happens to the average velocity of molecules when temperature increases?",
          },
          options: [
            { es: "Disminuye", en: "Decreases" },
            { es: "Aumenta", en: "Increases" },
            { es: "Permanece constante", en: "Remains constant" },
            { es: "Se vuelve cero", en: "Becomes zero" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Al aumentar la temperatura, aumenta la energía cinética y por lo tanto la velocidad promedio de las moléculas: $v_{rms} \\propto \\sqrt{T}$.",
            en: "When temperature increases, kinetic energy increases and therefore the average velocity of molecules: $v_{rms} \\propto \\sqrt{T}$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_16",
          type: "multiple-choice",
          prompt: {
            es: "Un gas a 2 atm de presión ocupa 5 L. Si la presión aumenta a 10 atm manteniendo temperatura constante, el volumen será:",
            en: "A gas at 2 atm pressure occupies 5 L. If pressure increases to 10 atm keeping temperature constant, the volume will be:",
          },
          options: [
            { es: "1 L", en: "1 L" },
            { es: "2 L", en: "2 L" },
            { es: "10 L", en: "10 L" },
            { es: "25 L", en: "25 L" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ley de Boyle: $P_1V_1 = P_2V_2 \\rightarrow (2)(5) = (10)V_2 \\rightarrow V_2 = 1$ L.",
            en: "Boyle's Law: $P_1V_1 = P_2V_2 \\rightarrow (2)(5) = (10)V_2 \\rightarrow V_2 = 1$ L.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "termodinamica-leyes",
      topicId: "termodinamica",
      order: 3,
      title: {
        es: "Leyes de la Termodinámica",
        en: "Laws of Thermodynamics",
      },
      description: {
        es: "Primera y segunda ley, procesos termodinámicos",
        en: "First and second law, thermodynamic processes",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_ter_17",
          type: "multiple-choice",
          prompt: {
            es: "La Primera Ley de la Termodinámica establece:",
            en: "The First Law of Thermodynamics states:",
          },
          options: [
            {
              es: "La energía se conserva: $\\Delta U = Q - W$",
              en: "Energy is conserved: $\\Delta U = Q - W$",
            },
            {
              es: "La entropía siempre aumenta",
              en: "Entropy always increases",
            },
            {
              es: "El cero absoluto es inalcanzable",
              en: "Absolute zero is unreachable",
            },
            {
              es: "El calor fluye de frío a caliente",
              en: "Heat flows from cold to hot",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Primera Ley es la conservación de energía: el cambio en energía interna ($\\Delta U$) es igual al calor añadido ($Q$) menos el trabajo realizado por el sistema ($W$).",
            en: "The First Law is energy conservation: the change in internal energy ($\\Delta U$) equals heat added ($Q$) minus work done by the system ($W$).",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_18",
          type: "true-false",
          prompt: {
            es: "La Segunda Ley de la Termodinámica establece que la entropía de un sistema aislado siempre aumenta.",
            en: "The Second Law of Thermodynamics states that the entropy of an isolated system always increases.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. La Segunda Ley establece que en procesos naturales la entropía (desorden) del universo aumenta, haciendo irreversibles los procesos espontáneos.",
            en: "True. The Second Law states that in natural processes the entropy (disorder) of the universe increases, making spontaneous processes irreversible.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_19",
          type: "multiple-choice",
          prompt: {
            es: "En un proceso isotérmico (temperatura constante):",
            en: "In an isothermal process (constant temperature):",
          },
          options: [
            {
              es: "$\\Delta U = 0$ y $Q = W$",
              en: "$\\Delta U = 0$ and $Q = W$",
            },
            { es: "$Q = 0$", en: "$Q = 0$" },
            { es: "$W = 0$", en: "$W = 0$" },
            { es: "$\\Delta U = Q$", en: "$\\Delta U = Q$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Si la temperatura es constante, la energía interna no cambia ($\\Delta U = 0$). Por la Primera Ley: $0 = Q - W \\rightarrow Q = W$.",
            en: "If temperature is constant, internal energy doesn't change ($\\Delta U = 0$). By the First Law: $0 = Q - W \\rightarrow Q = W$.",
          },
          difficulty: 3,
        },
        {
          id: "fis_ter_20",
          type: "multiple-choice",
          prompt: {
            es: "En un proceso adiabático:",
            en: "In an adiabatic process:",
          },
          options: [
            {
              es: "No hay intercambio de calor: $Q = 0$",
              en: "There is no heat exchange: $Q = 0$",
            },
            {
              es: "La temperatura es constante",
              en: "Temperature is constant",
            },
            { es: "La presión es constante", en: "Pressure is constant" },
            { es: "El volumen es constante", en: "Volume is constant" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Un proceso adiabático es aquel en el que no hay intercambio de calor con el entorno ($Q = 0$). Por tanto: $\\Delta U = -W$.",
            en: "An adiabatic process is one in which there is no heat exchange with surroundings ($Q = 0$). Therefore: $\\Delta U = -W$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_21",
          type: "multiple-choice",
          prompt: {
            es: "Si un gas absorbe 200 J de calor y realiza 150 J de trabajo, ¿cuál es el cambio en su energía interna?",
            en: "If a gas absorbs 200 J of heat and does 150 J of work, what is the change in its internal energy?",
          },
          options: [
            { es: "50 J", en: "50 J" },
            { es: "350 J", en: "350 J" },
            { es: "-50 J", en: "-50 J" },
            { es: "200 J", en: "200 J" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Usando $\\Delta U = Q - W = 200 - 150 = 50$ J.",
            en: "Using $\\Delta U = Q - W = 200 - 150 = 50$ J.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ter_22",
          type: "order-steps",
          prompt: {
            es: "Ordena los procesos del Ciclo de Carnot de una máquina térmica ideal:",
            en: "Order the processes of the Carnot Cycle of an ideal heat engine:",
          },
          options: [
            {
              es: "Expansión isotérmica (absorbe calor)",
              en: "Isothermal expansion (absorbs heat)",
            },
            {
              es: "Expansión adiabática (se enfría)",
              en: "Adiabatic expansion (cools down)",
            },
            {
              es: "Compresión isotérmica (cede calor)",
              en: "Isothermal compression (releases heat)",
            },
            {
              es: "Compresión adiabática (se calienta)",
              en: "Adiabatic compression (heats up)",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "El Ciclo de Carnot consiste en: 1) expansión isotérmica, 2) expansión adiabática, 3) compresión isotérmica, 4) compresión adiabática.",
            en: "The Carnot Cycle consists of: 1) isothermal expansion, 2) adiabatic expansion, 3) isothermal compression, 4) adiabatic compression.",
          },
          difficulty: 3,
        },
        {
          id: "fis_ter_23",
          type: "fill-blank",
          prompt: {
            es: "Una máquina térmica convierte energía _______ en trabajo mecánico.",
            en: "A heat engine converts _______ energy into mechanical work.",
          },
          correctAnswer: "térmica",
          explanation: {
            es: "Las máquinas térmicas (como motores de combustión) convierten energía térmica (calor) en energía mecánica (trabajo).",
            en: "Heat engines (like combustion engines) convert thermal energy (heat) into mechanical energy (work).",
          },
          difficulty: 1,
        },
        {
          id: "fis_ter_24",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál afirmación sobre la eficiencia de una máquina térmica es correcta?",
            en: "Which statement about the efficiency of a heat engine is correct?",
          },
          options: [
            { es: "Puede ser del 100%", en: "Can be 100%" },
            {
              es: "Nunca puede ser del 100% según la Segunda Ley",
              en: "Can never be 100% according to the Second Law",
            },
            {
              es: "Depende solo de la presión",
              en: "Depends only on pressure",
            },
            { es: "Es siempre mayor que 1", en: "Is always greater than 1" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La Segunda Ley de la Termodinámica establece que ninguna máquina térmica puede tener 100% de eficiencia, pues siempre se pierde energía como calor al ambiente.",
            en: "The Second Law of Thermodynamics states that no heat engine can have 100% efficiency, as energy is always lost as heat to the environment.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
