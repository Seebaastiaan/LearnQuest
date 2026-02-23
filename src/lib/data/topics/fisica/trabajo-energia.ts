import type { Topic } from "@/lib/types";

export const trabajoEnergiaTopic: Topic = {
  id: "trabajo-energia",
  slug: "trabajo-energia",
  title: {
    es: "Trabajo y Energía",
    en: "Work and Energy",
  },
  description: {
    es: "Leyes de conservación y colisiones",
    en: "Conservation laws and collisions",
  },
  icon: "Zap",
  color: "indigo",
  bgGradient: "bg-linear-to-br from-indigo-500 to-blue-600",
  prerequisites: ["fuerzas-newton"],
  order: 3,
  lessons: [
    {
      id: "trabajo-energia-trabajo-potencia",
      topicId: "trabajo-energia",
      order: 1,
      title: {
        es: "Trabajo y Potencia",
        en: "Work and Power",
      },
      description: {
        es: "Trabajo mecánico y potencia",
        en: "Mechanical work and power",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_te_01",
          type: "multiple-choice",
          prompt: {
            es: "El trabajo mecánico se define como:",
            en: "Mechanical work is defined as:",
          },
          options: [
            {
              es: "La fuerza aplicada a un objeto",
              en: "The force applied to an object",
            },
            {
              es: "El producto de la fuerza por el desplazamiento en la dirección de la fuerza",
              en: "The product of force times displacement in the direction of force",
            },
            {
              es: "La energía total de un sistema",
              en: "The total energy of a system",
            },
            {
              es: "La velocidad de un objeto",
              en: "The velocity of an object",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El trabajo se define como $W = Fd\\cos\\theta$, donde $F$ es la fuerza, $d$ el desplazamiento y $\\theta$ el ángulo entre ellos.",
            en: "Work is defined as $W = Fd\\cos\\theta$, where $F$ is force, $d$ is displacement and $\\theta$ is the angle between them.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_02",
          type: "multiple-choice",
          prompt: {
            es: "Una fuerza de 20 N desplaza un objeto 5 m en la misma dirección de la fuerza. ¿Cuál es el trabajo realizado?",
            en: "A force of 20 N displaces an object 5 m in the same direction as the force. What is the work done?",
          },
          options: [
            { es: "4 J", en: "4 J" },
            { es: "25 J", en: "25 J" },
            { es: "100 J", en: "100 J" },
            { es: "400 J", en: "400 J" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Como la fuerza y el desplazamiento están en la misma dirección ($\\theta = 0°$): $W = Fd = 20 \\times 5 = 100$ J.",
            en: "Since force and displacement are in the same direction ($\\theta = 0°$): $W = Fd = 20 \\times 5 = 100$ J.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_03",
          type: "true-false",
          prompt: {
            es: "Si una fuerza es perpendicular al desplazamiento, el trabajo realizado es cero.",
            en: "If a force is perpendicular to the displacement, the work done is zero.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Cuando $\\theta = 90°$, $\\cos(90°) = 0$, por lo tanto $W = Fd\\cos(90°) = 0$.",
            en: "True. When $\\theta = 90°$, $\\cos(90°) = 0$, therefore $W = Fd\\cos(90°) = 0$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_04",
          type: "multiple-choice",
          prompt: {
            es: "La unidad de trabajo en el Sistema Internacional es:",
            en: "The unit of work in the International System is:",
          },
          options: [
            { es: "Newton (N)", en: "Newton (N)" },
            { es: "Joule (J)", en: "Joule (J)" },
            { es: "Watt (W)", en: "Watt (W)" },
            { es: "Pascal (Pa)", en: "Pascal (Pa)" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El Joule (J) es la unidad de trabajo y energía. 1 J = 1 N·m = 1 kg·m²/s².",
            en: "The Joule (J) is the unit of work and energy. 1 J = 1 N·m = 1 kg·m²/s².",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_05",
          type: "multiple-choice",
          prompt: {
            es: "La potencia se define como:",
            en: "Power is defined as:",
          },
          options: [
            { es: "La fuerza aplicada", en: "The applied force" },
            {
              es: "El trabajo realizado por unidad de tiempo",
              en: "The work done per unit time",
            },
            { es: "La energía almacenada", en: "The stored energy" },
            {
              es: "La velocidad de un objeto",
              en: "The velocity of an object",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La potencia es $P = \\frac{W}{t}$, es decir, la rapidez con la que se realiza trabajo o se transfiere energía.",
            en: "Power is $P = \\frac{W}{t}$, that is, the rate at which work is done or energy is transferred.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_06",
          type: "multiple-choice",
          prompt: {
            es: "Si se realiza un trabajo de 500 J en 10 segundos, ¿cuál es la potencia desarrollada?",
            en: "If 500 J of work is done in 10 seconds, what is the power developed?",
          },
          options: [
            { es: "50 W", en: "50 W" },
            { es: "500 W", en: "500 W" },
            { es: "5000 W", en: "5000 W" },
            { es: "0.02 W", en: "0.02 W" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Usando $P = \\frac{W}{t} = \\frac{500}{10} = 50$ W (watts).",
            en: "Using $P = \\frac{W}{t} = \\frac{500}{10} = 50$ W (watts).",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_07",
          type: "fill-blank",
          prompt: {
            es: "La unidad de potencia en el SI es el _______, que equivale a un Joule por segundo.",
            en: "The unit of power in SI is the _______, which equals one Joule per second.",
          },
          correctAnswer: "Watt",
          explanation: {
            es: "El Watt (W) es la unidad de potencia. 1 W = 1 J/s.",
            en: "The Watt (W) is the unit of power. 1 W = 1 J/s.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_08",
          type: "multiple-choice",
          prompt: {
            es: "Un motor levanta una carga de 200 kg a una altura de 10 m en 5 segundos. ¿Cuál es su potencia? (g = 10 m/s²)",
            en: "A motor lifts a load of 200 kg to a height of 10 m in 5 seconds. What is its power? (g = 10 m/s²)",
          },
          options: [
            { es: "400 W", en: "400 W" },
            { es: "4000 W", en: "4000 W" },
            { es: "20000 W", en: "20000 W" },
            { es: "10000 W", en: "10000 W" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Trabajo = $W = mgh = 200 \\times 10 \\times 10 = 20,000$ J. Potencia = $P = \\frac{W}{t} = \\frac{20,000}{5} = 4,000$ W.",
            en: "Work = $W = mgh = 200 \\times 10 \\times 10 = 20,000$ J. Power = $P = \\frac{W}{t} = \\frac{20,000}{5} = 4,000$ W.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "trabajo-energia-cinetica-potencial",
      topicId: "trabajo-energia",
      order: 2,
      title: {
        es: "Energía Cinética y Potencial",
        en: "Kinetic and Potential Energy",
      },
      description: {
        es: "Formas de energía y conservación",
        en: "Forms of energy and conservation",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_te_09",
          type: "multiple-choice",
          prompt: {
            es: "La energía cinética se define como:",
            en: "Kinetic energy is defined as:",
          },
          options: [
            { es: "$E_k = mgh$", en: "$E_k = mgh$" },
            { es: "$E_k = \\frac{1}{2}mv^2$", en: "$E_k = \\frac{1}{2}mv^2$" },
            { es: "$E_k = Fd$", en: "$E_k = Fd$" },
            { es: "$E_k = mc^2$", en: "$E_k = mc^2$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La energía cinética es la energía asociada al movimiento: $E_k = \\frac{1}{2}mv^2$, donde $m$ es masa y $v$ velocidad.",
            en: "Kinetic energy is the energy associated with motion: $E_k = \\frac{1}{2}mv^2$, where $m$ is mass and $v$ is velocity.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_10",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto de 4 kg se mueve a 5 m/s. ¿Cuál es su energía cinética?",
            en: "A 4 kg object moves at 5 m/s. What is its kinetic energy?",
          },
          options: [
            { es: "10 J", en: "10 J" },
            { es: "20 J", en: "20 J" },
            { es: "50 J", en: "50 J" },
            { es: "100 J", en: "100 J" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "$E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(5)^2 = \\frac{1}{2}(4)(25) = 50$ J.",
            en: "$E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(5)^2 = \\frac{1}{2}(4)(25) = 50$ J.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_11",
          type: "multiple-choice",
          prompt: {
            es: "La energía potencial gravitacional se calcula con:",
            en: "Gravitational potential energy is calculated with:",
          },
          options: [
            { es: "$E_p = \\frac{1}{2}kx^2$", en: "$E_p = \\frac{1}{2}kx^2$" },
            { es: "$E_p = mgh$", en: "$E_p = mgh$" },
            { es: "$E_p = \\frac{1}{2}mv^2$", en: "$E_p = \\frac{1}{2}mv^2$" },
            { es: "$E_p = Fd$", en: "$E_p = Fd$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La energía potencial gravitacional es $E_p = mgh$, donde $h$ es la altura respecto a un nivel de referencia.",
            en: "Gravitational potential energy is $E_p = mgh$, where $h$ is the height relative to a reference level.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_12",
          type: "true-false",
          prompt: {
            es: "La conservación de la energía mecánica establece que en ausencia de fuerzas no conservativas, la suma de energía cinética y potencial permanece constante.",
            en: "Conservation of mechanical energy states that in the absence of non-conservative forces, the sum of kinetic and potential energy remains constant.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. $E_{mecánica} = E_k + E_p = $ constante, cuando solo actúan fuerzas conservativas (como la gravedad).",
            en: "True. $E_{mechanical} = E_k + E_p = $ constant, when only conservative forces (like gravity) act.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_13",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto de 2 kg se encuentra a 5 m de altura. ¿Cuál es su energía potencial? (g = 10 m/s²)",
            en: "A 2 kg object is at a height of 5 m. What is its potential energy? (g = 10 m/s²)",
          },
          options: [
            { es: "10 J", en: "10 J" },
            { es: "50 J", en: "50 J" },
            { es: "100 J", en: "100 J" },
            { es: "200 J", en: "200 J" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "$E_p = mgh = 2 \\times 10 \\times 5 = 100$ J.",
            en: "$E_p = mgh = 2 \\times 10 \\times 5 = 100$ J.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_14",
          type: "multiple-choice",
          prompt: {
            es: "Si se duplica la velocidad de un objeto, su energía cinética:",
            en: "If the velocity of an object doubles, its kinetic energy:",
          },
          options: [
            { es: "Se duplica", en: "Doubles" },
            { es: "Se cuadruplica", en: "Quadruples" },
            { es: "Se reduce a la mitad", en: "Is halved" },
            { es: "Permanece igual", en: "Remains the same" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Como $E_k \\propto v^2$, si $v' = 2v$, entonces $E_k' = \\frac{1}{2}m(2v)^2 = 4(\\frac{1}{2}mv^2) = 4E_k$.",
            en: "Since $E_k \\propto v^2$, if $v' = 2v$, then $E_k' = \\frac{1}{2}m(2v)^2 = 4(\\frac{1}{2}mv^2) = 4E_k$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_15",
          type: "fill-blank",
          prompt: {
            es: "Las fuerzas _______ no conservan la energía mecánica, transformándola en calor u otras formas.",
            en: "_______ forces do not conserve mechanical energy, transforming it into heat or other forms.",
          },
          correctAnswer: "disipativas",
          explanation: {
            es: "Las fuerzas disipativas (como la fricción o resistencia del aire) convierten la energía mecánica en energía térmica.",
            en: "Dissipative forces (like friction or air resistance) convert mechanical energy into thermal energy.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_16",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto de 1 kg se deja caer desde 20 m de altura. Despreciando fricción, ¿qué velocidad tendrá al llegar al suelo? (g = 10 m/s²)",
            en: "A 1 kg object is dropped from 20 m high. Neglecting friction, what velocity will it have when reaching the ground? (g = 10 m/s²)",
          },
          options: [
            { es: "10 m/s", en: "10 m/s" },
            { es: "14.1 m/s", en: "14.1 m/s" },
            { es: "20 m/s", en: "20 m/s" },
            { es: "28.3 m/s", en: "28.3 m/s" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Por conservación: $E_p = E_k \\rightarrow mgh = \\frac{1}{2}mv^2 \\rightarrow gh = \\frac{1}{2}v^2 \\rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = 20$ m/s.",
            en: "By conservation: $E_p = E_k \\rightarrow mgh = \\frac{1}{2}mv^2 \\rightarrow gh = \\frac{1}{2}v^2 \\rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = 20$ m/s.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "trabajo-energia-impulso-colisiones",
      topicId: "trabajo-energia",
      order: 3,
      title: {
        es: "Impulso y Colisiones",
        en: "Impulse and Collisions",
      },
      description: {
        es: "Conservación del momento y colisiones",
        en: "Momentum conservation and collisions",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_te_17",
          type: "multiple-choice",
          prompt: {
            es: "El momento lineal (cantidad de movimiento) se define como:",
            en: "Linear momentum is defined as:",
          },
          options: [
            { es: "$p = mv$", en: "$p = mv$" },
            { es: "$p = ma$", en: "$p = ma$" },
            { es: "$p = \\frac{1}{2}mv^2$", en: "$p = \\frac{1}{2}mv^2$" },
            { es: "$p = Ft$", en: "$p = Ft$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El momento lineal es $p = mv$, donde $m$ es masa y $v$ velocidad. Es una magnitud vectorial.",
            en: "Linear momentum is $p = mv$, where $m$ is mass and $v$ is velocity. It is a vector quantity.",
          },
          difficulty: 1,
        },
        {
          id: "fis_te_18",
          type: "multiple-choice",
          prompt: {
            es: "El impulso se define como:",
            en: "Impulse is defined as:",
          },
          options: [
            { es: "El cambio de velocidad", en: "The change in velocity" },
            {
              es: "El producto de fuerza por tiempo",
              en: "The product of force times time",
            },
            { es: "La energía cinética", en: "The kinetic energy" },
            { es: "El trabajo realizado", en: "The work done" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El impulso es $I = F\\Delta t = \\Delta p$ (cambio de momento). Relaciona fuerza aplicada, tiempo y cambio de momento.",
            en: "Impulse is $I = F\\Delta t = \\Delta p$ (change in momentum). It relates applied force, time and change in momentum.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_19",
          type: "true-false",
          prompt: {
            es: "En un sistema aislado (sin fuerzas externas), el momento total se conserva.",
            en: "In an isolated system (without external forces), total momentum is conserved.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. El principio de conservación del momento establece que $\\sum \\vec{p}_{inicial} = \\sum \\vec{p}_{final}$ en ausencia de fuerzas externas.",
            en: "True. The principle of momentum conservation states that $\\sum \\vec{p}_{initial} = \\sum \\vec{p}_{final}$ in the absence of external forces.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_20",
          type: "multiple-choice",
          prompt: {
            es: "En una colisión elástica:",
            en: "In an elastic collision:",
          },
          options: [
            {
              es: "Se conserva el momento pero no la energía cinética",
              en: "Momentum is conserved but not kinetic energy",
            },
            {
              es: "Se conservan tanto el momento como la energía cinética",
              en: "Both momentum and kinetic energy are conserved",
            },
            {
              es: "No se conserva ni el momento ni la energía",
              en: "Neither momentum nor energy is conserved",
            },
            {
              es: "Los objetos quedan unidos después del choque",
              en: "Objects remain together after collision",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "En colisiones elásticas se conservan tanto el momento total como la energía cinética total del sistema.",
            en: "In elastic collisions both total momentum and total kinetic energy of the system are conserved.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_21",
          type: "multiple-choice",
          prompt: {
            es: "Dos objetos de 3 kg y 2 kg se mueven en la misma dirección a 4 m/s y 2 m/s respectivamente. ¿Cuál es el momento total del sistema?",
            en: "Two objects of 3 kg and 2 kg move in the same direction at 4 m/s and 2 m/s respectively. What is the total momentum of the system?",
          },
          options: [
            { es: "10 kg·m/s", en: "10 kg·m/s" },
            { es: "16 kg·m/s", en: "16 kg·m/s" },
            { es: "20 kg·m/s", en: "20 kg·m/s" },
            { es: "8 kg·m/s", en: "8 kg·m/s" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "$p_{total} = p_1 + p_2 = m_1v_1 + m_2v_2 = (3)(4) + (2)(2) = 12 + 4 = 16$ kg·m/s.",
            en: "$p_{total} = p_1 + p_2 = m_1v_1 + m_2v_2 = (3)(4) + (2)(2) = 12 + 4 = 16$ kg·m/s.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_22",
          type: "multiple-choice",
          prompt: {
            es: "En una colisión inelástica:",
            en: "In an inelastic collision:",
          },
          options: [
            {
              es: "Se conserva la energía cinética",
              en: "Kinetic energy is conserved",
            },
            {
              es: "No se conserva el momento",
              en: "Momentum is not conserved",
            },
            {
              es: "Se conserva el momento pero se pierde energía cinética",
              en: "Momentum is conserved but kinetic energy is lost",
            },
            {
              es: "Los objetos rebotan sin pérdida de energía",
              en: "Objects bounce without energy loss",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "En colisiones inelásticas se conserva el momento total, pero parte de la energía cinética se transforma en calor, deformación u otras formas de energía.",
            en: "In inelastic collisions total momentum is conserved, but part of the kinetic energy is transformed into heat, deformation or other forms of energy.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_23",
          type: "fill-blank",
          prompt: {
            es: "Los procesos _______ son aquellos en los que se pierde energía mecánica por fricción o resistencia.",
            en: "_______ processes are those in which mechanical energy is lost due to friction or resistance.",
          },
          correctAnswer: "disipativos",
          explanation: {
            es: "Los procesos disipativos convierten energía mecánica en energía térmica u otras formas no recuperables para trabajo mecánico.",
            en: "Dissipative processes convert mechanical energy into thermal energy or other forms not recoverable for mechanical work.",
          },
          difficulty: 2,
        },
        {
          id: "fis_te_24",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto de 2 kg que se mueve a 6 m/s choca y se une con otro de 4 kg en reposo. ¿Cuál es la velocidad final del conjunto?",
            en: "A 2 kg object moving at 6 m/s collides and unites with another 4 kg object at rest. What is the final velocity of the system?",
          },
          options: [
            { es: "1 m/s", en: "1 m/s" },
            { es: "2 m/s", en: "2 m/s" },
            { es: "3 m/s", en: "3 m/s" },
            { es: "6 m/s", en: "6 m/s" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Por conservación del momento: $(2)(6) + (4)(0) = (2+4)v_f \\rightarrow 12 = 6v_f \\rightarrow v_f = 2$ m/s.",
            en: "By momentum conservation: $(2)(6) + (4)(0) = (2+4)v_f \\rightarrow 12 = 6v_f \\rightarrow v_f = 2$ m/s.",
          },
          difficulty: 3,
        },
      ],
    },
  ],
};
