import type { Topic } from "@/lib/types";

export const fuerzasNewtonTopic: Topic = {
  id: "fuerzas-newton",
  slug: "fuerzas-newton",
  title: {
    es: "Fuerzas y Leyes de Newton",
    en: "Forces and Newton's Laws",
  },
  description: {
    es: "Leyes del movimiento y gravitación universal",
    en: "Laws of motion and universal gravitation",
  },
  icon: "ArrowBigRight",
  color: "purple",
  bgGradient: "bg-linear-to-br from-purple-500 to-violet-600",
  prerequisites: ["cinematica"],
  order: 2,
  lessons: [
    {
      id: "fuerzas-newton-leyes",
      topicId: "fuerzas-newton",
      order: 1,
      title: {
        es: "Leyes de Newton",
        en: "Newton's Laws",
      },
      description: {
        es: "Primera, segunda y tercera ley del movimiento",
        en: "First, second and third law of motion",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_new_01",
          type: "multiple-choice",
          prompt: {
            es: "La Primera Ley de Newton establece que:",
            en: "Newton's First Law states that:",
          },
          options: [
            {
              es: "Todo cuerpo permanece en reposo o movimiento rectilíneo uniforme a menos que actúe una fuerza",
              en: "Every body remains at rest or uniform linear motion unless a force acts",
            },
            {
              es: "La fuerza es igual a masa por aceleración",
              en: "Force equals mass times acceleration",
            },
            {
              es: "A toda acción corresponde una reacción igual y opuesta",
              en: "To every action there is an equal and opposite reaction",
            },
            {
              es: "La energía se conserva en sistemas cerrados",
              en: "Energy is conserved in closed systems",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Primera Ley de Newton o Ley de Inercia establece que un objeto permanece en su estado de movimiento (reposo o MRU) a menos que una fuerza externa actúe sobre él.",
            en: "Newton's First Law or Law of Inertia states that an object remains in its state of motion (rest or MRU) unless an external force acts on it.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_02",
          type: "multiple-choice",
          prompt: {
            es: "La Segunda Ley de Newton se expresa matemáticamente como:",
            en: "Newton's Second Law is mathematically expressed as:",
          },
          options: [
            { es: "$E = mc^2$", en: "$E = mc^2$" },
            { es: "$F = ma$", en: "$F = ma$" },
            { es: "$W = Fd$", en: "$W = Fd$" },
            { es: "$p = mv$", en: "$p = mv$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La Segunda Ley de Newton establece que la fuerza neta es igual a la masa por la aceleración: $\\vec{F} = m\\vec{a}$.",
            en: "Newton's Second Law states that net force equals mass times acceleration: $\\vec{F} = m\\vec{a}$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_03",
          type: "multiple-choice",
          prompt: {
            es: "Se aplica una fuerza de 50 N a un objeto de 10 kg. ¿Cuál es su aceleración?",
            en: "A force of 50 N is applied to a 10 kg object. What is its acceleration?",
          },
          options: [
            { es: "5 m/s²", en: "5 m/s²" },
            { es: "0.2 m/s²", en: "0.2 m/s²" },
            { es: "50 m/s²", en: "50 m/s²" },
            { es: "500 m/s²", en: "500 m/s²" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Usando $F = ma$: $a = \\frac{F}{m} = \\frac{50}{10} = 5 \\text{ m/s}^2$.",
            en: "Using $F = ma$: $a = \\frac{F}{m} = \\frac{50}{10} = 5 \\text{ m/s}^2$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_04",
          type: "true-false",
          prompt: {
            es: "La fuerza es una magnitud vectorial que tiene magnitud, dirección y sentido.",
            en: "Force is a vector quantity that has magnitude, direction and sense.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. La fuerza es un vector, por lo que para describirla completamente necesitamos conocer su magnitud, dirección y sentido.",
            en: "True. Force is a vector, so to describe it completely we need to know its magnitude, direction and sense.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_05",
          type: "multiple-choice",
          prompt: {
            es: "La Tercera Ley de Newton (acción y reacción) establece que:",
            en: "Newton's Third Law (action and reaction) states that:",
          },
          options: [
            {
              es: "Las fuerzas siempre actúan individualmente",
              en: "Forces always act individually",
            },
            {
              es: "Para cada acción hay una reacción igual en magnitud y dirección pero opuesta en sentido",
              en: "For each action there is a reaction equal in magnitude and direction but opposite in sense",
            },
            {
              es: "La fuerza de acción es mayor que la de reacción",
              en: "The action force is greater than the reaction force",
            },
            {
              es: "Las fuerzas de acción y reacción actúan sobre el mismo cuerpo",
              en: "Action and reaction forces act on the same body",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La Tercera Ley establece que si un cuerpo A ejerce una fuerza sobre B, entonces B ejerce una fuerza sobre A de igual magnitud pero en sentido opuesto. Importante: actúan sobre cuerpos diferentes.",
            en: "The Third Law states that if body A exerts a force on B, then B exerts a force on A of equal magnitude but opposite sense. Important: they act on different bodies.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_06",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué principio físico explica por qué los pasajeros se mueven hacia adelante cuando un vehículo frena bruscamente?",
            en: "What physical principle explains why passengers move forward when a vehicle brakes suddenly?",
          },
          options: [
            {
              es: "Inercia (Primera Ley de Newton)",
              en: "Inertia (Newton's First Law)",
            },
            { es: "Acción y reacción", en: "Action and reaction" },
            { es: "Conservación de energía", en: "Conservation of energy" },
            { es: "Gravitación", en: "Gravitation" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Por inercia, los pasajeros tienden a mantener su estado de movimiento cuando el vehículo frena. Como el vehículo desacelera pero ellos no, continúan hacia adelante.",
            en: "By inertia, passengers tend to maintain their state of motion when the vehicle brakes. As the vehicle decelerates but they don't, they continue forward.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_07",
          type: "fill-blank",
          prompt: {
            es: "Cuando dos o más fuerzas actúan sobre un objeto, el resultado es la fuerza _______, que es la suma vectorial de todas las fuerzas.",
            en: "When two or more forces act on an object, the result is the _______ force, which is the vector sum of all forces.",
          },
          correctAnswer: "neta",
          explanation: {
            es: "La fuerza neta o fuerza resultante es la suma vectorial de todas las fuerzas que actúan sobre un objeto.",
            en: "The net force or resultant force is the vector sum of all forces acting on an object.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_08",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto de 5 kg está en reposo sobre una mesa horizontal. ¿Cuál es la magnitud de la fuerza normal que ejerce la mesa? (g = 10 m/s²)",
            en: "A 5 kg object is at rest on a horizontal table. What is the magnitude of the normal force exerted by the table? (g = 10 m/s²)",
          },
          options: [
            { es: "5 N", en: "5 N" },
            { es: "10 N", en: "10 N" },
            { es: "50 N", en: "50 N" },
            { es: "0 N", en: "0 N" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El peso es $W = mg = 5 \\times 10 = 50$ N hacia abajo. Como el objeto está en equilibrio, la fuerza normal debe ser igual al peso: 50 N hacia arriba.",
            en: "The weight is $W = mg = 5 \\times 10 = 50$ N downward. As the object is in equilibrium, the normal force must equal the weight: 50 N upward.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "fuerzas-newton-equilibrio",
      topicId: "fuerzas-newton",
      order: 2,
      title: {
        es: "Equilibrio y Resortes",
        en: "Equilibrium and Springs",
      },
      description: {
        es: "Equilibrio traslacional, rotacional y Ley de Hooke",
        en: "Translational, rotational equilibrium and Hooke's Law",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_new_09",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto está en equilibrio traslacional cuando:",
            en: "An object is in translational equilibrium when:",
          },
          options: [
            {
              es: "La suma vectorial de todas las fuerzas es cero",
              en: "The vector sum of all forces is zero",
            },
            {
              es: "Está en movimiento rectilíneo uniforme",
              en: "It is in uniform linear motion",
            },
            {
              es: "No hay fuerzas actuando sobre él",
              en: "There are no forces acting on it",
            },
            { es: "Todas las anteriores", en: "All of the above" },
          ],
          correctAnswer: "3",
          explanation: {
            es: "Un objeto está en equilibrio traslacional cuando $\\sum \\vec{F} = 0$, lo que ocurre tanto en reposo como en MRU. También puede significar ausencia de fuerzas.",
            en: "An object is in translational equilibrium when $\\sum \\vec{F} = 0$, which occurs both at rest and in MRU. It can also mean absence of forces.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_10",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Hooke para un resorte se expresa como:",
            en: "Hooke's Law for a spring is expressed as:",
          },
          options: [
            { es: "$F = -kx$", en: "$F = -kx$" },
            { es: "$F = ma$", en: "$F = ma$" },
            {
              es: "$F = \\frac{kq_1q_2}{r^2}$",
              en: "$F = \\frac{kq_1q_2}{r^2}$",
            },
            { es: "$F = mg$", en: "$F = mg$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Ley de Hooke establece que la fuerza restauradora de un resorte es proporcional a su deformación: $F = -kx$, donde $k$ es la constante elástica y $x$ la deformación.",
            en: "Hooke's Law states that the restoring force of a spring is proportional to its deformation: $F = -kx$, where $k$ is the elastic constant and $x$ the deformation.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_11",
          type: "multiple-choice",
          prompt: {
            es: "Un resorte con constante elástica k = 200 N/m se estira 0.1 m. ¿Cuál es la magnitud de la fuerza restauradora?",
            en: "A spring with elastic constant k = 200 N/m is stretched 0.1 m. What is the magnitude of the restoring force?",
          },
          options: [
            { es: "2 N", en: "2 N" },
            { es: "20 N", en: "20 N" },
            { es: "200 N", en: "200 N" },
            { es: "2000 N", en: "2000 N" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Usando $F = kx = 200 \\times 0.1 = 20$ N.",
            en: "Using $F = kx = 200 \\times 0.1 = 20$ N.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_12",
          type: "true-false",
          prompt: {
            es: "El equilibrio rotacional se alcanza cuando la suma de todos los torques o momentos de fuerza es cero.",
            en: "Rotational equilibrium is achieved when the sum of all torques or moments of force is zero.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Para equilibrio rotacional se requiere $\\sum \\tau = 0$, donde $\\tau$ es el torque (momento de fuerza).",
            en: "True. For rotational equilibrium $\\sum \\tau = 0$ is required, where $\\tau$ is the torque (moment of force).",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_13",
          type: "multiple-choice",
          prompt: {
            es: "Una viga de 4 m está apoyada en su punto medio. Si se colocan 10 N a 1 m a la izquierda del apoyo, ¿qué fuerza se necesita a 2 m a la derecha para mantener el equilibrio?",
            en: "A 4 m beam is supported at its midpoint. If 10 N is placed 1 m to the left of the support, what force is needed 2 m to the right to maintain equilibrium?",
          },
          options: [
            { es: "5 N", en: "5 N" },
            { es: "10 N", en: "10 N" },
            { es: "20 N", en: "20 N" },
            { es: "40 N", en: "40 N" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Para equilibrio rotacional: $\\tau_1 = \\tau_2 \\rightarrow F_1 d_1 = F_2 d_2 \\rightarrow 10 \\times 1 = F_2 \\times 2 \\rightarrow F_2 = 5$ N.",
            en: "For rotational equilibrium: $\\tau_1 = \\tau_2 \\rightarrow F_1 d_1 = F_2 d_2 \\rightarrow 10 \\times 1 = F_2 \\times 2 \\rightarrow F_2 = 5$ N.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_14",
          type: "multiple-choice",
          prompt: {
            es: "El signo negativo en la Ley de Hooke ($F = -kx$) indica que:",
            en: "The negative sign in Hooke's Law ($F = -kx$) indicates that:",
          },
          options: [
            {
              es: "La fuerza siempre es negativa",
              en: "The force is always negative",
            },
            {
              es: "La fuerza restauradora se opone a la deformación",
              en: "The restoring force opposes the deformation",
            },
            {
              es: "El resorte no puede comprimirse",
              en: "The spring cannot be compressed",
            },
            {
              es: "La constante k es negativa",
              en: "The constant k is negative",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El signo negativo indica que la fuerza restauradora siempre actúa en dirección opuesta al desplazamiento, intentando regresar el resorte a su posición natural.",
            en: "The negative sign indicates that the restoring force always acts in the opposite direction to the displacement, trying to return the spring to its natural position.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_15",
          type: "fill-blank",
          prompt: {
            es: "La constante elástica k en la Ley de Hooke se mide en unidades de _______.",
            en: "The elastic constant k in Hooke's Law is measured in units of _______.",
          },
          correctAnswer: "N/m",
          explanation: {
            es: "De la ecuación $F = kx$, despejando: $k = \\frac{F}{x}$, por lo tanto las unidades son Newton por metro (N/m).",
            en: "From the equation $F = kx$, solving: $k = \\frac{F}{x}$, therefore the units are Newton per meter (N/m).",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_16",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto colgado de un resorte está en equilibrio cuando:",
            en: "An object hanging from a spring is in equilibrium when:",
          },
          options: [
            {
              es: "La fuerza del resorte es mayor que el peso",
              en: "The spring force is greater than the weight",
            },
            {
              es: "La fuerza del resorte es igual al peso",
              en: "The spring force equals the weight",
            },
            {
              es: "La fuerza del resorte es menor que el peso",
              en: "The spring force is less than the weight",
            },
            { es: "No hay fuerzas actuando", en: "There are no forces acting" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "En equilibrio, la fuerza restauradora del resorte hacia arriba debe igualar el peso hacia abajo: $kx = mg$.",
            en: "In equilibrium, the upward restoring force of the spring must equal the downward weight: $kx = mg$.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "fuerzas-newton-gravitacion",
      topicId: "fuerzas-newton",
      order: 3,
      title: {
        es: "Gravitación Universal",
        en: "Universal Gravitation",
      },
      description: {
        es: "Ley de gravitación y movimiento de planetas",
        en: "Law of gravitation and planetary motion",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_new_17",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de la Gravitación Universal de Newton establece que:",
            en: "Newton's Law of Universal Gravitation states that:",
          },
          options: [
            {
              es: "Dos masas se atraen con una fuerza proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia",
              en: "Two masses attract with a force proportional to the product of their masses and inversely proportional to the square of the distance",
            },
            {
              es: "La gravedad solo actúa en la Tierra",
              en: "Gravity only acts on Earth",
            },
            {
              es: "La fuerza gravitacional es repulsiva",
              en: "Gravitational force is repulsive",
            },
            {
              es: "La gravedad depende de la velocidad de los objetos",
              en: "Gravity depends on the velocity of objects",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Ley de Gravitación Universal: $F = G\\frac{m_1 m_2}{r^2}$, donde $G = 6.67 \\times 10^{-11} \\text{ N·m}^2/\\text{kg}^2$ es la constante gravitacional.",
            en: "The Law of Universal Gravitation: $F = G\\frac{m_1 m_2}{r^2}$, where $G = 6.67 \\times 10^{-11} \\text{ N·m}^2/\\text{kg}^2$ is the gravitational constant.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_18",
          type: "multiple-choice",
          prompt: {
            es: "Si la distancia entre dos masas se duplica, la fuerza gravitacional entre ellas:",
            en: "If the distance between two masses doubles, the gravitational force between them:",
          },
          options: [
            { es: "Se reduce a la mitad", en: "Is reduced by half" },
            {
              es: "Se reduce a la cuarta parte",
              en: "Is reduced to one quarter",
            },
            { es: "Se duplica", en: "Doubles" },
            { es: "Permanece igual", en: "Remains the same" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Como $F \\propto \\frac{1}{r^2}$, si $r$ se duplica ($2r$), entonces $F' = \\frac{F}{(2)^2} = \\frac{F}{4}$.",
            en: "Since $F \\propto \\frac{1}{r^2}$, if $r$ doubles ($2r$), then $F' = \\frac{F}{(2)^2} = \\frac{F}{4}$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_19",
          type: "true-false",
          prompt: {
            es: "El peso de un objeto es la fuerza gravitacional que la Tierra ejerce sobre él.",
            en: "The weight of an object is the gravitational force that Earth exerts on it.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. El peso $W = mg$ es la fuerza gravitacional. En la superficie terrestre, $g = \\frac{GM_{Tierra}}{R_{Tierra}^2} \\approx 9.8 \\text{ m/s}^2$.",
            en: "True. Weight $W = mg$ is the gravitational force. On Earth's surface, $g = \\frac{GM_{Earth}}{R_{Earth}^2} \\approx 9.8 \\text{ m/s}^2$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_20",
          type: "multiple-choice",
          prompt: {
            es: "Un astronauta tiene una masa de 80 kg en la Tierra. ¿Cuál será su masa en la Luna?",
            en: "An astronaut has a mass of 80 kg on Earth. What will be their mass on the Moon?",
          },
          options: [
            { es: "80 kg", en: "80 kg" },
            { es: "13.3 kg", en: "13.3 kg" },
            { es: "480 kg", en: "480 kg" },
            { es: "0 kg", en: "0 kg" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La masa es una propiedad intrínseca del objeto y no cambia con la ubicación. Permanece en 80 kg. Lo que cambia es el peso.",
            en: "Mass is an intrinsic property of the object and does not change with location. It remains 80 kg. What changes is the weight.",
          },
          difficulty: 1,
        },
        {
          id: "fis_new_21",
          type: "multiple-choice",
          prompt: {
            es: "La aceleración gravitacional en la superficie de un planeta depende de:",
            en: "The gravitational acceleration on the surface of a planet depends on:",
          },
          options: [
            { es: "Solo la masa del planeta", en: "Only the planet's mass" },
            { es: "Solo el radio del planeta", en: "Only the planet's radius" },
            {
              es: "La masa y el radio del planeta",
              en: "The planet's mass and radius",
            },
            {
              es: "La velocidad de rotación del planeta",
              en: "The planet's rotation speed",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La aceleración gravitacional en la superficie es $g = \\frac{GM}{R^2}$, donde $M$ es la masa y $R$ el radio del planeta.",
            en: "The gravitational acceleration on the surface is $g = \\frac{GM}{R^2}$, where $M$ is the mass and $R$ the radius of the planet.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_22",
          type: "order-steps",
          prompt: {
            es: "Ordena los planetas del Sistema Solar de menor a mayor fuerza gravitacional en su superficie:",
            en: "Order the planets of the Solar System from lowest to highest gravitational force on their surface:",
          },
          options: [
            { es: "Marte (3.7 m/s²)", en: "Mars (3.7 m/s²)" },
            { es: "Tierra (9.8 m/s²)", en: "Earth (9.8 m/s²)" },
            { es: "Júpiter (24.8 m/s²)", en: "Jupiter (24.8 m/s²)" },
            { es: "Neptuno (11.2 m/s²)", en: "Neptune (11.2 m/s²)" },
          ],
          correctAnswer: "0,1,3,2",
          explanation: {
            es: "Ordenados por gravedad superficial: Marte < Tierra < Neptuno < Júpiter. Júpiter tiene la mayor gravedad debido a su gran masa.",
            en: "Ordered by surface gravity: Mars < Earth < Neptune < Jupiter. Jupiter has the greatest gravity due to its large mass.",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_23",
          type: "fill-blank",
          prompt: {
            es: "La constante de gravitación universal G tiene un valor aproximado de 6.67 × 10⁻¹¹ _______.",
            en: "The universal gravitation constant G has an approximate value of 6.67 × 10⁻¹¹ _______.",
          },
          correctAnswer: "N·m²/kg²",
          explanation: {
            es: "Las unidades de G se derivan de $F = G\\frac{m_1 m_2}{r^2}$: $G = \\frac{Fr^2}{m_1 m_2}$, resultando en N·m²/kg².",
            en: "The units of G are derived from $F = G\\frac{m_1 m_2}{r^2}$: $G = \\frac{Fr^2}{m_1 m_2}$, resulting in N·m²/kg².",
          },
          difficulty: 2,
        },
        {
          id: "fis_new_24",
          type: "multiple-choice",
          prompt: {
            es: "Los satélites en órbita alrededor de la Tierra:",
            en: "Satellites in orbit around Earth:",
          },
          options: [
            { es: "No experimentan gravedad", en: "Do not experience gravity" },
            {
              es: "Están en caída libre continua hacia la Tierra",
              en: "Are in continuous free fall toward Earth",
            },
            { es: "Tienen gravedad cero", en: "Have zero gravity" },
            {
              es: "Flotan porque no hay aire",
              en: "Float because there is no air",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: 'Los satélites están en caída libre, pero su velocidad tangencial hace que "fallen alrededor" de la Tierra constantemente, manteniéndose en órbita. La gravedad proporciona la fuerza centrípeta necesaria.',
            en: 'Satellites are in free fall, but their tangential velocity makes them "fall around" Earth constantly, staying in orbit. Gravity provides the necessary centripetal force.',
          },
          difficulty: 3,
        },
      ],
    },
  ],
};
